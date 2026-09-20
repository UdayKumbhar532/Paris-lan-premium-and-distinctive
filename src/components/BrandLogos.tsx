import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const BrandLogos: React.FC = () => {
  return (
    <div id="featured-press-section" className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
      {/* Reduced size and width card with icon, similar to the first card, transparent blur */}
      <div
        id="featured-second-card"
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[11px] sm:text-xs font-normal text-white tracking-normal mb-3 sm:mb-3.5 shadow-sm max-w-fit"
      >
        <ShieldCheck className="w-3.5 h-3.5 stroke-white fill-none shrink-0" strokeWidth={2} />
        <span>Featured as the safest place to go in</span>
      </div>

      <div id="press-logos-container" className="flex flex-wrap items-center justify-center gap-7 sm:gap-10 md:gap-14 lg:gap-16 w-full text-white">
        {/* Forbes Logo */}
        <div id="logo-forbes" className="flex items-center justify-center group opacity-90 hover:opacity-100 transition-opacity">
          <svg
            className="h-6 sm:h-7 md:h-8 w-auto fill-white"
            viewBox="0 0 130 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Forbes"
          >
            {/* Forbes stylized wordmark */}
            <text
              x="0"
              y="26"
              fill="#FFFFFF"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="31"
              fontWeight="bold"
              letterSpacing="-0.5px"
            >
              Forbes
            </text>
          </svg>
        </div>

        {/* Men's Health Logo */}
        <div id="logo-mens-health" className="flex items-center justify-center group opacity-90 hover:opacity-100 transition-opacity">
          <svg
            className="h-6 sm:h-7 md:h-8 w-auto"
            viewBox="0 0 170 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Men's Health"
          >
            <text
              x="0"
              y="25"
              fill="#FFFFFF"
              fontFamily="'DM Sans', -apple-system, sans-serif"
              fontSize="27"
              fontWeight="900"
              letterSpacing="-1.2px"
            >
              Men’sHealth
            </text>
          </svg>
        </div>

        {/* Bloomberg Logo */}
        <div id="logo-bloomberg" className="flex items-center justify-center group opacity-90 hover:opacity-100 transition-opacity">
          <svg
            className="h-6 sm:h-7 md:h-8 w-auto"
            viewBox="0 0 160 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Bloomberg"
          >
            <text
              x="0"
              y="25"
              fill="#FFFFFF"
              fontFamily="'DM Sans', -apple-system, sans-serif"
              fontSize="26"
              fontWeight="800"
              letterSpacing="-0.8px"
            >
              Bloomberg
            </text>
          </svg>
        </div>

        {/* The Washington Post Logo */}
        <div id="logo-washington-post" className="flex items-center justify-center group opacity-90 hover:opacity-100 transition-opacity">
          <svg
            className="h-6 sm:h-7 md:h-8 w-auto"
            viewBox="0 0 240 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="The Washington Post"
          >
            <text
              x="0"
              y="24"
              fill="#FFFFFF"
              fontFamily="'Old English Text MT', 'Engravers Old English', 'Fraktur', 'UnifrakturMaguntia', 'Georgia', serif"
              fontSize="23"
              fontWeight="bold"
              letterSpacing="0.2px"
            >
              The Washington Post
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};
