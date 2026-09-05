import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BootcampRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BootcampRegisterModal: React.FC<BootcampRegisterModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [school, setSchool] = useState('');
  const [stream, setStream] = useState('Science (PCM/PCB)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    const cleanPhone = mobile.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    // Save lead
    try {
      const storedLeads = JSON.parse(localStorage.getItem('niat_bootcamp_leads') || '[]');
      storedLeads.unshift({
        id: 'LEAD-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        name,
        mobile: cleanPhone,
        school,
        stream,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('niat_bootcamp_leads', JSON.stringify(storedLeads));
      console.log('🔥 [NIAT Weekend Bootcamp Lead Saved]', { name, mobile: cleanPhone, stream });
    } catch (err) {
      console.warn('Could not cache lead:', err);
    }

    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white border border-amber-900/10 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
              Registration Successful
            </span>

            <h3 className="text-2xl font-black text-gray-900 mb-2 font-['Plus_Jakarta_Sans']">
              🎉 Welcome to the Weekend AI Cohort!
            </h3>

            <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6">
              We've reserved your spot for this coming weekend. We'll send your session link and starter pack to <strong>+91 {mobile}</strong> via WhatsApp.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-left mb-6 text-xs text-amber-950">
              <p className="font-bold flex items-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-700" /> Next Session Schedule:
              </p>
              <p>Saturday & Sunday • 4:00 PM to 5:30 PM IST</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#731724] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Done & Return to Project Page
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                Class 12 Exclusive
              </span>
              <span className="text-xs font-bold text-gray-400">• Free Cohort</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight font-['Plus_Jakarta_Sans'] mb-2">
              Join Weekend AI Bootcamp 🔥
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Hands-on AI building, Board exam superchargers, and weekly prize challenges every Saturday & Sunday.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priyanshu Roy"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/20 outline-none text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  WhatsApp Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="98765 43210"
                    maxLength={10}
                    className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/20 outline-none text-sm font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    School / College
                  </label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="e.g. Modern School"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/20 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Class 12 Stream
                  </label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/20 outline-none text-xs sm:text-sm bg-white"
                  >
                    <option value="Science (PCM/PCB)">Science (PCM / PCB)</option>
                    <option value="Commerce">Commerce with / without Maths</option>
                    <option value="Arts / Humanities">Arts / Humanities</option>
                    <option value="Other">Other / Vocational</option>
                  </select>
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-600 bg-rose-50 p-2 rounded-lg border border-rose-200">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#731724] text-white font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Registering...</span>
                ) : (
                  <>
                    <span>Confirm Free Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero fees • 100% curated for Class 12 students</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
