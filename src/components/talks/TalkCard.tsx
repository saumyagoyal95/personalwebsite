import { talkYear, confirmedVenues, type Talk } from "@/content/talks";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";
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
  const venues = confirmedVenues(talk);

  return (
    <Card as="article" topBar={t} className="h-full">
      <Badge className={toneText[t]}>{typeLabel[talk.type]}</Badge>

      {/*
        The title carries the link — there is deliberately no separate "view
        event" affordance. An unlinked title keeps the exact same type styles,
        so the list doesn't advertise which sessions happen to have a page.
      */}
      <h3 className="mt-4 font-display text-[19px] font-semibold leading-[1.3] text-fg">
        {talk.url ? (
          <a
            href={talk.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {talk.title}
            <ExternalLinkIcon className="ml-1.5 inline-block h-[0.75em] w-[0.75em]" />
          </a>
        ) : (
          talk.title
        )}
      </h3>

      {talk.coSpeaker && (
        <p className="mt-2 text-sm text-muted">with {talk.coSpeaker}</p>
      )}

      <p className="mt-3 text-sm font-medium text-muted">
        {talk.event}
        {venues.length > 0 ? (
          <>
            <span className={cn("px-0.5", toneText[t])} aria-hidden>
              ·
            </span>
            {venues.map((v) => `${v.city} ${v.year}`).join(" · ")}
          </>
        ) : (
          <>
            {talk.city ? ` · ${talk.city}` : ""}
            <span className={cn("px-0.5", toneText[t])} aria-hidden>
              ·
            </span>
            {talkYear(talk)}
          </>
        )}
      </p>

      {talk.summary && (
        <p className="mt-4 text-[15px] leading-[1.7] text-body">
          {talk.summary}
        </p>
      )}
    </Card>
  );
}
