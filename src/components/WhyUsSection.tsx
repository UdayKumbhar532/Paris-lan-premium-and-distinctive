import React from 'react';
import { Compass, Users, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: 'Local Expertise',
    description: 'Discover Paris through people who know the city beyond the guidebooks.',
    icon: Compass,
  },
  {
    title: 'Personalized Experiences',
    description: 'Choose experiences that match your interests, pace, and travel style.',
    icon: Sparkles,
  },
  {
    title: 'Easy Planning',
    description: 'From itinerary planning to unforgettable experiences, we make your Paris journey simple.',
    icon: HeartHandshake,
  },
  {
    title: 'Memorable Moments',
    description: "Travel for the moments you'll remember long after you've returned home.",
    icon: Users,
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto text-white border-t border-white/10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-normal text-white mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
          <span>Why Travel With Us</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
          More Than a Trip. A Parisian Experience.
        </h2>

        <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed">
          We believe the best way to experience Paris is to go beyond the checklist. Our team helps you discover the city
          with carefully planned itineraries, local knowledge, and experiences that leave you with stories worth remembering.
        </p>
      </div>

      {/* 4 Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {HIGHLIGHTS.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center mb-5 text-white">
                  <IconComponent className="w-5 h-5 stroke-white" />
                </div>

                <h3 className="text-xl font-medium tracking-tight text-white mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-white/70 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/50">
                0{index + 1} — Guarantee
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
