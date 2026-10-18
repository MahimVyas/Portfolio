"use client";

import { Rocket, Zap } from "lucide-react";
import { interests } from "@/data/site";
import { tones, type Tone } from "@/lib/tones";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap = { zap: Zap, rocket: Rocket } as const;

/** Each interest card gets its own accent colour. */
const interestTones: Record<keyof typeof iconMap, Tone> = {
  zap: "amber",
  rocket: "fuchsia",
};

/** Side interests from the resume, as two hoverable cards. */
export default function Interests() {
  return (
    <section id="interests" className="scroll-mt-6 py-24 md:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="Beyond the resume"
          tone="rose"
          title={
            <>
              What keeps me <span className="text-gradient">curious</span>
            </>
          }
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {interests.map((interest, i) => {
            const Icon = iconMap[interest.icon as keyof typeof iconMap];
            const t = tones[interestTones[interest.icon as keyof typeof iconMap]];
            return (
              <Reveal key={interest.title} delay={i * 0.1}>
                <div className={`card group h-full p-7 transition duration-300 hover:-translate-y-1.5 ${t.hoverBorder} ${t.hoverShadow}`}>
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${t.tint} ${t.tintText} transition-all duration-300 ${t.tintHover} ${t.tintHoverShadow} group-hover:text-white dark:group-hover:text-white`}>
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {interest.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {interest.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
