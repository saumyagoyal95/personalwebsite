import type { Talk } from "@/content/talks";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { tone, toneText, type Tone } from "@/lib/tone";

const typeLabel: Record<Talk["type"], string> = {
  keynote: "Keynote",
  talk: "Talk",
  workshop: "Workshop",
};

/**
 * `index` drives the alternating highlight colour (top rule, type chip, the
 * separator dot) the way the design cycles its two accents.
 */
export function TalkCard({ talk, index = 0 }: { talk: Talk; index?: number }) {
  const t: Tone = tone(index);

  return (
    <Card as="article" topBar={t} className="h-full">
      <Badge className={toneText[t]}>{typeLabel[talk.type]}</Badge>

      <h3 className="mt-4 font-display text-[19px] font-semibold leading-[1.3] text-fg">
        {talk.title}
      </h3>

      <p className="mt-3 text-sm font-medium text-muted">
        {talk.event}
        {talk.location ? ` · ${talk.location}` : ""}{" "}
        <span className={cn("px-0.5", toneText[t])} aria-hidden>
          ·
        </span>{" "}
        {talk.date}
      </p>

      <p className="mt-4 text-[15px] leading-[1.7] text-body">{talk.abstract}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {talk.tags.map((tag) => (
          <li
            key={tag}
            className="dc-chip rounded-full px-2.5 py-1 text-[11px] font-semibold text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      {(talk.videoUrl || talk.slidesUrl) && (
        <div className="mt-6 flex flex-wrap gap-4">
          {talk.videoUrl && (
            <a
              href={talk.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-semibold text-fg"
            >
              ▶ Watch recording
            </a>
          )}
          {talk.slidesUrl && (
            <a
              href={talk.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-semibold text-fg"
            >
              ◲ View slides
            </a>
          )}
        </div>
      )}
    </Card>
  );
}

/** Compact card for a stage with no written-up session yet. */
export function VenueCard({
  venue,
  note,
  date,
  index = 0,
}: {
  venue: string;
  note: string;
  date?: string;
  index?: number;
}) {
  const t: Tone = tone(index);

  return (
    <Card topBar={t} className="h-full">
      <Badge className={toneText[t]}>Speaker</Badge>
      <h3 className="mt-4 font-display text-[19px] font-semibold leading-[1.3] text-fg">
        {venue}
      </h3>
      <p className="mt-3 text-sm font-medium text-muted">
        {note}
        {date && (
          <>
            {" "}
            <span className={toneText[t]} aria-hidden>
              ·
            </span>{" "}
            {date}
          </>
        )}
      </p>
    </Card>
  );
}
