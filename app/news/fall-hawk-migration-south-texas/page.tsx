import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Julie_Waters_broad_winged_hawk.JPG";

export const metadata: Metadata = {
  alternates: { canonical: "/news/fall-hawk-migration-south-texas" },
  title: "South Texas Fall Hawk Migration: Broad-winged Kettles and More | South Texas Birds",
  description:
    "Every September, tens of thousands of raptors stream south through the Rio Grande Valley. At Bentsen's hawk tower on peak days, Broad-winged Hawk kettles containing 10,000 or more birds fill the sky — one of North America's most spectacular wildlife events.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-28T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Migration",
    title: "South Texas Fall Hawk Migration: Broad-winged Kettles | South Texas Birds",
    description:
      "Every September, tens of thousands of raptors stream through the Rio Grande Valley — with Broad-winged Hawk kettles topping 10,000 birds on peak days.",
    images: [{ url: OG_IMAGE, alt: "Broad-winged Hawk perched in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Broad-winged Hawk", href: "/birds/broad-winged-hawk" },
  { name: "Swallow-tailed Kite", href: "/birds/swallow-tailed-kite" },
  { name: "White-tailed Hawk", href: "/birds/white-tailed-hawk" },
  { name: "Hook-billed Kite", href: "/birds/hook-billed-kite" },
  { name: "Crested Caracara", href: "/birds/crested-caracara" },
];

export default function FallHawkMigrationPage() {
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
              dateTime="2026-06-28"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Migration", "Raptors"].map((tag) => (
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
          <h1
            className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug"
            style={{ color: "#0E6B6B" }}
          >
            South Texas Fall Hawk Migration: Broad-winged Kettles at Bentsen
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            Every September, one of North America&apos;s most spectacular wildlife events unfolds
            over the Rio Grande Valley. Tens of thousands of raptors — led by the
            {" "}<Link href="/birds/broad-winged-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Broad-winged Hawk</Link>
            {" "}— compress into a narrow corridor along the Texas coast as they funnel south toward
            their wintering grounds in Central and South America. On peak days at Bentsen–Rio Grande
            Valley State Park, a single thermal can hold 10,000 or more birds spiraling upward in a
            dense rotating column before breaking off to glide south on set wings.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Mechanics of a Kettle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Raptors are poor sustained flappers — they migrate by soaring, using thermals (rising
              columns of warm air) to gain altitude, then gliding southward to the next thermal. When
              a thermal coincides with a geographic pinch point, hundreds or thousands of birds
              converge in the same column. This swirling mass is called a <em>kettle</em>, named
              for the visual resemblance to boiling water.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              South Texas is one of those pinch points. The Gulf of Mexico to the east and the Sierra
              Madre to the west funnel raptors through a relatively narrow coastal corridor. Add the
              topographic lift from the escarpment above the Valley floor and the result is some of
              the densest raptor concentrations anywhere on the continent during September and October.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              What to Expect by Month
            </h2>
            <ul className="text-sm leading-relaxed space-y-3" style={{ color: "#4E4B46" }}>
              <li>
                <strong style={{ color: "#0E6B6B" }}>August (late):</strong> The first wave belongs
                to the{" "}
                <Link href="/birds/swallow-tailed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Swallow-tailed Kite</Link>
                , which begins moving south from its Florida and southeastern U.S. breeding grounds
                as early as mid-July. By late August, staging flocks of dozens to hundreds appear
                over the Valley before pushing across the Gulf.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>September (peak Broadwing week):</strong> The
                Broad-winged Hawk migration peaks during the third week of September — typically
                September 18–25 — though exact timing shifts year to year with weather. A cold front
                with northwest winds is the trigger: on the right morning, Bentsen&apos;s hawk tower
                can host counts of 10,000–30,000 Broad-wingeds between 10 a.m. and 4 p.m.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>October:</strong> Broad-wingeds thin out and
                buteos take over — Red-tailed, Swainson&apos;s, and Ferruginous Hawks move through,
                along with Osprey, Peregrine Falcon, and{" "}
                <Link href="/birds/aplomado-falcon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Aplomado Falcon</Link>
                . The local{" "}
                <Link href="/birds/crested-caracara" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Crested Caracara</Link>
                {" "}and{" "}
                <Link href="/birds/white-tailed-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tailed Hawk</Link>
                {" "}remain on their territories year-round, providing a striking contrast to the migrants above.
              </li>
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Where to Watch in the Rio Grande Valley
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              <strong>Bentsen–Rio Grande Valley State Park</strong> is the go-to hawk watch site in
              the Valley. The hawk tower — a 30-foot elevated platform near the park&apos;s west end —
              puts observers above the canopy, where scanning the sky is unobstructed. Arrive by 9
              a.m. on days with northwest winds following a cold front. The park&apos;s tram service
              runs to the tower, or it&apos;s a short walk on flat trail.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              <strong>Hazel Bazemore County Park</strong> in Corpus Christi, roughly 100 miles
              northeast of the Valley, hosts the region&apos;s most systematic hawk count. The annual
              Rio Grande Valley Hawkwatch runs from mid-September through October, with volunteer
              counters tallying every individual. The park&apos;s 2024 season recorded over 700,000
              raptors — making it one of the top hawk watch sites in North America.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Any open-country location with a clear view of the sky — a county road pull-off, a
              levee top, the parking lot of a nature center — can produce kettles during peak
              migration days. The birds are not restricted to a narrow flight line; the entire
              Valley corridor becomes a river of raptors when conditions align.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The{" "}
              <Link href="/birds/hook-billed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Hook-billed Kite</Link>
              {" "}Factor
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              While counting Broad-winged Hawks by the thousand, alert observers at Bentsen sometimes
              pick out the much rarer Hook-billed Kite — a resident specialty of the Valley&apos;s
              mature woodland. Hook-billed Kites do not migrate; they live year-round in a handful
              of territories along the lower Rio Grande. But September and October hawk watches are
              the most productive time to see them in flight, as the birds often become active and
              soar during the same thermal conditions that lift the migrating Broad-wingeds. A close
              scan of any kettle at Bentsen is worth doing: the Hook-billed&apos;s distinctive bulging
              pale underwing and paddle-shaped tail silhouette are unmistakable once you know to
              look.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Planning Your Visit
            </h2>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: "#4E4B46" }}>
              <li><strong>Best date range:</strong> September 18–25 for peak Broad-winged numbers; September 1–October 15 for the full migration season</li>
              <li><strong>Best conditions:</strong> Clear sky with northwest wind following a cold front passage; thermals develop after 9–10 a.m.</li>
              <li><strong>What to bring:</strong> Binoculars (8×42 is ideal for tracking distant kettles), a wide-angle spotting scope if you have one, and water — September in the Valley is still hot</li>
              <li><strong>Bentsen tips:</strong> Park at the visitor center and take the tram or walk to the hawk tower; the park opens at 7 a.m. and fills up on peak days — arrive early</li>
            </ul>
          </section>
        </AnimateIn>

        {/* Related species chips */}
        <AnimateIn>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>
              Species Featured
            </p>
            <div className="flex flex-wrap gap-2">
              {linkedSpecies.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
                  style={{ background: "rgba(14,107,107,0.07)", color: "#0E6B6B", border: "1px solid rgba(14,107,107,0.18)" }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link
              href="/news"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
              ← All News &amp; Conservation
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
              { "@type": "ListItem", "position": 2, "name": "News & Conservation", "item": "https://southtexasbirds.org/news" },
              { "@type": "ListItem", "position": 3, "name": "South Texas Fall Hawk Migration", "item": "https://southtexasbirds.org/news/fall-hawk-migration-south-texas" },
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
            "headline": "South Texas Fall Hawk Migration: Broad-winged Kettles at Bentsen",
            "datePublished": "2026-06-28",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/news/fall-hawk-migration-south-texas",
            "description": "Every September, tens of thousands of raptors stream south through the Rio Grande Valley. At Bentsen's hawk tower on peak days, Broad-winged Hawk kettles containing 10,000 or more birds fill the sky.",
            "image": OG_IMAGE,
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            },
            "keywords": ["Broad-winged Hawk", "hawk migration", "South Texas", "Rio Grande Valley", "Bentsen", "raptor watch"],
            "articleSection": "Migration"
          })
        }}
      />
    </div>
  );
}
