import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '2024 Speakers',
  description:
    'TEDˣ VJIT 2024 speakers — Power of Persistence. Explore talks and speakers from the previous edition.',
  alternates: {
    canonical: '/2024/speakers',
  },
  openGraph: {
    title: 'TEDˣ VJIT 2024 Speakers',
    description:
      'Explore the TEDˣ VJIT 2024 speaker lineup for Power of Persistence.',
    url: '/2024/speakers',
  },
  twitter: {
    title: 'TEDˣ VJIT 2024 Speakers',
    description:
      'Explore the TEDˣ VJIT 2024 speaker lineup for Power of Persistence.',
  },
}

export default function Speakers2024Layout({ children }: { children: ReactNode }) {
  return children
}
