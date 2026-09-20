import React, { useState } from 'react';
import { Clock, MapPin, Star, ArrowRight, Check } from 'lucide-react';

interface ToursSectionProps {
  onFindTourClick?: (tourName?: string) => void;
}

const TOURS = [
  {
    id: 'paris-essentials',
    title: 'Paris Essentials',
    duration: 'Full Day',
    type: 'Must-See Landmarks',
    description: 'Discover the city’s most famous landmarks in one unforgettable day.',
    highlights: ['Eiffel Tower summit', 'Louvre highlights tour', 'Notre-Dame & Latin Quarter', 'Seine river cruise pass'],
  },
  {
    id: 'romantic-paris',
    title: 'Romantic Paris',
    duration: 'Afternoon & Evening',
    type: 'Couples & Sunset',
    description: 'Sunset walks, charming cafés, Seine views, and magical evenings made for two.',
    highlights: ['Private Seine riverboat', 'Montmartre hidden vineyards', 'Candlelit terrace wine tasting', 'Pont des Arts stroll'],
  },
  {
    id: 'hidden-paris',
    title: 'Hidden Paris',
    duration: 'Half Day',
    type: 'Local Culture',
    description: 'Leave the usual tourist paths behind and uncover neighborhoods, stories, and places known by locals.',
    highlights: ['Covered secret passages of 1800s', 'Le Marais artisan courtyards', 'Canal Saint-Martin vintage boutiques', 'Quartier Belleville views'],
  },
  {
    id: 'paris-in-a-day',
    title: 'Paris in a Day',
    duration: 'Full Day (Express)',
    type: 'Curated Itinerary',
    description: 'Experience the highlights of Paris with a thoughtfully planned itinerary.',
    highlights: ['Skip-the-line VIP entries', 'Private luxury Mercedes transit', 'Chef-selected lunch in Saint-Germain', 'Expert bilingual local host'],
  },
];

export const ToursSection: React.FC<ToursSectionProps> = ({ onFindTourClick }) => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  return (
    <section
      id="tours"
      className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto text-white border-t border-white/10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-normal text-white mb-4">
          <Star className="w-3.5 h-3.5 text-white" />
          <span>Curated Tours — Travel Without the Stress</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
          Your Paris. Perfectly Planned.
        </h2>

        <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed">
          Make every moment count with carefully designed Paris tours. Whether you're visiting for the first time
          or returning to discover something new, our local experiences combine must-see attractions with authentic moments.
        </p>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {TOURS.map((tour) => {
          const isSelected = selectedTour === tour.id;
          return (
            <div
              key={tour.id}
              onClick={() => setSelectedTour(isSelected ? null : tour.id)}
              className={`rounded-2xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md cursor-pointer ${
                isSelected
                  ? 'border-white bg-white/[0.12] ring-1 ring-white shadow-2xl'
                  : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/[0.08]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-white/60 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-white/70" />
                    {tour.duration}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 text-white/80">
                    {tour.type}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-white mb-2.5">
                  {tour.title}
                </h3>

                <p className="text-sm text-white/80 font-normal leading-relaxed mb-5">
                  {tour.description}
                </p>

                <div className="space-y-2 mb-6">
                  {tour.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onFindTourClick?.(tour.title);
                  }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white hover:underline cursor-pointer"
                >
                  <span>Select this tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-white/50">Guided & All-Inclusive</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => onFindTourClick?.()}
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
        >
          <span>Find Your Perfect Tour</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
