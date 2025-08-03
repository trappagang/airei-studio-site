import { Section } from "@/components/landing/section";
import Image from "next/image";

export function StudioPhilosophy() {
  return (
    <Section className="!pt-16 md:!pt-24 bg-black border-b border-primary/20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-headline text-4xl md:text-6xl mb-6 relative glitch-button" data-text="Digital Spirit">
            <span className="relative z-10">What is the Digital Spirit of Anime?</span>
          </h1>
          <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-6">
            <p>
              It's the ghost in the machine, the soul in the silicon. It's the moment an AI-generated character conveys an emotion so raw, so human, it transcends its coded origins. The "Digital Spirit" is our core belief: that technology is not a replacement for artistry, but a new paintbrush for the soul.
            </p>
            <p>
              We see a future where every frame is infused with intention, where algorithms and artists collaborate to create worlds that are not just visually stunning, but emotionally resonant. It's about capturing the ineffable essence—the <span className="text-accent font-medium">'mono no aware'</span>—of traditional anime and rebirthing it in the digital crucible.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 h-80 md:h-full w-full relative glow-on-hover rounded-lg overflow-hidden">
           <Image 
              src="https://placehold.co/800x600.png"
              alt="Digital Spirit Concept Art"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-70"
              data-ai-hint="abstract digital soul"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </div>
    </Section>
  );
}