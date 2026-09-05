import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROJECT_SUBMISSION_URL, BOOTCAMP_REGISTRATION_URL } from '../config';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const primaryCtaRef = useRef<HTMLAnchorElement>(null);
  const secondaryCtaRef = useRef<HTMLAnchorElement>(null);
  const indicatorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Crisp, fast entrance animation on mount
      const entranceTl = gsap.timeline({ delay: 0.1 });

      if (eyebrowRef.current) {
        entranceTl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
        );
      }
      if (headlineRef.current) {
        entranceTl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.32'
        );
      }
      if (descRef.current) {
        entranceTl.fromTo(
          descRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          '-=0.32'
        );
      }
      if (primaryCtaRef.current) {
        entranceTl.fromTo(
          primaryCtaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          '-=0.3'
        );
      }
      if (secondaryCtaRef.current) {
        entranceTl.fromTo(
          secondaryCtaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          '-=0.3'
        );
      }
      if (indicatorRef.current) {
        entranceTl.fromTo(
          indicatorRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          '-=0.2'
        );
      }



      // 3. Desktop-only subtle scroll scrub (disabled on mobile to avoid unexpected shifting)
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        });

        if (contentRef.current) {
          scrollTl.to(
            contentRef.current,
            {
              y: -40,
              opacity: 0.2,
              ease: 'none',
            },
            0
          );
        }
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
      className="relative w-full min-h-[calc(100svh-64px)] sm:min-h-[calc(100vh-72px)] flex flex-col justify-between items-center text-center overflow-hidden bg-[#10182C] border-b border-white/10"
    >
      {/* 1. Technical Blueprint Grid with Crisp White Lines */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Ambient Warm Tech Spotlights for Visual Depth */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[360px] sm:h-[480px] bg-gradient-to-br from-[#FF6600]/15 via-[#FFCC00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[380px] h-[320px] bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[380px] h-[320px] bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Base Grid with Crisp White Lines */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 48%, black 45%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 48%, black 45%, transparent 95%)',
          }}
        />

        {/* Major Architectural White Grid Lines */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)
            `,
            backgroundSize: '160px 160px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 48%, black 45%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 48%, black 45%, transparent 95%)',
          }}
        />

        {/* Corner Technical Framing Marks */}
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/30 hidden sm:block" />
        <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/30 hidden sm:block" />
        <div className="absolute bottom-10 left-6 w-4 h-4 border-b border-l border-white/30 hidden sm:block" />
        <div className="absolute bottom-10 right-6 w-4 h-4 border-b border-r border-white/30 hidden sm:block" />

        {/* Subtle bottom transition blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#10182C] via-[#10182C]/60 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content: Centered with Balanced Rhythm */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-10 sm:py-16 md:py-20 flex flex-col items-center will-change-transform"
      >
        
        {/* Eyebrow Pill */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFCC00] shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF00] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF00]" />
          </span>
          <span>THE SESSION ENDS. YOUR AI JOURNEY DOESN'T.</span>
        </div>

        {/* Master Headline: 3 Lines with Journey Hierarchy */}
        <h1
          ref={headlineRef}
          className="mt-3.5 sm:mt-5 text-[26px] min-[360px]:text-[28px] min-[400px]:text-[32px] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.14] sm:leading-[1.1] max-w-[360px] sm:max-w-3xl md:max-w-5xl mx-auto flex flex-col items-center"
        >
          <span className="block text-white">SUBMIT YOUR PROJECT.</span>
          <span className="block text-white">JOIN THE AI BOOTCAMP.</span>
          <span className="block text-[#FFCC00] drop-shadow-sm">WIN REWARDS.</span>
        </h1>

        {/* Description: Short, readable, and responsive */}
        <p
          ref={descRef}
          className="mt-3.5 sm:mt-5 text-xs min-[380px]:text-sm sm:text-base md:text-lg text-stone-200/90 font-normal leading-relaxed max-w-[340px] sm:max-w-xl md:max-w-2xl mx-auto"
        >
          Turn what you learned today into a real AI project, submit it, keep learning every weekend, and get a chance to win exciting rewards.
        </p>

        {/* Action Button Group: Both fit cleanly in viewport, 10-14px gap */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: Submit My Project */}
          <a
            ref={primaryCtaRef}
            href={PROJECT_SUBMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[calc(100%-40px)] max-w-[360px] sm:w-auto h-[54px] sm:h-[56px] sm:py-4 sm:px-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/35 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 border border-[#FFCC00]/40 cursor-pointer flex-shrink-0"
          >
            <span>🚀 SUBMIT MY PROJECT →</span>
          </a>

          {/* Secondary CTA: Join AI Bootcamp */}
          <a
            ref={secondaryCtaRef}
            href={BOOTCAMP_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[calc(100%-40px)] max-w-[360px] sm:w-auto h-[52px] sm:h-[56px] sm:py-4 sm:px-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-bold text-xs sm:text-sm tracking-wide border border-white/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer flex-shrink-0"
          >
            <span>🔥 JOIN AI BOOTCAMP</span>
            <ArrowRight className="w-4 h-4 text-[#FFCC00]" />
          </a>
        </div>

      </div>

      {/* 4. Subtle Bottom Scroll Indicator */}
      <button
        ref={indicatorRef}
        onClick={scrollToNext}
        className="relative z-10 mb-4 min-[400px]:mb-6 sm:mb-8 text-stone-300/80 hover:text-white transition-colors cursor-pointer flex flex-col items-center gap-1.5 group will-change-transform"
        aria-label="Scroll to explore brief"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 group-hover:text-stone-200">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#FFCC00]" />
      </button>

    </section>
  );
}

export default HeroSection;