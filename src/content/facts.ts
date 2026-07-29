import { siteConfig } from "./siteConfig";

export interface Fact {
  label: string;
  value: string;
}

/** The quick-facts column on Home and About. */
export const facts: Fact[] = [
  { label: "Based in", value: siteConfig.location },
  { label: "Now", value: "Senior ML Engineer @ Datamics" },
  { label: "Experience", value: "7+ years in ML" },
  { label: "Previously", value: "Verizon" },
  { label: "Education", value: "TUM — Informatics, M.Sc." },
  { label: "Certified", value: "AWS Solutions Architect" },
];
