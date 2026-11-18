import type { Profile } from '../types/project';

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        {profile.headline}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
        Hi, I'm {profile.name.split(' ')[0]}.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
        >
          View projects
        </a>
        {profile.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300"
          >
            {link.label}
          </a>
        ))}
      </div>
      {profile.highlights && profile.highlights.length > 0 && (
        <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3 dark:border-slate-800">
          {profile.highlights.map((h) => (
            <div key={h.label}>
              <dt className="sr-only">{h.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{h.value}</dd>
              <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{h.label}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
