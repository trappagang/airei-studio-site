export function VisualShowcase() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl md:text-6xl font-bold text-neon-pink text-center">Visual Showcase</h2>
      <div className="mt-8 flex overflow-x-auto gap-4">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-64 h-64 bg-black border border-neon-pink rounded-lg flex-shrink-0"
          >
            <p className="text-center text-white">Art {index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
