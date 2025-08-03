import { Section } from "@/components/landing/section";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Kaito 'Glitch' Tanaka",
    role: "Lead AI Architect & Director",
    avatar: "https://placehold.co/400x400.png",
    hint: "male anime character",
    bio: "The visionary behind the AIREI Engine. Kaito combines his love for classic mecha anime with a deep understanding of neural networks to direct our creative output."
  },
  {
    name: "Yuki 'Rei' Hashimoto",
    role: "Principal Artist & World-Builder",
    avatar: "https://placehold.co/400x400.png",
    hint: "female anime character",
    bio: "Yuki's hands give our digital creations their soul. An expert in both traditional and digital art, she ensures every frame resonates with emotional depth."
  },
  {
    name: "Ren 'System' Ito",
    role: "Head of Engineering",
    avatar: "https://placehold.co/400x400.png",
    hint: "male anime character glasses",
    bio: "Ren is the stoic genius who keeps our systems running. He translates artistic dreams into efficient code, constantly optimizing our creative pipeline."
  },
  {
    name: "Akira 'Nova' Sato",
    role: "Narrative & Prompt Designer",
    avatar: "https://placehold.co/400x400.png",
    hint: "female anime character short hair",
    bio: "Akira crafts the stories and speaks the language of the AI. Her prompts are the sparks that ignite entire worlds and character arcs."
  }
];

export function OurTeam() {
  return (
    <Section className="bg-card/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-headline text-4xl md:text-5xl mb-4 relative glitch-button" data-text="Our Team">
          <span className="relative z-10">The Minds in the Machine</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
          The artists, engineers, and dreamers who power AIREI Studio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-transparent border-primary/20 text-center glow-on-hover item-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <CardContent className="p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/50">
                <Image 
                  src={member.avatar} 
                  alt={member.name} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={member.hint}
                />
              </div>
              <h3 className="font-headline text-2xl text-accent">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-foreground/80 text-sm">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}