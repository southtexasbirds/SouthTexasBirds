import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Neotropic_cormorant_%28Nannopterum_brasilianum_mexicanum%29_Peten.jpg";

export const metadata: Metadata = {
  title: "Neotropic Cormorant (Nannopterum brasilianum) | South Texas Birds",
  description:
    "Neotropic Cormorant identification, habitat, and where to find it in South Texas. Smaller and longer-tailed than the Double-crested, this abundant cormorant is a fixture on Valley resacas and ponds.",
  openGraph: {
    title: "Neotropic Cormorant | South Texas Birds",
    description: "Neotropic Cormorant identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Neotropic Cormorant perched with wings spread" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
];

export default function NeotropicCormorantPage() {
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
            Neotropic Cormorant
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Nannopterum brasilianum &nbsp;·&nbsp; <span className="not-italic">Cormorán neotropical</span>
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
            <Image src={PHOTO} alt="Neotropic Cormorant perched with wings spread" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Neotropic_cormorant_(Nannopterum_brasilianum_mexicanum)_Peten.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Neotropic Cormorant is the most abundant cormorant in the Americas by total
              population and a ubiquitous presence on South Texas waterways. Smaller and slimmer
              than the familiar Double-crested Cormorant, it is the species you will almost always
              encounter on Valley resacas, ponds, and rivers. Look for them perched in groups on
              dead snags or low branches overhanging water, wings spread in the classic cormorant
              sun-drying pose. The species was formerly known as the Olivaceous Cormorant.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Adults are glossy black with a long, thin tail and a slender bill. The key
              field mark separating it from the Double-crested Cormorant is the facial skin:
              tan or buff-colored on the Neotropic (versus bright orange-yellow on the
              Double-crested), bordered by a narrow white edge that forms a pointed V behind
              the bill in breeding birds. The Neotropic is also noticeably smaller and
              proportionally longer-tailed.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight the long tail and smaller overall size are helpful cues. Immatures are
              brownish with pale underparts. Both species often occur together on South Texas
              waterways, making direct comparison possible and instructive.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Neotropic Cormorants occupy virtually any open water — resacas, ponds, rivers,
              coastal bays, reservoirs, and flooded agricultural fields. They are equally
              comfortable in fresh and brackish water and are often found alongside herons,
              egrets, and spoonbills in colonial nesting rookeries.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., they breed from Texas west to Arizona and are year-round residents
              in South Texas. Their range extends south through Mexico, Central America, and
              South America to Tierra del Fuego, making them one of the most widely distributed
              water birds in the Western Hemisphere.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Like all cormorants, Neotropics dive from the surface and pursue fish underwater,
              propelled by their powerful webbed feet. They lack waterproofing oils in their
              feathers — an adaptation that reduces buoyancy and makes diving easier — which
              is why they must spread their wings to dry after swimming.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Diet is almost entirely small fish. They nest colonially, often in the same
              trees as herons, egrets, and spoonbills. Nests are built of sticks, typically
              in trees or shrubs overhanging water. Both parents share incubation and
              feeding of chicks.
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
                Abundant and expanding. The Neotropic Cormorant has increased significantly in
                Texas over the past several decades and is not a conservation concern. Its
                ability to exploit a wide variety of wetland habitats makes it resilient to
                many forms of habitat change.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Unlike most waterbirds, cormorants do not have waterproofing oils in their
                feathers. This is not an evolutionary flaw — it&apos;s a trade-off. Wettable
                feathers reduce buoyancy, making underwater pursuit of fish easier. The
                famous wing-spreading pose is how they compensate: drying out between dives
                so they can fly again.
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
            "headline": "Neotropic Cormorant (Nannopterum brasilianum) | South Texas Birds",
            "description": "Neotropic Cormorant identification, habitat, and where to find it in South Texas. Smaller and longer-tailed than the Double-crested, this abundant cormorant is a fixture on Valley resacas and ponds.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/31/Neotropic_cormorant_%28Nannopterum_brasilianum_mexicanum%29_Peten.jpg",
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
