# Project Structure

```
kiroween-bridgelab/
├── public/                  # Static assets served as-is
│   ├── favicon.svg
│   └── icons.svg            # SVG sprite sheet (referenced via <use href="/icons.svg#...">)
├── src/
│   ├── assets/              # Imported assets (images, SVGs bundled by Vite)
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.tsx              # Root application component
│   ├── App.css              # Styles scoped to App component
│   ├── index.css            # Global styles, CSS custom properties (design tokens)
│   └── main.tsx             # React entry point (renders <App /> into #root)
├── index.html               # HTML shell; Vite entry point
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint flat config
├── tsconfig.json            # TypeScript root config (references app + node)
├── tsconfig.app.json        # TS config for src/
├── tsconfig.node.json       # TS config for vite.config.ts
└── package.json
```

## Conventions

- **Components** live in `src/` as `.tsx` files. Co-locate a `.css` file alongside a component for its styles (e.g. `App.tsx` + `App.css`).
- **Global design tokens** are CSS custom properties defined in `src/index.css` under `:root`. Always use these variables (e.g. `var(--accent)`, `var(--border)`) rather than hardcoded color values.
- **Dark mode** is handled via `@media (prefers-color-scheme: dark)` in `index.css` — override token values there, not inline.
- **SVG icons** in the public sprite (`/icons.svg`) are referenced via `<use href="/icons.svg#<id>">`. Add new icons to the sprite rather than inlining SVG markup.
- **Static assets** referenced in JSX (imported directly) go in `src/assets/`. Assets that must remain at a fixed URL go in `public/`.
- Responsive breakpoint is **1024px** — used consistently across both CSS files.
