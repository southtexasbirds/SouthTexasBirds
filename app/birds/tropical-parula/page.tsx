import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Setophaga_pitiayumi_Monteverde_03.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/tropical-parula" },
  title: "Tropical Parula (Setophaga pitiayumi) | South Texas Birds",
  description:
    "Tropical Parula identification, habitat, and where to find it in the Rio Grande Valley. A tiny warbler tied to Spanish moss, barely reaching the U.S. in South Texas.",
  openGraph: {
    type: "article",
    title: "Tropical Parula | South Texas Birds",
    description: "Tropical Parula identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Tropical Parula showing blue-gray upperparts and yellow underparts" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function TropicalParulaPage() {
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
            Tropical Parula
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Setophaga pitiayumi &nbsp;·&nbsp; <span className="not-italic" lang="es">Chipe tropical</span>
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
            <Image src={PHOTO} alt="Tropical Parula perched showing blue-gray upperparts and bright yellow throat and breast" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Setophaga_pitiayumi_Monteverde_03.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Tropical Parula is one of the most sought-after warblers in the United States — a tiny jewel of
              blue-gray and gold that barely enters the country in the riparian forests of the Lower Rio Grande Valley.
              Nearly identical to the familiar Northern Parula, it is distinguished by the absence of the dark breast
              band and by its intimate association with Spanish moss, which it uses almost exclusively as nesting
              material. Where Spanish moss drapes the oaks and ebony trees along the Rio Grande, a patient observer
              in late spring or summer stands a real chance of finding one working through the canopy with its
              buzzy, rising trill.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A very small warbler (10–11 cm / 4 in) with blue-gray upperparts and a bright yellow throat and breast.
              A yellow-green back patch is visible at close range. Two white wing bars and white eye arcs above and
              below the eye are useful marks. The bill is small and sharply pointed. Both sexes are similar, though
              males tend to show a richer orange wash across the breast.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The key distinction from the Northern Parula — which can overlap during migration — is the clean,
              unbroken yellow breast: no dark necklace, no chestnut breast band. The song is a buzzy, rising trill
              that climbs the scale before ending abruptly, very similar to the Northern Parula&apos;s but subtly
              higher-pitched and less emphatic at the finish.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Riparian forest and Spanish moss-draped woodlands along the Rio Grande. The species is so closely
              tied to Spanish moss that its presence in the Valley is almost entirely determined by where the moss
              grows — primarily in the shaded, humid conditions beneath mature oaks, ebony, and anaqua trees.
              Bentsen SP and Santa Ana NWR, with their extensive old-growth riparian canopy, are the most
              consistent U.S. sites.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Tropical Parula&apos;s main range extends from Mexico through Central and South America to
              Argentina. Its presence in the U.S. is limited to the extreme southern tip of Texas, where a small
              number of pairs breed annually. The species is a rare but regular resident; numbers fluctuate from
              year to year depending on local conditions.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              An active, acrobatic forager that gleans insects and spiders from the outer foliage and hanging
              strands of Spanish moss. It often hangs upside down from the tips of branches in the manner of
              a chickadee. Diet is almost entirely invertebrates during the breeding season; small berries
              and fruit supplements the diet when available.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nesting begins in April or May. The nest is tucked inside a clump of Spanish moss, making it
              exceptionally difficult to locate. Clutch size is typically three to four eggs. The male sings
              persistently from the canopy throughout the breeding season — his buzzy trill is the most
              reliable way to detect a breeding pair.
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

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
                IUCN: Least Concern
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Widespread and common throughout its broad tropical range. In South Texas, however, the breeding
                population is small and local, dependent on the continued health of riparian woodland and the
                availability of Spanish moss. Loss of old-growth trees along the Rio Grande is the primary
                threat to the U.S. population. Protection and restoration of native riparian forest directly
                benefits this species.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Tropical Parula builds its nest entirely inside a hanging clump of Spanish moss — essentially
                hollowing out a living curtain of plant material into a hidden nursery. This makes the nest nearly
                impossible to find even when the bird is singing right overhead. The dependence is mutual in a
                sense: Spanish moss itself thrives in the same humid riparian microclimate the parula requires,
                so the two are inextricably linked in the Valley&apos;s most sheltered woodland corridors.
              </p>
            </section>
          </AnimateIn>
        </div>

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
            "url": "https://southtexasbirds.org/birds/tropical-parula",
            "headline": "Tropical Parula (Setophaga pitiayumi) | South Texas Birds",
            "description": "Tropical Parula identification, habitat, and where to find it in the Rio Grande Valley. A tiny warbler tied to Spanish moss, barely reaching the U.S. in South Texas.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Setophaga_pitiayumi_Monteverde_03.jpg",
                        "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            }
          })
        }}
      />
    </div>
  );
}
