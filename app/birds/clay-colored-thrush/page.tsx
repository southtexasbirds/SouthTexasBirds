import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Clay-coloured_thrush_%28Turdus_grayi_casius%29_2.jpg";

export const metadata: Metadata = {
  title: "Clay-colored Thrush (Turdus grayi) | South Texas Birds",
  description:
    "Clay-colored Thrush identification, habitat, and where to find it in the Rio Grande Valley. The national bird of Costa Rica has established a small breeding population in South Texas.",
  openGraph: {
    title: "Clay-colored Thrush | South Texas Birds",
    description: "Clay-colored Thrush identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Clay-colored Thrush perched in vegetation" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Quinta Mazatlán", region: "McAllen", href: "/hotspots#quinta-mazatlan" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function ClayColoredThrushPage() {
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
            Clay-colored Thrush
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Turdus grayi &nbsp;·&nbsp; <span className="not-italic">Zorzal pardo</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Rare resident
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}>
            <Image src={PHOTO} alt="Clay-colored Thrush perched showing warm brown plumage" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Clay-coloured_thrush_(Turdus_grayi_casius)_2.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Clay-colored Thrush is the national bird of Costa Rica — a plain, warm brown thrush with a
              magnificent voice. It has established a small breeding population in the Lower Rio Grande Valley,
              primarily around Bentsen SP and Quinta Mazatlán, having spread north from Mexico. To a casual observer
              it resembles a washed-out American Robin; to a birder, it is a genuinely exciting find — a neotropical
              species that has colonized the United States within living memory. The rich, melodious song — a series
              of rising and falling phrases repeated with unhurried confidence — is one of the finest thrush songs
              in the Americas.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large thrush (23–27 cm / 9–10.5 in) with uniformly warm brown-gray upperparts, paler brown underparts,
              a buffy-white throat with faint brown streaking, and a yellowish-green bill. No bold markings anywhere —
              the overall impression is of a robustly built, plain brown bird. The eye is reddish-brown.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Closest in appearance to an American Robin with the rust stripped off. The robin has an orange breast;
              the Clay-colored Thrush is uniformly warm brown below. The yellowish-green bill (not yellow-orange
              like the robin&apos;s) is the most useful mark at a glance. The song — heard most often in spring and
              early summer mornings — is the most reliable identification cue.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Gardens, woodland edges, riparian forest, and dense thornscrub in the Rio Grande Valley. The species
              is closely associated with areas of shade and fruiting trees in both wild and urban settings — it
              adapts remarkably well to suburban parks and residential gardens. Bentsen SP and Quinta Mazatlán,
              with their mature tree canopy, are the most reliable sites.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Native range is from Mexico through Central America to Colombia. First recorded breeding in Texas in
              the 1990s; now a rare but annual resident in the Valley, with the breeding population slowly growing.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Forages on the ground for earthworms, insects, and small fruits, often hopping through leaf litter in
              the manner of a typical thrush. Diet is strongly seasonal: invertebrates dominate in spring and summer;
              fruit (figs, berries, and other soft fruits) becomes important in fall and winter. Bold and confiding
              in gardens where it is not disturbed.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The song is typically delivered from a concealed or elevated perch in the canopy, often in the hour
              after dawn and sometimes continuing through the morning. The song season extends from late winter
              through early summer in South Texas.
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
                Abundant and expanding throughout its range, benefiting from its adaptability to human-modified
                landscapes. In South Texas, the small breeding population is slowly increasing as birds colonize
                suitable habitat in parks and residential areas with mature trees. Conservation of riparian woodland
                and urban green spaces benefits the species.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Clay-colored Thrush is the national bird of Costa Rica — not because it is particularly colorful
                or rare, but because it is ubiquitous and beloved, its rich song woven into the soundscape of every
                Costa Rican town and village. Costa Ricans chose it for the very quality that birders in South Texas
                appreciate: that extraordinary voice pouring from an inconspicuous brown bird. In both places, you
                hear it before you see it.
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
