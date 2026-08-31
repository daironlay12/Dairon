import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { CloudSequence } from "./CloudSequence";
import { ManhattanScene } from "./ManhattanScene";
import { BuildingApproach } from "./BuildingApproach";
import { GrainOverlay } from "./art/GrainOverlay";
import "./cinematic.css";

gsap.registerPlugin(useGSAP);

/**
 * Owns the single master scroll timeline for scenes 1-4 (clouds ->
 * Manhattan -> tower push-in -> building interior). One pinned section,
 * one continuous camera move — the child scene components only provide
 * the DOM/art each beat animates.
 */
export function CinematicIntro() {
  const rootRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [compact, setCompact] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 720,
  );

  useEffect(() => {
    const onResize = () => setCompact(window.innerWidth < 720);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useGSAP(
    () => {
      if (reducedMotion || !rootRef.current) return;
      const q = gsap.utils.selector(rootRef);

      gsap.set(q(".layer-building"), { clipPath: "circle(0% at 50% 50%)" });
      gsap.set(q(".word-fragment"), { opacity: 0, y: 22 });
      gsap.set(q(".wordmark__brand, .wordmark__tagline"), {
        opacity: 0,
        y: 14,
      });
      gsap.set(q(".layer-skyline"), {
        opacity: 0,
        scale: 1,
        transformOrigin: "54% 68%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
          pin: pinRef.current,
          anticipatePin: 1,
        },
      });

      // --- Scene 1: Clouds -------------------------------------------------
      tl.to(q(".wordmark__brand"), { opacity: 1, y: 0, duration: 0.55 }, 0.35)
        .to(
          q(".wordmark__tagline"),
          { opacity: 1, y: 0, duration: 0.55 },
          0.6,
        )
        .to(
          q(".wordmark__brand, .wordmark__tagline"),
          { opacity: 0, y: -18, duration: 0.4 },
          1.35,
        );

      // --- Scene 2: Descent into Manhattan ----------------------------------
      const descent = 1.5;
      tl.to(q('[data-depth="far"]'), { y: "-16%", opacity: 0.12, duration: 1.6 }, descent)
        .to(q('[data-depth="mid"]'), { y: "-6%", x: "-5%", opacity: 0.2, duration: 1.6 }, descent)
        .to(q('[data-depth="near"]'), { y: "34%", opacity: 0, duration: 1.3 }, descent)
        .to(q(".layer-skyline"), { opacity: 1, duration: 1.1 }, descent + 0.25);

      // --- Scene 3: The financial tower --------------------------------------
      const tower = compact ? 3.0 : 3.2;
      tl.to(
        q(".layer-skyline"),
        { scale: compact ? 1.8 : 2.3, x: "-2%", y: "-5%", duration: 1.7, ease: "power2.inOut" },
        tower,
      );
      const words = [".word-fragment--1", ".word-fragment--2", ".word-fragment--3"];
      words.forEach((sel, i) => {
        const at = tower + 0.2 + i * 0.5;
        tl.to(q(sel), { opacity: 1, y: 0, duration: 0.3 }, at).to(
          q(sel),
          { opacity: 0, y: -12, duration: 0.28 },
          at + 0.38,
        );
      });

      // --- Scene 4: Entering the building -------------------------------------
      const enter = tower + 2.0;
      tl.to(
        q(".layer-building"),
        { clipPath: "circle(140% at 50% 50%)", duration: 1.3, ease: "power2.in" },
        enter,
      ).to(q(".layer-skyline"), { opacity: 0, duration: 0.9 }, enter + 0.3);

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: rootRef, dependencies: [reducedMotion, compact] },
  );

  return (
    <section
      ref={rootRef}
      className={`cinematic-intro${reducedMotion ? " is-static" : ""}${
        compact && !reducedMotion ? " is-compact" : ""
      }`}
      aria-label="The Prestige Entry — a cinematic introduction to D-Lay Prestige"
    >
      <div className="cinematic-intro__pin" ref={pinRef}>
        <div className="cinematic-intro__stage">
          <CloudSequence />
          <ManhattanScene />
          <BuildingApproach />
        </div>
        {!reducedMotion && (
          <div className="cinematic-intro__scroll-cue" aria-hidden="true">
            <span />
            Scroll
          </div>
        )}
        <GrainOverlay />
      </div>
    </section>
  );
}
