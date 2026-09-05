import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';
import { TechnicalMarker } from './ui/TechnicalMarker';

export function ProjectThemesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const theme1Ref = useRef<HTMLDivElement>(null);
  const theme2Ref = useRef<HTMLDivElement>(null);
  const theme3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance choreography
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Theme 1 enters from left with slight tilt
      if (theme1Ref.current) {
        entranceTl.fromTo(
          theme1Ref.current,
          { x: -70, opacity: 0, rotation: -1.5 },
          { x: 0, opacity: 1, rotation: 0, duration: 0.8, ease: 'power3.out' },
          0
        );
      }

      // Theme 2 enters from right with slight tilt
      if (theme2Ref.current) {
        entranceTl.fromTo(
          theme2Ref.current,
          { x: 70, opacity: 0, rotation: 1.5 },
          { x: 0, opacity: 1, rotation: 0, duration: 0.8, ease: 'power3.out' },
          0.1
        );
      }

      // Theme 3 enters from bottom with scale expansion
      if (theme3Ref.current) {
        entranceTl.fromTo(
          theme3Ref.current,
          { y: 50, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' },
          0.2
        );
      }

      // 2. Parallax scrub as user scrolls across section
      const parallaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      if (theme1Ref.current) {
        parallaxTl.to(theme1Ref.current, { y: -25, ease: 'none' }, 0);
      }
      if (theme2Ref.current) {
        parallaxTl.to(theme2Ref.current, { y: 15, ease: 'none' }, 0);
      }
      if (theme3Ref.current) {
        parallaxTl.to(theme3Ref.current, { y: -15, ease: 'none' }, 0);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="project-themes"
      className="relative w-full py-16 lg:py-24 bg-[#FBF7EF] border-b border-stone-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6600]">
            CHOOSE YOUR DIRECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#10182C] tracking-tight">
            Pick Your Problem.
          </h2>
        </div>

        {/* Three Large Visual Bento Boxes with Varied Box Sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Theme 1: BUILD FOR INDIA (5 Cols - Wide Cinematic shot) */}
          <div ref={theme1Ref} className="lg:col-span-5 will-change-transform">
            <BentoCard bgTheme="white" borderTheme="subtle" className="h-full p-5 flex flex-col justify-between shadow-lg">
              <MediaBox
                aspectRatio="16:9"
                technicalBadge="THEME 01 · CIVIC TECH"
                className="rounded-xl mb-5"
              >
                <CinematicImage
                  src="/assets/theme-build-for-india.jpg"
                  alt="High school students collaborating on India civic innovation"
                  objectFit="cover"
                />
              </MediaBox>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-[#10182C] tracking-tight">
                  BUILD FOR INDIA
                </h3>
                <p className="text-sm font-medium text-stone-600">
                  Real problems. AI-powered ideas.
                </p>
              </div>
            </BentoCard>
          </div>

          {/* Theme 2: FIX MY STUDENT LIFE (4 Cols - Precision Technical Framing) */}
          <div ref={theme2Ref} className="lg:col-span-4 will-change-transform">
            <BentoCard bgTheme="white" borderTheme="burgundy" className="h-full p-5 flex flex-col justify-between relative shadow-lg">
              <MediaBox
                aspectRatio="4:3"
                technicalBadge="THEME 02 · STUDENT FOCUS"
                borderTheme="burgundy"
                className="rounded-xl mb-5"
              >
                <CinematicImage
                  src="/assets/theme-student-life.jpg"
                  alt="Student study planner desk with MacBook Pro"
                  objectFit="cover"
                />
              </MediaBox>
              <div className="space-y-1 relative">
                <h3 className="text-2xl font-black text-[#8F1018] tracking-tight relative inline-block">
                  FIX MY STUDENT LIFE
                  <TechnicalMarker variant="bracket" color="orange" />
                </h3>
                <p className="text-sm font-medium text-stone-600">
                  Solve everyday student problems.
                </p>
              </div>
            </BentoCard>
          </div>

          {/* Theme 3: EVERYDAY LIFE (3 Cols - Compact vertical composition) */}
          <div ref={theme3Ref} className="lg:col-span-3 will-change-transform">
            <BentoCard bgTheme="white" borderTheme="gold" className="h-full p-5 flex flex-col justify-between shadow-lg">
              <MediaBox
                aspectRatio="4:3"
                technicalBadge="THEME 03 · EVERYDAY"
                borderTheme="gold"
                className="rounded-xl mb-5"
              >
                <CinematicImage
                  src="/assets/theme-everyday-life.jpg"
                  alt="Everyday life solutions and practical student tools"
                  objectFit="cover"
                />
              </MediaBox>
              <div className="space-y-1">
                <h3 className="text-xl font-black text-[#10182C] tracking-tight">
                  EVERYDAY LIFE
                </h3>
                <p className="text-sm font-medium text-stone-600">
                  Improve something around you.
                </p>
              </div>
            </BentoCard>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectThemesSection;