"use client"

import { useEffect, useRef, useState } from "react"

export type EssaySection = {
  id: string
  label: string
}

const SCROLL_OFFSET = 96

function getActiveSectionId(sections: EssaySection[]) {
  let current = sections[0]?.id ?? ""

  for (const section of sections) {
    const el = document.getElementById(section.id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= SCROLL_OFFSET + 8) {
      current = section.id
    }
  }

  return current
}

export function EssaySectionNav({ sections }: { sections: EssaySection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "")
  const [expanded, setExpanded] = useState(false)
  const lockUntilRef = useRef(0)

  useEffect(() => {
    const syncActive = () => {
      if (Date.now() < lockUntilRef.current) return
      const next = getActiveSectionId(sections)
      if (next) setActiveId(next)
    }

    syncActive()
    window.addEventListener("scroll", syncActive, { passive: true })
    window.addEventListener("resize", syncActive)
    return () => {
      window.removeEventListener("scroll", syncActive)
      window.removeEventListener("resize", syncActive)
    }
  }, [sections])

  return (
    <nav
      aria-label="Essay sections"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocusCapture={() => setExpanded(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setExpanded(false)
        }
      }}
      className="fixed top-1/2 z-20 hidden -translate-y-1/2 lg:block left-[max(0.75rem,calc(50%-360px-3.25rem))]"
    >
      <div
        className={`rounded-2xl transition-[background-color,box-shadow,padding] duration-200 ease-out ${
          expanded
            ? "bg-[#fcfcfc]/95 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur-sm"
            : "bg-transparent p-1.5"
        }`}
      >
        <ul className="flex w-max max-w-none flex-col gap-2.5">
          {sections.map((section) => {
            const isActive = activeId === section.id

            return (
              <li key={section.id} className="w-max">
                <a
                  href={`#${section.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    const el = document.getElementById(section.id)
                    if (!el) return

                    setActiveId(section.id)
                    lockUntilRef.current = Date.now() + 900

                    const top =
                      window.scrollY +
                      el.getBoundingClientRect().top -
                      SCROLL_OFFSET

                    window.scrollTo({
                      top: Math.max(0, top),
                      behavior: "smooth",
                    })
                  }}
                  className="group flex w-max items-center gap-2.5"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`block h-px shrink-0 transition-all duration-200 ${
                      isActive
                        ? "w-4 bg-black"
                        : "w-2.5 bg-neutral-400 group-hover:bg-neutral-600"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`whitespace-nowrap text-[11px] leading-tight transition-all duration-200 ease-out ${
                      expanded
                        ? "opacity-100"
                        : "pointer-events-none w-0 overflow-hidden opacity-0"
                    } ${
                      isActive
                        ? "font-medium text-black"
                        : "text-neutral-500 group-hover:text-neutral-800"
                    }`}
                  >
                    {section.label}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
