import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./components/AnimateIn";

export const metadata: Metadata = {
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
    title: "South Texas Birds | Rio Grande Valley Birding Guide & Hotspots",
    description:
      "Plan your Rio Grande Valley birding trip. Explore 500+ species, top RGV hotspots, and South Texas specialties.",
  },
};

// Full-resolution original JPEG (2585×1723) — optimized by Next.js on first request
const HERO_PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

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
  { name: "Green Jay", location: "Rio Grande Valley" },
  { name: "Whooping Crane", location: "Aransas NWR" },
  { name: "Altamira Oriole", location: "Bentsen-Rio Grande SP" },
  { name: "Buff-bellied Hummingbird", location: "Lower RGV" },
  { name: "Aplomado Falcon", location: "Laguna Atascosa NWR" },
  { name: "Plain Chachalaca", location: "Throughout RGV" },
];

export default function HomePage() {
  return (
    <div style={{ background: "#F6F1E7" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex items-end" style={{ minHeight: "85vh" }}>
        {/* Background photo */}
        <Image
          src={HERO_PHOTO}
          alt="Altamira Oriole"
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Gradient overlay — deep palm green rises from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #1F3D2B 0%, rgba(31,61,43,0.65) 45%, rgba(31,61,43,0.08) 100%)",
          }}
        />

        {/* Hero text */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 md:pb-20">
          <AnimateIn direction="up">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C2603D" }}
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
                style={{ backgroundColor: "#C2603D", color: "#fff" }}
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
            style={{ color: "#C2603D" }}
          >
            Why South Texas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1F3D2B" }}>
            A World Apart
          </h2>
          <p className="text-sm max-w-xl mb-10" style={{ color: "#5C5954" }}>
            Nowhere else in the United States do tropical and temperate bird families meet so dramatically.
          </p>
        </AnimateIn>

        {/* Flight-path arc — connects the three card positions */}
        <div className="hidden md:block mb-2" aria-hidden="true">
          <svg viewBox="0 0 1000 44" className="w-full overflow-visible">
            <circle cx="100" cy="36" r="3.5" fill="#C2603D" opacity="0.5" />
            <circle cx="500" cy="8" r="3.5" fill="#C2603D" opacity="0.5" />
            <circle cx="900" cy="36" r="3.5" fill="#C2603D" opacity="0.5" />
            <path
              d="M 100,36 Q 500,-8 900,36"
              stroke="#C2603D"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="7 5"
              opacity="0.38"
            />
            {/* Arrow tip at end */}
            <polygon points="908,32 900,36 908,40" fill="#C2603D" opacity="0.45" />
          </svg>
        </div>

        {/* Three highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <AnimateIn key={h.title} delay={i * 130}>
              <div
                className="rounded-xl p-6 h-full"
                style={{
                  background: "#fff",
                  borderTop: "3px solid #D4A24C",
                  boxShadow: "0 1px 6px rgba(31,61,43,0.07)",
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
                  style={{ color: "#1F3D2B" }}
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
      <section className="py-20 px-6" style={{ background: "#fff", borderTop: "1px solid rgba(31,61,43,0.08)" }}>
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#C2603D" }}
            >
              Target Species
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1F3D2B" }}>
              South Texas Specialties
            </h2>
            <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
              Birds that draw visitors from across the world
            </p>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {featuredBirds.map((bird, i) => (
              <AnimateIn key={bird.name} delay={i * 80}>
                <div
                  className="flex items-center gap-3 rounded-lg px-4 py-3"
                  style={{
                    background: "#F6F1E7",
                    borderLeft: "3px solid #C2603D",
                  }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#1F3D2B" }}>
                      {bird.name}
                    </p>
                    <p className="text-xs" style={{ color: "#6E6B66" }}>
                      {bird.location}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="mt-8 text-center">
              <Link
                href="/birds"
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#C2603D" }}
              >
                View all 30 species →
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
              style={{ color: "#C2603D" }}
            >
              Plan Your Visit
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#1F3D2B" }}
            >
              Ready to Find Your Lifer?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#5C5954" }}>
              Whether you&apos;re chasing a life bird or simply walking through resaca habitat at dawn, South Texas always delivers. Our hotspot guide covers the five essential stops in the Rio Grande Valley.
            </p>
            <Link
              href="/hotspots"
              className="inline-block font-semibold px-8 py-3 rounded-lg transition-opacity hover:opacity-85 text-sm"
              style={{ backgroundColor: "#1F3D2B", color: "#F6F1E7" }}
            >
              Explore Hotspots
            </Link>
          </AnimateIn>
        </div>
      </section>

    </div>
  );
}
