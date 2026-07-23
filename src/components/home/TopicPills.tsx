import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Section";
import { topicPills } from "@/content/topics";
import { tone, toneBg } from "@/lib/tone";

/** The "I work on" pill row that sits directly under the hero. */
export function TopicPills() {
  return (
    <Container className="flex flex-wrap items-center gap-3 pt-2 pb-10 sm:pb-14">
      <span className="mr-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
        I work on
      </span>
      {topicPills.map((label, i) => (
        <Chip key={label}>
          <span
            className={`h-[7px] w-[7px] rounded-sm ${toneBg[tone(i)]}`}
            aria-hidden
          />
          {label}
        </Chip>
      ))}
    </Container>
  );
}
