import React from 'react';
import { Star, Quote } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'New York, USA',
    text: '"The private Louvre tour completely changed how I experience art. No crowds, just us and the masterpieces. Truly a memory for a lifetime."',
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'London, UK',
    text: '"We discovered hidden jazz bars in Montmartre that we never would have found on our own. ParisÉlan planned the perfect anniversary."',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Madrid, Spain',
    text: '"The culinary tour was spectacular. Tasting fresh croissants and walking through local markets felt like stepping into a Parisian movie."',
  }
];

export const TravelerStoriesSection: React.FC = () => {
  return (
    <section id="stories" className="w-full text-white border-t border-white/10 py-20 sm:py-28 relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4 font-normal">
            04 / Traveler Stories
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-[1.1] mb-6">
            Memories Made in<br />
            <span className="italic font-extralight text-white/90">The City of Light.</span>
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((story) => (
            <div 
              key={story.id} 
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 italic">
                {story.text}
              </p>
              
              <div>
                <h4 className="text-white font-medium text-sm">{story.name}</h4>
                <p className="text-white/50 text-xs mt-1">{story.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
