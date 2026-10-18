/**
 * Per-accent colour palettes.
 *
 * Every tone bundles the exact Tailwind class strings used for eyebrow text,
 * divider lines, icon tiles, card hovers, bullet dots, pointer glows and
 * timeline pulses, so any component can colour itself with a single lookup.
 * Class names must stay literal (never template-generated) so Tailwind's
 * scanner can see them.
 */
export type Tone = "violet" | "cyan" | "fuchsia" | "amber" | "rose" | "emerald";

export type ToneClasses = {
  /** Eyebrow label text, readable on both backgrounds. */
  eyebrow: string;
  /** Gradient stops for the small eyebrow divider lines ("from-x to-y"). */
  line: string;
  /** Solid gradient fill for icon tiles ("from-x to-y"). */
  tile: string;
  /** Drop shadow matching the solid tile. */
  tileShadow: string;
  /** Soft tinted tile background (fills solid on group hover). */
  tint: string;
  /** Text colour inside the tinted tile. */
  tintText: string;
  /** Solid fill applied to the tinted tile on group hover. */
  tintHover: string;
  /** Shadow applied to the tinted tile on group hover. */
  tintHoverShadow: string;
  /** Card hover border. */
  hoverBorder: string;
  /** Card hover shadow. */
  hoverShadow: string;
  /** Gradient stops for small bullet dots ("from-x to-y"). */
  dot: string;
  /** Border for large timeline dots. */
  dotBorder: string;
  /** Shadow for large timeline dots. */
  dotShadow: string;
  /** Accent colour for hovered links/titles. */
  hoverText: string;
  /** Hover affordance for small square action buttons. */
  actionHover: string;
  /** Colour of the arrow glyph on hovered project titles. */
  arrow: string;
  /** Ring colour for featured cards. */
  ring: string;
  /** Pointer-following glow colour inside cards (rgba). */
  glow: string;
  /** Timeline pulse-ring colour (rgba). */
  pulse: string;
};

export const tones: Record<Tone, ToneClasses> = {
  violet: {
    eyebrow: "text-violet-600 dark:text-violet-400",
    line: "from-violet-600 to-fuchsia-500",
    tile: "from-violet-600 to-fuchsia-500",
    tileShadow: "shadow-violet-500/30",
    tint: "from-violet-600/10 to-fuchsia-500/10 dark:from-violet-500/20 dark:to-fuchsia-500/15",
    tintText: "text-violet-700 dark:text-violet-300",
    tintHover: "group-hover:from-violet-600 group-hover:to-fuchsia-500",
    tintHoverShadow: "group-hover:shadow-lg group-hover:shadow-violet-500/30",
    hoverBorder: "hover:border-violet-400/60",
    hoverShadow:
      "hover:shadow-[0_28px_52px_-30px_rgba(139,92,246,0.55)]",
    dot: "from-violet-500 to-fuchsia-400",
    dotBorder: "border-violet-500/30",
    dotShadow: "shadow-[0_8px_20px_-8px_rgba(139,92,246,0.6)]",
    hoverText: "hover:text-violet-600 dark:hover:text-violet-300",
    actionHover:
      "hover:border-violet-400 hover:text-violet-600 dark:hover:border-violet-500 dark:hover:text-violet-300",
    arrow: "group-hover:text-violet-500",
    ring: "ring-violet-500/15 dark:ring-violet-400/15",
    glow: "rgba(139,92,246,0.16)",
    pulse: "rgba(139,92,246,0.45)",
  },
  cyan: {
    eyebrow: "text-cyan-700 dark:text-cyan-400",
    line: "from-cyan-500 to-sky-400",
    tile: "from-cyan-500 to-sky-500",
    tileShadow: "shadow-cyan-500/30",
    tint: "from-cyan-500/10 to-sky-500/10 dark:from-cyan-500/20 dark:to-sky-500/15",
    tintText: "text-cyan-700 dark:text-cyan-300",
    tintHover: "group-hover:from-cyan-500 group-hover:to-sky-500",
    tintHoverShadow: "group-hover:shadow-lg group-hover:shadow-cyan-500/30",
    hoverBorder: "hover:border-cyan-400/60",
    hoverShadow: "hover:shadow-[0_28px_52px_-30px_rgba(34,211,238,0.5)]",
    dot: "from-cyan-500 to-sky-400",
    dotBorder: "border-cyan-500/30",
    dotShadow: "shadow-[0_8px_20px_-8px_rgba(34,211,238,0.6)]",
    hoverText: "hover:text-cyan-600 dark:hover:text-cyan-300",
    actionHover:
      "hover:border-cyan-400 hover:text-cyan-600 dark:hover:border-cyan-500 dark:hover:text-cyan-300",
    arrow: "group-hover:text-cyan-500",
    ring: "ring-cyan-500/15 dark:ring-cyan-400/15",
    glow: "rgba(34,211,238,0.16)",
    pulse: "rgba(34,211,238,0.45)",
  },
  fuchsia: {
    eyebrow: "text-fuchsia-600 dark:text-fuchsia-400",
    line: "from-fuchsia-600 to-pink-500",
    tile: "from-fuchsia-600 to-pink-500",
    tileShadow: "shadow-fuchsia-500/30",
    tint: "from-fuchsia-600/10 to-pink-500/10 dark:from-fuchsia-500/20 dark:to-pink-500/15",
    tintText: "text-fuchsia-700 dark:text-fuchsia-300",
    tintHover: "group-hover:from-fuchsia-600 group-hover:to-pink-500",
    tintHoverShadow: "group-hover:shadow-lg group-hover:shadow-fuchsia-500/30",
    hoverBorder: "hover:border-fuchsia-400/60",
    hoverShadow: "hover:shadow-[0_28px_52px_-30px_rgba(217,70,239,0.5)]",
    dot: "from-fuchsia-500 to-pink-400",
    dotBorder: "border-fuchsia-500/30",
    dotShadow: "shadow-[0_8px_20px_-8px_rgba(217,70,239,0.6)]",
    hoverText: "hover:text-fuchsia-600 dark:hover:text-fuchsia-300",
    actionHover:
      "hover:border-fuchsia-400 hover:text-fuchsia-600 dark:hover:border-fuchsia-500 dark:hover:text-fuchsia-300",
    arrow: "group-hover:text-fuchsia-500",
    ring: "ring-fuchsia-500/15 dark:ring-fuchsia-400/15",
    glow: "rgba(217,70,239,0.16)",
    pulse: "rgba(217,70,239,0.45)",
  },
  amber: {
    eyebrow: "text-amber-600 dark:text-amber-400",
    line: "from-amber-500 to-orange-400",
    tile: "from-amber-500 to-orange-500",
    tileShadow: "shadow-amber-500/30",
    tint: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/15",
    tintText: "text-amber-700 dark:text-amber-300",
    tintHover: "group-hover:from-amber-500 group-hover:to-orange-500",
    tintHoverShadow: "group-hover:shadow-lg group-hover:shadow-amber-500/30",
    hoverBorder: "hover:border-amber-400/60",
    hoverShadow: "hover:shadow-[0_28px_52px_-30px_rgba(245,158,11,0.5)]",
    dot: "from-amber-500 to-orange-400",
    dotBorder: "border-amber-500/30",
    dotShadow: "shadow-[0_8px_20px_-8px_rgba(245,158,11,0.6)]",
    hoverText: "hover:text-amber-600 dark:hover:text-amber-300",
    actionHover:
      "hover:border-amber-400 hover:text-amber-600 dark:hover:border-amber-500 dark:hover:text-amber-300",
    arrow: "group-hover:text-amber-500",
    ring: "ring-amber-500/15 dark:ring-amber-400/15",
    glow: "rgba(245,158,11,0.16)",
    pulse: "rgba(245,158,11,0.5)",
  },
  rose: {
    eyebrow: "text-rose-600 dark:text-rose-400",
    line: "from-rose-500 to-red-400",
    tile: "from-rose-500 to-red-500",
    tileShadow: "shadow-rose-500/30",
    tint: "from-rose-500/10 to-red-500/10 dark:from-rose-500/20 dark:to-red-500/15",
    tintText: "text-rose-700 dark:text-rose-300",
    tintHover: "group-hover:from-rose-500 group-hover:to-red-500",
    tintHoverShadow: "group-hover:shadow-lg group-hover:shadow-rose-500/30",
    hoverBorder: "hover:border-rose-400/60",
    hoverShadow: "hover:shadow-[0_28px_52px_-30px_rgba(244,63,94,0.5)]",
    dot: "from-rose-500 to-red-400",
    dotBorder: "border-rose-500/30",
    dotShadow: "shadow-[0_8px_20px_-8px_rgba(244,63,94,0.6)]",
    hoverText: "hover:text-rose-600 dark:hover:text-rose-300",
    actionHover:
      "hover:border-rose-400 hover:text-rose-600 dark:hover:border-rose-500 dark:hover:text-rose-300",
    arrow: "group-hover:text-rose-500",
    ring: "ring-rose-500/15 dark:ring-rose-400/15",
    glow: "rgba(244,63,94,0.16)",
    pulse: "rgba(244,63,94,0.45)",
  },
  emerald: {
    eyebrow: "text-emerald-600 dark:text-emerald-400",
    line: "from-emerald-500 to-green-400",
    tile: "from-emerald-500 to-green-500",
    tileShadow: "shadow-emerald-500/30",
    tint: "from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/15",
    tintText: "text-emerald-700 dark:text-emerald-300",
    tintHover: "group-hover:from-emerald-500 group-hover:to-green-500",
    tintHoverShadow: "group-hover:shadow-lg group-hover:shadow-emerald-500/30",
    hoverBorder: "hover:border-emerald-400/60",
    hoverShadow: "hover:shadow-[0_28px_52px_-30px_rgba(16,185,129,0.5)]",
    dot: "from-emerald-500 to-green-400",
    dotBorder: "border-emerald-500/30",
    dotShadow: "shadow-[0_8px_20px_-8px_rgba(16,185,129,0.6)]",
    hoverText: "hover:text-emerald-600 dark:hover:text-emerald-300",
    actionHover:
      "hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-300",
    arrow: "group-hover:text-emerald-500",
    ring: "ring-emerald-500/15 dark:ring-emerald-400/15",
    glow: "rgba(16,185,129,0.16)",
    pulse: "rgba(16,185,129,0.45)",
  },
};
