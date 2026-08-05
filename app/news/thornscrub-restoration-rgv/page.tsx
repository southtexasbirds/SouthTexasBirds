import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/thornscrub-restoration-rgv" },
  title: "Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley | South Texas Birds",
  description:
    "Less than 5% of the original Tamaulipan thornscrub remains in the Rio Grande Valley. Restoration efforts by the Lower Rio Grande Valley NWR and World Birding Center are rebuilding habitat for Green Jay, Plain Chachalaca, and dozens of other specialty birds.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-10T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Conservation",
    title: "Thornscrub Restoration in the Rio Grande Valley | South Texas Birds",
    description:
      "Less than 5% of native thornscrub remains — but restoration efforts are rebuilding critical habitat for the Valley's most sought-after birds.",
    images: [{ url: OG_IMAGE, alt: "Green Jay perched in South Texas thornscrub" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function ThornscrubRestorationPage() {
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
              dateTime="2026-06-10"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Conservation", "Habitat Restoration"].map((tag) => (
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
            Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley
          </h1>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-8">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The subtropical thornscrub that makes the Rio Grande Valley one of the most
              extraordinary birding destinations in North America once blanketed nearly the entire region.
              Today, less than{" "}
              <strong>5% of the original Tamaulipan thornscrub remains</strong>. The rest has been
              cleared for agriculture, development, and infrastructure over the past century. Now,
              a coalition of federal agencies, conservation nonprofits, and state partners is working
              to restore what was lost — parcel by parcel, acre by acre.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              What the thornscrub supports
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              The native Tamaulipan thornscrub — a dense tangle of mesquite, ebony, granjeno, brasil,
              and Texas persimmon — is the ecological foundation of RGV birding. Without it, the species
              that make this region globally famous would simply not be here.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              The brush supports year-round residents found nowhere else in the United States:{" "}
              <Link href="/birds/green-jay" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Green Jay
              </Link>
              ,{" "}
              <Link href="/birds/plain-chachalaca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Plain Chachalaca
              </Link>
              ,{" "}
              <Link href="/birds/ferruginous-pygmy-owl" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Ferruginous Pygmy-Owl
              </Link>
              , and{" "}
              <Link href="/birds/long-billed-thrasher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Long-billed Thrasher
              </Link>
              . Dense thornscrub edges are also essential foraging habitat for the
              ground-nesting{" "}
              <Link href="/birds/olive-sparrow" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Olive Sparrow
              </Link>
              , one of the quieter RGV specialties that rarely strays from native brush.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The brush also functions as critical stopover and wintering habitat for Neotropical
              migrants during spring and fall migration, making its health important not just for
              resident species, but for hundreds of others passing through each year.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Lower Rio Grande Valley NWR corridor
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              The U.S. Fish and Wildlife Service&apos;s Lower Rio Grande Valley National Wildlife Refuge
              is the primary driver of large-scale thornscrub recovery in the region. The refuge&apos;s
              goal is ambitious: assemble and restore a continuous wildlife corridor from Falcon Dam to
              the Gulf of Mexico — roughly 275 miles of connected native habitat.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The refuge now protects more than 90,000 acres across more than 100 non-contiguous
              tracts throughout the Valley. Restoration work on acquired parcels involves removing
              invasive species, replanting native thornscrub, and managing brush in ways that
              benefit the full range of native wildlife. The long-term corridor vision, if fully
              realized, would create one of the largest wildlife corridors in the Lower 48.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              What visitors can do
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              The most direct way visiting birders support thornscrub restoration is by coming here —
              birding tourism generates millions of dollars annually in the Rio Grande Valley and
              directly funds the economic case for conservation over development.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Several Valley organizations also accept direct support:{" "}
              <a
                href="https://www.thewbc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                the World Birding Center
              </a>
              , the{" "}
              <a
                href="https://www.nature.org/en-us/about-us/where-we-work/united-states/texas/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                Texas Nature Conservancy
              </a>
              , and the{" "}
              <a
                href="https://www.abcbirds.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                American Bird Conservancy
              </a>{" "}
              all work on native habitat in the region and benefit from membership and donations.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <p className="text-xs" style={{ color: "#6E6B66" }}>
            <span className="font-semibold">Sources:</span> U.S. Fish & Wildlife Service, Lower Rio Grande Valley NWR;
            Texas Parks and Wildlife Department; The Nature Conservancy Texas
          </p>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C77F4A" }}>More from South Texas Birds</p>
            <div className="flex flex-col gap-4">
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
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
              { "@type": "ListItem", "position": 3, "name": "Tamaulipan Thornscrub Restoration in the Rio Grande Valley", "item": "https://southtexasbirds.org/news/thornscrub-restoration-rgv" },
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
            "url": "https://southtexasbirds.org/news/thornscrub-restoration-rgv",
            "headline": "Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley",
            "description": "Less than 5% of the original Tamaulipan thornscrub remains in the Rio Grande Valley. Restoration efforts are rebuilding habitat for Green Jay, Plain Chachalaca, Ferruginous Pygmy-Owl, and dozens more.",
            "image": OG_IMAGE,
            "datePublished": "2026-06-10",
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
                "name": "What is Tamaulipan thornscrub?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tamaulipan thornscrub (also called Tamaulipan mezquital) is a native subtropical shrubland ecosystem found in the Rio Grande Valley and northeastern Mexico. It is characterized by a dense mix of thorny shrubs and small trees including Texas ebony, huisache, cenizo, and various cacti. This ecosystem is the exclusive habitat for many of South Texas's most sought-after bird species, including the Ferruginous Pygmy-Owl, Tropical Parula, Botteri's Sparrow, and White-tipped Dove."
                }
              },
              {
                "@type": "Question",
                "name": "How much thornscrub remains in the Rio Grande Valley?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Less than 5% of the original Tamaulipan thornscrub ecosystem remains in the Rio Grande Valley. The vast majority was cleared for agriculture, urban development, and ranching during the 20th century. The remaining intact patches are concentrated within national wildlife refuges and state parks — primarily Santa Ana NWR, Bentsen-Rio Grande Valley SP, Resaca de la Palma SP, and Laguna Atascosa NWR."
                }
              },
              {
                "@type": "Question",
                "name": "Which birds depend on South Texas thornscrub?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many of South Texas's most distinctive birds depend on intact Tamaulipan thornscrub: Ferruginous Pygmy-Owl (nests in tree cavities), Tropical Parula (breeds in dense brush), Botteri's Sparrow (requires grassy thornscrub edge), White-tipped Dove (feeds on the forest floor), Elf Owl (nests in cacti and tree cavities), Rose-throated Becard (rare riparian edge), Groove-billed Ani, and many others. Without thornscrub, these species cannot survive in the Valley."
                }
              },
              {
                "@type": "Question",
                "name": "What organizations are restoring thornscrub in the Rio Grande Valley?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Several federal and non-profit organizations are leading thornscrub restoration in the Rio Grande Valley, including the U.S. Fish and Wildlife Service (at the Lower Rio Grande Valley NWR), The Nature Conservancy, Texas Parks and Wildlife Department, and the Native Plant Society of Texas. Programs involve replanting native shrubs, controlling invasive species, and protecting existing fragments. The World Birding Center sites, including Santa Ana NWR and Bentsen SP, serve as focal points for restoration."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
