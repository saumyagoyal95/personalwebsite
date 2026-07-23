/**
 * The design alternates its two highlight colours (orange, then gold) down every
 * list — topic pills, talk cards, focus areas. `tone(i)` reproduces that cycle.
 */
export type Tone = "accent" | "gold";

export function tone(index: number): Tone {
  return index % 2 === 0 ? "accent" : "gold";
}

export const toneText: Record<Tone, string> = {
  accent: "text-accent",
  gold: "text-gold",
};

export const toneBg: Record<Tone, string> = {
  accent: "bg-accent",
  gold: "bg-gold",
};
