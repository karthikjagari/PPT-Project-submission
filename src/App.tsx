import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GoogleSlidesPlayer } from './components/GoogleSlidesPlayer';
import { ProjectSubmissionCta } from './components/ProjectSubmissionCta';
import { MajorTransitionSection } from './components/MajorTransitionSection';
import { WeekendBootcampSection } from './components/WeekendBootcampSection';
import { BoardExamsCareerSection } from './components/BoardExamsCareerSection';
import { RewardsPrizeWallSection } from './components/RewardsPrizeWallSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { PopupManager } from './components/popups/PopupManager';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { BOOTCAMP_REGISTRATION_URL } from './config';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showStickyMobileCta, setShowStickyMobileCta] = useState(false);

  // Initialize Lenis Momentum Smooth Scrolling & sync with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    const handleScroll = () => {
      setShowStickyMobileCta(window.scrollY > 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  // When preloader finishes, refresh ScrollTrigger to guarantee accurate calculations
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF7EF] text-[#10182C] flex flex-col selection:bg-[#8F1018]/15 selection:text-[#8F1018] overflow-x-clip">
      {/* Fast Minimal Preloader */}
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {/* Sticky Minimal Navbar */}
      <Navbar />

      {/* Main Continuous Cinematic Sequence */}
      <main className="flex-1">
        {/* 01. Hero with Cinematic Video Background & Realistic Visual Box */}
        <HeroSection />
        {/* 04. Google Slides Live Player (Automatic 01/09 -> 09/09 playback in Dark Visual Box) */}
        <GoogleSlidesPlayer />

        {/* 06. Compact Project Submission CTA with Small Deadline Badge */}
        <ProjectSubmissionCta />

        {/* 07. Cinematic AI Journey Transition (Brand New Neural Atmosphere) */}
        <MajorTransitionSection />

        {/* 08. Weekend AI Bootcamp (Large Media Box + 4 Modules) */}
        <WeekendBootcampSection />

        {/* 10. Board Exams + Future Careers (Two Horizontal Visual Boxes) */}
        <BoardExamsCareerSection />

        {/* 11. Rewards: ONE SINGLE CINEMATIC IMAGE in ONE LARGE MEDIA BOX */}
        <RewardsPrizeWallSection />

        {/* 12. Warm Optimistic Final Scene (NEVER BLACK) */}
        <FinalCtaSection />
      </main>

      {/* Minimal Clean Footer */}
      <Footer />

      {/* Visual Storytelling Pop-up Manager (Curiosity & Reward Pop-ups) */}
      <PopupManager />

      {/* Sticky Mobile Bootcamp CTA (appears after scrolling past hero) */}
      {showStickyMobileCta && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FBF7EF]/95 backdrop-blur-md border-t border-stone-200 p-3 flex items-center justify-between gap-3 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-mono font-bold uppercase text-[#FF6600] tracking-wider truncate">
              CLASS 12 AI COHORT
            </p>
            <p className="text-xs font-bold text-[#10182C] truncate">
              Every Saturday & Sunday
            </p>
          </div>
          <a
            href={BOOTCAMP_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 py-2.5 px-5 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white font-black text-xs flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer uppercase tracking-wider border border-[#FFCC00]/40"
          >
            <span>🚀 JOIN AI BOOTCAMP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Desktop Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="hidden md:flex fixed bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-md border border-stone-200 items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}

export default App;