type MonogramProps = {
  className?: string;
  framed?: boolean;
};

/**
 * The D-Lay Prestige monogram — a single "D" set in the display face
 * inside a hairline bezel. Used on the card face, in the nav, and in the
 * footer, always at the same proportions so it reads as one mark.
 */
export function Monogram({ className, framed = true }: MonogramProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-label="D-Lay Prestige monogram"
    >
      {framed && (
        <>
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="0.75"
          />
          <circle
            cx="50"
            cy="50"
            r="41"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="0.5"
          />
        </>
      )}
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fontFamily="'Fraunces Variable', serif"
        fontSize="52"
        fontWeight="480"
        fill="currentColor"
      >
        D
      </text>
    </svg>
  );
}
