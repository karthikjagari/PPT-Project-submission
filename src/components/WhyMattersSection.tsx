import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';
import { AnimatedLine } from './ui/AnimatedLine';
import { TechnicalMarker } from './ui/TechnicalMarker';

export function WhyMattersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      [card1Ref.current, card2Ref.current].forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="why-matters"
      className="relative w-full py-16 lg:py-24 bg-[#F8EFE7]/50 border-b border-stone-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline: Eyebrow + Clear Title + Simple Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8F1018]/10 text-[#8F1018] text-xs font-mono font-bold uppercase tracking-widest border border-[#8F1018]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8F1018]" />
            <span>EARLY ADVANTAGE · CLASS 12</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#10182C] tracking-tight uppercase">
            WHY THIS MATTERS{' '}
            <span className="relative inline-block text-[#8F1018] px-1">
              RIGHT NOW
              <TechnicalMarker variant="laser" color="orange" />
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-normal max-w-xl mx-auto leading-relaxed">
            Don't wait for college to ship real software. Master modern AI tooling today and build tangible proof of work while in school.
          </p>
        </div>

        {/* Two Large Horizontal Visual Boxes Connected by an Animated Technical Line */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Advantage 01 - Build Before College */}
          <div ref={card1Ref} className="will-change-transform">
            <BentoCard bgTheme="white" borderTheme="subtle" className="p-5 sm:p-7 flex flex-col justify-between h-full shadow-lg">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest">
                  ADVANTAGE 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#10182C] tracking-tight">
                  Build Before College
                </h3>
                <p className="text-sm sm:text-base text-stone-600 font-normal">
                  Don't wait for a degree to ship real software and intelligent systems.
                </p>
              </div>

              <MediaBox
                aspectRatio="16:9"
                className="rounded-xl mt-auto"
              >
                <CinematicImage
                  src="/assets/ideation-desk.jpg"
                  alt="Class 12 student building an AI project on desk"
                  priority={true}
                  objectFit="cover"
                />
              </MediaBox>
            </BentoCard>
          </div>

          {/* Center Technical Connecting Line for Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-12 z-30 pointer-events-none">
            <div className="relative w-full flex items-center justify-center">
              <div className="w-full h-0.5 bg-[#FFCC00]/40" />
              <div
                ref={pulseRef}
                className="absolute w-3 h-3 rounded-full bg-[#FF6600] shadow-[0_0_12px_#FF6600] will-change-transform"
              />
            </div>
          </div>

          {/* Box 2: Advantage 02 - Learn Skills Early (Unique Macro Image) */}
          <div ref={card2Ref} className="will-change-transform">
            <BentoCard bgTheme="white" borderTheme="gold" className="p-5 sm:p-7 flex flex-col justify-between h-full shadow-lg ring-1 ring-[#FFCC00]/40">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono font-bold text-[#FFCC00] uppercase tracking-widest">
                  ADVANTAGE 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#10182C] tracking-tight">
                  Learn Skills Early
                </h3>
                <p className="text-sm sm:text-base text-stone-600 font-normal">
                  Master prompt engineering, workflow automation, and modern AI tooling.
                </p>
              </div>

              <MediaBox
                aspectRatio="16:9"
                borderTheme="gold"
                className="rounded-xl mt-auto"
              >
                <CinematicImage
                  src="/assets/skills-early-unique.jpg"
                  alt="High school student building tech and AI skills early"
                  priority={true}
                  objectFit="cover"
                />
              </MediaBox>
            </BentoCard>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyMattersSection;