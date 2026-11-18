import type { Profile } from '../types/project';

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">About</h2>
      <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {profile.location && <p className="text-sm text-slate-500">📍 {profile.location}</p>}
      </div>
    </section>
  );
}
