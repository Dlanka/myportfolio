# Darshaka Lanka — Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS v4.

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | v4 (CSS-first, `@tailwindcss/vite`) |
| lucide-react | latest |

---

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn (`npm install -g yarn`)

### Install dependencies

```bash
yarn
```

### Development server

```bash
yarn dev
```

Opens at `http://localhost:5173`.

### Production build

```bash
yarn build
```

Output is written to the `dist/` directory.

### Preview production build locally

```bash
yarn preview
```

---

## Configuration

All personal details and external links live in one file:

```
src/data/site.ts
```

Open that file and replace the `TODO` placeholders with your real values:

```ts
links: {
  upwork: 'https://www.upwork.com/freelancers/~yourprofile',
  email:  'mailto:you@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername',
},
```

Leave any field as `""` to hide that link from the site — no broken links will appear.

### Projects

Edit `src/data/projects.ts` to add, remove, or modify projects.

### Services & Skills

Edit `src/data/services.ts` to update services and the skills list.

---

## Publishing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

---

## Deploy to Cloudflare Pages (free tier)

1. Push the repository to GitHub (see above).
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com/).
3. Click **Create a project → Connect to Git**.
4. Select your repository.
5. Configure the build settings:

| Setting | Value |
|---------|-------|
| Framework preset | None (or Vite) |
| Build command | `yarn build` |
| Build output directory | `dist` |
| Node.js version | 20 |

6. Click **Save and Deploy**.

Cloudflare Pages will automatically redeploy on every push to `main`.

### Environment variables

This project has no secrets or environment variables. All configuration is in source files.

---

## Project Structure

```
src/
  components/
    Navbar.tsx       – Sticky navbar with mobile menu
    Hero.tsx         – Hero section with CTAs and stats
    ProjectCard.tsx  – Individual project card with CSS preview mockup
    Projects.tsx     – Projects grid section
    Services.tsx     – Services section
    About.tsx        – Bio, skills, and experience timeline
    Contact.tsx      – Contact CTAs (Upwork / email)
    Footer.tsx       – Footer with copyright and social links
  data/
    projects.ts      – Project data
    services.ts      – Services and skills data
    site.ts          – ⭐ Personal config — edit this first
  App.tsx
  main.tsx
  index.css          – Tailwind v4 CSS-first config + global styles
public/
  favicon.svg
index.html
vite.config.ts
```

---

## Tailwind CSS v4 Notes

This project uses Tailwind CSS v4's **CSS-first configuration** via `@tailwindcss/vite`. There is no `tailwind.config.js`. All design tokens are defined using `@theme` inside `src/index.css`.

```css
@import "tailwindcss";

@theme {
  --color-accent: #b8a1ff;
  --font-sans: 'Manrope', ui-sans-serif, system-ui, sans-serif;
  /* ... */
}
```

---

## License

MIT — feel free to fork and adapt for your own portfolio.
