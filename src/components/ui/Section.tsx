import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
  size,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "default" | "wide" | "narrow";
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-11 sm:py-16", className)}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

/**
 * The uppercase eyebrow that sits above every section heading. `tone` alternates
 * between the two highlight colours the way the design cycles them.
 */
export function Kicker({
  children,
  className,
  tone = "accent",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "gold";
}) {
  return (
    <span
      className={cn(
        "dc-eyebrow block",
        tone === "accent" ? "text-accent" : "text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Small bordered chip — tags, meta, availability badges. */
export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "dc-chip inline-flex items-center gap-2 rounded-lg px-[15px] py-[9px] font-display text-[15px] font-semibold text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
