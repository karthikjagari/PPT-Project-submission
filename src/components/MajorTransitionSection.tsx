import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BOOTCAMP_REGISTRATION_URL } from '../config';
import { TechnicalMarker } from './ui/TechnicalMarker';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';

export function MajorTransitionSection() {
  return (
    <section
      id="ai-journey"
      className="relative w-full py-16 sm:py-24 bg-[#10182C] text-white overflow-hidden border-y border-white/10"
    >
      {/* Very Subtle Deep Navy Grid Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Subtle Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFCC00] text-xs font-mono font-bold uppercase tracking-widest border border-white/20 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
          <span>YOU STARTED HERE.</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white mb-3 sm:mb-4">
          Now Take Your AI{' '}
          <span className="relative inline-block text-[#FFCC00] px-1">
            Journey Further.
            <TechnicalMarker variant="laser" color="yellow" />
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-stone-300 font-normal max-w-xl mx-auto leading-relaxed mb-8">
          Today’s workshop was just the beginning. Keep building every weekend.
        </p>

        {/* Attached AI Robotics & Drone Prototype Image */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <BentoCard bgTheme="navy" borderTheme="gold" className="p-2 sm:p-3 shadow-2xl">
            <MediaBox
              aspectRatio="16:9"
              className="rounded-xl overflow-hidden"
            >
              <CinematicImage
                src="/assets/ai-journey-prototype.webp"
                alt="High-tech autonomous drone and AI robotics prototype workbench in engineering laboratory"
                objectFit="cover"
              />
            </MediaBox>
          </BentoCard>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href={BOOTCAMP_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[340px] sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
          >
            <span>JOIN ONLINE AI BOOTCAMP</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default MajorTransitionSection;
