import { Section } from "@/components/landing/section";

const storyEvents = [
  {
    year: "2022",
    title: "The Vision",
    description: "A small collective of anime fans, artists, and AI researchers dreamt of a new way to create. The initial code for the AIREI Engine was written.",
  },
  {
    year: "2023",
    title: "First Light",
    description: "Our first short film, 'System: Eden', was created entirely with our prototype engine, proving the concept of AI-assisted animation.",
  },
  {
    year: "2024",
    title: "Studio Formed",
    description: "AIREI Studio was officially founded, bringing together a core team dedicated to pushing the boundaries of digital storytelling.",
  },
    {
    year: "Future",
    title: "The Horizon",
    description: "We look towards a future of full-length features, interactive experiences, and an open platform for all creators.",
  },
];

export function OurStory() {
  return (
    <Section className="bg-black border-b border-primary/20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-headline text-4xl md:text-5xl mb-4 relative glitch-button" data-text="Our Story">
          <span className="relative z-10">From Vision to Execution</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
          A brief history of our signal's transmission through time.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-primary/30 -translate-x-1/2" />
        {storyEvents.map((event, index) => (
          <div key={index} className="relative pl-12 md:pl-0 mb-12 last:mb-0 item-fade-in" style={{ animationDelay: `${index * 200}ms`}}>
            <div className="md:flex items-center">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
                 <div className="absolute -left-1.5 md:left-1/2 w-4 h-4 bg-accent rounded-full border-2 border-primary mt-1.5 -translate-x-1/2" />
                 <div className={`p-6 rounded-lg border border-primary/30 bg-card/5 glow-on-hover ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                    <p className="text-primary font-headline text-2xl mb-1">{event.year}</p>
                    <h3 className="font-headline text-2xl md:text-3xl mb-2 text-accent">{event.title}</h3>
                    <p className="text-foreground/80">{event.description}</p>
                 </div>
              </div>
              <div className="md:w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
