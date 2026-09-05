import React from 'react';
import { BOOTCAMP_REGISTRATION_URL, PROJECT_SUBMISSION_URL } from '../config';

export function Footer() {
  return (
    <footer className="w-full bg-[#10182C] text-stone-300 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Official Supplied NIAT Brand Lockup */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/niat_brand_lockup.png"
              alt="NIAT - NxtWave of Innovation in Advanced Technologies"
              className="h-9 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Center: Small Clean Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-stone-400">
            <a href="#submit-project" className="hover:text-white transition-colors">
              Project
            </a>
            <a href="#weekend-bootcamp" className="hover:text-white transition-colors">
              AI Bootcamp
            </a>
            <a href="#rewards-section" className="hover:text-white transition-colors">
              Rewards
            </a>
            <a
              href={BOOTCAMP_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2C84B] hover:text-[#FFF1A8] transition-colors font-bold"
            >
              Join Bootcamp
            </a>
          </nav>

          {/* Right: Small Legal & Cohort Notice */}
          <div className="text-[11px] font-mono text-stone-500 text-center md:text-right">
            <span>© 2026 NIAT · For Class 12 High School Students</span>
          </div>

        </div>
      </div>
    </footer>
  );
}