"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  User,
  Code,
  Briefcase,
  Map,
  Sparkles,
  Mail,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

/**
 * Right-side liquid-glass section navigation.
 *
 * - Fixed to the far-right edge of the screen (never the top).
 * - Slides in from the right once the user starts scrolling.
 * - Highlights the section currently in view.
 * - Desktop: vertical rail with labels + icons.
 * - Mobile: floating trigger on the right edge that opens a right-side drawer.
 * - Theme toggle is included here since the top header has been removed.
 */
const ITEMS: NavItem[] = [
  { label: "Home", href: "#top", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Journey", href: "#journey", icon: Map },
  { label: "Interests", href: "#interests", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function RightSideNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const mounted = useRef(false);

  const handleScroll = useCallback(() => {
    if (!mounted.current) return;
    setScrolled(window.scrollY > 60);
  }, []);

  // Reveal the nav once the user starts scrolling.
  useEffect(() => {
    mounted.current = true;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Highlight the section that is currently in view.
  useEffect(() => {
    if (!mounted.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (active) setActiveId(active.target.id);
      },
      { root: null, rootMargin: "-30% 0% -70% 0%", threshold: 0 },
    );

    ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeDrawer = () => setOpen(false);

  const itemClasses = (isActive: boolean) =>
    `flex w-full items-center gap-2.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
      isActive
        ? "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 text-white shadow-lg shadow-violet-500/35"
        : "border-transparent text-slate-500 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-white/15 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-sm"
    }`;

  const mobileItemClasses = (isActive: boolean) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
      isActive
        ? "bg-violet-600/10 text-violet-600 dark:text-violet-400"
        : "text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/10 hover:text-violet-600 dark:hover:text-violet-400"
    }`;

  return (
    <>
      {/* ===== Desktop: fixed vertical rail on the far-right edge ===== */}
      <AnimatePresence mode="wait">
        {scrolled && (
          <motion.nav
            initial={{ translateX: "100%", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            aria-label="Section navigation"
            className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-[55] flex-col gap-1 rounded-full border border-white/25 dark:border-white/10 bg-white/75 dark:bg-[#07070d]/85 backdrop-blur-xl p-1.5 shadow-[0_10px_40px_-14px_rgba(0,0,0,0.14)] dark:shadow-[0_10px_40px_-14px_rgba(0,0,0,0.6)]"
          >
            {ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeDrawer}
                  className={itemClasses(isActive)}
                >
                  <Icon size={17} className="shrink-0" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              );
            })}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ===== Mobile: floating trigger + right-side drawer ===== */}
      <AnimatePresence mode="wait">
        {scrolled && (
          <>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              className="md:hidden fixed right-4 top-1/2 -translate-y-1/2 z-[55] grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/80 dark:bg-[#07070d]/90 dark:border-white/15 backdrop-blur-xl shadow-lg text-slate-600 dark:text-slate-300 transition-all hover:scale-105 active:scale-95"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            {open && (
              <motion.aside
                initial={{ translateX: "100%" }}
                animate={{ translateX: 0 }}
                exit={{ translateX: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 340 }}
                className="md:hidden fixed inset-y-0 right-0 z-[60] w-[85%] max-w-xs bg-white/85 dark:bg-[#07070d]/95 backdrop-blur-2xl border-l border-white/20 dark:border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-white/10">
                  <span className="font-display text-sm font-bold text-slate-900 dark:text-white">
                    Menu
                  </span>
                  <button
                    onClick={closeDrawer}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <nav className="p-6 space-y-2">
                  {ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeId === item.href.slice(1);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeDrawer}
                        className={mobileItemClasses(isActive)}
                      >
                        <Icon size={18} className="shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-6 pt-6 border-t border-white/20 dark:border-white/10 px-6">
                  <ThemeToggle />
                </div>
              </motion.aside>
            )}

            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 z-[59] bg-black/30 dark:bg-black/50 backdrop-blur-sm"
                onClick={closeDrawer}
                aria-hidden
              />
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
