import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import HeroFrame from "../../components/HeroFrame";

const PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/7/74/Buteo_plagiatus_Belize.jpg";

export const metadata: Metadata = {
  title: "Gray Hawk (Buteo plagiatus) | South Texas Birds",
  description:
    "Gray Hawk identification, habitat, and where to find it in the Rio Grande Valley. A finely barred raptor of the river corridor at the northern edge of its range.",
  openGraph: {
    title: "Gray Hawk | South Texas Birds",
    description: "Gray Hawk identification, habitat, and where to find it in the Rio Grande Valley.",
    images: [{ url: PHOTO, alt: "Gray Hawk perched in riparian woodland" }],
  },
  twitter: { card: "summary_large_image", images: [PHOTO] },
};

const spots = [
  { name: "Bentsen-Rio Grande Valley State Park", region: "Mission", href: "/hotspots#bentsen" },
  { name: "Santa Ana National Wildlife Refuge", region: "Alamo", href: "/hotspots#santa-ana" },
  { name: "Salineño", region: "Zapata County", href: "/hotspots#salineno" },
  { name: "Estero Llano Grande State Park", region: "Weslaco", href: "/hotspots#estero-llano-grande" },
  { name: "Resaca de la Palma State Park", region: "Brownsville", href: "/hotspots#resaca-de-la-palma" },
  { name: "National Butterfly Center", region: "Mission", href: "/hotspots#national-butterfly-center" },
];

export default function GrayHawkPage() {
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
            Gray Hawk
          </h1>
          <p className="text-base italic mb-3" lang="la" style={{ color: "#5C5954" }}>
            Buteo plagiatus &nbsp;·&nbsp; <span className="not-italic" lang="es">Aguililla gris</span>
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
            <Image src={PHOTO} alt="Gray Hawk perched in riparian woodland" fill unoptimized priority className="object-cover" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 896px) 100vw, 896px" />
          </HeroFrame>
          <p className="text-xs mt-2" style={{ color: "#6E6B66" }}>
            Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Buteo_plagiatus_Belize.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-75 transition-opacity">
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
              The Gray Hawk is a medium-sized buteo of the river corridor, reaching the northern limit of its range in
              the riparian forest of the Rio Grande Valley. It is a bird of the canopy — elegant and quietly commanding —
              more likely to be heard than seen until patience and keen ears locate it perching in dappled shade beneath
              the ebony and anacua canopy. The loud, keening call is one of the characteristic sounds of the Rio Grande
              riparian zone from spring through summer, carrying well across the river corridor on still mornings.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Identification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              A relatively small buteo (46–56 cm / 18–22 in) with distinctive finely barred gray-and-white underparts
              and a plain gray back — the overall effect is a clean, subtly patterned hawk unlike any other buteo in
              South Texas. Adults show two broad white tail bands on a dark tail. The cere and legs are yellow-orange.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Immatures are brown above and streaked brown on the underparts, with a heavily streaked head and a bold
              white supercilium framing a dark cheek — a facial pattern distinctive enough to identify in the field.
              In flight, the adult&apos;s pale barred underparts and banded tail are the primary marks at distance.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Habitat &amp; Range</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              In the U.S., Gray Hawks are almost entirely confined to riparian corridors with large mature trees. In
              South Texas, Bentsen-Rio Grande Valley SP and Santa Ana NWR provide the core habitat along the Rio Grande.
              A separate population breeds in riparian corridors of southern Arizona along the San Pedro and Santa Cruz
              rivers.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              The broader range extends south through Mexico — where the species is more widespread in tropical and
              subtropical woodland — and through Central America to northwestern South America. Resident throughout
              its range; South Texas birds do not appear to migrate.
            </p>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section className="rounded-2xl p-7" style={{ background: "#F7F0E4", boxShadow: "0 1px 6px rgba(14,107,107,0.07)" }}>
            <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#0E6B6B" }}>Behavior &amp; Diet</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4E4B46" }}>
              Gray Hawks hunt from a perch in the forest interior and edge, taking lizards, small snakes, frogs, large
              insects, and small mammals. Unlike many buteos that hunt by soaring and stooping, the Gray Hawk tends to
              hunt from low to mid-canopy perches and pursues prey through vegetation with an agility that resembles
              an accipiter more than a typical buteo.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
              Nests are built high in large riparian trees; the species is territorial and typically returns to the same
              general area year after year. The drawn-out, descending call — often transcribed as a falling
              &ldquo;keee-eer&rdquo; — is the most reliable way to locate a bird in the dense canopy.
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
                In the U.S., the species is limited by availability of mature riparian woodland — a habitat type heavily
                impacted by water diversions, flood control, and development along the Rio Grande. Protection of the
                remaining riparian corridor at Bentsen, Santa Ana, and Resaca de la Palma is critical to sustaining
                the U.S. population.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn delay={100}>
            <section className="rounded-2xl p-7 h-full" style={{ background: "#0E6B6B", boxShadow: "0 1px 6px rgba(14,107,107,0.15)" }}>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "#EFE3CE" }}>Fun Fact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(239,227,206,0.85)" }}>
                The Gray Hawk was once called the &ldquo;Mexican Goshawk&rdquo; — a reflection of its accipiter-like
                hunting style within dense riparian canopy. Despite being a true buteo by genetics, its short-winged,
                agile pursuit of prey through woodland closely resembles a Sharp-shinned or Cooper&apos;s Hawk rather
                than the slow, soaring style typical of its genus.
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
            "headline": "Gray Hawk (Buteo plagiatus) | South Texas Birds",
            "description": "Gray Hawk identification, habitat, and where to find it in the Rio Grande Valley. A finely barred raptor of the river corridor at the northern edge of its range.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Buteo_plagiatus_Belize.jpg",
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
