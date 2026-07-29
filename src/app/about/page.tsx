import type { Metadata } from "next";
import Image from "next/image";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Card, FactCard } from "@/components/ui/Card";
import { portrait } from "@/content/photos";
import { facts } from "@/content/facts";

export const metadata: Metadata = {
  title: "About",
  description:
    "Saumya Goyal — Senior Machine Learning Engineer at Datamics, AWS Solutions Architect, TU Munich Informatics graduate, and conference speaker.",
};

const values = [
  {
    title: "Clarity over cleverness",
    body: "The best system — and the best talk — is the one people actually understand. I optimize for the moment it clicks.",
  },
  {
    title: "Observable by default",
    body: "If you can't see it, you can't trust it. I build ML the way I'd want to debug it at 2am.",
  },
  {
    title: "Teach what I learn",
    body: "Writing and speaking aren't a side quest — explaining an idea is how I know I truly understand it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-6 sm:pt-36">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <RevealItem className="mb-3.5">
                <Kicker tone="gold">About</Kicker>
              </RevealItem>
              <RevealItem as="h1" className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[52px]">
                Engineer by craft,{" "}
                <span className="text-accent">storyteller</span> on stage.
              </RevealItem>
              <RevealItem as="p" className="mt-[22px] max-w-[520px] text-[19px] leading-[1.65] text-muted">
                I&apos;m Saumya — I build the unglamorous machinery that makes
                machine learning trustworthy, and I love standing in front of a
                room explaining why it matters.
              </RevealItem>
            </Reveal>

            <Reveal className="flex justify-center">
              <RevealItem>
                <div className="dc-float relative h-[220px] w-[220px] lg:h-[280px] lg:w-[280px]">
                  <div
                    className="absolute -inset-2.5 rounded-full bg-primary"
                    aria-hidden
                  />
                  <div className="absolute inset-0 rounded-full bg-bg p-1.5">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={portrait.src}
                        alt={portrait.alt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 220px, 280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </RevealItem>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story + facts */}
      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="space-y-4">
            <RevealItem as="p" className="text-[16.5px] leading-[1.8] text-body">
              I&apos;m a Senior Machine Learning Engineer at{" "}
              <span className="font-medium text-fg">Datamics</span>, with{" "}
              <span className="font-medium text-fg">7+ years</span> helping
              teams take ML and LLM systems from prototype into production —
              experiment tracking, model lifecycle, and the observability that
              keeps models honest once they&apos;re live. Right now that work
              runs through a consulting engagement with a global home-appliances
              group.
            </RevealItem>
            <RevealItem as="p" className="text-[16.5px] leading-[1.8] text-body">
              Before Datamics I was at{" "}
              <span className="font-medium text-fg">Verizon</span>. I&apos;m an{" "}
              <span className="font-medium text-fg">
                AWS Solutions Architect
              </span>{" "}
              and an Informatics graduate of the{" "}
              <span className="font-medium text-fg">
                Technical University of Munich
              </span>
              . The two sides feed each other — research sharpens the
              engineering, and production keeps the research honest.
            </RevealItem>
            <RevealItem as="p" className="text-[16.5px] leading-[1.8] text-body">
              Somewhere along the way I discovered I love the stage. In my
              talks and my writing, I try to take the hardest parts of modern
              ML — LLM observability, evaluation, the reliability nobody tweets
              about — and make them land. That&apos;s the throughline: build it
              well, then help others build it too.
            </RevealItem>
            <RevealItem className="pt-2">
              <Button href="/speaking" variant="outline">
                See my speaking profile →
              </Button>
            </RevealItem>
          </Reveal>

          <Reveal className="flex flex-col gap-3.5">
            {facts.map((f) => (
              <RevealItem key={f.label}>
                <FactCard label={f.label} value={f.value} />
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <Reveal as="ul" className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {values.map((v) => (
            <RevealItem as="li" key={v.title} className="h-full">
              <Card className="h-full p-7">
                <h2 className="font-display text-xl font-semibold leading-[1.25] text-fg">
                  {v.title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] text-body">
                  {v.body}
                </p>
              </Card>
            </RevealItem>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
