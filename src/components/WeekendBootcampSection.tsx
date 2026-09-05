import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { BOOTCAMP_REGISTRATION_URL } from '../config';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';

export function WeekendBootcampSection() {

  const modules = [
    {
      title: 'LEARN',
      subtitle: 'Modern LLMs & Prompting',
      desc: 'Master prompt design, system instructions, and multimodal vision models.',
      img: '/assets/showcase-study-buddy.jpg',
    },
    {
      title: 'APPLY',
      subtitle: 'Agents, Vision & APIs',
      desc: 'Connect AI models to Python, JavaScript, and live real-world APIs.',
      img: '/assets/showcase-automation.jpg',
    },
    {
      title: 'BUILD',
      subtitle: 'Full-Stack AI Prototypes',
      desc: 'Construct functional web apps, interactive bots, and useful tools.',
      img: '/assets/showcase-playground.jpg',
    },
    {
      title: 'RISE',
      subtitle: 'Live Demos & Competitions',
      desc: 'Showcase your creations to mentors, peers, and industry evaluators.',
      img: '/assets/weekend-workspace.jpg',
    },
  ];

  return (
    <section
      id="weekend-bootcamp"
      className="relative w-full py-16 lg:py-28 bg-[#FBF7EF] border-b border-stone-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Eyebrow + Clear Title + Simple Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold uppercase tracking-widest border border-[#FF6600]/20">
            <Flame className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>AI BOOTCAMP · EVERY WEEKEND</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#10182C] tracking-tight">
            Your Weekend Just Got Smarter.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-normal max-w-xl mx-auto leading-relaxed">
            Join live Saturday & Sunday interactive build sessions to master prompt design, APIs, autonomous agents, and real applications.
          </p>

          <div className="pt-2 flex flex-col items-center gap-2">
            <a
              href={BOOTCAMP_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/30"
            >
              <span>JOIN THE AI BOOTCAMP</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs font-mono text-stone-500">
              Every Saturday & Sunday · Class 12 Students
            </span>
          </div>
        </div>

        {/* 4 Focused Curriculum Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {modules.map((mod, i) => (
            <BentoCard
              key={mod.title}
              bgTheme="white"
              borderTheme="subtle"
              className="flex flex-col p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200/80 rounded-2xl"
            >
              <MediaBox
                aspectRatio="16:9"
                className="mb-3.5 rounded-xl overflow-hidden"
              >
                <CinematicImage
                  src={mod.img}
                  alt={mod.title}
                  objectFit="cover"
                />
              </MediaBox>
              <div className="space-y-1.5 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#FF6600]/10 text-[#FF6600]">
                    MODULE 0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#10182C] uppercase tracking-wide">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-stone-700">
                  {mod.subtitle}
                </p>
                <p className="text-xs text-stone-500 leading-snug">
                  {mod.desc}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WeekendBootcampSection;