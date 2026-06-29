import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/f/f8/Toxostoma_longirostre_-Laguna_Atascosa_National_Wildlife_Refuge%2C_Texas%2C_USA-8.jpg";

export const metadata: Metadata = {
  title: "Long-billed Thrasher (Toxostoma longirostre) | South Texas Birds",
  description:
    "Long-billed Thrasher identification, habitat, and where to find it in the Rio Grande Valley. A rich-voiced songster that rivals the Northern Mockingbird in the thornscrub.",
  openGraph: {
    title: "Long-billed Thrasher | South Texas Birds",
    description: "Long-billed Thrasher identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Long-billed Thrasher at Laguna Atascosa NWR" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
];

export default function LongBilledThrasherPage() {
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
            Long-billed Thrasher
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Toxostoma longirostre &nbsp;·&nbsp; <span className="not-italic">Cuitlacoche piquilargo</span>
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
            <Image src={PHOTO} alt="Long-billed Thrasher at Laguna Atascosa NWR, showing long curved bill and streaked breast" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Toxostoma_longirostre_-Laguna_Atascosa_National_Wildlife_Refuge,_Texas,_USA-8.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Long-billed Thrasher is the Valley&apos;s own thrasher — nearly endemic to the Tamaulipan
              thornscrub of South Texas and northeastern Mexico, and rarely found outside it. It is a common year-round
              resident in dense brush, where it forages by tossing leaf litter with its long, curved bill in the
              manner of its relatives. Its song is rich, varied, and almost ceaseless in spring — a rival to the
              mockingbird in output if not always in polish. Given good habitat and patience, it is one of the more
              reliably found resident birds at any Valley hotspot.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large, long-tailed thrasher (26–29 cm / 10–11.5 in) with brown upperparts, white underparts with
              heavy dark brown streaking on breast and flanks, a long strongly downcurved bill, and bright orange
              eyes. The face shows a strong buffy-white supercilium and malar stripe bordering a dark cheek. Two
              white wingbars are visible on the folded wing.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Brown Thrasher — which occasionally wanders into the Valley — is the most similar species:
              it has a shorter, less strongly curved bill, streaked (not spotted) breast pattern, and yellow (not
              orange) eyes. The Long-billed&apos;s heavy spotting, orange eye, and very long bill are diagnostic
              within the Valley&apos;s resident species.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Dense Tamaulipan thornscrub and woodland edges in South Texas — the same brushy habitat favored by
              Olive Sparrow, White-tipped Dove, and Audubon&apos;s Oriole. Unlike the mockingbird, it strongly
              prefers thick, tangled cover and tends to stay inside the brush rather than singing from exposed
              perches. Areas with deep leaf litter under dense brush produce the best foraging conditions.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Range is essentially restricted to South Texas and the adjacent Mexican states of Tamaulipas and Nuevo
              León. Year-round resident throughout; does not migrate.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Forages primarily on the ground by raking leaf litter aside with the long bill in a side-to-side
              sweeping motion, uncovering beetles, ants, grasshoppers, spiders, and other invertebrates. Also takes
              berries and small fruit, which become a larger component of the diet in fall and winter.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The song is delivered from an exposed perch at the top of a shrub or tree and consists of a long, varied
              series of musical phrases, many repeated two or three times — structurally similar to the mockingbird
              but with a lower pitch and more liquid quality. Singing is most intense February through June.
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
                Least Concern, with a stable population in its limited range. The species&apos; near-endemic
                restriction to Tamaulipan thornscrub makes it sensitive to large-scale clearing of this habitat type
                for agriculture and development. Brush retention on private lands is important for long-term
                population stability.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Like the Northern Mockingbird, the Long-billed Thrasher is a mimic — but a subtle one. It borrows
                phrases from other species and works them into its own extended song, often repeating each phrase
                two or three times before moving to the next. Careful listeners have identified fragments of Olive
                Sparrow, White-eyed Vireo, and other thornscrub residents woven into the thrasher&apos;s song —
                a practice of auditory sampling that has no obvious function but continues throughout its long
                singing season.
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
