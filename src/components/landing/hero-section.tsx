"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const GLYPHS = "霊気アニメ未来技術ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("");

const AnimatedGlyph = () => {
  const [glyph, setGlyph] = useState("霊");
  const [style, setStyle] = useState({});

  useEffect(() => {
    const animate = () => {
      setGlyph(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);
      setStyle({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 1.5 + 0.5}rem`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      });
    };

    animate();
    const interval = setInterval(animate, Math.random() * 5000 + 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="absolute animate-[float_linear_infinite] text-primary/30" style={style}>
      {glyph}
    </span>
  );
};

export function HeroSection() {
  const [glyphs, setGlyphs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // This runs only on the client to avoid hydration mismatch
    const isMobile = window.innerWidth < 768;
    const glyphCount = isMobile ? 10 : 25;
    setGlyphs(Array.from({ length: glyphCount }).map((_, i) => <AnimatedGlyph key={i} />));
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-background p-4">
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        {glyphs}
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 
          className="font-headline text-8xl md:text-9xl font-bold text-glow select-none"
          aria-label="AIREI"
        >
          霊
        </h1>
        <p className="font-headline text-xl md:text-2xl mt-4 text-foreground/80 max-w-md">
          The Digital Spirit of Anime
        </p>
        <Button size="lg" className="mt-8 glow-on-hover font-headline text-lg" asChild>
          <a href="#services">Launch Interface</a>
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="w-6 h-6 text-foreground/50 animate-bounce" />
      </div>
    </div>
  );
}
