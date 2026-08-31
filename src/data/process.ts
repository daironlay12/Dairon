export type ProcessStage = {
  index: string;
  title: string;
  description: string;
};

export const processStages: ProcessStage[] = [
  {
    index: "01",
    title: "Analyze",
    description:
      "A full review of your credit file across all three bureaus — every account, inquiry, and item examined for what it actually is.",
  },
  {
    index: "02",
    title: "Strategize",
    description:
      "A sequenced plan built around your file specifically: what gets disputed first, what gets built, and in what order.",
  },
  {
    index: "03",
    title: "Execute",
    description:
      "Disputes are filed, tracked, and followed through — with documentation, deadlines, and the bureaus held to their own timelines.",
  },
  {
    index: "04",
    title: "Elevate",
    description:
      "As items resolve, we turn toward positioning — the accounts, habits, and timing that carry your profile forward.",
  },
];
