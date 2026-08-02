import Image from "next/image"

export type Backer = {
  name: string
  src: string
  href?: string
  /** Custom mark + typeset wordmark when the source logo text is unreadable. */
  wordmark?: boolean
  /** Square / icon mark (e.g. YC Y). */
  mark?: boolean
}

export const backers: Backer[] = [
  {
    name: "Y Combinator",
    src: "/backers/y-combinator.png",
    href: "https://www.ycombinator.com/companies/getasap",
  },
  {
    name: "General Catalyst",
    src: "/backers/general-catalyst.png",
    href: "https://www.generalcatalyst.com/",
  },
  {
    name: "SV Angel",
    src: "/backers/sv-angel.png",
    href: "https://svangel.com/",
  },
  {
    name: "Ritual Capital",
    src: "/backers/ritual-capital.png",
    href: "https://www.ritualcapital.com/",
  },
  {
    name: "Deepwater Asset Management",
    src: "/backers/deepwater.png",
    href: "https://deepwaterasset.com/",
  },
  {
    name: "Scribble Ventures",
    src: "/backers/scribble-mark.png",
    href: "https://www.scribble.vc/",
    wordmark: true,
  },
]

export function Backers({ priorityCount = 0 }: { priorityCount?: number }) {
  return (
    <section id="backers" className="mb-12 scroll-mt-24 sm:mb-16">
      <h2 className="mb-6 scroll-mt-24 text-xl font-semibold tracking-tight text-black sm:mb-8 sm:text-[1.35rem]">
        Our Backers
      </h2>

      <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-14">
        {backers.map((backer, index) => {
          const priority = index < priorityCount
          const content = backer.wordmark ? (
            <span className="flex items-center gap-3 sm:gap-3.5">
              <Image
                src={backer.src}
                alt=""
                width={160}
                height={220}
                className="h-12 w-auto object-contain sm:h-14"
                priority={priority}
              />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-semibold tracking-tight text-black sm:text-xl">
                  Scribble
                </span>
                <span className="mt-1.5 text-[10px] font-medium tracking-[0.2em] text-black/70 uppercase sm:text-[11px]">
                  Ventures
                </span>
              </span>
            </span>
          ) : (
            <Image
              src={backer.src}
              alt={backer.name}
              width={backer.mark ? 120 : 320}
              height={backer.mark ? 120 : 120}
              className={
                backer.mark
                  ? "h-12 w-12 object-contain sm:h-14 sm:w-14"
                  : "max-h-12 w-auto max-w-[200px] object-contain object-center sm:max-h-14 sm:max-w-[240px]"
              }
              priority={priority}
            />
          )

          const className =
            "flex min-h-[4.5rem] w-full items-center justify-center rounded-lg px-2 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15 focus-visible:ring-offset-2 sm:min-h-[5.5rem]"

          return (
            <li key={backer.src} className="flex justify-center">
              {backer.href ? (
                <a
                  href={backer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={backer.name}
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div className={className} role="img" aria-label={backer.name}>
                  {content}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
