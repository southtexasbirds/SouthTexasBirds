import Image from "next/image";

const birds = [
  {
    name: "Green Jay",
    scientific: "Cyanocorax yncas",
    family: "Jays & Crows",
    status: "Resident",
    habitat: "Thornscrub, riparian woodland",
    notes: "Unmistakable with its bright green, blue, and yellow plumage. Visits feeders readily.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png/330px-Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png",
  },
  {
    name: "Altamira Oriole",
    scientific: "Icterus gularis",
    family: "Blackbirds & Orioles",
    status: "Resident",
    habitat: "Riparian forest, shade trees",
    notes: "Largest oriole in the U.S. Builds a distinctive long hanging nest.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg/330px-Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
  },
  {
    name: "Plain Chachalaca",
    scientific: "Ortalis vetula",
    family: "Chachalacas",
    status: "Resident",
    habitat: "Dense brush, woodland edges",
    notes: "Loud, raucous calls at dawn. Often seen at Santa Ana NWR and Bentsen SP feeders.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Plain_Chachalaca_Roadside.png/330px-Plain_Chachalaca_Roadside.png",
  },
  {
    name: "Buff-bellied Hummingbird",
    scientific: "Amazilia yucatanensis",
    family: "Hummingbirds",
    status: "Resident",
    habitat: "Woodland edges, gardens",
    notes: "The only hummingbird that regularly breeds in South Texas. Red bill is distinctive.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg/330px-Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg",
  },
  {
    name: "Whooping Crane",
    scientific: "Grus americana",
    family: "Cranes",
    status: "Winter visitor",
    habitat: "Salt marshes, tidal flats",
    notes: "Critically endangered. The wild flock winters at Aransas NWR. Best seen by boat tour.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Grus_americana_Sasata.jpg/330px-Grus_americana_Sasata.jpg",
  },
  {
    name: "Aplomado Falcon",
    scientific: "Falco femoralis",
    family: "Falcons",
    status: "Resident (reintroduced)",
    habitat: "Open coastal prairie, brushy flats",
    notes: "Once extirpated, reintroduced at Laguna Atascosa NWR. Elegant and fast.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg/330px-Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg",
  },
  {
    name: "Ferruginous Pygmy-Owl",
    scientific: "Glaucidium brasilianum",
    family: "Owls",
    status: "Resident",
    habitat: "Dense thornscrub, woodland",
    notes: "Tiny but fierce. Active during the day. Often responds to playback.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg/330px-Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg",
  },
  {
    name: "Hook-billed Kite",
    scientific: "Chondrohierax uncinatus",
    family: "Hawks & Kites",
    status: "Rare resident",
    habitat: "Riparian forest",
    notes: "Best looked for at Bentsen-Rio Grande SP from the hawk watch platform.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Chondrohierax_uncinatus_76608753.jpg/330px-Chondrohierax_uncinatus_76608753.jpg",
  },
  {
    name: "Great Kiskadee",
    scientific: "Pitangus sulphuratus",
    family: "Tyrant Flycatchers",
    status: "Resident",
    habitat: "Open woodland, resacas, gardens",
    notes: "Noisy, conspicuous flycatcher with bold yellow belly and rufous wings.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Great_kiskadee_%2870240%29.jpg/330px-Great_kiskadee_%2870240%29.jpg",
  },
  {
    name: "Tropical Kingbird",
    scientific: "Tyrannus melancholicus",
    family: "Tyrant Flycatchers",
    status: "Uncommon resident",
    habitat: "Open areas near water",
    notes: "Very similar to Couch's Kingbird — call is the key. Look for a notched tail.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tropical_kingbird_%28Tyrannus_melancholicus%29.JPG/330px-Tropical_kingbird_%28Tyrannus_melancholicus%29.JPG",
  },
  {
    name: "Reddish Egret",
    scientific: "Egretta rufescens",
    family: "Herons & Egrets",
    status: "Resident",
    habitat: "Shallow coastal bays, lagoons",
    notes: "Energetic dancer of the shallows. Both dark and white morphs occur. Rare globally.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/ReddishEgret_Gam.jpg/330px-ReddishEgret_Gam.jpg",
  },
  {
    name: "White-tailed Hawk",
    scientific: "Geranoaetus albicaudatus",
    family: "Hawks",
    status: "Resident",
    habitat: "Open grasslands, coastal prairies",
    notes: "Striking hawk of open country. Often follows brush fires to catch fleeing prey.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Buteo_albicaudatus_-Salvador_Zoo%2C_Ondina%2C_Salvador%2C_Bahia%2C_Brasil-8a.jpg/330px-Buteo_albicaudatus_-Salvador_Zoo%2C_Ondina%2C_Salvador%2C_Bahia%2C_Brasil-8a.jpg",
  },
];

const statusColors: Record<string, string> = {
  "Resident": "bg-green-100 text-green-800",
  "Winter visitor": "bg-blue-100 text-blue-800",
  "Uncommon resident": "bg-yellow-100 text-yellow-800",
  "Rare resident": "bg-orange-100 text-orange-800",
  "Resident (reintroduced)": "bg-teal-100 text-teal-800",
};

export default function BirdsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-2">South Texas Bird Species</h1>
      <p className="text-gray-500 mb-8 text-sm">
        A selection of target species for the Rio Grande Valley and Coastal Bend. South Texas records 500+ species total.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {birds.map((bird) => (
          <div
            key={bird.name}
            className="bg-white rounded-xl border border-green-100 shadow-sm overflow-hidden flex flex-col"
          >
            <div className="relative h-48 bg-green-50">
              <Image
                src={bird.photo}
                alt={bird.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-base font-bold text-green-900">{bird.name}</h2>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[bird.status] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {bird.status}
                </span>
              </div>
              <p className="text-xs italic text-gray-400 mb-2">{bird.scientific}</p>
              <p className="text-xs text-gray-500 mb-1">
                <span className="font-medium">Habitat:</span> {bird.habitat}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-auto pt-2">{bird.notes}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-10 text-center">
        Photos via Wikimedia Commons (CC licensed)
      </p>
    </div>
  );
}
