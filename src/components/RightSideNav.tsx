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
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

/**
 * Right-side liquid-glass section navigation.
 *
 * - Fixed to the far-right edge of the screen, vertically centred.
 * - Hidden until the user starts scrolling, then slides in from the right.
 * - Highlights the section currently in view (IntersectionObserver).
 * - Smooth-scrolls to each section on click.
 * - Desktop only (md+); on mobile navigation is handled by the Header drawer.
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

  const itemClasses = (isActive: boolean) =>
    `flex w-full items-center gap-2.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
      isActive
        ? "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 text-white shadow-lg shadow-violet-500/35"
        : "border-transparent text-slate-500 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-white/15 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-sm"
    }`;

  return (
    <AnimatePresence mode="wait">
      {scrolled && (
        <motion.nav
          initial={{ translateX: "100%", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          aria-label="Section navigation"
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-[55] flex-col gap-1.5 rounded-full border border-white/25 dark:border-white/10 bg-white/75 dark:bg-[#07070d]/85 backdrop-blur-xl p-1.5 shadow-[0_10px_40px_-14px_rgba(0,0,0,0.14)] dark:shadow-[0_10px_40px_-14px_rgba(0,0,0,0.6)]"
        >
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.href.slice(1);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveId(item.href.slice(1))}
                className={itemClasses(isActive)}
              >
                <Icon size={17} className="shrink-0" />
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
