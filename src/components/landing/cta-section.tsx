import { Button } from "@/components/ui/button";
import { Section } from "./section";

export function CtaSection() {
  return (
    <Section className="bg-card">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl text-glow">
          Ready to enter the system?
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Connect with us to bring your vision to life or join our collective of digital artisans. The future is waiting.
        </p>
        <Button 
          size="lg" 
          className="mt-8 font-headline text-lg relative glitch-button"
          data-text="Launch Interface"
        >
          <span className="relative z-10">Launch Interface</span>
        </Button>
      </div>
    </Section>
  );
}
