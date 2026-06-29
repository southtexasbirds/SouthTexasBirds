import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Aimophila_botterii.jpg";

export const metadata: Metadata = {
  title: "Botteri's Sparrow (Peucaea botterii) | South Texas Birds",
  description:
    "Botteri's Sparrow identification, habitat, and where to find it in South Texas. A secretive grassland sparrow that arrives in summer specifically to breed in the coastal prairies of the Rio Grande Valley.",
  openGraph: {
    type: "article",
    title: "Botteri's Sparrow | South Texas Birds",
    description:
      "Botteri's Sparrow identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Botteri's Sparrow perched in grassland" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Sabal Palm Sanctuary", region: "Brownsville", href: "/hotspots" },
  { name: "Coastal prairies of Cameron & Willacy counties", region: "Lower Rio Grande Valley", href: "/hotspots" },
];

export default function BotterisSparrowPage() {
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
            Rio Grande Valley · Summer Resident
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "#0E6B6B" }}
          >
            Botteri&apos;s Sparrow
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Peucaea botterii &nbsp;·&nbsp; <span className="not-italic" lang="es">Zacatero de Botteri</span>
          </p>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#7A5C10", color: "#EFE3CE" }}
          >
            Summer Resident
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
              alt="Botteri's Sparrow perched on a grass stem in coastal prairie"
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
              href="https://commons.wikimedia.org/wiki/File:Aimophila_botterii.jpg"
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
              Botteri&apos;s Sparrow is one of those birds that demands patience and attention —
              a nondescript, secretive sparrow that arrives in the coastal prairies of South
              Texas each spring specifically to breed, then disappears south again in fall.
              Without its song, it is nearly impossible to locate; with it, the bird&apos;s
              presence in a patch of Tamaulipan coastal grassland is immediately obvious.
              The Texas population represents a northern outpost of a species more widely
              distributed in Mexico and Central America, tied closely to specific grassland
              habitats that are themselves becoming increasingly rare.
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
              A large, plain sparrow with a flat-headed, heavy-billed look. Upperparts are
              streaked brown and buff; underparts are plain pale buff with faint streaking
              on the upper breast and little to no streaking on the flanks. The face is plain
              with a weak supercilium and malar stripe; the tail is long and slightly rounded.
              There is no distinctive facial pattern to grab the eye — it is, by design, as
              invisible as possible in tall grass.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The most similar species in its range is Cassin&apos;s Sparrow, which overlaps
              in some grassland habitats. Botteri&apos;s is warmer-toned, less distinctly
              streaked on the back, and lacks the Cassin&apos;s Sparrow&apos;s whitish tail
              corners. The song is the most reliable distinguishing feature: Botteri&apos;s
              gives a series of dry <em>tit</em> or <em>chip</em> notes accelerating into a
              distinctive bouncing-ball rattle, quite different from Cassin&apos;s sky-lark
              display song.
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
              In South Texas, Botteri&apos;s Sparrow is closely tied to Tamaulipan coastal
              tallgrass prairie — the moist, dense grasslands of the lower Rio Grande delta,
              dominated by grasses such as gulf cordgrass (<em>Spartina spartinae</em>),
              Seacoast bluestem (<em>Schizachyrium scoparium</em>), and weedy forbs. It
              requires tall, dense grass with relatively open ground at the base — neither
              closely grazed pasture nor dense shrubland will do. The Sabal Palm Sanctuary
              near Brownsville and the coastal grasslands of Cameron and Willacy counties
              are the most reliable sites.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Breeding range in the U.S. is limited to southern Arizona (a different
              subspecies in desert grassland) and the lower Rio Grande Valley of Texas.
              Birds winter in Mexico; Texas birds are essentially absent from October
              through April.
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
              Botteri&apos;s Sparrows feed primarily on grass seeds and small invertebrates,
              foraging low in or near the base of tall grass. They are ground-feeding birds
              that rarely venture into the open, preferring to move through dense grass cover.
              Outside the breeding season they are largely silent and almost never seen.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Singing males perch on grass stems or low shrubs, often at the top of the
              tallest available vegetation, where they deliver their accelerating rattling
              song persistently through the breeding season from May into August. The nest
              is a grass cup on or near the ground, well hidden in thick grass. The species
              is monogamous and territorial, with males defending a patch of grassland from
              other males through song and occasional direct chases.
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
              Present May through September. Learn the song before you go — without it,
              finding this bird is largely luck. Walk the edges of tall coastal grassland
              at dawn and listen for the distinctive bouncing-ball rattle.
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
                Globally stable across its broad Mexican and Central American range, but
                the U.S. Texas population is of conservation concern due to the dramatic
                decline of native coastal tallgrass prairie. Agricultural conversion,
                development, and overgrazing have reduced available breeding habitat
                substantially. Maintaining and restoring native grassland in Cameron
                and Willacy counties is the key conservation need for this population.
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
                The species is named for Matteo Botteri, a Croatian-born botanist and
                naturalist who collected specimens in Mexico and Veracruz in the 1850s.
                Botteri never visited Texas — the bird that bears his name in the United
                States is known from a state he never set foot in, during a time when
                much of the Rio Grande Valley had yet to be systematically surveyed
                by ornithologists.
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
            "headline": "Botteri's Sparrow (Peucaea botterii) | South Texas Birds",
            "description": "Botteri's Sparrow identification, habitat, and where to find it in South Texas. A secretive grassland sparrow that arrives in summer specifically to breed in the coastal prairies of the Rio Grande Valley.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Aimophila_botterii.jpg",
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
