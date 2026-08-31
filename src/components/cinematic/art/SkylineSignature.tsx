type Bar = { x: number; w: number; h: number };

// Art-directed, not random: heights are hand-tuned so the silhouette reads
// as a skyline with a clear low point either side of the hero tower.
const FAR: Bar[] = [
  { x: 20, w: 34, h: 120 }, { x: 70, w: 26, h: 90 }, { x: 112, w: 40, h: 160 },
  { x: 168, w: 22, h: 80 }, { x: 204, w: 46, h: 200 }, { x: 264, w: 30, h: 110 },
  { x: 310, w: 34, h: 150 }, { x: 360, w: 24, h: 95 }, { x: 400, w: 44, h: 190 },
  { x: 460, w: 28, h: 130 }, { x: 900, w: 30, h: 120 }, { x: 944, w: 40, h: 175 },
  { x: 998, w: 24, h: 90 }, { x: 1036, w: 36, h: 150 }, { x: 1086, w: 28, h: 110 },
  { x: 1128, w: 42, h: 195 }, { x: 1184, w: 26, h: 100 }, { x: 1224, w: 34, h: 145 },
  { x: 1272, w: 30, h: 120 }, { x: 1316, w: 44, h: 205 }, { x: 1374, w: 26, h: 95 },
  { x: 1414, w: 36, h: 160 }, { x: 1464, w: 28, h: 115 }, { x: 1506, w: 32, h: 135 },
];

const MID: Bar[] = [
  { x: 40, w: 60, h: 240 }, { x: 120, w: 44, h: 180 }, { x: 190, w: 70, h: 300 },
  { x: 280, w: 50, h: 210 }, { x: 350, w: 56, h: 260 }, { x: 430, w: 40, h: 170 },
  { x: 500, w: 64, h: 280 }, { x: 940, w: 56, h: 250 }, { x: 1020, w: 42, h: 190 },
  { x: 1085, w: 66, h: 300 }, { x: 1170, w: 48, h: 220 }, { x: 1240, w: 58, h: 260 },
  { x: 1320, w: 40, h: 180 }, { x: 1380, w: 62, h: 290 }, { x: 1460, w: 46, h: 210 },
  { x: 1520, w: 50, h: 230 },
];

const FOREGROUND: Bar[] = [
  { x: -20, w: 180, h: 130 }, { x: 150, w: 220, h: 90 }, { x: 360, w: 200, h: 150 },
  { x: 950, w: 240, h: 110 }, { x: 1180, w: 200, h: 160 }, { x: 1380, w: 240, h: 100 },
];

function Bars({ bars, fill }: { bars: Bar[]; fill: string }) {
  return (
    <>
      {bars.map((b) => (
        <rect
          key={`${b.x}-${b.h}`}
          x={b.x}
          y={900 - b.h}
          width={b.w}
          height={b.h}
          fill={fill}
        />
      ))}
    </>
  );
}

/**
 * An abstracted, editorial "light signature" of a skyline rather than a
 * literal illustration — vertical strokes of varying height standing in
 * for lit towers. Reads as Manhattan in silhouette without needing (or
 * risking) photoreal artwork. The hero tower is its own group so
 * BuildingApproach can isolate and push in on it.
 */
export function SkylineSignature() {
  return (
    <svg
      className="skyline-signature"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tower-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e4c989" />
          <stop offset="14%" stopColor="#c9a868" />
          <stop offset="100%" stopColor="#161b22" />
        </linearGradient>
        <radialGradient id="tower-glow" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#e4c989" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e4c989" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g data-depth="far" opacity="0.55">
        <Bars bars={FAR} fill="#3a4b66" />
      </g>

      <g data-depth="mid" opacity="0.85">
        <Bars bars={MID} fill="#232c3d" />
      </g>

      <g data-depth="tower">
        <ellipse cx="770" cy="270" rx="220" ry="220" fill="url(#tower-glow)" />
        <rect x="700" y="150" width="140" height="750" fill="url(#tower-face)" />
        <rect x="700" y="150" width="6" height="750" fill="#e4c989" opacity="0.8" />
      </g>

      <g data-depth="foreground">
        <Bars bars={FOREGROUND} fill="#05070a" />
      </g>
    </svg>
  );
}
