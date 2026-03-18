# Federico Frade — Professional Portfolio

A fast, accessible single-page application that showcases the professional profile of **Federico Frade** — Systems Engineer focused on **full-stack development** and **DevOps**. This repository is both the **source of the live site** and a **sample of how I structure front-end work**: clear layout, maintainable CSS, and deployment automation.

**Live site:** [fedefrade.com](https://fedefrade.com)

---

## Why this repo exists

If you are a **recruiter** or **hiring manager**, the deployed site is the quickest way to see experience, stack, and projects in one place. If you are **technical**, this codebase shows a small but intentional React app: no framework bloat, explicit sections, and CI/CD to static hosting.

---

## Tech stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| Runtime     | React 18                        |
| Build tool  | Vite 5                          |
| Styling     | Plain CSS                         |
| i18n        | English / Spanish               |
| UX          | Light & dark theme, responsive layout |
| Hosting     | Static build → GitHub Pages     |

---

## Features

- **About** — Profile and languages  
- **Experience** — Career timeline  
- **Technologies** — Stack with filtering / carousel  
- **Projects** — Selected personal work  
- **Footer** — Contact links (email, LinkedIn, GitHub)  
- **Internationalization** — UI copy driven by locale JSON files  
- **Theme** — Persists in `localStorage`  

---

## Getting started

**Requirements:** Node.js 18+ (or any LTS that runs Vite 5)

```bash
git clone git@github.com:fedefrade/fedefrade-professional-portfolio.git
cd fedefrade-professional-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Script        | Description        |
| ------------- | ------------------ |
| `npm run dev` | Development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |

---

## Deployment

Pushes to `main` trigger **GitHub Actions**, which builds with Vite and publishes to **GitHub Pages**. The site is configured for a **custom domain at the root** (`base: '/'` in `vite.config.js`). For a project-only GitHub Pages URL, adjust `base` to match the repository path.

---

## Project structure (high level)

```
src/
  components/     # Header, Footer, shared UI
  sections/         # About, Experience, Technologies, Projects
  i18n/             # Locale context + en.json / es.json
  context/          # Theme provider
  data/             # Structured content (e.g. technologies)
  styles/           # Global CSS and theme variables
public/             # Static assets (favicon, contact icons, etc.)
```

---

## Contact

**Federico Frade** — full-stack & DevOps-oriented engineer.  
- [LinkedIn](https://www.linkedin.com/in/federico-frade-full-stack-senior-developer)
- [Github](https://github.com/fedefrade)
- [GMail](fedefrade21@gmail.com)

---

*Built with Vite, React, and CSS — shipped as static assets for speed and simplicity.*
