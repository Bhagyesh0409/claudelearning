import type { Profile } from '../types/project';

export default function Skills({ profile }: { profile: Profile }) {
  const { skills, certifications = [] } = profile;
  if (skills.length === 0 && certifications.length === 0) return null;

  return (
    <section id="skills" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Skills</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        What I bring to keeping production healthy.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-slate-200 p-5 dark:border-slate-800"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <>
          <h3 className="mt-12 text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
              >
                <span aria-hidden className="mt-0.5 text-indigo-600 dark:text-indigo-400">✓</span>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{cert.name}</p>
                  <p className="text-xs text-slate-500">
                    {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ''}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
