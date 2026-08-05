import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO = "/images/birds/masked-duck.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/masked-duck" },
  title: "Masked Duck (Nomonyx dominicus) | South Texas Birds",
  description:
    "Masked Duck identification, habitat, and where to find it in the Rio Grande Valley. One of the most secretive and sought-after rarities in U.S. birding.",
  openGraph: {
    type: "article",
    title: "Masked Duck | South Texas Birds",
    description: "Masked Duck identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: "https://southtexasbirds.org/images/og-default.jpg", alt: "Male Masked Duck showing chestnut body and black mask" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function MaskedDuckPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
          ← All Species
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>
            Rio Grande Valley · Rare Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Masked Duck
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Nomonyx dominicus &nbsp;·&nbsp; <span className="not-italic" lang="es">Pato enmascarado</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Rare resident
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Male Masked Duck showing chestnut body and black face mask" fill priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Masked_duck_(Nomonyx_dominicus).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
              Wikimedia Commons
            </a>
          </p>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Masked Duck is a true gem of Rio Grande Valley birding — a small, secretive stiff-tailed duck that
              disappears into dense marsh vegetation and can be virtually impossible to find even when present. It is
              the only member of the genus <em>Nomonyx</em> and the sole relative of the Ruddy Duck found in the Valley.
              Numbers in South Texas fluctuate dramatically depending on conditions, and in good years — when water
              levels are right and emergent vegetation is dense — Estero Llano Grande or Santa Ana NWR can produce
              reliable sightings. In bad years, the species can go undetected for months.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A small (30–36 cm / 12–14 in) stiff-tailed duck that often holds the stiff tail cocked upward like a
              Ruddy Duck. Breeding male: warm chestnut body, black face mask, bright blue bill. Non-breeding male and
              female: brown overall with two pale horizontal stripes on each side of the face — a distinctive pattern
              not shared by Ruddy Duck. The female also has the striped face, though less bold than the male&apos;s.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Distinguished from the Ruddy Duck by the facial stripes (Ruddy has a plain cheek), the smaller size,
              and the tendency to remain skulking in thick vegetation rather than loafing in open water.
              White wing patches visible in flight also separate it from Ruddy Duck at any age.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Dense freshwater marshes with abundant emergent vegetation — cattails, bulrushes, water hyacinth — at the
              water&apos;s edge. Strongly tied to vegetated margins; rarely seen in open water. The species is more
              reluctant to take flight than most ducks and will dive or run into vegetation when disturbed rather than
              flushing into the air.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the United States, essentially restricted to the Rio Grande Valley as an irregular rare resident.
              Broader range extends through the Caribbean and from Mexico through Central America to Peru and Brazil.
              Movements are poorly understood but the species appears to be partially nomadic, appearing irregularly
              at sites in response to water and vegetation conditions.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Forages by diving for aquatic seeds, aquatic invertebrates, and plant material, submerging cleanly from
              the surface like the closely related Ruddy Duck. The stiff tail is held cocked upward when the bird is
              alert or displaying. Secretive by nature, it spends much of its time concealed within emergent vegetation,
              making detection a matter of patience and often luck.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Best found by scanning the edges of vegetation beds from a fixed observation point, watching for the
              bird to emerge briefly into an open channel or pool. Early morning light and calm conditions improve
              the chances of seeing one before it retreats into cover.
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
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Irregular year-round</strong> — Masked Ducks are one of the most unpredictable birds in South Texas, appearing and disappearing without warning. When present, they favor managed wetlands with dense emergent vegetation at the edges. Estero Llano Grande State Park and Santa Ana NWR are the most reliable sites. Sit quietly at a pond edge at dawn and scan vegetation margins — the bird will occasionally emerge briefly before retreating. Always check eBird for recent confirmed sightings before making a special trip.
            </p>
          </section>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Globally considered Least Concern, though populations are poorly monitored due to the species&apos;
                secretive habits and patchy distribution. Loss of freshwater marshes throughout its range is the
                primary threat. In South Texas, maintenance of managed wetlands at the major refuges provides critical
                habitat for this elusive species.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Masked Duck is placed in its own monotypic genus, <em>Nomonyx</em>, separate from the Ruddy Duck
                and Old World stiff-tails in <em>Oxyura</em>. Molecular studies suggest the two lineages diverged
                early and independently evolved the stiff-tail display behavior. The Masked Duck&apos;s closest
                living relative is the Ruddy Duck — the only other stiff-tail found in the Americas — making their
                overlap in South Texas a rare meeting of the two American stiff-tail lineages.
              </p>
            </section>
          </AnimateIn>
        </div>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <div className="flex flex-col gap-5">
              <Link href="/news/birds-only-in-south-texas" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Birds You Can Only See in South Texas (Within the United States)</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>The Masked Duck is one of the most secretive birds on the South Texas exclusive list — a stiff-tailed duck of overgrown resacas and dense marsh vegetation that almost never ventures into the open, found nowhere else in the U.S.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
              <Link href="/news/estero-llano-grande-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Estero Llano Grande State Park: A Complete Birding Guide</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>Estero Llano Grande is the most reliable site in the United States for Masked Duck — a shallow urban resaca where this secretive stiff-tailed duck regularly shows itself to patient observers with a scope.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <div className="text-center pt-4">
            <Link href="/birds" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>
              ← Browse all South Texas species
            </Link>
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
            "url": "https://southtexasbirds.org/birds/masked-duck",
            "headline": "Masked Duck (Nomonyx dominicus) | South Texas Birds",
            "description": "Masked Duck identification, habitat, and where to find it in the Rio Grande Valley. One of the most secretive and sought-after rarities in U.S. birding.",
            "image": "https://southtexasbirds.org/images/birds/masked-duck.webp",
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
                "name": "Is the Masked Duck rare in the United States?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the Masked Duck is one of the most sought-after rarities in U.S. birding. It is an irregular visitor to the lower Rio Grande Valley of South Texas, with appearances unpredictable year to year. Some years produce multiple sightings; other years none at all. Texas is the only state where it occurs regularly, and even here it is never reliably expected. Always check eBird for recent reports before chasing this species."
                }
              },
              {
                "@type": "Question",
                "name": "How do you identify a Masked Duck?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Breeding males are unmistakable: rich chestnut body with a black mask, blue bill, and stiff upright tail. Females and non-breeding males are streaky brown with two pale stripes across the face — one through the eye and one below — similar to a Ruddy Duck female but with the distinctive facial pattern. In all plumages, the white wing patches visible in flight are diagnostic and separate it from Ruddy Duck."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I find a Masked Duck in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Masked Duck favors densely vegetated freshwater ponds, resacas, and flooded fields — it spends most of its time hidden in emergent vegetation near the pond margins. In South Texas, Estero Llano Grande State Park, the ponds at Laguna Atascosa NWR, and managed wetlands in Hidalgo and Cameron counties have produced most Texas records. It is best found by checking eBird for recent sightings and scanning pond edges at dawn."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Masked Duck related to the Ruddy Duck?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the Masked Duck is the only other stiff-tailed duck found in the Americas besides the Ruddy Duck, and molecular studies confirm the two are closely related. The Masked Duck is placed in its own genus Nomonyx, separate from the Ruddy Duck's genus Oxyura. Both share the stiff-tail display behavior and diving habits, but the Masked Duck is smaller, more secretive, and far rarer in the U.S."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
