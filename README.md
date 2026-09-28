# laurencelle Louis Armel Akpa — Portfolio

A personal developer portfolio built with React, TypeScript, Vite and Tailwind CSS —
animated with Framer Motion, and available in French (default) and English.

## What's new in this version

- **Real photo** in the hero section (`public/images/profile.jpg`)
- **Bilingual (FR/EN)**: French by default, toggle in the navbar (`FR`/`EN`),
  preference saved in `localStorage`. All UI copy and project content are
  translated — see `src/i18n/translations.ts` for site chrome and
  `src/data/projects.ts` for per-project bilingual content (`fr` / `en` keys).
- **Animations** via Framer Motion: staggered hero entrance, scroll-reveal on
  every section (`src/components/Reveal.tsx`), hover lift on project cards and
  stack tags, animated navbar, smooth page transition between the project list
  and project detail view. Respects `prefers-reduced-motion` at the browser level.

## What this honestly represents

No invented jobs, years of experience, clients or certifications — content is
based on real, described projects. Where information was missing, it's marked
as a placeholder for you to fill in.

**Still to add as projects go public:**

- `src/data/projects.ts` — real `github` / `demo` links per project
- Project screenshots — drop images into `public/projects/` and set the `image` field in `projects.ts` (shown on the project detail page)
- `public/og-image.png` (1200×630) — then uncomment the `og:image` meta tag in `index.html`

Projects are routed by URL hash (`#projet/<slug>`), so each project has a shareable link.

## Getting started

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

## Project structure

```
src/
├── components/     # Navbar, ThemeToggle, LanguageToggle, ProjectDetail, Reveal
├── sections/       # Hero, About, Stack, Projects, LearningJourney, Contact
├── data/           # projects.ts — bilingual project content, separate from UI
├── i18n/           # translations.ts (fr/en dictionaries) + LanguageContext.tsx
├── hooks/          # useTheme.ts
└── index.css       # design tokens (colors, etc.) for light/dark mode
```

To add a new project, add one object (with `fr` and `en` content) to
`src/data/projects.ts` — no other file needs to change.

## Adding a new language

1. Add a new key to `translations` in `src/i18n/translations.ts` with the same shape as `fr`/`en`.
2. Add the matching `Localized` block (`fr`, `en`, ...) to each project in `src/data/projects.ts`.
3. Update `Lang` in `translations.ts` and the toggle logic in `LanguageContext.tsx`
   (currently a simple FR/EN switch — a 3+ language dropdown is a natural next step).

## Design system

Colors, spacing and other tokens are defined as CSS variables in
`src/index.css` (`--bg`, `--surface`, `--border`, `--text`, `--muted`,
`--accent`) and mapped into Tailwind in `tailwind.config.js`. Change the
palette by editing the `:root` and `.dark` blocks in `index.css`.
