import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, Trophy, Sparkles, Flame } from 'lucide-react';
import { MediaBox } from '../ui/MediaBox';
import { CinematicImage } from '../ui/CinematicImage';
import { TechnicalMarker } from '../ui/TechnicalMarker';
import { BOOTCAMP_REGISTRATION_URL } from '../../config';

export interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RewardPopup({ isOpen, onClose }: RewardPopupProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#10182C]/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#10182C] text-white border border-[#FFCC00]/40 shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 animate-in zoom-in-95 slide-in-from-bottom-5 bg-blueprint-grid-dark"
      >
        {/* Soft Ambient Spotlight Glows */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-[#FFCC00]/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF6600]/20 rounded-full blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid: Desktop Wide (55-60% Visual on Right, 40-45% Text on Left), Mobile Stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center relative z-10">
          
          {/* Mobile: Visual renders first / Desktop: Right column (7 Cols = ~58%) */}
          <div className="order-1 md:order-2 md:col-span-7 p-4 sm:p-6">
            <MediaBox
              aspectRatio="16:9"
              borderTheme="gold"
              className="rounded-2xl shadow-2xl relative"
            >
              {/* ONE SINGLE CINEMATIC REWARDS IMAGE */}
              <CinematicImage
                src="/assets/rewards-podium.jpg"
                alt="Student rewards podium with tech prizes, certificates, and trophies"
                priority={true}
                objectFit="cover"
              />

              {/* Precision Technical HUD Corner Brackets - NO Hand-Drawn Circles */}
              <div className="pointer-events-none absolute inset-5 border border-[#FFCC00]/30 rounded-xl">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FFCC00]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FFCC00]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FFCC00]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FFCC00]" />
              </div>

              {/* Luminous Floating Particles Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10182C]/60 via-transparent to-transparent" />
            </MediaBox>
          </div>

          {/* Text Column: Desktop Left (5 Cols = ~42%), Mobile Bottom */}
          <div className="order-2 md:order-1 md:col-span-5 p-6 sm:p-8 space-y-5 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFCC00]/15 border border-[#FFCC00]/30 text-[#FFCC00] text-xs font-mono font-bold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>COMPETE & RISE</span>
            </div>

            {/* Core Message */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight uppercase">
                READY TO TAKE YOUR{' '}
                <span className="text-[#FFCC00]">
                  AI JOURNEY
                </span>{' '}
                FURTHER?
              </h3>

              <p className="text-sm sm:text-base font-bold text-[#FF6600] tracking-wide uppercase">
                BUILD MORE. GO FURTHER.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
              Learn AI. Build real projects. Compete. Win rewards.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={BOOTCAMP_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#FF6600]/40 hover:shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
              >
                <span>🚀 CLAIM YOUR COHORT SPOT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[10px] text-stone-500 font-mono">
              Free for Class 12 offline workshop attendees.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RewardPopup;