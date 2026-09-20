/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TopLandmarksSection } from './components/TopLandmarksSection';
import { StatsSection } from './components/StatsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { CulinaryJourneySection } from './components/CulinaryJourneySection';
import { BestTimeSection } from './components/BestTimeSection';
import { ToursSection } from './components/ToursSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TravelerStoriesSection } from './components/TravelerStoriesSection';
import { FinalCTASection } from './components/FinalCTASection';
import { TripPlannerModal } from './components/TripPlannerModal';
import { ScrollCanvasBackground } from './components/ScrollCanvasBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CursorGlow } from './components/CursorGlow';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [plannerMode, setPlannerMode] = useState<'plan' | 'experts'>('plan');
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchFeedback(`Exploring curated Paris itineraries for "${query}"...`);
    setTimeout(() => {
      setSearchFeedback(null);
    }, 3500);
  };

  const handleOpenPlanTrip = () => {
    setPlannerMode('plan');
    setIsPlannerOpen(true);
  };

  const handleOpenExperts = () => {
    setPlannerMode('experts');
    setIsPlannerOpen(true);
  };

  const handleSelectExperience = () => {
    setPlannerMode('plan');
    setIsPlannerOpen(true);
  };

  const handleFindTour = () => {
    setPlannerMode('plan');
    setIsPlannerOpen(true);
  };

  return (
    <div
      id="escape-banner-root"
      className="min-h-screen w-full text-white flex flex-col relative font-sans scroll-smooth selection:bg-white selection:text-black"
    >
      {/* Cinematic Canvas Background */}
      <ScrollCanvasBackground />

      {/* Scroll Progress Line */}
      <ScrollProgressBar />

      {/* Ambient Cursor Glow */}
      <CursorGlow />

      {/* Floating Back to Top */}
      <BackToTop />

      {/* Top Fixed / Sticky Navigation Bar */}
      <div className="sticky top-0 z-40 backdrop-blur-md border-b border-white/10">
        <Header onPlanTripClick={handleOpenPlanTrip} />
      </div>

      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section — Discover ParisÉlan */}
        <HeroSection
          onPlanTripClick={handleOpenPlanTrip}
          onSearch={handleSearch}
          searchFeedback={searchFeedback}
        />

        {/* 2. Animated Stats */}
        <StatsSection />

        {/* 3. Top Landmarks */}
        <TopLandmarksSection onExploreClick={handleOpenPlanTrip} />

        {/* 4. Experiences */}
        <ExperiencesSection onSelectExperience={handleSelectExperience} />

        {/* 5. Culinary Journey */}
        <CulinaryJourneySection onExploreClick={handleOpenPlanTrip} />

        {/* 6. Best Time to Visit */}
        <BestTimeSection />

        {/* 7. Curated Tours */}
        <ToursSection onFindTourClick={handleFindTour} />

        {/* 8. Why Travel With Us */}
        <WhyUsSection />

        {/* 9. Traveler Stories */}
        <TravelerStoriesSection />

        {/* 10. Final CTA */}
        <FinalCTASection
          onStartPlanningClick={handleOpenPlanTrip}
          onTalkToExpertsClick={handleOpenExperts}
        />
      </main>

      {/* Modal Dialog for Trip Planning & Travel Experts */}
      <TripPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        defaultMode={plannerMode}
      />
    </div>
  );
}
