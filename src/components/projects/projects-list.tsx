
import { Section } from "@/components/landing/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Chrome Ascension - OP 1",
    category: "Anime Opening",
    image: "https://placehold.co/800x450.png",
    hint: "cyberpunk city anime",
    duration: "1:30",
  },
  {
    title: "Ghost of Kyoto - Concept Trailer",
    category: "Concept Trailer",
    image: "https://placehold.co/800x450.png",
    hint: "feudal japan anime",
    duration: "2:15",
  },
  {
    title: "System: Eden - Music Video",
    category: "Music Video",
    image: "https://placehold.co/800x450.png",
    hint: "abstract sci-fi anime",
    duration: "3:45",
  },
  {
    title: "Project Nova - Teaser",
    category: "Concept Trailer",
    image: "https://placehold.co/800x450.png",
    hint: "space opera anime",
    duration: "0:45",
  },
  {
    title: "Digital Soul - OP",
    category: "Anime Opening",
    image: "https://placehold.co/800x450.png",
    hint: "digital world anime",
    duration: "1:30",
  },
  {
    title: "Mecha Force - Ending Credits",
    category: "Anime Ending",
    image: "https://placehold.co/800x450.png",
    hint: "giant robot anime",
    duration: "1:30",
  },
];

export function ProjectsList() {
  return (
    <Section className="!pt-16 md:!pt-24 vhs-overlay">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-headline text-4xl md:text-6xl mb-4 relative glitch-button" data-text="Project Archive">
          <span className="relative z-10">Project Archive</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
          Catalogued transmissions from the AIREI system. A collection of our full-work and conceptual outputs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-transparent border-primary/20 group overflow-hidden glow-on-hover item-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <CardContent className="p-0">
              <div className="relative aspect-video">
                 <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded-sm font-mono">{project.duration}</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white/70 drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4 vhs-text">
                <p className="text-primary font-medium text-sm">{project.category}</p>
                <h3 className="font-headline text-2xl text-accent mb-3">{project.title}</h3>
                <Button 
                  className="w-full font-headline relative glitch-button" 
                  variant="outline"
                  data-text="Watch Now"
                >
                  <span className="relative z-10">Watch Now</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
