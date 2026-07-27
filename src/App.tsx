import { useEffect, useState } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import { ArrowLeft } from "@phosphor-icons/react";
import { CountryProvider, useCountry } from "./lib/CountryContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { DailyRituals } from "./components/DailyRituals";
import { Universities } from "./components/Universities";
import { Checklist } from "./components/Checklist";
import { Timeline } from "./components/Timeline";
import { Marquee } from "./components/Marquee";
import { Curriculum } from "./components/Curriculum";
import { DsaTracker } from "./components/DsaTracker";
import { CourseInfo } from "./components/CourseInfo";
import { CostBreakdown } from "./components/CostBreakdown";
import { PointsTable } from "./components/PointsTable";
import { PrepGuide } from "./components/PrepGuide";
import { JobPlaybook } from "./components/JobPlaybook";

function AppInner() {
  const { country } = useCountry();
  const [view, setView] = useState<"main" | "arsenal">("main");

  const goArsenal = () => {
    setView("arsenal");
    window.scrollTo(0, 0);
  };
  const goMain = () => {
    setView("main");
    window.scrollTo(0, 0);
  };

  return (
    <div id="top" className="grain min-h-[100dvh]">
      <Nav onArsenal={goArsenal} />
      {view === "arsenal" ? (
        <main className="pt-28">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <button
              onClick={goMain}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
            >
              <ArrowLeft weight="bold" size={16} /> Back to the journey
            </button>
          </div>
          <Curriculum />
        </main>
      ) : (
        <main>
          <Hero />
          <DailyRituals />
          <DsaTracker />
          <PrepGuide />
          <JobPlaybook />
          <CourseInfo />
          <CostBreakdown />
          <Universities />
          <PointsTable />
          <Marquee />
          <Checklist />
          <Timeline />
        </main>
      )}
      <footer className="border-t px-6 py-14 text-center md:px-10">
        <p className="font-display text-2xl">{country.footerLine}</p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Built for Shaurya. Open it daily. Tick one block. Repeat.
        </p>
      </footer>
    </div>
  );
}

export function App() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduce]);

  return (
    <CountryProvider>
      <AppInner />
    </CountryProvider>
  );
}
