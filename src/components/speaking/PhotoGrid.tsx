import Image from "next/image";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import type { SpeakingPhoto } from "@/content/speakingPhotos";
import { cn } from "@/lib/cn";

/**
 * The photo grid on /speaking. One column on mobile, two from `sm`, three from
 * `lg` — where a `featured` photo spans the full width as the establishing shot.
 *
 * Photos arrive at mixed aspect ratios, so the ordinary ones sit in a 4:3 box
 * and cover it, which keeps the rows aligned. A featured photo instead keeps
 * its own ratio: the wide shot is usually a panorama, and cropping it to match
 * the others would throw away the very thing that makes it worth featuring.
 */
export function PhotoGrid({ photos }: { photos: SpeakingPhoto[] }) {
  if (photos.length === 0) return null;

  // Several photos can share a photographer — credit each name once.
  const credits = [...new Set(photos.map((p) => p.photoCredit).filter(Boolean))];

  return (
    <>
      <Reveal as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <RevealItem
            as="li"
            key={photo.src}
            className={cn(photo.featured && "sm:col-span-2 lg:col-span-3")}
          >
            <figure>
              <div
                className={cn(
                  "overflow-hidden rounded-[14px] border border-line",
                  !photo.featured && "aspect-[4/3]",
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  // Measured against the 1120px container: three columns with a
                  // 20px gap give 339px each; a featured photo spans the whole
                  // 1056px of usable container width.
                  sizes={
                    photo.featured
                      ? "(min-width: 1024px) 1060px, 100vw"
                      : "(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                  }
                  className={cn(
                    "w-full",
                    photo.featured ? "block h-auto" : "h-full object-cover",
                  )}
                />
              </div>
              <figcaption className="mt-3 text-[13px] leading-[1.6] text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </Reveal>

      {credits.length > 0 && (
        <Reveal className="mt-6">
          <RevealItem as="p" className="text-[13px] leading-[1.6] text-faint">
            {credits.length === 1 ? "Photo by " : "Photos by "}
            {credits.join(", ")}
          </RevealItem>
        </Reveal>
      )}
    </>
  );
}
