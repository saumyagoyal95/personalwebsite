export interface FocusArea {
  no: string;
  title: string;
  desc: string;
}

/** "What I spend my days on" — the Selected work grid on Home. */
export const focusAreas: FocusArea[] = [
  {
    no: "01",
    title: "LLM Observability & Evaluation",
    desc: "Building tooling to monitor, measure, and audit LLM behavior in production, so teams can trust what they ship.",
  },
  {
    no: "02",
    title: "MLOps Pipeline Integration",
    desc: "Helping teams fold MLOps practices into existing production pipelines — from data versioning to deployment and monitoring.",
  },
  {
    no: "03",
    title: "Data Workflow Tooling",
    desc: "Hands-on work with tools like Voxel51 and Label Studio to streamline how teams label, review, and manage ML data.",
  },
];
