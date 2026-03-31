export default function Ethics() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-4">
        Room 4
      </p>
      <h1 className="text-5xl font-bold mb-6">Ethics & Reflection</h1>
      <p className="text-lg text-white/80 max-w-3xl mb-10">
        As consumer experience becomes more data-driven, ethical concerns become
        more important. Personalization can improve convenience, but it can also
        create surveillance, reduce transparency, and intensify digital
        influence.
      </p>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Artifact Focus</h2>
          <p className="text-white/75">
            This room can include cookie consent prompts, privacy policy
            examples, and diagrams showing how consumer data moves through
            digital systems.
          </p>
        </div>

        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Why It Matters</h2>
          <p className="text-white/75">
            The final room encourages visitors to question what is gained and
            what is lost when convenience depends on constant tracking and
            algorithmic prediction.
          </p>
        </div>
      </section>
    </main>
  );
}