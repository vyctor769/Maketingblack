import React from 'react';
import Header from './components/Header';
import VSLSection from './components/VSLSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialSection from './components/TestimonialSection';
import BonusSection from './components/BonusSection';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <VSLSection />
      <BenefitsSection />
      <TestimonialSection />
      <BonusSection />
      <OfferSection />
      <Footer />
    </div>
  );
}

export default App;