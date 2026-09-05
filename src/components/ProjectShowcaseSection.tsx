import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECT_SUBMISSION_URL } from '../config';
import { TechnicalMarker } from './ui/TechnicalMarker';

interface ProjectItem {
  id: number;
  number: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  img: string;
  accent: string;
  desktopStart: { x: number; y: number; scale: number; rot: number };
  desktopEnd: { x: number; y: number; scale: number; rot: number };
  revealProgress: number;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    number: '01',
    category: 'LLM ASSISTANT',
    badge: 'PROJECT 01 · LLM ASSISTANT',
    title: 'AI Study Buddy',
    description: 'A personalized revision engine trained on NCERT & CBSE syllabi.',
    img: '/assets/showcase-study-buddy.jpg',
    accent: '#FF6600',
    desktopStart: { x: -480, y: -190, scale: 0.94, rot: -1.5 },
    desktopEnd: { x: -660, y: -290, scale: 1.02, rot: -3 },
    revealProgress: 0.0,
  },
  {
    id: 2,
    number: '02',
    category: 'PORTFOLIO',
    badge: 'PROJECT 02 · PORTFOLIO',
    title: 'Personal Website',
    description: 'A high-performance personal portfolio built with modern web tools.',
    img: '/assets/build-laptop.jpg',
    accent: '#FFCC00',
    desktopStart: { x: -520, y: 15, scale: 0.94, rot: 1 },
    desktopEnd: { x: -700, y: 15, scale: 1.04, rot: 0 },
    revealProgress: 0.06,
  },
  {
    id: 3,
    number: '03',
    category: 'METRICS',
    badge: 'PROJECT 03 · METRICS',
    title: 'Analytics Dashboard',
    description: 'Live data charts and automated telemetry dashboards.',
    img: '/assets/theme-build-for-india.jpg',
    accent: '#8F1018',
    desktopStart: { x: -480, y: 220, scale: 0.94, rot: -1 },
    desktopEnd: { x: -660, y: 310, scale: 1.02, rot: 2 },
    revealProgress: 0.12,
  },
  {
    id: 4,
    number: '04',
    category: 'GENERATIVE MEDIA',
    badge: 'PROJECT 04 · GENERATIVE MEDIA',
    title: 'AI Creator Studio',
    description: 'Multimodal generative pipelines creating video, audio, and design assets.',
    img: '/assets/theme-everyday-life.jpg',
    accent: '#FF6600',
    desktopStart: { x: 480, y: -190, scale: 0.94, rot: 1.5 },
    desktopEnd: { x: 660, y: -290, scale: 1.02, rot: 3 },
    revealProgress: 0.18,
  },
  {
    id: 5,
    number: '05',
    category: 'AGENTS',
    badge: 'PROJECT 05 · AGENTS',
    title: 'Automation & Bots',
    description: 'Autonomous agents executing scheduled tasks and email summaries.',
    img: '/assets/showcase-automation.jpg',
    accent: '#FFCC00',
    desktopStart: { x: 520, y: 15, scale: 0.94, rot: -1 },
    desktopEnd: { x: 700, y: 15, scale: 1.04, rot: 0 },
    revealProgress: 0.24,
  },
  {
    id: 6,
    number: '06',
    category: 'EXPERIMENTAL',
    badge: 'PROJECT 06 · EXPERIMENTAL',
    title: 'AI Playground',
    description: 'Sandbox for testing open-weights models and edge AI experiments.',
    img: '/assets/showcase-playground.jpg',
    accent: '#8F1018',
    desktopStart: { x: 480, y: 220, scale: 0.94, rot: 1 },
    desktopEnd: { x: 660, y: 310, scale: 1.02, rot: -2 },
    revealProgress: 0.30,
  },
];

export function ProjectShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobilePhase, setMobilePhase] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Radial Orbit (>= 1024px)
      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.6,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });

        // Center Content Transitions
        tl.to(
          descRef.current,
          {
            opacity: 0,
            y: -10,
            ease: 'power1.in',
            duration: 0.3,
          },
          0.38
        );

        tl.to(
          ctaRef.current,
          {
            opacity: 0.3,
            scale: 0.94,
            ease: 'power1.in',
            duration: 0.25,
          },
          0.48
        );

        tl.to(
          centerContentRef.current,
          {
            scale: 0.88,
            opacity: 0,
            y: -25,
            ease: 'power2.inOut',
            duration: 0.32,
          },
          0.68
        );

        // Project Cards Outward Radial Travel on Scroll
        PROJECTS.forEach((p, idx) => {
          const card = cardRefs.current[idx];
          if (!card) return;

          gsap.set(card, {
            x: p.desktopStart.x,
            y: p.desktopStart.y,
            scale: p.desktopStart.scale,
            rotation: p.desktopStart.rot,
            opacity: 0.85,
          });

          tl.to(
            card,
            {
              x: p.desktopEnd.x,
              y: p.desktopEnd.y,
              scale: p.desktopEnd.scale,
              rotation: p.desktopEnd.rot,
              opacity: 1,
              ease: 'power2.out',
              duration: 1 - p.revealProgress * 0.5,
            },
            p.revealProgress * 0.4
          );
        });
      });

      // Mobile / Tablet Pinned Showcase (< 1024px)
      mm.add('(max-width: 1023px)', () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.4,
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);
            if (p < 0.35) {
              setMobilePhase(1);
            } else if (p < 0.70) {
              setMobilePhase(2);
            } else {
              setMobilePhase(3);
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="project-showcase"
      className="relative w-full h-[260vh] bg-[#FBF7EF] border-b border-stone-200/60 overflow-visible"
    >
      {/* Scoped Subtle Ambient Float Keyframes for Layer 2 */}
      <style>{`
        @keyframes ambientFloatA {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -6px, 0); }
        }
        @keyframes ambientFloatB {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, 6px, 0); }
        }
        @keyframes ambientFloatC {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -5px, 0); }
        }
        .animate-ambient-float-0 { animation: ambientFloatA 5.6s ease-in-out infinite; }
        .animate-ambient-float-1 { animation: ambientFloatB 6.2s ease-in-out infinite; }
        .animate-ambient-float-2 { animation: ambientFloatC 5.0s ease-in-out infinite; }
        .animate-ambient-float-3 { animation: ambientFloatA 6.8s ease-in-out infinite 0.5s; }
        .animate-ambient-float-4 { animation: ambientFloatB 5.4s ease-in-out infinite 0.3s; }
        .animate-ambient-float-5 { animation: ambientFloatC 6.0s ease-in-out infinite 0.8s; }
      `}</style>

      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-blueprint-grid">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FFCC00]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#FF6600]/08 rounded-full blur-3xl" />
          
        {/* ================================================================= */}
        {/* DESKTOP VIEWPORT LAYOUT (>= 1024px): CoreShift Radial Showcase   */}
        {/* ================================================================= */}
        <div className="hidden lg:flex relative w-full max-w-7xl h-full items-center justify-center px-4">
          
          {/* Central Dominant Content Area */}
          <div
            ref={centerContentRef}
            className="relative z-20 max-w-2xl text-center space-y-4 pointer-events-auto will-change-transform"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10182C]/5 text-[#10182C] text-xs font-mono font-bold uppercase tracking-widest border border-stone-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
              <span>WHAT YOU WILL CREATE</span>
            </div>

            {/* Clear Section Title with Laser Bracket */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10182C] tracking-tight leading-[1.08]">
              BUILD ✦ COMPETE ✦{' '}
              <span className="relative inline-block text-[#8F1018] px-1">
                RISE
                <TechnicalMarker variant="bracket" color="orange" />
              </span>
            </h2>

            {/* Simple Related Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-stone-600 font-normal max-w-xl mx-auto leading-relaxed"
            >
              Explore real AI applications built by high school students across web development, machine learning, and automation.
            </p>

            {/* Primary Action Button */}
            <div ref={ctaRef} className="pt-2 flex flex-col items-center gap-2.5">
              <a
                href={PROJECT_SUBMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
              >
                <span>BUILD YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                <span>SCROLL TO EXPAND ORBIT</span>
                <span className="text-[#FF6600] font-bold">· {Math.round(scrollProgress * 100)}%</span>
              </div>
            </div>
          </div>

          {/* 6 Pinned Project Cards (Radial Positions Surrounding Center) */}
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[260px] xl:w-[285px] will-change-transform pointer-events-auto"
            >
              {/* Layer 2: Decoupled Ambient Floating Wrapper */}
              <div className={`animate-ambient-float-${idx}`}>
                <div className="group relative rounded-2xl bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-xl border border-stone-200/90 hover:border-[#FFCC00]/80 transition-all duration-300 cursor-pointer overflow-hidden ring-1 ring-black/5 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl">
                  
                  {/* Large Project Visual */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100 mb-3 border border-stone-100">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Badge Pill */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#10182C]/85 backdrop-blur-sm text-[10px] font-mono font-bold text-white uppercase tracking-wider border border-white/10 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
                      <span>{project.badge}</span>
                    </div>
                  </div>

                  {/* Clean Typography & Metadata */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF6600]">
                        {project.category}
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#10182C] tracking-tight group-hover:text-[#8F1018] transition-colors duration-200 truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-stone-500 line-clamp-2 mt-0.5 leading-snug">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow Action Icon */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#FF6600] text-stone-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105 mt-1">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* ================================================================= */}
        {/* MOBILE / TABLET VIEWPORT LAYOUT (< 1024px): Responsive Spotlight  */}
        {/* ================================================================= */}
        <div className="lg:hidden w-full h-full flex flex-col justify-between pt-16 pb-20 px-4 sm:px-6 max-w-lg mx-auto">
          
          {/* Mobile Top Header */}
          <div className="text-center space-y-2 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182C]/5 text-[#10182C] text-[11px] font-mono font-bold uppercase tracking-widest border border-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
              <span>WHAT YOU WILL CREATE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#10182C] tracking-tight">
              BUILD ✦ COMPETE ✦ RISE
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-snug max-w-sm mx-auto">
              Explore real AI applications built by high school students.
            </p>

            {/* Phase Selector Tabs */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              <button
                onClick={() => setMobilePhase(1)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  mobilePhase === 1
                    ? 'bg-[#10182C] text-[#FFCC00] shadow-sm'
                    : 'bg-stone-200/70 text-stone-600'
                }`}
              >
                01-02 ASSISTANT
              </button>
              <button
                onClick={() => setMobilePhase(2)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  mobilePhase === 2
                    ? 'bg-[#FF6600] text-white shadow-sm'
                    : 'bg-stone-200/70 text-stone-600'
                }`}
              >
                03-04 MEDIA
              </button>
              <button
                onClick={() => setMobilePhase(3)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  mobilePhase === 3
                    ? 'bg-[#8F1018] text-[#FFCC00] shadow-sm'
                    : 'bg-stone-200/70 text-stone-600'
                }`}
              >
                05-06 AGENTS
              </button>
            </div>
          </div>

          {/* Mobile Active Project Pair Stage */}
          <div className="flex-1 flex flex-col justify-center gap-3 my-2 overflow-y-auto">
            {PROJECTS.filter((p) => {
              if (mobilePhase === 1) return p.id === 1 || p.id === 2;
              if (mobilePhase === 2) return p.id === 3 || p.id === 4;
              return p.id === 5 || p.id === 6;
            }).map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-white p-3 shadow-md border border-stone-200 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-300"
              >
                <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/75 text-[8px] font-mono text-white font-bold">
                    #{project.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-mono font-bold uppercase text-[#FF6600] block">
                    {project.category}
                  </span>
                  <h3 className="text-sm font-black text-[#10182C] truncate">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5 leading-tight">
                    {project.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom CTA Bar */}
          <div className="text-center pt-2 space-y-2">
            <a
              href={PROJECT_SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white font-black text-xs uppercase tracking-wider shadow-lg border border-[#FFCC00]/40 cursor-pointer active:scale-95"
            >
              <span>BUILD YOUR PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 px-1">
              <span>SCRUB PROGRESS</span>
              <span className="font-bold text-[#FF6600]">{Math.round(scrollProgress * 100)}%</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectShowcaseSection;