"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

const birds = [
  {
    name: "Green Jay",
    scientific: "Cyanocorax yncas",
    family: "Jays & Crows",
    status: "Resident",
    habitat: "Thornscrub, riparian woodland",
    notes: "One of the most sought-after birds in the U.S., found nowhere north of the Rio Grande Valley. Unmistakable with its bright green, blue, and yellow plumage; visits feeders readily.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png/330px-Green_jay_%28Cyanocorax_luxuosus%29_in_Mission%2C_Texas%2C_USA.png",
  },
  {
    name: "Altamira Oriole",
    scientific: "Icterus gularis",
    family: "Blackbirds & Orioles",
    status: "Resident",
    habitat: "Riparian forest, shade trees",
    notes: "The largest oriole in the U.S., this brilliant orange-and-black bird weaves a distinctive foot-long hanging nest. A reliable feeder visitor at Bentsen SP and Santa Ana NWR.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg/330px-Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
  },
  {
    name: "Plain Chachalaca",
    scientific: "Ortalis vetula",
    family: "Chachalacas",
    status: "Resident",
    habitat: "Dense brush, woodland edges",
    notes: "The only member of its tropical family found in the U.S. Groups erupt into deafening choruses at dawn. Commonly seen at feeders throughout the Valley.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Plain_Chachalaca_Roadside.png/330px-Plain_Chachalaca_Roadside.png",
  },
  {
    name: "Buff-bellied Hummingbird",
    scientific: "Amazilia yucatanensis",
    family: "Hummingbirds",
    status: "Resident",
    habitat: "Woodland edges, gardens",
    notes: "The only hummingbird that regularly breeds in South Texas, identified by its red bill and rufous tail. Unique among U.S. hummingbirds in moving northward after breeding season.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg/330px-Buff-bellied_Hummingbird-Sabal_Palm_Bird_Sanctuary-TX_-_2015-05-21at11-43-412_%2821421266100%29.jpg",
  },
  {
    name: "Painted Bunting",
    scientific: "Passerina ciris",
    family: "Cardinals & Allies",
    status: "Winter visitor / migrant",
    habitat: "Brushy edges, weedy fields, gardens",
    notes: "The male is arguably the most colorful bird in North America — a mosaic of red, blue, and green. Winters in South Texas in good numbers and visits feeders offering millet.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Male_Painted_Bunting_Singing.jpg/330px-Male_Painted_Bunting_Singing.jpg",
  },
  {
    name: "Roseate Spoonbill",
    scientific: "Platalea ajaja",
    family: "Ibises & Spoonbills",
    status: "Resident",
    habitat: "Shallow coastal bays, resacas, wetlands",
    notes: "A shocking splash of flamingo-pink in the Texas wetlands. Feeds by sweeping its spoon-shaped bill side to side through shallow water. Nests colonially along the coast.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Roseate_Spoonbill_-_Myakka_River_State_Park.jpg/330px-Roseate_Spoonbill_-_Myakka_River_State_Park.jpg",
  },
  {
    name: "Whooping Crane",
    scientific: "Grus americana",
    family: "Cranes",
    status: "Winter visitor",
    habitat: "Salt marshes, tidal flats",
    notes: "North America's tallest bird and one of conservation's greatest comeback stories. The entire wild flock winters at Aransas NWR; best viewed from guided boat tours out of Rockport.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Grus_americana_Sasata.jpg/330px-Grus_americana_Sasata.jpg",
  },
  {
    name: "Crested Caracara",
    scientific: "Caracara plancus",
    family: "Falcons",
    status: "Resident",
    habitat: "Open pastures, brushlands, roadsides",
    notes: "A bold, long-legged falcon of open country with a striking black-and-white pattern and bright orange face. Often seen walking on the ground or perched on fence posts and utility poles.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Schopfkarakara.jpg/330px-Schopfkarakara.jpg",
  },
  {
    name: "Harris's Hawk",
    scientific: "Parabuteo unicinctus",
    family: "Hawks",
    status: "Resident",
    habitat: "Brushy desert, thornscrub, open woodland",
    notes: "The only hawk in the world known to hunt cooperatively in family groups. Rich chestnut shoulders and thighs contrast with a dark body; a common and charismatic sight across South Texas.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Harris%27s_Hawk_%28Parabuteo_unicinctus%29_3_of_4_in_set.jpg/330px-Harris%27s_Hawk_%28Parabuteo_unicinctus%29_3_of_4_in_set.jpg",
  },
  {
    name: "Aplomado Falcon",
    scientific: "Falco femoralis",
    family: "Falcons",
    status: "Resident (reintroduced)",
    habitat: "Open coastal prairie, brushy flats",
    notes: "Once extirpated from the U.S., reintroduced at Laguna Atascosa NWR starting in the 1990s. Slender and elegant, with a bold facial pattern; one of the great conservation success stories.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg/330px-Aplomado_Falcon_%28Falco_femoralis%29_%2831631199902%29.jpg",
  },
  {
    name: "Broad-winged Hawk",
    scientific: "Buteo platypterus",
    family: "Hawks",
    status: "Migrant",
    habitat: "Woodland, open skies during migration",
    notes: "Unremarkable for most of the year, but in September the skies above Hazel Bazemore County Park fill with hundreds of thousands streaming south — one of birding's great spectacles.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Julie_Waters_broad_winged_hawk.JPG/330px-Julie_Waters_broad_winged_hawk.JPG",
  },
  {
    name: "Gray Hawk",
    scientific: "Buteo plagiatus",
    family: "Hawks",
    status: "Resident",
    habitat: "Riparian woodland along the Rio Grande",
    notes: "A finely gray-barred hawk of the river corridor, reaching the northern edge of its range in the Rio Grande Valley. Its loud, drawn-out call is a characteristic sound of the riparian zone.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Buteo_plagiatus_Belize.jpg/330px-Buteo_plagiatus_Belize.jpg",
  },
  {
    name: "Hook-billed Kite",
    scientific: "Chondrohierax uncinatus",
    family: "Hawks & Kites",
    status: "Rare resident",
    habitat: "Riparian forest",
    notes: "One of the rarest regularly occurring raptors in the U.S., best looked for soaring over the riparian forest from the hawk watch platform at Bentsen-Rio Grande SP.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Chondrohierax_uncinatus_76608753.jpg/330px-Chondrohierax_uncinatus_76608753.jpg",
  },
  {
    name: "Ringed Kingfisher",
    scientific: "Megaceryle torquata",
    family: "Kingfishers",
    status: "Resident",
    habitat: "Rivers, resacas, large water bodies",
    notes: "The largest kingfisher in the Americas, barely reaching the U.S. in South Texas. A noisy, rattling presence along the Rio Grande and its oxbow lakes; much larger than the familiar Belted Kingfisher.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ringed_Kingfisher_%28Megaceryle_torquata%29_male_%2828808454175%29.jpg/330px-Ringed_Kingfisher_%28Megaceryle_torquata%29_male_%2828808454175%29.jpg",
  },
  {
    name: "Green Kingfisher",
    scientific: "Chloroceryle americana",
    family: "Kingfishers",
    status: "Resident",
    habitat: "Clear streams, resacas, irrigation channels",
    notes: "The smallest of the three kingfisher species in the Valley, barely larger than a sparrow. A secretive gem that perches low over clear water, diving for tiny fish.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Green_kingfisher_%28Chloroceryle_americana%29_male_3.jpg/330px-Green_kingfisher_%28Chloroceryle_americana%29_male_3.jpg",
  },
  {
    name: "Vermilion Flycatcher",
    scientific: "Pyrocephalus rubinus",
    family: "Tyrant Flycatchers",
    status: "Resident / winter visitor",
    habitat: "Open areas near water, parks, brushy fields",
    notes: "The male's blazing red crown and breast make it one of the most eye-catching birds in Texas. Perches conspicuously on exposed branches and wire fences while hunting insects.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Karmintyrann_%28Pyrocephalus_obscurus%29%2C_M%C3%A4nnchen_1.jpg/330px-Karmintyrann_%28Pyrocephalus_obscurus%29%2C_M%C3%A4nnchen_1.jpg",
  },
  {
    name: "Great Kiskadee",
    scientific: "Pitangus sulphuratus",
    family: "Tyrant Flycatchers",
    status: "Resident",
    habitat: "Open woodland, resacas, gardens",
    notes: "Loud, bold, and almost impossible to miss: this yellow-bellied flycatcher announces itself constantly with its namesake \"KISS-ka-dee\" call. One of the most conspicuous birds in any RGV park.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Great_kiskadee_%2870240%29.jpg/330px-Great_kiskadee_%2870240%29.jpg",
  },
  {
    name: "Tropical Kingbird",
    scientific: "Tyrannus melancholicus",
    family: "Tyrant Flycatchers",
    status: "Uncommon resident",
    habitat: "Open areas near water, woodland edges",
    notes: "Nearly identical to the more common Couch's Kingbird — the call (a rapid, twittering pip) is the safest way to tell them apart. Look for a notched rather than forked tail.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tropical_kingbird_%28Tyrannus_melancholicus%29.JPG/330px-Tropical_kingbird_%28Tyrannus_melancholicus%29.JPG",
  },
  {
    name: "Ferruginous Pygmy-Owl",
    scientific: "Glaucidium brasilianum",
    family: "Owls",
    status: "Resident",
    habitat: "Dense thornscrub, woodland",
    notes: "Tiny but ferocious, this diurnal owl is a prized find in the Valley's dense brush. It often responds to imitations of its whistle, and draws in scolding songbirds.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg/330px-Ferruginous_pygmy_owl_%28Glaucidium_brasilianum_ridgwayi%29_Copan.jpg",
  },
  {
    name: "Elf Owl",
    scientific: "Micrathene whitneyi",
    family: "Owls",
    status: "Summer resident",
    habitat: "Riparian woodland, thornscrub",
    notes: "The world's smallest owl by weight, barely larger than a sparrow. Arrives in spring to nest in old woodpecker cavities; its puppy-like yipping calls reveal it at dusk along the Rio Grande.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Micrathene_whitneyi_29APR12_Madera_Canyon_AZ.jpg/330px-Micrathene_whitneyi_29APR12_Madera_Canyon_AZ.jpg",
  },
  {
    name: "Least Grebe",
    scientific: "Tachybaptus dominicus",
    family: "Grebes",
    status: "Resident",
    habitat: "Ponds, resacas, slow streams",
    notes: "The smallest grebe in the Western Hemisphere, barely larger than a tennis ball. Common on resacas and ponds throughout the Valley; golden eyes give it a surprisingly intense expression.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tachybaptus_dominicus_brachyrhynchus_-_Least_grebe%3B_Pantanal_route-park%2C_Corumb%C3%A1%2C_Mato_Grosso_do_Sul%2C_Brazil.jpg/330px-Tachybaptus_dominicus_brachyrhynchus_-_Least_grebe%3B_Pantanal_route-park%2C_Corumb%C3%A1%2C_Mato_Grosso_do_Sul%2C_Brazil.jpg",
  },
  {
    name: "Black-bellied Whistling-Duck",
    scientific: "Dendrocygna autumnalis",
    family: "Ducks",
    status: "Resident",
    habitat: "Ponds, resacas, flooded fields",
    notes: "A colorful, long-necked duck with a candy-orange bill that has dramatically expanded its range into Texas. Often seen in large flocks perched in trees or grazing in grassy fields.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Whistling_duck_flight02_-_natures_pics-edit1.jpg/330px-Whistling_duck_flight02_-_natures_pics-edit1.jpg",
  },
  {
    name: "Masked Duck",
    scientific: "Nomonyx dominicus",
    family: "Ducks",
    status: "Rare resident",
    habitat: "Densely vegetated ponds and resacas",
    notes: "One of the most sought-after rarities in Texas, lurking in thick emergent vegetation. Estero Llano Grande SP is perhaps the most reliable site in the U.S. for this otherwise secretive stiff-tail.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Masked_duck_%28Nomonyx_dominicus%29.jpg/330px-Masked_duck_%28Nomonyx_dominicus%29.jpg",
  },
  {
    name: "Northern Jacana",
    scientific: "Jacana spinosa",
    family: "Jacanas",
    status: "Rare resident",
    habitat: "Floating vegetation on ponds and resacas",
    notes: "Walks on floating lily pads on absurdly long toes, earning the nickname \"lily-trotter.\" A tropical species that barely reaches the U.S.; Estero Llano Grande SP is the most consistent spot.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Northern_Jacana_Costa_Rica.jpg/330px-Northern_Jacana_Costa_Rica.jpg",
  },
  {
    name: "Groove-billed Ani",
    scientific: "Crotophaga sulcirostris",
    family: "Cuckoos",
    status: "Summer resident",
    habitat: "Brushy fields, woodland edges, pastures",
    notes: "A gangly, all-black cuckoo with a bizarre grooved bill and a loose, floppy flight. Moves through low brush in noisy, cooperative family groups; becomes scarce in the Valley by late fall.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Groove-billed_ani_%28Crotophaga_sulcirostris%29_Cayo.jpg/330px-Groove-billed_ani_%28Crotophaga_sulcirostris%29_Cayo.jpg",
  },
  {
    name: "Clay-colored Thrush",
    scientific: "Turdus grayi",
    family: "Thrushes",
    status: "Rare resident",
    habitat: "Dense riparian thickets, shaded gardens",
    notes: "The national bird of Costa Rica barely reaches the U.S. in South Texas. Plain brown but a superb singer; a few pairs have established in the Valley, most reliably at Bentsen SP.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Clay-coloured_thrush_%28Turdus_grayi_casius%29_2.jpg/330px-Clay-coloured_thrush_%28Turdus_grayi_casius%29_2.jpg",
  },
  {
    name: "Long-billed Thrasher",
    scientific: "Toxostoma longirostre",
    family: "Mockingbirds & Thrashers",
    status: "Resident",
    habitat: "Dense thornscrub, brushy woodland",
    notes: "A South Texas endemic with a strongly curved bill and rich, varied song. Skulky but vocal; sings persistently from within dense brush in spring and can be drawn to the open with patience.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Toxostoma_longirostre_-Laguna_Atascosa_National_Wildlife_Refuge%2C_Texas%2C_USA-8.jpg/330px-Toxostoma_longirostre_-Laguna_Atascosa_National_Wildlife_Refuge%2C_Texas%2C_USA-8.jpg",
  },
  {
    name: "Audubon's Oriole",
    scientific: "Icterus graduacauda",
    family: "Blackbirds & Orioles",
    status: "Resident",
    habitat: "Dense thornscrub, riparian thickets",
    notes: "A secretive oriole with a black hood and bright yellow body that rarely ventures to feeders. Heard more often than seen; its rich, slow whistles carry through the brush at Bentsen SP.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Audubon%27s_Oriole_%2812626811374%29.jpg/330px-Audubon%27s_Oriole_%2812626811374%29.jpg",
  },
  {
    name: "Olive Sparrow",
    scientific: "Arremonops rufivirgatus",
    family: "New World Sparrows",
    status: "Resident",
    habitat: "Dense thornscrub undergrowth",
    notes: "A drab but characteristic bird of the Valley's dense brush, rarely venturing far from cover. Its dry, accelerating trill is a background sound of any thornscrub walk — but seeing one takes patience.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Olive_Sparrow_%28Arremonops_rufivirgatus%29_Edinbug%2C_Texas%2C_USA.png/330px-Olive_Sparrow_%28Arremonops_rufivirgatus%29_Edinbug%2C_Texas%2C_USA.png",
  },
  {
    name: "White-tipped Dove",
    scientific: "Leptotila verreauxi",
    family: "Pigeons & Doves",
    status: "Resident",
    habitat: "Dense thornscrub, shaded woodland floor",
    notes: "A plump, ground-hugging dove that walks beneath feeders at Valley nature centers. Its low, hollow hoot — like blowing across the top of a bottle — is one of the signature sounds of the RGV.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/White-tipped_Dove_-_Panama_H8O8470.jpg/330px-White-tipped_Dove_-_Panama_H8O8470.jpg",
  },
];

// Status badge inline styles — no Tailwind color utilities
function statusBadgeStyle(status: string): CSSProperties {
  if (status.includes("Rare"))
    return {
      background: "rgba(194,96,61,0.1)",
      color: "#C2603D",
      border: "1px solid rgba(194,96,61,0.25)",
    };
  if (status.includes("Winter"))
    return {
      background: "rgba(40,80,130,0.08)",
      color: "#2B507A",
      border: "1px solid rgba(40,80,130,0.2)",
    };
  if (status.includes("Summer"))
    return {
      background: "rgba(212,162,76,0.12)",
      color: "#7A5C10",
      border: "1px solid rgba(212,162,76,0.3)",
    };
  if (status === "Migrant")
    return {
      background: "rgba(90,55,130,0.08)",
      color: "#5A3782",
      border: "1px solid rgba(90,55,130,0.2)",
    };
  if (status === "Uncommon resident")
    return {
      background: "rgba(212,162,76,0.1)",
      color: "#8A6518",
      border: "1px solid rgba(212,162,76,0.25)",
    };
  // Resident (all remaining variants)
  return {
    background: "rgba(31,61,43,0.08)",
    color: "#1F3D2B",
    border: "1px solid rgba(31,61,43,0.2)",
  };
}

const statusGroups: Record<string, string[]> = {
  Resident: ["Resident", "Uncommon resident", "Resident (reintroduced)", "Resident / winter visitor"],
  Rare: ["Rare resident"],
  Winter: ["Winter visitor", "Winter visitor / migrant"],
  Summer: ["Summer resident"],
  Migrant: ["Migrant"],
};

const filterLabels = ["All", "Resident", "Rare", "Winter", "Summer", "Migrant"] as const;
type Filter = (typeof filterLabels)[number];

export default function BirdsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const q = query.toLowerCase();

  const filtered = birds.filter((bird) => {
    const matchesSearch =
      q === "" ||
      bird.name.toLowerCase().includes(q) ||
      bird.scientific.toLowerCase().includes(q) ||
      bird.family.toLowerCase().includes(q) ||
      bird.habitat.toLowerCase().includes(q) ||
      bird.notes.toLowerCase().includes(q);

    const matchesFilter =
      activeFilter === "All" ||
      (statusGroups[activeFilter]?.includes(bird.status) ?? false);

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ background: "#F6F1E7" }}>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C2603D" }}
        >
          Rio Grande Valley
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-3"
          style={{ color: "#1F3D2B" }}
        >
          South Texas Bird Species
        </h1>
        <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
          {birds.length} specialty and notable species of the Rio Grande Valley and South Texas
          coast. Photos via Wikimedia Commons (CC licensed).
        </p>

        {/* ── Search + filters ──────────────────────────────────────────── */}
        <div className="space-y-3">
          <input
            type="search"
            placeholder="Search by name, family, habitat…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/40"
            style={{
              background: "#fff",
              border: "1px solid rgba(31,61,43,0.22)",
              color: "#2B2B26",
              boxShadow: "0 1px 3px rgba(31,61,43,0.06)",
            }}
          />
          <div className="flex flex-wrap gap-2">
            {filterLabels.map((label) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className="rounded-full px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                style={
                  activeFilter === label
                    ? { backgroundColor: "#1F3D2B", color: "#fff" }
                    : {
                        background: "#fff",
                        border: "1px solid rgba(31,61,43,0.2)",
                        color: "#1F3D2B",
                      }
                }
              >
                {label}
                {label === "All"
                  ? ` (${birds.length})`
                  : ` (${birds.filter((b) => statusGroups[label]?.includes(b.status)).length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-sm" style={{ color: "#6E6B66" }}>
            No birds match &ldquo;{query}&rdquo;
            {activeFilter !== "All" && (
              <>
                {" "}in the{" "}
                <span style={{ color: "#1F3D2B", fontWeight: 600 }}>{activeFilter}</span> filter
              </>
            )}.
          </div>
        ) : (
          <>
            {(query || activeFilter !== "All") && (
              <p className="text-xs mb-5" style={{ color: "#6E6B66" }}>
                {filtered.length} of {birds.length} species
              </p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((bird) => (
                <div
                  key={bird.name}
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{
                    background: "#fff",
                    borderTop: "3px solid #D4A24C",
                    boxShadow: "0 1px 8px rgba(31,61,43,0.08)",
                  }}
                >
                  {/* Photo */}
                  <div
                    className="relative h-48 shrink-0"
                    style={{ background: "#1F3D2B" }}
                  >
                    <Image
                      src={bird.photo}
                      alt={bird.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <h2
                      className="font-serif text-base font-bold leading-snug mb-0.5"
                      style={{ color: "#1F3D2B" }}
                    >
                      {bird.name}
                    </h2>
                    <p
                      className="text-xs italic mb-2.5"
                      style={{ color: "#6E6B66" }}
                    >
                      {bird.scientific}
                    </p>

                    <span
                      className="self-start text-xs font-medium px-2.5 py-0.5 rounded-full mb-3"
                      style={statusBadgeStyle(bird.status)}
                    >
                      {bird.status}
                    </span>

                    <p className="text-xs mb-3" style={{ color: "#4E4B46" }}>
                      <span
                        className="font-semibold tracking-widest uppercase"
                        style={{ fontSize: "0.6rem", color: "#C2603D" }}
                      >
                        Habitat
                      </span>
                      {"  "}
                      {bird.habitat}
                    </p>

                    <p
                      className="text-sm leading-relaxed mt-auto"
                      style={{ color: "#4E4B46" }}
                    >
                      {bird.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
}
