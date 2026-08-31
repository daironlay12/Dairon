import { Suspense, lazy, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { useDeviceTier } from "../../lib/useDeviceTier";
import { CardCssFallback } from "./CardCssFallback";
import { CardReveal } from "./CardReveal";
import "./card.css";

const CardScene = lazy(() => import("./CardScene"));

/**
 * Scenes 5 & 6 — the signature moment. Its own short pin (not part of
 * CinematicIntro's timeline) so the hand-off between the two acts stays
 * a clean, single beat: card appears, turns with scroll, reverse copy
 * fades in, page continues in normal flow.
 */
export function PrestigeCard() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const cssCardRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef({ value: 0 });

  const reducedMotion = useReducedMotion();
  const tier = useDeviceTier();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.set(revealRef.current, { opacity: 0, y: 28 });

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: pinRef.current,
      anticipatePin: 1,
      onUpdate(self) {
        progressRef.current.value = self.progress;

        if (tier === "lite" && cssCardRef.current) {
          cssCardRef.current.style.transform = `rotateY(${self.progress * 180}deg)`;
        }

        const revealP = gsap.utils.clamp(0, 1, (self.progress - 0.66) / 0.34);
        gsap.set(revealRef.current, {
          opacity: revealP,
          y: 28 * (1 - revealP),
        });
      },
    });

    return () => st.kill();
  }, [reducedMotion, tier]);

  return (
    <section
      ref={sectionRef}
      className={`prestige-card${reducedMotion ? " is-static" : ""}`}
      aria-label="The Prestige Card"
    >
      <div className="prestige-card__pin" ref={pinRef}>
        <div className="prestige-card__stage">
          {reducedMotion ? (
            <CardCssFallback ref={cssCardRef} />
          ) : tier === "full" ? (
            <Suspense fallback={null}>
              <CardScene progressRef={progressRef} />
            </Suspense>
          ) : (
            <CardCssFallback ref={cssCardRef} />
          )}
        </div>
        <CardReveal ref={revealRef} static={reducedMotion} />
      </div>
    </section>
  );
}
