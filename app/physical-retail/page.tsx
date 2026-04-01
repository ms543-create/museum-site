import Link from "next/link";

const artifactCards = [
  {
    title: "Store Layout",
    text: "Retailers used layout to guide traffic, increase exposure to products, and influence what shoppers encountered first.",
  },
  {
    title: "Product Placement",
    text: "Eye-level shelves, endcaps, and checkout displays were all designed to capture attention and increase impulse purchases.",
  },
  {
    title: "Sensory Design",
    text: "Lighting, music, signage, and store atmosphere shaped how shoppers felt and how long they stayed in the space.",
  },
];

export default function PhysicalRetail() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="uppercase tracking-[0.3em] text-xs text-white/50 mb-4">
            Room 1
          </p>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="text-5xl md:text-7xl font-semibold leading-none mb-6">
                Physical Retail
              </h1>
              <p className="text-xl md:text-2xl text-white/85 max-w-3xl">
                Before algorithms, stores themselves were the interface.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="border border-white/15 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
                  Exhibit Label
                </p>
                <p className="text-sm text-white/75 leading-6">
                  This room examines how physical design shaped consumer
                  behavior long before digital personalization existed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="aspect-[4/3] border border-white/15 bg-white/5 flex items-center justify-center">
              <p className="text-white/35 text-sm uppercase tracking-[0.2em]">
                Artifact Image Area
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
              Featured Artifact
            </p>
            <h2 className="text-3xl font-medium mb-4">
              The Retail Floor as a Designed Experience
            </h2>
            <p className="text-white/75 leading-7 mb-6">
              In physical retail, shoppers did not move randomly. Store layouts
              were carefully designed to shape attention, encourage browsing,
              and increase exposure to high-margin products.
            </p>
            <p className="text-sm text-white/55 leading-6 border-l border-white/20 pl-4">
              Museum Caption: A store layout is more than a map. It is a system
              for guiding movement, controlling visibility, and influencing
              decision-making through space.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
              Interpretation
            </p>
            <h2 className="text-3xl font-medium mb-4">
              Retailers Were Already Personalizing Experience — Just Without AI
            </h2>
            <p className="text-white/75 leading-7">
              Physical retail relied on environment instead of data dashboards.
              Placement, flow, sensory cues, and merchandising strategy all
              worked together to shape what consumers noticed first and what
              they were most likely to buy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {artifactCards.map((card) => (
              <div key={card.title} className="border border-white/10 p-6">
                <h3 className="text-xl font-medium mb-3">{card.title}</h3>
                <p className="text-white/70 leading-7 text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
              Why It Matters
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="text-lg text-white/80 leading-8 max-w-3xl">
              Physical retail proves that consumer experience has always been
              designed. What changed later was not the existence of influence,
              but the tools used to produce it. Stores used architecture and
              merchandising. Digital platforms would later use interface design
              and data.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
              Next Room
            </p>
            <h2 className="text-3xl font-medium">From aisles to interfaces</h2>
          </div>

          <Link
            href="/ecommerce"
            className="border border-white/20 px-6 py-3 hover:border-white/50 transition"
          >
            Enter Room 2 — E-Commerce
          </Link>
        </div>
      </section>
    </main>
  );
}