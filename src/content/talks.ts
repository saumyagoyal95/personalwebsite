export type TalkType = "keynote" | "talk" | "workshop";

export interface Talk {
  title: string;
  type: TalkType;
  event: string;
  location?: string;
  date: string; // human-readable
  year: number;
  abstract: string;
  tags: string[];
  featured?: boolean;
  videoUrl?: string; // TODO: add recording links when available
  slidesUrl?: string; // TODO: add slide deck links when available
}

/**
 * Seeded from public sources (ML Conference, devmio). Please confirm the
 * abstracts read the way you want, and add video/slide links as you get them.
 */
export const talks: Talk[] = [
  {
    title: "You Can't Improve What You Can't See: Making LLMs Transparent & Accountable",
    type: "talk",
    event: "ML Conference",
    location: "Munich, Germany",
    date: "November 27, 2025",
    year: 2025,
    featured: true,
    abstract:
      "Large language models fail in quiet, expensive ways. This talk makes the case that observability and rigorous evaluation aren't add-ons but the foundation of trustworthy LLM systems — how to instrument, trace, and hold generative models accountable so teams can actually improve what they ship.",
    tags: ["LLMs", "Observability", "Evaluation", "Trustworthy AI"],
    // videoUrl: "",
    // slidesUrl: "",
  },
  {
    title: "Streamlining Data Workflows with Voxel51 and Label Studio",
    type: "workshop",
    event: "ML Conference",
    location: "Munich, Germany",
    date: "November 28, 2025",
    year: 2025,
    abstract:
      "A hands-on workshop on building efficient, high-quality data pipelines for ML — using Voxel51 for dataset curation and visualization alongside Label Studio for annotation, and wiring them into a workflow teams can actually maintain.",
    tags: ["Data Workflows", "MLOps", "Tooling", "Annotation"],
  },
  {
    title: "Managing Machine Learning Life Cycles with MLflow",
    type: "talk",
    event: "ML Conference / devmio",
    date: "November 27, 2023",
    year: 2023,
    abstract:
      "From experiment tracking to model registry and deployment: a practical look at using MLflow to bring order to the ML lifecycle, so models move from notebook to production without losing reproducibility along the way.",
    tags: ["MLOps", "MLflow", "Lifecycle", "Reproducibility"],
  },
];

export interface Venue {
  venue: string;
  note: string;
  date?: string;
}

/**
 * Stages and communities without a dedicated session write-up yet. Promote one
 * into `talks` above once you have a title and abstract for it.
 */
export const speakingVenues: Venue[] = [
  {
    venue: "VibeKode Berlin",
    note: "Evaluating RAGs & agents before they reach customers",
    date: "2026",
  },
  { venue: "PyData Munich", note: "Speaker" },
  { venue: "MLOps Community Munich", note: "Speaker" },
];
