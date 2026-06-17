import Link from "next/link";

const highlights = [
  {
    icon: "🦜",
    title: "500+ Species",
    body: "South Texas hosts more bird species than almost anywhere else in North America, thanks to its unique position at the meeting of temperate and tropical zones.",
  },
  {
    icon: "🌿",
    title: "World Birding Center",
    body: "The nine sites of the World Birding Center stretch across the Rio Grande Valley, offering premier habitat for resident and migratory birds alike.",
  },
  {
    icon: "📅",
    title: "Year-Round Birding",
    body: "Every season brings something new — spring and fall migration, wintering waterfowl, and resident specialties like Green Jay and Altamira Oriole.",
  },
];

const featuredBirds = [
  { name: "Green Jay", location: "Rio Grande Valley", emoji: "🟢" },
  { name: "Whooping Crane", location: "Aransas NWR", emoji: "🕊️" },
  { name: "Altamira Oriole", location: "Bentsen-Rio Grande SP", emoji: "🟠" },
  { name: "Buff-bellied Hummingbird", location: "Lower RGV", emoji: "💚" },
  { name: "Aplomado Falcon", location: "Laguna Atascosa NWR", emoji: "🦅" },
  { name: "Plain Chachalaca", location: "Throughout RGV", emoji: "🐦" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-900 to-green-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Birding in South Texas
        </h1>
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8">
          From the subtropical thornscrub of the Rio Grande Valley to the windswept shores of the Coastal Bend — one of North America&apos;s premier birding destinations.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/birds"
            className="bg-white text-green-900 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 transition-colors"
          >
            Browse Birds
          </Link>
          <Link
            href="/hotspots"
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Find Hotspots
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
              <div className="text-4xl mb-3">{h.icon}</div>
              <h2 className="text-lg font-bold text-green-900 mb-2">{h.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Birds */}
      <section className="bg-white border-y border-green-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-2">South Texas Specialties</h2>
          <p className="text-gray-500 mb-8 text-sm">Birds that draw visitors from across the world</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featuredBirds.map((bird) => (
              <div
                key={bird.name}
                className="flex items-center gap-3 bg-green-50 rounded-lg p-4 border border-green-100"
              >
                <span className="text-3xl">{bird.emoji}</span>
                <div>
                  <p className="font-semibold text-green-900">{bird.name}</p>
                  <p className="text-xs text-gray-500">{bird.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/birds" className="text-green-700 font-medium hover:underline text-sm">
              View full species list →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-3">Plan Your Trip</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
          Whether you&apos;re chasing a life bird or just enjoying a walk through resaca habitat, South Texas delivers. Check our hotspot guide to find the best spots near you.
        </p>
        <Link
          href="/hotspots"
          className="bg-green-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
        >
          Explore Hotspots
        </Link>
      </section>
    </div>
  );
}
