import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onPlanTripClick: () => void;
  onSearch?: (query: string) => void;
  searchFeedback?: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlanTripClick }) => {
  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-5xl mx-auto z-10"
    >
      {/* Location Label */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-[11px] font-normal tracking-[0.2em] uppercase text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
          Paris · France
        </span>
      </div>

      {/* Main Headline */}
      <h1
        id="hero-headline"
        className="font-light text-[38px] sm:text-[58px] md:text-[72px] tracking-[0.05em] uppercase text-white leading-[1.1] mb-5 sm:mb-6 max-w-4xl"
      >
        Discover ParisÉlan<br />
        <span className="italic font-extralight">Differently.</span>
      </h1>

      {/* Subheading */}
      <p className="text-sm sm:text-base font-light tracking-[0.12em] uppercase text-white/70 mb-3 sm:mb-4">
        Curated journeys. Iconic moments. Unforgettable Paris.
      </p>

      {/* Description */}
      <p
        id="hero-description"
        className="text-xs sm:text-sm font-normal text-white/60 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-12 px-2"
      >
        Experience the City of Light through thoughtfully designed tours, private
        experiences, and authentic Parisian moments. From the Eiffel Tower at sunrise
        to hidden streets far from the crowds, we turn your visit into a story worth
        remembering.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-14">
        <a
          id="cta-explore-tours"
          href="#tours"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-normal text-xs tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
        >
          <span>Explore Tours</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        <button
          id="cta-plan-journey"
          type="button"
          onClick={onPlanTripClick}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-xs tracking-[0.15em] uppercase font-normal text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer shadow-md active:scale-95"
        >
          <span>Plan Your Journey</span>
        </button>
      </div>

      {/* Supporting text */}
      <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-normal">
        Your Paris. Your Way.
      </p>
    </section>
  );
};
