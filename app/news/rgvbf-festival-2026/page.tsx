import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png";

export const metadata: Metadata = {
  title: "Rio Grande Valley Birding Festival Returns This November | South Texas Birds",
  description:
    "The Rio Grande Valley Birding Festival returns to Harlingen this November — one of the largest birding festivals in the country, with field trips, expert guides, and the full lineup of RGV specialties on the table.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-15T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Events",
    title: "Rio Grande Valley Birding Festival 2026 | South Texas Birds",
    description:
      "The RGVBF returns to Harlingen this November — over 100 field trips, expert guides, and the full lineup of RGV specialties.",
    images: [{ url: OG_IMAGE, alt: "Green Jay in Mission, Texas" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Green Jay", href: "/birds/green-jay" },
  { name: "Plain Chachalaca", href: "/birds/plain-chachalaca" },
  { name: "Altamira Oriole", href: "/birds/altamira-oriole" },
];

export default function RGVBFFestival2026Page() {
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
              dateTime="2026-06-15"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Festival", "Events", "RGV"].map((tag) => (
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
            Save the Date: Rio Grande Valley Birding Festival Returns This November
          </h1>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-8">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              If you&apos;ve been working through the species pages on this site and want to see
              some of these birds in person with expert guidance, mark your calendar — the Rio
              Grande Valley Birding Festival returns to Harlingen this November.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>What it is</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Now in its fourth decade, the RGVBF is one of the largest birding festivals in
              the country, drawing birders from across the U.S. and beyond to the Valley&apos;s
              unmatched mix of thornscrub, riparian woodland, and coastal habitat. Past festivals
              have featured well over 100 field trips, dozens of expert guides, seminars, a trade
              show, a birder&apos;s bazaar, art and photography contests, and family-friendly
              activities including raptor flight shows.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Why it&apos;s worth going</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              This is the same habitat covered throughout this site —{" "}
              <Link href="/birds/green-jay" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Green Jay
              </Link>
              ,{" "}
              <Link href="/birds/plain-chachalaca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Plain Chachalaca
              </Link>
              ,{" "}
              <Link href="/birds/altamira-oriole" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>
                Altamira Oriole
              </Link>
              , and dozens of other Valley specialties are all on the table, often with
              experienced local guides pointing them out. For visitors who&apos;ve never birded
              the RGV before, festival organizers note first-timers can expect to add 30 or
              more new species to their life list.
            </p>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>
                Species you might see
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
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>When and where</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The festival is held at the Harlingen Convention Center each November. Registration
              details and exact 2026 dates are expected to open in July — keep an eye on{" "}
              <a
                href="https://rgvbf.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "#0E6B6B" }}
              >
                rgvbf.org
              </a>{" "}
              for announcements.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#EFE3CE" }}>
              In the meantime
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
              If November feels far off, the Valley has smaller, boutique events too — like
              Spring Chirp, a 3-day festival based in Weslaco timed to spring migration, for
              those who want a quieter, more intimate alternative.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <p className="text-xs" style={{ color: "#6E6B66" }}>
            <span className="font-semibold">Sources:</span> Rio Grande Valley Birding Festival (rgvbf.org), Cornell Lab All About Birds
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
            "headline": "Rio Grande Valley Birding Festival Returns This November",
            "description": "The Rio Grande Valley Birding Festival returns to Harlingen this November — one of the largest birding festivals in the country, with field trips, expert guides, and the full lineup of RGV specialties on the table.",
            "image": OG_IMAGE,
            "datePublished": "2026-06-15",
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" }
          })
        }}
      />
    </div>
  );
}
