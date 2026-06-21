import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/d/dd/Micrathene_whitneyi_29APR12_Madera_Canyon_AZ.jpg";

export const metadata: Metadata = {
  title: "Elf Owl (Micrathene whitneyi) | South Texas Birds",
  description:
    "Elf Owl identification, habitat, and where to find it in the Rio Grande Valley. The world's smallest owl by weight is a summer resident along the Rio Grande.",
  openGraph: {
    title: "Elf Owl | South Texas Birds",
    description: "Elf Owl identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Elf Owl perched at a nest cavity" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission — hawk watch at dusk", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
];

export default function ElfOwlPage() {
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
            Rio Grande Valley · Summer Resident
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Elf Owl
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Micrathene whitneyi &nbsp;·&nbsp; <span className="not-italic">Tecolotito enano</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Summer resident
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}>
            <Image src={PHOTO} alt="Elf Owl perched at a nest cavity entrance" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Micrathene_whitneyi_29APR12_Madera_Canyon_AZ.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Elf Owl is the world&apos;s smallest owl by weight — at about 40 grams (1.4 oz), lighter than a golf
              ball. A summer resident in South Texas, it arrives from its Mexican wintering grounds in spring and
              announces itself at dusk with a rapid, high-pitched series of yipping calls from the riparian forest
              along the Rio Grande — a sound like a small puppy. Despite this vocal performance, the bird itself is
              nearly impossible to spot during daylight hours, roosting motionless in a woodpecker cavity and emerging
              only after dark to hunt by night.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Tiny: only 12–14 cm (4.7–5.5 in) — roughly the size of a large sparrow. Round-headed with no ear tufts,
              brown and gray above with whitish spotting, pale gray-brown below with diffuse rufous-brown streaking.
              The white eyebrows and yellow eyes give the face an unexpectedly intense expression for such a small bird.
              The tail is very short relative to body size.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The call is the most practical identification tool: a rapid, high-pitched series of yips and chatters,
              accelerating toward the end, given repeatedly from a concealed roost just after dark. At Bentsen SP in
              late April through June, multiple birds can often be heard calling simultaneously from the hawk watch
              platform at dusk.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Riparian woodland and thornscrub with large trees containing old woodpecker cavities for nesting. In South
              Texas, closely associated with mature riparian forest along the Rio Grande where Ladder-backed Woodpecker
              cavities are abundant. In the Sonoran Desert of Arizona and New Mexico, strongly tied to saguaro cactus
              and Gila Woodpecker cavities.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Winters in western Mexico, returning to South Texas in late March and April. The U.S. breeding range
              includes South Texas and the Sonoran Desert region. The species departs the Valley by September and is
              absent through winter.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Almost entirely insectivorous: moths, beetles, crickets, scorpions, and other large arthropods make up
              the diet. Elf Owls are crepuscular and nocturnal foragers, catching insects in flight or gleaning them
              from vegetation. Despite their tiny size, they readily take scorpions — apparently immune to or able to
              avoid the sting.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              They are entirely dependent on old woodpecker cavities for nesting — they cannot excavate their own.
              Breeding season is April through June; typically three to four eggs per clutch. The male calls
              persistently from near the nest hole in the evenings, making the cavity&apos;s location apparent to
              patient observers.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>Where to See in South Texas</h2>
            <p className="text-sm mb-4" style={{ color: "#5C5954" }}>
              Best searched at dusk, late April through June. The hawk watch platform at Bentsen SP is ideal for
              hearing multiple calling birds as darkness falls over the river forest.
            </p>
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
                In South Texas, loss of mature riparian trees containing existing woodpecker cavities is the primary
                threat. The species cannot excavate its own cavities and is entirely dependent on the woodpecker
                community for nest sites. Preservation of large riparian trees is the most direct conservation measure.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                When threatened at close range, Elf Owls play dead — a behavior called thanatosis. If flushed from
                a roost hole or caught in the hand, the bird goes limp and motionless for several minutes before
                suddenly reviving and escaping. Playing dead is far more common in insects than in birds, making this
                one of the more unusual defensive behaviors documented in any North American owl.
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
