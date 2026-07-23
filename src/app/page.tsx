import { Hero } from "@/components/home/Hero";
import { TopicPills } from "@/components/home/TopicPills";
import { WhatIDo } from "@/components/home/WhatIDo";
import { FeaturedTalk } from "@/components/home/FeaturedTalk";
import { CTASection } from "@/components/home/CTASection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { FactCard } from "@/components/ui/Card";
import { TestimonialCard } from "@/components/speaking/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/content/testimonials";
import { facts } from "@/content/facts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopicPills />

      {/* About */}
      <Section id="about">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              kicker="About"
              kickerTone="gold"
              title="Making the invisible parts of ML visible."
            />
            <Reveal className="mt-6 space-y-4">
              <RevealItem as="p">
                <p className="text-[16.5px] leading-[1.8] text-body">
                  I&apos;m a Senior Machine Learning Engineer at Datamics, where I
                  help teams take MLOps and LLM systems from prototype into
                  production — and make sure they stay observable once they&apos;re
                  there.
                </p>
              </RevealItem>
              <RevealItem as="p">
                <p className="text-[16.5px] leading-[1.8] text-body">
                  Before Datamics I was at Verizon. I&apos;m an AWS Solutions
                  Architect and an Informatics graduate of the Technical
                  University of Munich. When I&apos;m not shipping, I&apos;m
                  usually writing or speaking about making ML systems easier to
                  trust.
                </p>
              </RevealItem>
              <RevealItem className="pt-2">
                <Button href="/about" variant="outline">
                  Read the longer story →
                </Button>
              </RevealItem>
            </Reveal>
          </div>

          <Reveal className="flex flex-col gap-3.5">
            {facts.map((f) => (
              <RevealItem key={f.label}>
                <FactCard label={f.label} value={f.value} />
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Section>

      <FeaturedTalk />

      <WhatIDo />

      {/* Social proof preview */}
      <Section>
        <SectionHeading
          kicker="From the room"
          title="What people say after."
          intro="Feedback from organizers and audiences. (Adding more real quotes soon.)"
        />
        <Reveal as="ul" className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <RevealItem as="li" key={i} className="h-full">
              <TestimonialCard t={t} />
            </RevealItem>
          ))}
        </Reveal>
        <div className="mt-9">
          <Button href="/speaking" variant="outline">
            Explore the speaking profile →
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
