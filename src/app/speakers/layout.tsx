import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speakers | TEDx VJIT 2025',
  description: 'Discover inspiring speakers at TEDx VJIT 2025 - thought leaders, innovators, and visionaries sharing groundbreaking ideas.',
  keywords: 'TEDx VJIT speakers, TEDx talks, inspirational speakers, innovation, thought leaders',
  openGraph: {
    title: 'Speakers | TEDx VJIT 2025',
    description: 'Discover inspiring speakers at TEDx VJIT 2025',
    url: 'https://tedxvjit.in/speakers',
    siteName: 'TEDx VJIT',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tedxvjit.in/speakers',
  },
}

export default function SpeakersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
