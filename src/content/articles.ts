import { siteConfig } from "./siteConfig";

export interface Article {
  title: string;
  excerpt: string;
  url: string;
  publication: string;
  date?: string;
}

/**
 * Featured writing. These link out to Medium (no in-repo blog for v1).
 * TODO: swap in your best posts with their real URLs. The first entry is a
 * real Datamics blog post found publicly; the rest are gentle placeholders
 * pointing at your Medium profile until you pick specific articles.
 */
export const articles: Article[] = [
  {
    title: "First Steps in Data Science: How to Gain Practical Experience",
    excerpt:
      "A grounded guide for anyone breaking into data science — where real experience actually comes from, and how to build it.",
    url: "https://blog.datamics.com/first-steps-in-data-science-how-to-gain-practical-experience-35f02c13c2fd",
    publication: "Datamics Blog",
  },
  {
    title: "Notes on MLOps & LLM Observability",
    excerpt:
      "TODO: replace with a real Medium post. Field notes on making ML systems observable, testable, and trustworthy.",
    url: siteConfig.socials.medium,
    publication: "Medium",
  },
  {
    title: "Growing Into a Career in Data",
    excerpt:
      "TODO: replace with a real Medium post. Honest reflections on tech, career, and finding your footing in data.",
    url: siteConfig.socials.medium,
    publication: "Medium",
  },
];
