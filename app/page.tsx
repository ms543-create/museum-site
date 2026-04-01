import Link from "next/link";

const exhibits = [
  {
    room: "Room 1",
    title: "Physical Retail",
    href: "/physical-retail",
    blurb:
      "Stores were once the interface. Layout, lighting, and product placement shaped what people noticed and bought.",
  },
  {
    room: "Room 2",
    title: "E-Commerce",
    href: "/ecommerce",
    blurb:
      "Shopping moved from aisles to screens. Search, categories, and product pages became the new retail environment.",
  },
  {
    room: "Room 3",
    title: "AI Personalization",
    href: "/ai-personalization",
    blurb:
      "Today the storefront is adaptive. Algorithms decide what users see, what gets emphasized, and what feels relevant.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="uppercase tracking-[0.3em] text-xs text-white/50 mb-4">
            Digital Museum
          </p>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="text-5xl md:text-7xl font-semibold leading-none mb-6">
                The Evolution of
                <br />
                Consumer Experience
              </h1>

              <p className="text-lg md:text-xl text-white/75 max-w-3xl">
                A curated digital exhibit on how shopping evolved from physical
                retail to e-commerce and AI-driven personalization.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="border border-white/15 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
                  Curatorial Statement
                </p>
                <p className="text-sm text-white/75 leading-6">
                  This museum explores how systems, interfaces, and data changed
                  the way consumers discover, evaluate, and purchase products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-6">
            {exhibits.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-stone-800 p-6 hover:border-stone-600 transition"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-6">
                  {item.room}
                </p>
                <h2 className="text-3xl font-medium mb-4 group-hover:underline underline-offset-4">
                  {item.title}
                </h2>
                <p className="text-stone-300 leading-7">{item.blurb}</p>
                <div className="mt-10 text-sm text-stone-500">
                  Enter exhibit →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
              Exhibition Focus
            </p>
          </div>

          <div className="md:col-span-9 grid md:grid-cols-3 gap-6">
            <div className="border border-stone-800 p-5">
              <h3 className="text-lg font-medium mb-3">Systems</h3>
              <p className="text-sm text-stone-300 leading-6">
                Inventory systems, ERP platforms, and recommendation engines all
                shape the consumer journey behind the scenes.
              </p>
            </div>

            <div className="border border-stone-800 p-5">
              <h3 className="text-lg font-medium mb-3">Interfaces</h3>
              <p className="text-sm text-stone-300 leading-6">
                From store aisles to search bars to personalized feeds, the
                interface of shopping keeps changing.
              </p>
            </div>

            <div className="border border-stone-800 p-5">
              <h3 className="text-lg font-medium mb-3">Ethics</h3>
              <p className="text-sm text-stone-300 leading-6">
                Greater convenience often depends on more tracking, more data,
                and less transparency for the user.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}