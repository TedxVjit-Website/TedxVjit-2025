import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the TEDˣ VJIT organizing team — the students, faculty, and volunteers bringing TEDˣ VJIT 2026 to life in Hyderabad.',
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'TEDˣ VJIT Team',
    description:
      'Get to know the organizing team behind TEDˣ VJIT 2026 — Metamorphosis.',
    url: '/team',
  },
  twitter: {
    title: 'TEDˣ VJIT Team',
    description:
      'Get to know the organizing team behind TEDˣ VJIT 2026 — Metamorphosis.',
  },
}

export default function TeamLayout({ children }: { children: ReactNode }) {
  return children
}
