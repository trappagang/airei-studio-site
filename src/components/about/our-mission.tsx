import { Section } from "@/components/landing/section";
import { Bot, Palette, Rocket } from "lucide-react";

const missionPoints = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Democratize Creation",
    description: "We build and share AI tools that lower the barrier to entry, allowing anyone with a story to tell it through the power of animation."
  },
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: "Augment Artistry",
    description: "Our technology acts as a collaborator, not a replacement. We empower artists to work faster, experiment bolder, and focus on what truly matters: the creative vision."
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Innovate Narrative",
    description: "By integrating AI into the storytelling process itself, we explore new forms of interactive and generative narratives that were previously impossible."
  }
];

export function OurMission() {
  return (
    <Section className="bg-card/5 border-b border-primary/20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl mb-4 relative glitch-button" data-text="Our Mission">
          <span className="relative z-10">Empowering New Creators</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-16">
          Our mission is to fuse artificial intelligence with human creativity to unlock the next generation of anime and empower a new wave of storytellers.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {missionPoints.map((point, index) => (
          <div key={index} className="text-center p-8 border border-primary/20 rounded-lg glow-on-hover bg-black/20 item-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <div className="flex justify-center mb-6">
              {point.icon}
            </div>
            <h3 className="font-headline text-2xl mb-3 text-accent">{point.title}</h3>
            <p className="text-foreground/80">{point.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}