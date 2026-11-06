# Tech Stack

## Core
- **React 19**: UI library (JSX/TSX)
- **TypeScript ~6.0**: strict typing across the codebase
- **Vite 8**: build tool and dev server with HMR

## Runtime Dependencies
- `react`, `react-dom` ^19.3

## Dev Dependencies
- `@vitejs/plugin-react`: uses Oxc for fast JSX transforms
- `typescript-eslint` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`: linting
- `@types/react`, `@types/react-dom`, `@types/node`: type definitions
- `vitest`: unit tests
- `fast-check`: property-based tests
- `@playwright/test`: end-to-end tests

## ESLint
Flat config (`eslint.config.js`) targeting `**/*.{ts,tsx}` files. Extends:
- `@eslint/js` recommended
- `typescript-eslint` recommended
- `react-hooks` recommended (flat)
- `react-refresh` vite preset

## Common Commands

```bash
npm run dev        # Start dev server with HMR (Vite)
npm run build      # Type-check (tsc -b) then production build
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint across the project
```

## Notes
- Project uses ES modules (`"type": "module"` in package.json)
- Test tooling is installed (Vitest, fast-check, Playwright); no tests written yet
- Two tsconfig files: `tsconfig.app.json` (src) and `tsconfig.node.json` (vite config)
- Hosting target is GitHub Pages (static only); no backend