import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROJECT_SUBMISSION_URL, BOOTCAMP_REGISTRATION_URL } from '../config';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Coordinated high-impact entrance animation
      const tl = gsap.timeline({ delay: 0.1 });

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
        );
      }
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
      }
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          '-=0.3'
        );
      }
      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          '-=0.3'
        );
      }

      if (indicatorRef.current) {
        tl.fromTo(
          indicatorRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          '-=0.2'
        );
      }

      // Desktop-only subtle scroll scrub
      const isMobile = window.innerWidth < 1024;
      if (!isMobile && centerContentRef.current) {
        gsap.to(centerContentRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
          y: -50,
          opacity: 0.25,
          ease: 'none',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('google-slides-player');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[calc(100svh-64px)] sm:min-h-[calc(100vh-72px)] flex flex-col justify-between items-center text-center overflow-hidden bg-[#FBF7EF] border-b border-stone-200/80"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. PURE HTML/CSS ARCHITECTURAL BACKGROUND (NO RECTANGULAR IMAGE)
      ─────────────────────────────────────────────────────────────── */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Architectural Technical Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 24, 44, 0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 24, 44, 0.045) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
          }}
        />

        {/* Secondary Delicate Micro-Grid for Precision Texture */}
        <div
          className="absolute inset-0 opacity-40 hidden sm:block"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(16, 24, 44, 0.09) 1px, transparent 1px)
            `,
            backgroundSize: '22px 22px',
          }}
        />

        {/* Ambient Warm Tech Spotlights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[980px] h-[360px] sm:h-[500px] bg-gradient-to-br from-[#FF6600]/8 via-[#FFCC00]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-[380px] h-[380px] bg-[#10182C]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[420px] h-[420px] bg-[#FFCC00]/7 rounded-full blur-3xl pointer-events-none" />

        {/* Precision Corner Framing Markers */}
        <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-stone-300/80 hidden sm:block" />
        <div className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-stone-300/80 hidden sm:block" />
        <div className="absolute bottom-12 left-5 w-4 h-4 border-b-2 border-l-2 border-stone-300/80 hidden sm:block" />
        <div className="absolute bottom-12 right-5 w-4 h-4 border-b-2 border-r-2 border-stone-300/80 hidden sm:block" />

        {/* Subtle Technical Telemetry Labels */}
        <div className="absolute top-6 left-12 text-[10px] font-mono tracking-widest uppercase text-stone-600 hidden xl:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00AA00] animate-pulse" />
          <span>SYSTEM: READY // CLASS 12 AI WORKSHOP</span>
        </div>
        <div className="absolute top-6 right-12 text-[10px] font-mono tracking-widest uppercase text-stone-600 hidden xl:block">
          STATUS: SUBMISSION OPEN · COHORT 2026
        </div>

        {/* Bottom smooth gradient blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBF7EF] via-[#FBF7EF]/80 to-transparent pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN STAGE: CLEAN CENTERED TYPOGRAPHIC HERO (NO IMAGES / NO REWARDS)
      ─────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center">
        <div
          ref={centerContentRef}
          className="w-full max-w-3xl lg:max-w-4xl mx-auto flex flex-col items-center will-change-transform"
        >
          {/* Eyebrow Pill */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FF6600] shadow-sm hover:border-stone-300 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AA00] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AA00]" />
            </span>
            <span>THE SESSION ENDS. YOUR AI JOURNEY DOESN'T.</span>
          </div>

          {/* Master Headline: 3 Clean Punchy Lines */}
          <h1
            ref={headlineRef}
            className="mt-5 sm:mt-6 text-[32px] min-[360px]:text-[38px] min-[420px]:text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] sm:leading-[1.08] max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="block text-[#10182C]">SUBMIT YOUR PROJECT.</span>
            <span className="block text-[#10182C]">JOIN THE AI BOOTCAMP.</span>
            <span className="block text-[#FF6600]">WIN REWARDS.</span>
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-stone-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Turn what you learned today into a real AI project, submit it, keep learning every weekend, and get a chance to win exciting rewards.
          </p>

          {/* Action Button Group */}
          <div
            ref={ctaGroupRef}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA: Submit My Project */}
            <a
              href={PROJECT_SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[calc(100%-32px)] max-w-[340px] sm:w-auto h-[54px] sm:h-[58px] px-8 sm:px-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl hover:shadow-[#FF6600]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 border border-[#FFCC00]/40 cursor-pointer flex-shrink-0"
            >
              <span>SUBMIT MY PROJECT →</span>
            </a>

            {/* Secondary CTA: Join AI Bootcamp */}
            <a
              href={BOOTCAMP_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[calc(100%-32px)] max-w-[340px] sm:w-auto h-[52px] sm:h-[58px] px-8 sm:px-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#10182C] hover:bg-[#1A2540] text-white font-bold text-xs sm:text-sm tracking-wide border border-[#10182C] shadow-lg shadow-[#10182C]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer flex-shrink-0"
            >
              <span>JOIN AI BOOTCAMP</span>
              <ArrowRight className="w-4 h-4 text-[#FFCC00]" />
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. BOTTOM SCROLL INDICATOR
      ─────────────────────────────────────────────────────────────── */}
      <button
        ref={indicatorRef}
        onClick={scrollToNext}
        className="relative z-10 mb-4 min-[400px]:mb-5 sm:mb-7 text-stone-600 hover:text-[#10182C] transition-colors cursor-pointer flex flex-col items-center gap-1.5 group will-change-transform"
        aria-label="Scroll to explore brief"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-stone-600 group-hover:text-stone-800">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#FF6600]" />
      </button>

    </section>
  );
}

export default HeroSection;
