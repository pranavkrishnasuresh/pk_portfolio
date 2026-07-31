"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type Exploration = {
  year: number
  title: string
  date: string
  href?: string
  pendingLabel?: string
}

const explorations: Exploration[] = [
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
    href: "/explorations/getasap",
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
    title: "What We Need to Build",
    date: "12.15.22",
  },
  {
    year: 2022,
    title: "Why Science Is Still Slow",
    date: "08.10.22",
    href: "/explorations/why-science-is-still-slow",
  },
]

export function ExplorationsList() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  useEffect(() => {
    if (!openKey) return

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest("[data-exploration-pending]")) return
      setOpenKey(null)
    }

    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [openKey])

  return (
    <ul>
      {explorations.map((item, index) => {
        const key = `${item.year}-${item.title}`
        const firstOfYear =
          index === 0 || explorations[index - 1].year !== item.year
        const isOpen = openKey === key

        const titleInner = item.href ? (
          <span className="rounded-xl px-1.5 py-0.5 transition-colors duration-200 ease-in-out group-hover:bg-neutral-200 group-active:bg-neutral-200">
            {item.title}
          </span>
        ) : (
          <span
            className={`inline-grid max-w-full rounded-xl px-1.5 py-0.5 text-left transition-colors duration-200 ease-in-out [@media(hover:hover)]:group-hover:bg-neutral-200 group-active:bg-neutral-200 group-focus-within:bg-neutral-200 ${
              isOpen ? "bg-neutral-200" : ""
            }`}
          >
            <span
              className={`col-start-1 row-start-1 transition-opacity duration-200 ease-in-out ${
                isOpen
                  ? "opacity-0"
                  : "opacity-100 [@media(hover:hover)]:group-hover:opacity-0 group-focus-within:opacity-0"
              }`}
            >
              {item.title}
            </span>
            <span
              className={`col-start-1 row-start-1 text-[#666] transition-opacity duration-200 ease-in-out ${
                isOpen
                  ? "opacity-100"
                  : "opacity-0 [@media(hover:hover)]:group-hover:opacity-100 group-focus-within:opacity-100"
              }`}
              aria-hidden={!isOpen}
            >
              {item.pendingLabel ?? "Uploading soon..."}
            </span>
          </span>
        )

        const row = (
          <span
            className={`flex items-baseline py-2 ${
              firstOfYear ? "" : "ml-10 sm:ml-14"
            }`}
          >
            {firstOfYear && (
              <span className="mt-0.5 inline-block w-10 shrink-0 self-start text-xs tabular-nums text-[#666] sm:w-14">
                {item.year}
              </span>
            )}
            <span className="min-w-0 grow pr-3 text-sm leading-snug text-black">
              {titleInner}
            </span>
            <span className="mt-0.5 shrink-0 self-start text-xs tabular-nums text-[#666]">
              {item.date}
            </span>
          </span>
        )

        return (
          <li key={key} className="group">
            {item.href ? (
              <Link href={item.href} prefetch className="block">
                {row}
              </Link>
            ) : (
              <button
                type="button"
                data-exploration-pending
                aria-expanded={isOpen}
                className="block w-full cursor-default text-left"
                onClick={() =>
                  setOpenKey((current) => (current === key ? null : key))
                }
              >
                {row}
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}
