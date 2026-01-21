import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn what TEDˣ VJIT is, why TEDˣ matters, and what to expect at TEDˣ VJIT 2026 — Metamorphosis at VJIT, Hyderabad.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About TEDˣ VJIT',
    description:
      'Discover the story behind TEDˣ VJIT and the theme Metamorphosis. Join us in Hyderabad and book your tickets.',
    url: '/about',
  },
  twitter: {
    title: 'About TEDˣ VJIT',
    description:
      'Discover the story behind TEDˣ VJIT and the theme Metamorphosis. Join us in Hyderabad and book your tickets.',
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
