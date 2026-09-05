import React from 'react';

export interface TechnicalMarkerProps {
  variant?: 'bracket' | 'laser' | 'frame' | 'badge';
  color?: 'yellow' | 'orange' | 'green' | 'burgundy' | 'gold' | 'red';
  className?: string;
  label?: string;
}

export function TechnicalMarker({
  variant = 'bracket',
  color = 'yellow',
  className = '',
  label
}: TechnicalMarkerProps) {
  const colorMap = {
    yellow: {
      border: 'border-[#FFCC00]',
      text: 'text-[#FFCC00]',
      bg: 'bg-[#FFCC00]',
      shadow: 'shadow-[#FFCC00]/30',
      stroke: '#FFCC00',
    },
    orange: {
      border: 'border-[#FF6600]',
      text: 'text-[#FF6600]',
      bg: 'bg-[#FF6600]',
      shadow: 'shadow-[#FF6600]/30',
      stroke: '#FF6600',
    },
    green: {
      border: 'border-[#00FF00]',
      text: 'text-[#00FF00]',
      bg: 'bg-[#00FF00]',
      shadow: 'shadow-[#00FF00]/40',
      stroke: '#00FF00',
    },
    burgundy: {
      border: 'border-[#8F1018]',
      text: 'text-[#8F1018]',
      bg: 'bg-[#8F1018]',
      shadow: 'shadow-[#8F1018]/30',
      stroke: '#8F1018',
    },
    gold: {
      border: 'border-[#FFCC00]',
      text: 'text-[#FFCC00]',
      bg: 'bg-[#FFCC00]',
      shadow: 'shadow-[#FFCC00]/30',
      stroke: '#FFCC00',
    },
    red: {
      border: 'border-[#8F1018]',
      text: 'text-[#8F1018]',
      bg: 'bg-[#8F1018]',
      shadow: 'shadow-[#8F1018]/30',
      stroke: '#8F1018',
    },
  };

  const selected = colorMap[color] || colorMap.yellow;

  if (variant === 'laser') {
    return (
      <span className={`pointer-events-none absolute -bottom-1 left-0 right-0 h-[2px] block overflow-visible ${className}`}>
        <span
          className={`block h-full w-full rounded-full animate-laser-sweep ${selected.bg}`}
        />
        <span
          className={`absolute -right-1 -top-0.5 w-1.5 h-1.5 rounded-full ${selected.bg} animate-ping`}
        />
      </span>
    );
  }

  if (variant === 'frame') {
    return (
      <span className={`pointer-events-none absolute -inset-x-2 -inset-y-1 block z-10 ${className}`}>
        <span className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${selected.border}`} />
        <span className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${selected.border}`} />
        <span className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${selected.border}`} />
        <span className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${selected.border}`} />
        {label && (
          <span className={`absolute -top-3.5 right-0 text-[8px] font-mono font-bold uppercase tracking-widest ${selected.text} bg-[#10182C] px-1 rounded`}>
            {label}
          </span>
        )}
      </span>
    );
  }

  if (variant === 'badge') {
    return (
      <span className={`pointer-events-none absolute -top-3 -right-3 z-10 px-1.5 py-0.5 rounded text-[8px] font-mono font-black uppercase tracking-widest bg-[#10182C] ${selected.text} border ${selected.border} shadow-sm`}>
        {label || 'ACTIVE'}
      </span>
    );
  }

  // Default: bracket variant
  return (
    <span className={`pointer-events-none absolute -inset-x-2.5 -inset-y-0.5 flex items-center justify-between z-10 select-none ${className}`}>
      <span className={`font-mono text-base sm:text-xl font-light opacity-90 ${selected.text}`}>
        [
      </span>
      <span className={`font-mono text-base sm:text-xl font-light opacity-90 ${selected.text}`}>
        ]
      </span>
    </span>
  );
}

export default TechnicalMarker;