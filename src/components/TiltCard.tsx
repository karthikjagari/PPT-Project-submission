import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glowColor = 'rgba(251, 191, 36, 0.15)'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for rotation
  const rotateX = useSpring(0, { stiffness: 300, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalizing between -1 and 1
    const xPct = (mouseX / width) * 2 - 1;
    const yPct = (mouseY / height) * 2 - 1;

    rotateX.set(-yPct * maxTilt);
    rotateY.set(xPct * maxTilt);
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative perspective-1000 overflow-hidden ${className}`}
    >
      {/* Dynamic Cursor Light Spot */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 70%)`
          }}
        />
      )}
      {children}
    </motion.div>
  );
};
