import React from 'react';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';

export function BoardExamsCareerSection() {
  return (
    <section id="board-exams-career" className="relative w-full py-16 lg:py-24 bg-[#F8EFE7]/40 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Eyebrow + Clear Title + Simple Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold uppercase tracking-widest border border-[#FF6600]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            <span>DUAL-FOCUS ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#10182C] tracking-tight">
            Boards + Future Tech
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-normal max-w-xl mx-auto leading-relaxed">
            Excel in your Class 12 board examinations while simultaneously building real-world AI capabilities for tomorrow.
          </p>
        </div>

        {/* Two Large Horizontal Visual Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: BOARD EXAMS */}
          <BentoCard bgTheme="white" borderTheme="subtle" staggerIndex={0} className="p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-1 mb-6">
              <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-widest">
                ACADEMIC ACCELERATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#10182C] tracking-tight">
                BOARD EXAMS
              </h3>
              <p className="text-base text-stone-600 font-medium">
                Study smarter with AI.
              </p>
            </div>

            <MediaBox
              aspectRatio="16:9"
              className="rounded-xl mt-auto"
            >
              <CinematicImage
                src="/assets/board-exams-unique.jpg"
                alt="Student studying with open textbook and AI revision tools"
                objectFit="cover"
              />
            </MediaBox>
          </BentoCard>

          {/* Box 2: FUTURE & CAREERS */}
          <BentoCard bgTheme="white" borderTheme="gold" staggerIndex={1} className="p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-1 mb-6">
              <span className="text-xs font-mono font-bold text-[#FFCC00] uppercase tracking-widest">
                CAREER HORIZON
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#10182C] tracking-tight">
                FUTURE & CAREERS
              </h3>
              <p className="text-base text-stone-600 font-medium">
                Explore AI, technology and future skills.
              </p>
            </div>

            <MediaBox
              aspectRatio="16:9"
              borderTheme="gold"
              className="rounded-xl mt-auto"
            >
              <CinematicImage
                src="/assets/future-careers-unique.jpg"
                alt="High school student building future physical computing and AI career skills"
                objectFit="cover"
              />
            </MediaBox>
          </BentoCard>

        </div>

      </div>
    </section>
  );
}

export default BoardExamsCareerSection;