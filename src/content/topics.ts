export interface Topic {
  no: string;
  title: string;
  blurb: string;
}

/** The themes Saumya speaks on — shown on Home (marquee) and Speaking page. */
export const topics: Topic[] = [
  {
    no: "01",
    title: "LLM Observability & Evaluation",
    blurb:
      "Making generative systems transparent and accountable — tracing, metrics, and evals that tell you what's actually happening.",
  },
  {
    no: "02",
    title: "MLOps in Production",
    blurb:
      "Taking models from notebook to reliable production: lifecycle, tooling, and the unglamorous engineering that makes ML dependable.",
  },
  {
    no: "03",
    title: "Data Workflows & Quality",
    blurb:
      "Curation, annotation, and pipelines that don't rot — the data foundations everything else stands on.",
  },
  {
    no: "04",
    title: "Building a Career in Data",
    blurb:
      "Practical, honest guidance for engineers growing into ML — from first steps to standing on a conference stage.",
  },
];

/** Short labels for the "I work on" pill row under the hero. */
export const topicPills: string[] = [
  "MLOps",
  "LLM Observability",
  "GenAI in production",
  "RAG & agent evals",
  "Data workflow tooling",
];
