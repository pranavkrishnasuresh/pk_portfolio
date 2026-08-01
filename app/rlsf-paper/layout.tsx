import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'RLSF Paper',
  description:
    'RLSF is a fine-tuning framework that uses symbolic tools to give LLMs precise, token-level feedback. Co-authored by Pranavkrishna Suresh and published in ECAI 2025 (Bologna, Italy).',
  keywords: [
    'RLSF',
    'ECAI 2025',
    'LLM fine-tuning',
    'symbolic feedback',
    'Pranavkrishna Suresh',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  alternates: {
    canonical: '/rlsf-paper',
  },
  openGraph: {
    title: `RLSF Paper | ${siteConfig.name}`,
    description:
      'RLSF is a fine-tuning framework that uses symbolic tools to give LLMs precise, token-level feedback. Published in ECAI 2025.',
    url: '/rlsf-paper',
    type: 'article',
    authors: [siteConfig.name],
  },
  twitter: {
    card: 'summary',
    title: `RLSF Paper | ${siteConfig.name}`,
    description:
      'RLSF is a fine-tuning framework that uses symbolic tools to give LLMs precise, token-level feedback. Published in ECAI 2025.',
    creator: siteConfig.twitter,
  },
}

export default function RLSFPaperLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
