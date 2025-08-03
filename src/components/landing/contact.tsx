export function Contact() {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-neon-pink">Contact</h2>
      <form className="mt-8 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 bg-black border border-neon-pink rounded-lg text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 bg-black border border-neon-pink rounded-lg text-white"
        />
        <textarea
          placeholder="Message"
          className="w-full p-4 bg-black border border-neon-pink rounded-lg text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full p-4 bg-neon-pink text-black font-bold rounded-lg hover:bg-neon-pink/80"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
