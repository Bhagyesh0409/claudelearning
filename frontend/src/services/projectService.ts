/**
 * Data-access layer: the ONLY place the UI gets data from.
 *
 * VITE_DATA_SOURCE (build-time env):
 *   "static" (default, Phase 1) → bundled JSON files in src/data
 *   "api"    (Phase 2+)         → same-origin REST API, proxied by nginx at /api
 *
 * Components must not import src/data directly. See decisions/0004.
 */
import type { Profile, Project } from '../types/project';

const DATA_SOURCE: 'static' | 'api' =
  import.meta.env.VITE_DATA_SOURCE === 'api' ? 'api' : 'static';

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(path, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json() as Promise<T>;
}

function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order,
  );
}

export async function getProjects(): Promise<Project[]> {
  if (DATA_SOURCE === 'api') {
    return sortProjects(await fetchJson<Project[]>('/api/projects'));
  }
  const { default: data } = await import('../data/projects.json');
  return sortProjects(data as Project[]);
}

export async function getProfile(): Promise<Profile> {
  if (DATA_SOURCE === 'api') {
    return fetchJson<Profile>('/api/profile');
  }
  const { default: data } = await import('../data/profile.json');
  return data as Profile;
}
