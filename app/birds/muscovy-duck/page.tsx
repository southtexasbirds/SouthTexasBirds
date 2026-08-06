import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO = "/images/birds/muscovy-duck.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/muscovy-duck" },
  title: "Muscovy Duck (Cairina moschata) | South Texas Birds",
  description:
    "Wild Muscovy Duck identification, habitat, and where to find it in the Rio Grande Valley — and how to tell it apart from the feral park birds. Salineño is the most reliable U.S. site.",
  openGraph: {
    type: "article",
    title: "Muscovy Duck | South Texas Birds",
    description: "Wild Muscovy Duck identification, habitat, and where to find it in the Rio Grande Valley — and how to tell it apart from the feral park birds.",
    images: [{ url: "https://southtexasbirds.org/images/og-default.jpg", alt: "Wild Muscovy Duck showing dark iridescent plumage and white wing patch" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Salineño Wildlife Preserve", region: "Salineño", href: "/hotspots#salineno" },
  { name: "Falcon Dam area", region: "Starr / Zapata County", href: "/hotspots" },
];

export default function MuscovyDuckPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
          ← All Species
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>
            Rio Grande Valley · Rare Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Muscovy Duck
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Cairina moschata &nbsp;·&nbsp; <span className="not-italic" lang="es">Pato real</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Rare resident
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Wild Muscovy Duck showing dark iridescent plumage and white wing patch, on a riverbank" fill priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Muscovy_Duck_(Cairina_moschata)_male_(29039391935).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
              Wikimedia Commons
            </a>
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Mention &ldquo;Muscovy Duck&rdquo; to most Texans and they picture the warty, black-and-white bird
              waddling around a city park pond — but that familiar feral bird is a heavily domesticated descendant,
              not what birders count. The true wild Muscovy Duck is a genuinely rare U.S. bird, barely reaching the
              country along a short stretch of the Rio Grande in Starr County. Dark, glossy, and shy of people, it
              perches and roosts in trees overhanging the river rather than loafing on park ponds. Salineño Wildlife
              Preserve is by far the most reliable place in the United States to see one — scan the river from the
              riverbank at dawn, when birds are most active moving between roosting and feeding areas.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large (66–84 cm / 26–33 in), long-necked duck. Wild-type birds are almost entirely dark: blackish
              plumage with a bottle-green and bronze iridescent sheen, set off by a bold white patch on the upper
              wing coverts that flashes in flight and is often visible at rest. The bare facial skin is limited to a
              small patch of dull red or blackish skin around the eye and the base of the bill — nothing like the
              swollen, bright-red, wart-covered face of the familiar feral bird.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>The identification challenge is really a distinction, not a search:</strong> the pied
              black-and-white or all-white feral birds seen on resacas and park ponds throughout the Valley are the
              same species, but selectively bred over centuries and countable only as domestic escapees, not wild
              birds. A dark bird with a modest facial patch, seen along the river itself rather than a city pond, is
              the one worth getting excited about.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Wooded stretches of the Rio Grande with large trees overhanging the water — the species nests in tree
              cavities and roosts in the canopy, unlike most ducks. It rarely strays far from the river corridor
              itself.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The naturally occurring wild population barely reaches the U.S., limited to a short reach of the Rio
              Grande in Starr County. The broader wild range extends from Mexico south through Central America and
              into South America, where it is common and widespread — the rarity here is purely a matter of the
              U.S. sitting at the extreme northern edge of the species&apos; range.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              An unusually capable percher for a duck, with strong claws that let it grip bark and branches — it
              spends much of the day loafing or roosting in trees along the river rather than swimming in the open.
              Forages by dabbling and grazing for aquatic plants, seeds, and small aquatic animals, typically at the
              water&apos;s edge or in shallows near cover.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Generally quiet and wary of people, flushing well before most other waterfowl. Most active at dawn and
              dusk, when birds move between riverside roost trees and feeding areas — the best window for spotting
              one from the bank.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>Where to See in South Texas</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {spots.map((spot) => (
                <Link key={spot.name} href={spot.href} className="flex items-center gap-3 rounded-lg px-4 py-3 transition-opacity hover:opacity-80" style={{ background: "#F7F0E4", borderLeft: "3px solid #C77F4A" }}>
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
              <strong>Year-round, best at dawn.</strong> Wild Muscovy Ducks are present along the Salineño stretch
              of the Rio Grande throughout the year, with no strong seasonal pattern, but they are most active and
              easiest to catch in the open early in the morning before the day heats up. Stand at the riverbank and
              scan both the water and the overhanging trees on both banks — including the Mexican side, where the
              same population ranges freely. As with any rare, localized bird, check eBird for recent reports before
              a special trip.
            </p>
          </section>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Globally secure — the species is common and widespread through the Neotropics, and the IUCN rates it
                Least Concern. The U.S. population is a tiny, geographically marginal outlier with no formal listing
                of its own, but it faces a quieter threat: as feral domestic-type Muscovy Ducks spread through Texas
                towns and parks, keeping the wild river population genetically and behaviorally distinct becomes
                harder to track over time.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Every park-pond Muscovy Duck in Texas — and every farmyard Muscovy raised for meat worldwide — is
                descended from this same wild species, domesticated by Indigenous peoples in South America long
                before European contact. It is one of only two duck lineages ever domesticated (the other being the
                Mallard, ancestor of virtually every other domestic duck breed), which makes the truly wild,
                undomesticated form on the Rio Grande a genuinely different bird from the one most people picture.
              </p>
            </section>
          </AnimateIn>
        </div>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link href="/birds" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
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
            "datePublished": "2026-08-06",
            "dateModified": "2026-08-06",
            "url": "https://southtexasbirds.org/birds/muscovy-duck",
            "headline": "Muscovy Duck (Cairina moschata) | South Texas Birds",
            "description": "Wild Muscovy Duck identification, habitat, and where to find it in the Rio Grande Valley — and how to tell it apart from the feral park birds. Salineño is the most reliable U.S. site.",
            "image": "https://southtexasbirds.org/images/birds/muscovy-duck.webp",
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
                "name": "Is the Muscovy Duck rare in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The truly wild Muscovy Duck is rare in the U.S. — the naturally occurring population barely reaches the country along a short stretch of the Rio Grande in Starr County, Texas. Feral, domesticated-type Muscovy Ducks are common in city parks throughout Texas and much of the southern U.S., but those pied, warty-faced birds are not counted as wild sightings by birders. Salineño Wildlife Preserve is the most reliable U.S. site for the genuine wild bird."
                }
              },
              {
                "@type": "Question",
                "name": "How do you tell a wild Muscovy Duck from a feral or domestic one?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wild-type Muscovy Ducks are almost entirely dark — glossy blackish-green plumage with a bold white wing patch — and show only a small patch of red or blackish bare skin around the eye and bill base. Feral and domestic birds, the kind seen on park ponds, are usually pied black-and-white or all-white with large, swollen, bright red warty caruncles covering much of the face. Location matters too: wild birds stick to the river itself, not park ponds or resacas in town."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I find a wild Muscovy Duck in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Salineño Wildlife Preserve, on the banks of the Rio Grande west of Falcon Lake, is by far the most reliable U.S. site — scan the river and the overhanging trees on both banks from the riverbank, ideally at dawn. The broader Falcon Dam area downstream is a secondary spot worth checking. The species does not occur away from the immediate river corridor in the U.S."
                }
              },
              {
                "@type": "Question",
                "name": "Is the park-pond Muscovy Duck the same species as the wild one?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — every feral and farmyard Muscovy Duck is the same species as the wild river bird, domesticated in South America long before European contact and since bred into the pied, warty-faced forms seen worldwide today. The wild, undomesticated form found along the Rio Grande looks and behaves quite differently from its feral descendants."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
