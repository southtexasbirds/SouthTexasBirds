import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "South Texas Birds",
  description: "Birding guide for the Rio Grande Valley and South Texas coast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <header className="bg-green-900 text-white shadow-md">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-green-200 transition-colors">
              South Texas Birds
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-green-200 transition-colors">Home</Link>
              <Link href="/birds" className="hover:text-green-200 transition-colors">Birds</Link>
              <Link href="/hotspots" className="hover:text-green-200 transition-colors">Hotspots</Link>
              <Link href="/about" className="hover:text-green-200 transition-colors">About</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-green-900 text-green-200 text-sm text-center py-4 mt-12">
          <p>South Texas Birds &mdash; Rio Grande Valley &amp; Coastal Bend</p>
        </footer>
      </body>
    </html>
  );
}
