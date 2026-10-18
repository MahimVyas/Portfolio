"use client";

import { Cpu, GraduationCap, MapPin } from "lucide-react";
import { facts, profile } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap = {
  graduation: GraduationCap,
  map: MapPin,
  cpu: Cpu,
} as const;

const highlights = [
  "Local-first",
  "Multi-Agent Systems",
  "RAG",
  "WebLLM",
  "Edge AI",
  "Next.js",
];

/** Narrative summary of the resume, plus three quick-fact cards. */
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Engineering the edge of{" "}
              <span className="text-gradient">applied AI</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={0.08}>
            <div className="card h-full p-7 sm:p-9">
              <p className="text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl dark:text-white">
                {profile.intro}
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                {profile.summary}
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                I&apos;m currently completing my B.Tech in Computer Science
                (AI &amp; ML) at D. Y. Patil International University, while
                researching classical Indian astronomy alongside quantum
                computing at PCCOE, Pune.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span key={h} className="chip">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {facts.map((f, i) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];
              return (
                <Reveal key={f.label} delay={0.14 + i * 0.09} className="flex-1">
                  <div className="card group flex h-full items-start gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-[0_24px_44px_-28px_rgba(139,92,246,0.55)] sm:p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600/10 to-cyan-500/10 text-violet-600 transition-all duration-300 group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30 dark:from-violet-500/15 dark:to-cyan-500/15 dark:text-violet-300 dark:group-hover:text-white">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {f.label}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-900 dark:text-white">
                        {f.value}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {f.sub}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
