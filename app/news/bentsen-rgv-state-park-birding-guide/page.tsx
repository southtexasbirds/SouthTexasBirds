import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Plain_Chachalaca_Roadside.png/1280px-Plain_Chachalaca_Roadside.png";

export const metadata: Metadata = {
  alternates: { canonical: "/news/bentsen-rgv-state-park-birding-guide" },
  title: "Bentsen-Rio Grande Valley State Park: A Complete Birding Guide | South Texas Birds",
  description:
    "Bentsen-Rio Grande Valley State Park is North America's most celebrated Rio Grande birding site — home to Hook-billed Kites, Ferruginous Pygmy-Owls, a world-famous hawk watch, and over 360 species. A complete guide to birding the RGV's flagship destination.",
  openGraph: {
    type: "article",
    publishedTime: "2026-07-01T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Destination Guide",
    title: "Bentsen-Rio Grande Valley State Park: A Complete Birding Guide",
    description:
      "The flagship World Birding Center site on the Rio Grande hosts Hook-billed Kites, Ferruginous Pygmy-Owls, and a world-famous hawk watch. Here is how to bird it.",
    images: [{ url: OG_IMAGE, alt: "Plain Chachalaca at Bentsen-Rio Grande Valley State Park" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Hook-billed Kite", href: "/birds/hook-billed-kite" },
  { name: "Gray Hawk", href: "/birds/gray-hawk" },
  { name: "Ferruginous Pygmy-Owl", href: "/birds/ferruginous-pygmy-owl" },
  { name: "Elf Owl", href: "/birds/elf-owl" },
  { name: "Ringed Kingfisher", href: "/birds/ringed-kingfisher" },
  { name: "Audubon's Oriole", href: "/birds/audubons-oriole" },
  { name: "Red-billed Pigeon", href: "/birds/red-billed-pigeon" },
  { name: "Plain Chachalaca", href: "/birds/plain-chachalaca" },
  { name: "Green Jay", href: "/birds/green-jay" },
  { name: "Altamira Oriole", href: "/birds/altamira-oriole" },
];

export default function BentsenBirdingGuidePage() {
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
              dateTime="2026-07-01"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              July 2026
            </time>
            {["Destination Guide", "RGV", "Raptors"].map((tag) => (
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
            Bentsen-Rio Grande Valley State Park: A Complete Birding Guide
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            Ask any birder who has spent a morning in the Rio Grande Valley where to go
            first, and the answer is almost always the same: Bentsen. The flagship site of
            the World Birding Center network, Bentsen-Rio Grande Valley State Park protects
            760 acres of riparian forest and Tamaulipan thornscrub along the Rio Grande west
            of Mission — and it hosts one of the highest concentrations of bird species per
            acre of any site in North America. Over 360 species have been recorded. This is
            the complete guide to birding it.
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
              Why Bentsen Is the RGV&apos;s Flagship Site
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Most birding sites specialize. Santa Ana NWR excels at thornscrub species.
              Laguna Atascosa delivers raptors and coastal birds. Estero Llano Grande is the
              waterbird capital. Bentsen does everything simultaneously — and at a density
              that makes every trail walk feel like it could produce a life bird.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The park&apos;s location on the Rio Grande means it captures genuine riparian
              woodland birds rarely seen inland — Red-billed Pigeons, Ringed Kingfishers,
              and occasional tropical visitors that cross from Mexico. The mature canopy trees,
              fed by the river, support an insect community that draws Hook-billed Kites and
              Gray Hawks daily. And the feeder stations near the visitor center are simply
              extraordinary: at peak season, Altamira Orioles, Green Jays, Plain Chachalacas,
              and Buff-bellied Hummingbirds can be simultaneously in view from a single bench.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Hook-billed Kite: Bentsen&apos;s Most Sought-After Bird
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/hook-billed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Hook-billed Kite</Link>
              {" "}is the bird most visitors come to Bentsen to see — and Bentsen is the most
              reliable site in the United States to find it. This unusual raptor specializes
              in eating land snails, extracted from their shells with its strongly hooked bill.
              In the United States it breeds almost exclusively in the riparian forest along
              the Rio Grande near Mission and Falcon Lake.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where and when to look:</strong> Hook-billed Kites are most conspicuous
              in early morning when they soar on thermals above the riparian canopy — watch
              from the hawk watch tower or the river overlook near the park entrance between
              7 and 10 a.m. The species is present year-round but most active and visible
              March through September during the breeding season. Look for the distinctive
              slow, floppy wingbeats and broadly rounded wings.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Owls: Ferruginous Pygmy-Owl and Elf Owl
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Bentsen is one of the most reliable sites in the United States for two species
              of small owls that are essentially absent from the rest of the country:
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/ferruginous-pygmy-owl" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Ferruginous Pygmy-Owl</Link>
              {" "}— a tiny, diurnal owl that calls repeatedly with a rapid series of toots
              in the early morning. It is often mobbed by songbirds, which can make it
              findable even when it is not calling. The thornscrub along Bentsen&apos;s
              interior trails is the core habitat.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/elf-owl" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Elf Owl</Link>
              {" "}— the world&apos;s smallest owl, weighing less than a golf ball —
              is a spring and summer resident (March through August), roosting by day in
              cavities in large trees and cacti. It calls at dusk with a high, rapid bark.
              The trails near the mature riparian woodland are the best spots.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Hawk Watch Tower: World-Class Raptor Migration
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Bentsen&apos;s hawk watch tower is internationally known. During spring migration
              (mid-March through May), Broad-winged Hawks pass in concentrated streams — on
              peak days in late March and April, counts can exceed 100,000 birds. Sharp-shinned
              Hawks, Cooper&apos;s Hawks, Mississippi Kites, Swainson&apos;s Hawks, and Swallow-tailed
              Kites all move through the Valley in numbers, often visible simultaneously.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Fall migration (September–October) is less dramatic but still productive.
              Peregrine Falcons are regular in both seasons. The tower also offers
              elevated views into the riparian canopy — useful for Hook-billed Kite,
              Gray Hawk, and White-tailed Kite soaring above the treetops.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Rio Grande River Species
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Bentsen&apos;s location on the Rio Grande gives it birds that don&apos;t appear
              at most Valley thornscrub sites. Along the river bank and from the
              river overlook:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <strong style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/ringed-kingfisher" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Ringed Kingfisher</Link>
                </strong>
                {" "}— a large, crow-sized kingfisher that patrols the Rio Grande from elevated
                perches. Year-round. Unmistakable with its shaggy crest and massive bill.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/red-billed-pigeon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Red-billed Pigeon</Link>
                </strong>
                {" "}— a large, dark pigeon of the riparian canopy, breeding along the Rio
                Grande. The river overlook deck is the most consistent spot. Present
                March through September.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>Gray Hawk</strong> — a compact buteo
                of riparian woodland that soars above the river corridor. More easily
                seen at Bentsen than almost anywhere else in the U.S. Present April–August.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>
                  <Link href="/birds/audubons-oriole" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Audubon&apos;s Oriole</Link>
                </strong>
                {" "}— a striking yellow-and-black oriole of brushy woodland edges, less
                conspicuous than Altamira but consistently present at Bentsen&apos;s feeders.
              </li>
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              The Visitor Center Feeders
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The feeders near the Bentsen visitor center are the single most productive
              hour of any birding trip to the Rio Grande Valley. Year-round, they draw:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <Link href="/birds/green-jay" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Green Jay</Link>
                {" "}— arriving in boisterous family groups
              </li>
              <li>
                <Link href="/birds/altamira-oriole" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Altamira Oriole</Link>
                {" "}— the largest oriole in the U.S., brilliant orange and black
              </li>
              <li>
                <Link href="/birds/plain-chachalaca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Plain Chachalaca</Link>
                {" "}— crashing through feeders in groups of 8–20, loud and spectacular
              </li>
              <li>
                <Link href="/birds/buff-bellied-hummingbird" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Buff-bellied Hummingbird</Link>
                {" "}— the Valley&apos;s resident hummingbird, at nectar feeders year-round
              </li>
              <li>
                Long-billed Thrasher, Olive Sparrow, White-tipped Dove — all reliable
                on the ground beneath the feeders
              </li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4E4B46" }}>
              The feeders are best visited at dawn and again in the final two hours
              before the park closes. Midday visits are productive but slower.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              When to Go
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Bentsen is productive year-round, but the high points correspond to
              the broader Rio Grande Valley calendar:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-none" style={{ color: "#4E4B46" }}>
              <li><strong style={{ color: "#0E6B6B" }}>March–May:</strong> Peak. Hawk migration at its most spectacular (late March–April); breeding species arrive; Hook-billed Kites and Gray Hawks most active. The park is at maximum species diversity.</li>
              <li><strong style={{ color: "#0E6B6B" }}>June–August:</strong> Hot (often 100°F+) but productive for breeding species including Elf Owl (through August), Red-billed Pigeon, and nesting raptors. Visit at dawn and leave by 10 a.m.</li>
              <li><strong style={{ color: "#0E6B6B" }}>September–October:</strong> Fall raptor migration, songbird migrants, and the first wintering species. Temperatures moderate. Excellent time to combine Bentsen with South Padre Island for shorebirds.</li>
              <li><strong style={{ color: "#0E6B6B" }}>November–February:</strong> Winter at its richest — resident species at feeders plus wintering warblers, sparrows, and occasional rarities. Hawkwatch less active but owling excellent.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4E4B46" }}>
              <strong>Practical notes:</strong> Entry $5/person, children 12 and under free.
              Park is open daily. Trams available (fee). No pets on trails. Bring water,
              insect repellent, and sunscreen in summer.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-xl font-bold mb-4" style={{ color: "#0E6B6B" }}>
              Species Profiles
            </h2>
            <div className="flex flex-wrap gap-2">
              {linkedSpecies.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-75"
                  style={{ background: "#0E6B6B", color: "#EFE3CE" }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C77F4A" }}>More from South Texas Birds</p>
            <div className="flex flex-col gap-4">
              <Link href="/news/south-texas-raptor-specialties" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/fall-hawk-migration-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Fall Hawk Migration in South Texas: When and Where to Watch</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link
              href="/news"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#C77F4A" }}
            >
              ← All News
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
              { "@type": "ListItem", "position": 2, "name": "News", "item": "https://southtexasbirds.org/news" },
              { "@type": "ListItem", "position": 3, "name": "Bentsen-RGVSP Birding Guide" },
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
            "url": "https://southtexasbirds.org/news/bentsen-rgv-state-park-birding-guide",
            "headline": "Bentsen-Rio Grande Valley State Park: A Complete Birding Guide",
            "description": "Bentsen-Rio Grande Valley State Park is North America's most celebrated Rio Grande birding site — home to Hook-billed Kites, Ferruginous Pygmy-Owls, a world-famous hawk watch, and over 360 species. A complete guide to birding the RGV's flagship destination.",
            "image": OG_IMAGE,
            "datePublished": "2026-07-01",
            "dateModified": "2026-07-01",
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "keywords": ["Bentsen Rio Grande Valley State Park", "RGV birding", "Hook-billed Kite Texas", "Rio Grande birding guide", "World Birding Center"],
            "articleSection": "Destination Guide"
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
                "name": "What birds can I see at Bentsen-Rio Grande Valley State Park?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Over 360 species have been recorded at Bentsen-RGVSP. Highlights include Hook-billed Kite (most reliable U.S. site), Ferruginous Pygmy-Owl, Elf Owl, Gray Hawk, Red-billed Pigeon, Ringed Kingfisher, Audubon's Oriole, Altamira Oriole, Green Jay, Plain Chachalaca, and Buff-bellied Hummingbird. During spring migration (March–May), the hawk watch tower can record tens of thousands of raptors in a single day."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Bentsen-Rio Grande Valley State Park?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bentsen-Rio Grande Valley State Park is located at 2800 S. Bentsen Palm Dr, Mission, TX 78572 — west of Mission, Texas on the Rio Grande. It is approximately 20 miles west of McAllen and about an hour from Brownsville/South Padre Island."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best time to visit Bentsen-RGVSP for birding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best time to visit Bentsen-RGVSP is during spring migration (mid-March through May), when hawk migration peaks, breeding species arrive, and species diversity is at its maximum. Hook-billed Kites are most active then. The park is productive year-round: fall migration (September–October) is excellent for raptors and warblers; winter (November–February) brings sparrows, warblers, and owling; summer is hot but offers breeding specialties like Elf Owl and Red-billed Pigeon."
                }
              },
              {
                "@type": "Question",
                "name": "Is Bentsen-RGVSP part of the World Birding Center?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Bentsen-Rio Grande Valley State Park is the flagship site of the World Birding Center — a network of nine birding destinations in the Rio Grande Valley operated by Texas Parks and Wildlife in partnership with local communities. The World Birding Center visitor center at Bentsen has a tram system, hawk watch tower, and feeder stations. Entry is $5 per person (children 12 and under free)."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
