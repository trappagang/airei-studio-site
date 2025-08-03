import { Button } from "@/components/ui/button";
import { Section } from "./section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <Section className="bg-card">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-5xl mb-6">
          A new era of animation.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          AIREI Studio merges traditional artistry with bleeding-edge AI to forge unforgettable anime experiences. We are artists, engineers, and storytellers building the future of digital soul. Our creations are not just watched; they are felt.
        </p>
        <Button variant="link" className="text-lg mt-6 group font-headline text-accent" asChild>
          <Link href="/about">
            Read Our Ideology
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
