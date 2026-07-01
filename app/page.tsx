import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import AnimateIn from "./components/AnimateIn";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "South Texas Birds | Rio Grande Valley Birding Guide & Hotspots" },
  description:
    "Plan your Rio Grande Valley birding trip. Explore 500+ species, top RGV hotspots, and South Texas specialties like Green Jay, Altamira Oriole, and Whooping Crane.",
  openGraph: {
    title: "South Texas Birds | Rio Grande Valley Birding Guide & Hotspots",
    description:
      "Plan your Rio Grande Valley birding trip. Explore 500+ species, top RGV hotspots, and South Texas specialties like Green Jay, Altamira Oriole, and Whooping Crane.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
        width: 2585,
        height: 1723,
        alt: "Altamira Oriole perched in South Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg"],
    title: "South Texas Birds | Rio Grande Valley Birding Guide & Hotspots",
    description:
      "Plan your Rio Grande Valley birding trip. Explore 500+ species, top RGV hotspots, and South Texas specialties.",
  },
};

const HERO_PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

const hasVideo = fs.existsSync(path.join(process.cwd(), "public", "hero-video.mp4"));

const highlights = [
  {
    num: "01",
    title: "500+ Species",
    body: "South Texas hosts more bird species than almost anywhere else in North America, thanks to its unique position at the meeting of temperate and tropical zones.",
  },
  {
    num: "02",
    title: "World Birding Center",
    body: "The nine sites of the World Birding Center stretch across the Rio Grande Valley, offering premier habitat for resident and migratory birds alike.",
  },
  {
    num: "03",
    title: "Year-Round Birding",
    body: "Every season brings something new — spring and fall migration, wintering waterfowl, and resident specialties like Green Jay and Altamira Oriole.",
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
          /*  On mobile portrait the image (2585×1723 landscape) is scaled by
              height to cover the tall-narrow container, so the visible band is
              only ~36 % of the image width. object-[62%_30%] shifts the crop
              rightward to keep the bird subject in view. */
          <Image
            src={HERO_PHOTO}
            alt="Altamira Oriole perched in tropical foliage, South Texas"
            fill
            priority
            unoptimized
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
              Subtropical thornscrub, resaca wetlands, and windswept Gulf Coast prairies — converging to create one of North America&apos;s premier birding destinations.
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
            A World Apart
          </h2>
          <p className="text-sm max-w-xl mb-10" style={{ color: "#5C5954" }}>
            Nowhere else in the United States do tropical and temperate bird families meet so dramatically.
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
              South Texas Specialties
            </h2>
            <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
              Birds that draw visitors from across the world
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
              Latest from South Texas
            </h2>
            <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
              Habitat, conservation, and events shaping the region
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                href: "/news/whooping-crane-record-count",
                date: "June 2026",
                isoDate: "2026-06-01",
                title: "Record Whooping Crane Count",
                excerpt: "557 birds wintering along the Texas coast — the highest total ever recorded for the species' only self-sustaining wild population.",
              },
              {
                href: "/news/thornscrub-restoration-rgv",
                date: "June 2026",
                isoDate: "2026-06-10",
                title: "Thornscrub Restoration Expands",
                excerpt: "Less than 5% of native thornscrub remains in the Valley — conservation groups are rebuilding habitat for Green Jays, Chachalacas, and more.",
              },
              {
                href: "/news/spacex-refuge-land-exchange",
                date: "June 2026",
                isoDate: "2026-06-20",
                title: "SpaceX Land Exchange Threatens Wildlife Corridor",
                excerpt: "A federal land swap could fragment key Aplomado Falcon and ocelot habitat along the Rio Grande.",
              },
              {
                href: "/news/painted-bunting-south-padre",
                date: "June 2026",
                isoDate: "2026-06-25",
                title: "Painted Buntings at South Padre Island",
                excerpt: "When conditions align in late April, hundreds of Trans-Gulf migrants make landfall at South Padre Island — one of the most spectacular birding events in North America.",
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
              Ready to Find Your Lifer?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#5C5954" }}>
              Whether you&apos;re chasing a life bird or simply walking through resaca habitat at dawn, South Texas always delivers. Our hotspot guide covers the five essential stops in the Rio Grande Valley.
            </p>
            <Link
              href="/hotspots"
              className="inline-block font-semibold px-8 py-3 rounded-lg transition-opacity hover:opacity-85 text-sm"
              style={{ backgroundColor: "#0E6B6B", color: "#EFE3CE" }}
            >
              Explore Hotspots
            </Link>
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
            "description": "Birding guide for the Rio Grande Valley and South Texas coast. Discover 500+ species, hotspot maps, and seasonal tips.",
            "sameAs": ["https://github.com/southtexasbirds"],
          }),
        }}
      />
    </div>
  );
}
