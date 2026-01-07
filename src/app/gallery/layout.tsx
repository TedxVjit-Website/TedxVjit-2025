import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore highlights from previous TEDxVJIT events — photos, moments, and memories. See the experience and join TEDxVJIT 2025.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'TEDxVJIT Gallery',
    description:
      'Relive highlights from TEDxVJIT events and see what makes the experience unforgettable.',
    url: '/gallery',
  },
  twitter: {
    title: 'TEDxVJIT Gallery',
    description:
      'Relive highlights from TEDxVJIT events and see what makes the experience unforgettable.',
  },
}

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children
}
