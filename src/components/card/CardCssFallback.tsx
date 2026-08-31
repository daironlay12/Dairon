import { forwardRef } from "react";
import { Monogram } from "../cinematic/art/Monogram";

/**
 * A real CSS 3D rotation (transform-style: preserve-3d, two faces with
 * backface-visibility hidden) for devices below the WebGL budget. No
 * mouse tilt here — that nuance is reserved for the full render; this
 * path exists purely to keep the turn honest without a GPU cost.
 */
export const CardCssFallback = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="card-css">
      <div className="card-css__stage" ref={ref}>
        <div className="card-css__face card-css__face--front">
          <Monogram className="card-css__monogram" framed={false} />
          <p className="card-css__wordmark">D-Lay Prestige</p>
        </div>
        <div className="card-css__face card-css__face--back">
          <p className="card-css__wordmark">D-Lay Prestige</p>
        </div>
      </div>
    </div>
  );
});

CardCssFallback.displayName = "CardCssFallback";
