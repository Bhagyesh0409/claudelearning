# 0007. No local Node: all builds run in Docker

- **Status:** Accepted
- **Date:** 2026-11-18

## Context
Node.js is not installed on the development machine (Windows 11). Docker Desktop is available.

## Decision
- Production build: the multi-stage Dockerfile runs `npm install`/`npm ci` + `npm run build` inside `node:20-alpine`.
- Development: `docker-compose.dev.yml` runs `vite` in a `node:20-alpine` container with
  `./frontend` bind-mounted. `node_modules` lives in a named volume, and polling is enabled for Windows file watching.
- The Dockerfile uses `npm ci` when `package-lock.json` exists and falls back to `npm install`.
  The lockfile was generated in a container (`npm install --package-lock-only`) on 2026-11-18 and is committed.

## Alternatives considered
- Installing Node 20 LTS locally: faster feedback, but the user chose Docker only.

## Consequences
- Every check (typecheck, build) needs Docker running.
- After changing dependencies, regenerate the lockfile in a container (see README).
- Behind a corporate proxy, `npm install` inside Docker may need `HTTP(S)_PROXY` build args.
