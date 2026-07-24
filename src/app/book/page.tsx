import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { BookingEmbed } from "@/components/book/BookingEmbed";
import { siteConfig } from "@/content/siteConfig";
import { tone, toneText } from "@/lib/tone";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a call with Saumya Goyal — speaking invitations, MLOps consulting, or a conversation about building reliable ML. Pick a time that syncs to the calendar.",
};

const reasons = [
  {
    no: "01",
    title: "Speaking invitations",
    body: "Programming a conference, meetup, or internal event? Let's talk topics, format, and dates.",
  },
  {
    no: "02",
    title: "MLOps & consulting",
    body: "Observability, ML lifecycle, or getting models reliably into production — bring the messy version.",
  },
  {
    no: "03",
    title: "Mentorship & chats",
    body: "Breaking into data or growing your career? I keep a few slots for a genuine conversation.",
  },
];

export default function BookPage() {
  return (
    <>
      <section className="relative pt-32 pb-6 sm:pt-36">
        <Container>
          <Reveal className="max-w-3xl">
            <RevealItem className="mb-3.5">
              <Kicker>Book</Kicker>
            </RevealItem>
            <RevealItem as="h1" className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
              Let&apos;s find a <span className="text-accent">time.</span>
            </RevealItem>
            <RevealItem as="p" className="mt-[22px] text-[19px] leading-[1.65] text-muted">
              Pick a slot below and it lands straight on my calendar —
              you&apos;ll get a confirmation and a video link. Prefer email?
              Reach me at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-underline font-medium text-fg"
              >
                {siteConfig.email}
              </a>
              .
            </RevealItem>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr]">
          {/* Context */}
          <Reveal as="ul" className="flex flex-col gap-5">
            {reasons.map((r, i) => (
              <RevealItem as="li" key={r.title}>
                <Card>
                  <span
                    className={`font-display text-[28px] font-bold leading-none ${toneText[tone(i)]}`}
                  >
                    {r.no}
                  </span>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-[1.25] text-fg">
                    {r.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.7] text-body">
                    {r.body}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </Reveal>

          {/* Scheduler */}
          <div>
            <BookingEmbed />
            {siteConfig.calendarUrl && (
              <p className="mt-4 text-center text-[13px] text-muted">
                Trouble loading?{" "}
                <a
                  href={siteConfig.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-medium text-fg"
                >
                  Open the scheduler in a new tab ↗
                </a>
              </p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
