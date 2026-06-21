import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/d/d6/Audubon%27s_Oriole_%2812626811374%29.jpg";

export const metadata: Metadata = {
  title: "Audubon's Oriole (Icterus graduacauda) | South Texas Birds",
  description:
    "Audubon's Oriole identification, habitat, and where to find it in the Rio Grande Valley. A shy, deep-forest oriole with a slow, melancholy whistle, nearly endemic to South Texas.",
  openGraph: {
    title: "Audubon's Oriole | South Texas Birds",
    description: "Audubon's Oriole identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Audubon's Oriole showing black hood and yellow body" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function AudubonsOriolePage() {
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
            Audubon&apos;s Oriole
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Icterus graduacauda &nbsp;·&nbsp; <span className="not-italic">Bolsero de Audubon</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Resident
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}>
            <Image src={PHOTO} alt="Audubon's Oriole perched showing black hood, wings, and tail against lemon-yellow body" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 35%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Audubon%27s_Oriole_(12626811374).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              Audubon&apos;s Oriole is, by any measure, one of the most beautiful birds in South Texas — a large
              oriole with a lemon-yellow body, jet-black hood, back, wings, and tail, and the slow, mournful whistle
              of a bird that seems to be composing as it goes. It is shy by oriole standards, preferring to remain
              deep in thornscrub or riparian woodland rather than advertising itself in the open like the showy
              Altamira. Named for John James Audubon — though Audubon himself never saw one — it is nearly endemic
              to the Tamaulipan thornscrub of South Texas and northeastern Mexico and is a target species for visiting
              birders throughout the year.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large oriole (22–24 cm / 8.5–9.5 in) with a distinctive pattern: lemon-yellow body contrasting with
              entirely black head, back, wings, and tail. The wings show faint yellowish edging on the wing coverts.
              Both sexes are similar; juveniles are duller, with an olive-yellow tone replacing the adult&apos;s
              bright lemon and greenish-black on the head.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The black back distinguishes Audubon&apos;s from the Scott&apos;s Oriole (yellow back, black chest
              and head) and the Altamira Oriole (orange and black, never all-black upperparts). The song — a series
              of slow, clear, whistled notes, each slightly different, delivered unhurriedly — is the most distinctive
              voice in the Valley&apos;s oriole guild.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Dense Tamaulipan thornscrub and riparian woodland in South Texas and adjacent Mexico. Unlike the Altamira
              Oriole, which occupies woodland edges and suburban trees, Audubon&apos;s strongly prefers the interior
              of dense brush — it is a bird of the thicket, not the edge. Areas with large trees mixed into thornscrub
              produce the best habitat. The species does not migrate and is a year-round resident throughout its range.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              U.S. range is essentially limited to the Lower Rio Grande Valley and adjacent areas of South Texas.
              The Mexican range extends south through Tamaulipas and Nuevo León to San Luis Potosí. Nowhere common;
              patchy and local even within its restricted range.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Forages for insects, spiders, and fruit within the vegetation canopy, moving deliberately through the
              interior of dense shrubs and trees. Less aerial than some orioles; less likely to hawk insects in open
              air. Readily comes to feeders offering orange halves and grape jelly where these are set out near
              dense cover.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nesting occurs in spring and summer; the nest is a woven hanging pouch typical of orioles, suspended
              from a branch in dense brush. Both sexes sing — an unusual trait in orioles; the female&apos;s song
              is quieter but structurally similar to the male&apos;s deliberate whistle series. Pairs appear to be
              monogamous and may use the same territory across multiple years.
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
                Least Concern globally but listed as a Species of Greatest Conservation Need in Texas. The species&apos;
                restricted range, low densities, and dependence on dense native thornscrub make it vulnerable to
                large-scale habitat clearing. Preservation of intact thornscrub on both public and private lands
                is the most critical conservation action for this species.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                Audubon&apos;s Oriole was formerly called the &ldquo;Black-headed Oriole&rdquo; — a descriptive name
                that was changed in 1983 to honor John James Audubon. The irony is that Audubon himself apparently
                never observed the species alive; the original description was based on a specimen collected in
                northeastern Mexico. In South Texas, it is one of the few birds named for Audubon that he may never
                have encountered in the field.
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
