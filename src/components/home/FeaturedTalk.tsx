import Link from "next/link";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { talks, talkYear, confirmedVenues } from "@/content/talks";

export function FeaturedTalk() {
  const talk = talks.find((t) => t.featured) ?? talks[0];
  const venues = confirmedVenues(talk);
  // Years only — the site deliberately doesn't print full dates anywhere.
  const when =
    venues.length > 0
      ? venues.map((v) => `${v.city} ${v.year}`).join(" · ")
      : [talk.city, talkYear(talk)].filter(Boolean).join(" · ");

  return (
    <Section>
      <Reveal className="dc-card rounded-[18px] p-8 sm:p-12">
        <RevealItem>
          <Kicker>Featured talk</Kicker>
        </RevealItem>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <RevealItem as="h2" className="max-w-3xl font-display text-[28px] font-bold leading-[1.1] tracking-[-0.01em] text-fg sm:text-[36px]">
              {talk.title}
            </RevealItem>
            {talk.summary && (
              <RevealItem as="p" className="mt-5 max-w-2xl text-[16.5px] leading-[1.8] text-body">
                {talk.summary}
              </RevealItem>
            )}
          </div>

          <RevealItem className="lg:justify-self-end">
            <dl className="space-y-4 border-l border-line pl-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Event
                </dt>
                <dd className="mt-1 text-[15.5px] font-medium text-fg">
                  {talk.event}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Where
                </dt>
                <dd className="mt-1 text-[15.5px] font-medium text-fg">
                  {when}
                </dd>
              </div>
              {talk.coSpeaker && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                    With
                  </dt>
                  <dd className="mt-1 text-[15.5px] font-medium text-fg">
                    {talk.coSpeaker}
                  </dd>
                </div>
              )}
              <Link
                href="/speaking"
                className="link-underline inline-flex pt-1 text-[15px] font-semibold text-accent"
              >
                All talks &amp; speaking profile →
              </Link>
            </dl>
          </RevealItem>
        </div>
      </Reveal>
    </Section>
  );
}
