export function TechStack() {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-neon-pink">Tech Stack</h2>
      <div className="mt-8 flex justify-center gap-8">
        {["Sora", "Suno", "Stable Diffusion"].map((tool, index) => (
          <div
            key={index}
            className="p-4 bg-black border border-neon-pink rounded-lg"
          >
            <p className="text-white font-bold">{tool}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
