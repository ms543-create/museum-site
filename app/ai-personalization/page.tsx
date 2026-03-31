export default function AIPersonalization() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-4">
        Room 3
      </p>
      <h1 className="text-5xl font-bold mb-6">AI Personalization</h1>
      <p className="text-lg text-white/80 max-w-3xl mb-10">
        Today, consumer experience is increasingly shaped by algorithms. Product
        recommendations, targeted ads, ranking systems, and personalized feeds
        influence what users see and what they are most likely to buy.
      </p>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Artifact Focus</h2>
          <p className="text-white/75">
            This room can include examples of recommendation engines, targeted
            social media ads, and diagrams showing how user data informs
            personalization.
          </p>
        </div>

        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Why It Matters</h2>
          <p className="text-white/75">
            AI personalization increases relevance and convenience, but it also
            raises questions about privacy, manipulation, and the power of
            hidden systems to shape consumer decisions.
          </p>
        </div>
      </section>
    </main>
  );
}