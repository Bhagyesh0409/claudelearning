/**
 * Shared data contracts.
 *
 * These shapes are the contract between the UI and its data source.
 * Phase 1: satisfied by src/data/*.json.
 * Phase 2+: the API responses (GET /api/projects, GET /api/profile) and the
 * Postgres schema must match these fields. See decisions/0004.
 */

export interface Project {
  /** Stable slug, e.g. "incident-management-system". Becomes the DB primary key/slug. */
  id: string;
  title: string;
  /** One-line pitch shown on the card. */
  summary: string;
  /** Longer description (2–4 sentences). */
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  /** Path under /public (e.g. "/images/ims.png") or absolute URL. */
  image?: string;
  /** Featured projects are listed first. */
  featured: boolean;
  /** Sort order within featured/non-featured groups (ascending). */
  order: number;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SkillGroup {
  /** e.g. "Reliability Engineering" */
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: number;
}

/** Headline stat shown in the hero, e.g. { value: "15+", label: "Years experience" }. */
export interface Highlight {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  /** Paragraphs for the About section. */
  about: string[];
  location?: string;
  githubUrl: string;
  links: SocialLink[];
  highlights?: Highlight[];
  skills: SkillGroup[];
  certifications?: Certification[];
}
