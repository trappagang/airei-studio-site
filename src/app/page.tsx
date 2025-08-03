import { HeroSection } from "@/components/landing/hero-section";
import { AboutPreview } from "@/components/landing/about-preview";
import { ServicesPreview } from "@/components/landing/services-preview";
import { ProjectsPreview } from "@/components/landing/projects-preview";
import { RoadmapTeaser } from "@/components/landing/roadmap-teaser";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <ProjectsPreview />
        <RoadmapTeaser />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
