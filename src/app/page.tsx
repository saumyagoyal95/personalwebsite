import { Hero } from "@/components/home/Hero";
import { TopicPills } from "@/components/home/TopicPills";
import { FeaturedTalk } from "@/components/home/FeaturedTalk";
import { CTASection } from "@/components/home/CTASection";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { FactCard } from "@/components/ui/Card";
import { facts } from "@/content/facts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopicPills />

      {/* Credibility strip */}
      <Section>
        <Reveal className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((f) => (
            <RevealItem key={f.label}>
              <FactCard label={f.label} value={f.value} className="h-full" />
            </RevealItem>
          ))}
        </Reveal>
      </Section>

      <FeaturedTalk />

      <CTASection />
    </>
  );
}
