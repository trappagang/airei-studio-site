import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-24 md:py-32 section-fade-in", className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
