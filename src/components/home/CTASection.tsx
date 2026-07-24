import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/siteConfig";

const socials = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "Medium", href: siteConfig.socials.medium },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

/**
 * The contact block. Deliberately theme-independent: it stays navy with cream
 * type in both light and dark, the way the design pins `contactBg`.
 */
export function CTASection() {
  return (
    <Section id="contact">
      <Reveal className="rounded-[28px] border border-white/15 bg-[#06264c] px-6 py-12 text-center sm:px-12 sm:py-[72px]">
        <RevealItem as="h2" className="font-display text-[30px] font-bold tracking-[-0.01em] text-[#f3e6d6] sm:text-[42px]">
          Let&apos;s build something worth trusting.
        </RevealItem>
        <RevealItem as="p" className="mx-auto mt-3.5 max-w-[500px] text-[17px] leading-[1.6] text-[#f3e6d6]/80">
          Open to speaking invitations, workshops, and MLOps / LLM engineering
          conversations.
        </RevealItem>

        <RevealItem className="mt-8 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="dc-btn rounded-full border border-white/20 bg-white/10 px-[26px] py-[13px] text-[14.5px] font-semibold text-[#f3e6d6]"
            >
              {s.label}
            </a>
          ))}
        </RevealItem>

        <RevealItem className="mt-9 flex justify-center">
          <div className="flex max-w-[420px] flex-col items-center gap-3.5 rounded-[20px] border border-white/20 bg-white/10 px-[30px] py-[26px]">
            <h3 className="font-display text-[19px] font-semibold text-[#f3e6d6]">
              Book a 25-minute call
            </h3>
            <p className="text-[14.5px] leading-[1.6] text-[#f3e6d6]/80">
              Grab a slot — happy to talk MLOps, LLM observability, or speaking.
            </p>
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dc-btn rounded-full bg-[#f3e6d6] px-[26px] py-[13px] text-[14.5px] font-bold text-[#06264c]"
            >
              Schedule on Google Calendar
            </a>
          </div>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
