import { useEffect, useRef } from "react";
import { clientStories } from "../../data/clientStories";
import "./clientStories.css";

/**
 * Full-viewport case studies rather than three quote cards. CSS scroll
 * snap does the "one case per scroll" work; an observer only toggles a
 * class for the quiet enter animation, so this degrades gracefully with
 * no JS dependency for the core behavior.
 */
export function ClientStories() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cases = containerRef.current?.querySelectorAll(".client-story");
    if (!cases?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.5 },
    );
    cases.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="client-stories"
      id="stories"
      aria-labelledby="stories-heading"
    >
      <h2 id="stories-heading" className="sr-only">
        Client Stories
      </h2>
      <div className="client-stories__scroller" ref={containerRef}>
        {clientStories.map((story) => {
          const improvement = story.resultScore - story.startingScore;
          return (
            <article className="client-story" key={story.id}>
              <div className="client-story__backdrop" aria-hidden="true" />
              <div className="container client-story__inner">
                <p className="eyebrow">{story.index}</p>
                <div className="client-story__scores">
                  <div>
                    <p className="client-story__score-label">
                      Starting Score
                    </p>
                    <p className="client-story__score">
                      {story.startingScore}
                    </p>
                  </div>
                  <div>
                    <p className="client-story__score-label">Result</p>
                    <p className="client-story__score">{story.resultScore}</p>
                  </div>
                  <div>
                    <p className="client-story__score-label">Improvement</p>
                    <p className="client-story__score client-story__score--accent">
                      +{improvement}
                    </p>
                  </div>
                </div>
                <p className="client-story__narrative">{story.narrative}</p>
                <p className="client-story__timeframe">{story.timeframe}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
