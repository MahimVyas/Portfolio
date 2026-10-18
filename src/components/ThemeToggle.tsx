"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";

type Mode = "system" | "light" | "dark";

declare global {
  interface Window {
    setTheme?: (mode: string) => void;
  }
}

const nextMode: Record<Mode, Mode> = {
  system: "light",
  light: "dark",
  dark: "system",
};

const modes: Record<Mode, { label: string; Icon: typeof Sun }> = {
  system: { label: "System", Icon: Monitor },
  light: { label: "Light", Icon: Sun },
  dark: { label: "Dark", Icon: Moon },
};

const THEME_EVENT = "theme-change";

function subscribe(onStoreChange: () => void) {
  // "storage" fires for changes from other tabs; THEME_EVENT for this tab
  // (dispatched by the inline script in layout.tsx).
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_EVENT, onStoreChange);
  };
}

function getSnapshot(): Mode {
  const stored = localStorage.getItem("theme");
  return stored && stored in modes ? (stored as Mode) : "system";
}

function getServerSnapshot(): Mode {
  return "system";
}

/**
 * Cycles system → light → dark. Defaults to "system", which follows the
 * device's light/dark preference automatically (see the inline script in
 * layout.tsx).
 */
export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = nextMode[mode];
    if (window.setTheme) {
      window.setTheme(next);
    } else {
      localStorage.setItem("theme", next);
      window.dispatchEvent(new Event(THEME_EVENT));
    }
  }

  const { label, Icon } = modes[mode];

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Color theme: ${label}. Click to switch.`}
      title={`Theme: ${label} — click to change`}
      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:text-violet-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mode}
          initial={{ opacity: 0, rotate: -70, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.5 }}
          transition={{ duration: 0.22 }}
          className="grid place-items-center"
        >
          <Icon size={16} />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
