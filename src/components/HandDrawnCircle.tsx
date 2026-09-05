import React from 'react';
import { TechnicalMarker } from './ui/TechnicalMarker';

interface HandDrawnCircleProps {
  children: React.ReactNode;
  color?: string;
  strokeWidth?: number;
  className?: string;
  variant?: 'bracket' | 'laser' | 'frame';
}

/**
 * DEPRECATED: Replaced all hand-drawn SVG loops with precision TechnicalMarker.
 */
export const HandDrawnCircle: React.FC<HandDrawnCircleProps> = ({
  children,
  className = '',
  variant = 'bracket'
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <TechnicalMarker variant={variant} color="yellow" />
    </span>
  );
};

export default HandDrawnCircle;