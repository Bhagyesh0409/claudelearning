# Portfolio

A personal portfolio site showcasing my GitHub projects. It's built with React + Vite + TypeScript + Tailwind,
served by nginx in Docker, and published to the internet with ngrok. It is designed to grow in phases into a
Node API + PostgreSQL backend.

- **Progress:** [`tasks.md`](tasks.md)
- **Why things are the way they are:** [`decisions/`](decisions/README.md)

## Prerequisites
- Docker Desktop (running)
- An ngrok account. Copy your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken

No local Node.js is needed. Everything builds in containers (decisions/0007).

## Run it

```bash
cp .env.example .env          # then paste NGROK_AUTHTOKEN into .env
docker compose up --build -d
```

| What | Where |
|------|-------|
| Site (local) | http://localhost:8080 |
| Public URL | https://decrease-usual-afterglow.ngrok-free.dev (static, set by `NGROK_DOMAIN` in `.env`) |
| ngrok inspector | http://localhost:4040 |

Local only, no tunnel: `docker compose up --build web`
Stop: `docker compose down`

## Develop with hot reload

```bash
docker compose -f docker-compose.dev.yml up
# → http://localhost:5173
```

After changing dependencies in `frontend/package.json`, regenerate the lockfile without local Node:

```bash
cd frontend
docker run --rm -v "$PWD:/app" -w /app node:20-alpine npm install --package-lock-only
```

## Edit content
- Projects: `frontend/src/data/projects.json` (fields defined in `frontend/src/types/project.ts`)
- Name, headline, about text, links: `frontend/src/data/profile.json`
- Images: put them in `frontend/public/images/` and reference them as `"/images/foo.png"`

Then rebuild: `docker compose up --build -d web`

## Structure

```
frontend/      React app + Dockerfile (multi-stage → nginx)
nginx/         nginx server config (SPA fallback, caching, future /api proxy)
backend/       Phase 2 placeholder (Express + TS)
decisions/     Architecture Decision Records
tasks.md       Phase-by-phase task tracker
```

## Roadmap
1. **Phase 1:** static site (current)
2. **Phase 2:** Express API at `/api` (set `VITE_DATA_SOURCE=api`)
3. **Phase 3:** PostgreSQL
4. **Phase 4:** contact form, admin, CI
