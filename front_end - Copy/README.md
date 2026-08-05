# Book Browser Frontend

## Project Description
This is a React frontend for browsing and managing a books catalog.

Main features:
- Home page with dynamic genre filter and search support.
- Book details page with metadata, story, and rating display.
- Editing module to add, edit, and delete books.
- Shared app state so updates are reflected across pages.

## Setup Instructions
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Build production bundle:

```bash
npm run build
```

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

## Frontend Hosting (GitHub Pages)
The project is configured for GitHub Pages deployment.

1. In `package.json`, set this field to your real repository path:

```json
"homepage": "https://<your-github-username>.github.io/<your-repo-name>"
```

2. Ensure your project has a GitHub remote and push your code:

```bash
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
git push -u origin master
```

3. Deploy:

```bash
npm run deploy
```

4. In GitHub repository settings:
- Open `Settings` -> `Pages`.
- Set source to `gh-pages` branch (if not auto-selected).

## Screenshots Of The UI

### Home Page
![Home Page](docs/screenshots/home-page.png)

### Editing Page
![Editing Page](docs/screenshots/editing-page.png)
