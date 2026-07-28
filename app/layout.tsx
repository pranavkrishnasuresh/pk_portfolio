import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: 'Pranavkrishna Suresh',
  description: 'Pranavkrishna Suresh',
  generator: 'Pranavkrishna Suresh',
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
