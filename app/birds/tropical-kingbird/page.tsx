import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tropical_kingbird_%28Tyrannus_melancholicus%29.JPG";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/tropical-kingbird" },
  title: "Tropical Kingbird (Tyrannus melancholicus) | South Texas Birds",
  description:
    "Tropical Kingbird identification, habitat, and where to find it in the Rio Grande Valley. Nearly identical to Couch's Kingbird — the call is the key.",
  openGraph: {
    type: "article",
    title: "Tropical Kingbird | South Texas Birds",
    description: "Tropical Kingbird identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Tropical Kingbird perched on a branch" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
];

export default function TropicalKingbirdPage() {
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
            Rio Grande Valley · Uncommon Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Tropical Kingbird
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Tyrannus melancholicus &nbsp;·&nbsp; <span className="not-italic" lang="es">Tirano tropical</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Uncommon resident
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
            <Image src={PHOTO} alt="Tropical Kingbird perched on a branch, South Texas" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Tropical_kingbird_(Tyrannus_melancholicus).JPG" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Tropical Kingbird is a split-second identification challenge masquerading as a large yellow flycatcher.
              In the Rio Grande Valley it overlaps extensively with the virtually identical Couch&apos;s Kingbird, and
              the two species have puzzled birders since they were split into separate species in 1983. The call is the
              definitive separation: the Tropical gives a rapid, twittering pip-pip-pip, while the Couch&apos;s produces
              a rolling, nasal breeeer. Knowing this distinction is the price of admission to one of the more
              interesting identification problems in North American birding.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large, heavy-billed flycatcher (22 cm / 8.5 in) with a gray head, olive-green back, bright yellow
              underparts, and a dark, moderately notched tail. Nearly identical to Couch&apos;s Kingbird in all
              plumage features. The tail shape is the most-cited visual distinction: the Tropical has a slightly more
              notched tail with narrower outer feathers — both differences are subtle and variable enough to be
              unreliable in the field.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In practice, the call is definitive: the Tropical Kingbird gives a high, rapid twitter (pip-pip-pip-pip),
              while Couch&apos;s gives a drawn-out nasal breeer or breeert. Silent birds photographed without a
              recording are best logged as Tropical/Couch&apos;s Kingbird — an honest acknowledgment that the
              identification is unresolvable without the voice.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Open areas near water, woodland edges, roadsides, and towns — essentially the same broad habitat as
              Couch&apos;s Kingbird. In the Valley, the Tropical is considerably less common than Couch&apos;s and
              tends to favor areas closer to water or more open habitat near the river corridor.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range is essentially limited to South Texas as an uncommon resident and occasional visitor
              elsewhere along the Gulf Coast. The broader range is enormous — from Mexico and Central America through
              virtually all of South America to northern Argentina — making it one of the most widespread flycatchers
              in the world.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Catches insects in aerial sallies from exposed perches, much like other kingbirds. Aggressive toward
              intruding raptors, harassing hawks and falcons much larger than itself in swooping attacks near the
              nest. Diet is primarily flying insects, supplemented by some berries during certain seasons.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nesting in South Texas is less well documented than Couch&apos;s Kingbird; the species likely nests in
              open trees near water bodies. The best time to confirm identification is whenever the bird calls — which,
              fortunately, kingbirds do frequently and loudly throughout the day.
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
              <strong>April through October</strong> — Tropical Kingbirds are breeding-season visitors to South Texas, present from spring through fall. The difficulty is separating them from the very similar Couch&apos;s Kingbird, which is far more common: listen carefully for the distinctive call (a rapid, chittering trill vs. Couch&apos;s nasal <em>breeeer</em>). Check open perches near water and utility lines at Bentsen and Estero Llano Grande, and check eBird for recent sightings before visiting.
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
                Populations are stable across the enormous global range. In South Texas, the relatively small resident
                population makes any local habitat loss potentially significant. The species benefits from open areas
                near water — a habitat type that persists in the Valley&apos;s network of protected reserves.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Tropical Kingbird and Couch&apos;s Kingbird were considered a single species until 1983, when
                researchers showed they were genetically distinct with calls too different to be geographic variation.
                Even today, silent birds in South Texas are sometimes logged as &ldquo;Tropical/Couch&apos;s
                Kingbird&rdquo; by careful observers — an acknowledgment that some identification problems simply
                cannot be resolved without hearing the bird.
              </p>
            </section>
          </AnimateIn>
        </div>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <div className="flex flex-col gap-5">
              <Link href="/news/santa-ana-nwr-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Santa Ana National Wildlife Refuge: A Complete Birding Guide</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>Tropical Kingbirds perch conspicuously on wires and treetops throughout Santa Ana NWR — a complete guide to the Valley&apos;s most celebrated birding destination.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>The Tropical Kingbird reaches the U.S. only in South Texas — a large, bold flycatcher nearly identical to Couch&apos;s Kingbird whose presence on any Rio Grande Valley wire reliably triggers a pleasant identification puzzle.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

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
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/tropical-kingbird",
            "headline": "Tropical Kingbird (Tyrannus melancholicus) | South Texas Birds",
            "description": "Tropical Kingbird identification, habitat, and where to find it in the Rio Grande Valley. Nearly identical to Couch's Kingbird — the call is the key.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tropical_kingbird_%28Tyrannus_melancholicus%29.JPG",
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
                "name": "How do you tell a Tropical Kingbird from a Couch's Kingbird?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tropical and Couch's Kingbirds are essentially identical in plumage — both large yellow-breasted kingbirds with olive-gray backs and dark tails. The call is the definitive identification: the Tropical Kingbird gives a rapid, twittering 'pit-pit-pit-pitter' while Couch's gives a louder, raspier 'breeeer' or 'breeeer-breeeer.' A silent bird in South Texas is best logged as 'Tropical/Couch's Kingbird.' In the Valley, Couch's is far more common as a resident; Tropical is primarily a spring-fall visitor."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Tropical Kingbird common in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Tropical Kingbird is uncommon to rare in South Texas — much less common than the resident Couch's Kingbird. It is more often encountered as a migrant during spring and fall. A small number breed in the Valley, particularly near the coast. The near-identical appearance to Couch's Kingbird means that many go undetected without careful attention to vocalizations."
                }
              },
              {
                "@type": "Question",
                "name": "When were Tropical and Couch's Kingbirds split as separate species?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tropical and Couch's Kingbirds were considered a single species until 1983, when researchers demonstrated they were genetically distinct with consistently different vocalizations — the contact call being the most reliable difference. They were split by the AOU in 1983. Even today some observers log silent birds as 'Tropical/Couch's Kingbird' to acknowledge the genuine identification difficulty."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I see a Tropical Kingbird in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Tropical Kingbird is most likely encountered along the coast in fall — South Padre Island, Port Isabel, and the Brownsville area are the most productive sites. During breeding season, check riparian areas near the Rio Grande with open perches over water. The best approach is to listen for the distinctive twittering call among kingbirds in areas where both Tropical and Couch's might occur."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
