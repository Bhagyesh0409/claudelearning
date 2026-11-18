import type { ReactNode } from 'react';
import type { Profile } from '../types/project';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

export default function Layout({ profile, children }: { profile: Profile; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-semibold tracking-tight text-slate-900 dark:text-white">
            {profile.name}
          </a>
          <ul className="flex gap-5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
        {children}
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} {profile.name} ·{' '}
        <a href={profile.githubUrl} className="hover:text-indigo-600" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}
