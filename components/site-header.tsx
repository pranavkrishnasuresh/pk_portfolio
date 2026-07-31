"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()
  const onExplorations = pathname === "/explorations" || pathname.startsWith("/explorations/")

  return (
    <header className="mb-8 flex items-center justify-between gap-2 sm:mb-12 sm:gap-4">
      <Link
        href="/"
        className="-ml-2 inline-flex min-h-11 max-w-[calc(100%-6.5rem)] items-center rounded-full px-2.5 py-1 text-lg font-semibold leading-tight tracking-tight text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] active:bg-[#e8e8e8] sm:-ml-3 sm:min-h-0 sm:max-w-none sm:px-3 sm:text-xl sm:leading-none"
      >
        Pranavkrishna Suresh
      </Link>
      <nav
        aria-label="Primary"
        className="flex shrink-0 items-center gap-0.5 sm:gap-1"
      >
        {onExplorations ? (
          <Link
            href="/"
            prefetch
            aria-label="Back to home"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2.5 py-1 text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] active:bg-[#e8e8e8] sm:min-h-0 sm:min-w-0 sm:px-3"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
        ) : (
          <Link
            href="/explorations"
            prefetch
            className="inline-flex min-h-11 items-center rounded-full px-2.5 py-1 font-[family-name:var(--font-caveat)] text-[1.25rem] font-semibold leading-none tracking-wide text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] active:bg-[#e8e8e8] sm:min-h-0 sm:px-3 sm:text-[1.5rem]"
          >
            Explorations
          </Link>
        )}
        <a
          href="https://x.com/PKrishnaSuresh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] active:bg-[#e8e8e8] sm:min-h-0 sm:gap-2 sm:px-3"
        >
          <svg
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </svg>
          <span className="hidden min-[380px]:inline">Follow me</span>
        </a>
      </nav>
    </header>
  )
}
