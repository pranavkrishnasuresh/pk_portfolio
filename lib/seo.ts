import type { Metadata } from "next"
import {
  getExplorationBySlug,
  getExplorationPath,
  type ExplorationEntry,
} from "@/lib/explorations"
import { siteConfig } from "@/lib/site"

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`
}

export function explorationMetadata(slug: string): Metadata {
  const entry = getExplorationBySlug(slug)
  if (!entry?.slug) {
    throw new Error(`Unknown exploration slug: ${slug}`)
  }

  const path = getExplorationPath(entry)!
  const description = entry.description ?? siteConfig.description
  const title = entry.title

  return {
    title,
    description,
    keywords: entry.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: path,
      types: {
        "application/rss+xml": "/feed.xml",
      },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      publishedTime: entry.publishedAt,
      modifiedTime: entry.publishedAt,
      authors: [siteConfig.name],
      images: [
        {
          url: siteConfig.ogImage,
          width: 800,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      creator: siteConfig.twitter,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function articleJsonLd(entry: ExplorationEntry & { slug: string }) {
  const path = getExplorationPath(entry)!
  const url = absoluteUrl(path)

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description ?? siteConfig.description,
    datePublished: entry.publishedAt,
    dateModified: entry.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      sameAs: [siteConfig.twitterUrl, siteConfig.linkedinUrl],
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: [absoluteUrl(siteConfig.ogImage)],
    url,
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "GETASAP",
      url: "https://www.getasap.us",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Georgia Institute of Technology",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [
      siteConfig.twitterUrl,
      siteConfig.linkedinUrl,
      "https://www.getasap.us",
    ],
    email: `mailto:${siteConfig.email}`,
    description: siteConfig.description,
  }
}
