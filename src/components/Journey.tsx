"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { education, experience } from "@/data/site";
import { tones, type Tone } from "@/lib/tones";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type JourneyItem = {
  id: string;
  kind: "work" | "education";
  title: string;
  detail: string;
  meta: string;
  location?: string;
  bullets?: string[];
};

/** Work entries are fuchsia, education entries are amber. */
const kindTone: Record<JourneyItem["kind"], Tone> = {
  work: "fuchsia",
  education: "amber",
};

const items: JourneyItem[] = [
  ...experience.map((e, i) => ({
    id: `work-${i}`,
    kind: "work" as const,
    title: e.role,
    detail: e.org,
    meta: e.meta,
    location: e.location,
    bullets: e.bullets,
  })),
  ...education.map((e, i) => ({
    id: `edu-${i}`,
    kind: "education" as const,
    title: e.school,
    detail: e.degree,
    meta: e.date,
    location: e.location,
  })),
];

/** Vertical timeline combining internships and education milestones. */
export default function Journey() {
  return (
    <section
      id="journey"
      className="scroll-mt-6 border-y border-slate-200/70 bg-white/60 py-24 dark:border-white/10 dark:bg-white/[0.015] md:py-28"
    >
      <div className="section">
        <SectionHeading
          eyebrow="Journey"
          tone="amber"
          title={
            <>
              Experience &amp; <span className="text-gradient">education</span>
            </>
          }
          description="Where I&apos;ve studied and the research I&apos;ve contributed to."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Drawn-in vertical line */}
          <motion.span
            aria-hidden
            className="absolute bottom-4 left-[19.5px] top-4 w-px origin-top bg-gradient-to-b from-fuchsia-500 via-violet-500 to-amber-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          />

          <div className="space-y-6">
            {items.map((item, i) => {
              const t = tones[kindTone[item.kind]];
              return (
              <Reveal
                key={item.id}
                delay={0.12 + i * 0.12}
                className="relative pl-14"
              >
                {/* Timeline dot with soft pulse */}
                <span
                  className={`absolute left-0 top-1.5 z-10 grid h-10 w-10 place-items-center rounded-full border bg-white ${t.dotBorder} ${t.dotShadow} ${t.tintText} dark:bg-[#0d0d16]`}
                  style={{ "--pulse": t.pulse } as CSSProperties}
                >
                  {item.kind === "work" ? (
                    <Briefcase size={16} />
                  ) : (
                    <GraduationCap size={17} />
                  )}
                  <span
                    aria-hidden
                    className="pulse-ring absolute inset-0 rounded-full"
                  />
                </span>

                <article className={`card group p-5 transition duration-300 hover:-translate-y-1 ${t.hoverBorder} ${t.hoverShadow} sm:p-6`}>
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-slate-900 sm:text-lg dark:text-white">
                      {item.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      {item.meta}
                    </span>
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                      {item.kind === "work" ? (
                        <Building2 size={14} className="shrink-0" />
                      ) : (
                        <BookOpen size={14} className="shrink-0" />
                      )}
                      {item.detail}
                    </span>
                    {item.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="shrink-0" />
                        {item.location}
                      </span>
                    ) : null}
                  </div>

                  {item.bullets?.length ? (
                    <ul className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <span
                            aria-hidden
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${t.dot}`}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
