import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Painted_Bunting_by_Dan_Pancamo.jpg/800px-Painted_Bunting_by_Dan_Pancamo.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/painted-bunting-south-padre" },
  title: "South Padre Island Remains a Critical Painted Bunting Stopover | South Texas Birds",
  description:
    "South Padre Island is one of the most important spring stopovers for Painted Buntings migrating across the Gulf of Mexico. During peak fallout events, hundreds of exhausted males arrive in brilliant breeding plumage.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-25T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Conservation",
    title: "South Padre Island: Critical Painted Bunting Stopover | South Texas Birds",
    description:
      "South Padre Island is one of the most important Trans-Gulf migration stopovers for Painted Buntings — and the gateway to one of birding's most spectacular annual events.",
    images: [{ url: OG_IMAGE, alt: "Male Painted Bunting in brilliant breeding plumage" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function PaintedBuntingSouthPadrePage() {
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
              dateTime="2026-06-25"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Conservation", "Migration"].map((tag) => (
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
            South Padre Island Remains a Critical Painted Bunting Stopover
          </h1>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-8">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Every spring, something remarkable happens at the southern tip of Padre Island. Exhausted
              songbirds — many of which have just flown 500+ miles nonstop across the Gulf of Mexico —
              make landfall on the barrier island's narrow strip of coastal scrub, desperate for food,
              water, and shelter. Among the most anticipated arrivals:{" "}
              <Link
                href="/birds/painted-bunting"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                Painted Buntings
              </Link>
              , the electric-blue-and-red songbirds that many birders consider the most beautiful
              bird in North America.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Trans-Gulf migration corridor
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              Painted Buntings are among the dozens of Neotropical species that migrate north from
              Central America and Mexico across the Gulf of Mexico each spring. The crossing is a
              nonstop over-water flight of more than 600 miles — and South Padre Island sits at one
              of the first landfall points on the Texas coast. When northwest winds follow a cold
              front in late April or early May, the exhausted birds arriving can number in the
              thousands across a single morning.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the birding world, these events are called <strong>&ldquo;fallouts&rdquo;</strong> —
              and when conditions align, the South Padre Island Birding and Nature Center becomes one
              of the most extraordinary birding spectacles in North America. Painted Buntings, Indigo
              Buntings, orioles, tanagers, and warblers crowd every shrub, boardwalk railing, and
              water drip. Males in fresh breeding plumage make no effort to hide.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Why this stopover matters
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              South Padre Island is not just a birding attraction — it is biologically critical
              infrastructure for the Painted Bunting&apos;s survival. The birds that make landfall
              here arrive significantly underweight after the Gulf crossing. A few days of feeding
              on insects and fruit in the island&apos;s native scrub can mean the difference between
              reaching their breeding grounds in good condition or not at all.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Eastern population Painted Buntings (which migrate through South Texas) have shown
              population declines in recent decades. Habitat degradation at stopover sites — coastal
              development, loss of native scrub, artificial lighting that disorients nocturnally
              migrating birds — is considered a contributing factor. The South Padre Island Birding
              Center&apos;s preservation of native coastal scrub and active water drip maintenance
              during migration represent real, measurable conservation value for the species.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              How to see it
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              The window is narrow. Peak fallout potential runs from approximately{" "}
              <strong>April 20 through May 10</strong>. The key conditions: a cold front pushing
              northwest winds over the Gulf during peak migration, followed by clearing skies as
              the front passes. Watch eBird for spike reports, and check the South Padre weather
              the night before — if a front just passed and you see northwest winds, get there early.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              Even in years without a dramatic fallout, late April and early May at South Padre
              Island reliably produce Painted Buntings, along with large numbers of{" "}
              <Link
                href="/birds/scissor-tailed-flycatcher"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                Scissor-tailed Flycatchers
              </Link>
              ,{" "}
              <Link
                href="/birds/reddish-egret"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                Reddish Egrets
              </Link>
              , and a wide variety of migrant warblers and shorebirds.
            </p>
            <Link
              href="/hotspots#south-padre-island"
              className="inline-block text-sm font-semibold px-4 py-2.5 rounded-lg transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#C77F4A", color: "#fff" }}
            >
              South Padre Island Hotspot Guide →
            </Link>
          </section>
        </AnimateIn>

        <AnimateIn>
          <p className="text-xs" style={{ color: "#6E6B66" }}>
            <span className="font-semibold">Sources:</span> Cornell Lab All About Birds; U.S. Geological Survey Patuxent Wildlife Research Center Painted Bunting population data; South Padre Island Birding and Nature Center
          </p>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C77F4A" }}>More from South Texas Birds</p>
            <div className="flex flex-col gap-4">
              <Link href="/news/fall-shorebird-season-south-padre" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Fall Shorebird Season at South Padre Island: Piping Plovers and More</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/south-texas-birding-calendar" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Birding Calendar: When to Go for Each Species</span>
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
              { "@type": "ListItem", "position": 3, "name": "South Padre Island Remains a Critical Painted Bunting Stopover", "item": "https://southtexasbirds.org/news/painted-bunting-south-padre" },
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
            "headline": "South Padre Island Remains a Critical Painted Bunting Stopover",
            "description": "South Padre Island is one of the most important spring stopovers for Painted Buntings migrating across the Gulf of Mexico — and the gateway to one of birding's most spectacular annual events.",
            "image": OG_IMAGE,
            "datePublished": "2026-06-25",
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
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
                "name": "When do Painted Buntings migrate through South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Painted Buntings migrate through South Texas primarily in late April and early May (spring) and again in September and October (fall). The most spectacular events occur in spring when Trans-Gulf migrants make landfall at South Padre Island following northwest winds after cold fronts. Fall migration is more protracted, with birds moving through from August into October."
                }
              },
              {
                "@type": "Question",
                "name": "What is a Trans-Gulf migration fallout?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Trans-Gulf fallout occurs when migrating birds crossing the Gulf of Mexico encounter headwinds or bad weather that exhausts them, forcing them to land on the first available land on the Gulf Coast. At South Padre Island, a true fallout can produce hundreds of Painted Buntings, Indigo Buntings, tanagers, and warblers landing in any available vegetation — trees, shrubs, even fences. The best conditions are northwest winds following a cold front in late April or early May."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the best place to see Painted Buntings in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "South Padre Island is the best place to see Painted Buntings during spring migration — Shearer Street and Andy Bowie Park are classic fallout sites. During fall, Painted Buntings can be found at any Valley park with dense vegetation, including Bentsen SP, Santa Ana NWR, and Estero Llano Grande SP. Seed feeders at resorts and nature centers also reliably attract Painted Buntings in late summer and fall."
                }
              },
              {
                "@type": "Question",
                "name": "Do Painted Buntings breed in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — there are two geographically distinct breeding populations of Painted Bunting. The eastern population breeds along the Atlantic coast from North Carolina to Florida; the western population breeds from the southern Great Plains south into Texas and northeastern Mexico. The western population does breed in parts of South Texas, including the brushy edges and open woodlands of the Hill Country and South Texas plains, and some birds winter along the Gulf Coast."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
