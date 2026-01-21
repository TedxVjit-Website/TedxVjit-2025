import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore highlights from previous TEDˣ VJIT events — photos, moments, and memories. See the experience and join TEDˣ VJIT 2026.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'TEDˣ VJIT Gallery',
    description:
      'Relive highlights from TEDˣ VJIT events and see what makes the experience unforgettable.',
    url: '/gallery',
  },
  twitter: {
    title: 'TEDˣ VJIT Gallery',
    description:
      'Relive highlights from TEDˣ VJIT events and see what makes the experience unforgettable.',
  },
}

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children
}
