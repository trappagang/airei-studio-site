export function OurProjects() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl md:text-6xl font-bold text-neon-pink text-center">Our Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Project A", "Project B", "Project C"].map((project, index) => (
          <div
            key={index}
            className="p-6 bg-black border border-neon-pink rounded-lg hover:shadow-neon transition-shadow"
          >
            <h3 className="text-2xl font-bold text-white">{project}</h3>
            <p className="mt-2 text-white/80">A brief description of {project}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
