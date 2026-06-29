import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/5/52/Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg";

export const metadata: Metadata = {
  title: "SpaceX Land Exchange Threatens Rio Grande Wildlife Corridor | South Texas Birds",
  description:
    "A federal land exchange would transfer 715 acres of the Lower Rio Grande Valley NWR to SpaceX. A coalition has filed suit, arguing the swap violates federal conservation law and harms habitat for the Aplomado Falcon, ocelot, and more.",
  openGraph: {
    title: "SpaceX Land Exchange Threatens Rio Grande Wildlife Corridor | South Texas Birds",
    description:
      "A federal land exchange could reshape one of South Texas's most important wildlife corridors, harming habitat for the Aplomado Falcon, ocelot, and more.",
    images: [{ url: OG_IMAGE, alt: "Aplomado Falcon at Laguna Atascosa NWR, Texas" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Aplomado Falcon", href: "/birds/aplomado-falcon" },
  { name: "Piping Plover", href: "/birds/piping-plover" },
  { name: "Green Jay", href: "/birds/green-jay" },
  { name: "Altamira Oriole", href: "/birds/altamira-oriole" },
];

export default function SpaceXLandExchangePage() {
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
              dateTime="2026-06-20"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Conservation", "Habitat", "Legal"].map((tag) => (
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
            SpaceX Land Exchange Threatens Heart of Rio Grande Wildlife Corridor
          </h1>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-8">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              A federal land exchange moving through the courts this month could reshape one of South Texas&apos;s
              most important wildlife corridors — and it directly touches habitat for species featured on this site,
              including the{" "}
              <Link href="/birds/aplomado-falcon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Aplomado Falcon
              </Link>{" "}
              and the endangered ocelot.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>What&apos;s happening</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The U.S. Fish and Wildlife Service has approved a swap that would transfer{" "}
              <strong>715 acres</strong> of the Lower Rio Grande Valley National Wildlife Refuge to SpaceX, in
              exchange for <strong>683 acres</strong> of land the company owns near its Starbase launch facility
              in Boca Chica. The refuge was established by Congress in 1979 specifically to protect a wildlife
              corridor running along the Rio Grande.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              FWS describes the trade as a net benefit for conservation — consolidating scattered, lower-quality
              refuge parcels into larger, more resilient habitat blocks, while shedding refuge land that has already
              been affected by nearby SpaceX operations. SpaceX has not publicly stated how it intends to use the
              acquired land, though the agency&apos;s own proposal acknowledges future residential, commercial, or
              industrial development is &ldquo;reasonably foreseeable.&rdquo;
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Who&apos;s pushing back</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A coalition — the Center for Biological Diversity, Save RGV, the South Texas Environmental Justice
              Network, and the Carrizo/Comecrudo Nation of Texas — filed a federal lawsuit on June 10, 2026 against
              the Fish and Wildlife Service. Their case argues the exchange violates the National Wildlife Refuge
              System Improvement Act, the National Environmental Policy Act, and the National Historic Preservation
              Act, since part of the affected land includes the Palmito Ranch Battlefield, the site of the last land
              battle of the Civil War.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The groups point to a 2024 study finding that every monitored shorebird nest near a SpaceX launch site
              suffered egg damage or loss following a rocket launch — and argue the refuge land&apos;s
              &ldquo;degraded&rdquo; condition, used to justify the exchange, is itself a result of SpaceX&apos;s
              nearby activity.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Why it matters for the birds</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              The Lower Rio Grande Valley NWR spans roughly 103,000 acres across four counties and protects habitat
              for the endangered ocelot, Aplomado Falcon, Piping Plover, Red Knot, Green Jay, and Altamira Oriole.
              The corridor&apos;s value comes from its continuity along the river; conservationists argue that
              removing 715 acres from its middle would permanently fragment that connection, regardless of acreage
              gained elsewhere.
            </p>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>
                Affected species on this site
              </p>
              <div className="flex flex-wrap gap-2">
                {linkedSpecies.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-xs font-medium px-3 py-1 rounded-full transition-opacity hover:opacity-75"
                    style={{
                      background: "rgba(14,107,107,0.08)",
                      color: "#0E6B6B",
                      border: "1px solid rgba(14,107,107,0.18)",
                    }}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#EFE3CE" }}>
              What&apos;s next
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
              The lawsuit is active and unresolved. We&apos;ll follow this story as it develops, since the outcome
              could materially affect habitat covered throughout this site.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <p className="text-xs" style={{ color: "#6E6B66" }}>
            <span className="font-semibold">Sources:</span> Center for Biological Diversity, Texas Tribune, Texas
            Public Radio, Democracy Now!
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "SpaceX Land Exchange Threatens Rio Grande Wildlife Corridor",
            "description": "A federal land exchange would transfer 715 acres of the Lower Rio Grande Valley NWR to SpaceX. A coalition has filed suit, arguing the swap violates federal conservation law and harms habitat for the Aplomado Falcon, ocelot, and more.",
            "image": OG_IMAGE,
            "datePublished": "2026-06-20",
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" }
          })
        }}
      />
    </div>
  );
}
