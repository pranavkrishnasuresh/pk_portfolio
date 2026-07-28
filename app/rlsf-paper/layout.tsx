import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RLSF Paper',
  description:
    'RLSF is a fine-tuning framework that uses symbolic tools to give LLMs precise, token-level feedback. Co-authored by Pranavkrishna Suresh and published in ECAI 2025 (Bologna, Italy).',
  alternates: {
    canonical: '/rlsf-paper',
  },
  openGraph: {
    title: 'RLSF Paper | Pranavkrishna Suresh',
    description:
      'RLSF is a fine-tuning framework that uses symbolic tools to give LLMs precise, token-level feedback. Published in ECAI 2025.',
    url: '/rlsf-paper',
    type: 'article',
  },
}

export default function RLSFPaperLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
