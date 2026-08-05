START TRANSACTION;

CREATE TABLE IF NOT EXISTS genres (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_genres_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS book_genres (
  book_id INT NOT NULL,
  genre_id INT NOT NULL,
  PRIMARY KEY (book_id, genre_id),
  KEY idx_book_genres_genre_id (genre_id),
  CONSTRAINT fk_book_genres_book FOREIGN KEY (book_id) REFERENCES books(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_book_genres_genre FOREIGN KEY (genre_id) REFERENCES genres(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'user',
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DELETE FROM book_genres;

INSERT INTO genres (name)
SELECT DISTINCT t.genre_name
FROM (
  SELECT
    TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(cleaned, ',', n.n), ',', -1)) AS genre_name
  FROM (
    SELECT TRIM(BOTH ',' FROM REPLACE(REPLACE(REPLACE(genres, '[', ''), ']', ''), '"', '')) AS cleaned
    FROM books
  ) b
  JOIN (
    SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5
    UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 UNION ALL SELECT 10
  ) n
    ON b.cleaned <> ''
   AND n.n <= 1 + LENGTH(b.cleaned) - LENGTH(REPLACE(b.cleaned, ',', ''))
) t
WHERE t.genre_name <> ''
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT IGNORE INTO book_genres (book_id, genre_id)
SELECT b.id, g.id
FROM books b
JOIN (
  SELECT
    b2.id AS book_id,
    TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(cleaned, ',', n.n), ',', -1)) AS genre_name
  FROM (
    SELECT id, TRIM(BOTH ',' FROM REPLACE(REPLACE(REPLACE(genres, '[', ''), ']', ''), '"', '')) AS cleaned
    FROM books
  ) b2
  JOIN (
    SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5
    UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 UNION ALL SELECT 10
  ) n
    ON b2.cleaned <> ''
   AND n.n <= 1 + LENGTH(b2.cleaned) - LENGTH(REPLACE(b2.cleaned, ',', ''))
) parsed
  ON parsed.book_id = b.id
JOIN genres g
  ON g.name = parsed.genre_name
WHERE parsed.genre_name <> '';

INSERT INTO users (email, password, role)
VALUES
  ('admin@admin.com', '123', 'admin'),
  ('saleh1moussa2006@gmail.com', 'sss123', 'user')
ON DUPLICATE KEY UPDATE password = VALUES(password), role = VALUES(role);

COMMIT;

SELECT COUNT(*) AS genre_count FROM genres;
SELECT COUNT(*) AS book_genre_links FROM book_genres;
SELECT COUNT(*) AS user_count FROM users;
SELECT b.id, b.name, GROUP_CONCAT(g.name ORDER BY g.name SEPARATOR ', ') AS genres
FROM books b
LEFT JOIN book_genres bg ON bg.book_id = b.id
LEFT JOIN genres g ON g.id = bg.genre_id
GROUP BY b.id, b.name
ORDER BY b.id
LIMIT 5;
