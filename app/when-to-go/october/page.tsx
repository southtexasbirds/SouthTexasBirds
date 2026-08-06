import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import MonthPanel from "../MonthPanel";
import MonthNav from "../MonthNav";
import { MONTH_GUIDE_DETAILS } from "../data";

const detail = MONTH_GUIDE_DETAILS.october;
const OG_IMAGE = `https://southtexasbirds.org/images/birds/${detail.ogPhoto.slug}.webp`;

export const metadata: Metadata = {
  alternates: { canonical: "/when-to-go/october" },
  title: "Birding South Texas in October | The Turnover Month | South Texas Birds",
  description:
    "October in the Rio Grande Valley: the last Broad-winged Hawks thin out, Painted Buntings and winter specialties start filtering back in, and the weather finally breaks.",
  openGraph: {
    type: "article",
    title: "Birding South Texas in October | South Texas Birds",
    description: "The Valley's turnover month — summer residents departing, winter arrivals starting, and the first genuinely pleasant weather since spring.",
    images: [{ url: OG_IMAGE, alt: detail.ogPhoto.alt }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function OctoberPage() {
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
            Rio Grande Valley · Month 10 of 12
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
            Birding South Texas in October
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            October is the Valley&apos;s turnover month — the point where fall migration tips from
            departing to arriving. The last{" "}
            <Link href="/birds/broad-winged-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Broad-winged Hawk</Link>
            s thin out early in the month, and the birds that will define the coming winter —{" "}
            <Link href="/birds/painted-bunting" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Painted Bunting</Link>
            , <Link href="/birds/vermilion-flycatcher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Vermilion Flycatcher</Link>
            , a newly-visible{" "}
            <Link href="/birds/aplomado-falcon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Aplomado Falcon</Link>
            {" "}— start filtering back in. It&apos;s also the month South Texas weather finally
            breaks: highs drop into the mid-80s, humidity eases, and mornings stop requiring the
            dawn-or-nothing discipline September demands.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>The Last of the Hawks</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/broad-winged-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Broad-winged Hawk</Link>
              {" "}kettles that defined September thin out fast in October — most of the migration
              has passed through by the first half of the month. What replaces them is a quieter
              but still substantial push of buteos, falcons, and accipiters moving at lower densities
              and often as individuals rather than kettles.{" "}
              <Link href="/hotspots#bentsen" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Bentsen</Link>
              &apos;s hawk tower remains worth an early-month morning, and{" "}
              <Link href="/hotspots#national-butterfly-center" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>National Butterfly Center</Link>
              &apos;s own fall migration season, which runs August through October, is worth adding
              as a second stop. The character of the watch changes with the numbers: September
              rewards scanning the whole sky for a distant kettle forming, while October rewards
              closer attention to individual birds crossing the treeline — a slower, more
              deliberate kind of hawk watching than the volume of September allows for.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Valley&apos;s resident raptors get more conspicuous as vegetation thins out for
              winter:{" "}
              <Link href="/birds/crested-caracara" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Crested Caracara</Link>
              {" "}and{" "}
              <Link href="/birds/white-tailed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tailed Kite</Link>
              {" "}hunt visibly over open pasture, and — this is the month it starts to matter — the{" "}
              <Link href="/birds/aplomado-falcon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Aplomado Falcon</Link>
              {" "}becomes genuinely easier to find on the coastal prairie at{" "}
              <Link href="/hotspots#laguna-atascosa" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Laguna Atascosa NWR</Link>
              {" "}as the low brush that hides it in summer starts dying back.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>The Season Turns Over</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              This is the month named for turnover, and the species list changes shape accordingly.{" "}
              <Link href="/birds/painted-bunting" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Painted Bunting</Link>
              s — largely absent from feeders since spring — begin reappearing at Valley feeder
              stations from October onward, months before their full winter numbers settle in.{" "}
              <Link href="/birds/vermilion-flycatcher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Vermilion Flycatcher</Link>
              {" "}numbers build as winter visitors join the small year-round resident population,
              giving the species its most reliable presence of the year.{" "}
              <Link href="/birds/roseate-spoonbill" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Roseate Spoonbill</Link>
              , which begins dispersing from breeding colonies as early as July, is well into that
              post-breeding wander by October and can turn up at resacas and wetlands beyond its
              usual coastal haunts.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Meanwhile the last of the fall shorebird season plays out at{" "}
              <Link href="/hotspots#south-padre-island" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>South Padre Island</Link>
              {" "}and{" "}
              <Link href="/hotspots#laguna-atascosa" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Laguna Atascosa</Link>
              , both still inside their August-through-October window —{" "}
              <Link href="/birds/piping-plover" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Piping Plover</Link>
              {" "}numbers are near their fall high point before winter settles the population in
              for good, and{" "}
              <Link href="/birds/reddish-egret" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Reddish Egret</Link>
              {" "}is still working the shallows with its distinctive lunging feeding display,
              easier to watch now that the worst of the midday heat shimmer has eased.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The most structurally important thing to know about October, though, doesn&apos;t
              involve a single species:{" "}
              <Link href="/hotspots#santa-ana" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Santa Ana National Wildlife Refuge</Link>
              &apos;s best season runs October through April, and October is effectively opening
              day. A refuge that&apos;s merely good in summer becomes one of the Valley&apos;s best
              the moment the calendar turns.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Santa Ana Comes Alive</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              An October-through-April best season isn&apos;t just a label — it reflects a real
              shift in what{" "}
              <Link href="/hotspots#santa-ana" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Santa Ana</Link>
              {" "}has to offer. The refuge&apos;s resaca and riparian trails, quiet through the
              worst of summer, become one of the Valley&apos;s more productive songbird corridors
              once cooler mornings pick up activity.{" "}
              <Link href="/birds/clay-colored-thrush" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Clay-colored Thrush</Link>
              , a rare Valley resident that goes quiet and hard to find in summer heat, is more
              findable once the weather turns. Paired with a Bentsen morning earlier in the day,
              Santa Ana makes a strong second stop for an October visit — less about a single
              headline species and more about the sheer range of what&apos;s active at once.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>The Weather Finally Breaks</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              After September&apos;s punishing heat, October offers real relief — average highs drop
              to around 87°F, lows to the upper 60s, and the muggy, oppressive humidity of late
              summer starts to ease. Rainfall drops too, to roughly half of September&apos;s total.
              The first real cold fronts typically arrive by mid-to-late October, though the exact
              timing shifts year to year — checking the forecast for a clear day behind a front is
              more useful than checking the calendar. This is the first month of the fall when a
              relaxed, multi-site day is realistic rather than a dawn-only sprint: pair a cooler
              morning at a woodland site with an afternoon at a coastal or open-country hotspot
              without fighting the heat the whole way.
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
          <MonthNav slug="october" />
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
              { "@type": "ListItem", "position": 3, "name": "October", "item": "https://southtexasbirds.org/when-to-go/october" },
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
            "url": "https://southtexasbirds.org/when-to-go/october",
            "headline": "Birding South Texas in October: The Turnover Month",
            "description": "October in the Rio Grande Valley: the last Broad-winged Hawks thin out, Painted Buntings and winter specialties start filtering back in, and the weather finally breaks.",
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
                "name": "What birds arrive in South Texas in October?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "October is a turnover month: Painted Buntings begin reappearing at feeders, Vermilion Flycatcher numbers build as winter visitors join the resident population, and Aplomado Falcon becomes more visible on the coastal prairie as vegetation thins. Meanwhile the last Broad-winged Hawks of the fall migration pass through early in the month."
                }
              },
              {
                "@type": "Question",
                "name": "Is October a good time to visit the Rio Grande Valley for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — October offers the first genuinely comfortable weather since spring, with highs around 87°F and lower humidity than September, while still catching the tail end of fall hawk and shorebird migration. Santa Ana National Wildlife Refuge's best season (October through April) also begins this month."
                }
              },
              {
                "@type": "Question",
                "name": "When does hawk migration end in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The bulk of Broad-winged Hawk migration passes through the Rio Grande Valley by early-to-mid October, tapering off from the September peak. A quieter push of buteos, falcons, and accipiters continues through the month at lower densities."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
