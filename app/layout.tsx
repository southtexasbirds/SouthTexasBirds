import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "South Texas Birds",
  description: "Birding guide for the Rio Grande Valley and South Texas coast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <header className="text-white shadow-md" style={{ backgroundColor: "#1F3D2B" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity font-serif"
            >
              South Texas Birds
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:opacity-75 transition-opacity">Home</Link>
              <Link href="/birds" className="hover:opacity-75 transition-opacity">Birds</Link>
              <Link href="/hotspots" className="hover:opacity-75 transition-opacity">Hotspots</Link>
              <Link href="/about" className="hover:opacity-75 transition-opacity">About</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer
          className="text-sm text-center py-4 mt-12"
          style={{ backgroundColor: "#1F3D2B", color: "rgba(246,241,231,0.75)" }}
        >
          <p>South Texas Birds &mdash; Rio Grande Valley &amp; Coastal Bend</p>
        </footer>
      </body>
    </html>
  );
}
