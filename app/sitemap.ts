import type { MetadataRoute } from "next";
import { BIRDS_ORDER } from "./birds/birdsOrder";
import { articles } from "./news/data";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://southtexasbirds.org";

const UTILITY_PAGES: { path: string; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/news", changeFrequency: "weekly" },
  { path: "/checklist", changeFrequency: "monthly" },
  { path: "/gear", changeFrequency: "monthly" },
  { path: "/about", changeFrequency: "monthly" },
  { path: "/gallery", changeFrequency: "monthly" },
  { path: "/itineraries", changeFrequency: "monthly" },
  { path: "/conservation", changeFrequency: "monthly" },
  { path: "/credits", changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const speciesPages: MetadataRoute.Sitemap = BIRDS_ORDER.map((bird) => ({
    url: `${SITE}/birds/${bird.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE}/news/${article.slug}`,
    lastModified: new Date(article.isoDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const utilityPages: MetadataRoute.Sitemap = UTILITY_PAGES.map(({ path, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority: 0.4,
  }));

  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
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
    ...speciesPages,
    ...newsPages,
    ...utilityPages,
  ];
}
