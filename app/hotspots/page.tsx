import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { toBirdId, BIRDS_ORDER } from "../birds/birdsOrder";

const birdSlugs = new Set(BIRDS_ORDER.map((b) => b.slug));

const hotspots = [
  {
    name: "Estero Llano Grande State Park",
    address: "3301 S. International Blvd, Weslaco, TX 78596",
    region: "Weslaco",
    type: "State Park",
    description:
      "An urban wildlife oasis in the heart of the Valley. The park's shallow lake, resaca wetlands, and brushy edges attract an extraordinary variety of waterbirds and hard-to-find specialties. The visitor center feeders draw Green Jays, Altamira Orioles, and Plain Chachalacas within arm's reach. The lake is one of the most reliable spots in the U.S. for Masked Duck and Northern Jacana.",
    birds: [
      "Masked Duck",
      "Northern Jacana",
      "Least Grebe",
      "Black-bellied Whistling-Duck",
      "Green Kingfisher",
      "Ringed Kingfisher",
      "Green Jay",
      "Altamira Oriole",
      "Plain Chachalaca",
      "Neotropic Cormorant",
      "Roseate Spoonbill",
      "Groove-billed Ani",
    ],
    bestSeason: "Year-round",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Northern_Jacana_Costa_Rica.jpg/330px-Northern_Jacana_Costa_Rica.jpg",
    photoAlt: "Northern Jacana",
  },
  {
    name: "Santa Ana National Wildlife Refuge",
    address: "3325 Green Jay Rd, Alamo, TX 78516",
    region: "Alamo",
    type: "National Wildlife Refuge",
    description:
      "What the U.S. Fish & Wildlife Service calls the 'jewel of the National Wildlife Refuge System,' Santa Ana protects 2,000 acres of native Tamaulipan thornscrub and riparian forest along the Rio Grande. Seasonal tram tours (typically December through early February) wind through the dense habitat where most of the Valley's RGV specialties can be found in a single morning. The feeder station near the visitor center is exceptional.",
    birds: [
      "Green Jay",
      "Plain Chachalaca",
      "Altamira Oriole",
      "Buff-bellied Hummingbird",
      "Hook-billed Kite",
      "Tropical Kingbird",
      "Great Kiskadee",
      "Rose-throated Becard",
      "Clay-colored Thrush",
      "Long-billed Thrasher",
      "Olive Sparrow",
      "White-tipped Dove",
    ],
    bestSeason: "Year-round; best Oct–Apr",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png/330px-Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png",
    photoAlt: "Green Jay",
  },
  {
    name: "Bentsen-Rio Grande Valley State Park",
    address: "2800 S. Bentsen Palm Dr, Mission, TX 78572",
    region: "Mission",
    type: "State Park / World Birding Center",
    description:
      "The flagship site of the World Birding Center and one of the most celebrated birding destinations in North America. The park's hawk watch tower is world-famous during spring and fall raptor migration. A network of trails winds through riparian forest and thornscrub. Feeders and a drip water feature attract resident specialties constantly. General park entry is $5 per person (free for kids 12 and under); special hawk watch events may have separate fees.",
    birds: [
      "Green Jay",
      "Plain Chachalaca",
      "Hook-billed Kite",
      "Gray Hawk",
      "Ferruginous Pygmy-Owl",
      "Elf Owl",
      "Altamira Oriole",
      "Audubon's Oriole",
      "Great Kiskadee",
      "Ringed Kingfisher",
      "Red-billed Pigeon",
      "Broad-winged Hawk",
    ],
    bestSeason: "Year-round; hawk migration Mar–May & Sep–Oct",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Plain_Chachalaca_Roadside.png/330px-Plain_Chachalaca_Roadside.png",
    photoAlt: "Plain Chachalaca",
  },
  {
    name: "National Butterfly Center",
    address: "3333 Butterfly Park Dr, Mission, TX 78572",
    region: "Mission",
    type: "Nature Center",
    description:
      "A 100-acre native plant sanctuary along the Rio Grande managed by the North American Butterfly Association. The lush gardens and restored thorn forest attract an outstanding variety of hummingbirds, orioles, and brush species year-round. The milpa and native plantings draw both butterflies and the birds that feed on them. Often overlooked but consistently productive.",
    birds: [
      "Buff-bellied Hummingbird",
      "Ruby-throated Hummingbird",
      "Green Jay",
      "Altamira Oriole",
      "Tropical Kingbird",
      "Couch's Kingbird",
      "Plain Chachalaca",
      "White-tipped Dove",
      "Inca Dove",
      "Long-billed Thrasher",
      "Olive Sparrow",
      "Groove-billed Ani",
    ],
    bestSeason: "Year-round; fall migration Aug–Oct",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg/330px-Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg",
    photoAlt: "Buff-bellied Hummingbird",
  },
  {
    name: "Quinta Mazatlan",
    address: "600 Sunset Dr, McAllen, TX 78503",
    region: "McAllen",
    type: "World Birding Center",
    description:
      "A beautifully restored 1909 Spanish Revival mansion set within 20 acres of native plantings in the heart of McAllen — one of nine World Birding Center sites. The grounds are designed to attract resident Valley wildlife, and feeding stations draw Green Jays, Altamira Orioles, and Plain Chachalacas within arm's reach. Flowering native plants keep Buff-bellied Hummingbirds active year-round. An ideal urban birding stop and first destination for visiting birders.",
    birds: [
      "Buff-bellied Hummingbird",
      "Altamira Oriole",
      "Green Jay",
      "Plain Chachalaca",
      "Great Kiskadee",
      "Vermilion Flycatcher",
      "Couch's Kingbird",
      "Long-billed Thrasher",
      "Olive Sparrow",
      "White-tipped Dove",
      "Inca Dove",
      "Groove-billed Ani",
    ],
    bestSeason: "Year-round",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Karmintyrann_%28Pyrocephalus_obscurus%29%2C_M%C3%A4nnchen_1.jpg/330px-Karmintyrann_%28Pyrocephalus_obscurus%29%2C_M%C3%A4nnchen_1.jpg",
    photoAlt: "Vermilion Flycatcher",
  },
  {
    name: "Resaca de la Palma State Park",
    address: "1000 New Carmen Rd, Brownsville, TX 78520",
    region: "Brownsville",
    type: "State Park / World Birding Center",
    description:
      "The largest remaining tract of native Tamaulipan thornscrub in the United States — 1,200 acres of subtropical brush managed as one of nine World Birding Center sites. Electric tram tours carry visitors deep into habitat largely inaccessible on foot, dramatically improving chances for owls, wrens, and thornscrub songbirds. The park's network of resacas also supports waterbirds, and virtually every RGV specialty can be found here on a good morning.",
    birds: [
      "Ferruginous Pygmy-Owl",
      "Plain Chachalaca",
      "Green Jay",
      "Altamira Oriole",
      "Buff-bellied Hummingbird",
      "Clay-colored Thrush",
      "Hook-billed Kite",
      "Long-billed Thrasher",
      "Olive Sparrow",
      "Tropical Parula",
      "Groove-billed Ani",
      "White-tipped Dove",
    ],
    bestSeason: "Year-round; best Nov–Apr",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg/330px-Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg",
    photoAlt: "Ferruginous Pygmy-Owl",
  },
  {
    name: "South Padre Island Birding & Nature Center",
    address: "6801 Padre Blvd, South Padre Island, TX 78597",
    region: "South Padre Island",
    type: "World Birding Center",
    description:
      "Positioned at the southern tip of Padre Island at one of the most dramatic landfall points on the Trans-Gulf migration route. When northwest winds follow a cold front in late April and early May, exhausted neotropical migrants arrive in staggering numbers — warblers, buntings, tanagers, and orioles crowd every shrub and boardwalk in what birders call a 'fallout.' The elevated hawk tower commands panoramic coastal views, and the adjacent wetlands host shorebirds, egrets, and the resident Reddish Egret year-round.",
    birds: [
      "Reddish Egret",
      "Peregrine Falcon",
      "American Avocet",
      "Wilson's Phalarope",
      "Magnificent Frigatebird",
      "Painted Bunting",
      "Indigo Bunting",
      "Baltimore Oriole",
      "Yellow Warbler",
      "Magnolia Warbler",
      "Scissor-tailed Flycatcher",
      "Brown Pelican",
    ],
    bestSeason: "Spring migration late Apr–mid May; fall Sep–Oct",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/ReddishEgret_Gam.jpg/330px-ReddishEgret_Gam.jpg",
    photoAlt: "Reddish Egret",
  },
  {
    name: "Laguna Atascosa National Wildlife Refuge",
    address: "22817 Ocelot Rd, Rio Hondo, TX 78583",
    region: "Rio Hondo",
    type: "National Wildlife Refuge",
    description:
      "The southernmost National Wildlife Refuge in the U.S., encompassing over 97,000 acres of coastal brushland, freshwater impoundments, and Laguna Madre shoreline. Home to the reintroduced Aplomado Falcon and one of the last strongholds for the endangered ocelot. The Bayside Drive auto loop offers superb looks at waterbirds and open-country raptors.",
    birds: [
      "Aplomado Falcon",
      "White-tailed Hawk",
      "Audubon's Oriole",
      "Reddish Egret",
      "Mottled Duck",
      "Piping Plover",
      "Seaside Sparrow",
      "Roseate Spoonbill",
      "American Oystercatcher",
      "Crested Caracara",
      "Harris's Hawk",
      "White-tailed Kite",
    ],
    bestSeason: "Year-round; shorebirds Aug–Oct, waterfowl Nov–Mar",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg/330px-Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg",
    photoAlt: "Aplomado Falcon",
  },
  {
    name: "Salineño Wildlife Preserve",
    address: "River Rd, Salineno, TX 78585",
    region: "Salineño",
    type: "Wildlife Preserve",
    description:
      "A small but extraordinary preserve on the banks of the Rio Grande, west of Falcon Lake near the town of Salineño. Feeders at the river's edge draw Audubon's Orioles, Olive Sparrows, and White-tipped Doves, while the river itself hosts Ringed and Green Kingfishers and is the most reliable site in the U.S. for wild Muscovy Duck — often visible from the bank at dawn. Brown Jay, now rarely seen in Texas, was historically reliable here and remains a hoped-for prize for visiting birders.",
    birds: [
      "Muscovy Duck",
      "Ringed Kingfisher",
      "Green Kingfisher",
      "Audubon's Oriole",
      "Red-billed Pigeon",
      "Hook-billed Kite",
      "Long-billed Thrasher",
      "Olive Sparrow",
      "White-tipped Dove",
      "Altamira Oriole",
      "Tropical Kingbird",
      "Brown Jay",
    ],
    bestSeason: "Year-round; best Nov–Mar",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Muscovy_Duck_%28Cairina_moschata%29_male_%2829039391935%29.jpg/330px-Muscovy_Duck_%28Cairina_moschata%29_male_%2829039391935%29.jpg",
    photoAlt: "Muscovy Duck",
  },
];

const hotspotIds = [
  "estero-llano-grande",
  "santa-ana",
  "bentsen",
  "national-butterfly-center",
  "quinta-mazatlan",
  "resaca-de-la-palma",
  "south-padre-island",
  "laguna-atascosa",
  "salineno",
];

// Badge style for each hotspot type — shown on the dark palm-green header
const typeBadgeStyle = {
  background: "rgba(255,255,255,0.15)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.3)",
};

// Approximate geo coordinates for each hotspot (same order as the array above)
const geoCoords = [
  { lat: 26.1619, lng: -97.9977 }, // Estero Llano Grande
  { lat: 26.0713, lng: -98.1444 }, // Santa Ana NWR
  { lat: 26.1805, lng: -98.3747 }, // Bentsen-RGVSP
  { lat: 26.1783, lng: -98.3769 }, // National Butterfly Center
  { lat: 26.2083, lng: -98.2396 }, // Quinta Mazatlan
  { lat: 25.9764, lng: -97.5206 }, // Resaca de la Palma SP
  { lat: 26.0868, lng: -97.1659 }, // South Padre Island BC
  { lat: 26.2777, lng: -97.3637 }, // Laguna Atascosa NWR
  { lat: 26.5155, lng: -99.1071 }, // Salineno Wildlife Preserve
];

const hotspotSchema = {
  "@context": "https://schema.org",
  "@graph": hotspots.map((spot, i) => {
    const [street, city] = spot.address.split(",");
    return {
      "@type": "TouristAttraction",
      name: spot.name,
      description: spot.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: street?.trim(),
        addressLocality: city?.trim(),
        addressRegion: "TX",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: geoCoords[i].lat,
        longitude: geoCoords[i].lng,
      },
      amenityFeature: spot.birds.slice(0, 6).map((b) => ({
        "@type": "LocationFeatureSpecification",
        name: b,
        value: true,
      })),
    };
  }),
};

export const metadata: Metadata = {
  title: { absolute: "Best Birding Hotspots in the Rio Grande Valley | South Texas Birds" },
  description:
    "Nine essential RGV birding hotspots: Santa Ana NWR, Bentsen State Park, Estero Llano Grande, Quinta Mazatlan, Resaca de la Palma, South Padre Island, Salineño, and more. Maps and bird lists.",
  openGraph: {
    title: "Best Birding Hotspots in the Rio Grande Valley | South Texas Birds",
    description:
      "Nine essential RGV birding hotspots: Santa Ana NWR, Bentsen State Park, Estero Llano Grande, Quinta Mazatlan, Resaca de la Palma, South Padre Island, and Salineño Wildlife Preserve.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
        width: 2585,
        height: 1723,
        alt: "Altamira Oriole in South Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg"],
    title: "Best Birding Hotspots in the Rio Grande Valley | South Texas Birds",
    description:
      "Nine essential RGV birding hotspots: Santa Ana NWR, Bentsen State Park, Estero Llano Grande, Quinta Mazatlan, Resaca de la Palma, South Padre Island, and Salineño Wildlife Preserve.",
  },
};

export default function HotspotsPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#C77F4A" }}
        >
          Rio Grande Valley
        </p>
        <h1
          className="font-serif text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "#0E6B6B" }}
        >
          Birding Hotspots
        </h1>
        <p className="text-sm max-w-xl" style={{ color: "#5C5954" }}>
          Nine essential stops for any birding trip to the Lower Rio Grande Valley and South Texas coast.
          {" "}Photos via{" "}
          <a
            href="https://commons.wikimedia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            Wikimedia Commons
          </a>
          {" "}&mdash;{" "}
          <Link
            href="/credits"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            photo credits
          </Link>
          .
        </p>
      </div>

      {/* ── Hotspot cards ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-16 flex flex-col gap-8">
        {hotspots.map((spot, i) => (
          <article
            key={spot.name}
            id={hotspotIds[i]}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#fff",
              boxShadow: "0 2px 12px rgba(14,107,107,0.09)",
              border: "1px solid rgba(14,107,107,0.07)",
            }}
            >
              {/* Card header */}
              <div
                className="px-6 py-5 flex items-start gap-4"
                style={{ backgroundColor: "#0E6B6B" }}
              >
                {/* Bird photo thumbnail */}
                <div
                  className="relative shrink-0 rounded-full overflow-hidden"
                  style={{
                    width: 56,
                    height: 56,
                    boxShadow: "0 0 0 2px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src={spot.photo}
                    alt={spot.photoAlt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="56px"
                  />
                </div>

                {/* Name, type badge, address */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span
                        className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-1.5"
                        style={typeBadgeStyle}
                      >
                        {spot.type}
                      </span>
                      <h2
                        className="font-serif text-lg font-bold leading-snug"
                        style={{ color: "#ffffff" }}
                      >
                        {spot.name}
                      </h2>
                    </div>
                    <span
                      className="text-3xl font-black shrink-0 leading-none select-none tabular-nums"
                      style={{ color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-playfair, serif)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-1 truncate block hover:underline"
                    style={{ color: "#D4A24C" }}
                  >
                    {spot.address}
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#4E4B46" }}
                >
                  {spot.description}
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {/* Birds */}
                  <div className="flex-1 min-w-[200px]">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: "#C77F4A" }}
                    >
                      Commonly Seen Birds
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.birds.map((bird) => {
                        const slug = toBirdId(bird);
                        const href = birdSlugs.has(slug) ? `/birds/${slug}` : `/birds#${slug}`;
                        return (
                          <Link
                            key={bird}
                            href={href}
                            className="text-xs font-medium px-2.5 py-0.5 rounded-full hover:opacity-75 transition-opacity"
                            style={{
                              background: "rgba(212,162,76,0.11)",
                              color: "#7A5C10",
                              border: "1px solid rgba(212,162,76,0.28)",
                            }}
                          >
                            {bird}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Best season */}
                  <div className="shrink-0">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: "#C77F4A" }}
                    >
                      Best Season
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#0E6B6B" }}
                    >
                      {spot.bestSeason}
                    </p>
                  </div>
                </div>
              </div>
          </article>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotspotSchema) }}
      />
    </div>
  );
}
