import React, { useEffect, useState } from 'react';

export function Preloader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth progress counter with natural acceleration
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFading(true);
          setTimeout(onFinish, 450);
          return 100;
        }
        const increment = prev < 60 ? 12 : prev < 90 ? 8 : 15;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBF7EF] transition-all duration-600 ease-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6 text-center space-y-6">
        {/* NIAT Official Brand Lockup */}
        <div className="h-14 flex items-center justify-center animate-in fade-in zoom-in-95 duration-500">
          <img
            src="/assets/niat_brand_lockup.png"
            alt="NIAT - NxtWave of Innovation in Advanced Technologies"
            className="h-full w-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* Minimal Progress Bar with Yellow / Orange Gradient */}
        <div className="w-full h-1 bg-stone-200/80 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#FF6600] via-[#FFCC00] to-[#FFCC00] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Metric */}
        <div className="flex items-center justify-between w-full text-[11px] font-mono uppercase tracking-widest text-stone-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
            <span>AI COHORT 2026</span>
          </span>
          <span className="font-bold text-[#FF6600]">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;