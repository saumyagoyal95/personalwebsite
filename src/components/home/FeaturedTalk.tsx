import Link from "next/link";
import { Section, Kicker } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { talks } from "@/content/talks";

export function FeaturedTalk() {
  const talk = talks.find((t) => t.featured) ?? talks[0];

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
            <RevealItem as="p" className="mt-5 max-w-2xl text-[16.5px] leading-[1.8] text-body">
              {talk.abstract}
            </RevealItem>
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
                  When
                </dt>
                <dd className="mt-1 text-[15.5px] font-medium text-fg">
                  {talk.date}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Topics
                </dt>
                <dd className="mt-1 text-[15.5px] font-medium text-fg">
                  {talk.tags.join(", ")}
                </dd>
              </div>
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
