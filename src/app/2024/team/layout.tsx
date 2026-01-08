import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team 2024 | TEDx VJIT',
  description: 'TEDx VJIT 2024 Team - Archive from our previous event.',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://tedxvjit.in/2024/team',
  },
}

export default function Team2024Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
