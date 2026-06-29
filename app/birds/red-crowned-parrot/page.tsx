import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/Red_Crowned_Amazon.jpg";

export const metadata: Metadata = {
  title: "Red-crowned Parrot (Amazona viridigenalis) | South Texas Birds",
  description:
    "Red-crowned Parrot identification, habitat, and where to find it in South Texas. An endangered Mexican species that has established a naturalized population in the Rio Grande Valley — and is now more numerous in Texas than in its native range.",
  openGraph: {
    title: "Red-crowned Parrot | South Texas Birds",
    description: "Red-crowned Parrot identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Red-crowned Parrot showing vivid red forehead patch" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function RedCrownedParrotPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>Rio Grande Valley · Resident (naturalized)</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Red-crowned Parrot</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Amazona viridigenalis &nbsp;·&nbsp; <span className="not-italic" lang="es">Loro tamaulipeco</span></p>
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
            <Image src={PHOTO} alt="Red-crowned Parrot showing vivid red forehead patch and green plumage" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Red_Crowned_Amazon.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Red-crowned Parrot holds a unique place in conservation history: this
              Endangered Mexican species has established a self-sustaining naturalized
              population in the Rio Grande Valley — where it is now believed to be more
              numerous than in its native range in northeastern Mexico. Decades of trapping
              for the pet trade devastated the wild Mexican population. The Texas birds,
              descended from escaped and released pets beginning in the 1970s, are now
              ABA-countable and have become an unexpected conservation story. Seeing a
              flock of Red-crowned Parrots is one of the Valley&apos;s most exciting birding
              experiences.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A stocky, medium-sized parrot (13 inches) — overall bright green with a vivid
              red forehead and crown. Blue-lilac feather tips on the hindcrown create a
              subtle color gradient at the back of the head. Red wing patch is visible in
              flight. Bill is pale yellowish; eyes are orange. Tail is squared and green
              with yellowish tips.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the Valley, the main confusion species is the Yellow-headed Parrot, another
              naturalized amazon with more yellow on the head. Red-crowned has only the red
              forehead and lacks yellow. Green Parakeets are slimmer and longer-tailed.
              The rolling, harsh calls of Red-crowned Parrots are distinctive once learned.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In South Texas, Red-crowned Parrots favor urban and suburban areas with large
              trees, especially near water. They roost communally in palm groves and tall
              hardwoods. They are most concentrated in the McAllen, Harlingen, and Brownsville
              areas, with the largest known concentration in the state around Brownsville&apos;s
              Resaca de la Palma park.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The native range is limited to lowland forest in Tamaulipas, Nuevo León, and
              Veracruz in northeastern Mexico, where wild populations have been severely
              reduced by trapping and habitat loss. The Texas population may now represent
              the largest population of the species in the world.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Red-crowned Parrots are frugivores and seed-eaters, consuming fruits, seeds,
              flowers, and grain. In South Texas they feed heavily on citrus fruits, palm
              fruits, and ornamental trees, and are frequently encountered at fruiting
              fig trees. They travel in pairs or small groups during the day, joining
              larger flocks at communal roosts at dusk.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nesting occurs in tree cavities. Both parents share incubation and chick-rearing.
              The species is strongly pair-bonded, with couples remaining together year-round.
              Contact calls maintain flock cohesion during flight and foraging.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Evening roost flights are spectacular — ask locals where the current roost is located. Quinta Mazatlán staff can usually direct visitors to active flocks in the area.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#A0522D", color: "#EFE3CE" }}>IUCN: Endangered</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Endangered in its native Mexican range due to trapping and deforestation.
                The naturalized Texas population is self-sustaining and ABA-accepted.
                Some conservationists argue the Texas birds may serve as a genetic
                reservoir if the Mexican population collapses entirely.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Christmas Bird Counts in the Brownsville area regularly record 1,000+ Red-crowned
                Parrots — more than any count anywhere in the world, including the bird&apos;s native
                Mexico. The species that was disappearing from its homeland has found, entirely
                by accident, a thriving second home 200 miles north of where it evolved.
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
            "headline": "Red-crowned Parrot (Amazona viridigenalis) | South Texas Birds",
            "description": "Red-crowned Parrot identification, habitat, and where to find it in South Texas. An endangered Mexican species that has established a naturalized population in the Rio Grande Valley — and is now more numerous in Texas than in its native range.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Red_Crowned_Amazon.jpg",
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
