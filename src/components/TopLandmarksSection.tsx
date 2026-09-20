import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface TopLandmarksSectionProps {
  onExploreClick: () => void;
}

const LANDMARKS = [
  {
    id: 'eiffel',
    name: 'Eiffel Tower',
    description: 'Experience breathtaking views of the city from the iconic Iron Lady.',
  },
  {
    id: 'louvre',
    name: 'The Louvre',
    description: 'Home to thousands of works of art, including the Mona Lisa.',
  },
  {
    id: 'montmartre',
    name: 'Montmartre',
    description: 'Wander the cobbled streets of Paris’s historic artist district.',
  }
];

export const TopLandmarksSection: React.FC<TopLandmarksSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="landmarks" className="w-full text-white border-t border-white/10 py-20 sm:py-28 relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Text */}
          <div className="flex-1 lg:max-w-md">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-normal text-white tracking-normal mb-8">
              <MapPin className="w-4 h-4 text-white/70" />
              Iconic Destinations
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-[1.1] mb-6">
              The Heart of<br />
              <span className="italic font-extralight text-white/90">Paris.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed mb-8">
              From world-renowned monuments to artistic neighborhoods, our curated journeys ensure you experience the absolute best of Paris. Skip the lines and dive straight into the magic.
            </p>
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white text-white font-sans text-xs sm:text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-md"
            >
              Explore Landmarks
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Cards */}
          <div className="flex-1 grid gap-4 sm:gap-6">
            {LANDMARKS.map((landmark, idx) => (
              <div 
                key={landmark.id} 
                className="p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-between hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-normal">
                    0{idx + 1}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2">{landmark.name}</h3>
                  <p className="text-sm text-white/60 font-normal leading-relaxed">{landmark.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
