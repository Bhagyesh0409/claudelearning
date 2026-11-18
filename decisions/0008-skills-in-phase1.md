# 0008. Skills, certifications and highlights move into Phase 1

- **Status:** Accepted (amends 0006)
- **Date:** 2026-11-18

## Context
The user asked for a professional "Expert Site Reliability Engineer" profile with skills. 0006 had deferred
Skills to Phase 1.5. Only part of the LinkedIn profile is visible publicly (location, company, the
first line of About, certifications). The headline and job titles are hidden behind login.

## Decision
- `Profile` gains `skills: SkillGroup[]` (required), plus optional `certifications[]` and `highlights[]`
  (hero stat row). They live in `profile.json` and will be served by `GET /api/profile` in Phase 2. In Phase 3
  they may be normalised into their own tables.
- New `Skills` section (grouped skill cards + certifications) between About and Projects, with a nav entry.
- Positioning: "Expert Site Reliability Engineer". The About copy is written for that role from the known
  facts. The user will align LinkedIn later.
- Certification years are omitted (not verifiable from the public LinkedIn view).

## Consequences
- Some About/skills claims are inferred from the role and still need the user's confirmation (see tasks.md).
- The Contact section remains deferred to Phase 1.5.
