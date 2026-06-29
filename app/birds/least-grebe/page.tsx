import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/5/52/Tachybaptus_dominicus_brachyrhynchus_-_Least_grebe%3B_Pantanal_route-park%2C_Corumb%C3%A1%2C_Mato_Grosso_do_Sul%2C_Brazil.jpg";

export const metadata: Metadata = {
  title: "Least Grebe (Tachybaptus dominicus) | South Texas Birds",
  description:
    "Least Grebe identification, habitat, and where to find it in the Rio Grande Valley. The smallest grebe in the Western Hemisphere is common on resacas and ponds year-round.",
  openGraph: {
    type: "article",
    title: "Least Grebe | South Texas Birds",
    description: "Least Grebe identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Least Grebe on a tropical pond" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
];

export default function LeastGrebePage() {
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
            Rio Grande Valley · Year-round Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Least Grebe
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Tachybaptus dominicus &nbsp;·&nbsp; <span className="not-italic" lang="es">Zambullidor menor</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Resident
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
            <Image src={PHOTO} alt="Least Grebe swimming on a tropical pond" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Tachybaptus_dominicus_brachyrhynchus_-_Least_grebe;_Pantanal_route-park,_Corumb%C3%A1,_Mato_Grosso_do_Sul,_Brazil.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Least Grebe is the smallest grebe in the Western Hemisphere — a tiny, round-bodied diving bird
              that bobs on the surface of resacas and ponds like a dark fishing cork. It is common on still water
              throughout the Rio Grande Valley year-round, and once learned it is easy to find on virtually any small
              water body in the region. The combination of tiny size, sooty dark plumage, and penetrating golden eyes
              set against a dark face gives this bird a surprisingly intense expression for something barely larger
              than a tennis ball.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Very small (23–27 cm / 9–10.5 in), with a rounded body, very short neck, and the characteristic
              &ldquo;sawed-off&rdquo; look of a grebe — no visible tail, the body seeming to end abruptly at the
              rear. Breeding plumage: dark sooty gray-black on the head and neck, contrasting white throat, and
              brilliant yellow eyes. Non-breeding plumage is similar but with a white throat and slightly paler
              overall tones. The bill is short, pointed, and bluish-gray.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Distinguished from the Pied-billed Grebe — the other common grebe in the Valley — by much smaller size,
              darker overall plumage, conspicuous golden eye, and the slender (not thick and chicken-like) bill. The
              Least Grebe&apos;s call is a descending trill, frequently given from cover.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Resacas, ponds, slow-moving streams, and roadside ditches with emergent vegetation — any small body of
              calm, shallow fresh water with bordering vegetation will do. The Least Grebe is less tied to open water
              than larger grebes, often hiding and nesting in dense emergent plants at the water&apos;s edge.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., restricted to South Texas; the range extends through Mexico, Central America, and South
              America to Bolivia and Argentina, with a separate population in the Caribbean and southern Florida.
              Throughout its range it occupies a variety of small, shallow freshwater habitats.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Dives repeatedly for small fish, aquatic insects, crustaceans, and tadpoles. Like all grebes, it dives
              smoothly from the surface and can remain submerged for 10–20 seconds. Between dives it rides low in the
              water with the body nearly awash. The nest is a floating platform of aquatic vegetation anchored to
              emergent plants; eggs are covered with nest material when the incubating bird departs, providing
              camouflage and some insulation.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Least Grebes can breed in any month of the year in South Texas, which is unusual for a North American
              bird, and multiple clutches per year are common. Pairs form bonds that may persist across seasons on
              the same territory.
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
                Common and stable throughout its range. In South Texas, the primary threats are pollution and
                destruction of small wetland habitats through drainage, development, and agricultural conversion.
                The species adapts readily to artificial ponds and managed wetlands where water quality is maintained.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Least Grebes are among the most opportunistic breeders of any North American bird — pairs can begin
                nesting within days of a new pond filling with water, and can raise up to three clutches in a single
                year. This rapid response to available water makes the species unusually resilient in the dynamic,
                seasonally variable wetland landscape of South Texas.
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
            "headline": "Least Grebe (Tachybaptus dominicus) | South Texas Birds",
            "description": "Least Grebe identification, habitat, and where to find it in the Rio Grande Valley. The smallest grebe in the Western Hemisphere is common on resacas and ponds year-round.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/Tachybaptus_dominicus_brachyrhynchus_-_Least_grebe%3B_Pantanal_route-park%2C_Corumb%C3%A1%2C_Mato_Grosso_do_Sul%2C_Brazil.jpg",
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
