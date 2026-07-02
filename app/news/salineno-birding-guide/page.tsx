import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sporophila_torqueola_55799290.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/salineno-birding-guide" },
  title: "Salineño: The Upper Rio Grande Valley's Best Birding Destination | South Texas Birds",
  description:
    "Salineño, Texas is one of the most productive and least-visited birding spots in the United States. This small community on the Rio Grande is the most reliable site in the U.S. for White-collared Seedeater and Ringed Kingfisher.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-30T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Guide",
    title: "Salineño: The Upper RGV's Best Birding Destination | South Texas Birds",
    description:
      "Salineño is the most reliable U.S. site for White-collared Seedeater and Ringed Kingfisher — and one of the most undervisited birding spots in the country.",
    images: [{ url: OG_IMAGE, alt: "White-collared Seedeater perched on cane stem" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "White-collared Seedeater", href: "/birds/white-collared-seedeater" },
  { name: "Ringed Kingfisher", href: "/birds/ringed-kingfisher" },
  { name: "Red-billed Pigeon", href: "/birds/red-billed-pigeon" },
  { name: "Altamira Oriole", href: "/birds/altamira-oriole" },
  { name: "Audubon's Oriole", href: "/birds/audubons-oriole" },
  { name: "Clay-colored Thrush", href: "/birds/clay-colored-thrush" },
  { name: "Green Kingfisher", href: "/birds/green-kingfisher" },
];

export default function SalinenovBirdingGuidePage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/news"
          className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#C77F4A" }}
        >
          ← All News
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <time
              dateTime="2026-06-30"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Guide", "Destination", "RGV"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(199,127,74,0.1)",
                  color: "#C77F4A",
                  border: "1px solid rgba(199,127,74,0.22)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug"
            style={{ color: "#0E6B6B" }}
          >
            Salineño: The Upper Rio Grande Valley&apos;s Best-Kept Birding Secret
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#5C5954" }}>
            A small community on the Rio Grande, 90 minutes northwest of McAllen — and the
            most reliable place in the United States to find White-collared Seedeater, Ringed
            Kingfisher, and a suite of species that most birders never see.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <div className="flex flex-wrap gap-2">
            {linkedSpecies.map((sp) => (
              <Link
                key={sp.href}
                href={sp.href}
                className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(14,107,107,0.08)",
                  color: "#0E6B6B",
                  border: "1px solid rgba(14,107,107,0.18)",
                }}
              >
                {sp.name}
              </Link>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Why Salineño?</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Most visitors to the Rio Grande Valley concentrate on the lower Valley — Bentsen,
              Santa Ana, Estero Llano Grande, South Padre Island. These are outstanding sites,
              but the upper Rio Grande corridor offers something different: a wilder, less
              developed stretch of river where the bird assemblage shifts subtly toward
              Mexican species that push north only this far.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Salineño Wildlife Preserve sits at a bend in the Rio Grande in Starr County,
              about 90 miles northwest of McAllen. The preserve comprises river-edge habitat
              maintained specifically for birding, with feeders, a canopy tower, and direct
              access to the riverbank cane and riparian woodland that hold the target species.
              Admission is modest (pay at the honor box) and crowds are minimal outside
              festival weekends.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The drive up Route 83 through Roma and Rio Grande City is itself productive —
              scan utility lines and open fields for Crested Caracara and White-tailed Hawk,
              and check resacas along the highway for Neotropic Cormorant and various herons.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>The Target Species</h2>

            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-serif text-lg font-bold mb-1" style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/white-collared-seedeater" className="hover:opacity-75 transition-opacity underline underline-offset-2">
                    White-collared Seedeater
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  This tiny finch is one of the most sought-after U.S. birds — present at
                  Salineño in small numbers year-round, but reliably detected only when singing
                  males perch atop cane stems along the riverbank during the breeding season
                  (May–August). The song is unmistakable: a rich, rolling warble that sounds
                  far too large to come from a bird the size of a large House Sparrow. Walk the
                  riverbank cane slowly, listen, and wait. When present, males often sing from the
                  same exposed stem for minutes at a stretch.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold mb-1" style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/ringed-kingfisher" className="hover:opacity-75 transition-opacity underline underline-offset-2">
                    Ringed Kingfisher
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  The largest kingfisher in the Americas — nearly the size of a small crow —
                  is a guaranteed find at Salineño year-round. These birds patrol the Rio Grande
                  with a distinctive loud, rattling call audible from a quarter-mile away.
                  They regularly perch on snags and low branches over the river, often staying
                  in place long enough for good observation. Their rusty-orange belly and
                  blue-gray upperparts make them easy to identify even in poor light.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold mb-1" style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/red-billed-pigeon" className="hover:opacity-75 transition-opacity underline underline-offset-2">
                    Red-billed Pigeon
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  This large, dark wine-colored pigeon is most reliably seen at Salineño
                  during the spring and summer breeding season. The canopy tower at the preserve
                  puts you at eye-level with the treetops where Red-billed Pigeons roost and
                  call — arrive early in the morning and you will likely hear their distinctive
                  deep hooting from the riverside woodland before you see them. Birds also
                  frequently fly over the river at dawn.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold mb-1" style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/audubons-oriole" className="hover:opacity-75 transition-opacity underline underline-offset-2">
                    Audubon&apos;s Oriole
                  </Link>{" "}
                  &amp;{" "}
                  <Link href="/birds/altamira-oriole" className="hover:opacity-75 transition-opacity underline underline-offset-2">
                    Altamira Oriole
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  Both oriole species occur at Salineño, and the feeders at the preserve often
                  attract one or both to eye-level views. Audubon&apos;s Oriole — the secretive,
                  yellow-bodied oriole of dense thornscrub — is far more easily seen here than
                  anywhere else in the U.S. The bright orange Altamira Oriole is equally
                  present and equally stunning. Spring (March–May) is peak season for both,
                  when males are actively singing and defending territories.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold mb-1" style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/green-kingfisher" className="hover:opacity-75 transition-opacity underline underline-offset-2">
                    Green Kingfisher
                  </Link>{" "}
                  &amp;{" "}
                  <Link href="/birds/clay-colored-thrush" className="hover:opacity-75 transition-opacity underline underline-offset-2">
                    Clay-colored Thrush
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  The tiny, bright-green Green Kingfisher is regularly seen along the riverbank
                  throughout the year — look for it on low perches just above the water surface,
                  often partially hidden in overhanging vegetation. The Clay-colored Thrush —
                  the national bird of Costa Rica, barely reaching the U.S. — has been recorded
                  with increasing frequency at Salineño in recent years and is possible any season.
                </p>
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>When to Go</h2>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "#0E6B6B" }}>May – August (Best for White-collared Seedeater)</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  The only window when White-collared Seedeaters are consistently singing and detectable. June is the single best month. Mornings only — arrive at dawn and be at the riverbank cane by first light.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "#0E6B6B" }}>March – May (Best for Orioles and Songbirds)</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  Spring sees peak singing activity for Audubon&apos;s Oriole, Altamira Oriole, Red-billed Pigeon, and most woodland species. Resident species are most vocal and conspicuous.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "#0E6B6B" }}>Year-round (Ringed and Green Kingfishers)</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  Both kingfisher species are permanent residents of the Rio Grande and can be found in any season. Winter visits (October–March) avoid the heat and the biting insects of summer — a real consideration at a riverside site.
                </p>
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Practical Tips</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Check eBird for recent White-collared Seedeater reports before making a dedicated trip — presence can be irregular year to year.",
                "Arrive at dawn. The first two hours after sunrise are the most productive for detecting all target species before heat and insects become a factor.",
                "Bring insect repellent May–September. The riverbank cane is beautiful but humid and buggy in summer.",
                "The preserve canopy tower is essential for Red-billed Pigeon views — bring binoculars rated for low-light performance.",
                "The drive from McAllen takes about 90 minutes. Combine with a stop in Roma (historic birding town on the Rio Grande) or a quick scan of roadside resacas on Route 83.",
                "Download the eBird app and check recent local sightings for real-time intel. The Salineño hotspot has an active observer community.",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-8 text-center"
            style={{ background: "#0E6B6B" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: "#EFE3CE" }}>
              Planning a South Texas Birding Trip?
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(239,227,206,0.8)" }}>
              Combine Salineño with the lower Valley for a complete Rio Grande birding experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/hotspots"
                className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: "#EFE3CE", color: "#0E6B6B" }}
              >
                All Hotspots
              </Link>
              <Link
                href="/news/south-texas-birding-calendar"
                className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: "rgba(239,227,206,0.15)", color: "#EFE3CE", border: "1px solid rgba(239,227,206,0.3)" }}
              >
                Birding Calendar
              </Link>
              <Link
                href="/birds"
                className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: "rgba(239,227,206,0.15)", color: "#EFE3CE", border: "1px solid rgba(239,227,206,0.3)" }}
              >
                All Species
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C77F4A" }}>More from South Texas Birds</p>
            <div className="flex flex-col gap-4">
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/south-texas-birding-calendar" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Birding Calendar: When to Go for Each Species</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/fall-hawk-migration-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Fall Hawk Migration: Broad-winged Kettles at Bentsen</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-2">
            <Link
              href="/news"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
              ← All News &amp; Conservation
            </Link>
          </div>
        </AnimateIn>

      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southtexasbirds.org" },
              { "@type": "ListItem", "position": 2, "name": "News & Conservation", "item": "https://southtexasbirds.org/news" },
              { "@type": "ListItem", "position": 3, "name": "Salineño Birding Guide", "item": "https://southtexasbirds.org/news/salineno-birding-guide" },
            ],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "datePublished": "2026-06-30T00:00:00Z",
            "dateModified": "2026-06-30T00:00:00Z",
            "url": "https://southtexasbirds.org/news/salineno-birding-guide",
            "headline": "Salineño: The Upper Rio Grande Valley's Best-Kept Birding Secret",
            "description": "Salineño, Texas is the most reliable U.S. site for White-collared Seedeater and Ringed Kingfisher. This complete guide covers the target species, when to go, and practical tips for visiting.",
            "image": OG_IMAGE,
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "about": [
              { "@type": "Thing", "name": "White-collared Seedeater" },
              { "@type": "Thing", "name": "Ringed Kingfisher" },
              { "@type": "Place", "name": "Salineño Wildlife Preserve", "address": { "@type": "PostalAddress", "addressLocality": "Salineño", "addressRegion": "TX", "addressCountry": "US" } },
            ],
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
                "name": "Where is Salineño, Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Salineño is a small community in Starr County, Texas, on the Rio Grande, about 90 miles northwest of McAllen. It is accessible via Route 83 north from Roma."
                }
              },
              {
                "@type": "Question",
                "name": "What birds can I see at Salineño?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Salineño is the most reliable U.S. site for White-collared Seedeater and Ringed Kingfisher. Other target species include Red-billed Pigeon, Altamira Oriole, Audubon's Oriole, Green Kingfisher, and Clay-colored Thrush."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to visit Salineño for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "May through August is best for White-collared Seedeater, when males sing persistently from riverbank cane. March through May is best for orioles and woodland species. Ringed Kingfisher and Green Kingfisher are present year-round. Winter (October–March) avoids summer heat and insects."
                }
              },
              {
                "@type": "Question",
                "name": "Is Salineño open to the public for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Salineño Wildlife Preserve is open to the public with a modest honor-box admission fee. The preserve has river access, feeders, and a canopy tower. No reservations are required."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
