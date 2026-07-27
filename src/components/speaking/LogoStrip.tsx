import Image from "next/image";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { eventLogos } from "@/content/eventLogos";
import { cn } from "@/lib/cn";

/**
 * The organisations whose stages these talks happened on.
 *
 * `unoptimized` on every logo: one of them is an SVG, which Next's image
 * optimizer refuses to process without `dangerouslyAllowSVG`, and the rasters
 * are small enough that optimizing them buys nothing. Serving all three
 * straight through keeps the set consistent and the config free of a flag
 * whose name is a warning.
 */
export function LogoStrip() {
  return (
    <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <RevealItem
        as="span"
        className="text-xs font-semibold uppercase tracking-[0.12em] text-faint"
      >
        Speaking at
      </RevealItem>
      {eventLogos.map((logo) => (
        <RevealItem key={logo.src}>
          <span className="flex h-[68px] w-[132px] items-center justify-center rounded-[14px] border border-line bg-white px-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              unoptimized
              className={cn("w-auto object-contain", logo.heightClass)}
            />
          </span>
        </RevealItem>
      ))}
    </Reveal>
  );
}
