import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Northern_Jacana_Costa_Rica.jpg/1280px-Northern_Jacana_Costa_Rica.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/estero-llano-grande-birding-guide" },
  title: "Estero Llano Grande State Park: A Complete Birding Guide | South Texas Birds",
  description:
    "Estero Llano Grande State Park is the most reliable site in the United States for Masked Duck and Northern Jacana — and one of the RGV's premier waterbird destinations. A complete guide to birding Weslaco's extraordinary urban wildlife refuge.",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-02T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Destination Guide",
    title: "Estero Llano Grande State Park: A Complete Birding Guide",
    description:
      "The most reliable U.S. site for Masked Duck and Northern Jacana — plus Green Jays, Least Grebes, and a year-round parade of waterbirds. Here is how to bird it.",
    images: [{ url: OG_IMAGE, alt: "Northern Jacana at Estero Llano Grande State Park" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Masked Duck", href: "/birds/masked-duck" },
  { name: "Northern Jacana", href: "/birds/northern-jacana" },
  { name: "Least Grebe", href: "/birds/least-grebe" },
  { name: "Black-bellied Whistling-Duck", href: "/birds/black-bellied-whistling-duck" },
  { name: "Green Kingfisher", href: "/birds/green-kingfisher" },
  { name: "Ringed Kingfisher", href: "/birds/ringed-kingfisher" },
  { name: "Groove-billed Ani", href: "/birds/groove-billed-ani" },
  { name: "Neotropic Cormorant", href: "/birds/neotropic-cormorant" },
  { name: "Roseate Spoonbill", href: "/birds/roseate-spoonbill" },
  { name: "Green Jay", href: "/birds/green-jay" },
];

export default function EsteroLlanoGrandeBirdingGuidePage() {
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
            {["Destination Guide", "RGV", "Waterbirds"].map((tag) => (
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
            Estero Llano Grande State Park: A Complete Birding Guide
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            In the middle of Weslaco — a city of 40,000 in the heart of the Rio Grande
            Valley — there is a 230-acre state park that reliably produces Masked Ducks,
            Northern Jacanas, and Least Grebes before most visitors have finished their
            morning coffee. Estero Llano Grande State Park is the most reliable site
            in the United States for two of those three species, and arguably the
            most productive urban birding destination in North America per acre.
            This is the complete guide to birding it.
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
              Why Estero Is Unlike Any Other RGV Site
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Most of the Valley&apos;s premier birding destinations are nature preserves
              surrounded by open country. Estero Llano Grande sits in the middle of a
              city and delivers more rare waterbirds per visit than sites ten times its
              size. The park&apos;s shallow resaca lake, surrounded by native plantings and
              dense brush, acts as a magnet — concentrating waterbirds that are almost
              impossible to find reliably anywhere else in the country.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The visitor center feeders, meanwhile, draw the full complement of Valley
              thornscrub species at arm&apos;s length year-round — Green Jays, Altamira
              Orioles, and Plain Chachalacas arriving within minutes of a visitor
              sitting down at the feeder bench. It is a two-for-one site:
              world-class waterbirds and world-class feeder birding on the same trail.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Masked Duck: America&apos;s Most Sought-After Waterbird
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/masked-duck" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Masked Duck</Link>
              {" "}is arguably the most wanted waterbird in the continental United
              States — a tiny, stiff-tailed duck of tropical lakes and ponds that
              barely crosses the border into South Texas, with Estero Llano Grande
              as its single most reliable U.S. site. The male in breeding plumage
              is spectacular: rust-brown body, powder-blue bill, and a sharp
              black mask.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> The north end of the main resaca lake,
              particularly in dense floating vegetation near the reeds. Scan slowly
              from the viewing platform at the edge of the lake. The species is most
              consistently present October through April, though it breeds here and
              can be found year-round in favorable water conditions.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Northern Jacana and Least Grebe
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Two other species make Estero uniquely unmissable:
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/northern-jacana" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Northern Jacana</Link>
              {" "}walks across floating vegetation on absurdly long toes, picking
              insects from lily pads with the confidence of a species that evolved
              somewhere lily pads were never going to sink under it. Yellow-fronted
              and bright-billed, it is unmistakable. Estero&apos;s resaca is the most
              reliable U.S. location to see this species, which is otherwise found
              mainly in Central and South America. Look for it among the water
              hyacinth and lotus pads along the shoreline.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/least-grebe" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Least Grebe</Link>
              {" "}— the world&apos;s smallest grebe — bobs on the open water year-round,
              diving repeatedly in the middle of the lake. Its golden eye and
              neat, tiny profile are distinctive. Estero is one of the most
              reliable U.S. sites for this species.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Lake: A Parade of Waterbirds
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The resaca lake at Estero Llano Grande is one of the most productive
              single waterbodies in the Rio Grande Valley. Year-round, from the
              lake overlook and the boardwalk, expect:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <Link href="/birds/black-bellied-whistling-duck" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Black-bellied Whistling-Duck</Link>
                {" "}— dozens, often hundreds, roosting in trees around the lake margins at dusk
              </li>
              <li>
                <Link href="/birds/neotropic-cormorant" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Neotropic Cormorant</Link>
                {" "}— the smaller South Texas cormorant, year-round on the lake, often drying wings alongside Double-crested
              </li>
              <li>
                <Link href="/birds/roseate-spoonbill" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Roseate Spoonbill</Link>
                {" "}— wading at the shallow margins of the lake, especially in summer and fall
              </li>
              <li>
                <Link href="/birds/green-kingfisher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Green Kingfisher</Link>
                {" "}— the tiny kingfisher that perches on branches over the water and plunges for small fish. Year-round and reliable
              </li>
              <li>
                <Link href="/birds/ringed-kingfisher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Ringed Kingfisher</Link>
                {" "}— the massive crow-sized kingfisher that rattles loudly across the lake
              </li>
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Visitor Center Feeders &amp; Woodland Trails
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The feeder station at the Estero visitor center rivals those at
              Bentsen-RGVSP and Santa Ana NWR. In a single session at the feeder
              bench, expect:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <Link href="/birds/green-jay" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Green Jay</Link>
                {" "}and <Link href="/birds/altamira-oriole" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Altamira Oriole</Link>
                {" "}— the Valley&apos;s two most vivid birds, competing for oranges at the feeder
              </li>
              <li>
                <Link href="/birds/plain-chachalaca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Plain Chachalaca</Link>
                {" "}— crashing through the brush to reach corn spread on the ground
              </li>
              <li>
                <Link href="/birds/groove-billed-ani" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Groove-billed Ani</Link>
                {" "}— the bizarre, long-tailed, parrot-billed cuckoo relative, year-round in the brushy edges around the park
              </li>
              <li>Long-billed Thrasher, Olive Sparrow, White-tipped Dove — all reliable beneath the feeders</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4E4B46" }}>
              The Alligator Lake Trail loops around the main resaca and is the
              best route for combining waterbirds and woodland species. The
              separate Dowitcher Pond area on the east side of the park
              attracts shorebirds when water levels are right (August–October best).
            </p>
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
              <li><strong style={{ color: "#0E6B6B" }}>October–April:</strong> Prime time. Masked Ducks most reliable, migrant waterfowl on the lake (Ring-necked Duck, Lesser Scaup, Bufflehead), resident species at maximum visibility. Temperatures comfortable.</li>
              <li><strong style={{ color: "#0E6B6B" }}>April–June:</strong> Breeding season for many resident species. Black-bellied Whistling-Ducks nesting in boxes around the lake. Northern Jacana active and visible. Roseate Spoonbills present.</li>
              <li><strong style={{ color: "#0E6B6B" }}>July–September:</strong> Shorebird migration through Dowitcher Pond. Hot, but the waterbirds are reliably present early in the morning. Least Grebes with chicks.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4E4B46" }}>
              <strong>Practical notes:</strong> Entry fee applies (Texas State Park day use fee; annual pass accepted). Open daily. The visitor center has excellent staff naturalists and updated bird checklists. The birding is best from dawn to 10 a.m. Bring a spotting scope for scanning the lake for Masked Duck. Parking is ample.
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
              <Link href="/news/santa-ana-nwr-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Santa Ana National Wildlife Refuge: A Complete Birding Guide</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/bentsen-rgv-state-park-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Bentsen-Rio Grande Valley State Park: A Complete Birding Guide</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link href="/news" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
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
              { "@type": "ListItem", "position": 3, "name": "Estero Llano Grande Birding Guide" },
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
            "url": "https://southtexasbirds.org/news/estero-llano-grande-birding-guide",
            "headline": "Estero Llano Grande State Park: A Complete Birding Guide",
            "description": "Estero Llano Grande State Park is the most reliable site in the United States for Masked Duck and Northern Jacana — and one of the RGV's premier waterbird destinations.",
            "image": OG_IMAGE,
            "datePublished": "2026-07-02",
            "dateModified": "2026-07-02",
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "keywords": ["Estero Llano Grande", "Estero Llano Grande birding", "Masked Duck Texas", "Northern Jacana Texas", "Weslaco birding", "World Birding Center"],
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
                "name": "What birds can I see at Estero Llano Grande State Park?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Estero Llano Grande State Park is the most reliable U.S. site for Masked Duck and Northern Jacana. Other highlights include Least Grebe, Black-bellied Whistling-Duck, Green Kingfisher, Ringed Kingfisher, Neotropic Cormorant, Roseate Spoonbill, Groove-billed Ani, Green Jay, Altamira Oriole, and Plain Chachalaca. The park has recorded over 300 species."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Estero Llano Grande State Park?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Estero Llano Grande State Park is located at 3301 S. International Blvd, Weslaco, TX 78596 — in the city of Weslaco in the heart of the Rio Grande Valley, approximately 10 miles east of McAllen and 30 miles west of Brownsville. It is a World Birding Center site."
                }
              },
              {
                "@type": "Question",
                "name": "Is Estero Llano Grande the best place to see Masked Duck in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Estero Llano Grande State Park is generally considered the most reliable site in the United States for Masked Duck. The park's shallow resaca lake, with its dense floating vegetation, provides ideal habitat. The species is present year-round, with October through April being the most reliable period. A spotting scope is helpful for scanning the vegetated lake margins."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to visit Estero Llano Grande for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "October through April is the best time to visit Estero Llano Grande for birding. Masked Ducks are most reliably present, wintering waterfowl join the resident waterbirds on the lake, and temperatures are comfortable. The feeder station at the visitor center is productive year-round; the shorebird area (Dowitcher Pond) peaks in August and September during fall migration."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
