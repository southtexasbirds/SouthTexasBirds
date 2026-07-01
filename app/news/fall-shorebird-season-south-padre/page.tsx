import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Charadrius-melodus-004_edit.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/fall-shorebird-season-south-padre" },
  title: "Fall Shorebird Season at South Padre Island: Piping Plovers and More | South Texas Birds",
  description:
    "South Padre Island's tidal flats become one of the Gulf Coast's most productive shorebird staging areas each fall. From Piping Plovers to Reddish Egrets, July through October offers some of the most concentrated coastal birding in Texas.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-28T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Migration",
    title: "Fall Shorebird Season at South Padre Island | South Texas Birds",
    description:
      "South Padre Island's tidal flats host nationally significant concentrations of Piping Plovers and other shorebirds each fall — July through October is peak season.",
    images: [{ url: OG_IMAGE, alt: "Piping Plover on Texas Gulf Coast beach" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Piping Plover", href: "/birds/piping-plover" },
  { name: "Reddish Egret", href: "/birds/reddish-egret" },
  { name: "American Oystercatcher", href: "/birds/american-oystercatcher" },
  { name: "Roseate Spoonbill", href: "/birds/roseate-spoonbill" },
];

export default function FallShorebirdSeasonPage() {
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
              dateTime="2026-06-28"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Migration", "Shorebirds", "Conservation"].map((tag) => (
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
            Fall Shorebird Season at South Padre Island: Piping Plovers and More
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            When most birders are watching for Painted Buntings in spring, the quieter and equally
            spectacular fall season at South Padre Island is going largely unnoticed. From July
            through October, the island&apos;s tidal flats, spoil islands, and Laguna Madre shallows
            become one of the most productive shorebird staging areas on the entire Gulf Coast —
            hosting nationally significant concentrations of the endangered{" "}
            <Link href="/birds/piping-plover" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Piping Plover</Link>
            {" "}alongside dozens of other species in peak numbers.
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
              Why South Padre Matters for Piping Plovers
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/piping-plover" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Piping Plover</Link>
              {" "}is federally threatened — the entire Great Plains and Great Lakes populations
              funnel through a relative handful of high-quality wintering and stopover beaches. South
              Padre Island and the adjacent Laguna Madre rank among the most important of those sites.
              Winter surveys have counted over 600 individuals at South Padre — a substantial fraction
              of the Great Plains population in one location. The birds arrive from their prairie
              breeding grounds starting in late July and remain through April.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Laguna Madre&apos;s hypersaline flats, spoil islands created by the Intracoastal
              Waterway dredging, and the undisturbed southern tip of the island provide a combination
              of roosting and foraging habitat that few Gulf beaches can match. The South Padre Island
              Birding and Nature Center&apos;s boardwalk over the Laguna gives observers excellent
              close views without disturbing roosting flocks.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              What Else to Expect: Month by Month
            </h2>
            <ul className="text-sm leading-relaxed space-y-3" style={{ color: "#4E4B46" }}>
              <li>
                <strong style={{ color: "#0E6B6B" }}>July–August:</strong> Post-breeding shorebird
                migration begins. Adult birds that have finished nesting on the Great Plains start
                arriving — dowitchers, Semipalmated and Western Sandpipers, Dunlin, and the first
                Piping Plovers appear in late July. The{" "}
                <Link href="/birds/reddish-egret" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Reddish Egret</Link>
                {" "}is at peak feeding activity in the shallows, performing its distinctive spinning
                and wing-shadowing foraging display.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>September:</strong> Peak shorebird diversity.
                Juvenile birds from the breeding grounds join adults — often in fresher plumage that
                requires careful identification. Baird&apos;s Sandpiper, Buff-breasted Sandpiper,
                American Golden-Plover, and Hudsonian Godwit all move through in small numbers.
                The{" "}
                <Link href="/birds/american-oystercatcher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>American Oystercatcher</Link>
                {" "}is reliably seen on the jetties and shell banks.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>October:</strong> Numbers build toward winter
                peaks. Piping Plover counts climb and{" "}
                <Link href="/birds/roseate-spoonbill" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Roseate Spoonbills</Link>
                {" "}that dispersed inland after breeding concentrate back along the Laguna. Wilson&apos;s
                Plover, Snowy Plover, and Black-bellied Plover add to the plover count. The jetties
                are excellent for Ruddy Turnstone, Sanderling, and the occasional Red Knot.
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
              Conservation Pressures on the Beach
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The same beach that draws birders is under constant pressure from recreational traffic.
              Vehicle access to the beach at South Padre Island allows off-road vehicles onto the
              very flats where Piping Plovers roost, and disturbance during high tide — when birds
              have nowhere else to retreat — forces repeated flushes that burn critical energy
              reserves. Texas law protects bird nesting areas but enforcement on the beach is
              inconsistent.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Conservation organizations including the American Bird Conservancy and Texas Audubon
              have worked with the Town of South Padre Island and Cameron County to post temporary
              closures around roost sites during peak winter season. Birders can help by staying on
              designated viewing areas, keeping dogs on leash, and reporting disturbance events to
              refuge staff or local Audubon chapters.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Visiting South Padre for Shorebirds
            </h2>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: "#4E4B46" }}>
              <li><strong>Best dates:</strong> August 1 – November 15 for peak fall diversity; Piping Plovers present July–April</li>
              <li><strong>Best sites:</strong> South Padre Island Birding and Nature Center boardwalk; the flats at low tide near the southern tip of the island; Laguna Madre spoil islands (best seen by kayak)</li>
              <li><strong>Tidal timing:</strong> Low tide exposes the most feeding habitat — check tide tables and plan your visit for the 2 hours before and after low tide</li>
              <li><strong>What to bring:</strong> Spotting scope (20–60× zoom) for close views of roosting flocks, polarized sunglasses to cut Laguna glare, sun protection — summer and fall on the island is hot and exposed</li>
            </ul>
          </section>
        </AnimateIn>

        {/* Related species chips */}
        <AnimateIn>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>
              Species Featured
            </p>
            <div className="flex flex-wrap gap-2">
              {linkedSpecies.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
                  style={{ background: "rgba(14,107,107,0.07)", color: "#0E6B6B", border: "1px solid rgba(14,107,107,0.18)" }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
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
              { "@type": "ListItem", "position": 3, "name": "Fall Shorebird Season at South Padre Island", "item": "https://southtexasbirds.org/news/fall-shorebird-season-south-padre" },
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
            "headline": "Fall Shorebird Season at South Padre Island: Piping Plovers and More",
            "datePublished": "2026-06-28",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/news/fall-shorebird-season-south-padre",
            "description": "South Padre Island's tidal flats become one of the Gulf Coast's most productive shorebird staging areas each fall, hosting nationally significant concentrations of the endangered Piping Plover.",
            "image": OG_IMAGE,
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            },
            "keywords": ["Piping Plover", "shorebirds", "South Padre Island", "South Texas", "fall migration", "Laguna Madre"],
            "articleSection": "Migration"
          })
        }}
      />
    </div>
  );
}
