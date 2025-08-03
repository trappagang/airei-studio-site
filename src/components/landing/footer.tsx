import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Roadmap", href: "#" },
  { name: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/50 py-8 overflow-hidden">
       <div className="absolute inset-0 flex items-center justify-center -z-10">
         <span className="text-9xl font-bold text-primary/5 opacity-50 select-none">霊</span>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-headline text-2xl text-foreground">
            AIREI <span className="text-primary">Studio</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>日本語</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator className="my-6 bg-border/50" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AIREI Studio. All Rights Reserved. The Digital Spirit of Anime.
        </div>
      </div>
    </footer>
  );
}
