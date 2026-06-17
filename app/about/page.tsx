import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">About South Texas Birds</h1>

      <div className="prose prose-green max-w-none text-gray-700 text-sm leading-relaxed space-y-5">
        <p>
          South Texas is widely regarded as one of the greatest birding regions in North America. The area sits at the convergence of several major ecological zones: the subtropical Rio Grande Valley, the semi-arid Tamaulipan thornscrub, the Gulf Coast barrier islands, and the sweeping coastal prairies of the Coastal Bend.
        </p>
        <p>
          This convergence creates a mosaic of habitats that supports an extraordinary diversity of bird life — over 500 species have been recorded in the region. For visiting birders, this means a single trip can yield resident Mexican specialties, Gulf Coast waterbirds, wintering raptors, and Neotropical migrants all in the same day.
        </p>

        <h2 className="text-xl font-bold text-green-900 mt-8 mb-2">The Rio Grande Valley</h2>
        <p>
          The lower Rio Grande Valley (RGV) hugs the Texas-Mexico border from Laredo to the Gulf. The resacas (oxbow lakes), riparian corridors, and remaining stands of native brush provide irreplaceable habitat for species that occur nowhere else in the U.S., including Green Jay, Altamira Oriole, Plain Chachalaca, Buff-bellied Hummingbird, and Ferruginous Pygmy-Owl.
        </p>
        <p>
          The World Birding Center comprises nine sites across the Valley — from Roma Bluffs in the west to South Padre Island on the coast — making it easy to explore a range of habitats on a single trip.
        </p>

        <h2 className="text-xl font-bold text-green-900 mt-8 mb-2">The Coastal Bend</h2>
        <p>
          North of the RGV, the Coastal Bend stretches from Corpus Christi to Rockport and beyond. Aransas National Wildlife Refuge is the winter home of the last natural wild flock of Whooping Cranes — one of conservation&apos;s greatest success stories. The bays, salt marshes, and coastal prairies support remarkable concentrations of waterbirds, shorebirds, and raptors.
        </p>
        <p>
          Hazel Bazemore County Park near Corpus Christi is perhaps the most impressive hawk watch in North America — in peak September days, hundreds of thousands of Broad-winged Hawks can be seen streaming overhead.
        </p>

        <h2 className="text-xl font-bold text-green-900 mt-8 mb-2">When to Visit</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-semibold">Spring (Apr–May):</span> Trans-Gulf migrants arrive at South Padre Island. Neotropical species return to the Valley.</li>
          <li><span className="font-semibold">Summer (Jun–Aug):</span> Resident species are nesting. Fewer migrants but great for family and behavior watching.</li>
          <li><span className="font-semibold">Fall (Sep–Oct):</span> Peak hawk migration at Hazel Bazemore. Shorebirds and waterfowl begin to arrive.</li>
          <li><span className="font-semibold">Winter (Nov–Mar):</span> Whooping Cranes at Aransas. Ducks, geese, and sandhill cranes throughout. Resident specialties reliably present.</li>
        </ul>
      </div>

      <div className="mt-10 flex gap-4">
        <Link
          href="/birds"
          className="bg-green-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors text-sm"
        >
          Browse Species
        </Link>
        <Link
          href="/hotspots"
          className="border border-green-800 text-green-800 font-semibold px-5 py-2.5 rounded-lg hover:bg-green-50 transition-colors text-sm"
        >
          View Hotspots
        </Link>
      </div>
    </div>
  );
}
