import type { Metadata } from "next";
import Image from "next/image";
import { Section, Kicker, Chip } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FactCard } from "@/components/ui/Card";
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";
import { TalkCard } from "@/components/talks/TalkCard";
import { PhotoGrid } from "@/components/speaking/PhotoGrid";
import { LogoStrip } from "@/components/speaking/LogoStrip";
import { talks } from "@/content/talks";
import { speakingTopics } from "@/content/topics";
import { speakingHero, speakingPhotos } from "@/content/speakingPhotos";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Saumya Goyal speaks on LLM observability, MLOps, and building reliable ML systems. Talks, topics, photos, and how to invite her to your stage.",
};

const oneSheet = [
  { label: "Formats", value: "Keynote · Talk · Workshop · Panel" },
  { label: "Audience", value: "Engineers, ML/AI teams, tech leaders" },
  { label: "Languages", value: "English" },
  { label: "Based in", value: `${siteConfig.location} · travels for events` },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-6 sm:pt-36">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <RevealItem className="mb-3.5">
                <Kicker>Speaking profile</Kicker>
              </RevealItem>
              <RevealItem as="h1" className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
                On stage &amp; in the{" "}
                <span className="text-accent">community.</span>
              </RevealItem>
              <RevealItem as="p" className="mt-[22px] max-w-[560px] text-[19px] leading-[1.65] text-muted">
                I give technical talks that respect the audience&apos;s
                intelligence and their time — turning MLOps, LLM observability,
                and the messy reality of production ML into something people can
                use.
              </RevealItem>
              <RevealItem className="mt-[34px] flex flex-wrap gap-3.5">
                <Button href="/book" size="lg">
                  Book me to speak
                </Button>
                <Button
                  href={`mailto:${siteConfig.email}?subject=Speaking%20invitation`}
                  variant="outline"
                  size="lg"
                >
                  Email an invitation
                </Button>
              </RevealItem>
            </Reveal>

            <Reveal>
              <RevealItem>
                <div className="overflow-hidden rounded-[18px] border border-line">
                  <Image
                    src={speakingHero.src}
                    alt={speakingHero.alt}
                    width={speakingHero.width}
                    height={speakingHero.height}
                    priority
                    sizes="(min-width: 1024px) 390px, 100vw"
                    className="block h-auto w-full"
                  />
                </div>
              </RevealItem>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Topics */}
      <Section>
        <SectionHeading
          kicker="Topics"
          kickerTone="gold"
          title="Topics I speak on."
        />
        <Reveal as="ul" className="mt-10 flex flex-wrap gap-3">
          {speakingTopics.map((label) => (
            <RevealItem as="li" key={label}>
              <Chip>{label}</Chip>
            </RevealItem>
          ))}
        </Reveal>
      </Section>

      {/* Talks */}
      <Section>
        <SectionHeading kicker="Talks & workshops" title="Where I've spoken." />

        <Reveal className="mt-6">
          <RevealItem as="p" className="max-w-[640px] text-[19px] leading-[1.65] text-muted">
            Speaking at ML Conference, PyData, and MLOps Community events across
            multiple cities in Europe since 2022.
          </RevealItem>
          <RevealItem className="mt-3.5">
            <a
              href={siteConfig.socials.mlconference}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[13px] text-muted transition-colors hover:text-accent"
            >
              Speaker profile — ML Conference
              <ExternalLinkIcon className="ml-1.5 h-[0.85em] w-[0.85em]" />
            </a>
          </RevealItem>
        </Reveal>

        <div className="mt-8">
          <LogoStrip />
        </div>

        <Reveal as="ul" className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {talks.map((talk, i) => (
            <RevealItem as="li" key={talk.title} className="h-full">
              <TalkCard talk={talk} index={i} />
            </RevealItem>
          ))}
        </Reveal>
      </Section>

      {/* Photos */}
      <Section>
        <SectionHeading
          kicker="On stage"
          kickerTone="gold"
          title="In the room."
        />
        <div className="mt-10">
          <PhotoGrid photos={speakingPhotos} />
        </div>
      </Section>

      {/* One-sheet + CTA */}
      <Section>
        <Reveal className="grid grid-cols-1 gap-10 rounded-[28px] border border-line bg-surface p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <RevealItem className="mb-3.5">
              <Kicker tone="gold">Speaker one-sheet</Kicker>
            </RevealItem>
            <RevealItem as="h2" className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.01em] text-fg sm:text-[36px]">
              The quick facts for organizers.
            </RevealItem>
            <RevealItem className="mt-8 flex flex-wrap gap-3.5">
              <Button href="/book" size="lg">
                Check my availability
              </Button>
              <Button
                href={`mailto:${siteConfig.email}?subject=Speaking%20invitation`}
                variant="outline"
                size="lg"
              >
                Email me
              </Button>
            </RevealItem>
          </div>

          <RevealItem>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {oneSheet.map((f) => (
                <FactCard
                  key={f.label}
                  label={f.label}
                  value={f.value}
                  className="bg-bg"
                />
              ))}
            </div>
          </RevealItem>
        </Reveal>
      </Section>
    </>
  );
}
