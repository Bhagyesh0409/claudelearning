# 0002. Project data: curated JSON now, database later

- **Status:** Accepted
- **Date:** 2026-11-18

## Context
The site showcases GitHub projects. Checked on 2026-11-18: `Bhagyesh0409/claudelearning` is
**empty**. The only original public repos are `IncidentManagementSystem` (C#, ASP.NET Core) and
`smartopsai-website`. The rest are DevOps course forks.

## Decision
- Phase 1: curated `frontend/src/data/projects.json` and `profile.json`, edited by hand.
- Seeded with IncidentManagementSystem and smartopsai-website (featured) plus claudelearning.
  Descriptions contain `TODO` markers for the user to fill in.
- Forks are not listed by default. Add them only with a "course work" framing.
- Phase 3: the same records move into Postgres, and the JSON becomes the seed file.

## Alternatives considered
- Live GitHub API from the browser: always current, but limited to 60 requests/hour per IP,
  gives no control over wording or images, and pulls in forks.
- Both (curated + live): more moving parts than Phase 1 needs. It may return in Phase 4 as a sync job.

## Consequences
- Adding a project means editing JSON and rebuilding the image.
- Content quality is under full control.
