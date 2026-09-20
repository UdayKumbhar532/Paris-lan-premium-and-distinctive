import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Sparkles } from 'lucide-react';

interface SearchCapsuleProps {
  onSearch?: (query: string) => void;
}

const PARIS_LOCATIONS = [
  'Montmartre & Sacré-Cœur',
  'Saint-Germain-des-Prés',
  'Le Marais & Place des Vosges',
  'Île de la Cité & Notre-Dame',
  'Latin Quarter & Panthéon',
  'Champs-Élysées & Arc de Triomphe',
  'Canal Saint-Martin & Belleville',
  'Eiffel Tower & Champ de Mars',
];

export const SearchCapsule: React.FC<SearchCapsuleProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim() || 'All Paris neighborhoods');
    }
  };

  const handleSelectLocation = (loc: string) => {
    setQuery(loc);
    setIsFocused(false);
    if (onSearch) {
      onSearch(loc);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLocations = PARIS_LOCATIONS.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={containerRef} id="search-capsule-wrapper" className="relative w-full max-w-[440px] mx-auto px-4 z-20">
      <form
        id="search-form"
        onSubmit={handleSearchSubmit}
        className={`w-full rounded-full border transition-all duration-300 flex items-center justify-between p-1 sm:p-1.5 bg-neutral-950/80 backdrop-blur-md shadow-xl ${
          isFocused ? 'border-white ring-1 ring-white/50' : 'border-white/25 hover:border-white/50'
        }`}
      >
        <div className="flex items-center gap-2.5 pl-3 sm:pl-3.5 flex-1 min-w-0">
          <Search className="w-4 h-4 text-white/80 shrink-0" strokeWidth={2} />
          <input
            id="location-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search Paris quarter or landmark..."
            className="w-full bg-transparent text-white placeholder:text-white/60 text-xs sm:text-[13px] outline-none font-normal tracking-normal truncate"
          />
        </div>

        <button
          id="search-now-button"
          type="submit"
          className="rounded-full bg-neutral-900 border border-white/40 text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-200 px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-medium whitespace-nowrap cursor-pointer shrink-0 shadow-md"
        >
          Explore
        </button>
      </form>

      {/* Suggested locations dropdown */}
      {isFocused && (
        <div
          id="search-suggestions-dropdown"
          className="absolute top-full left-4 right-4 mt-2 bg-neutral-950/95 border border-white/20 rounded-2xl p-2 shadow-2xl backdrop-blur-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-left"
        >
          <div className="px-3 py-1.5 text-xs font-medium text-white/50 flex items-center gap-1.5 border-b border-white/10 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>Curated Paris Quarters</span>
          </div>
          <div className="max-h-56 overflow-y-auto">
            {(filteredLocations.length > 0 ? filteredLocations : PARIS_LOCATIONS).map((loc) => (
              <button
                key={loc}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelectLocation(loc)}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-white/70 shrink-0" />
                <span className="truncate">{loc}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
