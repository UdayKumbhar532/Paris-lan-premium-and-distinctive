import React from 'react';
import { ArrowRight, Coffee } from 'lucide-react';

interface CulinaryJourneySectionProps {
  onExploreClick: () => void;
}

export const CulinaryJourneySection: React.FC<CulinaryJourneySectionProps> = ({ onExploreClick }) => {
  return (
    <section id="culinary" className="w-full text-white border-t border-white/10 py-20 sm:py-28 relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual/Stats */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm hover:border-white/50 transition-all duration-300 h-40 flex flex-col justify-end">
                <span className="text-3xl font-light text-white mb-1">15+</span>
                <span className="text-xs text-white/60 tracking-wider uppercase">Michelin Experiences</span>
              </div>
              <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm hover:border-white/50 transition-all duration-300 h-48 flex flex-col justify-end">
                <span className="text-3xl font-light text-white mb-1">50+</span>
                <span className="text-xs text-white/60 tracking-wider uppercase">Hidden Cafés</span>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm hover:border-white/50 transition-all duration-300 h-48 flex flex-col justify-end">
                <span className="text-3xl font-light text-white mb-1">Exclusive</span>
                <span className="text-xs text-white/60 tracking-wider uppercase">Wine Tastings</span>
              </div>
              <div className="p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm hover:border-white/50 transition-all duration-300 h-40 flex flex-col justify-end">
                <span className="text-3xl font-light text-white mb-1">Daily</span>
                <span className="text-xs text-white/60 tracking-wider uppercase">Market Tours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex-1 lg:max-w-md">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-normal text-white tracking-normal mb-8">
              <Coffee className="w-4 h-4 text-white/70" />
              French Gastronomy
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Taste the Magic of<br />
              <span className="italic font-extralight text-white/90">French Cuisine.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed mb-8">
              A trip to Paris is incomplete without indulging in its culinary excellence. Join our local experts for exclusive wine tastings, pastry masterclasses, and hidden café tours that reveal the true flavors of the city.
            </p>
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/40 text-white font-sans text-xs sm:text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer shadow-md"
            >
              Discover Food Tours
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
