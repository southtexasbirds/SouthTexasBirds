import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/White-tipped_Dove_-_Panama_H8O8470.jpg";

export const metadata: Metadata = {
  title: "White-tipped Dove (Leptotila verreauxi) | South Texas Birds",
  description:
    "White-tipped Dove identification, habitat, and where to find it in South Texas. A plump, ground-hugging dove whose haunting hollow hoot is one of the signature sounds of the Rio Grande Valley.",
  openGraph: {
    title: "White-tipped Dove | South Texas Birds",
    description:
      "White-tipped Dove identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "White-tipped Dove on the ground in shaded woodland" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Salineño Wildlife Preserve", region: "Salineño", href: "/hotspots#salineno" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function WhiteTippedDovePage() {
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
            White-tipped Dove
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Leptotila verreauxi &nbsp;·&nbsp; <span className="not-italic">Paloma arroyera</span>
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
              alt="White-tipped Dove on the ground in shaded woodland"
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
              href="https://commons.wikimedia.org/wiki/File:White-tipped_Dove_-_Panama_H8O8470.jpg"
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
              The White-tipped Dove is one of the quintessential birds of the lower Rio Grande
              Valley — a plump, ground-walking dove of shaded woodland floors whose deep,
              hollow hoot is among the most evocative sounds in any RGV nature reserve. Walk
              a trail at Santa Ana or Bentsen on a warm morning and the call — like blowing
              across the top of a large bottle — drifts from the undergrowth at regular intervals.
              It is a tropical species that reaches its northern range limit here, barely
              extending into the United States.
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
              A large, rotund dove — noticeably bigger and heavier than a Mourning Dove — with
              plain brownish-gray upperparts and clean pinkish-buff underparts. The head is pale
              gray with a faint pinkish flush on the face. Look for the bright red orbital ring
              around the eye and the reddish-orange base to the bill, both diagnostic.
              In flight, the white corners of the rounded tail are conspicuous — the namesake
              &ldquo;white-tipped&rdquo; field mark.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              On the ground, birds walk steadily with a nodding gait, usually keeping to deep
              shade beneath the canopy. The call is the best long-range identification cue:
              a single low, resonant <em>wooo</em> repeated at slow intervals, carrying
              surprisingly far through the brush.
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
              In South Texas, White-tipped Doves occupy the shaded floor of dense Tamaulipan
              thornscrub and riparian woodland, particularly areas with a well-developed canopy
              that provides deep shade at ground level. They are frequently encountered beneath
              the feeders at Valley nature centers, where they walk quietly among fallen seeds.
              Unlike most doves, they seldom venture into open areas.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Their U.S. range is restricted to the lower Rio Grande Valley. The species is
              widespread from Mexico through Central and South America, inhabiting forest
              understory, woodland edges, and shaded gardens across an enormous range.
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
              White-tipped Doves are almost entirely ground foragers, walking slowly through
              leaf litter in search of seeds, fallen fruits, and berries. They are less
              gregarious than most doves, typically seen singly or in pairs rather than flocks.
              At feeders they move quietly beneath other birds, picking up spillage.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Pairs breed from March through August, building a flimsy stick platform nest
              low in a shrub or tree, typically two to five feet off the ground. Clutch size
              is almost always two eggs. Both parents incubate and feed the young. The species
              is a year-round resident and does not migrate; pairs remain on territory
              throughout the year.
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
              Listen for the deep hollow hoot from shaded areas. Check the ground beneath
              feeder stations at nature centers — they regularly walk in to pick up fallen seed.
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
                style={{ background: "#0E6B6B", color: "#EFE3CE" }}
              >
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Stable and widespread across its large Latin American range. In South Texas,
                the species depends on intact riparian woodland and thornscrub — habitats under
                persistent pressure from brush clearing and development. The protected reserves
                of the lower Rio Grande Valley provide essential refugia for the U.S. population.
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
                The White-tipped Dove&apos;s call is so unlike a typical dove vocalization that
                first-time visitors to the Valley often spend considerable time searching for
                the mysterious &ldquo;mystery owl&rdquo; they&apos;ve been hearing — only to
                eventually discover that the haunting hollow hoot is coming from a dove walking
                quietly on the ground nearby.
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
            "headline": "White-tipped Dove (Leptotila verreauxi) | South Texas Birds",
            "description": "White-tipped Dove identification, habitat, and where to find it in South Texas. A plump, ground-hugging dove whose haunting hollow hoot is one of the signature sounds of the Rio Grande Valley.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/White-tipped_Dove_-_Panama_H8O8470.jpg",
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
