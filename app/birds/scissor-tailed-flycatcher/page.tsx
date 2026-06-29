import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/4/45/Tyrannus_forficatus_on_branch.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/birds/scissor-tailed-flycatcher" },
  title: "Scissor-tailed Flycatcher (Tyrannus forficatus) | South Texas Birds",
  description:
    "Scissor-tailed Flycatcher identification, habitat, and where to find it in South Texas. Oklahoma's state bird — a pale flycatcher with an extraordinary forked tail that can exceed the length of its own body.",
  openGraph: {
    type: "article",
    title: "Scissor-tailed Flycatcher | South Texas Birds",
    description: "Scissor-tailed Flycatcher identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Scissor-tailed Flycatcher perched showing long forked tail" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "South Padre Island Birding & Nature Center", region: "South Padre Island", href: "/hotspots#south-padre-island" },
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Coastal prairie roads, Cameron & Willacy counties", region: "Coastal Bend", href: "/hotspots" },
];

export default function ScissorTailedFlycatcherPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>South Texas · Summer Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Scissor-tailed Flycatcher</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Tyrannus forficatus &nbsp;·&nbsp; <span className="not-italic" lang="es">Tijereta rosada</span></p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#7A5C10", color: "#EFE3CE" }}>Summer Resident</span>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <HeroFrame
            vignette
            className="w-full rounded-2xl"
            style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}
          >
            <Image src={PHOTO} alt="Scissor-tailed Flycatcher perched showing long forked tail" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Tyrannus_forficatus_on_branch.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Scissor-tailed Flycatcher is one of the most immediately recognizable and
              beloved birds in Texas — a pale, salmon-flanked flycatcher with an extraordinary
              forked tail that can exceed the length of its own body. It arrives in South Texas
              in early spring and becomes a conspicuous presence on utility wires, fence posts,
              and exposed perches across the region through summer. Oklahoma&apos;s state bird,
              but deeply associated with the Texas landscape. Spectacular aerial displays during
              courtship — diving, zigzagging, and opening that scissored tail — are among the
              finest aerial shows in North American birdwatching.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Unmistakable in adult plumage. Pale gray on the head, back, and breast; bright
              salmon-pink on the sides and flanks; white below. The tail — the defining feature —
              is deeply forked with extremely long outer feathers that are black above and white
              below, opening and closing in flight like scissors. Males have longer tail streamers
              than females. A concealed patch of red-orange at the base of the wings is visible
              during displays.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Immature birds have shorter tails and duller salmon coloring but still show
              the distinctive shape and pale gray-and-white plumage. No other bird in
              South Texas has remotely similar proportions.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Scissor-tailed Flycatchers are birds of open country — pastures, grasslands,
              agricultural fields, and roadsides with scattered trees, poles, or fences
              for perching. They avoid dense woodland but use isolated trees for nesting.
              In South Texas they are common across coastal prairie and farmland from spring
              through early fall.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The breeding range centers on Oklahoma, Texas, and Kansas. Birds winter from
              Mexico south through Central America. Migrants can be found throughout Texas,
              and large pre-migratory flocks sometimes form in fall — hundreds of birds
              roosting communally before heading south.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              An aerial insectivore, the Scissor-tailed Flycatcher sallies from a perch to
              catch large insects in flight: grasshoppers, beetles, dragonflies, and cicadas.
              It also drops to the ground occasionally to snatch prey. The long tail is used
              dynamically in flight — spread wide for braking and tight cornering while
              pursuing insects.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Courtship displays are elaborate: males perform zigzagging dives, rapid rolls,
              and aerobatic loops while fully opening the forked tail. Both sexes are
              aggressive in defense of the nest, readily chasing much larger birds.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Present spring through fall; scan utility wires and fence posts along any open road in the Valley. Large communal roosts may form in September before migration.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Common and stable across its range. The species adapts well to agricultural
                landscapes and is not considered threatened. Some local declines have been
                noted in areas of intensive farming where large insects have become scarce.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                A male Scissor-tailed Flycatcher&apos;s tail streamers can reach 15 inches — roughly
                twice the length of the bird&apos;s body. Far from being a handicap, the tail
                is a precise aerodynamic tool: spread wide it acts as a brake and turning aid
                during insect-catching maneuvers, and its length correlates with breeding success.
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
            "datePublished": "2026-06-20",
            "dateModified": "2026-06-28",
            "url": "https://southtexasbirds.org/birds/scissor-tailed-flycatcher",
            "headline": "Scissor-tailed Flycatcher (Tyrannus forficatus) | South Texas Birds",
            "description": "Scissor-tailed Flycatcher identification, habitat, and where to find it in South Texas. Oklahoma's state bird — a pale flycatcher with an extraordinary forked tail that can exceed the length of its own body.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/45/Tyrannus_forficatus_on_branch.jpg",
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
