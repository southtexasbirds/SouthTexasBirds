import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-310H4EYKJM";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://southtexasbirds.org";
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
        <header className="text-white shadow-md" style={{ backgroundColor: "#0E6B6B" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              aria-label="South Texas Birds — home"
            >
              {/* Vintage woodcut bird mark */}
              <svg
                viewBox="0 0 40 36"
                width="33"
                height="30"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="bird-hatch">
                    <polygon points="2,17 9,11 9,23" />
                    <ellipse cx="17" cy="19" rx="10" ry="7" />
                    <circle cx="28" cy="13" r="6" />
                  </clipPath>
                </defs>
                <polygon points="2,17 9,11 9,23" fill="#EFE3CE" fillOpacity="0.92" />
                <ellipse cx="17" cy="19" rx="10" ry="7" fill="#EFE3CE" fillOpacity="0.92" />
                <circle cx="28" cy="13" r="6" fill="#EFE3CE" fillOpacity="0.92" />
                <g clipPath="url(#bird-hatch)" stroke="#0E6B6B" strokeWidth="1.4" strokeLinecap="round">
                  <line x1="0" y1="18" x2="18" y2="0" />
                  <line x1="0" y1="22" x2="22" y2="0" />
                  <line x1="0" y1="26" x2="26" y2="0" />
                  <line x1="2" y1="30" x2="30" y2="2" />
                  <line x1="6" y1="34" x2="34" y2="6" />
                  <line x1="12" y1="38" x2="38" y2="12" />
                  <line x1="18" y1="40" x2="40" y2="18" />
                </g>
                <polygon points="33,12 39,14 33,17" fill="#C77F4A" />
                <circle cx="30" cy="12" r="2" fill="#0E6B6B" />
                <circle cx="30" cy="12" r="0.9" fill="#EFE3CE" />
              </svg>
              <span className="text-xl font-bold tracking-tight font-serif">South Texas Birds</span>
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:opacity-75 transition-opacity">Home</Link>
              <Link href="/birds" className="hover:opacity-75 transition-opacity">Birds</Link>
              <Link href="/hotspots" className="hover:opacity-75 transition-opacity">Hotspots</Link>
              <Link href="/gear" className="hover:opacity-75 transition-opacity">Gear</Link>
              <Link href="/about" className="hover:opacity-75 transition-opacity">About</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer
          className="text-sm text-center py-4 mt-12"
          style={{ backgroundColor: "#0E6B6B", color: "rgba(239,227,206,0.75)" }}
        >
          <p>South Texas Birds &mdash; Rio Grande Valley &amp; Coastal Bend</p>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* GA4 — loads after the page is interactive, does not block rendering */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
