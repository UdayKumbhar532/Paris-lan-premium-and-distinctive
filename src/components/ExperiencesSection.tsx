import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ExperiencesSectionProps {
  onSelectExperience?: (title: string) => void;
}

const EXPERIENCE_CATEGORIES = [
  {
    id: 'iconic-paris',
    number: '01',
    title: 'Iconic Paris',
    description:
      "Discover the city's legendary landmarks, from the Eiffel Tower and Arc de Triomphe to the Louvre and Notre-Dame.",
  },
  {
    id: 'hidden-paris',
    number: '02',
    title: 'Hidden Paris',
    description:
      'Walk through charming neighborhoods, quiet courtyards, local streets and lesser-known corners that most visitors never see.',
  },
  {
    id: 'paris-after-dark',
    number: '03',
    title: 'Paris After Dark',
    description:
      'Experience the magic of Paris illuminated by night with evening walks, Seine-side moments and unforgettable city views.',
  },
  {
    id: 'food-culture',
    number: '04',
    title: 'Food & Culture',
    description:
      'Taste your way through Paris with authentic French cuisine, bakeries, cafés, markets and local culinary traditions.',
  },
];

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onSelectExperience }) => {
  return (
    <section
      id="experiences"
      className="w-full py-20 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto text-white border-t border-white/10"
    >
      {/* Section Header */}
      <div className="mb-14 sm:mb-20">
        <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-5 font-normal">
          01 / Experiences
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] max-w-3xl mb-8">
          More Than a Tour.<br />
          <span className="italic font-extralight">A Parisian Experience.</span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed max-w-2xl">
          Paris is not just a destination. It's an atmosphere, a rhythm, a collection of moments waiting to be discovered.
        </p>
        <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed max-w-2xl mt-3">
          Our experiences are designed to take you beyond the ordinary and show you the Paris that stays with you long after you've left.
        </p>
      </div>

      {/* Experience Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/10 rounded-2xl overflow-hidden mb-12 sm:mb-16">
        {EXPERIENCE_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectExperience?.(cat.title)}
            className="group relative p-8 sm:p-10 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-sm transition-all duration-300 cursor-pointer border-b border-r border-white/10 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-normal">
                {cat.number}
              </span>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mb-3 group-hover:opacity-100 transition-opacity">
              {cat.title}
            </h3>
            <p className="text-sm text-white/55 font-normal leading-relaxed">
              {cat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Section CTA */}
      <div className="flex justify-start">
        <a
          href="#tours"
          id="cta-explore-experiences"
          className="inline-flex items-center gap-3 text-sm font-normal tracking-[0.15em] uppercase text-white hover:gap-5 transition-all duration-300"
        >
          <span>Explore All Experiences</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
