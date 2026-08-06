import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { birds } from "../birds/data";
import { toBirdId } from "../birds/birdsOrder";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/gallery" },
  title: { absolute: "Bird Photo Gallery | South Texas Birds" },
  description:
    "Photos of 52 specialty and notable bird species of the Rio Grande Valley and South Texas coast — Green Jay, Whooping Crane, Roseate Spoonbill, and more.",
  openGraph: {
    title: "Bird Photo Gallery | South Texas Birds",
    description:
      "Photos of 52 specialty and notable bird species of the Rio Grande Valley and South Texas coast.",
    images: [{ url: OG_IMAGE, width: 1200,
        height: 630, alt: "Altamira Oriole in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
    title: "Bird Photo Gallery | South Texas Birds",
    description:
      "Photos of 52 specialty and notable bird species of the Rio Grande Valley and South Texas coast.",
  },
};

export default function GalleryPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-20">

        {/* ── Page header ─────────────────────────────────────────────── */}
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
          Photo Gallery
        </h1>
        <p className="text-sm mb-10" style={{ color: "#5C5954" }}>
          {birds.length} species of the Rio Grande Valley and South Texas coast. Tap a photo for
          the full species guide. Photos via{" "}
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
            see full photo credits
          </Link>
          .
        </p>

        {/* ── Grid ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {birds.map((bird) => (
            <Link
              key={bird.name}
              href={`/birds/${toBirdId(bird.name)}`}
              className="group relative block rounded-xl overflow-hidden aspect-square"
              style={{ background: "#0E6B6B", boxShadow: "0 1px 8px rgba(14,107,107,0.1)" }}
            >
              <Image
                src={bird.photo}
                alt={bird.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-3 py-2"
                style={{
                  background: "linear-gradient(to top, rgba(14,38,38,0.85), rgba(14,38,38,0))",
                }}
              >
                <p className="text-xs font-semibold text-white leading-snug">{bird.name}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://southtexasbirds.org" },
              { "@type": "ListItem", "position": 2, "name": "Photo Gallery", "item": "https://southtexasbirds.org/gallery" },
            ],
          }),
        }}
      />
    </div>
  );
}
