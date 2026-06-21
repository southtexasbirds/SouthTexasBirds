import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News | South Texas Birds",
  description:
    "Conservation news and updates affecting birds and habitat in the Rio Grande Valley and South Texas coast.",
};

const articles = [
  {
    slug: "whooping-crane-record-count",
    date: "June 2026",
    title: "Record Number of Whooping Cranes Wintering in Texas This Year",
    excerpt:
      "The most recent USFWS survey recorded 557 whooping cranes wintering along the Texas coast — a record high for the species' only self-sustaining wild population, and a testament to decades of conservation work.",
    tags: ["Conservation", "Wildlife Recovery"],
  },
  {
    slug: "rgvbf-festival-2026",
    date: "June 2026",
    title: "Save the Date: Rio Grande Valley Birding Festival Returns This November",
    excerpt:
      "The RGVBF returns to Harlingen this November — one of the largest birding festivals in the country, with over 100 field trips, expert guides, and the full lineup of RGV specialties on the table.",
    tags: ["Festival", "Events", "RGV"],
  },
  {
    slug: "spacex-refuge-land-exchange",
    date: "June 2026",
    title: "SpaceX Land Exchange Threatens Heart of Rio Grande Wildlife Corridor",
    excerpt:
      "A federal land exchange moving through the courts could reshape one of South Texas's most important wildlife corridors — directly touching habitat for the Aplomado Falcon, ocelot, and other species.",
    tags: ["Conservation", "Habitat", "Legal"],
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
                <span
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(14,107,107,0.08)",
                    color: "#0E6B6B",
                    border: "1px solid rgba(14,107,107,0.18)",
                  }}
                >
                  {article.date}
                </span>
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
    </div>
  );
}
