import { HeroSection } from "@/components/landing/hero-section";
import { AboutUs } from "@/components/landing/about-us";
import { OurProjects } from "@/components/landing/our-projects";
import { VisualShowcase } from "@/components/landing/visual-showcase";
import { TechStack } from "@/components/landing/tech-stack";
import { Roadmap } from "@/components/landing/roadmap";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { JoinRealm } from "@/components/landing/join-realm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-orbitron">
      <main className="flex-grow pt-[64px]">
        <HeroSection />
        <AboutUs />
        <OurProjects />
        <VisualShowcase />
        <TechStack />
        <Roadmap />
        <Contact />
        <JoinRealm />
      </main>
      <Footer />
    </div>
  );
}
