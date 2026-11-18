# Backend (Phase 2, not started)

Reserved for the Node.js (Express + TypeScript) API. See `decisions/0005-future-backend-stack.md`.

Planned contract, which mirrors `frontend/src/types/project.ts`:

| Method | Path            | Returns       |
|--------|-----------------|---------------|
| GET    | `/api/health`   | `{ status }`  |
| GET    | `/api/projects` | `Project[]`   |
| GET    | `/api/profile`  | `Profile`     |

The API listens on port 3000 inside the compose network. nginx proxies `/api/*` to it,
so the browser only ever talks to one origin.
