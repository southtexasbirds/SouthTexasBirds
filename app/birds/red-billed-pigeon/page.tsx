import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/Patagioenas_flavirostris_-Costa_Rica-8.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/red-billed-pigeon" },
  title: "Red-billed Pigeon (Patagioenas flavirostris) | South Texas Birds",
  description:
    "Red-billed Pigeon identification, habitat, and where to find it in South Texas. A large, dark wine-colored pigeon of the Rio Grande corridor, best seen flying over the river at dawn from Bentsen SP.",
  openGraph: {
    type: "article",
    title: "Red-billed Pigeon | South Texas Birds",
    description: "Red-billed Pigeon identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Red-billed Pigeon perched in tropical forest" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Salineño Wildlife Preserve", region: "Salineño", href: "/hotspots#salineno" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
];

export default function RedBilledPigeonPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Rio Grande Valley · Year-round Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Red-billed Pigeon</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Patagioenas flavirostris &nbsp;·&nbsp; <span className="not-italic" lang="es">Paloma piquirroja</span></p>
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
            <Image src={PHOTO} alt="Red-billed Pigeon perched in tropical forest" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Patagioenas_flavirostris_-Costa_Rica-8.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Red-billed Pigeon is a large, dark, wine-colored pigeon of the Rio Grande
              riparian corridor — a tropical species that barely reaches the United States in
              South Texas. It is most reliably observed flying over the Rio Grande at dawn
              from Bentsen State Park&apos;s hawk watch platform, where birds cross the river
              in the early morning light before most other birders have arrived. Its deep,
              resonant cooing fills the river woodland in the early morning hours and is
              one of the characteristic sounds of the riparian zone.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large, stocky pigeon — noticeably bigger than a Rock Pigeon — with overall
              dark purplish-maroon or wine-red plumage. The back and wings are dark grayish-brown;
              the head, neck, and breast are the richest wine-red. The diagnostic feature is
              the bill: red or reddish-orange at the base, whitish at the tip. Eyes are orange-red.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, the large size and uniformly dark coloration distinguish it from all
              other pigeons and doves in the Valley. The cooing call — a deep, repeated
              <em> who-WHOOO-who</em> — is the most reliable way to confirm the species
              in dense canopy where birds are difficult to see.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In South Texas, Red-billed Pigeons occupy the tall riparian forest along the
              Rio Grande — cottonwood, willow, hackberry, and Texas ebony woodland that
              lines the river corridor. They require mature trees with a full canopy and
              avoid open or disturbed areas.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range is restricted to a narrow strip along the lower Rio Grande,
              primarily from Webb County east to Hidalgo County. The species is far more
              widespread in Mexico and through Central America south to Costa Rica.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Red-billed Pigeons are frugivores, feeding heavily on small fruits, berries,
              and seeds from trees and shrubs in the riparian canopy. They also consume
              grain and other plant material. Foraging occurs mainly in the upper canopy
              and mid-levels of tall trees.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              They build simple flat stick nests in trees, typically at moderate heights.
              The species is a year-round resident in South Texas and does not migrate,
              though some local movement occurs in response to food availability.
              Males call persistently throughout the breeding season from within the canopy.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>The hawk watch platform at Bentsen SP at dawn is the classic spot. Listen for the deep cooing from the canopy; scan the riverside trees at first light.</p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>April through September</strong> — Red-billed Pigeons are breeding-season residents of the riparian corridor along the Rio Grande. The classic strategy is to arrive at the <strong>Bentsen SP hawk watch platform before dawn</strong> and watch birds silhouetted against the brightening sky as they fly over the river. By mid-morning birds disappear into the canopy. The deep, repetitive coo is heard throughout the day from river-edge trees at Salineño and Santa Margarita Ranch.
            </p>
          </section>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Stable across its Latin American range. In South Texas, loss of mature
                riparian woodland along the Rio Grande is the main threat to the small
                U.S. population. Continued protection of riverside habitat at Bentsen,
                Santa Ana, and Salineño is essential.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Red-billed Pigeon is most reliably seen in South Texas not by searching
                the canopy — but by arriving at Bentsen SP&apos;s hawk watch platform before
                sunrise and watching birds fly over the river as they commute between roosting
                and feeding areas. The birds are often out of sight in the canopy by mid-morning.
              </p>
            </section>
          </AnimateIn>
        </div>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <Link href="/news/salineno-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
              <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Salineño: The Upper Rio Grande Valley&apos;s Best-Kept Birding Secret</span>
              <span className="text-sm" style={{ color: "#5C5954" }}>The canopy tower at Salineño Wildlife Preserve puts birders at eye level with the treetop roost areas that Red-billed Pigeons favor — one of the top tips in our complete Salineño guide.</span>
              <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
            </Link>
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
            "url": "https://southtexasbirds.org/birds/red-billed-pigeon",
            "headline": "Red-billed Pigeon (Patagioenas flavirostris) | South Texas Birds",
            "description": "Red-billed Pigeon identification, habitat, and where to find it in South Texas. A large, dark wine-colored pigeon of the Rio Grande corridor, best seen flying over the river at dawn from Bentsen SP.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Patagioenas_flavirostris_-Costa_Rica-8.jpg",
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
                "name": "What does a Red-billed Pigeon look like?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Red-billed Pigeon is a large, uniformly dark pigeon — the overall color is deep wine-purple or maroon-brown with slightly paler underparts, creating a rich monochrome appearance unlike any other pigeon in the area. The bill has a red base with a pale tip, and the eye-ring is red. In flight it appears very large and uniformly dark, distinguishable from doves by size and coloration."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I see a Red-billed Pigeon in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Red-billed Pigeon is only reliably found in the U.S. in the lower Rio Grande Valley of South Texas. The best site is the Bentsen-Rio Grande Valley State Park hawk watch platform, where birds can be watched flying over the river at dawn from April through September. Salineño Wildlife Preserve and canopy towers along the Rio Grande corridor are also productive."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Red-billed Pigeon common in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Red-billed Pigeon is uncommon and local in South Texas — it is a specialty of the lower Rio Grande Valley and is not found farther north or inland. It is present as a breeding visitor from April through September, wintering in Mexico. On good mornings at the Bentsen hawk watch, multiple birds can be seen flying along the river, but it is not guaranteed and the timing matters — dawn activity is much higher than midday."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to see a Red-billed Pigeon in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "April through August is the window, with May and June being peak breeding season. Dawn is the most productive time — birds are most active in the first two hours after sunrise, when they fly along the Rio Grande corridor between roost and feeding sites. The Bentsen SP hawk watch platform offers a clear view over the river for watching these flight movements."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
