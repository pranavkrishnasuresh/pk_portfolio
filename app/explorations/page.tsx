import type { Metadata } from "next"
import { ExplorationsList } from "@/components/explorations-list"
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

export default function ExplorationsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcfc] text-black">
      <div className="mx-auto max-w-[720px] px-4 py-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pt-[max(2rem,env(safe-area-inset-top))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]">
        <SiteHeader />

        <main>
          <ExplorationsList />
        </main>
      </div>
    </div>
  )
}
