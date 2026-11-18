import type { Project } from '../types/project';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">A selection of things I've built.</p>
      {projects.length === 0 ? (
        <p className="mt-8 text-slate-500">No projects yet. Check back soon.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
