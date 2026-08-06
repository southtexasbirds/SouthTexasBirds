import type { Metadata } from "next";
import Link from "next/link";
import { MONTHS } from "./data";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/when-to-go" },
  title: { absolute: "When to Go Birding in South Texas | Month-by-Month Guide" },
  description:
    "A month-by-month guide to birding the Rio Grande Valley — what's arriving, leaving, and peaking each month, with in-depth guides for the fall migration and early winter season.",
  openGraph: {
    title: "When to Go Birding in South Texas | Month-by-Month Guide",
    description:
      "What's arriving, leaving, and peaking each month in the Rio Grande Valley, plus in-depth guides for key months.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Altamira Oriole in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
    title: "When to Go Birding in South Texas | Month-by-Month Guide",
    description:
      "What's arriving, leaving, and peaking each month in the Rio Grande Valley, plus in-depth guides for key months.",
  },
};

export default function WhenToGoPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>
          Rio Grande Valley
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
          When to Go
        </h1>
        <p className="text-sm max-w-2xl leading-relaxed mb-4" style={{ color: "#5C5954" }}>
          South Texas is a year-round birding destination, but the Valley&apos;s roughly 52 resident and
          visiting specialties don&apos;t all show up at once. Winter (November–March) brings the
          Valley&apos;s highest species diversity — Whooping Cranes settle in at Aransas, wintering
          ducks and shorebirds fill the resacas, and the resident specialties are joined by dozens of
          visitors from farther north. Spring (April–May) delivers the year&apos;s single best event,
          the Trans-Gulf migration fallouts at South Padre Island. Summer (June–August) is quiet and
          brutally hot, but it&apos;s also the only time to catch the resident specialties on breeding
          territory, singing and easy to find at dawn. Fall (September–October) belongs to the hawks —
          tens of thousands of raptors, led by the{" "}
          <Link href="/birds/broad-winged-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
            Broad-winged Hawk
          </Link>
          , stream south through the Valley&apos;s hawk watch sites.
        </p>
        <p className="text-sm max-w-2xl leading-relaxed" style={{ color: "#5C5954" }}>
          Below: a season-at-a-glance table for the full year, and in-depth month guides for September,
          October, and November — the fall migration and early winter window, and the first three months
          of a longer project to cover all twelve. See also the{" "}
          <Link href="/news/south-texas-birding-calendar" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
            South Texas Birding Calendar
          </Link>{" "}
          for a species-first take on the same year.
        </p>
      </div>

      {/* ── Season-at-a-glance table ───────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-14">
        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
          Season at a Glance
        </h2>
        <div className="overflow-x-auto rounded-2xl" style={{ boxShadow: "0 1px 8px rgba(14,107,107,0.08)" }}>
          <table className="w-full text-sm border-collapse" style={{ background: "#F7F0E4", minWidth: 720 }}>
            <thead>
              <tr style={{ background: "#0E6B6B" }}>
                <th className="text-left font-semibold px-4 py-3" style={{ color: "#EFE3CE" }}>Month</th>
                <th className="text-left font-semibold px-4 py-3" style={{ color: "#EFE3CE" }}>Arriving</th>
                <th className="text-left font-semibold px-4 py-3" style={{ color: "#EFE3CE" }}>Leaving</th>
                <th className="text-left font-semibold px-4 py-3" style={{ color: "#EFE3CE" }}>Peaking</th>
              </tr>
            </thead>
            <tbody>
              {MONTHS.map((month, i) => (
                <tr key={month.slug} style={{ borderTop: i === 0 ? undefined : "1px solid rgba(14,107,107,0.1)" }}>
                  <td className="px-4 py-3 align-top">
                    {month.hasGuide ? (
                      <Link
                        href={`/when-to-go/${month.slug}`}
                        className="font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
                        style={{ color: "#0E6B6B" }}
                      >
                        {month.name}
                      </Link>
                    ) : (
                      <span className="font-semibold" style={{ color: "#0E6B6B" }}>{month.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top" style={{ color: "#4E4B46" }}>
                    {month.arriving.length > 0 ? month.arriving.join(", ") : "—"}
                  </td>
                  <td className="px-4 py-3 align-top" style={{ color: "#4E4B46" }}>
                    {month.leaving.length > 0 ? month.leaving.join(", ") : "—"}
                  </td>
                  <td className="px-4 py-3 align-top" style={{ color: "#4E4B46" }}>
                    {month.peaking.length > 0 ? month.peaking.join(", ") : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Month cards ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
          Month Guides
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MONTHS.map((month) =>
            month.hasGuide ? (
              <Link
                key={month.slug}
                href={`/when-to-go/${month.slug}`}
                className="rounded-xl p-5 transition-opacity hover:opacity-85"
                style={{ background: "#F7F0E4", borderTop: "3px solid #C77F4A", boxShadow: "0 1px 8px rgba(14,107,107,0.08)" }}
              >
                <h3 className="font-serif text-lg font-bold mb-1" style={{ color: "#0E6B6B" }}>{month.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#5C5954" }}>{month.tagline}</p>
              </Link>
            ) : (
              <div
                key={month.slug}
                aria-disabled
                className="rounded-xl p-5"
                style={{ background: "rgba(14,107,107,0.04)", border: "1px dashed rgba(14,107,107,0.2)" }}
              >
                <h3 className="font-serif text-lg font-bold mb-1" style={{ color: "#6E6B66" }}>{month.name}</h3>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "#8A8781" }}>{month.tagline}</p>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#8A8781" }}>
                  Guide coming soon
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southtexasbirds.org" },
              { "@type": "ListItem", "position": 2, "name": "When to Go", "item": "https://southtexasbirds.org/when-to-go" },
            ],
          }),
        }}
      />
    </div>
  );
}
