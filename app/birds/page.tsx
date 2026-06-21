"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type CSSProperties } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { birdAudio } from "./audioData";

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
  {
    name: "Reddish Egret",
    scientific: "Egretta rufescens",
    family: "Herons",
    status: "Resident",
    habitat: "Coastal bays, tidal flats, salt lagoons",
    notes: "Among the rarest herons in North America and a Texas coastal specialty. Feeds with a spectacular lunging, wing-spreading display — sprinting and spinning to startle fish into the open. Occurs in both a dark morph and a scarce white morph.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/ReddishEgret_Gam.jpg/330px-ReddishEgret_Gam.jpg",
  },
  {
    name: "Tricolored Heron",
    scientific: "Egretta tricolor",
    family: "Herons",
    status: "Resident",
    habitat: "Coastal marshes, estuaries, resacas",
    notes: "The only U.S. heron with a white belly contrasting sharply against slate-blue upperparts. An agile, fast-running forager that chases prey at a sprint rather than stalking. Common in coastal marshes and tidal flats from Corpus Christi south.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tri-colored_heron_sunrise_bunche_beach_%2833516451355%29_%28cropped%29.jpg/330px-Tri-colored_heron_sunrise_bunche_beach_%2833516451355%29_%28cropped%29.jpg",
  },
  {
    name: "Neotropic Cormorant",
    scientific: "Nannopterum brasilianum",
    family: "Cormorants",
    status: "Resident",
    habitat: "Resacas, ponds, rivers, coastal bays",
    notes: "Smaller and longer-tailed than the familiar Double-crested Cormorant, identified by its tan facial skin bordered in white. Abundant at Estero Llano Grande and other Valley resacas; often nests colonially in the same trees as herons and spoonbills.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Neotropic_cormorant_%28Nannopterum_brasilianum_mexicanum%29_Peten.jpg/330px-Neotropic_cormorant_%28Nannopterum_brasilianum_mexicanum%29_Peten.jpg",
  },
  {
    name: "White-tailed Hawk",
    scientific: "Geranoaetus albicaudatus",
    family: "Hawks",
    status: "Resident",
    habitat: "Coastal prairie, open brushland",
    notes: "A large, striking raptor found in the U.S. only in South Texas. Adults show clean white underparts, rusty shoulder patches, and a white tail with a single narrow black band. Perches prominently on utility poles and fenceposts across the open prairies between Corpus Christi and the coast.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Buteo_albicaudatus_-Salvador_Zoo%2C_Ondina%2C_Salvador%2C_Bahia%2C_Brasil-8a.jpg/330px-Buteo_albicaudatus_-Salvador_Zoo%2C_Ondina%2C_Salvador%2C_Bahia%2C_Brasil-8a.jpg",
  },
  {
    name: "White-tailed Kite",
    scientific: "Elanus leucurus",
    family: "Hawks & Kites",
    status: "Resident",
    habitat: "Open grasslands, agricultural fields, roadsides",
    notes: "A ghostly white kite that hunts by hovering in place over open fields — a behavior unique among North American raptors. Black shoulder patches and red eyes give the perched bird a striking look. Often seen on roadsides and near farm fields wherever rodents are plentiful.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Elanus_leucurus_3.jpg/330px-Elanus_leucurus_3.jpg",
  },
  {
    name: "Swallow-tailed Kite",
    scientific: "Elanoides forficatus",
    family: "Hawks & Kites",
    status: "Migrant",
    habitat: "Open sky, woodland edges, river corridors",
    notes: "Arguably the most graceful bird in North America. Migrates through South Texas in spring and fall, often in loose groups, effortlessly banking on its impossibly long forked tail. Watch overhead at Valley hotspots from late April through May and again in August.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Swallow-tailed_Kite_%2834163638494%29.jpg/330px-Swallow-tailed_Kite_%2834163638494%29.jpg",
  },
  {
    name: "Couch's Kingbird",
    scientific: "Tyrannus couchii",
    family: "Tyrant Flycatchers",
    status: "Resident",
    habitat: "Woodland edges, roadsides, towns, parks",
    notes: "The default large yellow kingbird of the Rio Grande Valley — nearly identical to the Tropical Kingbird but told by its slightly thicker, forked tail and distinctive call: a rolling, nasal breeeer. Found in almost any park, garden, or open area in the Valley.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tyrannus_couchii_112139785_%28cropped%29.jpg/330px-Tyrannus_couchii_112139785_%28cropped%29.jpg",
  },
  {
    name: "Scissor-tailed Flycatcher",
    scientific: "Tyrannus forficatus",
    family: "Tyrant Flycatchers",
    status: "Summer resident",
    habitat: "Open country, pastures, roadsides, fencelines",
    notes: "One of the most eye-catching birds in Texas: a pale gray flycatcher with salmon-pink sides and an extraordinary forked tail that can exceed its own body length. Arrives in spring and is conspicuous on utility wires throughout South Texas. The state bird of Oklahoma.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tyrannus_forficatus_on_branch.jpg/330px-Tyrannus_forficatus_on_branch.jpg",
  },
  {
    name: "Rose-throated Becard",
    scientific: "Pachyramphus aglaiae",
    family: "Becards",
    status: "Rare resident",
    habitat: "Riparian forest, dense riverside growth",
    notes: "One of the most sought-after rarities in the Rio Grande Valley, barely reaching the U.S. The male's rose-pink throat is stunning against its gray plumage. Builds a large, shaggy ball-shaped nest of grass and plant fiber hanging from a branch tip — the nest is often easier to spot than the bird.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Pachyramphus_aglaiae_-_Dan_Vickers_-_459803351.jpeg/330px-Pachyramphus_aglaiae_-_Dan_Vickers_-_459803351.jpeg",
  },
  {
    name: "Red-billed Pigeon",
    scientific: "Patagioenas flavirostris",
    family: "Pigeons & Doves",
    status: "Resident",
    habitat: "Riparian forest along the Rio Grande",
    notes: "A large, dark wine-colored pigeon of the river corridor that barely reaches the U.S. in South Texas. Most reliably seen flying over the Rio Grande at dawn from Bentsen SP's hawk watch platform. Its deep, resonant cooing fills the riparian mornings before most other birds have warmed up.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Patagioenas_flavirostris_-Costa_Rica-8.jpg/330px-Patagioenas_flavirostris_-Costa_Rica-8.jpg",
  },
  {
    name: "Inca Dove",
    scientific: "Columbina inca",
    family: "Pigeons & Doves",
    status: "Resident",
    habitat: "Urban parks, gardens, roadsides, feeders",
    notes: "A small, intricately scaly dove of towns and gardens, immediately identified by its squeaky two-note no hope call and the bright rufous wing flash in flight. One of the most common birds at feeders and picnic areas throughout the Valley — easy to overlook, but charming on close inspection.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/IncaDove.jpg/330px-IncaDove.jpg",
  },
  {
    name: "Greater Roadrunner",
    scientific: "Geococcyx californianus",
    family: "Cuckoos",
    status: "Resident",
    habitat: "Thornscrub, brushy desert, roadsides",
    notes: "The iconic ground-dwelling cuckoo of the Southwest — a fast, fearless predator that takes lizards, snakes, scorpions, and even small birds. More often heard (a series of descending, mournful coos) than seen sprinting across the road. Encountered throughout thornscrub habitats across South Texas.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Greater_Roadrunner_Tingley_Beach.jpg/330px-Greater_Roadrunner_Tingley_Beach.jpg",
  },
  {
    name: "American Oystercatcher",
    scientific: "Haematopus palliatus",
    family: "Oystercatchers",
    status: "Resident",
    habitat: "Sandy beaches, shell reefs, tidal flats",
    notes: "Unmistakable with its bold black-and-white plumage, massive orange-red bill, and far-carrying piping calls. Pries open oysters and mussels by stabbing its laterally flattened bill into the shell gap. Resident along the Texas coast; the barrier island beaches south of Corpus Christi hold good numbers.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/American_oystercatcher_on_Fort_Tilden_beach_%2893754%29.jpg/330px-American_oystercatcher_on_Fort_Tilden_beach_%2893754%29.jpg",
  },
  {
    name: "Green Parakeet",
    scientific: "Psittacara holochlorus",
    family: "Parrots",
    status: "Resident (naturalized)",
    habitat: "Urban trees, palm groves, parks",
    notes: "A naturalized population descended from escaped cage birds has established throughout the lower Rio Grande Valley, especially around McAllen. Noisy flocks roost communally in city trees and announce themselves with loud screeching. Considered one of the two naturally-occurring wild parakeets in the continental U.S.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Green_Parakeet_-in_tree_-South_Texas-8.jpg/330px-Green_Parakeet_-in_tree_-South_Texas-8.jpg",
  },
  {
    name: "Red-crowned Parrot",
    scientific: "Amazona viridigenalis",
    family: "Parrots",
    status: "Resident (naturalized)",
    habitat: "Urban neighborhoods, palm trees, orchards",
    notes: "A charismatic bright-green parrot with a scarlet crown established in Brownsville and McAllen. Paradoxically, the feral Texas population now rivals or exceeds the remaining wild birds in Mexico — making the RGV an unexpected stronghold for this critically endangered species.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Red_Crowned_Amazon.jpg/330px-Red_Crowned_Amazon.jpg",
  },
  {
    name: "White-collared Seedeater",
    scientific: "Sporophila morelleti",
    family: "Tanagers",
    status: "Rare resident",
    habitat: "Weedy fields, Carrizo cane, tall grass near the Rio Grande",
    notes: "One of the most sought-after birds on the U.S. list, found only in a narrow stretch along the Rio Grande near Zapata. A tiny, round finch — the male striking in black and white — that lurks in tall weeds and cane. Patient visitors stake out known sites at dawn for the best chance.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sporophila_torqueola_55799290.jpg/330px-Sporophila_torqueola_55799290.jpg",
  },
  {
    name: "Tropical Parula",
    scientific: "Setophaga pitiayumi",
    family: "Wood-Warblers",
    status: "Rare resident",
    habitat: "Spanish moss-draped oaks, riparian forest",
    notes: "A tiny warbler nearly identical to the Northern Parula but lacking the dark breast band. Rare but regular in the Valley; closely tied to Spanish moss, which it uses as nesting material. Most reliably found at Bentsen SP and Santa Ana NWR in late spring and summer.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Setophaga_pitiayumi_Monteverde_03.jpg/330px-Setophaga_pitiayumi_Monteverde_03.jpg",
  },
  {
    name: "Mottled Duck",
    scientific: "Anas fulvigula",
    family: "Ducks",
    status: "Resident",
    habitat: "Coastal marshes, prairie ponds, bays",
    notes: "The only dabbling duck that breeds year-round along the Gulf Coast. It closely resembles a Mallard but has a bright yellow bill and darker, unmarked plumage; hybridization with feral Mallards is an ongoing conservation concern. Common in coastal marshes from Corpus Christi south.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/MottledDuck_Gam.jpg/330px-MottledDuck_Gam.jpg",
  },
  {
    name: "Piping Plover",
    scientific: "Charadrius melodus",
    family: "Plovers",
    status: "Winter visitor",
    habitat: "Sandy beaches, tidal flats, shell reefs",
    notes: "One of North America's most endangered shorebirds, but the Texas coast winters a significant share of the global population. Small and pale as dry sand, it blends into the beach almost perfectly. Padre Island National Seashore and the barrier islands of the Coastal Bend are among the most important wintering sites in the country.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Charadrius-melodus-004_edit.jpg/330px-Charadrius-melodus-004_edit.jpg",
  },
  {
    name: "Botteri's Sparrow",
    scientific: "Peucaea botterii",
    family: "New World Sparrows",
    status: "Summer resident",
    habitat: "Coastal tallgrass prairie, weedy fields",
    notes: "A nondescript sparrow that arrives in summer specifically to breed in Tamaulipan coastal grasslands. Nearly impossible to find without its song — a series of chips and trills that accelerates into a distinctive bouncing-ball rattle. The Sabal Palm Sanctuary near Brownsville is a reliable site.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aimophila_botterii.jpg/330px-Aimophila_botterii.jpg",
  },
];

const toBirdId = (name: string) =>
  name.toLowerCase().replace(/[''']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const detailPages: Record<string, string> = {
  "Green Jay": "/birds/green-jay",
  "Altamira Oriole": "/birds/altamira-oriole",
  "Plain Chachalaca": "/birds/plain-chachalaca",
  "Buff-bellied Hummingbird": "/birds/buff-bellied-hummingbird",
  "Whooping Crane": "/birds/whooping-crane",
  "Aplomado Falcon": "/birds/aplomado-falcon",
  "Olive Sparrow": "/birds/olive-sparrow",
  "White-tipped Dove": "/birds/white-tipped-dove",
  "Reddish Egret": "/birds/reddish-egret",
  "Tricolored Heron": "/birds/tricolored-heron",
  "Neotropic Cormorant": "/birds/neotropic-cormorant",
  "White-tailed Hawk": "/birds/white-tailed-hawk",
  "White-tailed Kite": "/birds/white-tailed-kite",
  "Swallow-tailed Kite": "/birds/swallow-tailed-kite",
  "Couch's Kingbird": "/birds/couchs-kingbird",
  "Scissor-tailed Flycatcher": "/birds/scissor-tailed-flycatcher",
  "Rose-throated Becard": "/birds/rose-throated-becard",
  "Red-billed Pigeon": "/birds/red-billed-pigeon",
  "Inca Dove": "/birds/inca-dove",
  "Greater Roadrunner": "/birds/greater-roadrunner",
  "American Oystercatcher": "/birds/american-oystercatcher",
  "Green Parakeet": "/birds/green-parakeet",
  "Red-crowned Parrot": "/birds/red-crowned-parrot",
  "White-collared Seedeater": "/birds/white-collared-seedeater",
  "Tropical Parula": "/birds/tropical-parula",
  "Mottled Duck": "/birds/mottled-duck",
  "Piping Plover": "/birds/piping-plover",
  "Botteri's Sparrow": "/birds/botteris-sparrow",
  "Crested Caracara": "/birds/crested-caracara",
  "Painted Bunting": "/birds/painted-bunting",
  "Roseate Spoonbill": "/birds/roseate-spoonbill",
  "Broad-winged Hawk": "/birds/broad-winged-hawk",
  "Gray Hawk": "/birds/gray-hawk",
  "Harris's Hawk": "/birds/harriss-hawk",
};

const birdHotspotMap: Record<string, { label: string; anchor: string }[]> = {
  "Green Jay": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Altamira Oriole": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Plain Chachalaca": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Resaca de la Palma", anchor: "resaca-de-la-palma" },
  ],
  "Buff-bellied Hummingbird": [
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
    { label: "Nat'l Butterfly Ctr", anchor: "national-butterfly-center" },
  ],
  "Painted Bunting": [{ label: "South Padre Island", anchor: "south-padre-island" }],
  "Roseate Spoonbill": [
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
    { label: "Laguna Atascosa", anchor: "laguna-atascosa" },
  ],
  "Crested Caracara": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Harris's Hawk": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Aplomado Falcon": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Broad-winged Hawk": [{ label: "Bentsen SP", anchor: "bentsen" }],
  "Gray Hawk": [{ label: "Bentsen SP", anchor: "bentsen" }],
  "Hook-billed Kite": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Ringed Kingfisher": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
  ],
  "Green Kingfisher": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
  ],
  "Vermilion Flycatcher": [{ label: "Quinta Mazatlan", anchor: "quinta-mazatlan" }],
  "Great Kiskadee": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Tropical Kingbird": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Santa Ana NWR", anchor: "santa-ana" },
  ],
  "Ferruginous Pygmy-Owl": [
    { label: "Resaca de la Palma", anchor: "resaca-de-la-palma" },
    { label: "Bentsen SP", anchor: "bentsen" },
  ],
  "Elf Owl": [{ label: "Bentsen SP", anchor: "bentsen" }],
  "Least Grebe": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Black-bellied Whistling-Duck": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Masked Duck": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Northern Jacana": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "Groove-billed Ani": [
    { label: "Estero Llano Grande", anchor: "estero-llano-grande" },
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
  ],
  "Clay-colored Thrush": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Resaca de la Palma", anchor: "resaca-de-la-palma" },
  ],
  "Long-billed Thrasher": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "Audubon's Oriole": [
    { label: "Salineño", anchor: "salineno" },
    { label: "Bentsen SP", anchor: "bentsen" },
  ],
  "Olive Sparrow": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "White-tipped Dove": [
    { label: "Santa Ana NWR", anchor: "santa-ana" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "Reddish Egret": [
    { label: "South Padre Island", anchor: "south-padre-island" },
    { label: "Laguna Atascosa", anchor: "laguna-atascosa" },
  ],
  "Neotropic Cormorant": [{ label: "Estero Llano Grande", anchor: "estero-llano-grande" }],
  "White-tailed Hawk": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "White-tailed Kite": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Couch's Kingbird": [
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
    { label: "Nat'l Butterfly Ctr", anchor: "national-butterfly-center" },
  ],
  "Scissor-tailed Flycatcher": [{ label: "South Padre Island", anchor: "south-padre-island" }],
  "Rose-throated Becard": [{ label: "Santa Ana NWR", anchor: "santa-ana" }],
  "Red-billed Pigeon": [
    { label: "Bentsen SP", anchor: "bentsen" },
    { label: "Salineño", anchor: "salineno" },
  ],
  "Inca Dove": [
    { label: "Quinta Mazatlan", anchor: "quinta-mazatlan" },
    { label: "Nat'l Butterfly Ctr", anchor: "national-butterfly-center" },
  ],
  "American Oystercatcher": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Tropical Parula": [{ label: "Resaca de la Palma", anchor: "resaca-de-la-palma" }],
  "Mottled Duck": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
  "Piping Plover": [{ label: "Laguna Atascosa", anchor: "laguna-atascosa" }],
};

// Status badge inline styles — no Tailwind color utilities
function statusBadgeStyle(status: string): CSSProperties {
  if (status.includes("Rare"))
    return {
      background: "rgba(199,127,74,0.1)",
      color: "#C77F4A",
      border: "1px solid rgba(199,127,74,0.25)",
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
    background: "rgba(14,107,107,0.08)",
    color: "#0E6B6B",
    border: "1px solid rgba(14,107,107,0.2)",
  };
}

const statusGroups: Record<string, string[]> = {
  Resident: ["Resident", "Uncommon resident", "Resident (reintroduced)", "Resident (naturalized)", "Resident / winter visitor"],
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

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

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
    <div style={{ background: "#EFE3CE" }}>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C77F4A" }}
        >
          Rio Grande Valley
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold mb-3"
          style={{ color: "#0E6B6B" }}
        >
          South Texas Bird Species
        </h1>
        <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
          {birds.length} specialty and notable species of the Rio Grande Valley and South Texas
          coast. Photos via{" "}
          <a
            href="https://commons.wikimedia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            Wikimedia Commons
          </a>{" "}
          &mdash;{" "}
          <Link
            href="/credits"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            see full photo credits
          </Link>
          . Bird call recordings via{" "}
          <a
            href="https://www.xeno-canto.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-75 transition-opacity"
            style={{ color: "#5C5954" }}
          >
            Xeno-canto
          </a>{" "}
          (CC licensed).
        </p>

        {/* ── Search + filters ──────────────────────────────────────────── */}
        <div className="space-y-3">
          <input
            type="search"
            placeholder="Search by name, family, habitat…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6B6B]/40"
            style={{
              background: "#fff",
              border: "1px solid rgba(14,107,107,0.22)",
              color: "#2B2B26",
              boxShadow: "0 1px 3px rgba(14,107,107,0.06)",
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
                    ? { backgroundColor: "#0E6B6B", color: "#fff" }
                    : {
                        background: "#fff",
                        border: "1px solid rgba(14,107,107,0.2)",
                        color: "#0E6B6B",
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
                <span style={{ color: "#0E6B6B", fontWeight: 600 }}>{activeFilter}</span> filter
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
                  id={toBirdId(bird.name)}
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{
                    background: "#fff",
                    borderTop: "3px solid #D4A24C",
                    boxShadow: "0 1px 8px rgba(14,107,107,0.08)",
                  }}
                >
                  {/* Photo */}
                  {detailPages[bird.name] ? (
                    <Link
                      href={detailPages[bird.name]}
                      className="relative h-48 shrink-0 block"
                      style={{ background: "#0E6B6B" }}
                      tabIndex={-1}
                      aria-hidden
                    >
                      <Image
                        src={bird.photo}
                        alt={bird.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <div
                      className="relative h-48 shrink-0"
                      style={{ background: "#0E6B6B" }}
                    >
                      <Image
                        src={bird.photo}
                        alt={bird.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <h2
                      className="font-serif text-base font-bold leading-snug mb-0.5"
                      style={{ color: "#0E6B6B" }}
                    >
                      {detailPages[bird.name] ? (
                        <Link
                          href={detailPages[bird.name]}
                          className="hover:underline underline-offset-2"
                        >
                          {bird.name}
                        </Link>
                      ) : (
                        bird.name
                      )}
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
                        style={{ fontSize: "0.6rem", color: "#C77F4A" }}
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

                    {birdAudio[bird.scientific] && (
                      <AudioPlayer {...birdAudio[bird.scientific]} />
                    )}

                    {birdHotspotMap[bird.name] && (
                      <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(14,107,107,0.1)" }}>
                        <p
                          className="font-semibold tracking-widest uppercase mb-1.5"
                          style={{ fontSize: "0.6rem", color: "#C77F4A" }}
                        >
                          Found at
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {birdHotspotMap[bird.name].map((hs) => (
                            <Link
                              key={hs.anchor}
                              href={`/hotspots#${hs.anchor}`}
                              className="text-xs font-medium px-2 py-0.5 rounded-full hover:opacity-75 transition-opacity"
                              style={{
                                background: "rgba(14,107,107,0.08)",
                                color: "#0E6B6B",
                                border: "1px solid rgba(14,107,107,0.18)",
                              }}
                            >
                              {hs.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
