import type { MetadataRoute } from "next";
import { BIRDS_ORDER } from "./birds/birdsOrder";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://southtexasbirds.org";

const NEWS_SLUGS = [
  "whooping-crane-record-count",
  "rgvbf-festival-2026",
  "spacex-refuge-land-exchange",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const speciesPages: MetadataRoute.Sitemap = BIRDS_ORDER.map((bird) => ({
    url: `${SITE}/birds/${bird.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsPages: MetadataRoute.Sitemap = NEWS_SLUGS.map((slug) => ({
    url: `${SITE}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/birds`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/hotspots`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/gear`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...speciesPages,
    ...newsPages,
  ];
}
