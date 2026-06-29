import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Charadrius-melodus-004_edit.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/piping-plover" },
  title: "Piping Plover (Charadrius melodus) | South Texas Birds",
  description:
    "Piping Plover identification, habitat, and where to find it on the Texas coast. An endangered shorebird that winters in significant numbers on the barrier islands and tidal flats of South Texas.",
  openGraph: {
    type: "article",
    title: "Piping Plover | South Texas Birds",
    description:
      "Piping Plover identification, habitat, and where to find it on the Texas coast.",
    images: [{ url: PHOTO, alt: "Piping Plover on a sandy beach" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Padre Island National Seashore", region: "Corpus Christi", href: "/hotspots" },
  { name: "Packery Channel & North Padre Island flats", region: "Corpus Christi", href: "/hotspots" },
];

export default function PipingPloverPage() {
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
            Texas Gulf Coast · Winter Visitor
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Piping Plover
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Charadrius melodus &nbsp;·&nbsp; <span className="not-italic" lang="es">Chorlitejo melodioso</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#2B507A", color: "#EFE3CE" }}
          >
            Winter Visitor
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
              alt="Piping Plover running along a sandy beach"
              fill
              unoptimized
              priority
              className="object-cover"
              style={{ objectPosition: "50% 40%" }}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Charadrius-melodus-004_edit.jpg"
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
              The Piping Plover is one of North America&apos;s most endangered shorebirds — and the
              Texas Gulf Coast is one of the most important places on the continent for it.
              While the species breeds on Great Plains rivers, Great Lakes beaches, and Atlantic
              Coast barrier islands, it winters almost exclusively along Gulf and Atlantic
              coastlines. Texas hosts a significant share of the global wintering population,
              with Padre Island National Seashore and the Laguna Madre tidal flats providing
              critical habitat. Small, pale, and sand-colored, a Piping Plover on a white
              Texas beach can be nearly invisible until it moves.
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
              A small, plump plover — about the size of a House Sparrow — with upperparts the
              exact pale sandy color of a dry Gulf beach. In winter plumage (when seen in Texas),
              the breast band is faint or absent, the bill is dull orange with a dark tip, and
              the legs are dull orange-yellow. The white underparts, pale sandy back, and
              dark-tipped orange bill distinguish it from other small plovers.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, look for a narrow white wing stripe and a white rump. The call — a
              soft, whistled <em>peep-lo</em> or <em>peep-peep-lo</em> — is musical and
              distinctive, more melodious than other small plovers. Wilson&apos;s Plover is
              larger with a much heavier bill; Snowy Plover is similarly small and pale but
              has a dark bill, dark legs, and an incomplete breast band with distinct dark
              patches on the sides of the breast.
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
              On the Texas coast in winter, Piping Plovers use sandy beaches, shell ridges,
              tidal flats, and the hypersaline tidal flats of the Laguna Madre — one of only
              two hypersaline lagoons in the world. These wind-swept, sparsely vegetated
              flats, with their abundant invertebrates and low disturbance, are among the
              highest-quality wintering habitats for the species anywhere.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Three breeding populations exist: the endangered Great Lakes population (smallest
              and most at-risk), the threatened Northern Great Plains population (breeds on
              alkali lakes and river sandbars), and the threatened Atlantic Coast population
              (breeds on barrier island beaches). All three winter on Gulf and Atlantic coasts,
              with Texas hosting birds from all three populations.
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
              Piping Plovers forage in the classic plover style: run a few steps, pause, tilt
              forward to pick up a prey item, then run again. On the Texas coast they feed
              on small invertebrates — marine worms, amphipods, small mollusks, and insects
              — found in the surf zone, along tidal wrack lines, and on exposed tidal flats.
              They often forage at the edge of the wave wash where invertebrates are briefly
              exposed.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              On wintering grounds, Piping Plovers establish and defend individual feeding
              territories along the beach. They roost communally at high tide on shell
              ridges and upper beach areas. Their pale coloration provides camouflage
              against the beach substrate — a bird standing still can be extraordinarily
              difficult to see even at close range.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>
              Best window: October through April. Scan sandy beaches and exposed tidal flats
              carefully — their camouflage is exceptional. The tidal flats of the Laguna Madre
              accessible from Laguna Atascosa NWR are among the most reliable winter sites.
            </p>
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
                style={{ background: "#A0522D", color: "#EFE3CE" }}
              >
                U.S. Federally Threatened
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Listed as Threatened under the Endangered Species Act (Great Lakes population
                listed as Endangered). Threats include beach development and disturbance,
                predation at nesting sites, and storm events. Wintering habitat loss along
                the Gulf Coast is an increasing concern. The Coastal Bend and Lower Rio Grande
                Valley tidal flats are recognized as critical wintering habitat, and their
                protection is essential for the species&apos; long-term recovery.
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
                Individual Piping Plovers return to the same wintering beach year after year —
                banded birds have been resighted at the same Texas locations for six or more
                consecutive winters. This site fidelity means that the loss or degradation of
                even a single high-quality wintering beach can affect the same individual birds
                season after season.
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
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/piping-plover",
            "headline": "Piping Plover (Charadrius melodus) | South Texas Birds",
            "description": "Piping Plover identification, habitat, and where to find it on the Texas coast. An endangered shorebird that winters in significant numbers on the barrier islands and tidal flats of South Texas.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Charadrius-melodus-004_edit.jpg",
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
