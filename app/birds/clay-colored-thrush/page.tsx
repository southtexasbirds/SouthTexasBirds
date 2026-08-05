import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO = "/images/birds/clay-colored-thrush.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/clay-colored-thrush" },
  title: "Clay-colored Thrush (Turdus grayi) | South Texas Birds",
  description:
    "Clay-colored Thrush identification, habitat, and where to find it in the Rio Grande Valley. The national bird of Costa Rica has established a small breeding population in South Texas.",
  openGraph: {
    type: "article",
    title: "Clay-colored Thrush | South Texas Birds",
    description: "Clay-colored Thrush identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: "https://southtexasbirds.org/images/og-default.jpg", alt: "Clay-colored Thrush perched in vegetation" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function ClayColoredThrushPage() {
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
            Clay-colored Thrush
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Turdus grayi &nbsp;·&nbsp; <span className="not-italic" lang="es">Zorzal pardo</span>
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
            <Image src={PHOTO} alt="Clay-colored Thrush perched showing warm brown plumage" fill priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Clay-coloured_thrush_(Turdus_grayi_casius)_2.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Clay-colored Thrush is the national bird of Costa Rica — a plain, warm brown thrush with a
              magnificent voice. It has established a small breeding population in the Lower Rio Grande Valley,
              primarily around Bentsen SP and Quinta Mazatlán, having spread north from Mexico. To a casual observer
              it resembles a washed-out American Robin; to a birder, it is a genuinely exciting find — a neotropical
              species that has colonized the United States within living memory. The rich, melodious song — a series
              of rising and falling phrases repeated with unhurried confidence — is one of the finest thrush songs
              in the Americas.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large thrush (23–27 cm / 9–10.5 in) with uniformly warm brown-gray upperparts, paler brown underparts,
              a buffy-white throat with faint brown streaking, and a yellowish-green bill. No bold markings anywhere —
              the overall impression is of a robustly built, plain brown bird. The eye is reddish-brown.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Closest in appearance to an American Robin with the rust stripped off. The robin has an orange breast;
              the Clay-colored Thrush is uniformly warm brown below. The yellowish-green bill (not yellow-orange
              like the robin&apos;s) is the most useful mark at a glance. The song — heard most often in spring and
              early summer mornings — is the most reliable identification cue.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Gardens, woodland edges, riparian forest, and dense thornscrub in the Rio Grande Valley. The species
              is closely associated with areas of shade and fruiting trees in both wild and urban settings — it
              adapts remarkably well to suburban parks and residential gardens. Bentsen SP and Quinta Mazatlán,
              with their mature tree canopy, are the most reliable sites.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Native range is from Mexico through Central America to Colombia. First recorded breeding in Texas in
              the 1990s; now a rare but annual resident in the Valley, with the breeding population slowly growing.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Forages on the ground for earthworms, insects, and small fruits, often hopping through leaf litter in
              the manner of a typical thrush. Diet is strongly seasonal: invertebrates dominate in spring and summer;
              fruit (figs, berries, and other soft fruits) becomes important in fall and winter. Bold and confiding
              in gardens where it is not disturbed.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The song is typically delivered from a concealed or elevated perch in the canopy, often in the hour
              after dawn and sometimes continuing through the morning. The song season extends from late winter
              through early summer in South Texas.
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
              <strong>Winter (November through March)</strong> is when Clay-colored Thrushes are most reliably found in South Texas as rare visitors, though records occur in any month. The species is an established breeding resident in the Brownsville area and at Quinta Mazatlán, where a small population has taken hold. Check recent eBird reports for current sightings. The Brownsville cemetery and the grounds of Quinta Mazatlán are the most historically reliable spots for the small local breeding group.
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
                Abundant and expanding throughout its range, benefiting from its adaptability to human-modified
                landscapes. In South Texas, the small breeding population is slowly increasing as birds colonize
                suitable habitat in parks and residential areas with mature trees. Conservation of riparian woodland
                and urban green spaces benefits the species.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Clay-colored Thrush is the national bird of Costa Rica — not because it is particularly colorful
                or rare, but because it is ubiquitous and beloved, its rich song woven into the soundscape of every
                Costa Rican town and village. Costa Ricans chose it for the very quality that birders in South Texas
                appreciate: that extraordinary voice pouring from an inconspicuous brown bird. In both places, you
                hear it before you see it.
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
                <span className="text-sm" style={{ color: "#5C5954" }}>The Clay-colored Thrush has established a breeding population around Santa Ana NWR and Mission — a complete guide to the Rio Grande Valley&apos;s most species-rich reserve.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
              <Link href="/news/salineno-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Salineño: The Upper Rio Grande Valley&apos;s Best-Kept Birding Secret</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>Salineño is one of the best U.S. sites for the Clay-colored Thrush — this quiet species reaches the U.S. only along the Rio Grande, where its rich, flute-like song drifts from riverside woodland.</span>
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
            "url": "https://southtexasbirds.org/birds/clay-colored-thrush",
            "headline": "Clay-colored Thrush (Turdus grayi) | South Texas Birds",
            "description": "Clay-colored Thrush identification, habitat, and where to find it in the Rio Grande Valley. The national bird of Costa Rica has established a small breeding population in South Texas.",
            "image": "https://southtexasbirds.org/images/birds/clay-colored-thrush.webp",
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
                "name": "Is the Clay-colored Thrush the national bird of Costa Rica?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the Clay-colored Thrush (Turdus grayi) is the national bird of Costa Rica, known locally as the 'Yigüirro.' It was chosen not for its appearance (it is a plain brown bird) but for its extraordinary song and its near-ubiquity across every Costa Rican landscape. Its rich, melodic call is woven into Costa Rican culture and marks the beginning of the rainy season."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Clay-colored Thrush rare in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Clay-colored Thrush is rare but increasing in South Texas. It began breeding in the lower Rio Grande Valley in the 1990s and has slowly expanded as a small resident population. It is never numerous or guaranteed, but regular sightings occur at nature reserves in the McAllen and Brownsville areas. Check eBird for recent reports — it is most reliably found at sites where it is regularly recorded."
                }
              },
              {
                "@type": "Question",
                "name": "What does a Clay-colored Thrush look like?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Clay-colored Thrush is a plain, uniformly clay-brown thrush — the entire bird is warm brown above and buffy-brown below, with no streaking, spotting, or contrasting colors. The bill is yellowish-green, the eye ring is narrow and pale. It looks like a washed-out American Robin (a close relative) with no reddish-orange breast. The song — a rich, rolling series of melodic phrases — is far more distinctive than the plumage."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I see a Clay-colored Thrush in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Clay-colored Thrushes in South Texas are most reliably found in the McAllen and Brownsville areas, where the resident breeding population is concentrated. Quinta Mazatlán in McAllen is one of the most consistent sites. The species favors dense riparian woodland and shaded gardens with tall trees and dense undergrowth. Singing males in spring are the most reliable cue — the robin-like song carrying from dense vegetation."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
