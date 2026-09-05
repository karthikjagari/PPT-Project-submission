import React, { useState, useEffect, useRef } from 'react';

export interface CinematicImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
}

export function CinematicImage({
  src,
  alt,
  className = '',
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
}: CinematicImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-stone-100 ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-all duration-700 ease-out ${
          objectFit === 'cover' ? 'object-cover' : 'object-contain'
        } ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-90 scale-[1.01]'}`}
        style={{ objectPosition }}
      />
    </div>
  );
}