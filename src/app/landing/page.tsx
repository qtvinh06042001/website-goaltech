import {
  CompanyIntro,
  MarketingStats,
  AboutFeatures,
  ServicesHighlights,
  ProjectsShowcase,
  Partners,
  ContactSection,
  ProcessSteps,
} from "@/components/sections";

export default function LandingPage() {
  return (
    <div>
      <CompanyIntro />
      <MarketingStats />
      <AboutFeatures />
      <ServicesHighlights />
      <ProcessSteps />
      <Partners />
      <ProjectsShowcase />
      <ContactSection />
    </div>
  );
}
