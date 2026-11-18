# 0004. Phasing seam: service layer + shared types + nginx `/api` proxy

- **Status:** Accepted
- **Date:** 2026-11-18

## Context
No backend exists in Phase 1, but Phases 2–3 add an API and a database. Moving between phases
should not mean rewriting the UI.

## Decision
1. **Service layer:** `frontend/src/services/projectService.ts` is the only data entry point.
   Components never import `src/data/*` directly. Functions are async even for static data.
2. **Build-time switch:** `VITE_DATA_SOURCE=static|api` (Docker build arg, default `static`).
   `api` fetches `/api/projects` and `/api/profile`.
3. **Shared contract:** `frontend/src/types/project.ts` (`Project`, `Profile`). API responses and
   the DB schema must match these fields. Change the types first, then everything else.
4. **Same-origin API:** nginx proxies `/api/*` to `api:3000` (block pre-written and commented in
   `nginx/default.conf`). This means no CORS and one ngrok tunnel.
5. Compose already contains commented `api` and `db` services.

## Alternatives considered
- Calling the API on a separate domain/port: needs CORS and a second tunnel.
- Runtime config (`/config.json`) instead of a build arg: more flexible but unnecessary now.

## Consequences
- Phase 2 = build the API, uncomment two blocks, and rebuild with `VITE_DATA_SOURCE=api`.
- If the types are shared by frontend and backend later, consider a `shared/` package.
