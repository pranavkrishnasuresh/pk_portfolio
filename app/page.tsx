import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export default function AuraLanding() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[720px] mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <a
            href="/"
            className="-ml-3 inline-flex items-center rounded-full px-3 py-1 text-xl font-semibold tracking-tight text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8]"
          >
            Pranavkrishna Suresh
          </a>
          <nav className="flex items-center gap-1">
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8] cursor-default"
              >
                Explorations
              </button>
              <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e8e8e8] px-2.5 py-0.5 text-[11px] font-medium text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Coming Soon
              </span>
            </div>
            <a
              href="/"
              className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8]"
            >
              About
            </a>
            <a
              href="https://x.com/PKrishnaSuresh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-black transition-colors duration-200 ease-in-out hover:bg-[#e8e8e8]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
              Follow me
            </a>
          </nav>
        </header>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-black">About</h2>

          <div className="text-[17px] leading-[1.7] text-black [&>p+p]:mt-5">
            <div className="float-right ml-6 mb-2 w-[140px] h-[140px] rounded-full overflow-hidden border border-black/15 [shape-outside:circle()] sm:ml-8 sm:w-[150px] sm:h-[150px]">
              <Image
                src="/headshot.png"
                alt="Pranavkrishna Suresh"
                width={150}
                height={150}
                className="w-full h-full object-cover grayscale-[35%]"
              />
            </div>

            <p>
              I&apos;m Krishna, a 20 year-old founder based in San Francisco. I&apos;m originally
              from Milton, Georgia.
            </p>

            <p>
              I am the founder of{" "}
              <a
                href="https://www.getasap.us"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#555] border-b border-[#ddd] pb-px no-underline hover:border-[#555] transition-colors"
              >
                GETASAP
              </a>{" "}
              (YC S25), an AI-Native Fresh Produce Logistics company. We enable same-day delivery of
              🥕🍎🥦 to thousands of retailers and restaurants across the USA and operate an
              AI-enabled freight brokerage 🚚.
            </p>

            <p>
              I&apos;m driven by the belief that AI can transform the critical industries civilization
              depends on to unlock abundance for all—and I want to help build that future.
            </p>

            <p>
              We&apos;re backed by{" "}
              <a
                href="https://www.ycombinator.com/companies/getasap"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#555] border-b border-[#ddd] pb-px no-underline hover:border-[#555] transition-colors"
              >
                Y Combinator
              </a>
              , Paul Graham, and General Catalyst to supercharge the world&apos;s oldest industry with
              the power of AI.
            </p>
          </div>
        </section>

        {/* Technical Contributions */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-black">Technical Contributions</h2>

          <div className="space-y-4 text-black">
            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                Built the technology and logistics infrastructure that scaled GETASAP to 8-figure
                revenue, and growing.{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Company
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                Co-authored RLSF, a new fine-tuning framework that uses symbolic tools to give LLMs
                precise, token-level feedback, helping smaller models outperform models up to 1,000×
                larger across coding, chemistry, and reasoning tasks. Published in ECAI 2025
                (Bologna, Italy).{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Research
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                My previous startup{" "}
                <a
                  href="https://vigilai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#555] border-b border-[#ddd] pb-px no-underline hover:border-[#555] transition-colors"
                >
                  VigilAI
                </a>{" "}
                was one of the earliest adopters of AI in the govtech space, automating repetitive
                police paperwork with multimodal VLMs to empower police officers. $160K preseed
                funding raised.{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Company
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                Developed Therapute, winner of the{" "}
                <a
                  href="https://developers.google.com/community/gdsc-solution-challenge/winners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#555] border-b border-[#ddd] pb-px no-underline hover:border-[#555] transition-colors"
                >
                  Google &amp; UN Solution Challenge
                </a>
                ; selected out of 8,000 global applicants.{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Project
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                Developed{" "}
                <a
                  href="https://youtu.be/dAAoZXoLJas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#555] border-b border-[#ddd] pb-px no-underline hover:border-[#555] transition-colors"
                >
                  Spark
                </a>
                , winner at UC Berkeley AI Hackathon, the largest AI hackathon in the US with over
                2,000 participants.{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Project
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                Multiple hackathon wins including MIT Quantum Computing, Regeneron HealthTech, and
                Congressional App Challenge.{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Project
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                Designed and built a CV-controlled custom gripper mechanism fitted to a UR3 robotic
                arm for transporting stem cell well plates, in use at Georgia Tech&apos;s Marcus
                Nanotechnology Lab.{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Research
                </span>
              </p>
            </div>

            <div className="grid grid-cols-[1rem_1fr] gap-x-3 text-[15px] leading-relaxed">
              <span className="select-none">–</span>
              <p>
                Engineering a voice fingerprint model for secure candidate authentication for a
                $500M+ ARR recruitment industry company, reducing interview fraud by 80%.{" "}
                <span className="ml-1 inline-block rounded border border-black/20 px-1.5 py-0.5 text-xs font-medium tracking-wide">
                  Internship
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-black">Education</h2>

          <div className="space-y-8">
            <div className="border-l border-[#ddd] pl-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-black">Georgia Institute of Technology</h3>
                <span className="text-sm text-black">August 2023 - May 2027</span>
              </div>
              <p className="mb-3 text-sm text-black">
                BS in Computer Science (Specialization in AI, System Architecture)
              </p>
              <div className="space-y-2 text-[15px] leading-relaxed text-black">
                <div className="grid grid-cols-[1rem_1fr] gap-x-3">
                  <span className="select-none">–</span>
                  <p>
                    Mentored by Dr. Ganesh at Georgia Tech&apos;s Aristotle Reasoning and Learning Lab.
                  </p>
                </div>
                <div className="grid grid-cols-[1rem_1fr] gap-x-3">
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

        {/* Footer */}
        <footer className="mt-20 flex items-center justify-between gap-4 text-xs font-mono text-[#666]">
          <p>
            Pranavkrishna Suresh (
            <a
              href="https://x.com/PKrishnaSuresh"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#bbb] pb-px text-[#666] no-underline hover:border-[#666] transition-colors"
            >
              @pkrishnasuresh
            </a>
            )
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/pranavkrishnasuresh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-black transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:krishnasljrs@gmail.com"
              aria-label="Email"
              className="hover:text-black transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
