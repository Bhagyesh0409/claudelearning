import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectGrid from './components/ProjectGrid';
import { getProfile, getProjects } from './services/projectService';
import type { Profile, Project } from './types/project';

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; profile: Profile; projects: Project[] };

export default function App() {
  const [state, setState] = useState<LoadState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    Promise.all([getProfile(), getProjects()])
      .then(([profile, projects]) => {
        if (!cancelled) setState({ status: 'ready', profile, projects });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setState({
            status: 'error',
            message: err instanceof Error ? err.message : 'Failed to load data',
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-500">
        Loading…
      </div>
    );
  }

  if (state.status === 'error') {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-center text-red-600">
        Couldn't load the portfolio: {state.message}
      </div>
    );
  }

  const { profile, projects } = state;
  return (
    <Layout profile={profile}>
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills profile={profile} />
      <ProjectGrid projects={projects} />
    </Layout>
  );
}
