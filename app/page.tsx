import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-4">
            Digital Museum
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            The Evolution of Consumer Experience
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-6 max-w-3xl">
            This digital museum explores how shopping evolved from traditional
            in-store retail to e-commerce, mobile commerce, and AI-driven
            personalization.
          </p>

          <p className="text-base md:text-lg text-white/70 max-w-3xl mb-10">
            Visitors move through the exhibit chronologically and examine how
            technology, data, and interface design changed the way people
            discover, evaluate, and purchase products.
          </p>
        </div>

        <div className="md:col-span-4 border border-white/20 p-6 h-fit">
          <p className="uppercase tracking-[0.2em] text-sm text-white/60 mb-4">
            Exhibit Structure
          </p>
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/physical-retail" className="underline underline-offset-4">
                Room 1 — Physical Retail
              </Link>
            </li>
            <li>
              <Link href="/ecommerce" className="underline underline-offset-4">
                Room 2 — E-Commerce
              </Link>
            </li>
            <li>
              <Link href="/ai-personalization" className="underline underline-offset-4">
                Room 3 — AI Personalization
              </Link>
            </li>
            <li>
              <Link href="/ethics" className="underline underline-offset-4">
                Room 4 — Ethics & Reflection
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}