import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/9/9c/Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg";

export const metadata: Metadata = {
  title: "Buff-bellied Hummingbird (Amazilia yucatanensis) | South Texas Birds",
  description:
    "Buff-bellied Hummingbird identification, habitat, and where to find it in the Rio Grande Valley. The only hummingbird that regularly breeds in South Texas.",
  openGraph: {
    title: "Buff-bellied Hummingbird | South Texas Birds",
    description:
      "Buff-bellied Hummingbird identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Buff-bellied Hummingbird at Sabal Palm Sanctuary, South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Sabal Palm Sanctuary", region: "Brownsville", href: "/hotspots#sabal-palm" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
];

export default function BuffBelliedHummingbirdPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>

      {/* ── Back nav ─────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/birds"
          className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#C77F4A" }}
        >
          ← All Species
        </Link>
      </div>

      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#C77F4A" }}
          >
            Rio Grande Valley · Year-round Resident
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Buff-bellied Hummingbird
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Amazilia yucatanensis &nbsp;·&nbsp; <span className="not-italic" lang="es">Colibrí Vientre-canelo</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#0E6B6B", color: "#EFE3CE" }}
          >
            Resident
          </span>
        </AnimateIn>
      </div>

      {/* ── Hero image ───────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image
              src={PHOTO}
              alt="Buff-bellied Hummingbird at Sabal Palm Sanctuary, Brownsville TX"
              fill
              unoptimized
              priority
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_(21421266100).jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              Wikimedia Commons
            </a>
          </p>
        </AnimateIn>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        {/* Overview */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Buff-bellied Hummingbird is the only hummingbird species that regularly breeds in
              South Texas, making it the anchor of the Rio Grande Valley&apos;s hummingbird scene year
              round. While a parade of other species passes through during migration, the Buff-bellied
              is the one that stays — nesting from spring through summer and holding its territory
              through winter. A bird of subtropical woodland edges and flowering gardens, it is
              relatively easy to find at feeders and plantings of native salvias and Turk&apos;s cap
              throughout the Valley, and the bold red bill makes it instantly recognizable.
            </p>
          </section>
        </AnimateIn>

        {/* Identification */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The bright red-orange bill with a black tip is the single most reliable field mark —
              visible at a glance and shared by no other hummingbird in Texas. The body is iridescent
              green on the back and breast, warming to a buffy cinnamon on the belly (giving the
              species its name). The tail is rufous-chestnut and is frequently pumped while hovering.
              At about 10–11 cm (4 in) it is medium-sized for a hummingbird, noticeably larger than
              a Ruby-throated.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Sexes are similar, with females slightly duller and showing less iridescence on the
              throat. The combination of red bill, green-and-buff body, and rufous tail is unique
              among regularly occurring U.S. hummingbirds. Ruby-throated and Black-chinned
              Hummingbirds — the migrants most likely to cause confusion — both have dark bills
              and lack the warm buff belly.
            </p>
          </section>
        </AnimateIn>

        {/* Habitat & Range */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In South Texas, Buff-bellied Hummingbirds use a wide range of habitats: woodland
              edges, Tamaulipan thornscrub, riparian forest, and — perhaps most accessibly — gardens,
              nature center grounds, and urban parks planted with native flowering species. They are
              strongly associated with plants that produce tubular red or orange flowers, particularly
              Turk&apos;s cap, red salvia, tropical sage, and anacua.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The breeding range spans South Texas and the Gulf Coast of northeastern Mexico south
              through Tamaulipas and Veracruz to the Yucatán Peninsula. After the breeding season,
              many birds disperse northeastward along the Gulf Coast — a reversal of the direction
              most U.S. hummingbirds migrate — reaching Louisiana and occasionally Mississippi and
              Alabama before returning to South Texas the following spring.
            </p>
          </section>
        </AnimateIn>

        {/* Behavior & Diet */}
        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Nectar is the primary fuel, supplemented by small insects and spiders caught in flight
              or gleaned from foliage — a critical protein source, especially during nesting. Males
              are fiercely territorial at nectar sources and will chase off larger hummingbirds,
              including Baltimore Orioles that raid feeders. Despite their small size, Buff-bellied
              Hummingbirds are among the more aggressive hummers at a feeder station.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The female builds the nest alone: a compact cup of plant down and fibers bound with
              spider silk and camouflaged with bits of lichen, typically placed on a low horizontal
              branch 1–3 meters above the ground. She lays two white eggs and raises the young
              without help from the male. Breeding in South Texas runs from March through July, and
              some pairs raise two broods in a season.
            </p>
          </section>
        </AnimateIn>

        {/* Where to See */}
        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
              Where to See in South Texas
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {spots.map((spot) => (
                <Link
                  key={spot.name}
                  href={spot.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 transition-opacity hover:opacity-80"
                  style={{ background: "#F7F0E4", borderLeft: "3px solid #C77F4A" }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0E6B6B" }}>{spot.name}</p>
                    <p className="text-xs" style={{ color: "#6E6B66" }}>{spot.region}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>

        {/* Conservation & Fun Fact */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section
              className="rounded-2xl p-7 h-full"
              style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
            >
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                style={{ background: "#0E6B6B", color: "#EFE3CE" }}
              >
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                The species is stable across its range. In South Texas, the main pressures are loss
                of native flowering plants through development and herbicide use, and the replacement
                of native gardens with non-flowering ornamentals. Planting native nectar species —
                Turk&apos;s cap, red salvia, anacua — is one of the most direct ways to support the
                local breeding population.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section
              className="rounded-2xl p-7 h-full"
              style={{
                background: "#0E6B6B",
                boxShadow: "0 1px 6px rgba(14,107,107,0.15)",
              }}
            >
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Buff-bellied Hummingbird migrates in the wrong direction — at least by most
                hummingbird standards. After nesting in South Texas, many birds disperse
                northeastward along the Gulf Coast into Louisiana and beyond, rather than heading
                south like their relatives. They are one of the only U.S. hummingbirds known to
                perform this post-breeding northward shift.
              </p>
            </section>
          </AnimateIn>
        </div>

        {/* CTA */}
        <AnimateIn>
          <div className="text-center pt-4">
            <Link
              href="/birds"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
              ← Browse all South Texas species
            </Link>
          </div>
        </AnimateIn>

      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Buff-bellied Hummingbird (Amazilia yucatanensis) | South Texas Birds",
            "description": "Buff-bellied Hummingbird identification, habitat, and where to find it in the Rio Grande Valley. The only hummingbird that regularly breeds in South Texas.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg",
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            }
          })
        }}
      />
    </div>
  );
}
