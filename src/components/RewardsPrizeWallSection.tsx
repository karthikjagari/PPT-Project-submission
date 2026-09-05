import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Trophy, Sparkles } from 'lucide-react';
import { BOOTCAMP_REGISTRATION_URL } from '../config';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';
import { TechnicalMarker } from './ui/TechnicalMarker';

export function RewardsPrizeWallSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rewardCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !rewardCardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rewardCardRef.current,
        { scale: 0.98, y: 24, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="rewards-section"
      className="relative w-full py-16 sm:py-24 bg-[#FBF7EF] border-b border-stone-200/60 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FFCC00]/12 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FF6600]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Eyebrow + Clear Title + Simple Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFCC00]/20 border border-[#FFCC00]/30 text-stone-900 text-xs font-mono font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>EXCELLENCE IN INNOVATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10182C] tracking-tight">
            Your Skills Could Win You{' '}
            <span className="relative inline-block text-[#8F1018] px-1">
              Something Big.
              <TechnicalMarker variant="laser" color="orange" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal max-w-xl mx-auto leading-relaxed">
            Build, participate and compete for exciting technology rewards.
          </p>
        </div>

        {/* ONE SINGLE CINEMATIC IMAGE INSIDE ONE LARGE CINEMATIC MEDIA BOX */}
        <div ref={rewardCardRef} className="will-change-transform">
          <BentoCard bgTheme="white" borderTheme="gold" className="p-3 sm:p-5 shadow-2xl rounded-3xl ring-1 ring-[#FFCC00]/40">
          <MediaBox
            aspectRatio="16:9"
            borderTheme="gold"
            className="rounded-2xl shadow-xl relative"
          >
            <CinematicImage
              src="/assets/unified-rewards.jpg"
              alt="NIAT Student rewards showcase with backpack, certificates, tablets, phones, headphones, smartwatch, and hoodie"
              priority={true}
              objectFit="cover"
            />
            {/* Subtle precision HUD Corner Ticks */}
            <div className="pointer-events-none absolute inset-4 border border-white/10 rounded-xl" />
          </MediaBox>
        </BentoCard>
      </div>

        {/* Call to Action and Minimal Disclaimer below the Single Image */}
        <div className="mt-10 text-center space-y-3">
          <div>
            <a
              href={BOOTCAMP_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
            >
              <span>I WANT TO JOIN</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-stone-400 font-mono max-w-lg mx-auto">
            Rewards are subject to weekly participation, project and eligibility criteria.
          </p>
        </div>

      </div>
    </section>
  );
}

export default RewardsPrizeWallSection;