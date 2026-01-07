import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the TEDxVJIT organizing team — the students, faculty, and volunteers bringing TEDxVJIT 2025 to life in Hyderabad.',
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'TEDxVJIT Team',
    description:
      'Get to know the organizing team behind TEDxVJIT 2025 — Metamorphosis.',
    url: '/team',
  },
  twitter: {
    title: 'TEDxVJIT Team',
    description:
      'Get to know the organizing team behind TEDxVJIT 2025 — Metamorphosis.',
  },
}

export default function TeamLayout({ children }: { children: ReactNode }) {
  return children
}
