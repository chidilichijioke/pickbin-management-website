import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustIndicators } from './components/TrustIndicators';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { SchedulePickup } from './components/SchedulePickup';



type Page = 'home' | 'about' | 'faq' | 'schedulePickup';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // About Page
  if (currentPage === 'about') {
    return <AboutPage
    onNavigateHome={() => navigateToPage('home')}
    onNavigateToSchedulePickup={() => navigateToPage('schedulePickup')} />;
  }

  // FAQ Page
  if (currentPage === 'faq') {
    return <FAQSection onNavigateHome={() => navigateToPage('home')} />;
  }

  // Schedule Pickup Page
  if (currentPage === 'schedulePickup') {
    return <SchedulePickup onNavigateHome={() => navigateToPage('home')} />;
  }

  // Home Page
  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigateToAbout={() => navigateToPage('about')}
        onNavigateToFAQ={() => navigateToPage('faq')}
        onNavigateToSchedulePickup={() => navigateToPage('schedulePickup')}
      />
      <main>
        <HeroSection 
          onNavigateToAbout={() => navigateToPage('about')}
          onNavigateToSchedulePickup={() => navigateToPage('schedulePickup')}
        />
        <TrustIndicators />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection onNavigateHome={() => navigateToPage('home')} />
        <CTASection onNavigateToSchedulePickup={() => navigateToPage('schedulePickup')} />
      </main>
      <Footer 
        onNavigateToAbout={() => navigateToPage('about')}
        onNavigateToFAQ={() => navigateToPage('faq')}
        onNavigateToSchedulePickup={() => navigateToPage('schedulePickup')}
      />
    </div>
  );
}
