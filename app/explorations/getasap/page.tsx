import type { Metadata } from "next"
import { Backers } from "@/components/backers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "GETASAP",
  description:
    "GETASAP — AI-native fresh produce logistics. Backed by Y Combinator, General Catalyst, and others.",
  alternates: {
    canonical: "/explorations/getasap",
  },
  openGraph: {
    title: "GETASAP | Pranavkrishna Suresh",
    description:
      "GETASAP — AI-native fresh produce logistics. Backed by Y Combinator, General Catalyst, and others.",
    url: "/explorations/getasap",
    type: "website",
  },
}

export default function GetasapExplorationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcfc] text-black">
      <div className="mx-auto max-w-[720px] px-4 py-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pt-[max(2rem,env(safe-area-inset-top))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]">
        <SiteHeader />

        <main>
          <div className="mb-6 sm:mb-10">
            <p className="mb-1.5 text-[12px] tabular-nums text-[#666] sm:mb-2 sm:text-sm">
              08.01.25
            </p>
            <h1 className="text-[1.35rem] font-semibold tracking-tight text-black sm:text-2xl">
              GETASAP
            </h1>
          </div>

          <div className="mb-10 space-y-4 text-[15px] leading-[1.7] text-black sm:mb-16 sm:space-y-5 sm:text-[17px]">
            <p>
              Founded in 2023, GETASAP is a San Francisco–based technology and
              supply chain infrastructure company transforming fresh produce
              distribution and freight.
            </p>
            <p>
              GETASAP Fresh provides same-day delivery to thousands of
              restaurants and retail locations across the USA, sourcing directly
              from farms internationally and operating global cold-chain
              infrastructure. It also operates an AI-native freight carrier and
              brokerage, delivering reliable reefer LTL and FTL services powered
              by VoiceAI dispatch, optimized scheduling, and real-time
              operational intelligence.
            </p>
          </div>

          <Backers priorityCount={4} />
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
