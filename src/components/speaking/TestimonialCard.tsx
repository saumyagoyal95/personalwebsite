import type { Testimonial } from "@/content/testimonials";
import { Card } from "@/components/ui/Card";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card as="figure" className="flex h-full flex-col justify-between">
      <span className="font-display text-4xl leading-none text-accent" aria-hidden>
        &ldquo;
      </span>
      <blockquote className="mt-3 flex-1 text-[15.5px] leading-[1.7] text-body">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <div className="text-[15px] font-semibold text-fg">{t.name}</div>
        <div className="mt-0.5 text-[13px] text-muted">
          {t.title}
          {t.source ? ` · ${t.source}` : ""}
        </div>
      </figcaption>
    </Card>
  );
}
