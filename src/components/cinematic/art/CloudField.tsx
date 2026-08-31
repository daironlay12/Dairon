/**
 * Three depth-separated cloud banks, each a handful of soft blurred blobs.
 * Scene animation targets them by data-depth via GSAP selectors — the art
 * itself is static, the depth illusion comes entirely from scroll-driven
 * transform/opacity on each group (see CloudSequence).
 */
export function CloudField() {
  return (
    <svg
      className="cloud-field"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cloud-far-grad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#26364d" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#26364d" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cloud-mid-grad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3a4b66" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3a4b66" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cloud-near-grad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#0a0e14" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0a0e14" stopOpacity="0" />
        </radialGradient>
        <filter id="cloud-blur-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="38" />
        </filter>
        <filter id="cloud-blur-hard" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <g data-depth="far" filter="url(#cloud-blur-soft)">
        <ellipse cx="220" cy="220" rx="420" ry="150" fill="url(#cloud-far-grad)" />
        <ellipse cx="820" cy="140" rx="500" ry="170" fill="url(#cloud-far-grad)" />
        <ellipse cx="1350" cy="260" rx="420" ry="160" fill="url(#cloud-far-grad)" />
      </g>

      <g data-depth="mid" filter="url(#cloud-blur-soft)">
        <ellipse cx="420" cy="420" rx="480" ry="130" fill="url(#cloud-mid-grad)" />
        <ellipse cx="1120" cy="380" rx="520" ry="150" fill="url(#cloud-mid-grad)" />
        <ellipse cx="80" cy="520" rx="360" ry="120" fill="url(#cloud-mid-grad)" />
      </g>

      <g data-depth="near" filter="url(#cloud-blur-hard)">
        <ellipse cx="260" cy="640" rx="440" ry="120" fill="url(#cloud-near-grad)" />
        <ellipse cx="980" cy="700" rx="560" ry="150" fill="url(#cloud-near-grad)" />
        <ellipse cx="1480" cy="600" rx="360" ry="130" fill="url(#cloud-near-grad)" />
        <ellipse cx="620" cy="760" rx="500" ry="140" fill="url(#cloud-near-grad)" />
      </g>
    </svg>
  );
}
