import { Button } from "@/components/ui/button";
import { Section } from "./section";
import { ArrowRight } from "lucide-react";

const events = [
  {
    date: "Q3 2024",
    title: "Project 'Kyoto' Launch",
    description: "Our first full-length feature film, 'Ghost of Kyoto', enters production.",
  },
  {
    date: "Q4 2024",
    title: "AIREI Engine v2.0",
    description: "Major update to our proprietary AI animation engine, enabling real-time rendering.",
  },
  {
    date: "Q1 2025",
    title: "Interactive Manga Platform",
    description: "Launch of a new platform for interactive, AI-enhanced manga experiences.",
  },
];

export function RoadmapTeaser() {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl">Connecting to the Future</h2>
        <p className="text-muted-foreground mt-2 text-lg">Our signal is just beginning to transmit.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="timeline">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="timeline-item mb-16 flex"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left ml-auto'}`}>
                <div className="p-6 bg-card rounded-lg border-border/50 glow-on-hover item-fade-in">
                  <p className="text-accent font-headline mb-1">{event.date}</p>
                  <h3 className="font-headline text-xl md:text-2xl mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Button variant="link" className="text-lg group font-headline text-accent">
          Explore The Future
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  );
}
