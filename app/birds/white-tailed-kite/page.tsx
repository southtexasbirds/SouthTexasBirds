import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/f/f8/Elanus_leucurus_3.jpg";

export const metadata: Metadata = {
  title: "White-tailed Kite (Elanus leucurus) | South Texas Birds",
  description:
    "White-tailed Kite identification, habitat, and where to find it in South Texas. A ghostly white kite that hunts by hovering motionless in place — a behavior unique among North American raptors.",
  openGraph: {
    type: "article",
    title: "White-tailed Kite | South Texas Birds",
    description: "White-tailed Kite identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "White-tailed Kite perched showing white plumage and red eyes" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Coastal prairie roads, Cameron & Willacy counties", region: "Coastal Bend", href: "/hotspots" },
];

export default function WhiteTailedKitePage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>South Texas · Year-round Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>White-tailed Kite</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Elanus leucurus &nbsp;·&nbsp; <span className="not-italic" lang="es">Milano coliblanco</span></p>
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
            <Image src={PHOTO} alt="White-tailed Kite perched showing white plumage and red eyes" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Elanus_leucurus_3.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The White-tailed Kite is one of the most elegant and distinctive raptors in North
              America — a ghostly pale bird that hunts by hovering in place over open fields,
              wings beating rapidly and tail fanned, scanning the ground below for prey. No
              other North American raptor hovers with this degree of sustained precision.
              After near-extirpation in the early 20th century, populations have recovered
              strongly and the species is now a regular sight along the Texas coast.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Adults are pale gray above and white below, with bold black shoulder patches
              (lesser coverts) that are conspicuous at rest and in flight. The tail is white —
              the other name marker. Eyes are bright red, surrounded by black. At a distance,
              hovering birds appear almost entirely white, the black shoulder patches
              reducing to small dark marks.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Immatures are similar to adults but show buff-washed underparts and a brownish
              tinge to the back, fading to the adult pattern within the first year. In flight,
              the long pointed wings and white tail with no dark terminal band distinguish it
              from all other kites in the region.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              White-tailed Kites favor open and semi-open country with sufficient prey:
              coastal prairie, agricultural fields, roadsides with grassy verges, and
              marsh edges. They avoid dense forest but use scattered trees and shrubs
              for nesting and roosting. In South Texas they are most reliably found
              on the coastal prairie of Cameron and Willacy counties.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., they occur along the Pacific Coast from Washington to Baja
              California and across the Gulf Coast. The species ranges south through
              Mexico and Central America to southern South America.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The White-tailed Kite&apos;s hunting method is its defining characteristic:
              sustained hovering at heights of 20–100 feet, wings flapping rapidly to maintain
              a stationary position, head angled down to scan the grass below. When prey is
              spotted, the bird drops — sometimes in stages, re-hovering before the final
              strike — and plunges feet-first to the ground.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Diet is strongly focused on small rodents, especially voles and mice, but
              also includes large insects and occasionally small birds or lizards.
              Communal winter roosts of dozens to hundreds of birds have been documented
              at some Texas sites, with birds arriving at dusk from surrounding territories.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Scan open fields and roadsides for the hovering silhouette. Hovering birds are often obvious from a moving vehicle.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                After significant declines in the early 20th century from egg collection and
                shooting, populations have recovered strongly. The species is now stable and
                expanding in Texas. Rodent prey availability and the presence of open grassland
                habitat are key limiting factors locally.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                White-tailed Kites are one of very few raptors that form large communal roosts
                outside the breeding season. Hundreds of birds may gather at a single roost
                site at dusk — a spectacular sight at locations where prey has been abundant
                during the day. Roost sites shift as prey populations fluctuate.
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
            "headline": "White-tailed Kite (Elanus leucurus) | South Texas Birds",
            "description": "White-tailed Kite identification, habitat, and where to find it in South Texas. A ghostly white kite that hunts by hovering motionless in place — a behavior unique among North American raptors.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Elanus_leucurus_3.jpg",
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
