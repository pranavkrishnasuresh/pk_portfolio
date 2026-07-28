export const siteConfig = {
  name: 'Pranavkrishna Suresh',
  shortName: 'Krishna',
  description:
    'Pranavkrishna Suresh is a founder based in San Francisco. Founder of GETASAP (YC S25), an AI-native fresh produce logistics company enabling same-day delivery and AI-enabled freight.',
  url: getSiteUrl(),
  twitter: '@pkrishnasuresh',
  twitterUrl: 'https://x.com/PKrishnaSuresh',
  linkedinUrl: 'https://linkedin.com/in/pranavkrishnasuresh',
  email: 'krishnasljrs@gmail.com',
  ogImage: '/headshot.png',
}

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, '')}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  }

  return 'http://localhost:3000'
}
