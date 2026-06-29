import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/IncaDove.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/inca-dove" },
  title: "Inca Dove (Columbina inca) | South Texas Birds",
  description:
    "Inca Dove identification, habitat, and where to find it in South Texas. A small, scaly-looking dove common in towns, parks, and gardens throughout the Rio Grande Valley.",
  openGraph: {
    type: "article",
    title: "Inca Dove | South Texas Birds",
    description: "Inca Dove identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Inca Dove perched showing scaly feather pattern" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function IncaDovePage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Rio Grande Valley · Year-round Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Inca Dove</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Columbina inca &nbsp;·&nbsp; <span className="not-italic" lang="es">Tortolita cola larga</span></p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>Resident</span>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Inca Dove perched showing scaly feather pattern" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:IncaDove.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Inca Dove is a familiar and abundant small dove of urban and suburban South
              Texas — a bird you are likely to encounter in hotel parking lots, sidewalk cafés,
              and the lawns of birding hotspots before you ever reach a trail. Small, long-tailed,
              and covered in a neat scaly pattern, the Inca Dove is one of the most characteristic
              birds of the Rio Grande Valley&apos;s developed areas. It thrives alongside human
              settlement and is rarely found far from towns or irrigated land.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A small, slender dove with a distinctive scaly appearance — each feather on the
              breast, back, and neck is outlined in dark brown, creating a layered scale effect
              unique among Valley doves. The long, rounded tail is a key feature: white outer
              tail feathers are conspicuous in flight and when fanned during displays. Bill is
              thin and dark; eyes red with a narrow red eye ring.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, the rufous patches in the wings flash prominently — similar to Common
              Ground Dove, which shares the same habitats. Ground Dove is stockier and shorter-tailed;
              Inca Dove is slimmer with the longer tail and cleaner scaly pattern. The call —
              a monotonous <em>no hope, no hope</em> — is one of the most persistent sounds
              in any RGV town.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Inca Doves are birds of urban and suburban environments — gardens, lawns, parks,
              roadsides, and any area with short grass or bare ground for foraging. They favor
              areas with water access and dense shrubs or trees for roosting and nesting. In
              South Texas they are essentially resident wherever towns, farms, or disturbed
              land offer suitable habitat.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range extends from South Texas through the Southwest to California. The
              species has expanded northward in Texas over recent decades. It is found throughout
              Mexico and Central America south to Costa Rica.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Inca Doves forage on the ground for grass seeds, weed seeds, and grain — often
              in small flocks that walk steadily through short grass, bobbing their heads as
              they pick up seeds. They readily come to bird feeders with millet or cracked corn
              scattered on the ground.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In cold weather, Inca Doves form tight huddles of up to a dozen birds,
              stacking in pyramid-shaped clusters on branches to conserve warmth — an endearing
              and unusual behavior called <em>pyramid roosting</em>. Nesting occurs year-round
              in South Texas; the species may raise multiple broods per year.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Virtually guaranteed anywhere in the Valley — look for them on the ground at any park, garden, or hotspot visitor center. They practically greet you at the gate.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Common and stable. The Inca Dove has benefited from urbanization and
                agricultural development across its range. Population trends in Texas
                show a long-term expansion northward over recent decades.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                When temperatures drop, Inca Doves practice &ldquo;pyramid roosting&rdquo; — stacking in
                layers two or three birds high on a single branch, the lower birds providing
                warmth to those above. Groups of up to twelve birds have been recorded
                in these tight clusters, which resemble an avian totem pole in the early
                morning chill.
              </p>
            </section>
          </AnimateIn>
        </div>
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
            "url": "https://southtexasbirds.org/birds/inca-dove",
            "headline": "Inca Dove (Columbina inca) | South Texas Birds",
            "description": "Inca Dove identification, habitat, and where to find it in South Texas. A small, scaly-looking dove common in towns, parks, and gardens throughout the Rio Grande Valley.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/IncaDove.jpg",
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
