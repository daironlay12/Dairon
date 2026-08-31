import { useLenis } from "./lib/useLenis";
import { useReducedMotion } from "./lib/useReducedMotion";
import { SiteNav } from "./components/nav/SiteNav";
import { CinematicIntro } from "./components/cinematic/CinematicIntro";
import { PrestigeCard } from "./components/card/PrestigeCard";
import { ServicesStory } from "./components/story/ServicesStory";
import { PrestigeProcess } from "./components/story/PrestigeProcess";
import { ResultsExperience } from "./components/story/ResultsExperience";
import { ClientStories } from "./components/story/ClientStories";
import { FinalCTA } from "./components/story/FinalCTA";
import { SiteFooter } from "./components/layout/SiteFooter";

function App() {
  const reducedMotion = useReducedMotion();
  useLenis(!reducedMotion);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <div id="top" />
        <CinematicIntro />
        <PrestigeCard />
        <ServicesStory />
        <PrestigeProcess />
        <ResultsExperience />
        <ClientStories />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
