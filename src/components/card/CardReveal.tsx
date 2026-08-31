import { forwardRef } from "react";

type CardRevealProps = {
  static?: boolean;
};

/**
 * The copy that seals the transition from cinematic act to commercial
 * page — appears once the card has turned to show its reverse. In
 * `static` mode (reduced motion) it renders fully visible with no
 * scroll-driven opacity applied by the parent.
 */
export const CardReveal = forwardRef<HTMLDivElement, CardRevealProps>(
  ({ static: isStatic }, ref) => {
    return (
      <div
        ref={ref}
        className={`card-reveal${isStatic ? " card-reveal--static" : ""}`}
      >
        <p className="eyebrow">D-Lay Prestige Solution</p>
        <h2 className="card-reveal__title">
          Credit Repair &amp; Financial Solutions
        </h2>
        <p className="card-reveal__line">
          BETTER CREDIT. BETTER ACCESS. BETTER OPPORTUNITIES.
        </p>
        <div className="card-reveal__actions">
          <a className="btn btn-primary" href="#contact">
            Start Your Journey
          </a>
          <a className="btn btn-ghost" href="#results">
            View Results
          </a>
        </div>
      </div>
    );
  },
);

CardReveal.displayName = "CardReveal";
