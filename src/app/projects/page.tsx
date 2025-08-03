import { ProjectsList } from "@/components/projects/projects-list";
import { Footer } from "@/components/landing/footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold text-neon-pink text-center py-16">
        Our Projects
      </h1>
      <p className="text-lg text-center px-8">
        Explore our cutting-edge projects and creative endeavors.
      </p>
      <ProjectsList />
      <Footer />
    </div>
  );
}
