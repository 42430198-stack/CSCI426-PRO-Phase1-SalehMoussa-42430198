# CSCI426-PRO-SalehMoussa-42430198
**Student:** Saleh Moussa &nbsp;|&nbsp; **ID:** 42430198

## Project Description
A full-stack library management web application built with React and Node.js/Express backed by a MySQL database.

## Features
### All Users
- Browse and search the books catalog by name, publisher, or genre
- View detailed book information with Goodreads star rating
- Personal reading list (**My Books** page) — mark books as *Want to Read* or *Already Read* with a personal rating (0 – 5)

### Admin Only
- Add, edit, and delete books via the **Editing** page
- Editing link is hidden from regular users and the route is protected

### Authentication
- Sign up / Log in with email and password
- Session-based authentication (stored in `sessionStorage`)
- Role-based access control (`user` / `admin`)

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 18, React Router, Axios, MUI |
| Backend | Node.js, Express 5 |
| Database | MySQL (mysql2) |

## Project Structure
```
├── bach_end/          # Express API server
│   ├── server.js      # All routes (books, auth, user reading list)
│   └── auth-utils.mjs # Email validation helpers
└── front_end/         # React application
    └── src/
        ├── pages/
        │   ├── Home.jsx
        │   ├── BookDetails.jsx   # Want-to-Read / Already-Read buttons
        │   ├── MyBooks.jsx       # User reading list table
        │   ├── editing.jsx       # Admin book management
        │   └── Login.jsx
        └── components/
            └── NavBar.jsx        # Role-aware navigation
```

## Database Tables
| Table | Purpose |
|---|---|
| `books` | Book catalog |
| `users` | Accounts with `email`, `password`, `role` |
| `user_books` | Per-user reading list with `status` and `user_rating` |

## Setup Instructions

### Backend
```bash
cd bach_end
npm install
node server.js
# API runs on http://localhost:5000
```

### Frontend
```bash
cd front_end
npm install
npm start
# App runs on http://localhost:3000
```

> Make sure MySQL is running and a database named `waww` exists before starting the backend. The server auto-creates the required tables on startup.

## Screenshots

### Login Page
![Login Page](front_end/docs/screenshots/login-page.png)

### Home Page
![Home Page](front_end/docs/screenshots/home-page.png)

### Book Details Page
![Book Details Page](front_end/docs/screenshots/book-details-page.png)

### My Books Page
![My Books Page](front_end/docs/screenshots/my-books-page.png)

### About Page
![About Page](front_end/docs/screenshots/about-page.png)


## Git Version Control And Commit History
This project uses Git.

Useful commands:

```bash
git status
git log --oneline --decorate --graph -n 20
```

Commit workflow:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

## Deployment

### Frontend on GitHub Pages

1. Install dependencies:
```bash
cd front_end
npm install
```

2. Build and publish to GitHub Pages:
```bash
npm run deploy
```

3. In GitHub repository settings:
- Open **Settings** -> **Pages**
- Set source to branch `gh-pages` (if not selected automatically)

4. Frontend URL format:
```text
https://<your-github-username>.github.io/CSCI426-PRO-SalehMoussa-42430198/
```

### Backend on Render

1. Push the full project to GitHub:
```bash
git add .
git commit -m "Prepare GitHub Pages frontend and Render backend deployment"
git push origin master
```

2. In Render:
- Click **New** -> **Web Service**
- Connect your GitHub repository
- Root directory: `bach_end`
- Build command: `npm install`
- Start command: `npm start`

3. Add environment variables in Render service:
- `MYSQL_URL` (recommended single connection string)
    - or set all of: `MYSQLHOST`, `MYSQLUSER`, `MYSQLPASSWORD`, `MYSQLDATABASE`, `MYSQLPORT`
- `PORT` is provided by Render automatically

4. After deployment, test backend:
```text
https://<your-render-service>.onrender.com/api/books
```

### Connect Frontend to Render Backend

Before building GitHub Pages, set API base URL:

Windows PowerShell:
```powershell
$env:REACT_APP_API_BASE_URL="https://<your-render-service>.onrender.com/api"
npm run deploy
```

This ensures the frontend calls your Render backend instead of local `/api` routes.
