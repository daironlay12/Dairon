import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { resultStats, resultComparison } from "../../data/results";
import "./results.css";

/**
 * Numbers do the talking — no SaaS-style dashboard chrome. Stats count
 * up once, on entry, rather than scrubbing with scroll (a single
 * confident reveal reads calmer than numbers ticking as you scroll).
 */
export function ResultsExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return;
      const targets = sectionRef.current.querySelectorAll<HTMLElement>(
        "[data-count-to]",
      );
      targets.forEach((el) => {
        const to = Number(el.dataset.countTo);
        const prefix = el.dataset.countPrefix ?? "";
        const state = { val: 0 };
        gsap.to(state, {
          val: to,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate() {
            el.textContent = `${prefix}${Math.round(state.val)}`;
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section
      className="results-experience"
      id="results"
      ref={sectionRef}
      aria-labelledby="results-heading"
    >
      <div className="container">
        <p className="eyebrow">Results</p>
        <h2 id="results-heading" className="results-experience__title">
          Progress you can see.
        </h2>

        <div className="results-experience__stats">
          {resultStats.map((stat) => {
            const numeric = parseInt(stat.value.replace(/\D/g, ""), 10);
            const prefix = stat.value.startsWith("+") ? "+" : "";
            const isMultiplier = stat.value.includes("×");
            return (
              <div className="results-experience__stat" key={stat.label}>
                <p className="results-experience__number">
                  {reducedMotion || isMultiplier ? (
                    stat.value
                  ) : (
                    <span data-count-to={numeric} data-count-prefix={prefix}>
                      0
                    </span>
                  )}
                  {isMultiplier && ""}
                </p>
                <p className="results-experience__label">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="results-experience__comparison">
          <p className="results-experience__comparison-label">
            {resultComparison.label}
          </p>
          <div className="results-experience__compare-row">
            <div className="results-experience__compare-block">
              <p className="results-experience__compare-tag">
                {resultComparison.before.tag}
              </p>
              <p className="results-experience__compare-number results-experience__compare-number--before">
                {resultComparison.before.score}
              </p>
            </div>
            <span className="results-experience__compare-divider" aria-hidden="true" />
            <div className="results-experience__compare-block">
              <p className="results-experience__compare-tag">
                {resultComparison.after.tag}
              </p>
              <p className="results-experience__compare-number">
                {resultComparison.after.score}
              </p>
            </div>
          </div>
          <ul className="results-experience__notes">
            {resultComparison.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
