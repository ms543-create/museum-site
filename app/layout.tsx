import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "The Evolution of Consumer Experience",
  description: "A digital museum about the evolution of shopping and consumer experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="border-b border-white/20">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-6 text-sm uppercase tracking-wide">
            <Link href="/">Home</Link>
            <Link href="/physical-retail">Physical Retail</Link>
            <Link href="/ecommerce">E-Commerce</Link>
            <Link href="/ai-personalization">AI Personalization</Link>
            <Link href="/ethics">Ethics & Reflection</Link>
          </nav>
        </header>

        {children}

        <footer className="border-t border-white/20 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-white/70">
            Digital Museum Project — The Evolution of Consumer Experience
          </div>
        </footer>
      </body>
    </html>
  );
}