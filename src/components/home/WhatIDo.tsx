import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { focusAreas } from "@/content/focusAreas";
import { tone, toneText } from "@/lib/tone";

/** "Selected work" — the numbered focus-area grid. */
export function WhatIDo() {
  return (
    <Section id="work">
      <SectionHeading
        kicker="Selected work"
        kickerTone="gold"
        title="What I spend my days on."
      />

      <Reveal as="ul" className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {focusAreas.map((f, i) => (
          <RevealItem as="li" key={f.no} className="h-full">
            <Card className="h-full p-7">
              <div
                className={`font-display text-[34px] font-bold leading-none ${toneText[tone(i)]}`}
              >
                {f.no}
              </div>
              <h3 className="mt-3.5 font-display text-xl font-semibold leading-[1.25] text-fg">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-body">{f.desc}</p>
            </Card>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
