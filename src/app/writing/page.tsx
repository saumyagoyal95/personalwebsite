import type { Metadata } from "next";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { articles } from "@/content/articles";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and field notes by Saumya Goyal on MLOps, LLM observability, data science, and building a career in tech — on Medium and the Datamics blog.",
};

export default function WritingPage() {
  return (
    <>
      <section className="relative pt-32 pb-6 sm:pt-36">
        <Container>
          <Reveal className="max-w-3xl">
            <RevealItem className="mb-3.5">
              <Kicker>Writing</Kicker>
            </RevealItem>
            <RevealItem as="h1">
              <h1 className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
                Notes from the <span className="text-accent">field.</span>
              </h1>
            </RevealItem>
            <RevealItem as="p">
              <p className="mt-[22px] text-[19px] leading-[1.65] text-muted">
                I write about MLOps, data science, and the craft of a career in
                tech — mostly on Medium. A few favourites below; the rest live on
                my profile.
              </p>
            </RevealItem>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Reveal as="ul" className="flex flex-col gap-5">
          {articles.map((a, i) => (
            <RevealItem as="li" key={i}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dc-card flex flex-col gap-6 rounded-[18px] p-[30px] sm:flex-row sm:items-center sm:justify-between sm:px-[34px]"
              >
                <div className="max-w-2xl">
                  <span className="dc-eyebrow text-gold">
                    {a.publication}
                    {a.date ? ` · ${a.date}` : ""}
                  </span>
                  <h2 className="mt-2 font-display text-[21px] font-semibold leading-[1.3] text-fg">
                    {a.title}
                  </h2>
                  <p className="mt-2.5 text-[15px] leading-[1.7] text-body">
                    {a.excerpt}
                  </p>
                </div>
                <span className="shrink-0 text-[15px] font-semibold whitespace-nowrap text-accent">
                  Read →
                </span>
              </a>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-9">
          <RevealItem>
            <a
              href={siteConfig.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="dc-card flex flex-col gap-6 rounded-[18px] p-[30px] sm:flex-row sm:items-center sm:justify-between sm:px-[34px]"
            >
              <div>
                <h2 className="font-display text-[21px] font-semibold text-fg">
                  On tech, ML, and career — on Medium
                </h2>
                <p className="mt-1.5 text-[15px] text-muted">
                  Essays and lessons on building trustworthy ML.
                </p>
              </div>
              <span className="shrink-0 text-[15px] font-semibold whitespace-nowrap text-accent">
                Read on Medium →
              </span>
            </a>
          </RevealItem>
        </Reveal>

        <div className="mt-9">
          <Button href={siteConfig.socials.medium} variant="outline" size="lg">
            Read more on Medium ↗
          </Button>
        </div>
      </Section>
    </>
  );
}
