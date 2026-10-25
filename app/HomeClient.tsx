import {
  HeroSection,
  StoresLadder,
  WorkMarquee,
  ServicesSection,
  WhyChooseUsSection,
  PortfolioSection,
  TestimonialsSection,
  FinalCTA
} from "../components/Home";

export default function HomeClient() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StoresLadder />
      <WorkMarquee />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      {/* Renders only once real testimonials are added to Data.ts */}
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
