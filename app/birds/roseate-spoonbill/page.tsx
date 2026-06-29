import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/Roseate_Spoonbill_-_Myakka_River_State_Park.jpg";

export const metadata: Metadata = {
  title: "Roseate Spoonbill (Platalea ajaja) | South Texas Birds",
  description:
    "Roseate Spoonbill identification, habitat, and where to find it in South Texas. A flamingo-pink wading bird that nests colonially along the Texas coast.",
  openGraph: {
    type: "article",
    title: "Roseate Spoonbill | South Texas Birds",
    description: "Roseate Spoonbill identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Roseate Spoonbill wading in shallow water" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island", region: "Cameron County", href: "/hotspots#south-padre-island" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
];

export default function RoseateSpoonbillPage() {
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
            Texas Coast · Year-round Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Roseate Spoonbill
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Platalea ajaja &nbsp;·&nbsp; <span className="not-italic" lang="es">Espátula rosada</span>
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
            <Image src={PHOTO} alt="Roseate Spoonbill wading in shallow water, South Texas" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Roseate_Spoonbill_-_Myakka_River_State_Park.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Roseate Spoonbill is impossible to mistake and impossible to ignore — a shock of flamingo-pink wading
              through the coastal marshes and resacas of South Texas. Despite the visual resemblance, it is not related
              to flamingos; the pink color comes from carotenoid pigments in the crustaceans it eats, the same pigment
              source as the flamingo. After being hunted nearly to extinction in the United States by the early 20th
              century — their feathers were prized for decorative fans — spoonbills have made a strong recovery and now
              nest colonially in good numbers along the Texas coast.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Adults are unmistakable: brilliant pink wings and body, white neck and back, a bare greenish head, and the
              distinctive spatula-shaped bill that gives the species its name. The pink deepens to a rich rose on the
              wing coverts and there is an orange-red wash on the tail. In flight, the outstretched neck — unlike herons,
              which retract their necks — and the spoon-shaped bill are conclusive at any distance.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Immatures are paler overall, with feathered (rather than bare) heads and less intense pink, but the
              distinctive bill shape is evident from hatching. Size is large — about 80 cm (32 in) tall with a wingspan
              up to 130 cm (51 in). Often seen in small flocks or in mixed colonies with herons and egrets.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Roseate Spoonbills use a variety of shallow wetland habitats: coastal bays and tidal lagoons, freshwater
              resacas, managed impoundments, and flooded agricultural fields. They nest colonially in mangroves and
              coastal shrubs on islands and barrier peninsulas. The Texas coast from the Coastal Bend south to the Rio
              Grande Valley hosts a significant share of the U.S. breeding population.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Beyond Texas, the species occurs along the Gulf Coast of Mexico, the Caribbean, and through Central and
              South America south to Argentina. It was extirpated from Florida and Louisiana by plume hunters but has
              since recolonized both states.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Feeds by wading slowly through shallow water and sweeping the slightly open spatula bill from side to side
              — a tactile method that works even in turbid water where visual detection of prey is impossible. When the
              sensitive bill tip contacts prey, it snaps shut reflexively. Diet includes small fish, shrimp, crayfish,
              aquatic insects, and other invertebrates.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Colonial nesters: builds bulky stick platform nests in mangroves or coastal shrubs, typically laying two
              to three eggs. Both sexes share incubation and feed young by regurgitation. The pink carotenoid pigments
              must be continuously replenished through diet; birds deprived of carotenoid-rich prey gradually fade.
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
                After near-extinction from plume hunting in the early 20th century, legal protection under the Migratory
                Bird Treaty Act allowed a strong recovery. The Texas coastal population is now healthy. Ongoing threats
                include loss of foraging habitat from coastal development and altered hydrology in estuaries.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Roseate Spoonbills are born white. The pink color develops gradually as young birds begin eating
                carotenoid-rich crustaceans — the same class of pigments that color flamingos and give cooked shrimp
                their orange hue. A spoonbill raised in captivity on a diet lacking carotenoids will remain white
                throughout its life.
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
            "headline": "Roseate Spoonbill (Platalea ajaja) | South Texas Birds",
            "description": "Roseate Spoonbill identification, habitat, and where to find it in South Texas. A flamingo-pink wading bird that nests colonially along the Texas coast.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Roseate_Spoonbill_-_Myakka_River_State_Park.jpg",
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
