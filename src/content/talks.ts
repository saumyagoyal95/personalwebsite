export type TalkType = "keynote" | "talk" | "workshop";

export interface Venue {
  city: string;
  /** A four-digit year renders; anything else is treated as unconfirmed and
   *  dropped from the page silently. Keep placeholders here rather than
   *  deleting the venue, so the open question stays visible in the data. */
  year: string;
}

export interface Talk {
  title: string;
  type: TalkType;
  event: string;
  /** Where it happened. Leave empty when the city isn't confirmed — the card
   *  then renders event and year with no stray separator. Never guess. */
  city?: string;
  /** ISO date, used only for ordering. The page renders the year alone, which
   *  is derived from this — there is no separate year field to fall out of
   *  sync with it. */
  sortDate: string;
  /** For a talk given in more than one city. When set, these replace the
   *  single city/year on the card. */
  venues?: Venue[];
  coSpeaker?: string;
  /** One line. Optional: better absent than invented. */
  summary?: string;
  /** The event page. The talk title links to it. Never a homepage, an index,
   *  or a placeholder — leave it unset and the title renders as plain text. */
  url?: string;
  /** Whether a photo of this session exists in /public/images/speaking/.
   *  Recorded for reference; the card design has no image slot today. */
  hasPhoto?: boolean;
  /** Drives the featured card on the home page. */
  featured?: boolean;
}

/**
 * Declared newest-first for readability, but `talks` below sorts by `sortDate`
 * regardless, so a mis-filed entry can't quietly appear in the wrong place.
 */
const entries: Talk[] = [
  {
    title: "Streamlining Data Workflows with Voxel51 and Label Studio",
    type: "workshop",
    event: "ML Conference",
    // Munich, not Berlin: the MLcon speaker profile files this under its
    // "Munich 2025" edition, while the LLM observability talk below was the
    // Berlin 2025 edition. Same year, two different events.
    city: "Munich",
    sortDate: "2025-11-28",
    coSpeaker: "Thomas Waller",
    summary:
      "Designing data and annotation workflows with Voxel51 and Label Studio.",
    url: "https://mlconference.ai/speaker/saumya-goyal/",
    hasPhoto: true,
  },
  {
    title:
      "You Can't Improve What You Can't See: Making LLMs Transparent & Accountable",
    type: "talk",
    event: "ML Conference",
    sortDate: "2025-11-27",
    venues: [
      { city: "Berlin", year: "2025" },
      // Confirmed 2026-07-28 from the MLcon speaker profile, which lists an
      // "Amsterdam 2026" edition of this talk.
      { city: "Amsterdam", year: "2026" },
    ],
    coSpeaker: "Saif Addin Ellafi",
    summary:
      "LLM observability and evaluation — building transparency into GenAI systems in production.",
    url: "https://mlconference.ai/generative-ai-content/llm-observability-evaluation/",
    hasPhoto: true,
    featured: true,
  },
  {
    title:
      "Operationalizing GenAI Agents: Deployment, Orchestration & Observability with LangGraph, LangFuse & Airflow",
    type: "workshop",
    event: "ML Conference",
    city: "Berlin",
    // Approximate: the profile gives the edition ("Berlin 2025") but no day.
    // Only the year is ever rendered, so this date does nothing except order
    // this entry next to the other Berlin 2025 session.
    sortDate: "2025-11-26",
    summary:
      "A full day — eight hours — on deploying, orchestrating, and observing GenAI agents with LangGraph, LangFuse, and Airflow.",
    // No url: the profile's link for this session points at the Voxel51
    // workshop's page, so it's the wrong target. Better bare than wrong.
    hasPhoto: false,
  },
  {
    title:
      "Workshop: MLFlow, LabelStudio, FiftyOne — Harnessing Tools for Efficient Machine Learning",
    type: "workshop",
    event: "ML Conference",
    city: "Munich",
    // Approximate — edition year only, see the note above.
    sortDate: "2024-11-01",
    url: "https://mlconference.ai/tools-apis-frameworks/workshop-efficient-machine-learning-mlflow-labelstudio-fiftyone",
    hasPhoto: false,
  },
  {
    title: "Reusable AI: Customizing LLMs for Diverse Business Needs",
    type: "talk",
    event: "PyData Munich",
    city: "Munich",
    sortDate: "2024-09-11",
    coSpeaker: "Saif Addin Ellafi",
    summary:
      "Customizing RAG systems with LLMs so one solution serves many products instead of handling each demand separately.",
    url: "https://www.meetup.com/pydata-munchen/events/302822402/",
    hasPhoto: false,
  },
  {
    title:
      "Leveraging Open Source Tools for Advanced Machine Learning Pipelines",
    type: "talk",
    event: "MLOps Community Munich",
    city: "Munich",
    sortDate: "2024-01-30",
    // Solo talk. Stefan Ojanen spoke at the same meetup that evening but on a
    // separate session — confirmed 2026-07-28, so this is settled, not pending.
    summary: "The open source stack at each stage of the MLOps workflow.",
    hasPhoto: true,
  },
  {
    title: "Managing Machine Learning Life Cycles with MLflow",
    type: "workshop",
    event: "ML Conference",
    // city intentionally unset — unconfirmed, and deliberately NOT carried over
    // from the "Munich" the site used to claim.
    sortDate: "2023-11-27",
    summary:
      "MLflow and Apache Airflow for building and operating an ML pipeline.",
    url: "https://mlconference.ai/speaker/saumya-goyal/",
    hasPhoto: true,
  },
  {
    title: "ML Model Monitoring",
    type: "talk",
    event: "PyData Munich",
    city: "Munich",
    sortDate: "2023-02-16",
    coSpeaker: "Alon Gubkin",
    hasPhoto: false,
  },
];

/** Strict reverse chronological. ISO dates sort correctly as plain strings. */
export const talks: Talk[] = [...entries].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);

/** The year shown on a card, derived from sortDate so the two can't diverge. */
export function talkYear(talk: Talk): string {
  return talk.sortDate.slice(0, 4);
}

/** Venues with a confirmed year. Placeholders drop out without a trace. */
export function confirmedVenues(talk: Talk): Venue[] {
  return (talk.venues ?? []).filter((v) => /^\d{4}$/.test(v.year));
}
