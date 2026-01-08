import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speakers 2024 | TEDx VJIT',
  description: 'TEDx VJIT 2024 Speakers - Archive from our previous event.',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://tedxvjit.in/2024/speakers',
  },
}

export default function Speakers2024Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
