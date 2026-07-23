"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Photo } from "@/content/photos";
import { cn } from "@/lib/cn";

const ratioClass: Record<NonNullable<Photo["ratio"]>, string> = {
  portrait: "row-span-2 aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/** A placeholder tile shown until a real photo is dropped in. */
function PlaceholderTile({ caption }: { caption?: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-elevated/60 p-4 text-center">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 5h16v14H4z M8 11l2.5 3 3.5-4.5L20 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-faint">
        Photo coming soon
      </span>
      {caption && <span className="text-xs text-faint">{caption}</span>}
    </div>
  );
}

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const real = photos.filter((p) => p.src);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((cur) => {
        if (cur === null) return cur;
        const n = real.length;
        return (cur + dir + n) % n;
      }),
    [real.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-3">
        {photos.map((p, i) => {
          const realIndex = p.src ? real.indexOf(p) : -1;
          return (
            <div
              key={i}
              className={cn(
                "group relative overflow-hidden rounded-[14px] border border-line",
                ratioClass[p.ratio ?? "square"],
              )}
            >
              {p.src ? (
                <button
                  onClick={() => setActive(realIndex)}
                  className="h-full w-full cursor-zoom-in"
                  aria-label={`Open photo: ${p.alt}`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  {p.caption && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-3 text-left text-[11px] font-medium text-fg/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {p.caption}
                    </span>
                  )}
                </button>
              ) : (
                <PlaceholderTile caption={p.caption} />
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && real[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-xl sm:p-10"
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-line text-fg transition-colors hover:border-primary hover:text-accent"
              aria-label="Close"
            >
              ✕
            </button>
            {real.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line text-fg transition-colors hover:border-primary hover:text-accent"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line text-fg transition-colors hover:border-primary hover:text-accent"
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl"
            >
              <div className="relative mx-auto aspect-[3/2] w-full">
                <Image
                  src={real[active].src}
                  alt={real[active].alt}
                  fill
                  sizes="90vw"
                  className="rounded-xl object-contain"
                />
              </div>
              {real[active].caption && (
                <figcaption className="mt-4 text-center text-[13px] text-muted">
                  {real[active].caption}
                </figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
