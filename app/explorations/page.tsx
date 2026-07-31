import type { Metadata } from "next"
import { ExplorationsList } from "@/components/explorations-list"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Explorations",
  description: "Explorations by Pranavkrishna Suresh.",
  alternates: {
    canonical: "/explorations",
  },
  openGraph: {
    title: "Explorations | Pranavkrishna Suresh",
    description: "Explorations by Pranavkrishna Suresh.",
    url: "/explorations",
    type: "website",
  },
}

const pagePad =
  "mx-auto max-w-[720px] px-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]"

export default function ExplorationsPage() {
  return (
    <div className="overflow-x-hidden bg-[#fcfcfc] text-black">
      <div
        className={`${pagePad} flex min-h-[100dvh] flex-col pt-[max(1.5rem,env(safe-area-inset-top))] sm:pt-[max(2rem,env(safe-area-inset-top))]`}
      >
        <SiteHeader />
        <main className="flex-1 pb-4">
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
