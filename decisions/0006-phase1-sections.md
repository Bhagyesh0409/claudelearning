# 0006. Phase 1 sections: Hero/About + Projects

- **Status:** Accepted
- **Date:** 2026-11-18

## Context
When asked which sections Phase 1 should include, the user selected only "Hero / About".
The project showcase is the stated purpose of the site, so it is treated as required.

## Decision
Phase 1 ships **Hero, About, and Projects**. Skills and Contact are deferred to Phase 1.5.
Profile text comes from `profile.json` through the service layer (it becomes `GET /api/profile` later).

## Consequences
- The page is short but complete. Adding sections later means adding components and nav entries.
- If the user wants Skills/Contact sooner, move them up in `tasks.md`.
