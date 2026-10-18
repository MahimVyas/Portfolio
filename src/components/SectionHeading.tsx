"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { tones, type Tone } from "@/lib/tones";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** Accent colour for the eyebrow label and divider lines. */
  tone?: Tone;
};

/** Eyebrow line + animated title used at the top of every section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "violet",
}: SectionHeadingProps) {
  const centered = align === "center";
  const t = tones[tone];

  return (
    <Reveal className={centered ? "text-center" : undefined}>
      <div
        className={`flex items-center gap-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <motion.span
          aria-hidden
          className={`h-px w-10 origin-left bg-gradient-to-r ${t.line}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <span
          className={`text-xs font-bold uppercase tracking-[0.22em] ${t.eyebrow}`}
        >
          {eyebrow}
        </span>
        <motion.span
          aria-hidden
          className={`h-px w-10 origin-right bg-gradient-to-l ${t.line} ${
            centered ? "" : "hidden"
          }`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>

      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
