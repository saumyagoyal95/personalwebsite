import { siteConfig } from "./siteConfig";

export type SocialId = "linkedin" | "medium" | "mlconference";

export interface Social {
  id: SocialId;
  label: string;
  href: string;
}

/**
 * The one place profile links are assembled. Components import from here rather
 * than reaching into siteConfig themselves, so a URL change lands everywhere —
 * footer icons, the contact block, and the JSON-LD `sameAs` array.
 *
 * The URLs themselves still live in siteConfig; this only pairs them with the
 * labels and ids the UI needs.
 */
export const socials: Social[] = [
  { id: "linkedin", label: "LinkedIn", href: siteConfig.socials.linkedin },
  { id: "medium", label: "Medium", href: siteConfig.socials.medium },
  {
    id: "mlconference",
    label: "ML Conference",
    href: siteConfig.socials.mlconference,
  },
];

/** The profiles that have an icon, for the icon-only row in the footer. */
export const iconSocials = socials.filter(
  (s): s is Social & { id: "linkedin" | "medium" } =>
    s.id === "linkedin" || s.id === "medium",
);

/** Every profile URL, for the Person schema's `sameAs`. */
export const socialUrls = socials.map((s) => s.href);
