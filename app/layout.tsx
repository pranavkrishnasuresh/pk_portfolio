import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/lib/site'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Founder of GETASAP`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    'Pranavkrishna Suresh',
    'Krishna',
    'GETASAP',
    'Y Combinator',
    'founder',
    'AI logistics',
    'fresh produce',
    'San Francisco',
    'Georgia Tech',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Founder of GETASAP`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${siteConfig.name} | Founder of GETASAP`,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'portfolio',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className={`${ibmPlexSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
