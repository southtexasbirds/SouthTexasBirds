import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/9/93/Greater_Roadrunner_Tingley_Beach.jpg";

export const metadata: Metadata = {
  title: "Greater Roadrunner (Geococcyx californianus) | South Texas Birds",
  description:
    "Greater Roadrunner identification, habitat, and where to find it in South Texas. Texas's most famous bird — a large, streaky, ground-dwelling cuckoo that sprints across roads and brushland.",
  openGraph: {
    type: "article",
    title: "Greater Roadrunner | South Texas Birds",
    description: "Greater Roadrunner identification, habitat, and where to find it in South Texas.",
    images: [{ url: PHOTO, alt: "Greater Roadrunner standing on ground" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Laguna Atascosa National Wildlife Refuge", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
];

export default function GreaterRoadrunnerPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/birds" className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70" style={{ color: "#C77F4A" }}>← All Species</Link>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-5 pb-8">
        <AnimateIn direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C77F4A" }}>South Texas · Year-round Resident</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>Greater Roadrunner</h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>Geococcyx californianus &nbsp;·&nbsp; <span className="not-italic" lang="es">Correcaminos mayor</span></p>
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
            <Image src={PHOTO} alt="Greater Roadrunner standing on ground showing streaked plumage" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>Photo:{" "}<a href="https://commons.wikimedia.org/wiki/File:Greater_Roadrunner_Tingley_Beach.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">Wikimedia Commons</a></p>
        </AnimateIn>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-10">
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The Greater Roadrunner is perhaps the most iconic bird in Texas — a large, shaggy,
              ground-dwelling cuckoo that has become a cultural symbol of the Southwest. In
              South Texas it inhabits dry brushland, chaparral, and open thornscrub from the
              Rio Grande Valley north through the brush country. True to its name, the roadrunner
              regularly crosses roads at a sprint, reaching speeds of up to 20 mph. Unlike its
              cartoon counterpart, the real bird is a formidable predator capable of killing
              rattlesnakes, which it dispatches with a hard beak strike to the head.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Unmistakable — a large, ground-dwelling bird with a long tail held horizontally,
              a heavy bill, and a shaggy crest that can be raised or lowered. Plumage is heavily
              streaked brown, black, and white above; pale and streaked below. A bare patch of
              blue and red skin behind the eye is often visible at close range. The zygodactyl
              feet leave distinctive X-shaped tracks in soft ground.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              It is the only large, long-tailed, terrestrial bird in its range and cannot be
              confused with any other species. Vocalizations include a series of descending,
              dove-like coos — surprisingly mellow for such a predatory bird.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In South Texas, roadrunners favor dry, brushy habitat — thornscrub, chaparral,
              desert scrub, and open woodland with thickets for concealment. They avoid dense
              forest but will use woodland edges and suburban areas with brushy cover. They
              are year-round residents throughout their range and do not migrate.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The range extends across the American Southwest from California east to Louisiana,
              and south through Mexico. In Texas, roadrunners occur statewide except in the
              wetter eastern forests.
            </p>
          </section>
        </AnimateIn>
        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Roadrunners are opportunistic predators with a remarkably varied diet: lizards,
              snakes (including venomous species), small mammals, birds, insects, scorpions,
              centipedes, and carrion. They typically run prey down on the ground, using the
              bill to batter prey into submission.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              On cold mornings, roadrunners use a behavioral thermoregulation strategy: they
              expose a patch of dark skin on the back to the sun, raising their feathers to
              maximize heat absorption — essentially solar-basking to warm up before becoming
              active. Pairs mate for life and defend year-round territories.
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
            <p className="text-xs mt-3" style={{ color: "#6E6B66" }}>Look for roadrunners trotting across trails and roads at any brushy hotspot. Laguna Atascosa&apos;s upland scrub areas are particularly reliable for encounters.</p>
          </section>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Conservation Status</h2>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>IUCN: Least Concern</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                Common and stable across its range. The roadrunner has adapted reasonably
                well to human presence and continues to occupy most of its historical
                range. Local habitat loss from brush clearing and agriculture poses
                some pressure in South Texas.
              </p>
            </section>
          </AnimateIn>
          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                To kill a rattlesnake, roadrunners work in pairs: one bird distracts the
                snake while the other attacks from behind, pinning the head and beating
                it against the ground. They can swallow a snake longer than they are —
                running around with the tail hanging out of their bill while the rest
                slowly digests. It takes as long as it takes.
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
            "headline": "Greater Roadrunner (Geococcyx californianus) | South Texas Birds",
            "description": "Greater Roadrunner identification, habitat, and where to find it in South Texas. Texas's most famous bird — a large, streaky, ground-dwelling cuckoo that sprints across roads and brushland.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/93/Greater_Roadrunner_Tingley_Beach.jpg",
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
