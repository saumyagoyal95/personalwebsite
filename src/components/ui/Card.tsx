import { cn } from "@/lib/cn";
import { toneBg, type Tone } from "@/lib/tone";

/**
 * The design's signature surface: rounded, bordered, lifts on hover. Pass
 * `topBar` to draw the 3px accent rule across the top edge (talk cards).
 */
export function Card({
  children,
  className,
  topBar,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  topBar?: Tone;
  as?: "div" | "li" | "article" | "figure";
}) {
  return (
    <Tag
      className={cn(
        "dc-card relative overflow-hidden rounded-[18px] p-[26px]",
        className,
      )}
    >
      {topBar && (
        <span
          className={cn("absolute inset-x-0 top-0 h-[3px]", toneBg[topBar])}
          aria-hidden
        />
      )}
      {children}
    </Tag>
  );
}

/** The stacked key/value cards from the About column. */
export function FactCard({
  label,
  value,
  className,
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[5px] rounded-[14px] border border-line bg-surface px-5 py-[18px]",
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
        {label}
      </span>
      <span className="text-[15.5px] font-medium text-fg">{value}</span>
    </div>
  );
}
