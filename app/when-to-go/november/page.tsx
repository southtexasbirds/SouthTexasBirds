import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import MonthPanel from "../MonthPanel";
import MonthNav from "../MonthNav";
import { MONTH_GUIDE_DETAILS } from "../data";

const detail = MONTH_GUIDE_DETAILS.november;
const OG_IMAGE = `https://southtexasbirds.org/images/birds/${detail.ogPhoto.slug}.webp`;

export const metadata: Metadata = {
  alternates: { canonical: "/when-to-go/november" },
  title: "Birding South Texas in November | Winter Season Opens | South Texas Birds",
  description:
    "November in the Rio Grande Valley: Whooping Cranes settle in at Aransas, four Valley hotspots enter their best season at once, and comfortable temperatures mark the start of peak birding season.",
  openGraph: {
    type: "article",
    title: "Birding South Texas in November | South Texas Birds",
    description: "Whooping Cranes settle in at Aransas, waterfowl build on the resacas, and comfortable temperatures mark the start of the Valley's prime birding season.",
    images: [{ url: OG_IMAGE, alt: detail.ogPhoto.alt }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function NovemberPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/when-to-go" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
          ← When to Go
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-5 pb-10">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>
            Rio Grande Valley · Month 11 of 12
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
            Birding South Texas in November
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            November is when South Texas winter birding properly opens.{" "}
            <Link href="/birds/whooping-crane" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Whooping Crane</Link>
            s, which arrive at Aransas NWR in late October, are settled into their wintering
            grounds by November — the boat-tour viewing season begins in earnest. Four of the
            Valley&apos;s nine hotspots enter their best seasonal window this month. Temperatures
            turn genuinely comfortable for the first time since spring. And the Rio Grande Valley
            Birding Festival descends on Harlingen, drawing visiting birders from across the
            country. If one month marks the start of the Valley&apos;s prime season, it&apos;s this
            one.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Crane Season Opens</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The entire wild{" "}
              <Link href="/birds/whooping-crane" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Whooping Crane</Link>
              {" "}population — the only self-sustaining wild flock in existence — winters along
              the Texas coast, primarily at Aransas National Wildlife Refuge near Rockport. The
              birds arrive in late October and are settled in by November, when the best viewing
              window — November through March — begins. Guided boat tours from Rockport Harbor take
              visitors close to feeding birds in San Antonio Bay, where they forage mainly on blue
              crabs in the shallow tidal flats.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Aransas sits roughly three hours up the coast from the Valley — genuinely outside this
              site&apos;s core RGV hotspot list — but it&apos;s close enough, and significant enough,
              that most November trips built around the Valley treat it as a dedicated add-on day
              rather than a detour. Boat tours book out well in advance for the full winter season,
              so reserving ahead matters more than showing up and hoping for a spot.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The stakes are higher than a typical winter-visitor sighting. The Wood
              Buffalo–Aransas flock is the only self-sustaining wild population of{" "}
              <Link href="/birds/whooping-crane" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Whooping Crane</Link>
              {" "}in existence, and it has grown from just 15 birds in 1941 to several hundred
              today — see the{" "}
              <Link href="/news/whooping-crane-record-count" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>recent count report</Link>
              {" "}for the latest survey figures. Every bird arriving at Aransas this month is part
              of one of American conservation&apos;s genuine long-term success stories.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Four Hotspots, One Opening Day</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              More than any other month, November marks a coordinated shift across the Valley&apos;s
              hotspot network.{" "}
              <Link href="/hotspots#santa-ana" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Santa Ana NWR</Link>
              &apos;s best season, which opened in October, is now in full swing.{" "}
              <Link href="/hotspots#laguna-atascosa" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Laguna Atascosa NWR</Link>
              &apos;s waterfowl season begins, its November–March best window overlapping with{" "}
              <Link href="/birds/aplomado-falcon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Aplomado Falcon</Link>
              {" "}visibility that started building in October.{" "}
              <Link href="/hotspots#salineno" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Salineño Wildlife Preserve</Link>
              {" "}and{" "}
              <Link href="/hotspots#resaca-de-la-palma" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Resaca de la Palma State Park</Link>
              {" "}both enter their own November-through-spring best windows at the same time —
              Resaca de la Palma is a particularly good bet for{" "}
              <Link href="/birds/tropical-parula" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Tropical Parula</Link>
              {" "}and{" "}
              <Link href="/birds/ferruginous-pygmy-owl" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Ferruginous Pygmy-Owl</Link>
              {" "}once its own best season is underway. The practical result: a Valley trip planned
              for November has more hotspots at peak condition simultaneously than at any other
              point in the calendar.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              On the water, that means building numbers of{" "}
              <Link href="/birds/mottled-duck" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Mottled Duck</Link>
              , <Link href="/birds/black-bellied-whistling-duck" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Black-bellied Whistling-Duck</Link>
              , and{" "}
              <Link href="/birds/neotropic-cormorant" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Neotropic Cormorant</Link>
              {" "}on the resacas and impoundments — species present year-round on this site but
              genuinely easiest to find in quantity once regional wintering waterfowl swell the
              numbers around them.{" "}
              <Link href="/birds/piping-plover" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Piping Plover</Link>
              {" "}and{" "}
              <Link href="/birds/vermilion-flycatcher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Vermilion Flycatcher</Link>
              {" "}are both near their seasonal peak, and{" "}
              <Link href="/birds/painted-bunting" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Painted Bunting</Link>
              s, back at feeders since October, are fully established by now.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Residents, Without the Heat</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              It&apos;s easy to let the winter arrivals dominate a November trip plan, but the
              Valley&apos;s year-round resident specialties are at their most enjoyable this month
              too — not because they&apos;ve changed, but because the birder has an easier time of
              it. The feeder stations at{" "}
              <Link href="/hotspots#bentsen" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Bentsen</Link>
              {" "}and{" "}
              <Link href="/hotspots#santa-ana" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Santa Ana</Link>
              {" "}that produce{" "}
              <Link href="/birds/green-jay" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Green Jay</Link>
              , <Link href="/birds/altamira-oriole" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Altamira Oriole</Link>
              , and{" "}
              <Link href="/birds/plain-chachalaca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Plain Chachalaca</Link>
              {" "}before 9 a.m. in any season are far more pleasant to sit at for an hour when the
              temperature is 79°F instead of 95°F. For a first-time Valley visitor building a trip
              around the winter arrivals, November is also simply the easiest month to add the
              resident specialties to the same itinerary without the heat forcing hard trade-offs
              between an early wake-up and a comfortable one.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>The Festival and the Weather</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/news/rgvbf-festival-2026" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Rio Grande Valley Birding Festival</Link>
              {" "}is held in Harlingen every November — one of the largest birding festivals in the
              country, running field trips and expert-led outings across the Valley&apos;s hotspot
              network for the length of the event.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Outside festival week, November is simply pleasant: highs around 79°F, lows in the low
              60s, and humidity dropping to its most comfortable point of the fall. Rain is scarce.
              It&apos;s the first month since spring where an all-day, multi-site itinerary is
              genuinely comfortable rather than something to plan carefully around heat.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <MonthPanel detail={detail} />
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>If You Only Have One Day</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>{detail.oneDayPlan}</p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>Plan a Longer Trip</p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              For a multi-day November trip, the{" "}
              <Link href="/itineraries" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>winter waterfowl itinerary</Link>
              {" "}covers Laguna Atascosa and Estero Llano Grande with an optional Aransas add-on day
              — built for exactly this window. For the record-setting context behind this
              season&apos;s crane numbers, see the{" "}
              <Link href="/news/whooping-crane-record-count" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Whooping Crane count report</Link>
              .
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <MonthNav slug="november" />
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
              { "@type": "ListItem", "position": 2, "name": "When to Go", "item": "https://southtexasbirds.org/when-to-go" },
              { "@type": "ListItem", "position": 3, "name": "November", "item": "https://southtexasbirds.org/when-to-go/november" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "datePublished": "2026-08-06",
            "dateModified": "2026-08-06",
            "url": "https://southtexasbirds.org/when-to-go/november",
            "headline": "Birding South Texas in November: Winter Season Opens",
            "description": "November in the Rio Grande Valley: Whooping Cranes settle in at Aransas, four Valley hotspots enter their best season at once, and comfortable temperatures mark the start of peak birding season.",
            "image": OG_IMAGE,
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            }
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
                "name": "When do Whooping Cranes arrive in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Whooping Cranes arrive at Aransas National Wildlife Refuge near Rockport in late October and are settled into their wintering territories by November. The best viewing window runs November through March, with guided boat tours from Rockport Harbor offering the most reliable views."
                }
              },
              {
                "@type": "Question",
                "name": "Is November a good time to visit the Rio Grande Valley for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "November is one of the best months to visit — comfortable temperatures (highs around 79°F), four of the Valley's hotspots entering their best seasonal window at once, wintering waterfowl and shorebirds building on the resacas, and the Rio Grande Valley Birding Festival held in Harlingen."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Rio Grande Valley Birding Festival?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Rio Grande Valley Birding Festival (RGVBF) is an annual birding festival held in Harlingen, Texas every November, and is one of the largest birding festivals in the country, with field trips and expert-led outings across the Valley's hotspot network."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
