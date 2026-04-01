import Link from "next/link";

const rooms = [
  {
    label: "Room 1",
    title: "Physical Retail",
    href: "/physical-retail",
    description:
      "Before digital platforms, stores used layout, lighting, and product placement to shape how people shopped.",
  },
  {
    label: "Room 2",
    title: "E-Commerce",
    href: "/ecommerce",
    description:
      "Shopping moved from physical aisles to screens, where menus, search bars, and product pages became the new retail environment.",
  },
  {
    label: "Room 3",
    title: "AI Personalization",
    href: "/ai-personalization",
    description:
      "Algorithms now influence what users see, what feels relevant, and what products are most likely to be purchased.",
  },
  {
    label: "Room 4",
    title: "Ethics & Reflection",
    href: "/ethics",
    description:
      "As shopping becomes more personalized, questions about privacy, surveillance, and digital influence become harder to ignore.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
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

              <p className="text-lg md:text-xl text-white/75 max-w-3xl mb-6">
                A digital exhibit on how shopping evolved from physical retail
                to e-commerce and AI-driven personalization.
              </p>

              <p className="text-base md:text-lg text-white/60 max-w-3xl">
                This museum examines how systems, interfaces, and data changed
                the way consumers discover, evaluate, and purchase products.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="border border-white/15 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
                  Curatorial Statement
                </p>
                <p className="text-sm text-white/75 leading-6">
                  The exhibit is organized as a progression through four rooms.
                  Visitors move from physical spaces, to digital interfaces, to
                  algorithmic personalization, and finally to ethical
                  reflection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <Link
                key={room.href}
                href={room.href}
                className="group border border-white/15 p-6 hover:border-white/40 transition"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-6">
                  {room.label}
                </p>

                <h2 className="text-3xl font-medium mb-4 group-hover:underline underline-offset-4">
                  {room.title}
                </h2>

                <p className="text-white/70 leading-7">{room.description}</p>

                <div className="mt-10 text-sm text-white/60">
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
            <div className="border border-white/10 p-5">
              <h3 className="text-lg font-medium mb-3">Systems</h3>
              <p className="text-sm text-white/70 leading-6">
                Inventory systems, ERP platforms, and recommendation engines all
                shape the consumer experience behind the scenes.
              </p>
            </div>

            <div className="border border-white/10 p-5">
              <h3 className="text-lg font-medium mb-3">Interfaces</h3>
              <p className="text-sm text-white/70 leading-6">
                From store aisles to product pages to personalized feeds, the
                interface of shopping has continuously changed.
              </p>
            </div>

            <div className="border border-white/10 p-5">
              <h3 className="text-lg font-medium mb-3">Ethics</h3>
              <p className="text-sm text-white/70 leading-6">
                Greater convenience often depends on more tracking, more data,
                and less transparency for the consumer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}