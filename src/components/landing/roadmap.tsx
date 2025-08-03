export function Roadmap() {
  const milestones = [
    {
      date: "Q3 2025",
      title: "Launch WebApp",
      description: "Release the first version of our interactive WebApp."
    },
    {
      date: "Q4 2025",
      title: "Anime Opening Release",
      description: "Debut our first AI-generated anime opening."
    },
    {
      date: "Q1 2026",
      title: "Manga Series Launch",
      description: "Publish the first volume of our manga series."
    },
    {
      date: "Q2 2026",
      title: "Art Showcase",
      description: "Host an online gallery for our anime art."
    }
  ];

  return (
    <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-neon-pink mb-8">
        Roadmap
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500/50 h-full"></div>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:gap-8"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full shadow-[0_0_15px_5px_rgba(0,255,255,0.5)]"></div>
              <div className="mt-4 md:mt-0 md:ml-8">
                <h3 className="text-xl font-bold text-white">{milestone.date}</h3>
                <h4 className="text-lg font-semibold text-neon-pink mt-2">
                  {milestone.title}
                </h4>
                <p className="text-white/80 mt-1">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
