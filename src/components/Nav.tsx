"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

/** Fixed glass header: transparent at the top, frosted once you scroll. */
export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/75 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-[#07070d]/75"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 text-xs font-bold tracking-tight text-white shadow-lg shadow-violet-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            {profile.monogram}
          </span>
          <span className="hidden font-display text-sm font-bold leading-tight tracking-tight sm:block">
            {profile.name}
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              AI / ML Engineer
            </span>
          </span>
        </a>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40 md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 md:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#07070d]/90 md:hidden"
            aria-label="Mobile"
          >
            <div className="section flex flex-col gap-1 py-4">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700 dark:text-slate-200 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
