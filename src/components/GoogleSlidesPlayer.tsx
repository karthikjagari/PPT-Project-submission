import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle, Download } from 'lucide-react';
import { PROJECT_SUBMISSION_URL, PROJECT_PPT_DOWNLOAD_URL } from '../config';

const TOTAL_SLIDES = 9;
const SLIDE_DURATION_MS = 4000;

export function GoogleSlidesPlayer() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideProgress, setSlideProgress] = useState(0);

  // Automatic Presentation Playback Loop
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) % SLIDE_DURATION_MS;
      setSlideProgress((elapsed / SLIDE_DURATION_MS) * 100);

      // Slide transition trigger
      const slideIndex = Math.floor(((Date.now() - startTime) / SLIDE_DURATION_MS) % TOTAL_SLIDES) + 1;
      setCurrentSlide(slideIndex);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="google-slides-player" className="relative w-full py-16 lg:py-24 bg-[#10182C] text-white overflow-hidden bg-blueprint-grid-dark border-y border-white/10">
      {/* Background Ambient Spotlights */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FFCC00]/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[350px] bg-[#FF6600]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Eyebrow + Clear Title + Simple Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-[#FFCC00] shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
            <span>INTERACTIVE BRIEF · 9 SLIDES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Your Project Brief.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-300 font-normal max-w-xl mx-auto leading-relaxed">
            See the challenge parameters, pick your domain problem, and start prototyping your AI solution.
          </p>
        </div>

        {/* Premium Dark Visual Box Container */}
        <div className="relative mx-auto rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 shadow-2xl backdrop-blur-xl">
          
          {/* Top Bar with Slide Counter and Automatic Progress Indicator */}
          <div className="flex items-center justify-between px-3 py-2 mb-3 text-xs font-mono border-b border-white/10 gap-2">
            <div className="flex items-center gap-2 text-stone-300">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
              <span className="font-bold uppercase tracking-wider">LIVE AUTOPLAY BRIEF</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={PROJECT_PPT_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[#FFCC00] font-bold text-xs border border-white/20 transition-colors shadow-sm cursor-pointer"
                title="Download Project Brief PPT"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PPT</span>
              </a>

              {/* Current / Total Counter: 01 / 09 */}
              <div className="px-3 py-1 rounded-full bg-white/10 text-[#FFCC00] font-black tracking-widest text-xs border border-[#FFCC00]/30">
                {String(currentSlide).padStart(2, '0')} / {String(TOTAL_SLIDES).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Smooth Progress Indicator Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-[#FF6600] via-[#FFCC00] to-[#FFCC00] transition-all duration-75 ease-linear rounded-full"
              style={{ width: `${slideProgress}%` }}
            />
          </div>

          {/* Slide Media Stage with Cinematic Crossfade */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-inner">
            {[...Array(TOTAL_SLIDES)].map((_, idx) => {
              const slideNum = idx + 1;
              const isActive = slideNum === currentSlide;
              return (
                <div
                  key={slideNum}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-[1.02]'
                  }`}
                >
                  <img
                    src={`/assets/slides/slide-${slideNum}.png`}
                    alt={`Project Challenge Brief Slide ${slideNum}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}

            {/* Subtle Corner Vignette & Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10182C]/60 via-transparent to-transparent z-20" />
          </div>

          {/* Bottom Call to Action inside Player */}
          <div className="mt-5 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-300">
              <CheckCircle className="w-4 h-4 text-[#FFCC00]" />
              <span>Step 1 of 2 Complete: Review brief, then build & submit</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={PROJECT_PPT_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wider uppercase border border-white/25 hover:border-[#FFCC00]/60 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
              >
                <Download className="w-4 h-4 text-[#FFCC00]" />
                <span>DOWNLOAD PPT</span>
              </a>

              <a
                href={PROJECT_SUBMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-sm tracking-wider uppercase shadow-xl shadow-[#FF6600]/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/30"
              >
                <span>🚀 I'M READY TO BUILD</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default GoogleSlidesPlayer;