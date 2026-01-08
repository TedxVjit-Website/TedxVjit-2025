import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Speakers',
  description:
    'Meet the TEDxVJIT 2025 speakers — storytellers, innovators, and leaders sharing ideas worth spreading. View the lineup and book tickets.',
  alternates: {
    canonical: '/speakers',
  },
  openGraph: {
    title: 'TEDxVJIT Speakers',
    description:
      'Explore the TEDxVJIT 2025 speaker lineup for Metamorphosis and reserve your seat for the event in Hyderabad.',
    url: '/speakers',
  },
  twitter: {
    title: 'TEDxVJIT Speakers',
    description:
      'Explore the TEDxVJIT 2025 speaker lineup for Metamorphosis and reserve your seat for the event in Hyderabad.',
  },
}

export default function SpeakersLayout({ children }: { children: ReactNode }) {
  return children
}
