"use client"

import { useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import {
  ensureOgPreview,
  ensureScreenshotPreview,
  getCachedLinkPreview,
  prefetchLinkPreviews,
  shouldPrefetchScreenshots,
  subscribeLinkPreview,
  type LinkPreviewData,
} from "@/lib/link-preview-client"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface HoverLinkPreviewProps {
  href: string
  children: ReactNode
  className?: string
}

function getHostname(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "")
  } catch {
    return href
  }
}

function useCanHover() {
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setCanHover(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return canHover
}

export function LinkPreviewPrefetcher({ urls }: { urls: readonly string[] }) {
  useEffect(() => {
    const list = [...urls]
    const run = () => {
      void prefetchLinkPreviews(list, {
        screenshots: shouldPrefetchScreenshots(),
      })
    }

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    }

    const timeout = window.setTimeout(run, 400)
    return () => window.clearTimeout(timeout)
    // Prefetch once for the stable URL list passed from the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export function HoverLinkPreview({
  href,
  children,
  className,
}: HoverLinkPreviewProps) {
  const canHover = useCanHover()
  const [open, setOpen] = useState(false)
  const [preview, setPreview] = useState<LinkPreviewData | null>(() =>
    getCachedLinkPreview(href)
  )
  const [ogLoaded, setOgLoaded] = useState(false)
  const [shotLoaded, setShotLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const host = getHostname(href)

  useEffect(() => subscribeLinkPreview(href, setPreview), [href])

  useEffect(() => {
    if (!canHover) return
    void ensureOgPreview(href)
    if (shouldPrefetchScreenshots()) {
      void ensureScreenshotPreview(href)
    }
  }, [canHover, href])

  useEffect(() => {
    if (!open || !canHover) return
    void ensureOgPreview(href)
    void ensureScreenshotPreview(href)
  }, [open, canHover, href])

  useEffect(() => {
    setOgLoaded(false)
    setShotLoaded(false)
  }, [preview?.ogImage, preview?.screenshot])

  if (!canHover) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className)}
      >
        {children}
      </a>
    )
  }

  const title = preview?.title ?? host
  const ogImage = preview?.ogImage ?? null
  const screenshot = preview?.screenshot ?? null
  const hasAnyImage = Boolean(ogImage || screenshot)
  const waiting = !preview || (!hasAnyImage && !failed)
  const showFailure = failed && !hasAnyImage

  return (
    <HoverCard open={open} onOpenChange={setOpen} openDelay={160} closeDelay={100}>
      <HoverCardTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(className)}
        >
          {children}
        </a>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="center"
        sideOffset={10}
        collisionPadding={16}
        className="w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-black/10 bg-white p-0 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#ececec]">
          {ogImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={ogImage}
              alt=""
              aria-hidden={Boolean(screenshot)}
              draggable={false}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300",
                ogLoaded ? "opacity-100" : "opacity-0",
                screenshot && shotLoaded && "opacity-0"
              )}
              onLoad={() => {
                setOgLoaded(true)
                setFailed(false)
              }}
              onError={() => {
                if (!screenshot) setFailed(true)
              }}
            />
          )}

          {screenshot && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={screenshot}
              alt={`Preview of ${title}`}
              draggable={false}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500",
                shotLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => {
                setShotLoaded(true)
                setFailed(false)
              }}
              onError={() => {
                if (!ogImage) setFailed(true)
              }}
            />
          )}

          {(waiting || (hasAnyImage && !ogLoaded && !shotLoaded)) && (
            <div className="absolute inset-0 animate-pulse bg-[#e4e4e4]" />
          )}

          {showFailure && (
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs text-[#888]">
              Preview unavailable
            </div>
          )}
        </div>
        <div className="space-y-0.5 border-t border-black/5 px-3 py-2.5 sm:px-3.5">
          <div className="line-clamp-2 text-[13px] font-semibold leading-snug text-black">
            {waiting ? "Loading preview…" : title}
          </div>
          <div className="truncate text-[11px] font-medium tracking-wide text-[#888]">
            {host}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
