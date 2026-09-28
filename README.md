# armel-portfolio

My personal developer portfolio, live at [armel-portfolio-peach.vercel.app](https://armel-portfolio-peach.vercel.app).

Built with React, TypeScript, Vite and Tailwind CSS. Available in French (default) and English.

## Features

- FR / EN language switch, saved in `localStorage`
- Light and dark themes, applied before first paint (no flash)
- Shareable project pages through hash routing (`#projet/<slug>`), with working browser back button
- Project content kept separate from the UI in `src/data/projects.ts`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/   # Navbar, toggles, project detail page, reveal animation
├── sections/     # Hero, About, Stack, Projects, LearningJourney, Contact
├── data/         # projects.ts (bilingual project content)
├── i18n/         # translations + language context
├── hooks/        # useTheme (shared theme store)
└── index.css     # color tokens for light and dark mode
```

## Adding a project

Add one object with `fr` and `en` content to `src/data/projects.ts`. Screenshots go in `public/projects/` and are referenced through the `image` field.

## Colors

Colors are CSS variables in `src/index.css` (`--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`), mapped into Tailwind in `tailwind.config.js`. Edit the `:root` and `.dark` blocks to change the palette.

## Author

Laurencelle Louis Armel Akpa · [GitHub](https://github.com/laurencelle14) · [LinkedIn](https://www.linkedin.com/in/laurencelle-akpa-522484432)
