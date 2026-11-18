import type { Project } from '../types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          {project.featured && (
            <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              Featured
            </span>
          )}
        </div>
        <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{project.summary}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-4 text-sm font-semibold">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Code →
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              Live demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
