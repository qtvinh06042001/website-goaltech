import {
  CompanyIntro,
  MarketingStats,
  AboutFeatures,
  ServicesHighlights,
  ProjectsShowcase,
  Partners,
  CTA,
} from "@/components/sections";

export default function LandingPage() {
  return (
    <div>
      <CompanyIntro />
      <MarketingStats />
      <AboutFeatures />
      <ServicesHighlights />
      <ProjectsShowcase />
      <Partners />
      <CTA />
    </div>
  );
}
