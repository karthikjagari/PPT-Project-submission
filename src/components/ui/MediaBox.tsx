import React, { useRef } from 'react';

export interface MediaBoxProps {
  children: React.ReactNode;
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'portrait' | 'wide' | 'panoramic' | 'tall' | 'auto';
  className?: string;
  glow?: boolean;
  borderTheme?: 'navy' | 'gold' | 'burgundy' | 'light' | 'subtle';
  hoverZoom?: boolean;
  technicalBadge?: string;
  badgePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function MediaBox({
  children,
  aspectRatio = '16:9',
  className = '',
  glow = false,
  borderTheme = 'light',
  hoverZoom = true,
  technicalBadge,
  badgePosition = 'top-left',
}: MediaBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    panoramic: 'aspect-[24/9]',
    tall: 'aspect-[9/16]',
    auto: '',
  }[aspectRatio];

  const borderClasses = {
    navy: 'border border-[#10182C]/20 shadow-2xl bg-[#10182C]',
    gold: 'border border-[#F2C84B]/50 shadow-xl bg-[#FFFDF8]',
    burgundy: 'border border-[#8F1018]/30 shadow-xl bg-[#FFFDF8]',
    light: 'border border-stone-200/80 shadow-lg bg-white',
    subtle: 'border border-stone-200/40 shadow-sm bg-[#FFFDF8]',
  }[borderTheme];

  const badgePosClasses = {
    'top-left': 'top-3 left-3',
    'top-right': 'top-3 right-3',
    'bottom-left': 'bottom-3 left-3',
    'bottom-right': 'bottom-3 right-3',
  }[badgePosition];

  return (
    <div
      ref={boxRef}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${aspectClasses} ${borderClasses} ${
        hoverZoom ? 'hover:shadow-2xl' : ''
      } ${className}`}
    >
      {/* Corner Technical Crosshairs */}
      <div className="pointer-events-none absolute top-2 left-2 z-20 w-2 h-2 border-t border-l border-white/60 opacity-80" />
      <div className="pointer-events-none absolute top-2 right-2 z-20 w-2 h-2 border-t border-r border-white/60 opacity-80" />
      <div className="pointer-events-none absolute bottom-2 left-2 z-20 w-2 h-2 border-b border-l border-white/60 opacity-80" />
      <div className="pointer-events-none absolute bottom-2 right-2 z-20 w-2 h-2 border-b border-r border-white/60 opacity-80" />


      {/* Main Content Container with controlled hover zoom */}
      <div
        className={`w-full h-full relative transition-transform duration-700 ease-out ${
          hoverZoom ? 'group-hover:scale-[1.03]' : ''
        }`}
      >
        {children}
      </div>

      {/* Ambient Lighting Edge Glow */}
      {glow && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#F2C84B]/30 shadow-[inset_0_0_30px_rgba(242,200,75,0.12)]" />
      )}
    </div>
  );
}