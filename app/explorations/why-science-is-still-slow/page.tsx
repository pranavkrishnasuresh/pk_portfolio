import type { Metadata } from "next"
import Image from "next/image"
import { EssaySectionNav } from "@/components/essay-section-nav"
import { SiteHeader } from "@/components/site-header"

const sections = [
  { id: "intro", label: "Why Science Is Still Slow" },
  { id: "what-we-learned", label: "What We Learned" },
  { id: "the-human-is-the-middleman", label: "The Human Is the Middleman" },
  { id: "making-experiments-programmable", label: "Making Experiments Programmable" },
  { id: "the-companies-building-this-future", label: "The Companies Building this Future" },
  { id: "my-thesis", label: "My Thesis" },
  { id: "the-compounding-of-science", label: "The Compounding of Science" },
] as const

export const metadata: Metadata = {
  title: "Why Science Is Still Slow",
  description:
    "A reflection on laboratory automation, a small stem-cell robot, and why science still struggles to compound.",
  alternates: {
    canonical: "/explorations/why-science-is-still-slow",
  },
  openGraph: {
    title: "Why Science Is Still Slow | Pranavkrishna Suresh",
    description:
      "A reflection on laboratory automation, a small stem-cell robot, and why science still struggles to compound.",
    url: "/explorations/why-science-is-still-slow",
    type: "article",
  },
}

export default function WhyScienceIsStillSlowPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcfc] text-black">
      <EssaySectionNav sections={[...sections]} />

      <div className="mx-auto max-w-[720px] px-4 py-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pt-[max(2rem,env(safe-area-inset-top))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]">
        <SiteHeader />

        <article>
          <header id="intro" className="mb-8 scroll-mt-24 sm:mb-10">
            <p className="mb-1.5 text-[12px] tabular-nums text-[#666] sm:mb-2 sm:text-sm">
              08.10.22
            </p>
            <h1 className="text-[1.35rem] font-semibold tracking-tight text-black sm:text-2xl">
              Why Science Is Still Slow
            </h1>
          </header>

          <div className="space-y-5 text-[15px] leading-[1.75] text-black sm:space-y-6 sm:text-[17px]">
            <p>
              This summer, I worked on a robot whose job was to move stem-cell
              well plates.
            </p>
            <p>
              It did not discover a new drug or invent a new kind of cell
              therapy. All it did was pick up a plastic tray, carry it steadily
              across a table, and place it in another machine for analysis.
            </p>
            <p>
              This sounds like a small solution to an isolated problem. But I
              believe it may be the beginning of something much larger.
            </p>
            <p>
              Stem cells are fragile, expensive, and highly regulated. They also
              hold enormous potential for treating diseases that medicine still
              struggles to address. The researchers we worked with at the Georgia
              Tech Research Institute had a simple but costly problem: samples
              could be spoiled before they were ever analyzed.
            </p>
            <p>
              An experiment might take weeks to prepare, but a small mistake
              while moving a plate or an environmental change could contaminate
              or warp the contents, distorting the result.
            </p>
            <p>Our task was to remove the human from this part of the workflow.</p>
            <p>
              We built a custom 3D-printed gripper with limit switches that
              verified whether the plate was secure. We attached it to the end
              effector of a UR3 robotic arm. The software used a finite-state
              machine to decide what action to take next, detect errors, and stop
              before damaging a sample.
            </p>
            <p>
              We also wanted the system to be usable by scientists who did not
              know how to program. A researcher could manually teach the robot a
              destination once, save it, and allow the system to return there
              later.
            </p>
            <p>
              We finished the internship requirements a few days early. The
              proudest moment came when we watched the robot operate inside a
              clean room at Georgia Tech&apos;s Marcus Nanotechnology laboratory,
              moving fragile samples without spilling, tilting, or exposing them
              unnecessarily.
            </p>

            <figure className="my-8 sm:my-10">
              <a
                href="/explorations/gtri-engineering-poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg border border-black/10 bg-white"
              >
                <Image
                  src="/explorations/gtri-engineering-poster.jpg"
                  alt="GTRI Engineering Poster: Automated Stem Cell Sample Handling System"
                  width={1600}
                  height={1200}
                  className="h-auto w-full"
                  sizes="(max-width: 720px) 100vw, 720px"
                  priority
                />
              </a>
              <figcaption className="mt-3 text-center text-[13px] text-[#666] sm:text-sm">
                GTRI Engineering Poster — click to open the PDF
              </figcaption>
            </figure>

            <p>At first, I thought we had solved a robotics problem.</p>
            <p>
              By the end of the summer, I realized we had encountered a much
              larger problem about how science itself works.
            </p>

            <h2
              id="what-we-learned"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              What We Learned
            </h2>
            <p>Three things became clear.</p>
            <p>
              First, a ten-week engineering project could save scientists
              thousands of hours over the lifetime of the system. Every plate the
              robot moved was one less plate a trained PhD-level researcher had
              to carry manually. The value was not just that the robot worked
              faster, but that the scientists could spend more time doing real
              research rather than clerical work.
            </p>
            <p>Second, the hardest part was building the physical interface.</p>
            <p>
              The robot arm already existed. The machines for analysis already
              existed. But nothing connected them. We had to design the gripper
              from scratch, test several versions, account for different plate
              dimensions, add feedback through limit switches, and make the
              mechanism stable enough to hold a delicate sample without damaging
              it.
            </p>
            <p>
              Once the gripper worked, the remaining task was mostly calibration:
              teaching the robot where each machine was and defining the approach
              and departure paths through their absolute coordinates.
            </p>
            <p>Third, our robot was autonomous only in a narrow sense.</p>
            <p>
              It could perform the task by itself after someone had carefully
              configured it. But it could not understand a new laboratory setup,
              recognize a slightly different plate, or adapt when a machine was
              moved a few inches. A roboticist still had to tell it exactly what
              the world looked like.
            </p>
            <p>It was autonomous, but not very smart.</p>
            <p>
              This distinction matters. A system that repeats one carefully
              programmed motion is useful. But it is not yet a general solution.
              Every new machine configuration required another round of
              integration, calibration, and testing. If no one with robotics
              experience was available, the robot might simply go unused. We knew
              this while creating the robot, that it was unlikely it would create
              any long-term change other than for the narrow task we had designed
              it for, a somber realization given I spent my entire summer
              building this!
            </p>
            <p>
              The harder question was whether we could build something that
              worked beyond this one setup, something that would scale
              commercially.
            </p>

            <h2
              id="the-human-is-the-middleman"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              The Human Is the Middleman
            </h2>
            <p>This pattern appears throughout science.</p>
            <p>
              A modern laboratory may contain millions of dollars of sophisticated
              equipment. Machines can image a sample, analyze its chemical
              composition, control temperature, humidity, and incubation time with
              extreme precision.
            </p>
            <p>
              But the experiment is often still held together by a scientist, who
              is most of the time working on clerical tasks that even I could have
              done as an 8th grader on my Experimental Design Science Olympiad
              team.
            </p>
            <p>
              A scientist moves the plate from one machine to another, copy
              measurements into another system, set timers, label samples, prepare
              reagents, and remember which step comes next.
            </p>
            <p>
              The machines are automated. The laboratory is not. The human is the
              middleman.
            </p>
            <p>
              This is one reason science progresses more slowly than computing.
            </p>
            <p>
              A program can be copied and run a thousand times with nearly
              identical behavior. An experiment is much harder to copy. And every
              human that&apos;s added in the mix introduces unsolicited errors that
              can further differentiate the results of seemingly identical
              experiments.
            </p>
            <p>
              We know the solution to this, we&apos;ve solved it countless times
              in other industries — automation.
            </p>
            <p>
              So the problem is not only that laboratories need more robots. The
              problem is that these robots need to be reusable across experiments,
              programmable, and take care of all the clerical work involved in
              doing an experiment. That is what leads to market adaptation.
            </p>

            <h2
              id="making-experiments-programmable"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              Making Experiments Programmable
            </h2>
            <p>
              A programmable experiment would describe more than just the starting
              and ending coordinates of machines, like we defined in our project.
            </p>
            <p>
              It would specify how each instrument should perform those steps,
              what data should be recorded, how success should be verified, and
              what the system does when something goes wrong. That would ensure a
              truly autonomous finite state machine.
            </p>
            <p>
              The last part is probably the most important. The robot, likely
              through computer vision, should be able to self-correct when it
              realizes it has done a mistake rather than continuing. Why is it
              that we have Teslas that can self correct their driving on nearly
              every road in America but not lab robots that could save millions of
              hours of time from our country&apos;s smartest people?
            </p>

            <h2
              id="the-companies-building-this-future"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              The Companies Building this Future
            </h2>
            <p>
              Several companies are working towards solving this problem, but two
              of them stood out to me.
            </p>
            <p>
              <span className="font-semibold">Opentrons.</span> Automate
              repetitive tasks with a programmable laboratory. Example: steady
              pipetting over a set period of time that would usually be done by a
              researcher.
            </p>
            <p>
              <span className="font-semibold">Emerald Cloud Lab.</span> Rather
              than selling only a machine or a software, they operate automated
              laboratories that researchers can access remotely. Experiments are
              distilled down into their core, structured instructions and executed
              by the cloud laboratory.
            </p>

            <h2
              id="my-thesis"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              My Thesis
            </h2>
            <p>
              My thesis is that laboratory robots will be valuable, but the
              biggest companies in this space will not stop at selling individual
              robots. They will build the entire autonomous laboratory around
              them.
            </p>
            <p>
              The hardware manufacturers will be big. Different experiments will
              require different grippers, sensors, liquid handlers, and robotic
              arms. They will continue to improve in precision over time as they
              have for the past 20 years.
            </p>
            <p>
              But the robot alone solves only one step of an experiment. Its value
              increases dramatically when it can communicate with other
              instruments, adapt to new workflows, verify its own actions, and
              recover when something goes wrong.
            </p>
            <p>
              The best companies will combine three things: specialized robotics,
              software that coordinates the laboratory, and the scientific domain
              expertise required to choose experiments.
            </p>
            <p>
              Every laboratory is arranged differently, just like automobile
              factories. A company that runs thousands of experiments will
              gradually be the best suited to learn how to handle these
              differences and encode that into its automation.
            </p>
            <p>
              This creates a compounding advantage, the key piece that has been
              missing in this industry until now. Each new robot expands what the
              laboratory can do. Each new experiment validates the domain
              expertise scientists provide and allows them to choose the next,
              more pertinent one. Each failure improves its ability to recognize
              and correct future failures.
            </p>
            <p>
              The largest company in this space probably will not look like a
              traditional robotics company or a traditional software company. It
              will have to build both.
            </p>

            <h2
              id="the-compounding-of-science"
              className="scroll-mt-24 pt-2 text-xl font-semibold tracking-tight text-black sm:pt-4 sm:text-[1.35rem]"
            >
              The Compounding of Science
            </h2>
            <p>
              Large, well-funded laboratories can already justify expensive custom
              robotics. But custom automation can only take them so far until the
              incentives no longer align — it&apos;s simply too expensive given most
              experiments are often long-shots with a small chance of commercial
              value anyways.
            </p>
            <p>
              The larger opportunity is to make these systems deployable without a
              team of roboticists and specialized engineers. A smaller laboratory
              should be able to add an instrument, show a workflow, and begin
              automating it without rebuilding the entire system.
            </p>
            <p>
              Experiments will run more often, with less interruption, and more
              precisely. Researchers will be empowered to test more hypotheses
              with the same amount of time and funding.
            </p>
            <p>
              Most importantly, knowledge could begin to compound, since better
              experiments will produce better data. Better data would train better
              models, as we&apos;ve seen through the deep learning revolution.
              Better models would propose better experiments. And there the
              learning loop is closed and repeats.
            </p>
            <p>
              Semiconductors improved through decades of compounding. Software
              improved because programs could be copied, open sourced, and
              distributed at cheap prices. The internet accelerated knowledge by
              making information easier to access and compound.
            </p>
            <p>
              Laboratory science has not experienced the same rate of compounding
              because the physical execution of experiments remains slow.
            </p>
            <p>
              Science is often romanticized to be the search for new ideas. But
              ideas are only half of the loop. The experiment is the difficult
              part, and we are just at the beginning of bringing the power of
              compounding technology to laboratories.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
