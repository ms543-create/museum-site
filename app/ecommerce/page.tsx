import Link from "next/link";

const conceptCards = [
  {
    title: "The Shift Online",
    text: "E-commerce removed the limits of location and store hours, making products searchable and accessible from anywhere with an internet connection.",
  },
  {
    title: "Interface as Storefront",
    text: "Menus, search bars, filters, product pages, and review systems became the digital equivalent of aisles, shelves, and in-store signage.",
  },
  {
    title: "Behavior Changes",
    text: "Consumers gained more speed, more comparison options, and easier access to information, which changed expectations for convenience and control.",
  },
];

export default function Ecommerce() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="uppercase tracking-[0.3em] text-xs text-white/50 mb-4">
            Room 2
          </p>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="text-5xl md:text-7xl font-semibold leading-none mb-6">
                E-Commerce
              </h1>
              <p className="text-xl md:text-2xl text-white/85 max-w-3xl">
                Shopping moved from physical aisles to digital interfaces.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="border border-white/15 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
                  Exhibit Label
                </p>
                <p className="text-sm text-white/75 leading-6">
                  This room shows how websites became the new retail
                  environment, replacing store layouts with navigation systems,
                  search tools, and digital product displays.
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
                Featured Artifact Area
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
              Featured Artifact
            </p>
            <h2 className="text-3xl font-medium mb-4">
              The Early Online Storefront
            </h2>
            <p className="text-white/75 leading-7 mb-6">
              Early e-commerce sites show how retail was redesigned for the
              screen. Instead of shelves and foot traffic, users navigated
              through links, categories, search tools, and product listings.
            </p>
            <p className="text-sm text-white/55 leading-6 border-l border-white/20 pl-4">
              Museum Caption: The online storefront did not eliminate retail
              design. It transformed it. Interface design became the new method
              for guiding attention and influencing decisions.
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
              Websites Replaced the Logic of the Store
            </h2>
            <p className="text-white/75 leading-7">
              Physical retail shaped behavior through space. E-commerce shaped
              behavior through interface. Search bars reduced friction,
              recommendation areas increased discovery, and product pages became
              carefully designed moments of persuasion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {conceptCards.map((card) => (
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
              E-commerce changed what consumers expected from shopping. It made
              product discovery faster, comparison easier, and convenience more
              central. It also created the infrastructure for data collection,
              which made the next stage of shopping possible.
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
            <h2 className="text-3xl font-medium">
              From digital stores to algorithmic influence
            </h2>
          </div>

          <Link
            href="/ai-personalization"
            className="border border-white/20 px-6 py-3 hover:border-white/50 transition"
          >
            Enter Room 3 — AI Personalization
          </Link>
        </div>
      </section>
    </main>
  );
}