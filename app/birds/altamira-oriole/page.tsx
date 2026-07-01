import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/altamira-oriole" },
  title: "Altamira Oriole (Icterus gularis) | South Texas Birds",
  description:
    "Altamira Oriole identification, habitat, and where to find it in the Rio Grande Valley. The largest oriole in the U.S., famous for its extraordinary hanging nest.",
  openGraph: {
    type: "article",
    title: "Altamira Oriole | South Texas Birds",
    description:
      "Altamira Oriole identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Altamira Oriole perched in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [PHOTO],
  },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function AltamiraOriolePage() {
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
            Altamira Oriole
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Icterus gularis &nbsp;·&nbsp; <span className="not-italic" lang="es">Bolsero de Altamira</span>
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
              alt="Altamira Oriole perched in tropical foliage, South Texas"
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
              href="https://commons.wikimedia.org/wiki/File:Altamira_oriole_(Icterus_gularis_gigas)_Copan.jpg"
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
              The Altamira Oriole is the largest oriole in the United States, and South Texas is the
              only place in the country where it lives as a year-round resident. Named for the town of
              Altamira in Tamaulipas, Mexico, where the species was first described, it is a bird of
              tropical riparian forest that reaches the very northern edge of its range in the Rio
              Grande Valley. Deep flame-orange and jet black, it is one of the most visually striking
              birds in North America — and its pendulous, woven nest is among the most extraordinary
              structures any bird builds.
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
              Adults are a rich, deep orange — a richer, darker tone than the similar Hooded or
              Baltimore Oriole — with a solid black back, wings, tail, and face extending from the
              lores through the throat. A single bold white wing bar breaks up the dark wing. The
              bill is long, slightly decurved, and bluish-gray at the base. Both sexes share the
              same pattern, with females slightly duller and the black less saturated.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Size is the most reliable first impression: at about 24 cm (9.5 in) it is noticeably
              larger and longer-billed than any other oriole in Texas. Immatures show olive-yellow
              tones with a dusky face and may suggest a large female Orchard Oriole, but the size
              and bill shape are distinctive. The song — a series of rich, slurred whistles — is
              loud and carries well through riparian canopy.
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
              In South Texas, Altamira Orioles favor tall riparian forest along the Rio Grande and
              its resacas, particularly where large native trees — ebony, anacua, Texas ebony,
              and sabal palm — provide canopy for nesting and foraging. They adapt readily to shaded
              parks, nature center grounds, and suburban streets with mature trees, making them
              unusually easy to find in developed areas of the Valley.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. breeding range is essentially the lower Rio Grande Valley from Starr County
              east to Cameron County. The species is widespread from northeastern Mexico through
              Central America to northwestern Costa Rica, inhabiting tropical deciduous and
              semi-evergreen forest, forest edges, and open woodland with scattered trees.
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
              Altamira Orioles are omnivores, taking insects and spiders gleaned from foliage,
              ripe fruit, and nectar. They visit feeders reliably for orange halves, grape jelly,
              and sugar-water — Bentsen State Park and Santa Ana NWR both maintain feeders where
              they are near-daily visitors. Foraging takes place mostly in the canopy and mid-story,
              but birds will descend to lower vegetation for fruit.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The nest is the species&apos; most remarkable feature. The female weaves a hanging
              basket of plant fibers, bark strips, grasses, and Spanish moss over several weeks,
              producing a pouch that typically hangs 25 to 65 cm (10 to 26 inches) from a branch
              tip. Pairs are monogamous and often return to the same territory year after year,
              sometimes building a new nest adjacent to an old one. Breeding runs from April through
              July in South Texas.
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

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Year-round</strong> — Altamira Orioles are permanent residents of the Rio Grande Valley. They are easiest to find during the breeding season (<strong>April through July</strong>), when males sing persistently and the distinctive hanging nests are visible before the leaves fully fill in. Bentsen-Rio Grande Valley State Park and Santa Ana NWR both have reliable territory pairs. Visiting early morning in spring maximizes chances of seeing males in active song display.
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
                The species is stable across its broad Latin American range. In South Texas, the main
                pressure is loss and fragmentation of riparian forest — the tall native trees the
                species depends on for nesting. The network of protected reserves along the Rio Grande
                (Bentsen, Santa Ana, Resaca de la Palma) is essential to sustaining the U.S.
                population.
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
                The Altamira Oriole&apos;s nest is one of the longest woven structures built by any
                bird in North America — a hanging pouch that can reach 65 cm (26 inches), longer than
                a standard ruler. The female constructs it almost entirely alone from plant fibers,
                taking weeks to complete the intricate basket before laying her eggs inside.
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
            "url": "https://southtexasbirds.org/birds/altamira-oriole",
            "headline": "Altamira Oriole (Icterus gularis) | South Texas Birds",
            "description": "Altamira Oriole identification, habitat, and where to find it in the Rio Grande Valley. The largest oriole in the U.S., famous for its extraordinary hanging nest.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
                        "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the Altamira Oriole found only in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In the United States, the Altamira Oriole is found only in the Rio Grande Valley of South Texas — making it one of the most sought-after birds for American birders. Its range extends south through Mexico and Central America to Nicaragua. Within the U.S., it is essentially restricted to a narrow strip along the lower Rio Grande between Laredo and Brownsville."
                }
              },
              {
                "@type": "Question",
                "name": "What does the Altamira Oriole's nest look like?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Altamira Oriole builds the longest woven nest of any North American bird — a pendulous bag up to 26 inches long, suspended from the tip of a branch. The nest is made of plant fibers woven into a tight pouch that protects eggs and chicks from predators and weather. The hanging nests are often visible even after the leaves fall, and old nests may be used year after year."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the best place to see Altamira Orioles in the U.S.?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bentsen-Rio Grande Valley State Park in Mission, Texas is considered the most reliable site for Altamira Orioles in the U.S., with multiple territorial pairs present year-round. Santa Ana National Wildlife Refuge and Salineño Wildlife Preserve are also excellent. The species is most visible and vocal during the breeding season (April–July) when males sing persistently from tall trees."
                }
              },
              {
                "@type": "Question",
                "name": "What does the Altamira Oriole eat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Altamira Orioles eat insects, nectar, and fruit. They probe flowers for nectar and are important pollinators in their range. They will visit feeders stocked with halved oranges and grape jelly. During the breeding season, insects make up a significant portion of the diet, as the high protein content is essential for chick development."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
