import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function JoinUs() {
  return (
    <div className="p-8 border border-primary/20 rounded-lg bg-card/5 glow-on-hover h-full flex flex-col justify-center text-center">
      <h2 className="font-headline text-3xl mb-4 text-accent">Join The Collective</h2>
      <p className="text-foreground/80 mb-8 leading-relaxed">
        Are you an artist, animator, or developer with a passion for pushing creative boundaries? We are always looking for talented collaborators to join our network.
      </p>
      <Button variant="outline" size="lg" className="group font-headline self-center">
        Apply to Collaborate
        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
