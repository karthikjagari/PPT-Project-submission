import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';
import { PROJECT_SUBMISSION_URL } from '../config';

export function ProjectChallengeSection() {
  const steps = [
    {
      phase: '01',
      title: 'THINK',
      desc: 'Pick a real problem and map your AI solution.',
      img: '/assets/think-brainstorm.jpg',
      alt: 'Student brainstorming AI project ideas',
      badgeClass: 'bg-[#FF6600]/10 text-[#FF6600]',
      titleClass: 'text-[#10182C]',
    },
    {
      phase: '02',
      title: 'BUILD',
      desc: 'Use AI tools to create your working prototype.',
      img: '/assets/build-laptop.jpg',
      alt: 'Student coding AI prototype on laptop',
      badgeClass: 'bg-[#10182C] text-[#FFCC00]',
      titleClass: 'text-[#FF6600]',
    },
    {
      phase: '03',
      title: 'SUBMIT',
      desc: 'Submit your demo link or deck for review & prizes.',
      img: '/assets/submit-share.jpg',
      alt: 'Student submitting finished AI project',
      badgeClass: 'bg-[#8F1018]/10 text-[#8F1018]',
      titleClass: 'text-[#8F1018]',
    },
  ];

  return (
    <section
      id="project-challenge"
      className="relative w-full py-14 sm:py-20 bg-[#FBF7EF] border-b border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold uppercase tracking-wider border border-[#FF6600]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            <span>THE CHALLENGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#10182C] tracking-tight">
            Now Build It.
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-normal max-w-lg mx-auto">
            Pick a problem, create your prototype with AI, and submit to compete.
          </p>
        </div>

        {/* Minimal 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {steps.map((s) => (
            <BentoCard
              key={s.phase}
              bgTheme="white"
              borderTheme="subtle"
              className="flex flex-col p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200/80 rounded-2xl"
            >
              <MediaBox
                aspectRatio="16:9"
                className="mb-3.5 rounded-xl overflow-hidden"
              >
                <CinematicImage
                  src={s.img}
                  alt={s.alt}
                  objectFit="cover"
                />
              </MediaBox>
              <div className="space-y-1.5 mt-auto">
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-black tracking-tight ${s.titleClass}`}>
                    {s.title}
                  </h3>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${s.badgeClass}`}>
                    PHASE {s.phase}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-snug">
                  {s.desc}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href={PROJECT_SUBMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#10182C] text-white hover:bg-[#8F1018] text-xs sm:text-sm font-bold font-mono uppercase tracking-wider transition-colors shadow-md active:scale-98"
          >
            <span>SUBMIT YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 text-[#FFCC00]" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default ProjectChallengeSection;