import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROJECT_SUBMISSION_URL, SUBMISSION_DEADLINE_ISO } from '../config';
import { MediaBox } from './ui/MediaBox';
import { CinematicImage } from './ui/CinematicImage';
import { BentoCard } from './ui/BentoCard';

export function ProjectSubmissionCta() {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const target = new Date(SUBMISSION_DEADLINE_ISO).getTime();
    const now = new Date().getTime();
    if (target - now <= 0) {
      setIsExpired(true);
    }
  }, []);

  return (
    <section id="submit-project" className="relative w-full py-16 lg:py-24 bg-[#FBF7EF] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, High-Impact Bento Card */}
        <BentoCard bgTheme="white" borderTheme="subtle" staggerIndex={0} className="p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                <span>OFFICIAL SUBMISSION PORTAL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10182C] tracking-tight">
                Ready to Submit?
              </h2>

              {/* Main CTA */}
              <div className="pt-2">
                <a
                  href={PROJECT_SUBMISSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#E65C00] hover:to-[#FF6600] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#FF6600]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#FFCC00]/40"
                >
                  <span>SUBMIT MY PROJECT</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Small Compact Deadline Badge */}
              <div className="pt-3 flex items-center gap-3">
                <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono font-medium ${
                  isExpired
                    ? 'bg-rose-50 border-rose-200 text-rose-700 font-bold'
                    : 'bg-stone-100/80 border-stone-200 text-stone-700'
                }`}>
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  {isExpired ? (
                    <span className="uppercase tracking-wider">SUBMISSIONS CLOSED</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-900">SUBMIT BY:</span>
                      <span>WEDNESDAY, 9 SEPT 2026 · 9:00 PM IST</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Large Realistic Visual Box (6 Cols) with Unique Verified Submission Image */}
            <div className="lg:col-span-6">
              <MediaBox
                aspectRatio="16:9"
                className="rounded-2xl shadow-lg"
              >
                <CinematicImage
                  src="/assets/submission-verified-unique.jpg"
                  alt="Student proudly presenting launched AI project"
                  objectFit="cover"
                />
              </MediaBox>
            </div>

          </div>
        </BentoCard>

      </div>
    </section>
  );
}

export default ProjectSubmissionCta;