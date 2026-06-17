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

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://southtexasbirds.vercel.app";
const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "South Texas Birds | Rio Grande Valley Birding Guide & Hotspots",
    template: "%s | South Texas Birds",
  },
  description:
    "Your complete guide to Rio Grande Valley birding: 500+ species, top RGV hotspots, and South Texas specialties like Green Jay, Altamira Oriole, and Whooping Crane.",
  openGraph: {
    siteName: "South Texas Birds",
    type: "website",
    locale: "en_US",
    images: [
      { url: OG_IMAGE, width: 2585, height: 1723, alt: "Altamira Oriole in South Texas" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "South Texas Birds",
  url: SITE,
  description:
    "Birding guide for the Rio Grande Valley and South Texas coast. Discover 500+ species, hotspot maps, and seasonal tips.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE}/birds?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
