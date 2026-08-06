import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import MonthPanel from "../MonthPanel";
import MonthNav from "../MonthNav";
import { MONTH_GUIDE_DETAILS } from "../data";

const detail = MONTH_GUIDE_DETAILS.september;
const OG_IMAGE = `https://southtexasbirds.org/images/birds/${detail.ogPhoto.slug}.webp`;

export const metadata: Metadata = {
  alternates: { canonical: "/when-to-go/september" },
  title: "Birding South Texas in September | Hawk Migration Peak | South Texas Birds",
  description:
    "September in the Rio Grande Valley: Broad-winged Hawk kettles peak at Bentsen's hawk tower, fall shorebirds work the coast at South Padre Island, and it's still brutally hot — plan around dawn.",
  openGraph: {
    type: "article",
    title: "Birding South Texas in September | South Texas Birds",
    description: "Broad-winged Hawk kettles peak, fall shorebirds work the coast, and it's still brutally hot — a month-by-month guide to birding the Rio Grande Valley in September.",
    images: [{ url: OG_IMAGE, alt: detail.ogPhoto.alt }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function SeptemberPage() {
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
            Rio Grande Valley · Month 9 of 12
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
            Birding South Texas in September
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            September in the Rio Grande Valley is a month of contradictions. Overhead, one of the
            great raptor migrations in North America is underway — tens of thousands of{" "}
            <Link href="/birds/broad-winged-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Broad-winged Hawk</Link>
            {" "}streaming south in dense, swirling kettles. On the ground, it is still summer in
            every way that matters — highs near 92°F, real humidity, and afternoons better spent
            indoors than in the field. Birding South Texas in September means planning around that
            contradiction: mornings belong to the sky, afternoons belong to the shade.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Broad-winged Hawk Kettles</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Raptors are poor sustained flappers. They migrate by riding thermals — columns of
              warm, rising air — gaining altitude in a slow spiral before gliding on to the next
              one. When a thermal lines up with a geographic pinch point, hundreds or thousands of
              birds can converge in the same rising column at once. That swirling mass is called a{" "}
              <em>kettle</em>, and South Texas is one of the best pinch points on the continent for
              producing them: the Gulf of Mexico to the east and the Sierra Madre to the west funnel
              much of the eastern raptor population through a narrow coastal corridor.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The headline species is the{" "}
              <Link href="/birds/broad-winged-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Broad-winged Hawk</Link>
              , whose migration typically peaks in the third week of September — historically
              around September 18–25, though the exact week shifts with weather year to year.{" "}
              <Link href="/hotspots#bentsen" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Bentsen-Rio Grande Valley State Park</Link>
              &apos;s hawk tower is the Valley&apos;s primary watch site — a platform above the
              canopy, reached by tram or a short walk from the visitor center. On the right
              morning, following a cold front with clearing skies and a northwest wind, the tower
              can host counts in the tens of thousands.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Roughly 100 miles northeast of the Valley, Hazel Bazemore County Park near Corpus
              Christi runs the region&apos;s most systematic count — the annual Rio Grande Valley
              Hawkwatch, staffed by volunteer counters from mid-September through October, has
              tallied totals in the hundreds of thousands in recent seasons. It sits outside the
              Valley proper and isn&apos;t one of this site&apos;s tracked hotspots, but it&apos;s
              worth building into a trip that extends up the coast.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>The Kite in the Kettle</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              While counting Broad-wingeds by the thousand, alert observers at Bentsen sometimes
              pick out the much rarer{" "}
              <Link href="/birds/hook-billed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Hook-billed Kite</Link>
              {" "}— one of the rarest regularly occurring raptors in the U.S. It doesn&apos;t
              migrate; a handful of pairs hold territory in the Valley&apos;s mature riparian
              woodland year-round. But it often becomes active and takes to the air during the same
              thermal conditions that lift the migrating Broad-wingeds, making September hawk
              watches the single most productive time to see one in flight.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The last{" "}
              <Link href="/birds/swallow-tailed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Swallow-tailed Kite</Link>
              s of the season pass through in the first week or two of September, tail end of a push
              that begins as early as mid-July. And the Valley&apos;s year-round raptors — the{" "}
              <Link href="/birds/crested-caracara" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Crested Caracara</Link>
              {" "}patrolling open pasture and the{" "}
              <Link href="/birds/white-tailed-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tailed Hawk</Link>
              {" "}perched on fenceposts along the coastal prairie — provide a useful contrast to
              everything streaming overhead: these two are staying put for the winter, and
              September is as good a month as any to find them on territory.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Fall Shorebirds on the Coast</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              While the sky over Bentsen fills with raptors, the coast is running its own migration.{" "}
              <Link href="/hotspots#south-padre-island" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>South Padre Island Birding &amp; Nature Center</Link>
              &apos;s tidal flats and Laguna Madre shallows enter their fall migration window in
              September, running into October — one of the most productive shorebird staging
              stretches on the Gulf Coast.{" "}
              <Link href="/birds/piping-plover" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Piping Plover</Link>
              , present in building numbers since arriving in July, are joined by{" "}
              <Link href="/birds/american-oystercatcher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>American Oystercatcher</Link>
              {" "}working the shell reefs and{" "}
              <Link href="/birds/reddish-egret" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Reddish Egret</Link>
              {" "}hunting the shallows with its distinctive, off-balance lunging sprint.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <Link href="/hotspots#laguna-atascosa" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Laguna Atascosa NWR</Link>
              {" "}runs a similar August–October shorebird season and is worth folding into a
              coastal-focused day. The two axes of a September Valley trip — hawks inland,
              shorebirds on the coast — don&apos;t have to compete: a single day can cover the hawk
              tower at dawn and the coast in the evening, with the worst of the midday heat spent
              in transit or resting.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Planning Around the Heat</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              September is, on average, the wettest month of the year in the Lower Valley, and the
              humidity is real — muggy conditions are common on most days, with highs near 92°F and
              lows only dropping into the mid-70s overnight. That combination makes early starts
              non-negotiable. Arrive at Bentsen by 8 a.m., before the parking lot fills and before
              the heat sets in — the hawk tower itself offers no shade. If hawks aren&apos;t the
              priority for a given morning,{" "}
              <Link href="/hotspots#national-butterfly-center" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>National Butterfly Center</Link>
              {" "}runs its own fall migration season from August through October and offers more
              tree cover for songbird activity before the day gets hot. Whatever the plan, carry
              more water than feels necessary — the humidity makes South Texas heat feel worse than
              the number on the thermometer suggests.
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
          <MonthNav slug="september" />
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
              { "@type": "ListItem", "position": 3, "name": "September", "item": "https://southtexasbirds.org/when-to-go/september" },
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
            "url": "https://southtexasbirds.org/when-to-go/september",
            "headline": "Birding South Texas in September: Hawk Migration Peak",
            "description": "September in the Rio Grande Valley: Broad-winged Hawk kettles peak at Bentsen's hawk tower, fall shorebirds work the coast at South Padre Island, and it's still brutally hot — plan around dawn.",
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
                "name": "When does hawk migration peak in the Rio Grande Valley?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Broad-winged Hawk migration typically peaks in the third week of September, historically around September 18–25, though the exact week shifts year to year with weather. Bentsen-Rio Grande Valley State Park's hawk tower is the Valley's primary watch site, with the best counts following a cold front on a clear day with northwest wind."
                }
              },
              {
                "@type": "Question",
                "name": "Is September a good month to visit South Texas for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "September is excellent for hawk migration and fall shorebirds, but it is also still summer-hot in the Rio Grande Valley, with highs near 92°F and high humidity. Plan around dawn: mornings for hawk watching and coastal birding, with afternoons reserved for shade or travel between sites."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I see shorebirds in South Texas in September?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "South Padre Island Birding & Nature Center and Laguna Atascosa National Wildlife Refuge both enter their fall shorebird season in September, running into October. Expect Piping Plover, American Oystercatcher, and Reddish Egret working the tidal flats and shallows."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
