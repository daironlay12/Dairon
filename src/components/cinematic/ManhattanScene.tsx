import { SkylineSignature } from "./art/SkylineSignature";

/**
 * Scene 2 & 3 share one asset: the skyline is revealed here (Manhattan
 * descent) and then pushed into by CinematicIntro's timeline to become
 * Scene 3's financial tower — one continuous camera move, not a cut
 * between two illustrations.
 */
export function ManhattanScene() {
  return (
    <>
      <div className="stage-layer layer-skyline">
        <SkylineSignature />
      </div>
      <div className="stage-layer word-fragments" aria-hidden="true">
        <span className="word-fragment word-fragment--1">CREDIT.</span>
        <span className="word-fragment word-fragment--2">ACCESS.</span>
        <span className="word-fragment word-fragment--3">OPPORTUNITY.</span>
      </div>
    </>
  );
}
