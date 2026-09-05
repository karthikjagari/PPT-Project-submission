import React, { useRef, useState, useEffect } from 'react';

export interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  bgTheme?: 'white' | 'paper' | 'navy' | 'charcoal';
  borderTheme?: 'subtle' | 'gold' | 'burgundy' | 'navy';
  staggerIndex?: number;
  onClick?: () => void;
}

export function BentoCard({
  children,
  className = '',
  tiltMaxAngle = 6,
  bgTheme = 'white',
  borderTheme = 'subtle',
  staggerIndex = 0,
  onClick,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasEntered, setHasEntered] = useState(true);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const rotateX = ((y / rect.height) - 0.5) * -tiltMaxAngle;
    const rotateY = ((x / rect.width) - 0.5) * tiltMaxAngle;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.015, 1.015, 1.015)`
    );
    setGlarePos({ x: xPercent, y: yPercent, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const bgClasses = {
    white: 'bg-white',
    paper: 'bg-[#FFFDF8]',
    navy: 'bg-[#10182C] text-white',
    charcoal: 'bg-[#171A24] text-white',
  }[bgTheme];

  const borderClasses = {
    subtle: 'border border-stone-200/80 shadow-sm hover:shadow-2xl hover:border-stone-400/60',
    gold: 'border border-[#FFCC00]/30 shadow-md hover:shadow-2xl hover:border-[#FFCC00]/80',
    burgundy: 'border border-[#8F1018]/25 shadow-sm hover:shadow-2xl hover:border-[#FF6600]/60',
    navy: 'border border-white/10 shadow-2xl hover:border-white/30',
  }[borderTheme];

  const delayMs = staggerIndex * 120;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isTouchDevice
          ? undefined
          : transform || (hasEntered ? 'perspective(1000px) scale(1) translateY(0)' : 'perspective(1000px) scale(0.96) translateY(30px)'),
        opacity: hasEntered ? 1 : 0,
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease`,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative overflow-hidden rounded-2xl ${bgClasses} ${borderClasses} ${className}`}
    >
      {/* Specular Glare Overlay on Desktop Hover */}
      {!isTouchDevice && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4), transparent 70%)`,
          }}
        />
      )}

      {/* Subtle Outcrowd Technical Corner Crosshair on Hover */}
      <div className="pointer-events-none absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] font-mono text-[#FFCC00] font-bold">+</span>
      </div>

      {children}
    </div>
  );
}

export default BentoCard;