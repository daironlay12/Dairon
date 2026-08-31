import { SkylineSignature } from "../cinematic/art/SkylineSignature";
import { GrainOverlay } from "../cinematic/art/GrainOverlay";
import "./finalCta.css";

/**
 * The close returns to the cinematic register the page opened in — same
 * skyline art, now a still, night-tinted backdrop rather than a moving
 * camera. Bookends the narrative instead of introducing new motifs.
 */
export function FinalCTA() {
  return (
    <section className="final-cta" id="contact" aria-labelledby="final-cta-heading">
      <div className="final-cta__backdrop" aria-hidden="true">
        <SkylineSignature />
      </div>
      <GrainOverlay />
      <div className="container final-cta__content">
        <p className="eyebrow">Contact D-Lay Prestige</p>
        <h2 id="final-cta-heading" className="final-cta__title">
          Your next chapter
          <br />
          starts with better credit.
        </h2>
        <p className="final-cta__lead">
          Let's build the financial profile that opens better opportunities.
        </p>
        <div className="final-cta__actions">
          <a className="btn btn-primary" href="mailto:daironlay12@gmail.com">
            Start Your Consultation
          </a>
          <a className="btn btn-ghost" href="mailto:daironlay12@gmail.com">
            Contact D-Lay Prestige
          </a>
        </div>
      </div>
    </section>
  );
}
