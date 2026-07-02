import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png/1280px-Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png";

export const metadata: Metadata = {
  alternates: { canonical: "/news/santa-ana-nwr-birding-guide" },
  title: "Santa Ana National Wildlife Refuge: A Complete Birding Guide | South Texas Birds",
  description:
    "Santa Ana NWR — called the 'Jewel of the National Wildlife Refuge System' — protects 2,000 acres of Tamaulipan thornscrub on the Rio Grande. A complete guide to birding one of the most species-rich sites in the United States.",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-02T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Destination Guide",
    title: "Santa Ana National Wildlife Refuge: A Complete Birding Guide",
    description:
      "Called the Jewel of the National Wildlife Refuge System, Santa Ana NWR packs 400+ species into 2,000 riverside acres. Here is how to bird it.",
    images: [{ url: OG_IMAGE, alt: "Green Jay at Santa Ana National Wildlife Refuge" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Green Jay", href: "/birds/green-jay" },
  { name: "Plain Chachalaca", href: "/birds/plain-chachalaca" },
  { name: "Altamira Oriole", href: "/birds/altamira-oriole" },
  { name: "Buff-bellied Hummingbird", href: "/birds/buff-bellied-hummingbird" },
  { name: "Hook-billed Kite", href: "/birds/hook-billed-kite" },
  { name: "Ferruginous Pygmy-Owl", href: "/birds/ferruginous-pygmy-owl" },
  { name: "Rose-throated Becard", href: "/birds/rose-throated-becard" },
  { name: "Clay-colored Thrush", href: "/birds/clay-colored-thrush" },
  { name: "Tropical Kingbird", href: "/birds/tropical-kingbird" },
  { name: "Long-billed Thrasher", href: "/birds/long-billed-thrasher" },
  { name: "Olive Sparrow", href: "/birds/olive-sparrow" },
  { name: "White-tipped Dove", href: "/birds/white-tipped-dove" },
];

export default function SantaAnaBirdingGuidePage() {
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
              dateTime="2026-07-02"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              July 2026
            </time>
            {["Destination Guide", "RGV", "Species Guide"].map((tag) => (
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
            Santa Ana National Wildlife Refuge: A Complete Birding Guide
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            The U.S. Fish and Wildlife Service calls Santa Ana the &ldquo;Jewel of the National
            Wildlife Refuge System&rdquo; — and any birder who has spent a morning here
            understands why. In 2,088 acres of Tamaulipan thornscrub and riparian forest
            along the Rio Grande, more than 400 species have been recorded. It is, mile for
            mile, one of the most bird-rich sites in the United States. This is the complete
            guide to birding it.
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
              Why Santa Ana Is the &ldquo;Jewel&rdquo;
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Santa Ana NWR protects one of the last remaining tracts of native Tamaulipan
              thornscrub — the subtropical thorn forest that once blanketed the lower Rio
              Grande Valley. Over 95% of this habitat has been cleared for agriculture since
              the early 20th century. What remains at Santa Ana is therefore irreplaceable:
              the only significant patch of mature riparian woodland and thornscrub accessible
              to the public in the central Rio Grande Valley.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The result is a concentration of species that astonishes even experienced
              birders. On a single December morning tram tour, a visitor might encounter
              the entire checklist of Rio Grande Valley specialties — Green Jays, Altamira
              Orioles, Plain Chachalacas, Buff-bellied Hummingbirds, Hook-billed Kites,
              and Ferruginous Pygmy-Owls — before the rest of the country has finished
              breakfast. It is that kind of place.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Tram Tour: The Best Way to Bird Santa Ana
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Much of Santa Ana&apos;s interior is accessible only by tram — the habitat is too
              dense, and the walking trails too limited, to cover the refuge on foot. The
              seasonal tram tours (typically operating December through early February,
              and on weekends in spring) carry visitors on a slow circuit through the
              deepest thornscrub and along the resacas, with naturalist commentary throughout.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The tram is the most reliable way to encounter{" "}
              <Link href="/birds/ferruginous-pygmy-owl" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Ferruginous Pygmy-Owl</Link>
              ,{" "}
              <Link href="/birds/hook-billed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Hook-billed Kite</Link>
              , and the thornscrub-dependent species that are difficult to find on
              foot. Check the refuge website for the current tram schedule and fees,
              as these change seasonally.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Feeder Station
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The feeder station near the Santa Ana visitor center rivals Bentsen&apos;s as the
              most productive single birding spot in the Rio Grande Valley. Year-round, the
              feeders draw:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <Link href="/birds/green-jay" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Green Jay</Link>
                {" "}— arriving in screaming family groups throughout the day; impossible to miss
              </li>
              <li>
                <Link href="/birds/altamira-oriole" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Altamira Oriole</Link>
                {" "}— the largest oriole in the United States, brilliant orange and black, year-round
              </li>
              <li>
                <Link href="/birds/plain-chachalaca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Plain Chachalaca</Link>
                {" "}— the raucous, turkey-sized bird that crashes through feeders in groups of 10–20
              </li>
              <li>
                <Link href="/birds/buff-bellied-hummingbird" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Buff-bellied Hummingbird</Link>
                {" "}— the Valley&apos;s resident hummingbird, at nectar feeders year-round
              </li>
              <li>
                <Link href="/birds/long-billed-thrasher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Long-billed Thrasher</Link>
                , <Link href="/birds/olive-sparrow" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Olive Sparrow</Link>
                , <Link href="/birds/white-tipped-dove" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tipped Dove</Link>
                {" "}— all reliable on the ground beneath the feeders
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
              Santa Ana&apos;s Special Targets: Becard and Clay-colored Thrush
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Two species make Santa Ana NWR uniquely worth visiting beyond the standard
              Valley specialties:
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/rose-throated-becard" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Rose-throated Becard</Link>
              {" "}is a chunky, large-headed bird of the canopy that nests only in
              mature riparian woodland — and Santa Ana is one of the most reliable sites
              in the United States to find it. The male&apos;s rose-pink throat patch is subtle
              but striking. Look for the large, pendulous nest dangling from high branches
              in cottonwood and willow trees near water.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/clay-colored-thrush" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Clay-colored Thrush</Link>
              {" "}— the national bird of Costa Rica — has established a small but growing
              breeding population in the Rio Grande Valley, with Santa Ana and the
              surrounding Mission/McAllen area as its U.S. stronghold. It looks like a
              washed-out American Robin and sings a rich, melodious song. Most easily
              found near the feeder station and along shaded trails.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Trails: Self-Guided Birding
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Several trails are open to self-guided walking when tram tours are not
              operating. The most productive:
            </p>
            <ul className="text-sm leading-relaxed space-y-3 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <strong style={{ color: "#0E6B6B" }}>Terrace Trail (1.75 miles)</strong>
                {" "}— A loop through dense thornscrub near the visitor center. Excellent
                for Ferruginous Pygmy-Owl in early morning, Olive Sparrow, and all the
                standard thornscrub species.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>Willow Lake Trail (1.5 miles)</strong>
                {" "}— Leads to a resaca where herons, shorebirds, and waterbirds concentrate
                seasonally. Also passes through mature riparian woodland good for Rose-throated
                Becard and warblers in migration.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>Pintail Lakes Loop (1.2 miles)</strong>
                {" "}— Good for waterfowl in winter, shorebirds in season, and a panoramic
                view across the Valley from a low ridge.
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
              When to Go
            </h2>
            <ul className="text-sm leading-relaxed space-y-2 list-none" style={{ color: "#4E4B46" }}>
              <li><strong style={{ color: "#0E6B6B" }}>December–February:</strong> The peak season. Tram tours operate, feeder station in full swing, wintering warblers and sparrows swell the checklist. Species diversity is at its absolute maximum. Book tram tours in advance; they fill quickly during the Rio Grande Valley Birding Festival (November).</li>
              <li><strong style={{ color: "#0E6B6B" }}>March–May:</strong> Spring migration adds transient warblers, tanagers, orioles, and buntings passing through. Breeding residents begin nesting; Rose-throated Becard building its distinctive nest. Hawk migration (Broad-winged, Swainson&apos;s) peaks in late March–April.</li>
              <li><strong style={{ color: "#0E6B6B" }}>June–August:</strong> Hot and humid, but resident species reliably present. Visit before 9 a.m. The refuge is quieter and all trails are self-guided.</li>
              <li><strong style={{ color: "#0E6B6B" }}>September–November:</strong> Fall migration through the thornscrub adds rare warblers and vireos. Resident species building to winter numbers. Cool and comfortable from October onward.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4E4B46" }}>
              <strong>Practical notes:</strong> Free entry. Open dawn to dusk daily.
              The visitor center has restrooms, checklists, and a small bookstore.
              Insect repellent is essential in summer. A spotting scope is useful
              for Hook-billed Kite and waterfowl on the resacas.
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
              <Link href="/news/bentsen-rgv-state-park-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Bentsen-Rio Grande Valley State Park: A Complete Birding Guide</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/thornscrub-restoration-rgv" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley</span>
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
              { "@type": "ListItem", "position": 3, "name": "Santa Ana NWR Birding Guide" },
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
            "url": "https://southtexasbirds.org/news/santa-ana-nwr-birding-guide",
            "headline": "Santa Ana National Wildlife Refuge: A Complete Birding Guide",
            "description": "Santa Ana NWR — called the 'Jewel of the National Wildlife Refuge System' — protects 2,000 acres of Tamaulipan thornscrub on the Rio Grande. A complete guide to birding one of the most species-rich sites in the United States.",
            "image": OG_IMAGE,
            "datePublished": "2026-07-02",
            "dateModified": "2026-07-02",
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "keywords": ["Santa Ana National Wildlife Refuge", "Santa Ana NWR birding", "Rio Grande Valley birding", "jewel of national wildlife refuge system", "RGV bird watching"],
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
                "name": "What birds can I see at Santa Ana National Wildlife Refuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Over 400 species have been recorded at Santa Ana NWR. Year-round residents include Green Jay, Altamira Oriole, Plain Chachalaca, Buff-bellied Hummingbird, Ferruginous Pygmy-Owl, Hook-billed Kite, Rose-throated Becard, Clay-colored Thrush, Long-billed Thrasher, Olive Sparrow, and White-tipped Dove. Spring migration brings transient warblers, tanagers, and buntings; winter adds waterfowl and sparrows."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Santa Ana NWR called the Jewel of the National Wildlife Refuge System?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The U.S. Fish and Wildlife Service uses this designation because Santa Ana NWR protects one of the last remaining tracts of native Tamaulipan thornscrub — a subtropical thorn forest that has been 95% cleared in the Rio Grande Valley. The 2,088-acre refuge packs more than 400 bird species into a small area, making it one of the most biologically diverse sites per acre in the United States."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to visit Santa Ana NWR for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best time to visit Santa Ana NWR for birding is December through February, when seasonal tram tours operate, winter species swell the checklist, and all resident Valley specialties are present. This corresponds with cooler temperatures and the peak of the Rio Grande Valley birding season. Spring migration (March–May) is also excellent for transient species passing through."
                }
              },
              {
                "@type": "Question",
                "name": "Are tram tours available at Santa Ana NWR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Seasonal tram tours at Santa Ana NWR typically operate December through early February, with additional weekend tours in spring. The trams access interior thornscrub habitat that is otherwise inaccessible on foot, significantly improving chances for Ferruginous Pygmy-Owl, Hook-billed Kite, and other difficult species. Check the refuge website for current schedule and fees."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
