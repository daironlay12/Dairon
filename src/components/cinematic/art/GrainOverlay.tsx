/**
 * A near-invisible film-grain layer over the whole cinematic sequence.
 * Static (no animation) — it exists to keep large flat gradients from
 * looking digitally flat, at effectively zero runtime cost.
 */
export function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="grain-overlay"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="prestige-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#prestige-grain)" />
    </svg>
  );
}
