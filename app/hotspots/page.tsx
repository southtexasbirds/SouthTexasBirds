import Image from "next/image";

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
];

// Badge style for each hotspot type — shown on the dark palm-green header
const typeBadgeStyle = {
  background: "rgba(255,255,255,0.15)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.3)",
};

export default function HotspotsPage() {
  return (
    <div style={{ background: "#F6F1E7" }}>
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#C2603D" }}
        >
          Rio Grande Valley
        </p>
        <h1
          className="font-serif text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "#1F3D2B" }}
        >
          Birding Hotspots
        </h1>
        <p className="text-sm max-w-xl" style={{ color: "#5C5954" }}>
          Five essential stops for any birding trip to the Lower Rio Grande Valley.
        </p>
      </div>

      {/* ── Hotspot cards ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-16 flex flex-col gap-8">
        {hotspots.map((spot, i) => (
          <article
            key={spot.name}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#fff",
              boxShadow: "0 2px 12px rgba(31,61,43,0.09)",
              border: "1px solid rgba(31,61,43,0.07)",
            }}
            >
              {/* Card header */}
              <div
                className="px-6 py-5 flex items-start gap-4"
                style={{ backgroundColor: "#1F3D2B" }}
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
                      style={{ color: "#C2603D" }}
                    >
                      Commonly Seen Birds
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.birds.map((bird) => (
                        <span
                          key={bird}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                          style={{
                            background: "rgba(212,162,76,0.11)",
                            color: "#7A5C10",
                            border: "1px solid rgba(212,162,76,0.28)",
                          }}
                        >
                          {bird}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best season */}
                  <div className="shrink-0">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: "#C2603D" }}
                    >
                      Best Season
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#1F3D2B" }}
                    >
                      {spot.bestSeason}
                    </p>
                  </div>
                </div>
              </div>
          </article>
        ))}
      </div>
    </div>
  );
}
