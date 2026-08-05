import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO = "/images/birds/rose-throated-becard.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/rose-throated-becard" },
  title: "Rose-throated Becard (Pachyramphus aglaiae) | South Texas Birds",
  description:
    "Rose-throated Becard identification, habitat, and where to find it in South Texas. One of the most sought-after rarities in the Rio Grande Valley — the male's rose-pink throat is stunning, and the pendulous nest easier to spot than the bird.",
  openGraph: {
    type: "article",
    title: "Rose-throated Becard | South Texas Birds",
    description: "Rose-throated Becard identification, habitat, and where to find it in South Texas.",
    images: [{ url: "https://southtexasbirds.org/images/og-default.jpg", alt: "Rose-throated Becard male perched in riparian forest" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
];

export default function RoseThroatedBecardPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Rio Grande Valley · Rare Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Rose-throated Becard</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Pachyramphus aglaiae &nbsp;·&nbsp; <span className="not-italic" lang="es">Cabezón degollado</span></p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(199,127,74,0.15)", color: "#C77F4A", border: "1px solid rgba(199,127,74,0.35)" }}>Rare Resident</span>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Rose-throated Becard male perched in riparian forest" fill priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Pachyramphus_aglaiae_-_Dan_Vickers_-_459803351.jpeg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Rose-throated Becard is one of the most coveted rarities for birders visiting
              the lower Rio Grande Valley. A tropical species that barely reaches the United
              States, it has maintained a small, erratic breeding presence in South Texas for
              decades — primarily in dense riparian woodland along the Rio Grande. The male&apos;s
              brilliant rose-pink throat patch against slate-gray plumage makes it one of the
              most striking small birds on the continent, but the species can be remarkably
              difficult to actually see. Birders often locate it first by its distinctive
              pendulous nest.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Males are distinctive: dark slate-gray above, paler gray below, with a large
              rounded head and a striking rose-pink throat patch that can appear almost
              luminous in good light. The bill is thick and slightly hooked — the becard
              head shape is distinctive, giving the bird a large-headed, compact appearance.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Females are browner and buffier, with a rusty crown, buffy underparts, and
              dark brownish upperparts — superficially resembling a large vireo. Both sexes
              tend to remain high in the canopy, making observation difficult. The call —
              a thin, descending whistle — is worth learning as a locating tool.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In South Texas, Rose-throated Becards occupy mature riparian forest — the tall
              cottonwood, willow, and ebony woodland that lines the Rio Grande and its
              resacas. They favor areas with a high, dense canopy where they move slowly
              through the upper levels in search of food.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Their U.S. presence is at the very northern edge of a range that extends through
              Mexico and Central America to Costa Rica. In Texas, nesting is irregular — some
              years pairs are present at established sites, other years absent. Arizona has
              also hosted occasional breeding records.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Rose-throated Becards are slow, methodical foragers of the mid- to upper canopy,
              searching foliage for large insects, caterpillars, and small fruits. They are
              not particularly active birds and can be easily overlooked even when present.
              Patient scanning of the canopy is often required.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The nest is remarkable — a large, globular, pendulous structure of grass, bark
              strips, and plant fibers hanging from the tip of a high branch, with a side
              entrance hole. It can be 18–24 inches long and is often conspicuous long
              after the birds themselves have departed. Finding a nest is frequently the
              first indication that becards are present at a site.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>Where to See in South Texas</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {spots.map((spot) => (
                <Link key={spot.name} href={spot.href} className="flex items-center gap-3 rounded-lg px-4 py-3 transition-opacity hover:opacity-80" style={{ background: "#F7F0E4", borderLeft: "3px solid #C77F4A" }}>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0E6B6B" }}>{spot.name}</p>
                    <p className="text-xs" style={{ color: "#6E6B66" }}>{spot.region}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Presence is irregular year to year — check local birding reports before visiting specifically for this species. The distinctive nest is often the easiest thing to find.</p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Irregular — check eBird first</strong> — Rose-throated Becards are one of the most unpredictable South Texas specialties. When present, they are usually found at sites along the Rio Grande — Bentsen SP, Santa Ana NWR, and occasionally Salineño. The easiest way to locate a becard is to find its remarkable hanging nest: a bulky, globular structure suspended from the tip of a high branch and visible from a considerable distance. Local birding reports are the essential resource; when a pair is confirmed, word spreads quickly and the site is usually productive for weeks.
            </p>
          </section>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Globally stable across its broad Latin American range. In South Texas,
                the tiny U.S. population is vulnerable to loss of mature riparian woodland
                — a habitat that has declined significantly along the Rio Grande due to
                clearing, invasive species, and reduced river flows.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The becard&apos;s nest is so distinctive that it is frequently spotted by visitors
                who were not even looking for the bird — and its presence in a given year is
                often first announced on birding listservs not with a sighting, but with a
                report of the unmistakable hanging structure spotted high in a riverside tree.
              </p>
            </section>
          </AnimateIn>
        </div>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <div className="flex flex-col gap-5">
              <Link href="/news/santa-ana-nwr-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Santa Ana National Wildlife Refuge: A Complete Birding Guide</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>Santa Ana NWR is one of the most reliable U.S. sites for the Rose-throated Becard — a complete guide to this Jewel of the National Wildlife Refuge System.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
              <Link href="/news/thornscrub-restoration-rgv" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>The Rose-throated Becard is a rare, sought-after species of South Texas riparian edge woodland — a bird whose local presence depends on the intact native habitat that conservation groups are now working to restore across the Rio Grande Valley.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link href="/birds" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← Browse all South Texas species</Link>
          </div>
        </AnimateIn>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/rose-throated-becard",
            "headline": "Rose-throated Becard (Pachyramphus aglaiae) | South Texas Birds",
            "description": "Rose-throated Becard identification, habitat, and where to find it in South Texas. One of the most sought-after rarities in the Rio Grande Valley — the male's rose-pink throat is stunning, and the pendulous nest easier to spot than the bird.",
            "image": "https://southtexasbirds.org/images/birds/rose-throated-becard.webp",
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
                "name": "Is the Rose-throated Becard rare in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the Rose-throated Becard is one of the most coveted rarities in U.S. birding. It breeds irregularly in the lower Rio Grande Valley of South Texas, with nesting pairs appearing in some years but not others. Texas is the only state where it has bred in the U.S. Always check current eBird reports before planning a trip specifically for this species, as its presence is never guaranteed."
                }
              },
              {
                "@type": "Question",
                "name": "How do you identify a Rose-throated Becard?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Males are unmistakable: gray above with a black cap, blackish wings, and a vivid rose-pink throat patch. The large, round head and thick bill give the bird an almost owl-like facial profile. Females are entirely different — buffy-brown overall with a dark cap and pale underparts, and lack the rose throat. Both sexes build or inhabit the large, pendulous nest, which hangs from a high branch and may be easier to find than the bird itself."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I see a Rose-throated Becard in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When present, Rose-throated Becards are found in mature riparian woodland along the Rio Grande — Bentsen-Rio Grande Valley State Park and the Anzalduas County Park area have produced most Texas records. The nest is the best clue: a large, ragged-looking ball of plant material hanging from a sycamore or cottonwood branch over the river. Check current eBird reports for active sites before visiting."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of nest does the Rose-throated Becard build?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Rose-throated Becard builds a large, pendulous (hanging) nest — a loose globe of plant fibers, bark strips, and Spanish moss suspended from a high branch, often over water. The nest has a side entrance hole and can be 30–60 cm long. It is often the most visible sign of the species' presence, making nest-searching in appropriate habitat a productive strategy when birds are not actively calling."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
