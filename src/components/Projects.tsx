"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, type Project } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Tracks the cursor so the glow follows the pointer inside each card. */
function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured === true;

  return (
    <motion.article
      onMouseMove={trackPointer}
      className={`group card relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/60 hover:shadow-[0_32px_60px_-32px_rgba(139,92,246,0.6)] sm:p-8 ${
        featured ? "lg:col-span-2 ring-1 ring-violet-500/15 dark:ring-violet-400/15" : ""
      }`}
    >
      {/* Pointer-following glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(460px_circle_at_var(--mx,50%)_var(--my,0%),rgba(139,92,246,0.16),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          {featured ? (
            <span className="text-gradient mb-1.5 block text-[11px] font-bold uppercase tracking-[0.2em]">
              Featured
            </span>
          ) : null}
          <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-900 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-300"
              >
                {project.title}
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500 dark:text-slate-500"
                />
              </a>
            ) : (
              project.title
            )}
          </h3>
          <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar size={12} />
            {project.date}
          </span>
        </div>

        <div className="flex shrink-0 gap-2">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — live demo`}
              title="Live demo"
              className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-400 dark:hover:border-violet-500 dark:hover:text-violet-300"
            >
              <ExternalLink size={15} />
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — source code`}
              title="Source code"
              className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-400 dark:hover:border-violet-500 dark:hover:text-violet-300"
            >
              <FaGithub className="text-[15px]" />
            </a>
          ) : null}
        </div>
      </div>

      <ul
        className={`relative mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 ${
          featured ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0" : ""
        }`}
      >
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-2.5">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
        {project.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

/** Grid of resume projects — first card is featured across the full width. */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-6 py-24 md:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects I&apos;ve <span className="text-gradient">shipped</span>
            </>
          }
          description="Production-minded builds across LLM orchestration, retrieval, multi-agent workflows and in-browser AI."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={p.featured ? "lg:col-span-2" : undefined}
            >
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
