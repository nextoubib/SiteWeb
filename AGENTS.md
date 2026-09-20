# NEXRAD website — agent notes

- Package manager: **pnpm** (see `packageManager` in `package.json`). Never switch to npm/yarn.
- Framework: Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4.
- Server Components by default. Add `"use client"` only for interactivity (menus, forms, tabs, motion).
- Marketing content lives in `src/data/*`; keep JSX free of duplicated copy.
- Never invent certifications, metrics, customers, partners or prices. See README "Content rules".
- Before pushing: `pnpm lint && pnpm typecheck && pnpm test && pnpm build`.
- Git flow: `feature/*` → `develop` → `main` (release PR). No direct commits on `main`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
