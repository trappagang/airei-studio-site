
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Chrome Ascension",
    category: "Cyberpunk Series",
    image: "https://placehold.co/600x800.png",
    hint: "cyberpunk anime",
  },
  {
    title: "Ghost of Kyoto",
    category: "Feudal Fantasy OVA",
    image: "https://placehold.co/600x800.png",
    hint: "samurai anime",
  },
  {
    title: "System: Eden",
    category: "Sci-Fi Music Video",
    image: "https://placehold.co/600x800.png",
    hint: "scifi anime",
  },
];

export function ProjectsPreview() {
  return (
    <Section className="bg-card">
       <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl">Featured Works</h2>
        <p className="text-muted-foreground mt-2 text-lg">A glimpse into the worlds we've created.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 glow-on-hover item-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <CardContent className="p-0">
              <div className="relative h-96">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-headline text-3xl text-white">{project.title}</h3>
                  <p className="text-accent font-medium">{project.category}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="group font-headline" asChild>
          <Link href="/projects">
            See All Projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
