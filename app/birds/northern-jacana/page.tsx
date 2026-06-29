import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Northern_Jacana_Costa_Rica.jpg";

export const metadata: Metadata = {
  title: "Northern Jacana (Jacana spinosa) | South Texas Birds",
  description:
    "Northern Jacana identification, habitat, and where to find it in the Rio Grande Valley. The 'lily-trotter' with extraordinary feet walks on floating vegetation.",
  openGraph: {
    title: "Northern Jacana | South Texas Birds",
    description: "Northern Jacana identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Northern Jacana walking on lily pads in Costa Rica" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
];

export default function NorthernJacanaPage() {
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
            Northern Jacana
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Jacana spinosa &nbsp;·&nbsp; <span className="not-italic">Jacana norteña</span>
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
            <Image src={PHOTO} alt="Northern Jacana walking across lily pads, showing long toes" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Northern_Jacana_Costa_Rica.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Northern Jacana is one of those birds that stops you in your tracks the first time you see it:
              a chestnut-and-black shorebird casually walking across floating lily pads on impossibly long toes, as
              if gravity were optional. Popularly called the &ldquo;lily-trotter,&rdquo; its extraordinary feet
              distribute its weight across the surface of floating vegetation in a way that most birds — and all
              humans — could only envy. In South Texas it is a rare find, occurring irregularly at marsh sites with
              floating aquatic vegetation, and any report draws birders from across the Valley.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A medium-sized (19–23 cm / 7.5–9 in) wader with uniquely long toes and claws. Adults are unmistakable:
              dark chestnut body, black head, neck, and breast, yellow frontal shield and bill, and bright yellow
              flight feathers visible in flight. The frontal shield is red with a yellow tip. Immatures are brown
              above, white below, with a yellow-green bill and a distinct pale supercilium.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, the entirely yellow-green wing is striking and diagnostic — no other shorebird in the region
              has this. The call is a loud, rattling series of notes, harsh and insistent, often given when alarmed.
              The outrageously long toes are visible even in flight and clinch the identification.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Freshwater marshes and ponds with floating vegetation — water hyacinth, lily pads, and similar mats
              of floating plant material. The jacana walks across this vegetation to forage, requiring a substrate
              that most other birds cannot use. Vegetated margins and emergent plants at the water&apos;s edge are
              also used.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., limited to the Rio Grande Valley as a rare resident, first documented breeding in Texas
              in 1967. The main range extends from central Mexico through Central America to western Panama, with a
              separate population in the Greater Antilles. The species may be extending its U.S. presence as aquatic
              vegetation improves in managed wetlands.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Picks insects, spiders, small fish, and seeds from the surface of floating vegetation and the underside
              of lily pads. Extremely territorial; females defend large territories containing the nests of several
              males — an unusual &ldquo;polyandrous&rdquo; mating system where one female pairs with multiple males,
              each of whom incubates eggs and raises chicks independently.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The male&apos;s parental care is extraordinary: when threatened, he tucks the chicks under his wings
              with only their legs dangling visibly, and walks away — the ultimate camouflage through concealment.
              He can carry up to four chicks this way.
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
                Least Concern globally, with a stable population across its main range. In Texas, the small and irregular
                population is sensitive to changes in marsh vegetation and water levels. Preservation of wetlands with
                floating aquatic vegetation is the most direct conservation action for this species at the northern
                edge of its range.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                In the Northern Jacana&apos;s polyandrous system, sex roles are reversed from the typical bird pattern:
                females are larger than males (one of the few shorebirds where this is true), compete aggressively
                with other females for territories, and take no part in incubation or chick-rearing. Males do
                everything — build the floating nest, incubate the eggs, and carry the chicks under their wings
                when threatened. The female&apos;s only contribution is the eggs themselves.
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
            "headline": "Northern Jacana (Jacana spinosa) | South Texas Birds",
            "description": "Northern Jacana identification, habitat, and where to find it in the Rio Grande Valley. The 'lily-trotter' with extraordinary feet walks on floating vegetation.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/20/Northern_Jacana_Costa_Rica.jpg",
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
