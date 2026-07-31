import { Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "flex flex-col gap-3 text-xs font-mono text-[#666] sm:flex-row sm:items-center sm:justify-between sm:gap-4",
        className ?? "mt-12 sm:mt-20"
      )}
    >
      <p className="min-w-0 break-words">
        {siteConfig.name} (
        <a
          href={siteConfig.twitterUrl}
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
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-black sm:h-auto sm:w-auto"
        >
          <Linkedin className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Email"
          className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-black sm:h-auto sm:w-auto"
        >
          <Mail className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
        </a>
      </div>
    </footer>
  )
}
