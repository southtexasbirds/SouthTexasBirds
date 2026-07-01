import type { Metadata } from "next";
import Link from "next/link";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news" },
  title: "News | South Texas Birds",
  description:
    "Conservation news and updates affecting birds and habitat in the Rio Grande Valley and South Texas coast.",
  openGraph: {
    title: "News & Conservation | South Texas Birds",
    description:
      "Conservation news and updates affecting birds and habitat in the Rio Grande Valley and South Texas coast.",
    images: [{ url: OG_IMAGE, alt: "Altamira Oriole in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

const articles = [
  {
    slug: "whooping-crane-record-count",
    date: "June 2026",
    isoDate: "2026-06-01",
    title: "Record Number of Whooping Cranes Wintering in Texas This Year",
    excerpt:
      "The most recent USFWS survey recorded 557 whooping cranes wintering along the Texas coast — a record high for the species' only self-sustaining wild population, and a testament to decades of conservation work.",
    tags: ["Conservation", "Wildlife Recovery"],
  },
  {
    slug: "thornscrub-restoration-rgv",
    date: "June 2026",
    isoDate: "2026-06-10",
    title: "Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley",
    excerpt:
      "Less than 5% of the original thornscrub remains in the Valley — but a growing coalition of federal agencies and conservation organizations is rebuilding the native brush that Green Jays, Plain Chachalacas, and dozens of other RGV specialties depend on.",
    tags: ["Conservation", "Habitat Restoration"],
  },
  {
    slug: "rgvbf-festival-2026",
    date: "June 2026",
    isoDate: "2026-06-15",
    title: "Save the Date: Rio Grande Valley Birding Festival Returns This November",
    excerpt:
      "The RGVBF returns to Harlingen this November — one of the largest birding festivals in the country, with over 100 field trips, expert guides, and the full lineup of RGV specialties on the table.",
    tags: ["Festival", "Events", "RGV"],
  },
  {
    slug: "spacex-refuge-land-exchange",
    date: "June 2026",
    isoDate: "2026-06-20",
    title: "SpaceX Land Exchange Threatens Heart of Rio Grande Wildlife Corridor",
    excerpt:
      "A federal land exchange moving through the courts could reshape one of South Texas's most important wildlife corridors — directly touching habitat for the Aplomado Falcon, ocelot, and other species.",
    tags: ["Conservation", "Habitat", "Legal"],
  },
  {
    slug: "painted-bunting-south-padre",
    date: "June 2026",
    isoDate: "2026-06-25",
    title: "South Padre Island Remains a Critical Painted Bunting Stopover",
    excerpt:
      "When northwest winds follow a cold front in late April, hundreds of Painted Buntings and other Trans-Gulf migrants make landfall at South Padre Island — one of North America's most spectacular birding events.",
    tags: ["Conservation", "Migration"],
  },
  {
    slug: "fall-hawk-migration-south-texas",
    date: "June 2026",
    isoDate: "2026-06-28",
    title: "South Texas Fall Hawk Migration: Broad-winged Kettles at Bentsen",
    excerpt:
      "Every September, tens of thousands of raptors stream south through the Rio Grande Valley. At Bentsen's hawk tower on peak days, Broad-winged Hawk kettles containing 10,000 or more birds fill the sky.",
    tags: ["Migration", "Raptors"],
  },
  {
    slug: "fall-shorebird-season-south-padre",
    date: "June 2026",
    isoDate: "2026-06-28",
    title: "Fall Shorebird Season at South Padre Island: Piping Plovers and More",
    excerpt:
      "South Padre Island's tidal flats host nationally significant concentrations of the endangered Piping Plover each fall. July through October is peak season for coastal shorebird diversity on the Texas Gulf Coast.",
    tags: ["Migration", "Shorebirds", "Conservation"],
  },
  {
    slug: "south-texas-birding-calendar",
    date: "June 2026",
    isoDate: "2026-06-28",
    title: "South Texas Birding Calendar: When to Go for Each Species",
    excerpt:
      "A month-by-month guide to birding the Rio Grande Valley. Whooping Cranes in winter, Painted Bunting fallouts in spring, hawk kettles in September — when you go determines what you see.",
    tags: ["Planning", "Guide"],
  },
];

export default function NewsPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>
          Rio Grande Valley
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
          News &amp; Conservation
        </h1>
        <p className="text-sm" style={{ color: "#5C5954" }}>
          Updates on the birds, habitat, and conservation issues shaping South Texas.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-5">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block rounded-2xl overflow-hidden transition-opacity hover:opacity-90"
            style={{
              background: "#fff",
              borderTop: "3px solid #D4A24C",
              boxShadow: "0 1px 8px rgba(14,107,107,0.08)",
            }}
          >
            <div className="p-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <time
                  dateTime={article.isoDate}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(14,107,107,0.08)",
                    color: "#0E6B6B",
                    border: "1px solid rgba(14,107,107,0.18)",
                  }}
                >
                  {article.date}
                </time>
                {article.tags.map((tag) => (
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
              <h2 className="font-serif text-xl font-bold leading-snug mb-3" style={{ color: "#0E6B6B" }}>
                {article.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
                {article.excerpt}
              </p>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>
                Read more →
              </span>
            </div>
          </Link>
        ))}
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
            ],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "South Texas Birds — News & Conservation",
            "itemListElement": articles.map((a, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "url": `https://southtexasbirds.org/news/${a.slug}`,
              "name": a.title,
            })),
          })
        }}
      />
    </div>
  );
}
