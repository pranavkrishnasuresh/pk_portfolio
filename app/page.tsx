import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { FeaturedTweets } from "@/components/paul-graham-tweet"
import {
  HoverLinkPreview,
  LinkPreviewPrefetcher,
} from "@/components/ui/hover-link-preview"
import { siteConfig } from "@/lib/site"

const previewLinkClassName =
  "font-semibold text-[#555] border-b border-[#ddd] pb-px no-underline hover:border-[#555] transition-colors"

const previewUrls = [
  "https://www.getasap.us",
  "https://www.ycombinator.com/companies/getasap",
  "https://doi.org/10.48550/arXiv.2405.16661",
  "https://vigilai.co",
  "https://developers.googleblog.com/5-years-of-innovation-student-developers-solving-real-world-problems-using-google-tech/",
  "https://youtu.be/dAAoZXoLJas",
  "https://github.com/pranavkrishnasuresh/Photonic-Quantum-GAN",
  "https://youtu.be/V6nDv9aISkY",
  "https://mcbath.house.gov/?p=2546",
] as const

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "GETASAP",
    url: "https://www.getasap.us",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Georgia Institute of Technology",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [siteConfig.twitterUrl, siteConfig.linkedinUrl, "https://www.getasap.us"],
  email: `mailto:${siteConfig.email}`,
  description: siteConfig.description,
}

export default function AuraLanding() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <LinkPreviewPrefetcher urls={previewUrls} />
      <div className="mx-auto max-w-[720px] px-4 py-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pt-[max(2rem,env(safe-area-inset-top))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-3 sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <a
            href="/"
            className="-ml-2 inline-flex min-h-11 max-w-full items-center rounded-full px-2.5 py-1 text-lg font-semibold tracking-tight text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] sm:-ml-3 sm:min-h-0 sm:px-3 sm:text-xl"
          >
            Pranavkrishna Suresh
          </a>
          <nav
            aria-label="Primary"
            className="-ml-2 flex flex-wrap items-center gap-0.5 sm:ml-0 sm:gap-1"
          >
            <div className="relative group">
              <button
                type="button"
                className="inline-flex min-h-11 items-center rounded-full px-2.5 py-1 text-sm font-medium text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] focus:bg-[#e8e8e8] focus:outline-none cursor-default sm:min-h-0 sm:px-3"
              >
                Explorations
              </button>
              <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e8e8e8] px-2.5 py-0.5 text-[11px] font-medium text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:group-active:opacity-100">
                Coming Soon
              </span>
            </div>
            <a
              href="/"
              className="inline-flex min-h-11 items-center rounded-full px-2.5 py-1 text-sm font-medium text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] sm:min-h-0 sm:px-3"
            >
              About
            </a>
            <a
              href="https://x.com/PKrishnaSuresh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] sm:min-h-0 sm:gap-2 sm:px-3"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
              <span className="hidden min-[380px]:inline">Follow me</span>
            </a>
          </nav>
        </header>

        <main>
        <section id="about" className="mb-12 sm:mb-16">
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-black sm:mb-8 sm:text-2xl">
            About
          </h2>

          <div className="text-base leading-[1.7] text-black [&>*]:break-words [&>*+*]:mt-4 sm:text-[17px] sm:[&>*+*]:mt-5">
            <div className="float-right mb-3 ml-3 h-[88px] w-[88px] overflow-hidden rounded-full border border-black/15 [shape-outside:circle()] min-[400px]:ml-4 min-[400px]:h-[100px] min-[400px]:w-[100px] sm:mb-2 sm:ml-8 sm:h-[150px] sm:w-[150px]">
              <Image
                src="/headshot.png"
                alt="Pranavkrishna Suresh"
                width={150}
                height={150}
                className="h-full w-full object-cover grayscale-[35%]"
                sizes="(max-width: 400px) 88px, (max-width: 640px) 100px, 150px"
                priority
              />
            </div>

            <p>
              I&apos;m Krishna, a 20 year-old founder based in San Francisco. I&apos;m originally
              from Milton, Georgia.
            </p>

            <div>
              I am the founder of{" "}
              <HoverLinkPreview
                href="https://www.getasap.us"
                className={previewLinkClassName}
              >
                GETASAP
              </HoverLinkPreview>{" "}
              (YC S25), an AI-Native Fresh Produce Logistics company. We enable same-day delivery of
              produce to thousands of retailers and restaurants across the USA and operate an
              AI-enabled freight brokerage.
            </div>

            <p>
              I&apos;m driven by the belief that AI can transform the critical industries civilization
              depends on to unlock abundance for all, and I want to help build that future.
            </p>

            <div>
              We&apos;re backed by{" "}
              <HoverLinkPreview
                href="https://www.ycombinator.com/companies/getasap"
                className={previewLinkClassName}
              >
                Y Combinator
              </HoverLinkPreview>
              , Paul Graham, and General Catalyst to supercharge the world&apos;s oldest industry with
              the power of AI.
            </div>
          </div>
        </section>

        <FeaturedTweets />

        {/* Technical Contributions */}
        <section className="mb-12 sm:mb-16">
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-black sm:mb-8 sm:text-2xl">
            Technical Contributions
          </h2>

          <div className="space-y-4 text-black">
            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <p>
                Built the technology and logistics infrastructure that scaled GETASAP to 8-figure
                revenue, and growing.{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Company
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <div>
                Co-authored{" "}
                <HoverLinkPreview
                  href="https://doi.org/10.48550/arXiv.2405.16661"
                  className={previewLinkClassName}
                >
                  RLSF
                </HoverLinkPreview>
                , a new fine-tuning framework that uses symbolic tools to give LLMs
                precise, token-level feedback, helping smaller models outperform models up to 1,000×
                larger across coding, chemistry, and reasoning tasks. Published in ECAI 2025
                (Bologna, Italy).{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Research
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <div>
                My previous startup{" "}
                <HoverLinkPreview href="https://vigilai.co" className={previewLinkClassName}>
                  VigilAI
                </HoverLinkPreview>{" "}
                was one of the earliest adopters of AI in the govtech space, automating repetitive
                police paperwork with multimodal VLMs to empower police officers. $160K preseed
                funding raised.{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Company
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <div>
                Developed Therapute, winner of the{" "}
                <HoverLinkPreview
                  href="https://developers.googleblog.com/5-years-of-innovation-student-developers-solving-real-world-problems-using-google-tech/"
                  className={previewLinkClassName}
                >
                  Google &amp; UN Solution Challenge
                </HoverLinkPreview>
                ; selected out of 8,000 global applicants.{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Project
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <div>
                Developed{" "}
                <HoverLinkPreview
                  href="https://youtu.be/dAAoZXoLJas"
                  className={previewLinkClassName}
                >
                  Spark
                </HoverLinkPreview>
                , winner at UC Berkeley AI Hackathon, the largest AI hackathon in the US with over
                2,000 participants.{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Project
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <div>
                Multiple hackathon wins including{" "}
                <HoverLinkPreview
                  href="https://github.com/pranavkrishnasuresh/Photonic-Quantum-GAN"
                  className={previewLinkClassName}
                >
                  MIT Quantum Computing
                </HoverLinkPreview>
                ,{" "}
                <HoverLinkPreview
                  href="https://youtu.be/V6nDv9aISkY"
                  className={previewLinkClassName}
                >
                  Regeneron HealthTech
                </HoverLinkPreview>
                , and{" "}
                <HoverLinkPreview
                  href="https://mcbath.house.gov/?p=2546"
                  className={previewLinkClassName}
                >
                  Congressional App Challenge
                </HoverLinkPreview>
                .{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Project
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <p>
                Designed and built a CV-controlled custom gripper mechanism fitted to a UR3 robotic
                arm for transporting stem cell well plates, in use at Georgia Tech&apos;s Marcus
                Nanotechnology Lab.{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Research
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[14px] leading-relaxed sm:grid-cols-[1rem_1fr] sm:gap-x-3 sm:text-[15px]">
              <span className="select-none">–</span>
              <p>
                Engineered a voice fingerprint model for secure candidate authentication for a
                $500M+ ARR recruitment industry company, reducing interview fraud by 80%.{" "}
                <span className="mt-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-[11px] font-medium tracking-wide sm:ml-1 sm:mt-0 sm:text-xs">
                  Internship
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12 sm:mb-16">
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-black sm:mb-8 sm:text-2xl">
            Education
          </h2>

          <div className="space-y-8">
            <div className="border-l border-[#ddd] pl-4 sm:pl-5">
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h3 className="text-base font-semibold text-black sm:text-lg">
                  Georgia Institute of Technology
                </h3>
                <span className="shrink-0 text-sm text-black">August 2023 - May 2027</span>
              </div>
              <p className="mb-3 text-sm text-black">
                BS in Computer Science (Specialization in AI, System Architecture)
              </p>
              <div className="space-y-2 text-[14px] leading-relaxed text-black sm:text-[15px]">
                <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 sm:grid-cols-[1rem_1fr] sm:gap-x-3">
                  <span className="select-none">–</span>
                  <p>
                    Mentored by Dr. Ganesh at Georgia Tech&apos;s Aristotle Reasoning and Learning Lab.
                  </p>
                </div>
                <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 sm:grid-cols-[1rem_1fr] sm:gap-x-3">
                  <span className="select-none">–</span>
                  <p>
                    Directed Fellowship at Startup Exchange, Georgia Tech&apos;s flagship startup
                    accelerator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 flex flex-col gap-3 text-xs font-mono text-[#666] sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="min-w-0 break-words">
            Pranavkrishna Suresh (
            <a
              href="https://x.com/PKrishnaSuresh"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#bbb] pb-px text-[#666] no-underline transition-colors hover:border-[#666]"
            >
              @pkrishnasuresh
            </a>
            )
          </p>
          <div className="flex items-center gap-1">
            <a
              href="https://linkedin.com/in/pranavkrishnasuresh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-black sm:h-auto sm:w-auto"
            >
              <Linkedin className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
            </a>
            <a
              href="mailto:krishnasljrs@gmail.com"
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-black sm:h-auto sm:w-auto"
            >
              <Mail className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
