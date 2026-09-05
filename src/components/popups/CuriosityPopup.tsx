import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, Sparkles, Compass } from 'lucide-react';
import { MediaBox } from '../ui/MediaBox';
import { CinematicImage } from '../ui/CinematicImage';
import { TechnicalMarker } from '../ui/TechnicalMarker';

export interface CuriosityPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAction: () => void;
}

export function CuriosityPopup({ isOpen, onClose, onAction }: CuriosityPopupProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#10182C]/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FBF7EF] border border-stone-200/80 shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 animate-in zoom-in-95 slide-in-from-bottom-5"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 flex items-center justify-center shadow-md border border-stone-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid: Desktop Wide Side-by-Side (55% Visual, 45% Text), Mobile Stacked (Visual Top) */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* Mobile: Visual renders first / Desktop: Right column (7 Cols = ~58%) */}
          <div className="order-1 md:order-2 md:col-span-7 p-4 sm:p-6 bg-gradient-to-br from-stone-100 to-[#F8EFE7]/60">
            <MediaBox
              aspectRatio="16:9"
              borderTheme="gold"
              className="rounded-2xl shadow-xl border border-stone-200 relative"
            >
              {/* Cinematic Visual: Student discovering AI possibilities with laptop, sketches, notes */}
              <CinematicImage
                src="/assets/curiosity-discovery-unique.jpg"
                alt="Student discovering AI possibilities on laptop with sketches and notebooks"
                priority={true}
                objectFit="cover"
              />

              {/* Holographic Technical HUD Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10182C]/75 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#FFCC00]">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Interactive Ideation · Neural Pathways</span>
                </div>
              </div>

              {/* Corner Fine Technical Lines (No circles) */}
              <div className="pointer-events-none absolute top-3 right-3 z-20">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M 0 5 H 35 V 40" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                  <rect x="33" y="3" width="4" height="4" fill="#FFCC00" />
                </svg>
              </div>
            </MediaBox>
          </div>

          {/* Text Column: Desktop Left (5 Cols = ~42%), Mobile Bottom */}
          <div className="order-2 md:order-1 md:col-span-5 p-6 sm:p-8 space-y-5 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold uppercase tracking-widest border border-[#FF6600]/20">
              <Compass className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>THE CHALLENGE AWAITS</span>
            </div>

            {/* Core Message */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono font-bold text-stone-500 uppercase tracking-wider">
                YOU'VE SEEN WHAT AI CAN DO.
              </p>
              
              <p className="text-sm sm:text-base font-serif italic text-[#8F1018] font-bold">
                BUT...
              </p>

              <h3 className="text-2xl sm:text-4xl font-black text-[#10182C] tracking-tight leading-tight">
                WHAT WILL YOU{' '}
                <span className="relative inline-block text-[#8F1018] px-1">
                  BUILD?
                  <TechnicalMarker variant="bracket" color="orange" />
                </span>
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              The workshop was only the starting point. There’s a lot more you haven’t tried yet.
            </p>

            {/* Action CTA: Smoothly Scrolls to AI Bootcamp Section */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onAction();
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
              >
                <span>SEE WHAT'S NEXT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CuriosityPopup;