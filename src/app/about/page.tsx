import { StudioPhilosophy } from "@/components/about/studio-philosophy";
import { OurMission } from "@/components/about/our-mission";
import { OurStory } from "@/components/about/our-story";
import { OurTeam } from "@/components/about/our-team";
import { Footer } from "@/components/landing/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-grow pt-[64px] text-white">
        <StudioPhilosophy />
        <OurMission />
        <OurStory />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}
