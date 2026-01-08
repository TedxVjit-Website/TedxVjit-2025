import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | TEDx VJIT 2025',
  description: 'Meet the dedicated team behind TEDx VJIT 2025 - organizing an inspiring event with ideas worth spreading.',
  keywords: 'TEDx VJIT team, organizers, core team, event management',
  openGraph: {
    title: 'Team | TEDx VJIT 2025',
    description: 'Meet the dedicated team behind TEDx VJIT 2025',
    url: 'https://tedxvjit.in/team',
    siteName: 'TEDx VJIT',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tedxvjit.in/team',
  },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
