import React from 'react';
import { ArrowRight, MessageSquare, Compass, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onStartPlanningClick: () => void;
  onTalkToExpertsClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onStartPlanningClick,
  onTalkToExpertsClick,
}) => {
  return (
    <section
      id="plan-trip"
      className="w-full py-20 sm:py-28 px-4 sm:px-8 max-w-5xl mx-auto text-white border-t border-white/10 text-center"
    >
      <div className="relative rounded-3xl border border-white/25 bg-white/5 backdrop-blur-xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
        {/* Decorative subtle ambient ring */}
        <div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/[0.03] blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/[0.03] blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-normal text-white mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Start Your Paris Story</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-5 max-w-2xl mx-auto leading-tight">
          Paris Is Waiting for You.
        </h2>

        {/* Content */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          The city of lights, art, romance, fashion, and unforgettable moments is ready to be explored.
          Let us help you turn your Paris dream into a journey you'll never forget.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8">
          <button
            type="button"
            onClick={onStartPlanningClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all duration-200 cursor-pointer shadow-xl active:scale-95"
          >
            <span>Start Planning Your Paris Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onTalkToExpertsClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Talk to Our Travel Experts</span>
          </button>
        </div>

        {/* Small closing line */}
        <p className="text-xs sm:text-sm text-white/60 font-normal tracking-wide italic">
          Your journey begins in Paris.
        </p>
      </div>

      {/* Footer copyright */}
      <div className="mt-16 text-xs text-white/40 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
        <p>© 2026 ParisÉlan. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-white transition-colors">
            Back to Top
          </a>
          <a href="#experiences" className="hover:text-white transition-colors">
            Experiences
          </a>
          <a href="#tours" className="hover:text-white transition-colors">
            Curated Tours
          </a>
        </div>
      </div>
    </section>
  );
};
