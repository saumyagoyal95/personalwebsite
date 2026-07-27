export interface Article {
  title: string;
  excerpt: string;
  url: string;
  publication: string;
  date?: string;
}

/**
 * Featured writing. These link out to Medium and the Datamics blog (no in-repo
 * blog for v1).
 *
 * Every entry must point at a specific published piece. The page already links
 * to the Medium profile on its own, so an entry whose url is just the profile
 * adds nothing — leave the list short rather than padding it.
 */
export const articles: Article[] = [
  {
    title: "First Steps in Data Science: How to Gain Practical Experience",
    excerpt:
      "A grounded guide for anyone breaking into data science — where real experience actually comes from, and how to build it.",
    url: "https://blog.datamics.com/first-steps-in-data-science-how-to-gain-practical-experience-35f02c13c2fd",
    publication: "Datamics Blog",
  },
];
