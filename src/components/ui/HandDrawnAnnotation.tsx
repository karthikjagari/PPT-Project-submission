import React from 'react';
import { TechnicalMarker } from './TechnicalMarker';

export interface HandDrawnAnnotationProps {
  className?: string;
  color?: 'red' | 'gold' | 'burgundy' | 'yellow' | 'orange';
  variant?: 'ellipse' | 'underline' | 'lasso';
}

/**
 * DEPRECATED: Replaced all hand-drawn doodles/circles with precision TechnicalMarker.
 * Preserved for backwards compatibility with existing imports.
 */
export function HandDrawnAnnotation({
  className = '',
  color = 'yellow',
  variant = 'ellipse',
}: HandDrawnAnnotationProps) {
  const mappedColor = color === 'gold' ? 'yellow' : color === 'red' ? 'orange' : 'burgundy';
  const mappedVariant = variant === 'underline' ? 'laser' : 'bracket';

  return <TechnicalMarker variant={mappedVariant} color={mappedColor} className={className} />;
}

export default HandDrawnAnnotation;