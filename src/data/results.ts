export type ResultStat = {
  value: string;
  label: string;
};

// Demonstrative figures — replace with verified, client-consented results
// before this ships to real traffic.
export const resultStats: ResultStat[] = [
  { value: "+87", label: "Points, 5 months" },
  { value: "+112", label: "Points, 8 months" },
  { value: "3.4×", label: "Negative items removed" },
];

export const resultComparison = {
  label: "Demonstrative example",
  before: { score: 588, tag: "Starting" },
  after: { score: 700, tag: "8 months later" },
  notes: [
    "Negative items removed",
    "Stronger credit profile",
    "Better approval positioning",
  ],
};
