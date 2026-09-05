import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { BOOTCAMP_REGISTRATION_URL } from '../config';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Project', href: '#submit-project' },
    { name: 'Slides', href: '#google-slides-player' },
    { name: 'AI Bootcamp', href: '#weekend-bootcamp' },
    { name: 'Rewards', href: '#rewards-section' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF7EF]/90 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-2.5'
          : 'bg-[#FBF7EF] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Official Attached NIAT Logo with full lockup */}
        <a
          href="#"
          className="flex items-center gap-2 group flex-shrink-0"
          aria-label="NIAT Home"
        >
          <img
            src="/assets/niat_brand_lockup.png"
            alt="NIAT - NxtWave of Innovation in Advanced Technologies"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-stone-700 hover:text-[#FF6600] tracking-wide transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={BOOTCAMP_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-[#FF6600]/25 hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
          >
            <span>🚀 JOIN AI BOOTCAMP</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-200/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FBF7EF] border-b border-stone-200 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-stone-800 hover:text-[#FF6600] py-1 border-b border-stone-200/40"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href={BOOTCAMP_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white font-extrabold text-sm uppercase tracking-wider shadow-md border border-[#FFCC00]/40"
          >
            <span>🚀 JOIN AI BOOTCAMP</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;