"use client";

import { 
  HeroSection, 
  ServicesSection, 
  WhyChooseUsSection, 
  PortfolioSection, 
  FinalCTA 
} from "../components/Home";

export default function HomeClient() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      {/* <TestimonialsSection /> */}
      <FinalCTA />
    </div>
  );
}
