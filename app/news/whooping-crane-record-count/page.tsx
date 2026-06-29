import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Grus_americana_Sasata.jpg";

export const metadata: Metadata = {
  title: "Record Number of Whooping Cranes Wintering in Texas | South Texas Birds",
  description:
    "The most recent USFWS survey recorded 557 whooping cranes wintering along the Texas coast — a record high for the species' only self-sustaining wild population.",
  openGraph: {
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
          <p className="text-xs" style={{ color: "#6E6B66" }}>
            <span className="font-semibold">Source:</span> U.S. Fish and Wildlife Service 2024–2025 winter survey,
            The Invading Sea
          </p>
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
    </div>
  );
}
