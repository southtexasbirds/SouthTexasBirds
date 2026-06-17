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
    emoji: "💧",
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
    emoji: "🌿",
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
    emoji: "🌳",
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
    emoji: "🦋",
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
    emoji: "🦅",
  },
];

const typeColors: Record<string, string> = {
  "State Park": "bg-green-100 text-green-800",
  "National Wildlife Refuge": "bg-blue-100 text-blue-800",
  "State Park / World Birding Center": "bg-emerald-100 text-emerald-800",
  "Nature Center": "bg-yellow-100 text-yellow-800",
};

export default function HotspotsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-2">Rio Grande Valley Birding Hotspots</h1>
      <p className="text-gray-500 mb-10 text-sm">
        The five essential stops for any birding trip to the Lower Rio Grande Valley.
      </p>

      <div className="flex flex-col gap-8">
        {hotspots.map((spot, i) => (
          <div key={spot.name} className="bg-white rounded-xl border border-green-100 shadow-sm overflow-hidden">
            {/* Header bar */}
            <div className="bg-green-900 text-white px-6 py-4 flex items-center gap-3">
              <span className="text-3xl">{spot.emoji}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold leading-tight">{spot.name}</h2>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[spot.type] ?? "bg-gray-100 text-gray-700"}`}
                  >
                    {spot.type}
                  </span>
                </div>
                <p className="text-green-300 text-xs mt-0.5">{spot.address}</p>
              </div>
              <span className="ml-auto text-4xl font-black text-green-700 select-none leading-none">
                {i + 1}
              </span>
            </div>

            <div className="px-6 py-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-5">{spot.description}</p>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex-1 min-w-[200px]">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Commonly Seen Birds
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.birds.map((bird) => (
                      <span
                        key={bird}
                        className="text-xs bg-green-50 border border-green-200 text-green-800 px-2 py-0.5 rounded-full"
                      >
                        {bird}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Best Season
                  </p>
                  <p className="text-sm text-green-700 font-medium">{spot.bestSeason}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
