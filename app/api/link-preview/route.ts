import { NextRequest, NextResponse } from "next/server"

const ALLOWED_HOSTS = new Set([
  "www.getasap.us",
  "getasap.us",
  "www.ycombinator.com",
  "ycombinator.com",
  "doi.org",
  "vigilai.co",
  "www.vigilai.co",
  "developers.google.com",
  "youtu.be",
  "www.youtube.com",
  "youtube.com",
  "m.youtube.com",
])

export type LinkPreviewResponse = {
  title: string
  description: string | null
  ogImage: string | null
  screenshot: string | null
  url: string
}

function youtubeThumbnail(url: URL) {
  const host = url.hostname.replace(/^www\./, "")
  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0]
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null
  }
  if (host === "youtube.com" || host === "m.youtube.com") {
    const id = url.searchParams.get("v")
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null
  }
  return null
}

function jsonPreview(body: LinkPreviewResponse, maxAge: number) {
  return NextResponse.json(body, {
    headers: {
      "Cache-Control": `public, s-maxage=${maxAge}, stale-while-revalidate=86400`,
    },
  })
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("url")
  if (!raw) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 })
  }

  let target: URL
  try {
    target = new URL(raw)
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 })
  }

  if (!ALLOWED_HOSTS.has(target.hostname)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 })
  }

  const wantScreenshot = request.nextUrl.searchParams.get("screenshot") !== "0"

  const yt = youtubeThumbnail(target)
  if (yt) {
    return jsonPreview(
      {
        title: "YouTube",
        description: null,
        ogImage: yt,
        screenshot: yt,
        url: target.toString(),
      },
      3600
    )
  }

  const endpoint = new URL("https://api.microlink.io")
  endpoint.searchParams.set("url", target.toString())
  endpoint.searchParams.set("meta", "true")
  endpoint.searchParams.set("screenshot", wantScreenshot ? "true" : "false")

  if (wantScreenshot) {
    endpoint.searchParams.set("viewport.width", "1280")
    endpoint.searchParams.set("viewport.height", "800")
    endpoint.searchParams.set("waitUntil", "networkidle2")
  }

  try {
    const res = await fetch(endpoint.toString(), {
      next: { revalidate: wantScreenshot ? 1800 : 3600 },
    })
    const json = await res.json()

    if (json.status !== "success") {
      return NextResponse.json({ error: "Preview failed" }, { status: 502 })
    }

    const data = json.data
    const ogImage = data.image?.url ?? null

    return jsonPreview(
      {
        title: data.title ?? target.hostname,
        description: data.description ?? null,
        ogImage,
        screenshot: wantScreenshot ? (data.screenshot?.url ?? null) : null,
        url: data.url ?? target.toString(),
      },
      wantScreenshot ? 1800 : 3600
    )
  } catch {
    return NextResponse.json({ error: "Preview failed" }, { status: 502 })
  }
}
