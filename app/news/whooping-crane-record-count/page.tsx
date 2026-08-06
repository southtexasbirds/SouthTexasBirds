import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/whooping-crane-record-count" },
  title: "Record Number of Whooping Cranes Wintering in Texas | South Texas Birds",
  description:
    "The most recent USFWS survey recorded 557 whooping cranes wintering along the Texas coast — a record high for the species' only self-sustaining wild population.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-01T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Conservation",
    title: "Record Whooping Crane Count in Texas | South Texas Birds",
    description:
      "557 whooping cranes wintering along the Texas coast — a record high for the species' only self-sustaining wild population.",
    images: [{ url: OG_IMAGE, alt: "Whooping Crane in flight over Texas coast" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function WhoopingCraneRecordCountPage() {
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
              dateTime="2026-06-01"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Conservation", "Wildlife Recovery"].map((tag) => (
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
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-2" style={{ color: "#0E6B6B" }}>
            Record Number of Whooping Cranes Wintering in Texas This Year
          </h1>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-8">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Good news for one of the most dramatic conservation comeback stories in North America: the most recent
              U.S. Fish and Wildlife Service survey recorded{" "}
              <strong>557 whooping cranes</strong> wintering along the Texas coast — a record high for the
              species&apos; only self-sustaining wild population.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>From 15 birds to 557</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              It&apos;s hard to overstate how close this species came to disappearing. By 1941, only about 15
              whooping cranes remained wintering at Aransas National Wildlife Refuge, the species&apos; last
              stronghold. Decades of protection — starting with the 1918 Migratory Bird Treaty Act and continuing
              through Endangered Species Act listing in 1970 — combined with public awareness campaigns and dedicated
              habitat protection slowly rebuilt the population, generation by generation, to the 557 birds counted
              this winter.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              This wild population, known as the Aransas-Wood Buffalo Population, migrates roughly 2,500 miles each
              year between nesting grounds in Wood Buffalo National Park, Canada, and wintering habitat on the Texas
              coast.{" "}
              <Link
                href="/birds/whooping-crane"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                Read more on our Whooping Crane species page.
              </Link>
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>The work isn&apos;t finished</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Researchers and conservation groups caution that this success doesn&apos;t mean the threats are gone.
              Whooping cranes still face risks from agricultural and infrastructure development, shrinking freshwater
              inflows into coastal marshes, accidental shootings, and avian flu. A multiyear partnership between the
              San Antonio River Authority, Texas Water Trade, Texas Parks and Wildlife, and the International Crane
              Foundation is now working to deliver freshwater to flood wetland habitat near Aransas — part of an
              ongoing effort to keep the recovery on track.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Three smaller, human-introduced populations also exist in Wisconsin/Florida, Louisiana, and Florida,
              but the Texas-wintering population remains the only genuinely wild, self-sustaining group — making
              this record count especially meaningful.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Planning a visit to see them? The{" "}
              <Link href="/when-to-go/november" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>November birding guide</Link>
              {" "}covers exactly when the viewing season opens at Aransas.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <p className="text-xs" style={{ color: "#6E6B66" }}>
            <span className="font-semibold">Source:</span> U.S. Fish and Wildlife Service 2024–2025 winter survey,
            The Invading Sea
          </p>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C77F4A" }}>More from South Texas Birds</p>
            <div className="flex flex-col gap-4">
              <Link href="/news/thornscrub-restoration-rgv" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/spacex-refuge-land-exchange" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>SpaceX Land Exchange Threatens Rio Grande Wildlife Corridor</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/south-texas-birding-calendar" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Birding Calendar: When to Go for Each Species</span>
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
              ← Browse all news
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
              { "@type": "ListItem", "position": 3, "name": "Record Number of Whooping Cranes Wintering in Texas", "item": "https://southtexasbirds.org/news/whooping-crane-record-count" },
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
            "url": "https://southtexasbirds.org/news/whooping-crane-record-count",
            "headline": "Record Number of Whooping Cranes Wintering in Texas",
            "description": "The most recent USFWS survey recorded 557 whooping cranes wintering along the Texas coast — a record high for the species' only self-sustaining wild population.",
            "image": OG_IMAGE,
            "datePublished": "2026-06-01",
            "dateModified": "2026-06-30",
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" }
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
                "name": "How many Whooping Cranes are alive today?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As of the most recent USFWS survey, approximately 557 Whooping Cranes are estimated to be alive in the wild Aransas-Wood Buffalo population — the species' only self-sustaining wild flock. This is a record high for the population, which numbered just 15 birds in 1941. Additional birds exist in captive breeding programs and in reintroduced non-migratory flocks in Louisiana and Wisconsin."
                }
              },
              {
                "@type": "Question",
                "name": "Where do Whooping Cranes winter in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The wild Whooping Crane population winters along the Texas Gulf Coast, primarily at Aransas National Wildlife Refuge near Rockport and on the surrounding tidal flats, salt marshes, and coastal prairies of the mid-Texas coast. The cranes spend winters feeding on blue crabs, wolfberries, and other coastal foods before migrating north to Wood Buffalo National Park in Canada each spring."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to see Whooping Cranes in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "November through March is the best window to see Whooping Cranes in Texas. Birds typically arrive at Aransas NWR in late October and depart for Canada in April. The most reliable viewing is from the observation tower at Aransas NWR or by taking a boat tour from Rockport, which allows close approach to foraging birds on the tidal flats."
                }
              },
              {
                "@type": "Question",
                "name": "Are Whooping Cranes still endangered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the Whooping Crane remains Federally Endangered in the United States. Although the population has grown significantly from the all-time low of 15 birds in 1941, the wild flock is still considered at risk due to its small size, dependence on a single wintering area, and vulnerability to disease, habitat loss, and collision with power lines during migration. The species is listed as Endangered under the U.S. Endangered Species Act."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
