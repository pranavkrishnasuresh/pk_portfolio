import { Backers } from "@/components/backers"
import { EssaySectionNav } from "@/components/essay-section-nav"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getExplorationBySlug } from "@/lib/explorations"
import { articleJsonLd, explorationMetadata } from "@/lib/seo"

const slug = "getasap"
const entry = getExplorationBySlug(slug)!

const sections = [
  { id: "intro", label: "GETASAP" },
  {
    id: "an-industry-that-has-barely-changed",
    label: "An Industry That Has Barely Changed",
  },
  { id: "why-we-entered-the-industry", label: "Why We Entered the Industry" },
  {
    id: "distribution-and-freight-are-one-system",
    label: "Distribution and Freight Are One System",
  },
  {
    id: "why-the-industry-has-historically-low-margins",
    label: "Why the Industry Has Historically Low Margins",
  },
  { id: "why-now", label: "Why Now" },
  { id: "backers", label: "Our Backers" },
] as const

export const metadata = explorationMetadata(slug)

export default function GetasapExplorationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcfc] text-black">
      <JsonLd data={articleJsonLd({ ...entry, slug })} />
      <EssaySectionNav sections={[...sections]} />

      <div className="mx-auto max-w-[720px] px-4 py-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pt-[max(2rem,env(safe-area-inset-top))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]">
        <SiteHeader />

        <article>
          <header id="intro" className="mb-8 scroll-mt-24 sm:mb-10">
            <p className="mb-1.5 text-[12px] tabular-nums text-[#666] sm:mb-2 sm:text-sm">
              {entry.date}
            </p>
            <h1 className="text-[1.35rem] font-semibold tracking-tight text-black sm:text-2xl">
              {entry.title}
            </h1>
          </header>

          <div className="space-y-5 text-[15px] leading-[1.75] text-black sm:space-y-6 sm:text-[17px]">
            <p>
              The promise of AI is to bridge the gap between the unstructured
              world and the structured one.
            </p>
            <p>
              We are getting much better at turning raw information into useful
              decisions. Text becomes data. Data becomes analysis. Analysis
              becomes code. Code has already shown its potential in making
              decisions that once required people.
            </p>
            <p>But this pipeline has limitations at both ends.</p>
            <p>
              On one end, AI is only as good as the data it receives. If the data
              collection is limited, the intelligence built on top of it is
              likewise.
            </p>
            <p>
              On the other end, the ability to come up with good decisions and
              strategies with AI does not correlate with efficient execution. AI
              can tell you what should happen, but unless it has a way to act in
              the physical world, the work still falls back onto people to
              execute. Therefore, not much changes except for the impracticable
              realization that your operation is inefficient.
            </p>
            <p>
              This is why many of the industries most important to society have
              benefited less from software than people assume. They need better
              infrastructure and operators who understand how to build and
              maintain that infrastructure.
            </p>
            <p>Fresh produce is one of those industries.</p>

            <h2
              id="an-industry-that-has-barely-changed"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              An Industry That Has Barely Changed
            </h2>
            <p>Fresh produce distribution has hardly changed in decades.</p>
            <p>
              Many of the largest companies in the industry are still family
              businesses started by someone&apos;s parents or grandparents. Others
              are holding companies that acquired those same businesses. The names
              have changed, but the operating model often has not.
            </p>
            <p>
              In the time America went to the moon, connected most of the world to
              the internet, and shrank transistors by orders of magnitude, the
              system responsible for moving much of our food has remained
              surprisingly manual.
            </p>
            <p>That is strange when you think about it.</p>
            <p>
              Most Americans interact with this industry several times a day,
              though the mechanics powering it are often unseen. Every strawberry
              in a grocery store, every avocado in a restaurant, and every case of
              lettuce has passed through a long chain of farms, packing houses,
              trucks, brokers, warehouses, inspectors, and buyers.
            </p>
            <p>
              The phrase &quot;fresh produce distribution&quot; makes this sound
              simpler than it is, and &quot;fresh&quot; itself is often a
              mischaracterization.
            </p>
            <p>
              It is a complex coordination problem across agriculture, trucking,
              ocean freight, air freight, cold storage, food safety, customs,
              trade compliance, labor, packaging, energy, water, weather, and
              inventory management. And the product has to pass through all these
              hoops and get to your house in just a few days. No, the solution is
              not another ERP dashboard.
            </p>
            <p>
              The moment produce is harvested, it starts losing value every
              subsequent hour. A software bug can be fixed after shipping, but a
              spoiled case of produce cannot.
            </p>
            <p>
              The poor state of produce logistics is therefore not the result of
              one broken industry. It is the accumulated result of many older
              systems depending on one another across dozens of industries.
            </p>
            <p>
              A farm may still record inventory manually. A packing house may
              operate on spreadsheets. A trucking company may rely on phone calls
              to arrange pickups. A buyer may not know the exact temperature or
              location of a load. A distributor may not know what inventory will
              actually arrive until the truck reaches the dock.
            </p>
            <p>
              Each middleman passes their inefficiency onto the next. By the time
              the product reaches the consumer, everyone has paid for it.
            </p>

            <h2
              id="why-we-entered-the-industry"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              Why We Entered the Industry
            </h2>
            <p>
              After our YC batch, we decided to enter the fresh produce industry
              earlier this year with GETASAP.
            </p>
            <p>
              At first, the industry seems like the exact opposite of what a
              college-educated CS student would want to spend their time working
              on.
            </p>
            <p>
              It&apos;s an old, fragmented, capital-intensive, operationally
              complex, and relationship-dependent industry built over decades,
              where nearly every part of the business required knowledge we did
              not yet have.
            </p>
            <p>
              But that was also what made it attractive after a set of
              realizations. The industry was not resistant to technology because
              it did not need it. It was resistant because most technology
              companies were unwilling or too lazy to do the physical work
              required to make the software useful. The company that solves this
              problem will have to be competent in both the physical and software
              worlds to make a real difference.
            </p>

            <h2
              id="distribution-and-freight-are-one-system"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              Distribution and Freight Are One System
            </h2>
            <p>
              GETASAP is focused on transforming fresh produce logistics through
              two businesses: GETASAP Fresh and GETASAP Logistics.
            </p>
            <p>
              GETASAP Fresh handles the produce distribution itself, and GETASAP
              Logistics handles its movement.
            </p>
            <p>
              Most companies choose one side, either selling produce or freight,
              but we believe this is exactly where the problem originates. The
              separation of these highly interdependent industries is one of the
              main sources of inefficiency in the supply chain.
            </p>
            <p>
              A produce distributor that does not control logistics cannot fully
              control quality, timing, or visibility. A logistics company that
              does not understand produce cannot make the right decisions about
              temperature, shelf life, or sourcing.
            </p>
            <p>
              Therefore, our model is sourcing, packing, distribution, freight,
              tracking, documentation, and customer service all working as a
              single unified system, powered by AI and better decision-making.
            </p>

            <h2
              id="why-the-industry-has-historically-low-margins"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              Why the Industry Has Historically Low Margins
            </h2>
            <p>Fresh produce is known as a low-margin business.</p>
            <p>
              The product is perishable, demand changes quickly, and supply
              depends on weather, seasonality, and crop quality. Freight prices
              are volatile enough to have indexes tracking them, buyers are
              price-sensitive, and inventory can lose its value before it is sold.
            </p>
            <p>
              But low margins are simply a consequence of how the industry
              operates, where every extra middleman takes a margin and every delay
              creates waste. Every manual point of entry is another chance for
              error.
            </p>

            <h2
              id="why-now"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              Why Now
            </h2>
            <p>
              Industries as complex as produce distribution do not transform
              simply because new technology exists, but because of several changes
              happening at once and their compounding effects.
            </p>
            <p>
              We are living at a time when physical AI will likely become capable
              of delivering double-digit efficiency gains in produce within just a
              few years. The use cases are plentiful, with obvious applications
              ranging from AI-powered laser systems that kill weeds on farms to
              computer vision-powered spoilage detection systems in packing
              facilities.
            </p>
            <p>
              The problem is not that the technology doesn&apos;t exist. It does,
              and it will only improve from here. The problem is that the right
              players to take advantage of it do not yet exist: businesses whose
              operating models are perfectly designed to benefit from these
              advances.
            </p>
            <p>
              A company that is vertically integrated, technologically ambitious,
              and driven enough to implement frontier technologies while remaining
              relentlessly customer-obsessed is what we intend to build with
              GETASAP.
            </p>
          </div>

          <div className="mt-10 sm:mt-14">
            <Backers priorityCount={4} />
          </div>
        </article>

        <SiteFooter />
      </div>
    </div>
  )
}
