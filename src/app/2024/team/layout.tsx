import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '2024 Team',
  description:
    'Meet the TEDxVJIT 2024 organizing team — Power of Persistence. Explore the people behind the previous edition.',
  alternates: {
    canonical: '/2024/team',
  },
  openGraph: {
    title: 'TEDxVJIT 2024 Team',
    description:
      'Meet the organizing team behind TEDxVJIT 2024 — Power of Persistence.',
    url: '/2024/team',
  },
  twitter: {
    title: 'TEDxVJIT 2024 Team',
    description:
      'Meet the organizing team behind TEDxVJIT 2024 — Power of Persistence.',
  },
}

export default function Team2024Layout({ children }: { children: ReactNode }) {
  return children
}
