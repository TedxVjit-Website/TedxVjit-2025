import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Speakers',
  description:
    'Meet the TEDˣ VJIT 2026 speakers — storytellers, innovators, and leaders sharing ideas worth spreading. View the lineup and book tickets.',
  alternates: {
    canonical: '/speakers',
  },
  openGraph: {
    title: 'TEDˣ VJIT Speakers',
    description:
      'Explore the TEDˣ VJIT 2026 speaker lineup for Metamorphosis and reserve your seat for the event in Hyderabad.',
    url: '/speakers',
  },
  twitter: {
    title: 'TEDˣ VJIT Speakers',
    description:
      'Explore the TEDˣ VJIT 2026 speaker lineup for Metamorphosis and reserve your seat for the event in Hyderabad.',
  },
}

export default function SpeakersLayout({ children }: { children: ReactNode }) {
  return children
}
