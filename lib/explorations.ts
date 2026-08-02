/**
 * Single source of truth for Explorations.
 *
 * To publish a new essay:
 * 1. Add an entry here with `slug`, `description`, and `publishedAt` (ISO date).
 * 2. Create `app/explorations/<slug>/page.tsx` using `explorationMetadata(slug)`.
 * 3. Sitemap, RSS, and the Explorations list update automatically from this file.
 */

export type ExplorationEntry = {
  title: string
  /** Display date as MM.DD.YY */
  date: string
  /** Calendar year for grouping */
  year: number
  /** If set, the piece is live at /explorations/<slug> */
  slug?: string
  /** SEO / social description — required once published */
  description?: string
  /** ISO 8601 date for Article structured data + sitemap */
  publishedAt?: string
  /** Override hover label for unpublished pieces */
  pendingLabel?: string
  /** Optional keywords for metadata */
  keywords?: string[]
}

export const explorations: ExplorationEntry[] = [
  {
    year: 2026,
    title: "Building for a World of Abundance",
    date: "08.10.26",
    pendingLabel: "Coming soon...",
  },
  {
    year: 2026,
    title: "Logistics Renaissance",
    date: "03.04.26",
  },
  {
    year: 2025,
    title: "Intelligence in the Physical World",
    date: "12.25.25",
  },
  {
    year: 2025,
    title: "GETASAP",
    date: "08.01.25",
    slug: "getasap",
    publishedAt: "2025-08-01",
    description:
      "Why GETASAP is transforming fresh produce distribution and freight — an essay on AI, physical infrastructure, and an industry that has barely changed.",
    keywords: [
      "GETASAP",
      "Y Combinator",
      "fresh produce logistics",
      "AI freight",
      "cold chain",
      "produce distribution",
    ],
  },
  {
    year: 2025,
    title: "Teaching AI What's Wrong Is Hard",
    date: "06.01.25",
  },
  {
    year: 2024,
    title: "AI Loves Boring Industries",
    date: "05.15.24",
  },
  {
    year: 2023,
    title: "Machines That Tell the Truth",
    date: "12.05.23",
  },
  {
    year: 2022,
    title: "Why Science Is Still Slow",
    date: "08.10.22",
    slug: "why-science-is-still-slow",
    publishedAt: "2022-08-10",
    description:
      "A reflection on laboratory automation, a small stem-cell robot at GTRI, and why science still struggles to compound.",
    keywords: [
      "laboratory automation",
      "robotics",
      "stem cells",
      "GTRI",
      "science compounding",
    ],
  },
]

export function getExplorationPath(entry: ExplorationEntry) {
  return entry.slug ? `/explorations/${entry.slug}` : undefined
}

export function getPublishedExplorations() {
  return explorations.filter(
    (entry): entry is ExplorationEntry & { slug: string } => Boolean(entry.slug)
  )
}

export function getExplorationBySlug(slug: string) {
  return explorations.find((entry) => entry.slug === slug)
}
