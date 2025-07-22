"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuraLanding() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "black"
    } else {
      document.body.style.backgroundColor = "white"
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-mono ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <h1 className="text-xl font-medium">Pranavkrishna Suresh</h1>
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <nav className="flex items-center gap-6">
              <a href="#about" className="text-sm hover:opacity-70 transition-opacity">
                About
              </a>
              <a href="#education" className="text-sm hover:opacity-70 transition-opacity">
                Education
              </a>
              <a href="#experience" className="text-sm hover:opacity-70 transition-opacity">
                Experience
              </a>
              <a href="#contact" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
                <Github className="h-4 w-4" />
                Follow me
              </a>
            </nav>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-medium mb-8">About</h2>

              <div className={`space-y-6 leading-relaxed text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <p>
                👋 Hey, I'm Pranavkrishna Suresh, a 19 year old CS student at Georgia Tech 🐝!
                </p>
                
                <p>
                  I'm the founder of GetASAP ASIA 🔥 (YC S25), a B2B FMCG wholesale platform empowering 1200+ distributors, 270+ brands, 
                  and 40,000 retail doors across Southeast Asia to streamline sourcing and fulfillment. Backed by General Catalyst.
                </p>

                <p>
                  Powering the future of seamless, intelligent end-to-end supply chains ⛓️‍💥 connecting the world's largest FMCG brands 🍫 with every SMB and enterprise.
                </p>

                <p>
                  I'm an incoming sde intern at Amazon Web Services, where I'll be working on cloud backend for Prime services. *
                </p>

                <p>
                  🏠 Milton, Georgia → 🌉 San Francisco, California.
                </p>
              </div>
            </div>

            <div className="lg:w-64 flex justify-center lg:justify-end">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-700">
                <Image
                  src="/headshot.png"
                  alt="Pranavkrishna Suresh"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Education</h2>

          <div className="space-y-8">
            <div
              className={`border-l-2 pl-6 hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer ${isDark ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-medium">Georgia Institute of Technology</h3>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>August 2023 - May 2027</span>
              </div>
              <p className={`mb-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                B.S. in Computer Science (Threads: Artificial Intelligence, System Architecture)
              </p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Machine Learning,
                Computer Organization, Perception & Robotics, Linear Algebra, Differential Equations
              </p>
            </div>

            <div
              className={`border-l-2 pl-6 hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer ${isDark ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-medium">Y Combinator S25</h3>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Summer 2025</span>
              </div>
              <p className={`mb-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Founder, GetASAP ASIA</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Building and scaling B2B FMCG wholesale platform with mentorship of Silicon Valley superheroes.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Experience</h2>

          <div className="space-y-8">
            <div
              className={`border-l-2 pl-6 hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer ${isDark ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-medium">Founder - GetASAP ASIA (YC S25)</h3>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Dec 2023 - Present</span>
              </div>
              <p className={`mb-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Bootstrapped $10M ARR (FY25)
              </p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
               <p>
               Empowering 1200+ distributors, 270+ brands, and 40,000 retailers across Southeast Asia to streamline sourcing and fulfillment through our AI-enabled wholesale B2B marketplace. 
                </p>
              </p>
            </div>

            <div
              className={`border-l-2 pl-6 hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer ${isDark ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-medium">Incoming SDE Intern - Amazon Web Services</h3>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Fall 2025</span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                AWS backend team for Prime services.
              </p>
            </div>

            <div
              className={`border-l-2 pl-6 hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer ${isDark ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-medium">Software Engineering Intern - VDart</h3>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>May 2024 - Aug 2024</span>
              </div>
              <p className={`mb-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>AI R&D Division</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Engineered ML pipeline to automate resume screening reducing processing time by 40%. Developed voice
                fingerprint model for secure candidate authentication, reducing interview fraud by 80%.
              </p>
            </div>

            <div
              className={`border-l-2 pl-6 hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer ${isDark ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-medium">Founder - VigilTech</h3>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Nov 2023 - April 2025</span>
              </div>
              <p className={`mb-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>$160K Seed Funding Raised</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Automating repetitive police paperwork with verifiable AI, giving officers more time to protect and serve their communities.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Contributions */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Technical Contributions</h2>

          <div className={`space-y-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            <div className="flex items-start gap-3">
              <span className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>–</span>
              <div className="text-sm leading-relaxed">
                Published RLSF paper, a fine-tuning framework leveraging symbolic feedback for token-level LLM supervision at GT Research
                Lab.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>–</span>
              <div className="text-sm leading-relaxed">
                Won Google Solution Challenge representing USA among 8,000 global applicants with Therapute, an AI-driven physiotherapy platform.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>–</span>
              <div className="text-sm leading-relaxed">
                Developed Spark, winner at UC Berkeley AI Hackathon, the largest AI hackathon in the US using HumeAI and Multi-Agent LLMs.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>–</span>
              <div className="text-sm leading-relaxed">
                Built 1Record at Cornell Health RX Hackathon, vectorizing 100K EHR records for patient outcome prediction.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className={`mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>–</span>
              <div className="text-sm leading-relaxed">
                Multiple hackathon victories including MIT Quantum Computing, AI ATL, Regeneron HealthTech, and Congressional App Challenge Winner.
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-medium mb-8">Let's Connect</h2>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/pranavkrishnasuresh"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            {/* <a
              href="https://pksuresh.vercel.app"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
              Portfolio
            </a> */}
            <a
              href="https://linkedin.com/in/pranavkrishnasuresh"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:krishnasljrs@gmail.com"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              krishnasljrs@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
