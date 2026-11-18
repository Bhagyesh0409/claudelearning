# 0009. Pin the free ngrok static domain

- **Status:** Accepted (amends 0003)
- **Date:** 2026-11-18

## Context
0003 assumed a random ngrok URL that changes on every restart, which breaks shared links. Testing showed the
free ngrok account already has a permanent dev domain (`decrease-usual-afterglow.ngrok-free.dev`) that the
agent uses by default. ngrok now assigns one to each free account.

## Decision
- New env var `NGROK_DOMAIN` (in `.env`, documented in `.env.example`), set to that domain.
- The ngrok service runs through `/bin/sh -c` so `--url=https://$NGROK_DOMAIN` is added only when the
  variable is set. With it empty, ngrok falls back to its default.

## Alternatives considered
- Hard-coding the domain in `docker-compose.yml`: it's account-specific, so it belongs in `.env`.
- Relying on the implicit default: works today, but can silently change if account settings change.

## Consequences
- The public URL is stable across restarts: https://decrease-usual-afterglow.ngrok-free.dev
- It is still only online while this machine, Docker Desktop and the containers are running. Hosting that is
  always on (e.g. an Azure VM) would be a future decision.
- A custom domain (e.g. a personal .com) needs a paid ngrok plan or a cloud host.
