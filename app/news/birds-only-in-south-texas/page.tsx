import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/birds-only-in-south-texas" },
  title: "Birds You Can Only See in South Texas (Within the United States) | South Texas Birds",
  description:
    "The Rio Grande Valley is the only place in the United States where Green Jays, Altamira Orioles, Plain Chachalacas, and a dozen other tropical species occur as residents. Here's the full list of South Texas exclusives.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-28T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Species Guides",
    title: "Birds You Can Only See in South Texas | South Texas Birds",
    description:
      "The Rio Grande Valley is the only U.S. range for Green Jays, Altamira Orioles, Plain Chachalacas, and over a dozen other tropical specialties. The complete guide to South Texas exclusives.",
    images: [{ url: OG_IMAGE, alt: "Green Jay — found in the U.S. only in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

type Exclusive = {
  name: string;
  href: string;
  status: string;
  note: string;
};

const exclusives: Exclusive[] = [
  {
    name: "Green Jay",
    href: "/birds/green-jay",
    status: "Resident",
    note: "One of the Valley's most iconic birds. The only place in the U.S. where this tropical jay is a year-round resident — common and conspicuous at every major nature center.",
  },
  {
    name: "Altamira Oriole",
    href: "/birds/altamira-oriole",
    status: "Resident",
    note: "The largest oriole in the U.S., known for its pendulous woven nest up to 26 inches long. Its U.S. range is entirely limited to the lower Rio Grande corridor.",
  },
  {
    name: "Plain Chachalaca",
    href: "/birds/plain-chachalaca",
    status: "Resident",
    note: "The Valley's original alarm clock — dawn choruses of cha-cha-lac! from a dozen voices at once are a quintessential Rio Grande Valley experience. Found nowhere else in the U.S.",
  },
  {
    name: "Hook-billed Kite",
    href: "/birds/hook-billed-kite",
    status: "Rare resident",
    note: "A handful of pairs along the Rio Grande constitute the entire U.S. population. Its specialized diet of large land snails limits it to humid subtropical forest — exactly what the lower Rio Grande corridor provides.",
  },
  {
    name: "Ferruginous Pygmy-Owl",
    href: "/birds/ferruginous-pygmy-owl",
    status: "Endangered resident",
    note: "Endangered in Texas and found only in the Rio Grande Valley within the U.S. A small diurnal owl of dense thornscrub, heard far more often than seen.",
  },
  {
    name: "Ringed Kingfisher",
    href: "/birds/ringed-kingfisher",
    status: "Resident",
    note: "The largest kingfisher in the Americas — 15–16 inches long — found in the U.S. only along the lower Rio Grande. Its rattling call is audible from a distance.",
  },
  {
    name: "Audubon's Oriole",
    href: "/birds/audubons-oriole",
    status: "Resident",
    note: "A secretive oriole of dense thornscrub, far more often heard than seen. Its U.S. range extends barely across the Rio Grande from Mexico. Salineño is the most reliable U.S. site.",
  },
  {
    name: "Clay-colored Thrush",
    href: "/birds/clay-colored-thrush",
    status: "Rare resident / vagrant",
    note: "The national bird of Costa Rica has established a tiny breeding foothold in the Brownsville area and at Quinta Mazatlán. U.S. sightings are almost entirely from South Texas.",
  },
  {
    name: "Tropical Parula",
    href: "/birds/tropical-parula",
    status: "Rare resident",
    note: "A warbler whose U.S. range is limited to the lower Rio Grande Valley. Nests primarily in Spanish moss in mature riparian forest — habitat that is now extremely limited.",
  },
  {
    name: "Rose-throated Becard",
    href: "/birds/rose-throated-becard",
    status: "Rare resident",
    note: "One of the Valley's most sought-after birds. Pairs occasionally nest in the U.S. at Bentsen and Santa Ana NWR — the only reliable U.S. sites for this striking Mexican species.",
  },
  {
    name: "Northern Jacana",
    href: "/birds/northern-jacana",
    status: "Rare resident",
    note: "A remarkable wader that walks on floating vegetation using its extraordinarily long toes. Resaca de la Palma State Park has hosted the most consistent U.S. population.",
  },
  {
    name: "White-collared Seedeater",
    href: "/birds/white-collared-seedeater",
    status: "Rare resident",
    note: "A tiny finch-like bird of weedy edges along the Rio Grande. The U.S. population has fluctuated but is most reliable at Zapata and the Laredo area — the northernmost outpost of a Central American species.",
  },
];

export default function BirdsOnlyInSouthTexasPage() {
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
            {["Species Guide", "RGV Exclusives"].map((tag) => (
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
            Birds You Can Only See in South Texas (Within the United States)
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            The Rio Grande Valley sits at the northern edge of the Neotropical zone — a convergence
            point where species from Mexico and Central America reach the limit of their range.
            For American birders, this means the Valley offers a unique opportunity: a dozen
            species that cannot be seen anywhere else in the U.S. These are the exclusives —
            the birds that put the Rio Grande Valley on every serious birder&apos;s list.
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-5">

        {exclusives.map((bird, i) => (
          <AnimateIn key={bird.name} delay={i * 50}>
            <Link
              href={bird.href}
              className="block rounded-2xl p-6 transition-opacity hover:opacity-90"
              style={{
                background: "#F7F0E4",
                boxShadow: "0 1px 6px rgba(14,107,107,0.07)",
                borderLeft: "4px solid #0E6B6B",
              }}
            >
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <h2 className="font-serif text-xl font-bold" style={{ color: "#0E6B6B" }}>
                  {bird.name}
                </h2>
                <span
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full self-center"
                  style={{
                    background: "rgba(14,107,107,0.08)",
                    color: "#0E6B6B",
                    border: "1px solid rgba(14,107,107,0.18)",
                  }}
                >
                  {bird.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                {bird.note}
              </p>
              <span className="text-xs font-semibold tracking-widest uppercase mt-3 inline-block" style={{ color: "#C77F4A" }}>
                Species profile →
              </span>
            </Link>
          </AnimateIn>
        ))}

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Why the Rio Grande Valley?
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Three geographic factors converge to make the lower Rio Grande Valley the richest
              birding destination in the continental U.S.:
            </p>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: "#4E4B46" }}>
              <li><strong>Subtropical climate:</strong> Warm temperatures year-round allow tropical species to maintain resident populations at the northern edge of their range</li>
              <li><strong>River corridor:</strong> The Rio Grande itself acts as a biological highway, carrying habitat and species northward from Mexico into Texas</li>
              <li><strong>Migration crossroads:</strong> Both the Central and Mississippi flyways compress through South Texas, funneling millions of migrants through a narrow geographic bottleneck</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4E4B46" }}>
              Cameron County alone has a recorded species list of over 500 birds — more than any other county in the United States. The combination of resident tropical species and massive seasonal migration means that no other location in the contiguous U.S. offers comparable birding diversity.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/birds"
              className="flex-1 text-center rounded-xl px-5 py-4 font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#0E6B6B", color: "#EFE3CE" }}
            >
              Browse All 50 Species →
            </Link>
            <Link
              href="/hotspots"
              className="flex-1 text-center rounded-xl px-5 py-4 font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#F7F0E4", color: "#0E6B6B", border: "1px solid rgba(14,107,107,0.2)" }}
            >
              Find These Birds →
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C77F4A" }}>More from South Texas Birds</p>
            <div className="flex flex-col gap-4">
              <Link href="/news/salineno-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Salineño: The Upper Rio Grande Valley&apos;s Best-Kept Birding Secret</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/south-texas-raptor-specialties" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/south-texas-birding-calendar" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Birding Calendar: When to Go for Each Species</span>
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
              { "@type": "ListItem", "position": 3, "name": "Birds Only in South Texas", "item": "https://southtexasbirds.org/news/birds-only-in-south-texas" },
            ],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Birds You Can Only See in South Texas (Within the United States)",
            "datePublished": "2026-06-28",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/news/birds-only-in-south-texas",
            "description": "The Rio Grande Valley is the only place in the United States where Green Jays, Altamira Orioles, Plain Chachalacas, and a dozen other tropical species occur as residents.",
            "image": OG_IMAGE,
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            },
            "keywords": ["South Texas exclusive birds", "Rio Grande Valley birds", "birds only in Texas", "tropical birds USA", "RGV birding specialties"],
            "articleSection": "Species Guides"
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
                "name": "What birds are found only in South Texas in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Rio Grande Valley is home to over 30 bird species found nowhere else in the United States as residents. The most-sought include Green Jay, Altamira Oriole, Audubon's Oriole, Plain Chachalaca, Clay-colored Thrush, Buff-bellied Hummingbird, White-collared Seedeater, Ringed Kingfisher, Northern Jacana, Masked Duck, Tropical Parula, Couch's Kingbird, Tropical Kingbird, Hook-billed Kite, White-tailed Hawk, Gray Hawk, Aplomado Falcon, Ferruginous Pygmy-Owl, and various parakeets and parrots established as feral populations."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I find the most South Texas exclusive species in one place?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Santa Ana National Wildlife Refuge near Alamo, Texas is widely considered the single most species-rich site for South Texas exclusives, with resident populations of Green Jay, Plain Chachalaca, Ferruginous Pygmy-Owl, Altamira Oriole, Hook-billed Kite, Tropical Parula, and many others. Bentsen-Rio Grande Valley SP is equally productive. For White-collared Seedeater and Ringed Kingfisher, Salineño Wildlife Preserve on the upper river is the best site."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Green Jay found anywhere else in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No — the Green Jay is found in the continental United States only in South Texas. Its U.S. range is essentially restricted to the Rio Grande Valley from Laredo south to the Gulf. The species is common and widespread from Mexico south through Central America into northern South America, but the Valley represents its only permanent U.S. foothold. It is one of the most popular target species for birders visiting the region."
                }
              },
              {
                "@type": "Question",
                "name": "How many bird species are exclusive to South Texas in the U.S.?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Approximately 30–35 species reach the United States only (or almost only) in South Texas as established residents or regular breeders, depending on how you count established feral populations of parakeets and parrots. This number far exceeds any other comparably sized area in the lower 48 states. The Rio Grande Valley's position at the junction of the Nearctic and Neotropical biogeographic zones makes it uniquely positioned to host species from both the temperate U.S. and tropical Mexico."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
