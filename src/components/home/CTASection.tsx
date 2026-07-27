import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/siteConfig";
import { iconSocials } from "@/content/socials";

// Labelled text links, deliberately not bare icons: this block is the one place
// a visitor is deciding how to reach out, so the destinations are spelled out.
const contactLinks = [
  ...iconSocials.map((s) => ({ label: s.label, href: s.href })),
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

/**
 * The contact block. Deliberately theme-independent: it stays navy with cream
 * type in both light and dark, the way the design pins `contactBg`.
 */
export function CTASection() {
  return (
    <Section id="contact">
      <Reveal className="rounded-[28px] border border-white/15 bg-[#06264c] px-6 py-10 text-center sm:px-10 sm:py-12">
        <RevealItem as="h2" className="font-display text-[24px] font-bold tracking-[-0.01em] text-[#f3e6d6] sm:text-[30px]">
          Let&apos;s build something worth trusting.
        </RevealItem>
        <RevealItem as="p" className="mx-auto mt-3 max-w-[460px] text-[15px] leading-[1.6] text-[#f3e6d6]/75">
          Open to speaking invitations, workshops, and MLOps / LLM engineering
          conversations.
        </RevealItem>

        {/*
          Booking is the primary action, so it keeps the solid button; the
          profile links sit beside it as quieter outlines. Previously the
          booking sat in its own bordered panel below, which made this block
          roughly twice as tall as it needed to be.
        */}
        <RevealItem className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dc-btn rounded-full bg-[#f3e6d6] px-[26px] py-[13px] text-[14.5px] font-bold text-[#06264c]"
          >
            Book a 25-minute call
          </a>
          {contactLinks.map((s) => (
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
      </Reveal>
    </Section>
  );
}
