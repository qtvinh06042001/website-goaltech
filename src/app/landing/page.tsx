import {
  CompanyIntro,
  MarketingStats,
  AboutFeatures,
  ServicesHighlights,
  ProjectsShowcase,
  Partners,
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
    </div>
  );
}
