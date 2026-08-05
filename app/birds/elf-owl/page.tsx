import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/d/dd/Micrathene_whitneyi_29APR12_Madera_Canyon_AZ.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/elf-owl" },
  title: "Elf Owl (Micrathene whitneyi) | South Texas Birds",
  description:
    "Elf Owl identification, habitat, and where to find it in the Rio Grande Valley. The world's smallest owl by weight is a summer resident along the Rio Grande.",
  openGraph: {
    type: "article",
    title: "Elf Owl | South Texas Birds",
    description: "Elf Owl identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: "https://southtexasbirds.org/images/og-default.jpg", alt: "Elf Owl perched at a nest cavity" }],
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
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Micrathene whitneyi &nbsp;·&nbsp; <span className="not-italic" lang="es">Tecolotito enano</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Summer resident
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
            <Image src={PHOTO} alt="Elf Owl perched at a nest cavity entrance" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
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

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "rgba(14,107,107,0.06)", border: "1px solid rgba(14,107,107,0.15)" }}>
            <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Best Time to See</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              <strong>Late April through August</strong> — Elf Owls are summer visitors to South Texas, arriving in late March and departing by October. The best viewing window is <strong>April through June</strong>, during the breeding season when males call persistently at dusk. They&apos;re strictly nocturnal; plan a after-dark visit to Bentsen-Rio Grande Valley State Park or Santa Ana NWR starting 30–45 minutes after sunset. Listen for a rapid, puppy-like yipping call from saguaro or tree cavities.
            </p>
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
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C77F4A" }}>In the News</p>
            <div className="flex flex-col gap-5">
              <Link href="/news/bentsen-rgv-state-park-birding-guide" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Bentsen-Rio Grande Valley State Park: A Complete Birding Guide</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>Bentsen-RGVSP is one of the most reliable U.S. sites for Elf Owl — the world&apos;s smallest owl calls here at dusk from March through August, in the mature riparian forest along the Rio Grande.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
              <Link href="/news/thornscrub-restoration-rgv" className="group flex flex-col gap-1 transition-opacity hover:opacity-80">
                <span className="font-serif text-base font-bold" style={{ color: "#0E6B6B" }}>Tamaulipan Thornscrub Restoration Expands Across the Rio Grande Valley</span>
                <span className="text-sm" style={{ color: "#5C5954" }}>The Elf Owl — the world&apos;s smallest owl — nests in cavities in South Texas riparian and thornscrub woodland. Habitat restoration programs rebuilding the Valley&apos;s native brush are directly supporting this tiny raptor&apos;s local population.</span>
                <span className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "#C77F4A" }}>Read article →</span>
              </Link>
            </div>
          </section>
        </AnimateIn>

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
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/elf-owl",
            "headline": "Elf Owl (Micrathene whitneyi) | South Texas Birds",
            "description": "Elf Owl identification, habitat, and where to find it in the Rio Grande Valley. The world's smallest owl by weight is a summer resident along the Rio Grande.",
            "image": "https://southtexasbirds.org/images/og-default.jpg",
                        "author": { "@type": "Organization", "name": "South Texas Birds", "url": "https://southtexasbirds.org" },
            "publisher": {
              "@type": "Organization",
              "name": "South Texas Birds",
              "url": "https://southtexasbirds.org"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the Elf Owl the world's smallest owl?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the Elf Owl is the world's smallest owl by weight, averaging about 1.4 oz (40 g) and measuring 5–5.5 inches in length. It weighs less than a golf ball. The Pygmy Owls are similar in length but the Elf Owl is lighter-bodied. It is also among the smallest owls by body mass of any owl species globally."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I see an Elf Owl in South Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Elf Owls are summer residents in South Texas from late April through August. Salineño Wildlife Preserve along the Rio Grande is the most accessible U.S. site. They roost in woodpecker cavities in large riparian trees during the day and become active at dusk. A nighttime walk along the Bentsen SP nature trail in May or June, listening for the rapid, puppy-like barking call, can be productive."
                }
              },
              {
                "@type": "Question",
                "name": "What does an Elf Owl eat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Elf Owls eat almost exclusively invertebrates — primarily large insects (moths, beetles, grasshoppers, crickets), scorpions, centipedes, and spiders. Unlike most owls, they rarely take vertebrate prey. They hunt entirely at night, using their large eyes and sensitive hearing to locate prey in the dark."
                }
              },
              {
                "@type": "Question",
                "name": "Where does the Elf Owl nest?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Elf Owls are secondary cavity nesters — they cannot excavate their own holes and depend entirely on cavities created by woodpeckers in large riparian trees. In South Texas they use cavities in sycamores, cottonwoods, and large mesquites along the Rio Grande. Loss of mature riparian trees with existing cavities is the primary threat to the Texas population."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
