"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

/** Closing call-to-action with copy-to-clipboard email and contact cards. */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — silently ignore.
    }
  }

  const cards = [
    {
      key: "email",
      label: "Email",
      value: profile.email,
      sub: copied ? "Copied to clipboard" : "Click to copy",
      Icon: Mail,
      onClick: copyEmail,
      href: undefined as string | undefined,
      highlight: copied,
    },
    {
      key: "phone",
      label: "Phone",
      value: profile.phone,
      sub: "Call or text",
      Icon: Phone,
      onClick: undefined,
      href: profile.phoneHref,
      highlight: false,
    },
    {
      key: "location",
      label: "Location",
      value: profile.location,
      sub: "IST · UTC +5:30",
      Icon: MapPin,
      onClick: undefined,
      href: undefined as string | undefined,
      highlight: false,
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-6 overflow-hidden border-t border-slate-200/70 py-24 md:py-28 dark:border-white/10"
    >
      <div
        aria-hidden
        className="orb -left-24 top-16 h-72 w-72 bg-violet-500/20 dark:bg-violet-600/20"
      />
      <div
        aria-hidden
        className="orb -right-20 bottom-4 h-72 w-72 bg-cyan-400/20 dark:bg-cyan-500/15"
        style={{ animationDelay: "-6s" }}
      />

      <div className="section relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-gradient">great together</span>
            </>
          }
          description="Have a project or an opportunity in mind? Reach out through any channel below."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {cards.map((c, i) => {
            const body = (
              <>
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
                    c.highlight
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-gradient-to-br from-violet-600/10 to-cyan-500/10 text-violet-600 group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30 dark:from-violet-500/15 dark:to-cyan-500/15 dark:text-violet-300 dark:group-hover:text-white"
                  }`}
                >
                  {c.highlight ? (
                    <Check size={18} />
                  ) : c.key === "email" ? (
                    <Copy size={17} />
                  ) : (
                    <c.Icon size={17} />
                  )}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    {c.label}
                  </p>
                  <p className="mt-1.5 truncate text-[13px] font-semibold text-slate-900 dark:text-white">
                    {c.value}
                  </p>
                  <p
                    className={`mt-1 text-xs transition-colors ${
                      c.highlight
                        ? "font-medium text-emerald-600 dark:text-emerald-400"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {c.sub}
                  </p>
                </div>
              </>
            );

            const base =
              "card group flex w-full items-center gap-4 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-[0_28px_52px_-30px_rgba(139,92,246,0.55)]";

            return (
              <Reveal key={c.key} delay={0.1 + i * 0.09}>
                {c.onClick ? (
                  <button
                    type="button"
                    onClick={c.onClick}
                    aria-label={`${c.label}: ${c.value} — click to copy`}
                    className={base}
                  >
                    {body}
                  </button>
                ) : c.href ? (
                  <a href={c.href} className={base}>
                    {body}
                  </a>
                ) : (
                  <div className={base}>{body}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.35} className="mt-12 flex flex-col items-center gap-6">
          <SocialLinks variant="pill" />
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-primary group"
          >
            Send an email
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
