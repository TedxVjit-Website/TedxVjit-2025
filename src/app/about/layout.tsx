import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn what TEDxVJIT is, why TEDx matters, and what to expect at TEDxVJIT 2025 — Metamorphosis at VJIT, Hyderabad.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About TEDxVJIT',
    description:
      'Discover the story behind TEDxVJIT and the theme Metamorphosis. Join us in Hyderabad and book your tickets.',
    url: '/about',
  },
  twitter: {
    title: 'About TEDxVJIT',
    description:
      'Discover the story behind TEDxVJIT and the theme Metamorphosis. Join us in Hyderabad and book your tickets.',
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
