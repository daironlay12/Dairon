import { useEffect, useState } from "react";

export type DeviceTier = "full" | "lite";

/**
 * A conservative, one-shot heuristic for how much WebGL budget a device
 * gets. "lite" skips real-time reflections/env maps and falls back to a
 * CSS-only 3D card. Re-evaluated only on resize, never on scroll.
 */
function evaluate(): DeviceTier {
  if (typeof window === "undefined") return "lite";

  const cores = navigator.hardwareConcurrency ?? 4;
  // deviceMemory is Chromium-only; absence isn't a signal either way.
  const memory = (navigator as Navigator & { deviceMemory?: number })
    .deviceMemory;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 720;

  let webglOk = false;
  try {
    const canvas = document.createElement("canvas");
    webglOk = !!(
      canvas.getContext("webgl2") || canvas.getContext("webgl")
    );
  } catch {
    webglOk = false;
  }

  if (!webglOk) return "lite";
  if (cores <= 4 && (coarsePointer || narrow)) return "lite";
  if (typeof memory === "number" && memory <= 4) return "lite";

  return "full";
}

export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>(evaluate);

  useEffect(() => {
    const onResize = () => setTier(evaluate());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return tier;
}
