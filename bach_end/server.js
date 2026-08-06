import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import { normalizeEmail, validateCredentials } from "./auth-utils.mjs";

const app = express();
app.use(cors());
app.use(express.json());

const connection = await mysql.createConnection(
    process.env.MYSQL_URL
        ? process.env.MYSQL_URL
        : {
            host: process.env.MYSQLHOST || "localhost",
            user: process.env.MYSQLUSER || "root",
            password: process.env.MYSQLPASSWORD || "",
            database: process.env.MYSQLDATABASE || "waww",
            port: Number(process.env.MYSQLPORT) || 3306,
        }
);

const ensureUserSchema = async () => {
    try {
        const [columns] = await connection.execute("SHOW COLUMNS FROM users LIKE 'role'");
        if (columns.length === 0) {
            await connection.execute("ALTER TABLE users ADD COLUMN role VARCHAR(50) NOT NULL DEFAULT 'user'");
        }
    } catch (error) {
        console.error("Unable to ensure users.role column exists:", error);
    }
};

await ensureUserSchema();

const ensureUserBooksSchema = async () => {
    try {
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS user_books (
                user_id INT NOT NULL,
                book_id INT NOT NULL,
                status VARCHAR(20) NOT NULL DEFAULT 'want_to_read',
                user_rating DECIMAL(3,1) DEFAULT NULL,
                PRIMARY KEY (user_id, book_id)
            )
        `);
    } catch (error) {
        console.error("Unable to ensure user_books table:", error);
    }
};

await ensureUserBooksSchema();

app.get(
    "/api/books",
    async (req, res) => {
        const [rows] = await connection.execute("SELECT * FROM books");
        res.json(rows);
    }
);

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body ?? {};
    const validation = validateCredentials(email, password);

    if (!validation.ok) {
        return res.status(400).json({ success: false, message: validation.error });
    }

    const normalizedEmail = validation.normalizedEmail;

    try {
        const [rows] = await connection.execute(
            "SELECT id, email, password, role FROM users WHERE email = ? LIMIT 1",
            [normalizedEmail]
        );

        const user = rows[0];

        if (!user || user.password !== String(password).trim()) {
            return res.status(401).json({ success: false, message: "Invalid email or password." });
        }

        sendSignInEmail(user.email);

        return res.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                role: user.role ?? "user",
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, message: "Unable to sign in right now." });
    }
});

app.post("/api/auth/signup", async (req, res) => {
    const { email, password } = req.body ?? {};
    const validation = validateCredentials(email, password);

    if (!validation.ok) {
        return res.status(400).json({ success: false, message: validation.error });
    }

    const normalizedEmail = validation.normalizedEmail;

    try {
        const [existing] = await connection.execute(
            "SELECT id FROM users WHERE email = ? LIMIT 1",
            [normalizedEmail]
        );

        if (existing.length > 0) {
            return res.status(409).json({ success: false, message: "An account with that email already exists." });
        }

        await connection.execute(
            "INSERT INTO users (email, password, role) VALUES (?, ?, 'user')",
            [normalizedEmail, String(password).trim()]
        );

        sendWelcomeEmail(normalizedEmail);

        return res.status(201).json({
            success: true,
            message: "Account created successfully.",
            user: {
                email: normalizedEmail,
                role: "user",
            },
        });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ success: false, message: "Unable to create account right now." });
    }
});

app.delete("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await connection.execute("DELETE FROM books WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Book not found." });
        }
        return res.json({ success: true });
    } catch (error) {
        console.error("Delete book error:", error);
        return res.status(500).json({ success: false, message: "Unable to delete book." });
    }
});

app.get("/api/users/:userId/books", async (req, res) => {
    const { userId } = req.params;
    try {
        const [rows] = await connection.execute(
            `SELECT ub.book_id, ub.status, ub.user_rating,
                    b.name, b.image, b.publisher, b.publish_date, b.goodreads_rating, b.genres, b.back_cover_story
             FROM user_books ub
             JOIN books b ON b.id = ub.book_id
             WHERE ub.user_id = ?`,
            [userId]
        );
        return res.json(rows);
    } catch (error) {
        console.error("Get user books error:", error);
        return res.status(500).json({ success: false, message: "Unable to load books." });
    }
});

app.post("/api/users/:userId/books", async (req, res) => {
    const { userId } = req.params;
    const { bookId, status, userRating } = req.body ?? {};
    const clampedRating = userRating != null ? Math.min(5, Math.max(0, Number(userRating))) : null;
    try {
        await connection.execute(
            `INSERT INTO user_books (user_id, book_id, status, user_rating) VALUES (?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE status = VALUES(status), user_rating = VALUES(user_rating)`,
            [userId, bookId, status, clampedRating]
        );
        return res.json({ success: true });
    } catch (error) {
        console.error("Save user book error:", error);
        return res.status(500).json({ success: false, message: "Unable to save book." });
    }
});

app.delete("/api/users/:userId/books/:bookId", async (req, res) => {
    const { userId, bookId } = req.params;
    try {
        await connection.execute(
            "DELETE FROM user_books WHERE user_id = ? AND book_id = ?",
            [userId, bookId]
        );
        return res.json({ success: true });
    } catch (error) {
        console.error("Remove user book error:", error);
        return res.status(500).json({ success: false, message: "Unable to remove book." });
    }
});

app.put("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    const { name, image, publisher, publish_date, goodreads_rating, genres, back_cover_story } = req.body ?? {};
    const genresJson = JSON.stringify(Array.isArray(genres) ? genres : []);
    try {
        const [result] = await connection.execute(
            "UPDATE books SET name = ?, image = ?, publisher = ?, publish_date = ?, goodreads_rating = ?, genres = ?, back_cover_story = ? WHERE id = ?",
            [name, image, publisher, publish_date, goodreads_rating, genresJson, back_cover_story, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Book not found." });
        }
        return res.json({ success: true });
    } catch (error) {
        console.error("Update book error:", error);
        return res.status(500).json({ success: false, message: "Unable to update book." });
    }
});

app.listen(
    process.env.PORT || 5000,
    () => {
        console.log(`API running on port http://localhost:${process.env.PORT || 5000}`);
    }
);