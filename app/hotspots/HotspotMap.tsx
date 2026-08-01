"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

type MapSite = {
  id: string;
  name: string;
  type: string;
  lat: number;
  lng: number;
};

export default function HotspotMap({ sites }: { sites: MapSite[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let map: import("leaflet").Map | undefined;

    import("leaflet").then((L) => {
      if (!containerRef.current || map) return;

      map = L.map(containerRef.current, {
        scrollWheelZoom: false,
      }).setView([26.15, -98.0], 8);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      sites.forEach((site) => {
        const marker = L.circleMarker([site.lat, site.lng], {
          radius: 9,
          weight: 2,
          color: "#EFE3CE",
          fillColor: "#0E6B6B",
          fillOpacity: 1,
        }).addTo(map!);

        marker.bindPopup(
          `<strong>${site.name}</strong><br/><span style="color:#6E6B66">${site.type}</span><br/><a href="#${site.id}" style="color:#0E6B6B;font-weight:600">View details ↓</a>`
        );
      });
    });

    return () => {
      map?.remove();
    };
  }, [sites]);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl overflow-hidden"
      style={{ height: 420, border: "1px solid rgba(14,107,107,0.15)" }}
      aria-label="Map of Rio Grande Valley birding hotspots"
    />
  );
}
