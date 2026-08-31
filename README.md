# D-Lay Prestige Solutions — The Prestige Entry

A cinematic, scroll-driven homepage for **D-Lay Prestige Solutions**, built
around "The Prestige Entry": a single continuous camera move — clouds over
Manhattan, a descent toward a financial tower, an entry into a private
banking interior, and a 3D-rendered Prestige Card that turns to introduce
the brand — before the page settles into an editorial credit-repair
experience (services, process, results, client stories, final CTA).

## Stack

- **Vite + React + TypeScript** — no server, ships as static files.
- **GSAP + ScrollTrigger** for the scroll-scrubbed cinematic timeline.
- **Lenis** for smoothed scroll, fed into GSAP's own ticker.
- **React Three Fiber + drei + three.js** for the one true 3D element:
  the Prestige Card. Everything else in the cinematic sequence (clouds,
  skyline, tower, interior) is layered SVG/CSS, not WebGL.
- Hand-authored CSS with a token system (`src/styles/tokens.css`) — no
  utility framework, so the design stays bespoke rather than
  default-shaped.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & deploy

```bash
npm run build      # type-checks, then outputs static files to dist/
npm run preview     # serve the production build locally
```

`dist/` is a plain static bundle — deploy it to GitHub Pages, Netlify,
Vercel, Cloudflare Pages, or any static host, same as before. The only
change from a plain HTML site is that `npm run build` now runs first.

## Structure

```
src/
  main.tsx, App.tsx        # entry point, page composition
  styles/                  # tokens.css (design tokens) + global.css
  lib/                     # useLenis, useReducedMotion, useDeviceTier, gsap setup
  data/                    # typed content: services, process, results, client stories
  components/
    nav/                   # SiteNav — transparent -> glass on scroll
    cinematic/              # CinematicIntro + CloudSequence/ManhattanScene/BuildingApproach + art/
    card/                   # PrestigeCard (R3F scene, CSS-3D fallback) + CardReveal
    story/                   # ServicesStory, PrestigeProcess, ResultsExperience, ClientStories, FinalCTA
    layout/                 # SiteFooter
```

## Performance & accessibility notes

- `prefers-reduced-motion` disables all scroll-pinning/scrub and the 3D
  card's auto-tilt; content renders in normal static flow instead.
- Devices below a conservative WebGL/CPU budget (checked once via
  `useDeviceTier`) get a CSS 3D card instead of the React Three Fiber
  canvas — same rotation, no WebGL cost.
- The cinematic sequence and the 3D card scene are both code-split
  (`React.lazy`) so they don't block the editorial content below.
- All scroll-linked animation drives only `transform`/`opacity`.

## Content status

Services, process, results, and client-story copy reflect the brief for
a credit repair / financial solutions business. **The result figures in
`src/data/results.ts` and `src/data/clientStories.ts` are demonstrative
placeholders** (clearly commented in those files) — replace them with
real, client-consented figures before this goes live. The contact email
(`daironlay12@gmail.com`) and a real phone number should also be
confirmed.

## Legacy static site

The original zero-build HTML/CSS/JS version of this site is kept in
[`legacy-static/`](./legacy-static) for reference. It is not part of the
build and can be deleted once the new site is confirmed live.
