import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FinancialReturn from './components/FinancialReturn';
import StepByStep from './components/StepByStep';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FinancialReturn />
        <StepByStep />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;