import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// A single shared easing so every scripted scene moves with the same
// deliberate, unhurried signature instead of each animation picking its own.
export const PRESTIGE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export { gsap, ScrollTrigger };
