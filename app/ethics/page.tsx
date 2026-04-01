import Link from "next/link";

const conceptCards = [
  {
    title: "Convenience",
    text: "Personalized systems can reduce friction, save time, and make products feel more relevant to the user.",
  },
  {
    title: "Surveillance",
    text: "That convenience often depends on constant tracking, data collection, and behavioral monitoring across platforms.",
  },
  {
    title: "Opacity",
    text: "Most users cannot easily see how recommendations are made or why certain products and messages are prioritized.",
  },
];

export default function Ethics() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="uppercase tracking-[0.3em] text-xs text-white/50 mb-4">
            Room 4
          </p>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="text-5xl md:text-7xl font-semibold leading-none mb-6">
                Ethics & Reflection
              </h1>
              <p className="text-xl md:text-2xl text-white/85 max-w-3xl">
                Convenience is not free. It is often paid for with data.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="border border-white/15 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
                  Exhibit Label
                </p>
                <p className="text-sm text-white/75 leading-6">
                  This final room asks what is gained and what is lost when
                  consumer experience becomes increasingly predictive,
                  personalized, and data-driven.
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
              Consent, Tracking, and Hidden Systems
            </h2>
            <p className="text-white/75 leading-7 mb-6">
              Modern consumer platforms often ask users to accept tracking,
              cookies, and personalization in exchange for smoother and more
              relevant experiences. The tradeoff is not always obvious.
            </p>
            <p className="text-sm text-white/55 leading-6 border-l border-white/20 pl-4">
              Museum Caption: What looks like convenience on the surface often
              depends on invisible systems of collection, prediction, and
              influence operating underneath.
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
              The Consumer Experience Is Also a Data Experience
            </h2>
            <p className="text-white/75 leading-7">
              The same systems that make shopping feel efficient can also make
              consumers more legible, more predictable, and more easily shaped.
              The final question of the exhibit is whether personalization
              enhances agency or quietly narrows it.
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
              This room reframes the exhibit as more than a history of shopping.
              It becomes a question about systems, power, and consumer agency.
              What began as store design has become a much larger conversation
              about data, transparency, and influence.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
              Return
            </p>
            <h2 className="text-3xl font-medium">
              Revisit the exhibit from the beginning
            </h2>
          </div>

          <Link
            href="/"
            className="border border-white/20 px-6 py-3 hover:border-white/50 transition"
          >
            Return to Museum Home
          </Link>
        </div>
      </section>
    </main>
  );
}