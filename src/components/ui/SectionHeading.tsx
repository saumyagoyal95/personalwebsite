import { cn } from "@/lib/cn";
import { Kicker } from "./Section";
import { Reveal, RevealItem } from "./Reveal";

export function SectionHeading({
  kicker,
  kickerTone = "accent",
  title,
  intro,
  align = "left",
  className,
}: {
  kicker?: string;
  kickerTone?: "accent" | "gold";
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {kicker && (
        <RevealItem className="mb-3.5">
          <Kicker tone={kickerTone}>{kicker}</Kicker>
        </RevealItem>
      )}
      <RevealItem as="h2">
        <h2 className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.01em] text-fg sm:text-[40px]">
          {title}
        </h2>
      </RevealItem>
      {intro && (
        <RevealItem as="p" className="mt-2">
          <p
            className={cn(
              "max-w-[560px] text-base leading-relaxed text-muted sm:text-[16.5px]",
              align === "center" && "mx-auto",
            )}
          >
            {intro}
          </p>
        </RevealItem>
      )}
    </Reveal>
  );
}
