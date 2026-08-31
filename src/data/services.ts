export type Service = {
  id: string;
  label: string;
  headline: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "credit-repair",
    label: "Credit Repair",
    headline: "We challenge what shouldn't be there.",
    description:
      "Inaccurate, outdated, or unverifiable items are identified and disputed directly with the bureaus and furnishers — methodically, and on the record.",
  },
  {
    id: "inquiry-assistance",
    label: "Inquiry Assistance",
    headline: "Every inquiry, accounted for.",
    description:
      "Unauthorized or unnecessary hard inquiries are reviewed and contested, so your file reflects only what you actually applied for.",
  },
  {
    id: "credit-building",
    label: "Credit Building Guidance",
    headline: "A file built to hold weight.",
    description:
      "Structured guidance on tradelines, utilization, and account mix — the mechanics that move a score, explained plainly and applied deliberately.",
  },
  {
    id: "credit-optimization",
    label: "Personal Credit Optimization",
    headline: "Positioned for what's next.",
    description:
      "Beyond the score itself — we align your full credit profile with the approvals you're actually working toward.",
  },
  {
    id: "business-credit",
    label: "Business Credit Preparation",
    headline: "A financial identity of its own.",
    description:
      "We help separate and build your business credit profile, so your company can qualify on its own standing.",
  },
  {
    id: "financial-strategy",
    label: "Financial Strategy",
    headline: "The plan behind the profile.",
    description:
      "A longer view — sequencing the moves, accounts, and timing that turn a repaired file into lasting financial positioning.",
  },
];
