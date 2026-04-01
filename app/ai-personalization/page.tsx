import Link from "next/link";

const conceptCards = [
  {
    title: "Recommendation Systems",
    text: "Platforms use behavioral data to predict what users are most likely to click, watch, or buy next.",
  },
  {
    title: "Targeted Visibility",
    text: "Algorithms do not just organize content. They decide what gets emphasized, repeated, or hidden from view.",
  },
  {
    title: "Personalized Influence",
    text: "The shopping experience becomes increasingly adaptive, making each user’s storefront feel unique and continuously updated.",
  },
];

export default function AIPersonalization() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="uppercase tracking-[0.3em] text-xs text-white/50 mb-4">
            Room 3
          </p>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="text-5xl md:text-7xl font-semibold leading-none mb-6">
                AI Personalization
              </h1>
              <p className="text-xl md:text-2xl text-white/85 max-w-3xl">
                The storefront is no longer static. It changes for each user.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="border border-white/15 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
                  Exhibit Label
                </p>
                <p className="text-sm text-white/75 leading-6">
                  This room explores how recommendation engines, targeted ads,
                  and predictive systems reshape what consumers see and how they
                  make decisions.
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
              The Algorithmic Storefront
            </h2>
            <p className="text-white/75 leading-7 mb-6">
              In this stage of consumer experience, the interface does more than
              display products. It predicts preferences, ranks options, and
              reshapes visibility based on past behavior and platform goals.
            </p>
            <p className="text-sm text-white/55 leading-6 border-l border-white/20 pl-4">
              Museum Caption: Personalization does not simply respond to user
              interest. It actively structures what the user is most likely to
              encounter next.
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
              Recommendation Becomes a Form of Power
            </h2>
            <p className="text-white/75 leading-7">
              Once platforms could collect and process large amounts of user
              data, shopping stopped being the same for everyone. The
              experience became adaptive, personalized, and increasingly shaped
              by invisible systems that decide what feels relevant.
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
              AI personalization increases convenience and relevance, but it
              also changes the balance of control. Consumers may feel like they
              are choosing freely, even when visibility, ranking, and timing are
              being shaped by systems they cannot fully see.
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
              From convenience to ethical tension
            </h2>
          </div>

          <Link
            href="/ethics"
            className="border border-white/20 px-6 py-3 hover:border-white/50 transition"
          >
            Enter Room 4 — Ethics & Reflection
          </Link>
        </div>
      </section>
    </main>
  );
}