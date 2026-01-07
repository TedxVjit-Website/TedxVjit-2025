// app/layout.tsx
import './globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

interface RootLayoutProps {
  children: ReactNode
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tedxvjit.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TEDxVJIT',
    template: '%s | TEDxVJIT',
  },
  description:
    'TEDxVJIT 2025: Metamorphosis — an independently organized TED event at VJIT, Hyderabad. Explore speakers, schedule, venue details, and book tickets.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'TEDxVJIT',
    title: 'TEDxVJIT 2025 — Metamorphosis',
    description:
      'Join TEDxVJIT 2025 in Hyderabad. Discover speakers, explore the theme Metamorphosis, and book tickets.',
    images: [
      {
        url: '/assets/tedxvjlogo.png',
        width: 1200,
        height: 630,
        alt: 'TEDxVJIT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDxVJIT 2025 — Metamorphosis',
    description:
      'Join TEDxVJIT 2025 in Hyderabad. Discover speakers, explore the theme Metamorphosis, and book tickets.',
    images: ['/assets/tedxvjlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'TEDxVJIT',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'TEDxVJIT',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/tedxvjlogo.png`,
      },
      sameAs: [
        'https://x.com/TEDxVJIT',
        'https://www.instagram.com/tedxvjit',
        'https://www.linkedin.com/company/tedxvjit/',
      ],
    },
    {
      '@type': 'Event',
      '@id': `${siteUrl}/#event`,
      name: 'TEDxVJIT — Metamorphosis',
      description:
        'An independently organized TED event at Vidya Jyothi Institute of Technology, Hyderabad. Explore speakers and book tickets for TEDxVJIT.',
      startDate: '2026-01-31',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: siteUrl,
      image: [`${siteUrl}/assets/tedxvjlogo.png`],
      organizer: {
        '@id': `${siteUrl}/#organization`,
      },
      location: {
        '@type': 'Place',
        name: 'Vidya Jyothi Institute of Technology',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          addressCountry: 'IN',
        },
      },
      offers: {
        '@type': 'Offer',
        url: 'https://vpulse.campx.in/vpulse/ums/public/form/68c93a448c6af42941ea051b',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="relative min-h-screen flex flex-col bg-gray-900 text-white font-sans">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="flex-grow font-[var(--font-inter)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
