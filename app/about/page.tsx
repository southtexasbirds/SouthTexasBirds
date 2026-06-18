import type { Metadata } from "next";
import Link from "next/link";

const OG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg";

export const metadata: Metadata = {
  title: {
    absolute: "About South Texas Birding | Rio Grande Valley & Coastal Bend Guide",
  },
  description:
    "Learn about South Texas birding: the Rio Grande Valley, Coastal Bend, and when to visit for migrants, Whooping Cranes, hawks, and winter waterfowl.",
  openGraph: {
    title: "About South Texas Birding | Rio Grande Valley & Coastal Bend Guide",
    description:
      "Learn about South Texas birding: the Rio Grande Valley, Coastal Bend, and when to visit for migrants, Whooping Cranes, hawks, and winter waterfowl.",
    images: [
      { url: OG_IMAGE, width: 2585, height: 1723, alt: "Altamira Oriole in South Texas" },
    ],
  },
  twitter: {
    title: "About South Texas Birding | Rio Grande Valley & Coastal Bend Guide",
    description:
      "Learn about South Texas birding: the Rio Grande Valley, Coastal Bend, and when to visit for migrants, Whooping Cranes, hawks, and winter waterfowl.",
  },
};

const seasons = [
  {
    name: "Spring",
    dates: "Apr – May",
    body: "Trans-Gulf migrants arrive at South Padre Island. Neotropical species return to the Valley.",
    accent: "#C2603D",
  },
  {
    name: "Summer",
    dates: "Jun – Aug",
    body: "Resident species are nesting. Fewer migrants but great for family and behavior watching.",
    accent: "#D4A24C",
  },
  {
    name: "Fall",
    dates: "Sep – Oct",
    body: "Peak hawk migration at Hazel Bazemore. Shorebirds and waterfowl begin to arrive.",
    accent: "#C2603D",
  },
  {
    name: "Winter",
    dates: "Nov – Mar",
    body: "Whooping Cranes at Aransas. Ducks, geese, and sandhill cranes throughout. Resident specialties reliably present.",
    accent: "#1F3D2B",
  },
];

const sectionRule = (
  <div
    aria-hidden="true"
    style={{ width: "2.5rem", height: 2, background: "#C2603D", marginBottom: "0.75rem" }}
  />
);

export default function AboutPage() {
  return (
    <div style={{ background: "#F6F1E7" }}>
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-20">

        {/* ── Page header ─────────────────────────────────────────────── */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C2603D" }}
        >
          The Guide
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-8"
          style={{ color: "#1F3D2B" }}
        >
          About South Texas Birds
        </h1>

        {/* ── Lead paragraphs ─────────────────────────────────────────── */}
        <p className="text-lg leading-relaxed mb-5" style={{ color: "#2B2B26" }}>
          South Texas is widely regarded as one of the greatest birding regions in North
          America. The area sits at the convergence of several major ecological zones: the
          subtropical Rio Grande Valley, the semi-arid Tamaulipan thornscrub, the Gulf
          Coast barrier islands, and the sweeping coastal prairies of the Coastal Bend.
        </p>
        <p className="text-base leading-relaxed mb-14" style={{ color: "#4E4B46" }}>
          This convergence creates a mosaic of habitats that supports an extraordinary
          diversity of bird life — over 500 species have been recorded in the region. For
          visiting birders, this means a single trip can yield resident Mexican
          specialties, Gulf Coast waterbirds, wintering raptors, and Neotropical migrants
          all in the same day.
        </p>

        {/* ── The Rio Grande Valley ───────────────────────────────────── */}
        <section className="mb-12">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#1F3D2B" }}
          >
            The Rio Grande Valley
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
            The lower Rio Grande Valley (RGV) hugs the Texas-Mexico border from Laredo to
            the Gulf. The resacas (oxbow lakes), riparian corridors, and remaining stands
            of native brush provide irreplaceable habitat for species that occur nowhere
            else in the U.S., including Green Jay, Altamira Oriole, Plain Chachalaca,
            Buff-bellied Hummingbird, and Ferruginous Pygmy-Owl.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            The World Birding Center comprises nine sites across the Valley — from Roma
            Bluffs in the west to South Padre Island on the coast — making it easy to
            explore a range of habitats on a single trip.
          </p>
        </section>

        {/* ── The Coastal Bend ────────────────────────────────────────── */}
        <section className="mb-12">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#1F3D2B" }}
          >
            The Coastal Bend
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4E4B46" }}>
            North of the RGV, the Coastal Bend stretches from Corpus Christi to Rockport
            and beyond. Aransas National Wildlife Refuge is the winter home of the last
            natural wild flock of Whooping Cranes — one of conservation&apos;s greatest
            success stories. The bays, salt marshes, and coastal prairies support
            remarkable concentrations of waterbirds, shorebirds, and raptors.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            Hazel Bazemore County Park near Corpus Christi is perhaps the most impressive
            hawk watch in North America — in peak September days, hundreds of thousands of
            Broad-winged Hawks can be seen streaming overhead.
          </p>
        </section>

        {/* ── When to Visit ───────────────────────────────────────────── */}
        <section className="mb-14">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-6"
            style={{ color: "#1F3D2B" }}
          >
            When to Visit
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {seasons.map((s) => (
              <div
                key={s.name}
                className="rounded-xl p-5"
                style={{
                  background: "#fff",
                  borderTop: `3px solid ${s.accent}`,
                  boxShadow: "0 1px 6px rgba(31,61,43,0.06)",
                }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3
                    className="font-serif text-lg font-bold"
                    style={{ color: "#1F3D2B" }}
                  >
                    {s.name}
                  </h3>
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: s.accent }}
                  >
                    {s.dates}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#4E4B46" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About the Creator ───────────────────────────────────────── */}
        <section className="mb-14">
          {sectionRule}
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#1F3D2B" }}
          >
            About the Creator
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#4E4B46" }}>
            South Texas Birds is built and maintained by a Rio Grande Valley local with a
            passion for the region&apos;s incredible birdlife. This site exists to help
            visiting and local birders alike make the most of one of North America&apos;s
            richest birding destinations.
          </p>
        </section>

        {/* ── CTAs ────────────────────────────────────────────────────── */}
        <div
          style={{ height: 1, background: "rgba(31,61,43,0.1)" }}
          className="mb-8"
        />
        <div className="flex flex-wrap gap-3">
          <Link
            href="/birds"
            className="font-semibold px-6 py-3 rounded-lg text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#C2603D", color: "#fff" }}
          >
            Browse Species
          </Link>
          <Link
            href="/hotspots"
            className="font-semibold px-6 py-3 rounded-lg text-sm border transition-opacity hover:opacity-75"
            style={{ borderColor: "#1F3D2B", color: "#1F3D2B" }}
          >
            View Hotspots
          </Link>
        </div>

      </div>
    </div>
  );
}
