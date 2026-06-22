import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import Header from "./components/Header";
import FilmGrain from "./components/FilmGrain";
import SmoothScroll from "./components/SmoothScroll";
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
        <SmoothScroll />
        <FilmGrain />
        <Header />

        <main className="flex-1">{children}</main>

        <footer
          className="text-sm text-center py-5 mt-12"
          style={{ backgroundColor: "#0E6B6B", color: "rgba(239,227,206,0.75)" }}
        >
          <p className="mb-2">South Texas Birds &mdash; Rio Grande Valley &amp; Coastal Bend</p>
          <p>
            <Link
              href="/credits"
              className="hover:opacity-80 transition-opacity underline underline-offset-2"
              style={{ color: "rgba(239,227,206,0.55)", fontSize: "0.75rem" }}
            >
              Photo Credits
            </Link>
          </p>
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
