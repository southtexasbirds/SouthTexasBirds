import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import AnimateIn from "./components/AnimateIn";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "South Texas Birds | Rio Grande Valley Birding Guide" },
  description:
    "The complete South Texas birding guide. 50 species profiles, 9 RGV hotspot guides, and 14 field articles — everything you need to see Green Jays, Hook-billed Kites, and Whooping Cranes.",
  openGraph: {
    title: "South Texas Birds | Rio Grande Valley Birding Guide",
    description:
      "The complete guide to South Texas birding — the only U.S. region where Green Jays, Hook-billed Kites, and Aplomado Falcons are resident. 50 species · 9 hotspots · 14 articles.",
    images: [
      {
        url: "https://southtexasbirds.org/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Altamira Oriole perched in South Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://southtexasbirds.org/images/og-default.jpg"],
    title: "South Texas Birds | Rio Grande Valley Birding Guide",
    description:
      "The complete guide to South Texas birding. 50 species profiles, 9 hotspot guides, Hook-billed Kites, Green Jays, Whooping Cranes.",
  },
};

const HERO_PHOTO = "/images/hero-altamira.webp";

const hasVideo = fs.existsSync(path.join(process.cwd(), "public", "hero-video.mp4"));

const highlights = [
  {
    num: "01",
    title: "Found Nowhere Else in the U.S.",
    body: "The Rio Grande Valley is the only place in the country where tropical and temperate bird families overlap. Green Jays, Altamira Orioles, Hook-billed Kites — species you cannot find in any other American state.",
  },
  {
    num: "02",
    title: "Life Birds Before Breakfast",
    body: "The feeder stations at Bentsen-RGVSP and Santa Ana NWR produce Green Jays, Plain Chachalacas, and Buff-bellied Hummingbirds before 9 a.m. This is concentrated, efficient birding — the kind that moves life lists fast.",
  },
  {
    num: "03",
    title: "Peak Season Is Winter",
    body: "While most of North America empties of birds, South Texas fills up. Whooping Cranes at Aransas, ducks on the resacas, wintering warblers in the thornscrub — the Valley is at its richest November through March.",
  },
];

const featuredBirds = [
  { name: "Green Jay", location: "Rio Grande Valley", slug: "green-jay" },
  { name: "Whooping Crane", location: "Aransas NWR", slug: "whooping-crane" },
  { name: "Altamira Oriole", location: "Bentsen-Rio Grande SP", slug: "altamira-oriole" },
  { name: "Buff-bellied Hummingbird", location: "Lower RGV", slug: "buff-bellied-hummingbird" },
  { name: "Aplomado Falcon", location: "Laguna Atascosa NWR", slug: "aplomado-falcon" },
  { name: "Plain Chachalaca", location: "Throughout RGV", slug: "plain-chachalaca" },
];

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex items-end min-h-[60vh] sm:min-h-[75vh] md:min-h-[85vh]">

        {/* Background — video when available, static image fallback */}
        {hasVideo ? (
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_PHOTO}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "62% 30%" }}
          />
        ) : (
          /*  On mobile portrait the image (1600×1066 landscape) is scaled by
              height to cover the tall-narrow container, so the visible band is
              only ~36 % of the image width. object-[62%_30%] shifts the crop
              rightward to keep the bird subject in view. */
          <Image
            src={HERO_PHOTO}
            alt="Altamira Oriole perched in tropical foliage, South Texas"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "62% 30%" }}
            sizes="100vw"
          />
        )}

        {/* Gradient overlay — deep palm green rises from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0E6B6B 0%, rgba(14,107,107,0.65) 45%, rgba(14,107,107,0.08) 100%)",
          }}
        />

        {/* Vignette — darkens edges for a cinematic frame */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 38%, rgba(0,0,0,0.45) 100%)",
            zIndex: 1,
          }}
          aria-hidden
        />

        {/* Hero text — AnimateIn (not AnimateIn) so above-fold content is never invisible */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 md:pb-20">
          <AnimateIn direction="up">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C77F4A" }}
            >
              Rio Grande Valley &amp; Coastal Bend
            </p>
            <h1
              className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-5"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Birds of<br />South Texas
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              The only place in the United States where Green Jays, Hook-billed Kites, and Aplomado Falcons are resident — and the continent&apos;s most reliable site for Whooping Cranes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/birds"
                className="font-semibold px-6 py-3 rounded-lg transition-opacity hover:opacity-85 text-sm"
                style={{ backgroundColor: "#C77F4A", color: "#fff" }}
              >
                Browse Species
              </Link>
              <Link
                href="/hotspots"
                className="font-semibold px-6 py-3 rounded-lg border transition-colors text-sm"
                style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
              >
                Find Hotspots
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Why South Texas ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <AnimateIn>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#C77F4A" }}
          >
            Why South Texas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: "#0E6B6B" }}>
            Why South Texas?
          </h2>
          <p className="text-sm max-w-xl mb-10" style={{ color: "#5C5954" }}>
            No other region in the United States offers this combination of exclusives, accessibility, and sheer species density.
          </p>
        </AnimateIn>

        {/* Flight-path arc — connects the three card positions */}
        <div className="hidden md:block mb-2" aria-hidden="true">
          <svg viewBox="0 0 1000 44" className="w-full overflow-visible">
            <circle cx="100" cy="36" r="3.5" fill="#C77F4A" opacity="0.5" />
            <circle cx="500" cy="8" r="3.5" fill="#C77F4A" opacity="0.5" />
            <circle cx="900" cy="36" r="3.5" fill="#C77F4A" opacity="0.5" />
            <path
              d="M 100,36 Q 500,-8 900,36"
              stroke="#C77F4A"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="7 5"
              opacity="0.38"
            />
            <polygon points="908,32 900,36 908,40" fill="#C77F4A" opacity="0.45" />
          </svg>
        </div>

        {/* Three highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <AnimateIn key={h.title} delay={i * 130}>
              <div
                className="rounded-xl p-6 h-full"
                style={{
                  background: "#F7F0E4",
                  borderTop: "3px solid #D4A24C",
                  boxShadow: "0 1px 6px rgba(14,107,107,0.07)",
                }}
              >
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "#D4A24C" }}
                >
                  {h.num}
                </span>
                <h3
                  className="font-serif text-xl font-bold mt-2 mb-2"
                  style={{ color: "#0E6B6B" }}
                >
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  {h.body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Social proof strip ──────────────────────────────────────────── */}
      <div style={{ background: "#0E6B6B" }}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {[
            ["50", "species profiles"],
            ["14", "field guides & articles"],
            ["9", "birding hotspots"],
            ["400+", "species documented"],
          ].map(([num, label]) => (
            <div key={label} className="flex items-baseline gap-1.5 text-center">
              <span className="font-serif text-2xl font-bold" style={{ color: "#D4A24C" }}>{num}</span>
              <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── South Texas Specialties ──────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#F7F0E4", borderTop: "1px solid rgba(14,107,107,0.08)" }}>
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#C77F4A" }}
            >
              Target Species
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: "#0E6B6B" }}>
              Your Life Birds Are Here
            </h2>
            <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
              These species are found in the United States almost exclusively in South Texas — and all are regularly seen by visiting birders.
            </p>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {featuredBirds.map((bird, i) => (
              <AnimateIn key={bird.name} delay={i * 80}>
                <Link
                  href={`/birds/${bird.slug}`}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-opacity hover:opacity-80"
                  style={{
                    background: "#EFE3CE",
                    borderLeft: "3px solid #C77F4A",
                  }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0E6B6B" }}>
                      {bird.name}
                    </p>
                    <p className="text-xs" style={{ color: "#6E6B66" }}>
                      {bird.location}
                    </p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="mt-8 text-center">
              <Link
                href="/birds"
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#C77F4A" }}
              >
                View all 50 species →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Latest News ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#C77F4A" }}
            >
              Conservation &amp; News
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: "#0E6B6B" }}>
              Destination Guides &amp; Field Reports
            </h2>
            <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
              Deep-dive guides to the RGV&apos;s top sites, plus conservation news and seasonal field reports
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                href: "/news/bentsen-rgv-state-park-birding-guide",
                date: "July 2026",
                isoDate: "2026-07-01",
                title: "Bentsen-RGVSP: Complete Birding Guide",
                excerpt: "The Rio Grande Valley's flagship site — Hook-billed Kites, Ferruginous Pygmy-Owls, a world-famous hawk watch, and the best feeder station in the country.",
              },
              {
                href: "/news/santa-ana-nwr-birding-guide",
                date: "July 2026",
                isoDate: "2026-07-02",
                title: "Santa Ana NWR: The Jewel of the System",
                excerpt: "2,088 acres of Tamaulipan thornscrub with 400+ species recorded. Green Jays, Rose-throated Becards, Hook-billed Kites — all reliably present.",
              },
              {
                href: "/news/laguna-atascosa-birding-guide",
                date: "July 2026",
                isoDate: "2026-07-01",
                title: "Laguna Atascosa NWR: Birding Guide",
                excerpt: "The largest protected area in the RGV — and the most reliable U.S. site for the reintroduced Aplomado Falcon. A complete guide.",
              },
              {
                href: "/news/south-texas-raptor-specialties",
                date: "June 2026",
                isoDate: "2026-06-30",
                title: "7 Raptors Found Only in South Texas",
                excerpt: "Hook-billed Kite to Aplomado Falcon — the Rio Grande Valley hosts seven resident birds of prey you can't find anywhere else in the United States.",
              },
            ].map((article, i) => (
              <AnimateIn key={article.href} delay={i * 100}>
                <Link
                  href={article.href}
                  className="block rounded-xl h-full transition-opacity hover:opacity-90"
                  style={{
                    background: "#F7F0E4",
                    borderTop: "3px solid #D4A24C",
                    boxShadow: "0 1px 6px rgba(14,107,107,0.07)",
                  }}
                >
                  <div className="p-5 flex flex-col h-full">
                    <time
                      dateTime={article.isoDate}
                      className="text-xs font-medium px-2 py-0.5 rounded-full self-start mb-3"
                      style={{
                        background: "rgba(14,107,107,0.08)",
                        color: "#0E6B6B",
                        border: "1px solid rgba(14,107,107,0.18)",
                      }}
                    >
                      {article.date}
                    </time>
                    <h3
                      className="font-serif text-base font-bold leading-snug mb-2 flex-1"
                      style={{ color: "#0E6B6B" }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#5C5954" }}>
                      {article.excerpt}
                    </p>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "#C77F4A" }}
                    >
                      Read more →
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="mt-8 text-center">
              <Link
                href="/news"
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#C77F4A" }}
              >
                All news &amp; conservation →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Plan Your Trip CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C77F4A" }}
            >
              Plan Your Visit
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0E6B6B" }}
            >
              Your Next Life Bird Is Waiting.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#5C5954" }}>
              South Texas is the only region in the United States that realistically offers 20–30 life birds in a single week. Our guide covers all nine World Birding Center hotspots, with complete species profiles and field tips for every target.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/hotspots"
                className="inline-block font-semibold px-8 py-3 rounded-lg transition-opacity hover:opacity-85 text-sm"
                style={{ backgroundColor: "#0E6B6B", color: "#EFE3CE" }}
              >
                Plan Your Trip
              </Link>
              <Link
                href="/birds"
                className="inline-block font-semibold px-8 py-3 rounded-lg border transition-colors text-sm"
                style={{ borderColor: "#0E6B6B", color: "#0E6B6B" }}
              >
                Browse 50 Species
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "South Texas Birds",
            "url": "https://southtexasbirds.org",
            "logo": "https://southtexasbirds.org/icon.svg",
            "description": "The complete birding guide for the Rio Grande Valley and South Texas coast — 50 species profiles, 9 hotspot guides, and 14 destination articles covering the only U.S. region where Green Jays, Hook-billed Kites, and Aplomado Falcons are resident.",
            "sameAs": ["https://github.com/southtexasbirds"],
          }),
        }}
      />
    </div>
  );
}
