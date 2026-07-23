import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/speaking", "/writing", "/book"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
