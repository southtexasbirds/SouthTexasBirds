import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Ringed_Kingfisher_%28Megaceryle_torquata%29_male_%2828808454175%29.jpg";

export const metadata: Metadata = {
  title: "Ringed Kingfisher (Megaceryle torquata) | South Texas Birds",
  description:
    "Ringed Kingfisher identification, habitat, and where to find it in the Rio Grande Valley. The largest kingfisher in the Americas barely reaches the U.S. in South Texas.",
  openGraph: {
    title: "Ringed Kingfisher | South Texas Birds",
    description: "Ringed Kingfisher identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Male Ringed Kingfisher perched over water" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
];

export default function RingedKingfisherPage() {
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
            Ringed Kingfisher
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Megaceryle torquata &nbsp;·&nbsp; <span className="not-italic">Martín real</span>
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
            <Image src={PHOTO} alt="Male Ringed Kingfisher perched over the Rio Grande" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Ringed_Kingfisher_(Megaceryle_torquata)_male_(28808454175).jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Ringed Kingfisher is the largest kingfisher in the Americas — big enough to make a Belted Kingfisher
              look small by comparison. It barely reaches the United States in South Texas, where it is a year-round
              resident along the Rio Grande and its oxbow lakes. A noisy, conspicuous bird, it announces itself from
              a distance with a loud, rattling call and sits prominently on bare branches or wires overlooking open
              water. Where the Green Kingfisher hides in streamside vegetation, the Ringed dominates the riverfront
              from obvious, elevated perches.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A large kingfisher (40–41 cm / 16 in), noticeably bigger and heavier than the Belted Kingfisher, with
              a proportionally massive bill. Blue-gray above with a shaggy crest and white collar. The underparts
              differ by sex: the male has entirely rufous-chestnut underparts, while the female has a blue-gray breast
              band separating the white throat from the rufous belly. White underwing patches are visible in flight.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Separation from the Belted Kingfisher is straightforward: the Ringed is significantly larger and heavier,
              and the male&apos;s all-rufous underparts (no white below the breast) eliminate any confusion with a male
              Belted. The Ringed&apos;s rattling call is also deeper and more powerful than the Belted&apos;s.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              The Ringed Kingfisher uses large rivers, resacas, and other substantial water bodies with fish. It prefers
              larger, deeper water than the Green Kingfisher and is most often seen along the main channel of the Rio
              Grande, at Salineño, and at large resacas in the Valley. It is far less tolerant of small, clear streams
              than the Green Kingfisher.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              In the U.S., limited to the Lower Rio Grande Valley. The range extends through Mexico and Central America
              to South America south to Tierra del Fuego — making it one of the most widespread kingfishers in the
              Western Hemisphere.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Like all kingfishers, the Ringed plunges headfirst from a perch or a brief hover to capture fish
              proportionally larger than those taken by either the Belted or Green Kingfisher. It patrols long
              stretches of river, calling frequently — the rattling call carries well and is often the first
              indication of the bird&apos;s presence.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Territorial and conspicuous, pairs maintain stretches of river year-round. Nesting occurs in long
              burrows excavated in earthen riverbanks, typically in March and April. The same bank sites may be
              reused across multiple years.
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
                The South Texas population is small but stable. Water quality and the maintenance of fish-bearing
                waterways are the primary habitat requirements. Channelization of the Rio Grande and reservoir
                management that affects fish populations can impact local numbers.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Ringed Kingfisher only established itself as a U.S. breeding bird in 1970, when the first nest
                was documented near Laredo along the Rio Grande. Since then it has quietly expanded to become a
                year-round resident throughout the Lower Rio Grande Valley — one of the more recent natural range
                expansions of any U.S. bird species.
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
            "headline": "Ringed Kingfisher (Megaceryle torquata) | South Texas Birds",
            "description": "Ringed Kingfisher identification, habitat, and where to find it in the Rio Grande Valley. The largest kingfisher in the Americas barely reaches the U.S. in South Texas.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Ringed_Kingfisher_%28Megaceryle_torquata%29_male_%2828808454175%29.jpg",
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
