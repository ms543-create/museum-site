export default function Ecommerce() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-4">
        Room 2
      </p>
      <h1 className="text-5xl font-bold mb-6">E-Commerce</h1>
      <p className="text-lg text-white/80 max-w-3xl mb-10">
        E-commerce shifted the shopping experience from physical aisles to
        digital interfaces. Navigation menus, search bars, product pages, and
        recommendation widgets became the new tools shaping consumer behavior.
      </p>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Artifact Focus</h2>
          <p className="text-white/75">
            This room can include early Amazon homepage screenshots, old product
            listing pages, and examples of “customers also bought” systems.
          </p>
        </div>

        <div className="border border-white/20 p-6">
          <h2 className="text-2xl font-semibold mb-3">Why It Matters</h2>
          <p className="text-white/75">
            E-commerce made convenience, speed, and digital discovery central to
            consumer experience, while also laying the groundwork for data-driven
            personalization.
          </p>
        </div>
      </section>
    </main>
  );
}