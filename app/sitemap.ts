import type { MetadataRoute } from "next"
import {
  getExplorationPath,
  getPublishedExplorations,
} from "@/lib/explorations"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const published = getPublishedExplorations().map((entry) => ({
    url: `${siteConfig.url}${getExplorationPath(entry)}`,
    lastModified: entry.publishedAt ? new Date(entry.publishedAt) : new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/explorations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...published,
    {
      url: `${siteConfig.url}/rlsf-paper`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]
}
