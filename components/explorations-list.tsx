"use client"

import Link from "next/link"

type Exploration = {
  year: number
  title: string
  date: string
  href?: string
}

const explorations: Exploration[] = [
  {
    year: 2026,
    title: "Building for a World of Abundance",
    date: "08.01.26",
  },
  {
    year: 2026,
    title: "The Trucking Renaissance",
    date: "03.04.26",
  },
  {
    year: 2025,
    title: "Selling Vegetables in the Age of AI",
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
  },
]

export function ExplorationsList() {
  return (
    <ul className="space-y-5 sm:space-y-6">
      {explorations.map((item, index) => {
        const showYear =
          index === 0 || explorations[index - 1].year !== item.year

        const titleClassName =
          "inline-block max-w-full rounded-full px-2.5 py-1 text-[15px] text-black transition-colors duration-200 ease-in-out group-hover:bg-[#e8e8e8] group-focus-within:bg-[#e8e8e8] sm:text-[16px]"

        return (
          <li
            key={`${item.year}-${item.title}`}
            className="grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-baseline gap-x-2 sm:grid-cols-[3.25rem_minmax(0,1fr)_auto] sm:gap-x-3"
          >
            <span className="text-[13px] tabular-nums text-[#666] sm:text-sm">
              {showYear ? item.year : ""}
            </span>

            <div className="group relative min-w-0">
              {item.href ? (
                <Link href={item.href} prefetch className={titleClassName}>
                  {item.title}
                </Link>
              ) : (
                <button type="button" className={`${titleClassName} cursor-default text-left`}>
                  {item.title}
                </button>
              )}
              {!item.href && (
                <p className="pointer-events-none absolute left-2.5 top-full mt-0.5 text-[13px] text-[#666] opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100 sm:text-sm">
                  Uploading soon...
                </p>
              )}
            </div>

            <span className="shrink-0 text-[13px] tabular-nums text-[#666] sm:text-sm">
              {item.date}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
