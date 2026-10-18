import { navLinks, profile } from "@/data/site";
import SocialLinks from "./SocialLinks";

/** Site footer: brand, quick links, socials, copyright and MIT license. */
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="section py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 text-xs font-bold text-white shadow-lg shadow-violet-500/30">
              {profile.monogram}
            </span>
            <div>
              <p className="font-display text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                {profile.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                AI/ML Engineer · {profile.location}
              </p>
            </div>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-600 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row dark:border-white/10 dark:text-slate-400">
          <p>
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>

        <details className="mt-6 text-center">
          <summary className="cursor-pointer text-xs font-medium text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300">
            MIT License
          </summary>
          <pre className="mx-auto mt-3 max-w-3xl whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-[11px] leading-relaxed text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
            {`MIT License

Copyright (c) 2026 ${profile.name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>
        </details>
      </div>
    </footer>
  );
}
