# Decision Log (ADRs)

Each file records one decision: why it was made and what it costs. These files carry context
between work sessions. Read them before changing architecture, and never silently contradict one.
To reverse a decision, add a new ADR and mark the old one `Superseded by NNNN`.

## Index

| #    | Decision | Status |
|------|----------|--------|
| [0001](0001-frontend-stack.md) | Frontend: React + Vite + TypeScript + Tailwind | Accepted |
| [0002](0002-project-data-source.md) | Project data: curated JSON now, database later | Accepted |
| [0003](0003-container-architecture.md) | Containers: nginx `web` + `ngrok` via docker-compose | Accepted |
| [0004](0004-phased-backend-strategy.md) | Phasing seam: service layer + shared types + nginx `/api` proxy | Accepted |
| [0005](0005-future-backend-stack.md) | Future backend: Node (Express) + PostgreSQL | Accepted |
| [0006](0006-phase1-sections.md) | Phase 1 sections: Hero/About + Projects | Accepted |
| [0007](0007-docker-only-toolchain.md) | No local Node: all builds run in Docker | Accepted |

## Template

Copy into `NNNN-short-title.md`:

```markdown
# NNNN. Title

- **Status:** Proposed | Accepted | Superseded by NNNN
- **Date:** YYYY-MM-DD

## Context
What problem or force prompted this?

## Decision
What we chose.

## Alternatives considered
- Option: why not

## Consequences
What becomes easier or harder; follow-up work.
```
