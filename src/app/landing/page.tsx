import {
  CompanyIntro,
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
      <ServicesHighlights />
      <ProcessSteps />
      <Partners />
      <ProjectsShowcase />
      <ContactSection />
    </div>
  );
}
