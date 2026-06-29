import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/a/ad/Schopfkarakara.jpg";

export const metadata: Metadata = {
  title: "Crested Caracara (Caracara plancus) | South Texas Birds",
  description:
    "Crested Caracara identification, habitat, and where to find it in South Texas. A bold, long-legged falcon of open country and one of the most distinctive raptors in the region.",
  openGraph: {
    type: "article",
    title: "Crested Caracara | South Texas Birds",
    description: "Crested Caracara identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Crested Caracara perched in South Texas" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "South Padre Island", region: "Cameron County", href: "/hotspots#south-padre-island" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function CrestedCaracaraPage() {
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
            Crested Caracara
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Caracara plancus &nbsp;·&nbsp; <span className="not-italic" lang="es">Caracara norteño</span>
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
            <Image src={PHOTO} alt="Crested Caracara perched in South Texas open country" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 25%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Schopfkarakara.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Crested Caracara is a falcon by taxonomy but behaves more like a vulture. Long-legged and bold, it
              walks on the ground with easy confidence, scavenges roadkill alongside Black and Turkey Vultures, and
              patrols open country from fence posts and utility poles across South Texas. It is one of the most
              distinctive raptors in the region — immediately recognizable by its flat-topped black crest, bold
              black-and-white plumage, and vivid orange face — and a common sight in open pastures and brushlands
              year-round.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large raptor (55–60 cm / 22–24 in) with a flat-topped crest, bold black-and-white barred breast, and
              a bright orange-red bare face that intensifies in color when the bird is excited. The bill is pale and
              hooked. In flight, the pattern is striking: white wing patches near the tips contrast sharply against
              dark flight feathers, and the tail shows a white base with a dark terminal band — visible even at
              considerable distance.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Often seen walking on the ground, a behavior unusual for raptors, and frequently encountered perched on
              fenceposts and utility poles. Immatures are brown where adults are black, with a streaked (not barred)
              breast and a pinkish (not orange) face.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Open country specialist: Crested Caracaras use open pastures, agricultural fields, brushy savannas, and
              roadsides throughout South Texas. They avoid dense forest. The U.S. range includes South Texas, south-central
              Florida, and southern Arizona; the main Texas population centers on the coastal prairies and brushlands
              from Corpus Christi south to the Rio Grande.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The species ranges from the southwestern United States and Mexico south through Central America and most
              of South America to Tierra del Fuego. It is also the most widespread member of the caracara group in
              the neotropics, where it occupies nearly every open-country habitat type.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              True dietary opportunists: Crested Caracaras eat carrion (often alongside vultures), large insects,
              reptiles, frogs, small mammals, eggs, and nestlings. They are kleptoparasites, stealing food from other
              birds, and will wade into shallow water for fish or frogs. Unlike most raptors, they walk and run on the
              ground with ease, using long legs to move through grass and debris.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nesting takes place from January to April in South Texas; they build large stick nests in live oaks,
              palms, or tree chollas, often reusing the same site across years. Typically one to three eggs per clutch.
              Both sexes share incubation and care for the young.
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
                Population is stable or increasing in Texas following legal protection under the Migratory Bird Treaty
                Act. Formerly persecuted as a perceived threat to livestock and game birds. Road mortality is a
                significant local threat, as the species frequently feeds on roadkill in traffic.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Despite being classified in the falcon family (Falconidae), Crested Caracaras are far more closely
                related to parrots than to hawks. Genetic studies revealed that falcons split from the lineage leading
                to parrots and songbirds — meaning the falcon&apos;s aerial hunting style evolved independently from
                the hawks and eagles it superficially resembles.
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
            "headline": "Crested Caracara (Caracara plancus) | South Texas Birds",
            "description": "Crested Caracara identification, habitat, and where to find it in South Texas. A bold, long-legged falcon of open country and one of the most distinctive raptors in the region.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Schopfkarakara.jpg",
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
