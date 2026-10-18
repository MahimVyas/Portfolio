"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { profile } from "@/data/site";

type SocialLinksProps = {
  variant?: "icon" | "pill";
  className?: string;
};

const networks = [
  { name: "GitHub", href: profile.links.github },
  { name: "LinkedIn", href: profile.links.linkedin },
  { name: "CodeChef", href: profile.links.codechef },
];

function Brand({ name }: { name: string }) {
  if (name === "GitHub") return <FaGithub />;
  if (name === "LinkedIn") return <FaLinkedinIn />;
  return <SiCodechef />;
}

/** GitHub / LinkedIn / CodeChef links, as round icons or labelled pills. */
export default function SocialLinks({
  variant = "icon",
  className = "",
}: SocialLinksProps) {
  const pill = variant === "pill";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {networks.map((n) => (
        <a
          key={n.name}
          href={n.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={n.name}
          title={n.name}
          className={
            pill
              ? "group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-500/15 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-300"
              : "grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-500/20 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:text-violet-300"
          }
        >
          <span className="text-lg leading-none transition-transform duration-300 group-hover:scale-110">
            <Brand name={n.name} />
          </span>
          {pill ? <span>{n.name}</span> : null}
        </a>
      ))}
    </div>
  );
}
