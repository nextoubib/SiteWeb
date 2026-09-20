import type { MetadataRoute } from "next";
import { siteRoutes } from "@/data/navigation";
import { absoluteUrl } from "@/lib/seo";

const priorities: Record<string, number> = {
  "/": 1,
  "/radiologie": 0.9,
  "/radiologie/ai": 0.9,
  "/radiologie/ris": 0.9,
  "/radiologie/bridge": 0.8,
  "/nextoubib": 0.9,
  "/solutions": 0.8,
  "/technology": 0.7,
  "/pricing": 0.8,
  "/demo": 0.8,
  "/resources": 0.6,
  "/about": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return siteRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priorities[route] ?? 0.5,
  }));
}
