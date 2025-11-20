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

  const onNavigate = (page: string, projectId?: number) => {
    if (projectId) {
      document.getElementById(`project-${projectId}`)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    document.getElementById(page)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20">
      <HeroSection  />
      <ServicesSection  />
      <WhyChooseUsSection />
      <PortfolioSection  />
      <TestimonialsSection />
      <FinalCTA/>
    </div>
  );
}
