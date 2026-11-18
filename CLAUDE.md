# CLAUDE.md

Portfolio site: React/Vite/TS/Tailwind → nginx in Docker → ngrok. Phased: static now, Express + Postgres later.

## Context management (read first)
- `tasks.md` is the source of truth for progress. Read the "Current focus" line first, and update checkboxes + "Last updated" as work completes.
- `decisions/` holds the ADRs. Read the index before architectural changes. Every non-trivial new choice gets a new
  `decisions/NNNN-title.md` (template in `decisions/README.md`) and an index row. Don't edit an accepted ADR's
  decision; supersede it.

## Rules
- UI gets data only through `frontend/src/services/projectService.ts`. Types in `frontend/src/types/project.ts` are the API/DB contract (ADR 0004).
- No local Node on this machine. Build and verify with Docker (`docker compose up --build`, or the dev compose file) (ADR 0007).
- Never commit `.env`. New env vars go in `.env.example`.
