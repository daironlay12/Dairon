import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { processStages } from "../../data/process";
import "./process.css";

/**
 * The four stages read as one continuous story, not four cards — a
 * single line traces down the left edge as the section scrolls through,
 * scrubbed but never pinned (this section shouldn't hijack the scroll).
 */
export function PrestigeProcess() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !lineRef.current) return;
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section
      className="prestige-process"
      id="process"
      ref={sectionRef}
      aria-labelledby="process-heading"
    >
      <div className="container">
        <p className="eyebrow">Process</p>
        <h2 id="process-heading" className="prestige-process__title">
          The Prestige Process
        </h2>

        <div className="prestige-process__track">
          <div className="prestige-process__rail">
            <div className="prestige-process__line" ref={lineRef} />
          </div>
          <ol className="prestige-process__list">
            {processStages.map((stage) => (
              <li key={stage.index} className="prestige-process__stage">
                <span className="prestige-process__index">{stage.index}</span>
                <div>
                  <h3 className="prestige-process__stage-title">
                    {stage.title}
                  </h3>
                  <p className="prestige-process__stage-description">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
