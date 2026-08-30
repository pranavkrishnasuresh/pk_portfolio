import type { Metadata } from "next"
import { ExplorationsList } from "@/components/explorations-list"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getPublishedExplorations } from "@/lib/explorations"
import { absoluteUrl } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const description =
  "Essays by Pranavkrishna Suresh on AI, logistics, laboratory automation, and building."

export const metadata: Metadata = {
  title: "Essays",
  description,
  alternates: {
    canonical: "/explorations",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    title: `Essays | ${siteConfig.name}`,
    description,
    url: "/explorations",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Essays | ${siteConfig.name}`,
    description,
    creator: siteConfig.twitter,
  },
}

const pagePad =
  "mx-auto max-w-[720px] px-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]"

export default function ExplorationsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Essays",
    description,
    url: absoluteUrl("/explorations"),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasPart: getPublishedExplorations().map((entry) => ({
      "@type": "Article",
      headline: entry.title,
      url: absoluteUrl(`/explorations/${entry.slug}`),
      datePublished: entry.publishedAt,
      description: entry.description,
    })),
  }

  return (
    <div className="overflow-x-hidden bg-[#fcfcfc] text-black">
      <JsonLd data={collectionJsonLd} />
      <div
        className={`${pagePad} flex min-h-[100dvh] flex-col pt-[max(1.5rem,env(safe-area-inset-top))] sm:pt-[max(2rem,env(safe-area-inset-top))]`}
      >
        <SiteHeader />
        <main className="flex-1 pb-4">
          <h1 className="sr-only">Essays</h1>
          <ExplorationsList />
        </main>
      </div>

      <div
        className={`${pagePad} pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]`}
      >
        <SiteFooter className="mt-2 sm:mt-3" />
      </div>
    </div>
  )
}
