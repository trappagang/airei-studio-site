export function DigitalShowcase() {
  const showcaseItems = [
    { title: "Anime Art", type: "image", src: "/images/anime-art.jpg" },
    { title: "AI Opening", type: "video", src: "/videos/ai-opening.mp4" },
    { title: "Manga Preview", type: "image", src: "/images/manga-preview.jpg" },
  ];

  return (
    <section className="py-16 px-8 bg-black/80 backdrop-blur-md border-t border-b border-cyan-500/50">
      <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-8">
        Digital Showcase
      </h2>
      <div className="flex overflow-x-auto gap-6">
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="relative w-80 h-60 flex-shrink-0 bg-black/50 border border-purple-500/50 rounded-lg overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(138,43,226,0.5)] transition-transform"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
