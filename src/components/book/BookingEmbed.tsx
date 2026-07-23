"use client";

import { useState } from "react";
import { siteConfig } from "@/content/siteConfig";

export function BookingEmbed() {
  const [loaded, setLoaded] = useState(false);
  const url = siteConfig.calendarEmbedUrl || siteConfig.calendarUrl;

  // No URL configured yet — show a friendly setup placeholder.
  if (!url) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-line-strong bg-surface/40 p-10 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-accent">
          📅
        </span>
        <h3 className="font-display text-xl font-semibold">
          Scheduler not connected yet
        </h3>
        <p className="max-w-sm text-sm text-muted">
          Add your Google Calendar appointment-schedule link to{" "}
          <code className="font-mono text-fg">siteConfig.calendarUrl</code> and
          it&apos;ll appear here. Until then, reach out by email.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="link-underline text-sm text-accent"
        >
          {siteConfig.email}
        </a>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-line bg-surface">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-surface/60">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
            Loading calendar…
          </span>
        </div>
      )}
      <iframe
        src={url}
        title="Book a call with Saumya Goyal"
        onLoad={() => setLoaded(true)}
        className="h-[640px] w-full"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
