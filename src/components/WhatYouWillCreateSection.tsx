import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  LineChart, 
  Palette, 
  Bot, 
  Compass,
  Sparkles 
} from 'lucide-react';
import { PROJECT_SUBMISSION_URL } from '../config';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';
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
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    number: '01',
    category: 'LLM ASSISTANT',
    badge: 'PROJECT 01 · LLM ASSISTANT',
    title: 'AI Study Buddy',
    description: 'Build an AI-powered learning assistant for your studies.',
    img: '/assets/showcase-study-buddy.jpg',
    accent: '#FF6600',
    icon: Code,
    tags: ['NCERT RAG', 'Study Engine', 'CBSE Prep'],
  },
  {
    id: 2,
    number: '02',
    category: 'PORTFOLIO',
    badge: 'PROJECT 02 · PORTFOLIO',
    title: 'Personal Website',
    description: 'Create your own portfolio using AI and showcase your work.',
    img: '/assets/build-laptop.jpg',
    accent: '#FFCC00',
    icon: Cpu,
    tags: ['Modern React', 'Proof-of-Work', 'Tailwind CSS'],
  },
  {
    id: 3,
    number: '03',
    category: 'METRICS',
    badge: 'PROJECT 03 · METRICS',
    title: 'Analytics Dashboard',
    description: 'Use AI to analyse data and create useful dashboards.',
    img: '/assets/theme-build-for-india.jpg',
    accent: '#8F1018',
    icon: LineChart,
    tags: ['Live Charts', 'Python & Pandas', 'Insights'],
  },
  {
    id: 4,
    number: '04',
    category: 'GENERATIVE MEDIA',
    badge: 'PROJECT 04 · GENERATIVE MEDIA',
    title: 'AI Creator',
    description: 'Build AI tools for content, images, videos and more.',
    img: '/assets/theme-everyday-life.jpg',
    accent: '#FF6600',
    icon: Palette,
    tags: ['Image Models', 'Audio Pipelines', 'Creative Assets'],
  },
  {
    id: 5,
    number: '05',
    category: 'AGENTS',
    badge: 'PROJECT 05 · AGENTS',
    title: 'Automation & Bots',
    description: 'Connect tools and automate repetitive tasks with AI.',
    img: '/assets/showcase-automation.jpg',
    accent: '#FFCC00',
    icon: Bot,
    tags: ['Smart Bots', 'Workflow AI', 'API Hooks'],
  },
  {
    id: 6,
    number: '06',
    category: 'EXPERIMENTAL',
    badge: 'PROJECT 06 · EXPERIMENTAL',
    title: 'AI Playground',
    description: 'Experiment with AI ideas and turn curiosity into projects.',
    img: '/assets/future-careers-unique.jpg',
    accent: '#8F1018',
    icon: Compass,
    tags: ['Open Weights', 'Fast Prototypes', 'Sandboxing'],
  },
];

export function WhatYouWillCreateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Simple, elegant scroll reveal for cards as user scrolls naturally
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
      id="what-you-will-create"
      className="relative w-full py-16 sm:py-24 bg-[#FBF7EF] border-b border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Eyebrow + Clear Section Title + Simple Description */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold uppercase tracking-widest border border-[#FF6600]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            <span>PROJECT DISCOVERY JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10182C] tracking-tight">
            WHAT YOU WILL{' '}
            <span className="relative inline-block text-[#8F1018] px-1">
              CREATE
              <TechnicalMarker variant="laser" color="orange" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Turn a simple idea into a useful AI-powered project and build something you can actually show.
          </p>
        </div>

        {/* Responsive Grid: Mobile 2-Column Minimal Cards / Desktop 3-Column Balanced Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 items-stretch">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="flex flex-col will-change-transform"
              >
                <BentoCard
                  bgTheme="white"
                  borderTheme="subtle"
                  className="h-full flex flex-col p-3 sm:p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 rounded-xl sm:rounded-2xl group hover:-translate-y-1"
                >
                  {/* Visual Box with Realistic India-related Student Image */}
                  <MediaBox
                    aspectRatio="16:9"
                    borderTheme="subtle"
                    className="rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-4 flex-shrink-0"
                  >
                    <CinematicImage
                      src={project.img}
                      alt={project.title}
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </MediaBox>

                  {/* Card Content: Clean & Minimal on Mobile */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1 sm:mb-2">
                        <span className="text-[9px] sm:text-xs font-mono font-bold text-stone-400 uppercase tracking-wider truncate">
                          {project.category}
                        </span>
                        <div
                          className="w-5 h-5 sm:w-7 sm:h-7 rounded flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                        >
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>

                      <h3 className="text-xs sm:text-lg lg:text-xl font-black text-[#10182C] tracking-tight group-hover:text-[#FF6600] transition-colors leading-tight mb-1 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs lg:text-sm text-stone-600 leading-snug sm:leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags (Desktop only for minimal mobile view) & Action CTA */}
                    <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-stone-100">
                      <div className="hidden sm:flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-stone-100/90 text-stone-600 text-[11px] font-mono font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div>
                        <a
                          href={PROJECT_SUBMISSION_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FF6600] hover:text-[#E65C00] transition-colors cursor-pointer group/link"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </BentoCard>
              </div>
            );
          })}
        </div>

        {/* Subtle Footer Prompt */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-600">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Pick any idea or create your own custom AI project</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhatYouWillCreateSection;
