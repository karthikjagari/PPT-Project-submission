import React from 'react';

export interface AnimatedLineProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  color?: 'gold' | 'burgundy' | 'navy' | 'white';
  dashed?: boolean;
}

export function AnimatedLine({
  orientation = 'horizontal',
  className = '',
  color = 'gold',
  dashed = false,
}: AnimatedLineProps) {
  const colorMap = {
    gold: 'stroke-[#F2C84B]',
    burgundy: 'stroke-[#8F1018]',
    navy: 'stroke-[#10182C]',
    white: 'stroke-white',
  }[color];

  if (orientation === 'vertical') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg className="w-4 h-full" overflow="visible">
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="100%"
            className={`${colorMap} opacity-40`}
            strokeWidth="1.5"
            strokeDasharray={dashed ? '4 4' : undefined}
          />
          {/* Animated Traveling Pulse Dot */}
          <circle r="3" cx="8" cy="15" className="fill-[#F2C84B] animate-pulse" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <svg className="w-full h-4" overflow="visible">
        <line
          x1="0"
          y1="8"
          x2="100%"
          y2="8"
          className={`${colorMap} opacity-35`}
          strokeWidth="1.5"
          strokeDasharray={dashed ? '5 5' : undefined}
        />
        {/* Animated Accent Cross */}
        <circle cx="50%" cy="8" r="3" className="fill-[#F2C84B] animate-ping opacity-75" />
        <circle cx="50%" cy="8" r="2.5" className="fill-[#F2C84B]" />
      </svg>
    </div>
  );
}