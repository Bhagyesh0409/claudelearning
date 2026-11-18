# 0005. Future backend: Node (Express) + PostgreSQL

- **Status:** Accepted (implementation in Phase 2/3)
- **Date:** 2026-11-18

## Context
Later phases need an API (projects, profile, contact form) and persistent storage.

## Decision
- **Node.js 20 + Express + TypeScript** in `backend/`, port 3000, internal to the compose network.
- **PostgreSQL 16** (`postgres:16-alpine`) with a named volume `pgdata`.
- Config via env (`DATABASE_URL`, `POSTGRES_*`) from `.env`, never committed.
- Open for its own ADR at Phase 3: migration/ORM tool (Prisma / Drizzle / node-pg-migrate).

## Alternatives considered
- Python FastAPI: good, but a second language alongside the TS frontend.
- Fastify instead of Express: faster, but Express has more learning resources. Revisit if needed.

## Consequences
- One language (TypeScript) across the stack, with a chance to share types.
- The API is never exposed directly. It's reachable only through nginx `/api` (0004).
