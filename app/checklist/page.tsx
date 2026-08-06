import type { Metadata } from "next";
import Link from "next/link";
import { birds } from "../birds/data";
import PrintButton from "./PrintButton";

const OG_IMAGE = "https://southtexasbirds.org/images/og-default.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/checklist" },
  title: { absolute: "Printable Bird Checklist | South Texas Birds" },
  description:
    "A printable checklist of 52 specialty and notable bird species of the Rio Grande Valley and South Texas coast, grouped by family.",
  openGraph: {
    title: "Printable Bird Checklist | South Texas Birds",
    description:
      "A printable checklist of 52 specialty and notable bird species of the Rio Grande Valley and South Texas coast, grouped by family.",
    images: [{ url: OG_IMAGE, width: 1200,
        height: 630, alt: "Altamira Oriole in South Texas" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
    title: "Printable Bird Checklist | South Texas Birds",
    description:
      "A printable checklist of 52 specialty and notable bird species of the Rio Grande Valley and South Texas coast, grouped by family.",
  },
};

const families = Array.from(new Set(birds.map((b) => b.family))).sort();

export default function ChecklistPage() {
  return (
    <div style={{ background: "#EFE3CE" }}>
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-20">

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
          Species Checklist
        </h1>
        <p className="text-sm mb-8" style={{ color: "#5C5954" }}>
          {birds.length} specialty and notable species of the Rio Grande Valley and South Texas
          coast, grouped by family. Print this page or save it as a PDF to track your sightings
          in the field.
        </p>

        <div className="no-print mb-10">
          <PrintButton />
        </div>

        {/* ── Checklist ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          {families.map((family) => {
            const familyBirds = birds
              .filter((b) => b.family === family)
              .sort((a, b) => a.name.localeCompare(b.name));
            return (
              <section key={family}>
                <h2
                  className="font-serif text-lg font-bold mb-3 pb-1"
                  style={{ color: "#0E6B6B", borderBottom: "2px solid #D4A24C" }}
                >
                  {family}
                </h2>
                <ul className="flex flex-col gap-2">
                  {familyBirds.map((bird) => (
                    <li key={bird.name} className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-block shrink-0"
                        style={{
                          width: "0.85rem",
                          height: "0.85rem",
                          border: "1.5px solid #0E6B6B",
                          borderRadius: "2px",
                        }}
                      />
                      <span className="text-sm" style={{ color: "#2B2B26" }}>
                        {bird.name}
                      </span>
                      <span className="text-xs italic" style={{ color: "#6E6B66" }}>
                        {bird.scientific}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <div
          style={{ height: 1, background: "rgba(14,107,107,0.1)" }}
          className="no-print my-10"
        />
        <div className="no-print">
          <Link
            href="/birds"
            className="font-semibold px-6 py-3 rounded-lg text-sm border transition-opacity hover:opacity-75"
            style={{ borderColor: "#0E6B6B", color: "#0E6B6B" }}
          >
            Browse full species guide
          </Link>
        </div>

      </div>
    </div>
  );
}
