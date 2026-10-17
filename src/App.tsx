import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RooftopExperience } from './components/RooftopExperience';
import { MenuSection } from './components/MenuSection';
import { BuffetSection } from './components/BuffetSection';
import { CompetitorAnalysisSection } from './components/CompetitorAnalysisSection';
import { PartyCalculator } from './components/PartyCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationMetroGuide } from './components/LocationMetroGuide';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => setIsReservationOpen(true);
  const handleCloseReservation = () => setIsReservationOpen(false);

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#FAF7F2] flex flex-col relative selection:bg-[#F59E0B] selection:text-[#0B0F19]">
      {/* Navigation */}
      <Navbar
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Primary H1 and Keyword Placement Strategy */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* Level 2 Rooftop Experience Showcase */}
        <RooftopExperience
          onOpenReservation={handleOpenReservation}
        />

        {/* Full Interactive Menu with INR Pricing & Dietary Filters */}
        <MenuSection
          onOpenReservation={handleOpenReservation}
        />

        {/* Grand Unlimited Buffet Section */}
        <BuffetSection
          onOpenReservation={handleOpenReservation}
        />

        {/* Competitor Analysis Benchmark Matrix */}
        <CompetitorAnalysisSection />

        {/* Interactive Party & Birthday Budget Calculator */}
        <PartyCalculator
          onOpenReservation={handleOpenReservation}
        />

        {/* Google 4.9 Verified Customer Reviews */}
        <ReviewsSection />

        {/* Dwarka Sector 12 Metro & Driving Directions Guide */}
        <LocationMetroGuide />

        {/* Voice Search & Structured FAQ Section */}
        <FAQSection />
      </main>

      {/* Rich Footer with NAP, Reservation Concierge & Navigation */}
      <Footer
        onOpenReservation={handleOpenReservation}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        onOpenReservation={handleOpenReservation}
      />

      {/* Interactive Table Reservation Modal with Instant Pass */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
      />
    </div>
  );
}
