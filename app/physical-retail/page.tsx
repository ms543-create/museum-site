export default function PhysicalRetail() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-4">
        Room 1
      </p>
      <h1 className="text-5xl font-bold mb-6">Physical Retail</h1>
      <p className="text-lg text-white/80 max-w-3xl mb-10">
        Before e-commerce, the consumer experience was shaped by physical space.
        Store layout, product placement, lighting, signage, and staff
        interaction all influenced what shoppers noticed and how they made
        decisions.
      </p>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Artifact Focus</h2>
          <p className="text-white/75">
            This room can include store layout diagrams, department store
            photography, and examples of experiential retail design.
          </p>
        </div>

        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Why It Matters</h2>
          <p className="text-white/75">
            Physical retail shows that consumer experience was always designed.
            Long before algorithms, stores used space and psychology to guide
            attention and influence buying behavior.
          </p>
        </div>
      </section>
    </main>
  );
}