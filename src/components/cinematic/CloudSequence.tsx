import { CloudField } from "./art/CloudField";

/**
 * Scene 1 — the opening beat. Pure atmosphere: gradient sky, layered
 * cloud banks, and the two lines of copy that introduce the brand. All
 * motion for this scene lives in CinematicIntro's master timeline; this
 * component only lays out the DOM it animates.
 */
export function CloudSequence() {
  return (
    <>
      <div className="stage-layer layer-sky" />
      <div className="stage-layer layer-clouds">
        <CloudField />
      </div>
      <div className="wordmark">
        <p className="wordmark__brand">D-Lay Prestige</p>
        <p className="wordmark__tagline">Elevate your financial future.</p>
      </div>
    </>
  );
}
