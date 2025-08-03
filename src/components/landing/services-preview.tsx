import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "./section";
import { ArrowRight, Clapperboard, Brush, Bot, Film } from "lucide-react";

const services = [
  {
    icon: <Clapperboard className="w-8 h-8 text-accent" />,
    title: "Anime Openings",
    description: "High-impact, visually stunning opening sequences that capture your story's essence.",
  },
  {
    icon: <Brush className="w-8 h-8 text-accent" />,
    title: "Manga & Webtoon Art",
    description: "Dynamic paneling and character art for digital and print manga, powered by AI-assisted workflows.",
  },
  {
    icon: <Film className="w-8 h-8 text-accent" />,
    title: "Concept Trailers",
    description: "Generate hype with cinematic trailers that showcase your world and characters.",
  },
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: "AI Lore-Design",
    description: "Utilize our proprietary AI to generate deep, consistent world-building and lore.",
  },
];

export function ServicesPreview() {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl">Our Capabilities</h2>
        <p className="text-muted-foreground mt-2 text-lg">We blend art and technology to bring worlds to life.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-card border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 glow-on-hover item-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <CardHeader>
              {service.icon}
              <CardTitle className="font-headline pt-4 text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="group font-headline">
          View All Services
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  );
}
