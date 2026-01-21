import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'TEDˣ VJIT 2024',
  description:
    'Explore TEDˣ VJIT 2024 — Power of Persistence. Browse speakers and the team from the previous edition.',
  alternates: {
    canonical: '/2024/speakers',
  },
  openGraph: {
    title: 'TEDˣ VJIT 2024 — Power of Persistence',
    description:
      'Explore highlights from TEDˣ VJIT 2024. Discover speakers and the organizing team from the previous edition.',
  },
  twitter: {
    title: 'TEDˣ VJIT 2024 — Power of Persistence',
    description:
      'Explore highlights from TEDˣ VJIT 2024. Discover speakers and the organizing team from the previous edition.',
  },
}

export default function Events2024Layout({ children }: { children: ReactNode }) {
  return children
}
