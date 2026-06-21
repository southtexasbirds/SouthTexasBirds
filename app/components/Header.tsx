"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const BirdMark = () => (
  <svg
    viewBox="0 0 40 36"
    width="33"
    height="30"
    aria-hidden="true"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <defs>
      <clipPath id="bird-hatch">
        <polygon points="2,17 9,11 9,23" />
        <ellipse cx="17" cy="19" rx="10" ry="7" />
        <circle cx="28" cy="13" r="6" />
      </clipPath>
    </defs>
    <polygon points="2,17 9,11 9,23" fill="#EFE3CE" fillOpacity="0.92" />
    <ellipse cx="17" cy="19" rx="10" ry="7" fill="#EFE3CE" fillOpacity="0.92" />
    <circle cx="28" cy="13" r="6" fill="#EFE3CE" fillOpacity="0.92" />
    <g clipPath="url(#bird-hatch)" stroke="#0E6B6B" strokeWidth="1.4" strokeLinecap="round">
      <line x1="0" y1="18" x2="18" y2="0" />
      <line x1="0" y1="22" x2="22" y2="0" />
      <line x1="0" y1="26" x2="26" y2="0" />
      <line x1="2" y1="30" x2="30" y2="2" />
      <line x1="6" y1="34" x2="34" y2="6" />
      <line x1="12" y1="38" x2="38" y2="12" />
      <line x1="18" y1="40" x2="40" y2="18" />
    </g>
    <polygon points="33,12 39,14 33,17" fill="#C77F4A" />
    <circle cx="30" cy="12" r="2" fill="#0E6B6B" />
    <circle cx="30" cy="12" r="0.9" fill="#EFE3CE" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/birds", label: "Birds" },
  { href: "/hotspots", label: "Hotspots" },
  { href: "/news", label: "News" },
  { href: "/gear", label: "Gear" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="text-white shadow-md" style={{ backgroundColor: "#0E6B6B" }}>
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">

        {/* Logo lockup */}
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity min-w-0"
          aria-label="South Texas Birds — home"
        >
          <BirdMark />
          <span className="text-xl font-bold tracking-tight font-serif whitespace-nowrap">
            South Texas Birds
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium shrink-0">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-75 transition-opacity">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden shrink-0 p-2 -mr-2 rounded hover:opacity-75 transition-opacity"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? (
            /* × close icon */
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="4" x2="4" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            /* ≡ hamburger icon */
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="3" y1="6"  x2="19" y2="6"  stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="11" x2="19" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="16" x2="19" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────────────────── */}
      <div
        id="mobile-nav"
        className="md:hidden overflow-hidden transition-all duration-200 ease-out"
        style={{ maxHeight: open ? "320px" : "0" }}
      >
        <nav
          className="max-w-5xl mx-auto px-4 pb-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center py-3.5 text-sm font-medium hover:opacity-75 transition-opacity"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
