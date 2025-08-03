import { StudioPhilosophy } from "@/components/about/studio-philosophy";
import { OurMission } from "@/components/about/our-mission";
import { OurStory } from "@/components/about/our-story";
import { OurTeam } from "@/components/about/our-team";
import { Footer } from "@/components/landing/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold text-neon-pink text-center py-16">
        About Us
      </h1>
      <p className="text-lg text-center px-8">
        Learn more about our mission, vision, and the digital spirit of anime.
      </p>
      <main className="flex-grow pt-[64px]">
        <StudioPhilosophy />
        <OurMission />
        <OurStory />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}
