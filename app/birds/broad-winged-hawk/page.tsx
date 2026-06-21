import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Julie_Waters_broad_winged_hawk.JPG";

export const metadata: Metadata = {
  title: "Broad-winged Hawk (Buteo platypterus) | South Texas Birds",
  description:
    "Broad-winged Hawk identification and migration in South Texas. In September, hundreds of thousands funnel through Corpus Christi in one of birding's great spectacles.",
  openGraph: {
    title: "Broad-winged Hawk | South Texas Birds",
    description: "Broad-winged Hawk identification and migration in South Texas.",
    images: [{ url: PHOTO, alt: "Broad-winged Hawk perched on a branch" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission — hawk watch platform", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Laguna Atascosa NWR", region: "Rio Hondo", href: "/hotspots#laguna-atascosa" },
  { name: "South Padre Island", region: "Cameron County", href: "/hotspots#south-padre-island" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
];

export default function BroadWingedHawkPage() {
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
            South Texas · Migrant
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-1" style={{ color: "#0E6B6B" }}>
            Broad-winged Hawk
          </h1>
          <p className="text-base italic mb-3" style={{ color: "#5C5954" }}>
            Buteo platypterus &nbsp;·&nbsp; <span className="not-italic">Busardo aliancho</span>
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#0E6B6B", color: "#EFE3CE" }}>
            Migrant
          </span>
        </AnimateIn>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <AnimateIn>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "clamp(220px, 40vw, 420px)", boxShadow: "0 4px 24px rgba(14,107,107,0.13)" }}>
            <Image src={PHOTO} alt="Broad-winged Hawk perched on a branch" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </div>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Julie_Waters_broad_winged_hawk.JPG" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              For most of the year the Broad-winged Hawk is a modest, compact buteo of eastern forest — quietly nesting
              in the canopy, easy to overlook. But in mid-September, it transforms the sky over South Texas into one of
              birding&apos;s great spectacles. Hundreds of thousands funnel through a narrow corridor along the Gulf
              Coast, concentrating at Hazel Bazemore County Park near Corpus Christi and continuing south past Bentsen
              SP. On a single peak day, over a million birds can pass through — spiraling in tight &ldquo;kettles&rdquo;
              on thermals before streaming southward toward Central and South America.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A compact, stocky buteo (34–44 cm / 13–17 in) with relatively pointed wings and a short tail. Adults show
              a brown back, barred rufous-and-white underparts, and a boldly banded tail with two or three broad
              black-and-white bands — the white bands roughly equal in width to the black. The underwing in flight shows
              a pale center with a dark border, and the wing tips are dark.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Immatures have a streaked brown breast and a finely banded tail. The most similar species encountered
              in migration is the Red-shouldered Hawk, which is larger with a longer tail and finer barring on the
              underparts. In kettle counts, the distinctive stubby silhouette and tail bands are the key features.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Breeds in mature deciduous and mixed forest across eastern North America from southern Canada to the Gulf
              States. During migration it funnels along ridgelines and the Gulf Coast — geography that concentrates
              soaring birds. The most spectacular concentrations in South Texas occur at Hazel Bazemore County Park
              (near Corpus Christi) in September, which regularly records the highest single-day hawk counts anywhere
              in North America.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              After South Texas, birds continue south through Mexico and Central America to their wintering grounds in
              tropical lowland forest from southern Mexico to Bolivia.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              On the breeding grounds, feeds mainly on small mammals, frogs, and large insects taken from the forest
              floor. During migration, birds feed little — they rely on fat reserves and exploit thermals for the
              long journey south, minimizing energy expenditure by soaring rather than flapping.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Migration behavior is the spectacle: birds gather in rising thermals, circling upward in tight masses
              called kettles (sometimes containing thousands of individuals), before peeling off the top to glide
              south in long streams. Peak migration in South Texas occurs in the third week of September.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: "#0E6B6B" }}>Where to See in South Texas</h2>
            <p className="text-sm mb-4" style={{ color: "#5C5954" }}>
              Also see: <strong>Hazel Bazemore County Park</strong> near Corpus Christi — the premier hawk watch site
              in North America for this species, with counts regularly exceeding 500,000 in a single day in September.
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
                Populations appear stable, though deforestation on the tropical wintering grounds is a long-term
                concern. The concentration of the migration through a narrow geographic corridor makes population
                monitoring relatively accessible — hawk-count data from Corpus Christi track broad trends effectively
                year over year.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Broad-winged Hawk count at Hazel Bazemore County Park in Corpus Christi recorded an estimated
                1.1 million birds on a single day — September 20, 1999 — making it one of the largest single-day
                raptor counts ever documented anywhere in the world. Peak days today regularly reach 500,000 or more.
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
