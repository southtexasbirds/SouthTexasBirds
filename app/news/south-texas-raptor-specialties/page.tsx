import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/south-texas-raptor-specialties" },
  title: "South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here | South Texas Birds",
  description:
    "South Texas is home to seven raptors found nowhere else in the United States — from the tiny Ferruginous Pygmy-Owl to the reintroduced Aplomado Falcon and the mysterious Hook-billed Kite. A complete guide to the resident birds of prey that make the Rio Grande Valley unique.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-30T00:00:00Z",
    authors: ["South Texas Birds"],
    section: "Species Guide",
    title: "South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here",
    description:
      "From the Hook-billed Kite to the Aplomado Falcon, the Rio Grande Valley is the only place in the U.S. to find seven resident raptor specialties.",
    images: [{ url: OG_IMAGE, alt: "Hook-billed Kite perched in tropical forest" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

const linkedSpecies = [
  { name: "Hook-billed Kite", href: "/birds/hook-billed-kite" },
  { name: "Gray Hawk", href: "/birds/gray-hawk" },
  { name: "White-tailed Hawk", href: "/birds/white-tailed-hawk" },
  { name: "White-tailed Kite", href: "/birds/white-tailed-kite" },
  { name: "Aplomado Falcon", href: "/birds/aplomado-falcon" },
  { name: "Ferruginous Pygmy-Owl", href: "/birds/ferruginous-pygmy-owl" },
  { name: "Crested Caracara", href: "/birds/crested-caracara" },
];

export default function SouthTexasRaptorSpecialtiesPage() {
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
              dateTime="2026-06-30"
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(14,107,107,0.08)",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.18)",
              }}
            >
              June 2026
            </time>
            {["Species Guide", "Raptors", "RGV"].map((tag) => (
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
            South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            The Rio Grande Valley is famous for its colorful songbirds — the Green Jay, the
            Altamira Oriole, the Painted Bunting. But its raptor list is equally exceptional.
            Seven birds of prey reach the United States only here, from an endangered falcon
            brought back from extinction to a strange kite that eats snails from their shells.
            This is the complete guide to South Texas&apos;s resident raptor specialties — where to
            find them, when to go, and what makes each one unique.
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
              1. Hook-billed Kite
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/hook-billed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Hook-billed Kite</Link>
              {" "}is perhaps the most eccentric raptor in North America. It eats almost nothing
              but land snails — its strongly hooked, laterally compressed bill is a specialized
              tool for extracting snails from their shells. It is the rarest of the South Texas
              raptor specialties, found almost exclusively at Santa Ana NWR and Bentsen SP in
              small, resident numbers.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Identification is complicated by two very different morphs: the dark morph is nearly
              all slate-gray or blackish; the light morph (more commonly seen) shows gray barring
              on white underparts in adults, with a pale face and dark cap. The bill shape — visible
              at surprisingly long range — is the most reliable mark.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> Santa Ana NWR (the most reliable U.S. site),
              Bentsen–Rio Grande Valley SP. Year-round resident, most often seen circling over
              the canopy in early morning. Numbers are small — typically 2–5 birds at Santa Ana.
              Check current eBird reports before visiting.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              2. Gray Hawk
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/gray-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Gray Hawk</Link>
              {" "}is a finely barred buteo of the river corridor — a bird of elegant restraint,
              gray on gray with a boldly banded tail. It reaches the U.S. only in the riparian
              corridors of South Texas and southern Arizona, arriving in spring and departing
              by October. Once called the &ldquo;Mexican Goshawk&rdquo; for its accipiter-like
              agility in woodland hunting, it pursues lizards and frogs through dense canopy with
              a style that belies its buteo classification.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> Salineño Wildlife Preserve, Bentsen SP riparian
              trail, Santa Ana NWR. Best April through August; the falling &ldquo;keee-eer&rdquo;
              call locates birds in the canopy. Arrive before 9 a.m. and listen along the river forest.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              3. White-tailed Hawk
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/white-tailed-hawk" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tailed Hawk</Link>
              {" "}is a large, handsome buteo that is a year-round resident of the open coastal
              prairies between Corpus Christi and the Rio Grande Valley — and essentially nowhere
              else in the United States. The adult&apos;s snow-white tail with a single black
              terminal band is unmistakable from below. It soars over coastal grassland and
              agricultural land, often associating with grass fires to hunt fleeing prey.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> Open coastal prairie between Corpus Christi and
              Brownsville — FM 186 between Raymondville and Port Mansfield, the coastal back roads
              of Willacy and Kenedy counties, and the grasslands surrounding Laguna Atascosa NWR.
              Year-round; easiest to see soaring in the morning.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              4. White-tailed Kite
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/white-tailed-kite" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>White-tailed Kite</Link>
              {" "}is not strictly a South Texas exclusive — it also breeds in California and
              the Pacific Coast states — but in Texas it is almost entirely a South Texas species.
              The ghostly white adult, hovering motionless in place like a tiny harrier while
              scanning for rodents, is one of the Valley&apos;s most distinctive sights. In winter,
              communal roosts of hundreds can form where prey is abundant.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> Open grassland and agricultural land near the coast
              — the road between Los Fresnos and Port Isabel (FM 100/Hwy 48), the Laguna Atascosa
              area, and agricultural back roads in Cameron and Willacy counties. Year-round; dawn
              and dusk most active.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              5. Aplomado Falcon
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/aplomado-falcon" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Aplomado Falcon</Link>
              {" "}is one of conservation biology&apos;s most celebrated comeback stories in Texas.
              Extirpated from the U.S. by the mid-20th century through habitat conversion and
              pesticide use, it was brought back through a captive breeding and release program
              beginning in the 1990s. Today, established territorial pairs breed at Laguna Atascosa
              NWR and along the barrier island system. A Federally Endangered species that can
              now be reliably seen in South Texas.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> Laguna Atascosa NWR auto tour loop (most reliable),
              Boca Chica State Park, coastal prairies between Port Isabel and Brownsville.
              Year-round resident. Perches on yucca stalks, fence posts, and native shrubs in
              open coastal prairie. October through April offers the clearest, most open conditions.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              6. Ferruginous Pygmy-Owl
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/ferruginous-pygmy-owl" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Ferruginous Pygmy-Owl</Link>
              {" "}is a diurnal (day-active) owl — one of the few owls regularly encountered in
              broad daylight in South Texas. Small enough to fit in a clenched fist, it is a
              fierce predator of lizards, small birds, and large insects, mobbed relentlessly
              by any songbird that discovers its roost. The series of hollow toots given
              persistently through the day is the sound of this species in thornscrub, and
              pishing near a calling bird will draw every jay, wren, and warbler within earshot.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> Dense Tamaulipan thornscrub at Santa Ana NWR,
              Bentsen SP, Resaca de la Palma SP, and Laguna Atascosa NWR. Year-round resident.
              Morning hours most productive; the tooting call carries well through the brush.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              7. Crested Caracara
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The{" "}
              <Link href="/birds/crested-caracara" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "#0E6B6B" }}>Crested Caracara</Link>
              {" "}is the falcon that decided to become a vulture. Though technically a falcon
              (family Falconidae), it walks and feeds like a vulture — scavenging road kills,
              following vulture flocks to carcasses, and patrolling cattle pastures on foot for
              anything edible. Its bold black-and-white pattern and bare orange face make it
              unmistakable perched on a fence post along any South Texas back road. The national
              bird of Mexico is a common sight in the Valley.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Where to find it:</strong> Virtually anywhere in South Texas with open rangeland —
              roadsides, agricultural fields, cattle operations, and back roads through Hidalgo, Starr,
              and Brooks counties. Year-round resident. Easy to spot perched on fence posts, utility
              poles, or soaring low over open ground in the early morning.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="rounded-2xl p-7"
            style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}
          >
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>
              Planning Your Raptor Day in the Valley
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
              The key to maximizing South Texas raptors is splitting your day between habitat types.
              No single site holds all seven specialties.
            </p>
            <ol className="text-sm leading-relaxed space-y-3 list-none" style={{ color: "#4E4B46" }}>
              <li>
                <strong style={{ color: "#0E6B6B" }}>1. Dawn at Bentsen or Santa Ana NWR</strong>{" "}
                — Hook-billed Kite and Gray Hawk are most visible in the first two hours after
                sunrise. The Ferruginous Pygmy-Owl is calling from thornscrub nearby.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>2. Midday drive south to Laguna Atascosa</strong>{" "}
                — The auto tour loop is the most reliable Aplomado Falcon route. White-tailed Kites
                work the fields en route on FM 100.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>3. Afternoon back roads for Caracara and White-tailed Hawk</strong>{" "}
                — Any rural road through open rangeland in Hidalgo, Willacy, or Kenedy counties
                will produce both, often from the same fence post.
              </li>
              <li>
                <strong style={{ color: "#0E6B6B" }}>4. Time of year:</strong>{" "}
                October through March is the most productive overall window — winter light is softer,
                raptors are more active in cooler temperatures, and the Aplomado Falcon is easiest
                to spot in open coastal prairie before spring vegetation growth.
              </li>
            </ol>
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
              <Link href="/news/fall-hawk-migration-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>South Texas Fall Hawk Migration: Broad-winged Kettles at Bentsen</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/spacex-refuge-land-exchange" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>SpaceX Land Exchange Threatens Rio Grande Wildlife Corridor</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C77F4A" }}>Read →</span>
              </Link>
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-sm font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
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
            "@type": "NewsArticle",
            "datePublished": "2026-06-30",
            "dateModified": "2026-06-30",
            "url": "https://southtexasbirds.org/news/south-texas-raptor-specialties",
            "headline": "South Texas Raptor Specialties: 7 Birds of Prey You Can Only Find Here",
            "description": "South Texas is home to seven raptors found nowhere else in the United States — from the tiny Ferruginous Pygmy-Owl to the reintroduced Aplomado Falcon and the mysterious Hook-billed Kite.",
            "image": "https://southtexasbirds.org/images/og-default.jpg",
            "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southtexasbirds.org" },
                { "@type": "ListItem", "position": 2, "name": "News", "item": "https://southtexasbirds.org/news" },
                { "@type": "ListItem", "position": 3, "name": "South Texas Raptor Specialties" }
              ]
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
                "name": "What raptors are unique to South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Seven raptors are found in the United States only (or almost only) in South Texas: Hook-billed Kite, Gray Hawk, White-tailed Hawk, White-tailed Kite, Aplomado Falcon, Ferruginous Pygmy-Owl, and Crested Caracara. All are year-round residents except the Gray Hawk, which is a summer breeding visitor."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the best place to see the Hook-billed Kite in the U.S.?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Santa Ana National Wildlife Refuge near Alamo, Texas, is the most reliable U.S. site for the Hook-billed Kite. A small resident population of typically 2–5 birds is present year-round. The kite is most often seen circling over the forest canopy in early morning. Bentsen-Rio Grande Valley State Park also has occasional records."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Aplomado Falcon recovering in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the Aplomado Falcon reintroduction program that began in the 1990s has established breeding pairs at Laguna Atascosa NWR and along the barrier island system south of Corpus Christi. The species was completely extirpated from Texas by the mid-20th century. While still Federally Endangered, it can now be reliably seen in the field at Laguna Atascosa — a genuine conservation success story."
                }
              },
              {
                "@type": "Question",
                "name": "When is the best time to see South Texas raptors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "October through March is the best overall window for South Texas raptor watching. Temperatures are cooler (raptors are more active), winter light is clearer, and the Aplomado Falcon is easiest to spot in open coastal prairie. The Gray Hawk is a summer-only species (April–September). Most other South Texas raptor specialties are year-round residents."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
