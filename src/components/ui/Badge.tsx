import { cn } from "@/lib/cn";

/** Uppercase category pill — talk type, publication, format. */
export function Badge({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={cn(
        "dc-chip inline-block rounded-full px-[11px] py-[5px] text-[11.5px] font-bold uppercase tracking-[0.08em] text-accent",
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}
