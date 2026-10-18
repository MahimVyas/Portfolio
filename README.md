# Mahim Vyas — Portfolio

Personal portfolio site, rebuilt as a modern **Next.js (App Router)** application with a full visual redesign, motion, and automatic light/dark theming.

🔗 **Live:** [mahimvyas.github.io/Portfolio](https://mahimvyas.github.io/Portfolio)

## Highlights

- **React / Next.js 16** — App Router, React Server Components, static export, React Compiler
- **Automatic light & dark mode** — follows the device's system preference live; a fixed toggle in the top-right corner lets visitors force light/dark/system (persisted in `localStorage`)
- **Motion** — Framer Motion scroll reveals, animated timeline, hero role rotator, scroll-progress bar, pointer-following card glows (all respecting `prefers-reduced-motion`)
- **Icons** — [Lucide](https://lucide.dev) for UI/sections, Font Awesome & Simple Icons for GitHub/LinkedIn/CodeChef brand marks
- **Typography** — Sora for display headings, Geist Sans/Mono for body and code chips via `next/font`
- **A11y** — skip-to-content link, focus-visible outlines, semantic landmarks, reduced-motion support

## Tech stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, static export)        |
| UI         | React 19, TypeScript                          |
| Styling    | Tailwind CSS v4                               |
| Animation  | Framer Motion                                 |
| Icons      | lucide-react, react-icons                     |
| Hosting    | GitHub Pages (Actions workflow)               |

## Development

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:3000/Portfolio
npm run build     # static export → out/
npm run lint      # eslint
```

> The site is served from `/Portfolio` (GitHub Pages project path), configured via `basePath` in `next.config.ts`. Remove `basePath` if you deploy to a custom domain.

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # fonts, metadata, theme init script, chrome
│   ├── page.tsx        # section composition
│   ├── globals.css     # Tailwind theme, dark variant, components
│   └── icon.svg        # MV monogram favicon
├── components/         # Hero, About, Skills, Projects, Journey, Interests,
│                       # Contact, Footer + floating theme toggle & motion
│                       # primitives
└── data/site.ts        # all resume content in one place
```

## Theming

An inline script in `layout.tsx` runs before first paint:

1. Reads `localStorage.theme` (`system` by default)
2. Applies `dark` class on `<html>` based on `prefers-color-scheme`
3. Keeps listening for system changes while in `system` mode

## Deployment

Pushes to `main` build and deploy automatically via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
One-time setup: **Settings → Pages → Source → GitHub Actions**.

## Content

All copy, projects, skills and resume details live in
[`src/data/site.ts`](src/data/site.ts) — edit that single file to update the site.

## License

MIT © 2026 Mahim Vyas
