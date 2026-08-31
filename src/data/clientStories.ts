export type ClientStory = {
  id: string;
  index: string;
  startingScore: number;
  resultScore: number;
  timeframe: string;
  narrative: string;
};

// Demonstrative composites — replace with real, consented client outcomes
// before this ships to real traffic.
export const clientStories: ClientStory[] = [
  {
    id: "client-01",
    index: "Client 01",
    startingScore: 612,
    resultScore: 724,
    timeframe: "7 months",
    narrative:
      "Came in after a denied mortgage pre-approval. We disputed six inaccurate collections and restructured utilization across three cards.",
  },
  {
    id: "client-02",
    index: "Client 02",
    startingScore: 549,
    resultScore: 661,
    timeframe: "6 months",
    narrative:
      "Rebuilding after a period of missed payments. Focused first on removing outdated items, then on establishing new positive history.",
  },
  {
    id: "client-03",
    index: "Client 03",
    startingScore: 671,
    resultScore: 779,
    timeframe: "5 months",
    narrative:
      "Already in good standing, positioning for a business line of credit. We separated personal and business profiles and optimized both.",
  },
];
