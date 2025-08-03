
import { ProjectsList } from "@/components/projects/projects-list";
import { Footer } from "@/components/landing/footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-grow pt-[64px] text-white">
        <ProjectsList />
      </main>
      <Footer />
    </div>
  );
}
