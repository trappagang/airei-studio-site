export function AiSpirit() {
  const tools = [
    { name: "Sora", icon: "/icons/sora.svg" },
    { name: "Suno", icon: "/icons/suno.svg" },
    { name: "GPT", icon: "/icons/gpt.svg" },
    { name: "Fusion", icon: "/icons/fusion.svg" },
    { name: "Stable Diffusion", icon: "/icons/stable-diffusion.svg" },
  ];

  return (
    <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-neon-pink mb-8">
        Powered by AI & Spirit
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            At AIREI Studio, we harness the power of cutting-edge AI tools to bring
            anime concepts to life. From generating stunning visuals to crafting
            immersive narratives, our technology stack is designed to push the
            boundaries of creativity.
          </p>
          <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
            Our tools include Sora for animation, Suno for sound design, GPT for
            storytelling, Fusion for compositing, and Stable Diffusion for
            breathtaking art generation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-black/50 border border-cyan-500/50 rounded-lg p-4 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] transition-shadow"
            >
              <img src={tool.icon} alt={tool.name} className="w-16 h-16 mb-2" />
              <p className="text-white font-bold text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-b border-purple-500/50 py-4">
        <p className="text-center text-white/80">
          Together, AI and the spirit of anime drive our vision forward.
        </p>
      </div>
    </section>
  );
}
