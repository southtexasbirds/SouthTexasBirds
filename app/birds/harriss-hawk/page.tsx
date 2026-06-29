import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/Harris%27s_Hawk_%28Parabuteo_unicinctus%29_3_of_4_in_set.jpg";

export const metadata: Metadata = {
  title: "Harris's Hawk (Parabuteo unicinctus) | South Texas Birds",
  description:
    "Harris's Hawk identification, habitat, and where to find it in South Texas. The only hawk in the world known to hunt cooperatively in family groups.",
  openGraph: {
    type: "article",
    title: "Harris's Hawk | South Texas Birds",
    description: "Harris's Hawk identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Harris's Hawk perched in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
];

export default function HarrisHawkPage() {
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
            South Texas · Year-round Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Harris&apos;s Hawk
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Parabuteo unicinctus &nbsp;·&nbsp; <span className="not-italic" lang="es">Aguililla rojinegra</span>
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
            <Image src={PHOTO} alt="Harris's Hawk perched in South Texas scrubland" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Harris%27s_Hawk_(Parabuteo_unicinctus)_3_of_4_in_set.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              Harris&apos;s Hawk is the only hawk in the world known to hunt cooperatively in organized family groups —
              a behavior more reminiscent of wolves than raptors. Groups of two to six related birds coordinate to
              flush, pursue, and dispatch prey that a single hawk could not easily take alone. This remarkable social
              strategy, combined with rich two-toned plumage and a bold, curious personality, has made it a favorite
              among falconers and birdwatchers alike. It is a common and conspicuous sight across the brushlands and
              open country of South Texas year-round.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large buteo (53–59 cm / 21–23 in) with distinctive two-toned plumage: rich chestnut-maroon shoulders
              and thigh feathering contrast strongly with a dark brown to black body and wings. The tail is white at
              the base and tip with a broad black band in between — a pattern visible at distance. The cere and legs
              are yellow-orange. Sexes are alike in pattern; females are noticeably larger.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In flight, the chestnut wing linings, white tail base, and white tail tip are diagnostic. Immatures are
              streaked brown below with some rufous tones on the shoulders — already showing the distinctive tail
              pattern. In South Texas, the combination of dark body and chestnut shoulders is unique among the hawks.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Harris&apos;s Hawks favor semi-arid open habitats: Tamaulipan thornscrub, desert scrub, brushy open
              country, and woodland edges throughout South Texas. They are tolerant of human presence and occur in
              suburban areas with large trees. Common across Hidalgo, Starr, Webb, and Jim Hogg counties, and along
              roadsides and open brush in virtually any part of the Valley.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The U.S. range also includes southern Arizona and southwestern New Mexico. The species extends through
              Mexico, Central America, and most of South America east of the Andes, from Colombia south to Chile
              and central Argentina.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Pack hunting sets Harris&apos;s Hawk apart from all other raptors. Groups coordinate pursuits, with some
              birds flushing prey while others cut off escape routes; the group shares the kill. Prey includes jackrabbits,
              cottontails, squirrels, lizards, and birds. Family groups maintain year-round territories and may include
              offspring from previous years as helpers at the nest.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nests are built of sticks in thorny trees or palms, often reused across multiple years. Multiple females
              may lay eggs in the same nest in some populations — a form of cooperative polyandry. The same family
              group can raise two or three clutches per year in South Texas.
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
                South Texas populations are stable. Harris&apos;s Hawks are heavily used in falconry worldwide — their
                cooperative and trainable nature makes them popular with falconers — which has created a large captive
                breeding industry. Wild populations face pressure from habitat loss and illegal take in some parts of
                their range.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Harris&apos;s Hawks have been observed &ldquo;stack perching&rdquo; — multiple birds occupy a single
                tall cactus or tree, each at a different height. Researchers believe each bird gains an unobstructed
                view over the surrounding scrub while the group minimizes crowding at the limited high perches
                available in open desert habitat.
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
            "headline": "Harris's Hawk (Parabuteo unicinctus) | South Texas Birds",
            "description": "Harris's Hawk identification, habitat, and where to find it in South Texas. The only hawk in the world known to hunt cooperatively in family groups.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Harris%27s_Hawk_%28Parabuteo_unicinctus%29_3_of_4_in_set.jpg",
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
