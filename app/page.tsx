"use client";

import { 
  HeroSection, 
  ServicesSection, 
  WhyChooseUsSection, 
  PortfolioSection, 
  TestimonialsSection, 
  FinalCTA 
} from "../components/Home";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
