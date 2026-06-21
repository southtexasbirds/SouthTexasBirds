import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/5/52/Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg";

export const metadata: Metadata = {
  title: "Aplomado Falcon (Falco femoralis) | South Texas Birds",
  description:
    "Aplomado Falcon identification, habitat, and where to find it in South Texas. Once extirpated from the U.S., this slender, bold-patterned falcon has been successfully reintroduced at Laguna Atascosa NWR.",
  openGraph: {
    title: "Aplomado Falcon | South Texas Birds",
    description:
      "Aplomado Falcon identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Aplomado Falcon perched on a post in South Texas coastal prairie" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Coastal Prairie along FM 106", region: "Cameron / Willacy counties", href: "/hotspots" },
  { name: "Salineño Wildlife Preserve", region: "Salineño", href: "/hotspots#salineno" },
];

export default function AplomadoFalconPage() {
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
            Rio Grande Valley · Resident (Reintroduced)
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Aplomado Falcon
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Falco femoralis &nbsp;·&nbsp; <span className="not-italic">Halcón aplomado</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#0E6B6B", color: "#EFE3CE" }}
          >
            Resident · Reintroduced
          </span>
        </AnimateIn>
      </div>

      {/* ── Hero image ───────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image
              src={PHOTO}
              alt="Aplomado Falcon perched on a post in South Texas coastal prairie"
              fill
              unoptimized
              priority
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Aplomado_Falcon_(Falco_femoralis)_(31631199902).jpg"
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
              The Aplomado Falcon is one of the American Southwest&apos;s most dramatic conservation
              recoveries. Once a breeding bird across southern Texas, New Mexico, and Arizona, the
              species vanished from the United States entirely by the mid-20th century — driven out
              by a combination of habitat conversion, pesticide contamination, and nest disturbance.
              A reintroduction program begun in 1985 by the Peregrine Fund has gradually
              re-established a breeding population in South Texas, centered on Laguna Atascosa
              National Wildlife Refuge and the surrounding coastal prairies of Cameron and Willacy
              counties. Slender and boldly patterned, the Aplomado is as elegant as any falcon on
              the continent.
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
              A slender, long-tailed falcon with an immediately striking facial pattern. Adults show
              dark slate-gray upperparts, a broad white supercilium arching back from the bill, and
              white cheeks and throat separated from the crown and nape by bold dark mustache stripes.
              The breast is washed cinnamon or buff, sharply demarcated from a dark belly band; the
              flanks and thighs are rich rufous — the species name <em>femoralis</em> refers to these
              prominently feathered legs. The tail is long and banded black-and-white.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Similar in size to a Peregrine Falcon but noticeably more slender with a proportionally
              longer tail — in flight the silhouette is almost kite-like. Females are larger than
              males, as in most raptors. Perched birds often look elongated and upright; in the open
              prairie they regularly use utility poles, fence posts, and yucca stalks as hunting
              lookouts, making them surprisingly easy to spot when present.
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
              In South Texas, Aplomado Falcons occupy open coastal prairie and brushy savanna —
              the moist, wind-swept grasslands and shrub-dotted flats of Cameron and Willacy
              counties, stretching from the Laguna Madre shore inland to the lower resaca country.
              They favor areas with scattered shrubs, yucca, and low trees for nesting (they
              appropriate old stick nests of White-tailed Hawks and ravens rather than building
              their own) and open ground with good visibility for hunting.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The broader range extends through open habitats of Mexico, Central America, and
              South America as far south as Tierra del Fuego. In the U.S., the reintroduced
              Texas population is the only established breeding group; occasional individuals
              wander into New Mexico and Arizona.
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
              Aplomado Falcons are fast, agile hunters that take a wide range of prey: large
              insects (especially dragonflies and grasshoppers), small to medium-sized birds
              including sparrows, larks, and doves, as well as lizards and small mammals.
              Unlike the classic falcon stoop from height, Aplomados frequently hunt low and
              fast across open ground, using speed and surprise rather than altitude.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Pairs often hunt cooperatively — one bird flushes prey from cover while the
              other cuts off the escape route. Mates are strongly bonded and are regularly
              seen perching side by side. They are year-round residents where established,
              defending territories and returning to the same nest structures season after
              season. Clutch size is typically two to three eggs; both parents share incubation
              and chick-rearing duties.
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
              Scan fence lines, utility poles, and yucca stalks along coastal prairie roads —
              perched birds are often conspicuous against the open sky. Pairs are frequently
              seen together year-round.
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
                U.S. Federally Endangered
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Listed as Endangered under the U.S. Endangered Species Act. The reintroduction
                effort — led by the Peregrine Fund in partnership with the U.S. Fish &amp; Wildlife
                Service — has established dozens of breeding pairs in South Texas from zero in the
                late 20th century, making it one of the most successful raptor recovery projects
                in North American history. Continued habitat protection and nest monitoring remain
                essential for the population&apos;s long-term stability.
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
                John James Audubon collected an Aplomado Falcon specimen in Louisiana in the
                1830s and painted it for <em>The Birds of America</em>. Within a century,
                not a single breeding pair remained north of the Mexican border.
                The bird Audubon held in his hands had disappeared from the United States
                entirely — until the Peregrine Fund began releasing captive-raised birds
                back into South Texas in 1985.
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
    </div>
  );
}
