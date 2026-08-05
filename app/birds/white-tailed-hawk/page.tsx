import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO = "/images/birds/white-tailed-hawk.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/white-tailed-hawk" },
  title: "White-tailed Hawk (Geranoaetus albicaudatus) | South Texas Birds",
  description:
    "White-tailed Hawk identification, habitat, and where to find it in South Texas. A large, striking raptor found in the U.S. only along the Texas Gulf Coast prairie.",
  openGraph: {
    type: "article",
    title: "White-tailed Hawk | South Texas Birds",
    description: "White-tailed Hawk identification, habitat, and where to find it in South Texas.",
    images: [{ url: "https://southtexasbirds.org/images/og-default.jpg", alt: "White-tailed Hawk perched showing white tail and rusty shoulders" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Coastal prairie roads, Cameron & Willacy counties", region: "Coastal Bend", href: "/hotspots" },
];

export default function WhiteTailedHawkPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Texas Gulf Coast · Year-round Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>White-tailed Hawk</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Geranoaetus albicaudatus &nbsp;·&nbsp; <span className="not-italic" lang="es">Aguililla coliblanca</span></p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>Resident</span>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="White-tailed Hawk perched showing white tail and rusty shoulders" fill priority className="object-cover" style={{ objectPosition: "50% 20%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Buteo_albicaudatus_-Salvador_Zoo,_Ondina,_Salvador,_Bahia,_Brasil-8a.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The White-tailed Hawk is one of the most handsome raptors in North America, and
              South Texas is the only place in the United States where it can be reliably found.
              A large, powerful buteo of open coastal prairie, it is a conspicuous presence on
              utility poles and fence posts across the brushy grasslands between Corpus Christi
              and the Rio Grande — soaring overhead on long, broad wings with the diagnostic
              clean white tail clearly visible.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Adults are striking: clean white underparts, dark gray back and wings, a bold
              rusty-red patch on the shoulder (scapulars), and a clean white tail with a single
              narrow black subterminal band. The wings are long and pointed for a buteo, angled
              back at the wrist in a distinctive kite-like posture when soaring. The face and
              chest are white, contrasting sharply with the dark upperparts.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Immature birds are variable and go through several plumage stages over three
              years — typically dark brown or blackish with a pale chest patch and showing
              the white tail early. The rusty shoulder patch is usually visible even in
              young birds. At all ages, the long wings and clean white tail are the most
              reliable field marks.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              White-tailed Hawks are birds of open country — coastal prairie, brushy grassland,
              and savanna with scattered shrubs and trees for perching. In South Texas they are
              most abundant in the coastal prairie zone of Cameron, Willacy, and Kenedy counties,
              where flat grasslands and low brush provide ideal hunting habitat.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range is essentially restricted to coastal Texas, from the Corpus Christi
              area south to the Rio Grande. The species is more widespread in Mexico, Central
              America, and South America, where it inhabits a variety of open and semi-open
              lowland habitats.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              An opportunistic predator of open country, the White-tailed Hawk takes small
              mammals, rabbits, snakes, lizards, large insects, and birds. One notable
              behavior: they are attracted to grass fires, gathering to catch fleeing prey
              at the fire&apos;s edge — a habit shared with some African raptors and a few
              other species.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              They build large stick nests in low trees, shrubs, or yucca, typically 5–15
              feet off the ground. Pairs are monogamous and tend to reuse the same nest site
              across years. Breeding occurs from February through June; clutch size is
              typically two eggs.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Scan utility poles and fence posts along coastal prairie roads. In flight, the white tail and long angled wings are visible from a great distance.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Stable across its range. In South Texas, conversion of native coastal prairie
                to agriculture and development is the primary local threat. The species adapts
                reasonably well to lightly farmed landscapes but depends on open habitat with
                available prey and nest sites.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                White-tailed Hawks are known to congregate around grass fires — sometimes dozens
                of birds — to catch small animals fleeing the flames. This fire-following behavior
                is well documented and makes them one of the few North American raptors to
                actively exploit wildfires as a hunting opportunity.
              </p>
            </section>
          </AnimateIn>
        </div>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <div className="flex flex-col gap-5">
              <Link href="/news/south-texas-raptor-specialties" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>The White-tailed Hawk is found in the United States only on South Texas coastal prairie — a large, handsome buteo with a snow-white tail and a habit of following grass fires to hunt fleeing prey.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
              <Link href="/news/fall-hawk-migration-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>South Texas Fall Hawk Migration: Broad-winged Kettles at Bentsen</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>White-tailed Hawks are year-round residents of South Texas coastal prairie — a striking permanent backdrop to the tens of thousands of migrating raptors that pass through each fall.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link href="/birds" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← Browse all South Texas species</Link>
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
            "url": "https://southtexasbirds.org/birds/white-tailed-hawk",
            "headline": "White-tailed Hawk (Geranoaetus albicaudatus) | South Texas Birds",
            "description": "White-tailed Hawk identification, habitat, and where to find it in South Texas. A large, striking raptor found in the U.S. only along the Texas Gulf Coast prairie.",
            "image": "https://southtexasbirds.org/images/birds/white-tailed-hawk.webp",
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
                "name": "Where is the only place in the United States to see a White-tailed Hawk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In the United States, the White-tailed Hawk is found only along the Texas Gulf Coast, from Corpus Christi south through the lower Rio Grande Valley. It favors open coastal prairie and agricultural land. The King Ranch, Laguna Atascosa NWR, and the prairie roads of Willacy and Kenedy counties are among the most reliable sites."
                }
              },
              {
                "@type": "Question",
                "name": "How do you identify a White-tailed Hawk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Adults are gray above and white below, with bright rufous shoulder patches and a short white tail with a dark subterminal band. In flight the combination of white belly, rufous shoulders, and short white tail is distinctive. Immatures are dark brown and can be confusing, but the white tail base is usually visible even on young birds."
                }
              },
              {
                "@type": "Question",
                "name": "Is the White-tailed Hawk a buteo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the White-tailed Hawk is a large buteo — formerly placed in the genus Buteo (as Buteo albicaudatus) and now reclassified to Geranoaetus. It is one of the largest buteos in North America, with a wingspan of 50–55 inches. In soaring flight, the broad wings and relatively short tail are typical of the buteo shape."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to see a White-tailed Hawk in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "White-tailed Hawks are year-round residents of the Texas Gulf Coast prairie and can be seen in any season. They are most visible when soaring on thermals in warm weather and during grassland fires, which concentrate prey. Drive rural roads in Cameron, Willacy, and Kenedy counties and scan open fields and fence posts."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
