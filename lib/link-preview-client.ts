"use client"

export type LinkPreviewData = {
  title: string
  description: string | null
  ogImage: string | null
  screenshot: string | null
  url: string
}

type Listener = (preview: LinkPreviewData) => void

const cache = new Map<string, LinkPreviewData>()
const listeners = new Map<string, Set<Listener>>()
const inflightOg = new Map<string, Promise<LinkPreviewData | null>>()
const inflightShot = new Map<string, Promise<LinkPreviewData | null>>()

function notify(href: string, preview: LinkPreviewData) {
  cache.set(href, preview)
  listeners.get(href)?.forEach((listener) => listener(preview))
}

function merge(href: string, partial: Partial<LinkPreviewData> & { url: string }) {
  const prev = cache.get(href)
  const next: LinkPreviewData = {
    title: partial.title ?? prev?.title ?? new URL(href).hostname,
    description: partial.description ?? prev?.description ?? null,
    ogImage: partial.ogImage ?? prev?.ogImage ?? null,
    screenshot: partial.screenshot ?? prev?.screenshot ?? null,
    url: partial.url ?? prev?.url ?? href,
  }
  notify(href, next)
  return next
}

export function getCachedLinkPreview(href: string) {
  return cache.get(href) ?? null
}

export function subscribeLinkPreview(href: string, listener: Listener) {
  const set = listeners.get(href) ?? new Set<Listener>()
  set.add(listener)
  listeners.set(href, set)

  const cached = cache.get(href)
  if (cached) listener(cached)

  return () => {
    set.delete(listener)
    if (set.size === 0) listeners.delete(href)
  }
}

async function fetchPreview(href: string, screenshot: boolean) {
  const res = await fetch(
    `/api/link-preview?url=${encodeURIComponent(href)}&screenshot=${screenshot ? "1" : "0"}`
  )
  if (!res.ok) throw new Error("preview failed")
  return res.json() as Promise<LinkPreviewData>
}

export function ensureOgPreview(href: string) {
  const cached = cache.get(href)
  if (cached?.ogImage || cached?.title) {
    return Promise.resolve(cached)
  }

  const existing = inflightOg.get(href)
  if (existing) return existing

  const promise = fetchPreview(href, false)
    .then((data) =>
      merge(href, {
        title: data.title,
        description: data.description,
        ogImage: data.ogImage,
        screenshot: null,
        url: data.url,
      })
    )
    .catch(() => null)
    .finally(() => {
      inflightOg.delete(href)
    })

  inflightOg.set(href, promise)
  return promise
}

export function ensureScreenshotPreview(href: string) {
  const cached = cache.get(href)
  if (cached?.screenshot) return Promise.resolve(cached)

  const existing = inflightShot.get(href)
  if (existing) return existing

  const promise = fetchPreview(href, true)
    .then((data) =>
      merge(href, {
        title: data.title,
        description: data.description,
        ogImage: data.ogImage ?? cached?.ogImage ?? null,
        screenshot: data.screenshot,
        url: data.url,
      })
    )
    .catch(() => null)
    .finally(() => {
      inflightShot.delete(href)
    })

  inflightShot.set(href, promise)
  return promise
}

/** Warm OG first (fast), then screenshots in the background when appropriate. */
export async function prefetchLinkPreviews(
  hrefs: string[],
  options: { screenshots?: boolean } = {}
) {
  const { screenshots = true } = options
  await Promise.all(hrefs.map((href) => ensureOgPreview(href)))

  if (!screenshots) return

  for (const href of hrefs) {
    await ensureScreenshotPreview(href)
  }
}

export function shouldPrefetchScreenshots() {
  if (typeof window === "undefined") return false

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }
  ).connection
  const saveData = Boolean(connection?.saveData)
  const slowNetwork =
    connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g"

  return canHover && !saveData && !slowNetwork
}
