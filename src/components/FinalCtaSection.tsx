import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BOOTCAMP_REGISTRATION_URL } from '../config';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';
import { TechnicalMarker } from './ui/TechnicalMarker';

export function FinalCtaSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#FBF7EF] bg-blueprint-grid overflow-hidden border-t border-stone-200/80">
      {/* Warm Ambient Sunlight and Golden Glows */}
      <div className="pointer-events-none absolute -top-20 right-1/4 w-[600px] h-[600px] bg-[#FFCC00]/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#FF6600]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bright Cinematic Box (Warm Cream & Burgundy Accents, NEVER BLACK) */}
        <BentoCard
          bgTheme="paper"
          borderTheme="burgundy"
          className="p-8 sm:p-14 shadow-2xl rounded-3xl border-2 border-[#8F1018]/20 ring-1 ring-[#FFCC00]/30 bg-gradient-to-br from-[#FFFDF8] via-[#FBF7EF] to-[#F8EFE7]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8F1018]/10 text-[#8F1018] text-xs font-mono font-bold uppercase tracking-widest border border-[#8F1018]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
                <span>YOUR AI JOURNEY STARTS HERE</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#10182C] leading-[1.12]">
                Don't Spend Another{' '}
                <span className="relative inline-block text-[#8F1018] px-1">
                  Weekend
                  <TechnicalMarker variant="laser" color="orange" />
                </span>{' '}
                Just Scrolling.
              </h2>

              {/* Simple Related Description */}
              <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed max-w-xl">
                Learn AI. Build real projects. Prepare smarter.
              </p>

              {/* Highlight Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-stone-300 text-stone-800 text-xs sm:text-sm font-bold shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Built exclusively for Class 12 students.</span>
              </div>

              {/* CTA & Free Tag */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={BOOTCAMP_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
                >
                  <span>🚀 JOIN THE AI BOOTCAMP</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <span className="text-xs font-mono text-stone-500 font-bold uppercase tracking-wider text-center sm:text-left">
                  Every Weekend · Free to Join
                </span>
              </div>

            </div>

            {/* Right Wide Cinematic Media Box (5 Cols) with Unique Sunlit Collaborative Scene */}
            <div className="lg:col-span-5">
              <MediaBox
                aspectRatio="4:3"
                borderTheme="burgundy"
                className="rounded-2xl shadow-xl border border-[#8F1018]/20 bg-[#FFFDF8]"
              >
                <CinematicImage
                  src="/assets/final-optimistic-unique.jpg"
                  alt="Students collaborating in sunlit creative technology workshop"
                  priority={true}
                  objectFit="cover"
                />
              </MediaBox>
            </div>

          </div>
        </BentoCard>

      </div>
    </section>
  );
}

export default FinalCtaSection;