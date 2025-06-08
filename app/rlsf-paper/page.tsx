"use client"

import { useState } from "react"
import { Moon, Sun, Github, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RLSFPaper() {
  const [isDark, setIsDark] = useState(true)

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
              <Link href="/" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
              <a href="/#about" className="text-sm hover:opacity-70 transition-opacity">
                About
              </a>
              <a href="/#education" className="text-sm hover:opacity-70 transition-opacity">
                Education
              </a>
              <a href="/#experience" className="text-sm hover:opacity-70 transition-opacity">
                Experience
              </a>
              <a href="/#contact" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
                <Github className="h-4 w-4" />
                Follow me
              </a>
            </nav>
          </div>
        </header>

        {/* Paper Content */}
        <main className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-medium mb-4">Reinforcement Learning via Symbolic Feedback (RLSF)</h1>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Georgia Institute of Technology • Symbolic Reasoning and Learning Lab
            </p>
          </div>

          <section>
            <h2 className="text-xl font-medium mb-6">Abstract</h2>
            <div className={`leading-relaxed text-sm space-y-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              <p>
                Reinforcement Learning with Human Feedback (RLHF) is considered a standard approach to fine-tuning Large
                Language Models (LLMs). However, such methods often face limitations such as unsound black-box reward
                models, difficulties in collecting human preference data, and the reliance on sparse scalar rewards.
                These methods often fall short when applied to tasks that require complex domain-specific understanding.
              </p>

              <p>
                To address these challenges, we propose a new fine-tuning paradigm we refer to as Reinforcement Learning
                via Symbolic Feedback (RLSF), which aims to improve domain-specific understanding of LLMs more
                effectively than traditional reward signals. In the RLSF setting, the LLM being fine-tuned is considered
                an RL agent, while the environment is allowed access to reasoning or domain knowledge tools (e.g.,
                solvers, provers, algebra systems, or knowledge bases). Crucially, in RLSF, these reasoning tools can
                provide feedback to the LLMs via poly-sized certificates (e.g., proofs), that characterize errors in the
                LLM-generated object with respect to some correctness specification. As a bonus, our RLSF approach does
                not require the reasoning systems we use to be differentiable. The ability of RLSF-based fine-tuning to
                leverage certificate-generating symbolic tools enables sound fine-grained (token-level) reward signals
                to LLMs, and thus addresses the limitations of traditional reward models mentioned above.
              </p>

              <p>
                Via extensive evaluations, we show that our RLSF-based fine-tuning of LLMs outperforms traditional
                approaches on five different applications, namely, program synthesis from natural language pseudo-code
                to programming language, three chemistry tasks, and solving the Game of 24. A takeaway is that
                fine-tuning via RLSF enables relatively smaller LLMs to significantly outperform closed-source models
                that are orders of magnitude larger (e.g., GPT-4).
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
