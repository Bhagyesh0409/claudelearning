# 0001. Frontend: React + Vite + TypeScript + Tailwind

- **Status:** Accepted
- **Date:** 2026-11-18

## Context
Phase 1 is a static site served by nginx, and later phases add an API and a database. The stack must
compile to plain static files now and consume an API later without a rewrite. An earlier plain
HTML/CSS/JS placeholder template sat in `Downloads/portfolio` (uncommitted, placeholder content only).

## Decision
- **React 18 + Vite 5**, building to static `dist/` that nginx serves.
- **TypeScript (strict)**, so the data types double as the future API contract (see 0004).
- **Tailwind CSS 3** for styling. Dark mode follows the OS preference (`darkMode: 'media'`).
- Dependency versions are pinned exactly in `package.json`.
- The old plain-HTML template was **deleted** at the user's request.

## Alternatives considered
- Plain HTML/CSS/JS: no build step, but harder to grow once data comes from an API.
- Astro: excellent for static sites, but less familiar and fewer examples.
- Next.js: needs a Node runtime for its best features, which conflicts with "nginx serves the page".

## Consequences
- A build step is required (handled in Docker, see 0007).
- Single-page app: nginx needs `try_files … /index.html`.
- If SEO becomes important, revisit SSG/prerendering.
