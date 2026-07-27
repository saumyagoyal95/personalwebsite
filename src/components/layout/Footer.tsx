import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { Container } from "@/components/ui/Container";

const nav = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/writing", label: "Writing" },
  { href: "/book", label: "Book me" },
];

const socials = [
  { href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { href: siteConfig.socials.medium, label: "Medium" },
  { href: siteConfig.socials.mlconference, label: "ML Conference" },
  { href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-2xl font-bold tracking-[-0.01em] text-fg"
            >
              saumya<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.tagline} Building reliable ML &amp; LLM systems — and
              taking the stage to make them make sense.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-faint">
              {siteConfig.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            <div>
              <h3 className="dc-eyebrow text-gold">Pages</h3>
              <ul className="mt-4 space-y-3">
                {nav.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="dc-eyebrow text-gold">Elsewhere</h3>
              <ul className="mt-4 space-y-3">
                {socials.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                    >
                      {l.label}
                      <span
                        className="text-accent opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8 text-center text-[13px] text-muted">
          © {new Date().getFullYear()} {siteConfig.name} · Built with care in
          Berlin
        </div>
      </Container>
    </footer>
  );
}
