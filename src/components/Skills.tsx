"use client";

import {
  BrainCircuit,
  Code2,
  KeyRound,
  LayoutTemplate,
  Server,
} from "lucide-react";
import { skills, type SkillGroup } from "@/data/site";
import { tones, type Tone } from "@/lib/tones";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap = {
  code: Code2,
  brain: BrainCircuit,
  server: Server,
  layout: LayoutTemplate,
  key: KeyRound,
} as const;

/** Every skill category gets its own accent colour. */
const groupTones: Record<SkillGroup["icon"], Tone> = {
  code: "amber",
  brain: "violet",
  server: "emerald",
  layout: "cyan",
  key: "rose",
};

/** Grouped skill cards with mono type chips. */
export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-6 border-y border-slate-200/70 bg-white/60 py-24 dark:border-white/10 dark:bg-white/[0.015] md:py-28"
    >
      <div className="section">
        <SectionHeading
          eyebrow="What I work with"
          tone="cyan"
          title={
            <>
              Skills &amp; <span className="text-gradient">toolkit</span>
            </>
          }
          description="The languages, frameworks and systems I reach for when building AI-native products."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group: SkillGroup, i) => {
            const Icon = iconMap[group.icon];
            const t = tones[groupTones[group.icon]];
            return (
              <Reveal
                key={group.title}
                delay={i * 0.07}
                className={i === skills.length - 1 ? "sm:col-span-2 lg:col-span-2" : undefined}
              >
                <div className={`card group h-full p-6 transition duration-300 hover:-translate-y-1.5 ${t.hoverBorder} ${t.hoverShadow}`}>
                  <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${t.tile} text-white shadow-lg ${t.tileShadow} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
