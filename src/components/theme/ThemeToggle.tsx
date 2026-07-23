"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "personal-site-theme";

/**
 * Runs before paint (injected into <head>) so the correct theme is on <html>
 * from the very first frame — no flash of the wrong palette on reload.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`;

export function ThemeToggle({ className }: { className?: string }) {
  // Start as `null` so the first client render matches the server HTML; the
  // real value is read from <html data-theme> right after mount.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode — the toggle still works for this session */
    }
  };

  const nextLabel = theme === "dark" ? "Light" : "Dark";

  return (
    <button
      onClick={toggle}
      aria-label={theme ? `Switch to ${nextLabel.toLowerCase()} mode` : "Toggle theme"}
      className={cn(
        "dc-btn dc-btn-primary flex h-10 shrink-0 items-center gap-2.5 rounded-full pl-4 pr-2 text-[13px] font-bold",
        className,
      )}
    >
      {/* Hidden until mounted so SSR doesn't render a label that may be wrong. */}
      <span className={cn("hidden sm:inline", !theme && "opacity-0")}>
        Switch to {theme ? nextLabel : "Light"}
      </span>
      <span
        className="grid h-[26px] w-[26px] place-items-center rounded-full bg-bg text-sm text-fg"
        aria-hidden
      >
        {theme === "light" ? "☽" : "☀"}
      </span>
    </button>
  );
}
