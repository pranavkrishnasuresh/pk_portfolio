export const siteConfig = {
  name: "Pranavkrishna Suresh",
  shortName: "Krishna",
  description:
    "Pranavkrishna Suresh is a founder based in San Francisco. Founder of GETASAP (YC S25), an AI-native fresh produce logistics company enabling same-day delivery and AI-enabled freight.",
  url: getSiteUrl(),
  twitter: "@pkrishnasuresh",
  twitterUrl: "https://x.com/PKrishnaSuresh",
  linkedinUrl: "https://linkedin.com/in/pranavkrishnasuresh",
  email: "krishnasljrs@gmail.com",
  ogImage: "/headshot.png",
}

/** Canonical production origin — keeps sitemap/OG off preview hosts. */
export const PRODUCTION_SITE_URL = "https://www.pksuresh.com"

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  }

  // Prefer the real domain over *.vercel.app so crawlers get stable canonicals.
  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_SITE_URL
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")
    if (host.includes("pksuresh.com")) {
      return `https://${host}`
    }
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
  }

  return "http://localhost:3000"
}
