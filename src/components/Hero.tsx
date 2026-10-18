"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/site";
import SocialLinks from "./SocialLinks";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** First viewport: ambient orbs, animated role line, CTAs and socials. */
export default function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      {/* Ambient background: dot grid + floating gradient orbs */}
      <div aria-hidden className="absolute inset-0 bg-dots" />
      <div
        aria-hidden
        className="orb -left-28 -top-24 h-96 w-96 bg-violet-500/30 dark:bg-violet-600/25"
      />
      <div
        aria-hidden
        className="orb -right-32 top-36 h-[30rem] w-[30rem] bg-cyan-400/25 dark:bg-cyan-500/20"
        style={{ animationDelay: "-4.5s" }}
      />
      <div
        aria-hidden
        className="orb bottom-[-6rem] left-1/3 h-72 w-72 bg-fuchsia-400/20 dark:bg-indigo-600/25"
        style={{ animationDelay: "-9s" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#fafafa] dark:to-[#07070d]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section relative z-10"
      >
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-700 backdrop-blur dark:border-violet-400/25 dark:bg-violet-500/15 dark:text-violet-300">
            <Sparkles size={13} className="shrink-0" />
            Building local-first & browser-native AI
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            <MapPin size={13} />
            {profile.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-gradient mt-6 font-display text-[clamp(3.2rem,11vw,7.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]"
        >
          {profile.name}
        </motion.h1>

        <div className="mt-4 h-9 overflow-hidden sm:h-11">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: reduce ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -28 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="font-display text-xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-200"
            >
              {profile.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
        >
          <span className="font-semibold text-slate-900 dark:text-white">
            {profile.intro}
          </span>{" "}
          {profile.summary}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="btn btn-primary group">
            View my work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a href="#contact" className="btn btn-ghost group">
            <Mail size={16} />
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-5">
          <SocialLinks />
          <span className="hidden h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent sm:block dark:from-slate-700" />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-slate-400 transition-colors hover:text-violet-500 sm:flex dark:text-slate-500"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>
        <motion.span
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={17} />
        </motion.span>
      </motion.a>
    </section>
  );
}
