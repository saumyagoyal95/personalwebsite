export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  source?: string; // e.g. "LinkedIn", event name
}

/**
 * TODO: Replace these with real quotes pulled from your LinkedIn posts/comments
 * and event feedback. Keep them punchy (1–3 sentences). Attribute with the
 * person's name + role. The layout adapts to any number of entries (2–6 works
 * best). These placeholders are clearly generic on purpose.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "One of those rare talks that made a genuinely hard topic feel obvious. I left with things I could apply the next morning.",
    name: "Add a real name",
    title: "Attendee, ML Conference",
    source: "LinkedIn",
  },
  {
    quote:
      "Clear, energetic, and deeply technical without ever losing the room. Exactly the kind of speaker you want on the main stage.",
    name: "Add a real name",
    title: "Track Chair",
    source: "Event feedback",
  },
  {
    quote:
      "Saumya turns MLOps from a buzzword into something you can actually build. Brilliant on stage and even better in the Q&A.",
    name: "Add a real name",
    title: "Engineering Lead",
    source: "LinkedIn",
  },
];
