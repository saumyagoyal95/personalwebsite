"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/siteConfig";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/writing", label: "Writing" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-500",
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between gap-4 px-6 sm:px-8">
          <Link
            href="/"
            className="font-display text-[19px] font-bold tracking-[-0.01em] text-fg"
          >
            saumya<span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-[30px] md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  isActive(l.href) ? "text-gold" : "text-muted hover:text-gold",
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="dc-btn dc-btn-primary hidden rounded-xl px-5 py-2.5 text-sm font-semibold md:inline-flex"
            >
              Book me
            </Link>
            <ThemeToggle />

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={cn(
                  "block h-0.5 w-6 bg-fg transition-all duration-300",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-fg transition-all duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-fg transition-all duration-300",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg/95 px-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {[...links, { href: "/book", label: "Book me" }].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    className={cn(
                      "font-display text-4xl font-bold tracking-tight transition-colors",
                      l.href === "/book"
                        ? "text-accent"
                        : isActive(l.href)
                          ? "text-fg"
                          : "text-muted",
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              {siteConfig.location}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
