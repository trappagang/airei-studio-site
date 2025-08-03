export function JoinRealm() {
  const platforms = [
    {
      name: "Discord",
      logo: "/logos/discord.svg",
      link: "https://discord.com/invite/airei"
    },
    {
      name: "Patreon",
      logo: "/logos/patreon.svg",
      link: "https://patreon.com/airei"
    },
    {
      name: "Community Portal",
      logo: "/logos/community.svg",
      link: "/community"
    }
  ];

  return (
    <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-neon-pink mb-8">
        Join the AIREI Realm
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-black/50 border border-cyan-500/50 rounded-lg p-6 w-64 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] transition-shadow"
          >
            <img
              src={platform.logo}
              alt={platform.name}
              className="w-16 h-16 mb-4"
            />
            <p className="text-lg font-bold text-white">{platform.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
