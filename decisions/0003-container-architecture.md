# 0003. Containers: nginx `web` + `ngrok` via docker-compose

- **Status:** Accepted
- **Date:** 2026-11-18

## Context
Requirement: the site runs in Docker, nginx serves it, and ngrok makes it public.

## Decision
- `frontend/Dockerfile` is multi-stage: `node:20-alpine` builds, and `nginx:1.27-alpine` serves `dist/`.
  The build context is the **repo root**, so the image can include `nginx/default.conf`.
- `docker-compose.yml` services:
  - `web`: host port `${WEB_PORT:-8080}` → 80, healthcheck on `/healthz`.
  - `ngrok`: `ngrok/ngrok:3-alpine`, `http web:80`, token from `.env`, inspector on :4040.
    It starts only after `web` is healthy.
- **Random ngrok URL** (no reserved domain). Read the current URL at http://localhost:4040.
- `docker compose up web` runs the site locally without a tunnel or token.

## Alternatives considered
- ngrok on the host: one more manual step and not reproducible.
- Reserved ngrok domain: the user doesn't have one yet. To add it later, append `--url=<domain>` to the ngrok command.

## Consequences
- The public URL changes on every ngrok restart.
- One tunnel covers the site and (later) the API, because nginx is the single entry point (0004).
- Free ngrok shows an interstitial warning page to first-time browser visitors.
