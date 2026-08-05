import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/laguna-atascosa-birding-guide" },
  title: "Laguna Atascosa NWR: A Complete Birding Guide | South Texas Birds",
  description:
    "Laguna Atascosa National Wildlife Refuge is the largest protected area in the Rio Grande Valley — home to the Aplomado Falcon, ocelot, and over 400 bird species. A complete guide to birding South Texas's most species-rich refuge.",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-01T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Destination Guide",
    title: "Laguna Atascosa NWR: A Complete Birding Guide",
    description:
      "The largest protected area in the Rio Grande Valley hosts Aplomado Falcons, White-tailed Hawks, Roseate Spoonbills, and over 400 species. Here is how to bird it.",
    images: [{ url: OG_IMAGE, alt: "Coastal prairie and lagoon at Laguna Atascosa NWR" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Aplomado Falcon", href: "/birds/aplomado-falcon" },
  { name: "White-tailed Hawk", href: "/birds/white-tailed-hawk" },
  { name: "White-tailed Kite", href: "/birds/white-tailed-kite" },
  { name: "Roseate Spoonbill", href: "/birds/roseate-spoonbill" },
  { name: "Tricolored Heron", href: "/birds/tricolored-heron" },
  { name: "Piping Plover", href: "/birds/piping-plover" },
  { name: "Mottled Duck", href: "/birds/mottled-duck" },
  { name: "Neotropic Cormorant", href: "/birds/neotropic-cormorant" },
];

export default function LagunaAtascosaBirdingGuidePage() {
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
              dateTime="2026-07-01"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              July 2026
            </time>
            {["Destination Guide", "Raptors", "RGV"].map((tag) => (
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
            Laguna Atascosa NWR: A Complete Birding Guide
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            At 97,000 acres, Laguna Atascosa National Wildlife Refuge is the largest protected
            tract of native habitat in the Rio Grande Valley — and one of the most
            biologically diverse places in the United States. More than 400 bird species have
            been recorded here, from reintroduced Aplomado Falcons hunting over coastal prairie
            to White-tailed Hawks riding thermals above mesquite savanna to Roseate Spoonbills
            wading the shallow lagoons at dusk. This is the complete guide to birding it.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Why Laguna Atascosa Is Different
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Most of the famous South Texas birding sites — Santa Ana NWR, Bentsen SP, Estero
              Llano Grande — are relatively small patches of riparian woodland that excel at
              producing the Valley&apos;s signature thornscrub and canopy species. Laguna Atascosa
              is different in scale and habitat diversity. It encompasses coastal prairie, salt
              marsh, resacas (oxbow lakes), Tamaulipan thornscrub, mesquite savanna, tidal flats,
              and open water — all within one refuge boundary.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              That breadth means the species list is correspondingly vast: the thornscrub-dependent
              species of inland sites, the shorebirds and wading birds of the coast, the raptors
              of open prairie, and winter sparrow flocks of a size rarely seen anywhere else in
              Texas. The refuge also protects the ocelot — fewer than 80 remain in the U.S.,
              almost all on Laguna Atascosa and its neighboring ranches.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Aplomado Falcon: Laguna Atascosa&apos;s Conservation Story
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/aplomado-falcon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Aplomado Falcon</Link>
              {" "}was extirpated from Texas by the 1950s, a victim of habitat loss and
              DDT. Beginning in 1993, the Peregrine Fund released captive-bred birds on the
              Laguna Atascosa coastal prairie. Today, established pairs breed at the refuge and
              along the adjacent barrier island, making this the most reliable location in the
              United States to see this Federally Endangered falcon in the wild.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to look:</strong> The Bayside Drive auto tour loop (7 miles, open
              dawn to dusk) is the best single route. Aplomado Falcons regularly perch on
              yucca stalks, fence posts, and native shrubs along the coastal prairie sections.
              October through March offers the most open visibility, before spring grass growth
              obscures the prairie floor.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Raptors of the Coastal Prairie
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Laguna Atascosa&apos;s open coastal prairie is one of the best places in the United
              States to see multiple raptor specialties in a single morning drive. Along with the
              Aplomado Falcon, the refuge regularly hosts:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <strong style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/white-tailed-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tailed Hawk</Link>
                </strong>{" "}
                — a large, striking buteo of coastal prairie, soaring over the refuge&apos;s open
                grassland year-round. The bold black wing pattern and snow-white tail are
                unmistakable in flight.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/white-tailed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tailed Kite</Link>
                </strong>{" "}
                — the ghostly white kite that hovers motionless over open fields, dropping
                on rodents like a miniature harrier. Often seen in numbers along the entrance
                road and Bayside Drive in dawn and dusk hours.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>Crested Caracara</strong> — on any fence
                post, pole, or large shrub throughout the refuge, year-round.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>Harris&apos;s Hawk</strong> — in mesquite
                savanna groups; watch for cooperative family units perching together on tall
                dead trees.
              </li>
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Wading Birds and Waterbirds
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The shallow lagoons and resacas of Laguna Atascosa host some of the most
              spectacular concentrations of wading birds in South Texas. Along Bayside Drive
              and the Lakeside Drive loop, expect:
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              <strong>Roseate Spoonbill</strong> — in groups feeding along the lagoon margins,
              their pink and coral plumage vivid against the green water. Most abundant April
              through August.{" "}
              <strong>Tricolored Heron</strong> — hunting in the shallows alongside Great Blue
              and Little Blue Herons.{" "}
              <strong>Reddish Egret</strong> — performing its distinctive lurching, wing-spreading
              display as it chases fish in tidal shallows. Both white and dark morphs occur.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <Link href="/birds/mottled-duck" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Mottled Ducks</Link>
              {" "}breed at the refuge, with pairs visible in resacas throughout the year.{" "}
              <Link href="/birds/neotropic-cormorant" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Neotropic Cormorants</Link>
              {" "}roost communally in trees overhanging the lagoons.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Shorebirds and Coastal Species
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The tidal flats adjacent to the refuge, accessible from the Mesquite Trail and
              points along FM 106, are among the most important shorebird habitats in the
              lower Laguna Madre. The refuge protects nationally significant numbers of
              wintering{" "}
              <Link href="/birds/piping-plover" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Piping Plovers</Link>
              {" "}(Federally Threatened) along with Snowy Plover, American Avocet, Long-billed
              Curlew, and a full suite of migrant sandpipers from July through October.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The beach and dune areas near Boca Chica (south of the refuge) extend the
              shorebird habitat and are worth checking for rarer species including Red Knot
              and Buff-breasted Sandpiper during fall migration.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Three Routes: How to Bird Laguna Atascosa
            </h2>
            <ol className="text-sm leading-relaxed space-y-4 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <strong style={{ color: "#0E6B6B" }}>1. Bayside Drive Auto Tour (7 miles, dawn–dusk)</strong>
                {" "}— The most reliable route for Aplomado Falcon, White-tailed Hawk, White-tailed
                Kite, Roseate Spoonbill, and Reddish Egret. Best driven slowly at dawn.
                Stop at the Osprey Overlook for a panoramic view of Laguna Madre.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>2. Lakeside Drive (4.5 miles, paved)</strong>
                {" "}— Passes through mesquite savanna before reaching the lagoon. Good for
                Harris&apos;s Hawk, Crested Caracara, and winter sparrows (LeConte&apos;s, Sprague&apos;s Pipit).
                The Pelican Lake area at the end concentrates wading birds.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>3. Moranco Pond / Visitor Center Area (walking trails)</strong>
                {" "}— The pond near the visitor center is a reliable waterbird spot — teal, herons,
                and shorebirds use it in season. The Paisano Trail through thornscrub can produce
                Ferruginous Pygmy-Owl and other brush species.
              </li>
            </ol>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              When to Go
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Laguna Atascosa rewards visits in every season, but each period offers different
              highlights:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-none" style={{ color: "#4E4B46" }}>
              <li><strong style={{ color: "#0E6B6B" }}>October–March:</strong> Best for Aplomado Falcon visibility, winter sparrows (Le Conte&apos;s, Grasshopper, Sprague&apos;s Pipit in open prairie), Piping Plovers on the tidal flats, and large numbers of ducks on the lagoons.</li>
              <li><strong style={{ color: "#0E6B6B" }}>April–June:</strong> Breeding season — Roseate Spoonbills are most vivid, wading birds active at nesting colonies, and spring migrants moving through the coastal prairie.</li>
              <li><strong style={{ color: "#0E6B6B" }}>July–September:</strong> Early shorebird migration begins in July; White-tailed Hawks are easier to find in open prairie before grass grows tall. Hot but productive for coastal species.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4E4B46" }}>
              <strong>Practical notes:</strong> The refuge is open year-round, dawn to dusk.
              No entrance fee. The Visitor Center is open daily (hours vary — check the refuge
              website). Bring water, sunscreen, and insect repellent in summer. A spotting
              scope is useful for Aplomado Falcons at distance.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
              Species Profiles
            </h2>
            <div className="flex flex-wrap gap-2">
              {linkedSpecies.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
                  style={{ background: "#0E6B6B", color: "#EFE3CE" }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C77F4A" }}>More from South Texas Birds</p>
            <div className="flex flex-col gap-4">
              <Link href="/news/south-texas-raptor-specialties" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/fall-shorebird-season-south-padre" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Fall Shorebird Season at South Padre Island: Piping Plovers and More</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/spacex-refuge-land-exchange" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>SpaceX Land Exchange Threatens Rio Grande Wildlife Corridor</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link
              href="/news"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
              ← All News
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
              { "@type": "ListItem", "position": 2, "name": "News", "item": "https://southtexasbirds.org/news" },
              { "@type": "ListItem", "position": 3, "name": "Laguna Atascosa NWR Birding Guide" },
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
            "url": "https://southtexasbirds.org/news/laguna-atascosa-birding-guide",
            "headline": "Laguna Atascosa NWR: A Complete Birding Guide",
            "description": "Laguna Atascosa National Wildlife Refuge is the largest protected area in the Rio Grande Valley — home to the Aplomado Falcon, ocelot, and over 400 bird species. A complete guide to birding South Texas's most species-rich refuge.",
            "image": OG_IMAGE,
            "datePublished": "2026-07-01",
            "dateModified": "2026-07-01",
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "keywords": ["Laguna Atascosa", "birding Laguna Atascosa", "Aplomado Falcon Texas", "South Texas coast birds", "Rio Grande Valley wildlife refuge"],
            "articleSection": "Destination Guide"
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
                "name": "What birds can I see at Laguna Atascosa NWR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Over 400 bird species have been recorded at Laguna Atascosa NWR. Highlights include the reintroduced Aplomado Falcon (Federally Endangered, most reliable U.S. viewing site), White-tailed Hawk, White-tailed Kite, Harris's Hawk, Crested Caracara, Roseate Spoonbill, Reddish Egret, Tricolored Heron, Mottled Duck, Piping Plover, and a full range of migrant shorebirds. In winter, the refuge hosts large sparrow flocks including LeConte's and Henslow's Sparrows."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Laguna Atascosa NWR and how do I get there?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Laguna Atascosa National Wildlife Refuge is located in Cameron County, Texas, approximately 25 miles north of Brownsville. The main entrance is on FM 106 east of Rio Hondo. The Visitor Center is at the end of the entrance road. The refuge is about an hour's drive from the McAllen/Brownsville area."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the best place to see the Aplomado Falcon at Laguna Atascosa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Bayside Drive auto tour loop (7 miles, open dawn to dusk, no fee) is the most reliable route for Aplomado Falcon at Laguna Atascosa NWR. The birds regularly perch on yucca stalks, fence posts, and native shrubs along the coastal prairie sections of this drive. October through March is the best season, when low vegetation provides clear views across the open prairie."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to visit Laguna Atascosa NWR for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "October through March offers the best overall birding at Laguna Atascosa: Aplomado Falcons are most visible in open prairie before spring grass growth, winter sparrows peak in the brush, Piping Plovers winter on tidal flats, and large numbers of ducks use the lagoons. Spring (April–May) is excellent for breeding wading birds and Roseate Spoonbills. Shorebird migration begins in July and runs through October."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
