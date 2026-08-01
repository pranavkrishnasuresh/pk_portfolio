"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  explorations,
  getExplorationPath,
  type ExplorationEntry,
} from "@/lib/explorations"

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
        const href = getExplorationPath(item)
        const key = `${item.year}-${item.title}`
        const firstOfYear =
          index === 0 || explorations[index - 1].year !== item.year
        const isOpen = openKey === key

        return (
          <li key={key} className="group">
            {href ? (
              <Link href={href} prefetch className="block">
                <ExplorationRow
                  item={item}
                  firstOfYear={firstOfYear}
                  href={href}
                />
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
                <ExplorationRow
                  item={item}
                  firstOfYear={firstOfYear}
                  isOpen={isOpen}
                />
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function ExplorationRow({
  item,
  firstOfYear,
  href,
  isOpen = false,
}: {
  item: ExplorationEntry
  firstOfYear: boolean
  href?: string
  isOpen?: boolean
}) {
  const titleInner = href ? (
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

  return (
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
}
