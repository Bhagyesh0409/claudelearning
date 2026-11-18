# Tasks

> **Current focus:** Phase 1 wrap-up. Add `NGROK_AUTHTOKEN` to `.env`, run `docker compose up -d`, check the public URL, and fill in the TODO content.
> **Last updated:** 2026-11-18

Legend: `[x]` done · `[ ]` todo · `[~]` in progress · `[!]` blocked (reason inline)
Every non-trivial choice has an ADR in [`decisions/`](decisions/README.md).

---

## Phase 0: Setup
- [x] Create project folder `Downloads/portfolio` and remove the old placeholder HTML template (decisions/0001)
- [x] Create `tasks.md` and `decisions/` with ADR template + index
- [x] Write ADRs 0001–0007
- [x] `.gitignore`, `.dockerignore`, `.env.example`, `README.md`, `CLAUDE.md`
- [ ] First git commit
- [ ] Create GitHub repo and push (optional)

## Phase 1: Static site (nginx + Docker + ngrok)
- [x] Scaffold Vite + React + TypeScript + Tailwind in `frontend/` (decisions/0001)
- [x] Shared types `src/types/project.ts`, the future API contract (decisions/0004)
- [x] Data-access layer `src/services/projectService.ts` with the `VITE_DATA_SOURCE` switch (decisions/0004)
- [x] Seed `projects.json` + `profile.json` from GitHub repos (decisions/0002)
- [x] Components: Layout, Hero, About, ProjectGrid, ProjectCard (decisions/0006)
- [x] Responsive layout + dark mode (system preference)
- [x] Multi-stage `frontend/Dockerfile` (node build → nginx) (decisions/0003, 0007)
- [x] `nginx/default.conf`: SPA fallback, gzip, caching, `/healthz`, commented `/api` proxy
- [x] `docker-compose.yml`: `web` + `ngrok`; `docker-compose.dev.yml` for hot reload
- [x] Verify `docker compose up --build web` → http://localhost:8080 (200, healthy, SPA fallback, gzip, asset caching OK)
- [!] Verify ngrok public URL via http://localhost:4040 (blocked: needs `NGROK_AUTHTOKEN` in `.env`)
- [x] Generate `frontend/package-lock.json` (in container); Docker build now uses `npm ci`
- [ ] **Content (you):** replace the TODO text in `profile.json` / `projects.json`, add screenshots to `frontend/public/images/`

## Phase 1.5: Polish (optional)
- [ ] Skills / tech-stack section
- [ ] Contact section (links only)
- [ ] Tech filter on the project grid
- [ ] SEO: Open Graph / Twitter meta tags, `robots.txt`
- [ ] Light/dark toggle (currently follows system)
- [ ] Lighthouse pass (performance, a11y ≥ 90)

## Phase 2: Backend API (decisions/0005)
- [ ] Scaffold `backend/` (Express + TypeScript), Dockerfile
- [ ] `GET /api/health`, `GET /api/projects`, `GET /api/profile` serving the same JSON (contract from `types/project.ts`)
- [ ] Add the `api` service to compose; uncomment the `/api/` block in `nginx/default.conf`
- [ ] Build the frontend with `VITE_DATA_SOURCE=api`, then verify end to end through ngrok
- [ ] ADR: validation library, logging, error format

## Phase 3: Database (decisions/0005)
- [ ] ADR: migration/ORM tool (Prisma vs node-pg-migrate vs Drizzle)
- [ ] Add the `db` service (postgres:16-alpine, named volume, healthcheck)
- [ ] Schema for `projects`, `profile` (mirrors types)
- [ ] Seed script from `frontend/src/data/*.json`
- [ ] Switch the API to read from Postgres
- [ ] Backup/restore notes

## Phase 4: Extras
- [ ] Contact form → `POST /api/contact` → DB (+ rate limiting, spam protection)
- [ ] Optional GitHub sync job (pull repo stats/stars)
- [ ] Simple authenticated admin to edit projects
- [ ] CI: GitHub Actions to build images + typecheck
