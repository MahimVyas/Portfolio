"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Liquid-glass header.
 *
 * - Hidden above the viewport until the user starts scrolling, then slides
 *   down into a fixed position at the top.
 * - Navigation links sit on the right side; the theme toggle keeps floating
 *   at the top-right corner of the screen.
 * - Mobile: hamburger opens a right-side liquid-glass drawer.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const mounted = useRef(false);

  const handleScroll = useCallback(() => {
    if (!mounted.current) return;
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    mounted.current = true;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleDrawer = () => setOpen((o) => !o);

  return (
    <>
      {/* Theme control stays pinned to the top-right corner of the screen. */}
      <div className="fixed top-3 right-3 z-[90]">
        <ThemeToggle />
      </div>

      <header
        suppressHydrationWarning
        className="fixed top-0 left-0 w-full h-16 z-[80] transition-transform duration-300 ease-out will-change-transform backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.10)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.45)] bg-white/70 dark:bg-[#07070d]/80"
        style={{ transform: scrolled ? "translateY(0)" : "translateY(-100%)" }}
      >
        {/* Inline style sets the glass fill so it works before hydration; the
             className below keeps it in sync with the dark class. */}
        <div className="relative z-[1] flex w-full items-center justify-between px-5 pr-20">
          {/* Brand */}
          <Link
            href="#top"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 text-[10px] font-bold text-white shadow-lg shadow-violet-500/30">
              MV
            </span>
            <span className="hidden sm:block font-display text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              Mahim Vyas
            </span>
          </Link>

          {/* Desktop nav: right-aligned section links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-violet-600 dark:hover:text-violet-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={toggleDrawer}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer — slides in from the right side */}
        <AnimatePresence mode="wait">
          {open && (
            <motion.aside
              initial={{ translateX: "100%" }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 340 }}
              className="fixed inset-y-0 right-0 z-[100] w-[85%] max-w-xs bg-white/70 dark:bg-[#07070d]/90 backdrop-blur-2xl border-l border-white/20 dark:border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-white/10">
                <span className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  Menu
                </span>
                <button
                  onClick={toggleDrawer}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="p-6 space-y-4">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={toggleDrawer}
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300 px-4 py-3 rounded-xl transition-colors hover:bg-white/50 dark:hover:bg-white/10 hover:text-violet-600 dark:hover:text-violet-300"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-white/20 dark:border-white/10">
                  <ThemeToggle />
                </div>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Drawer backdrop */}
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/20 dark:bg-black/50 backdrop-blur-sm"
            onClick={toggleDrawer}
            aria-hidden
          />
        )}
      </header>
    </>
  );
}
