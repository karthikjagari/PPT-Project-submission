import React, { useRef, useEffect, useState } from 'react';

export interface CinematicVideoProps {
  src: string;
  poster: string;
  className?: string;
  mediaClassName?: string;
  overlayOpacity?: number;
}

export function CinematicVideo({
  src,
  poster,
  className = '',
  mediaClassName = '',
  overlayOpacity = 0.35,
}: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (videoRef.current && !prefersReducedMotion && !hasError) {
      videoRef.current.play().catch(() => {
        // Autoplay may require user gesture on strict power-save modes
      });
    }
  }, [prefersReducedMotion, hasError]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {prefersReducedMotion || hasError ? (
        <img
          src={poster}
          alt="Cinematic background"
          className={`w-full h-full object-cover ${mediaClassName}`}
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover scale-[1.02] ${mediaClassName}`}
        />
      )}

      {/* Dark Navy Overlay for Text Readability */}
      <div
        className="absolute inset-0 bg-[#10182C] pointer-events-none transition-opacity duration-500"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}