import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowDown, 
  Terminal, 
  Send, 
  Trophy, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PROJECT_SUBMISSION_URL } from '../config';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';
import { TechnicalMarker } from './ui/TechnicalMarker';

interface StageItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  badge: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const STAGES: StageItem[] = [
  {
    id: 'build',
    step: '01',
    title: 'BUILD',
    subtitle: 'From Idea to Working App',
    description: 'Turn your idea into a working project using AI.',
    img: '/assets/ideation-desk.jpg',
    badge: 'STAGE 01 · PROTOTYPE',
    accent: '#FF6600',
    icon: Terminal,
    highlights: ['Prompt engineering', 'Modern web components', 'Rapid AI iteration'],
  },
  {
    id: 'compete',
    step: '02',
    title: 'COMPETE',
    subtitle: 'Submit & Stand Out',
    description: 'Submit your project and showcase what you built.',
    img: '/assets/submission-verified-unique.jpg',
    badge: 'STAGE 02 · SHOWCASE',
    accent: '#FFCC00',
    icon: Send,
    highlights: ['GitHub repo & live link', 'Video walkthrough', 'Peer leaderboard'],
  },
  {
    id: 'rise',
    step: '03',
    title: 'RISE',
    subtitle: 'Skills for the Long Run',
    description: 'Keep building your skills and create opportunities for your future.',
    img: '/assets/skills-early-unique.jpg',
    badge: 'STAGE 03 · EXCELLENCE',
    accent: '#8F1018',
    icon: Trophy,
    highlights: ['Tech prize bundles', 'Verified certificates', 'Weekend AI Bootcamp'],
  },
];

export function BuildCompeteRiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle entrance reveal for each stage card on scroll
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
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
      id="build-compete-rise"
      className="relative w-full py-16 sm:py-24 bg-[#F8EFE7]/40 border-b border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Eyebrow + Clear Section Title + Simple Description */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold uppercase tracking-widest border border-[#FF6600]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            <span>PROGRESSION PATHWAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10182C] tracking-tight">
            BUILD ✦ COMPETE ✦{' '}
            <span className="relative inline-block text-[#8F1018] px-1">
              RISE
              <TechnicalMarker variant="laser" color="orange" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Build your project, submit your work, compete with other students and keep growing your skills.
          </p>
        </div>

        {/* 3 Clean Visual Stages: Mobile Vertical Sequence / Desktop 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch relative">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <React.Fragment key={stage.id}>
                <div
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className="flex flex-col will-change-transform"
                >
                  <BentoCard
                    bgTheme="white"
                    borderTheme="subtle"
                    className="h-full flex flex-col p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 rounded-2xl group hover:-translate-y-1"
                  >
                    {/* Unique India-Related Realistic Image in Cinematic MediaBox */}
                    <MediaBox
                      aspectRatio="16:9"
                      technicalBadge={stage.badge}
                      borderTheme="subtle"
                      className="rounded-xl overflow-hidden mb-5 flex-shrink-0"
                    >
                      <CinematicImage
                        src={stage.img}
                        alt={`${stage.title} - ${stage.subtitle}`}
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </MediaBox>

                    {/* Stage Header */}
                    <div className="flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-mono font-bold text-[#FF6600] uppercase tracking-wider">
                            STAGE {stage.step}
                          </span>
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${stage.accent}15`, color: stage.accent }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-[#10182C] tracking-tight">
                          {stage.title}
                        </h3>

                        <p className="text-sm font-semibold text-stone-700">
                          {stage.subtitle}
                        </p>

                        <p className="text-sm text-stone-600 leading-relaxed pt-1">
                          {stage.description}
                        </p>
                      </div>

                      {/* Supporting Bullet Highlights */}
                      <div className="pt-3 border-t border-stone-100 space-y-2">
                        {stage.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BentoCard>
                </div>

                {/* Mobile Down Arrow between stages */}
                {index < STAGES.length - 1 && (
                  <div className="lg:hidden flex items-center justify-center py-2 text-stone-300">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Clean Action */}
        <div className="mt-12 text-center">
          <a
            href={PROJECT_SUBMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/25 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
          >
            <span>🔥 START BUILDING YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default BuildCompeteRiseSection;
