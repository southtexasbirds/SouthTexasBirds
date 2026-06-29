import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Green_kingfisher_%28Chloroceryle_americana%29_male_3.jpg";

export const metadata: Metadata = {
  title: "Green Kingfisher (Chloroceryle americana) | South Texas Birds",
  description:
    "Green Kingfisher identification, habitat, and where to find it in the Rio Grande Valley. The smallest of the three kingfisher species in the Valley, secretive but resident year-round.",
  openGraph: {
    title: "Green Kingfisher | South Texas Birds",
    description: "Green Kingfisher identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Male Green Kingfisher perched over clear water" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
];

export default function GreenKingfisherPage() {
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
            Green Kingfisher
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Chloroceryle americana &nbsp;·&nbsp; <span className="not-italic">Martín pescador verde</span>
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
            <Image src={PHOTO} alt="Male Green Kingfisher perched over clear water, South Texas" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Green_kingfisher_(Chloroceryle_americana)_male_3.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Green Kingfisher is the smallest of the three kingfisher species in the Rio Grande Valley — barely
              larger than a sparrow — and easily the most secretive. Where the Ringed Kingfisher announces itself
              loudly from prominent perches over open water, the Green slips silently along clear stream margins,
              perching low over the surface and vanishing into overhanging vegetation at the first hint of disturbance.
              Finding one takes patience: scan the waterline carefully and look for the iridescent dark-green back
              of a tiny bird perching horizontally on a root or branch just above the water.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Tiny for a kingfisher (19–21 cm / 7.5–8 in), roughly sparrow-sized in body, though the long bill adds
              considerable length. Dark iridescent green above with white spotting on the wings and a white collar.
              Underparts differ by sex: the male has a rufous-orange breast band, while the female shows a white breast
              with greenish spotting or a faint incomplete band. Both sexes have yellow-green feet.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Separation from Belted and Ringed Kingfishers is straightforward by size — the Green is dramatically
              smaller — and by the dark iridescent green (not blue-gray) upperparts. The flight is fast and direct,
              low over the water surface, often accompanied by a sharp, dry chip call that is frequently the first
              indication of the bird&apos;s presence.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Green Kingfishers require clear or semi-clear water — they locate fish visually from a perch and cannot
              hunt effectively in turbid conditions. They use small streams, irrigation channels, clear resaca margins,
              and pond edges with overhanging vegetation. Larger, murkier water bodies are left to the Ringed Kingfisher.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., found in South Texas and locally along the Guadalupe River drainage in south-central Texas.
              The range extends through Mexico and Central America and across most of South America east of the Andes,
              making it one of the most widely distributed kingfishers in the Western Hemisphere.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Hunts by watching from a low perch just above the waterline — often a root, rock, or horizontal branch —
              and plunging nearly vertically for small fish, aquatic insects, and crustaceans. The dive is swift; the
              bird emerges, beats the prey against the perch, and swallows it headfirst. Flights between perches are
              low, fast, and direct, just above the water surface.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nests in burrows excavated in earthen banks, similar to other kingfishers. Water clarity is the
              critical habitat variable: in droughted or disturbed conditions that increase turbidity, Green Kingfishers
              vacate stretches of water they previously held year-round.
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
                Common and stable throughout its broad range. In South Texas, water clarity is the critical limiting
                factor — sedimentation, agricultural runoff, and channelization that reduce water clarity all reduce
                available habitat. The species is sensitive to any disturbance that clouds its hunting waters.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Green Kingfisher is a master of stillness. It can sit motionless on a low perch for extended
                periods, watching the water with intense focus — its dark iridescent back blending into overhanging
                vegetation so effectively that it is regularly overlooked even by birders actively searching for it.
                Hearing the sharp chip call in flight is often the only indication one has passed by.
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
    </div>
  );
}
