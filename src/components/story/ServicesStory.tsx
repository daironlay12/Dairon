import { useEffect, useRef, useState } from "react";
import { services } from "../../data/services";
import "./story.css";

/**
 * Editorial alternative to six identical cards: a left-hand list of
 * service names, a sticky right-hand panel that follows whichever one is
 * in view. Driven by IntersectionObserver rather than a scroll-hijacked
 * pin — restrained, and works the same under reduced motion.
 */
export function ServicesStory() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index ?? 0,
            );
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    rowRefs.current.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-story" id="solutions" aria-labelledby="services-heading">
      <div className="container services-story__intro">
        <p className="eyebrow">Solutions</p>
        <h2 id="services-heading" className="services-story__title">
          More than credit repair.
        </h2>
        <p className="services-story__lead">
          We build stronger financial positioning.
        </p>
      </div>

      <div className="services-story__grid container">
        <ul className="services-story__list">
          {services.map((service, i) => (
            <li
              key={service.id}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              data-index={i}
              className={`services-story__row${active === i ? " is-active" : ""}`}
            >
              <span className="services-story__label">{service.label}</span>
              <div className="services-story__inline-detail">
                <p className="services-story__headline">{service.headline}</p>
                <p className="services-story__description">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="services-story__panel" aria-live="polite">
          <p className="services-story__headline">
            {services[active].headline}
          </p>
          <p className="services-story__description">
            {services[active].description}
          </p>
        </div>
      </div>
    </section>
  );
}
