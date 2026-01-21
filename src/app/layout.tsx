// app/layout.tsx
import './globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CustomCursor from '../components/CustomCursor'
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
    default: 'TEDx VJIT',
    template: '%s | TEDˣ VJIT',
  },
  description:
    'TEDˣ VJIT 2026: Metamorphosis — an independently organized TED event at VJIT, Hyderabad. Explore speakers, schedule, venue details, and book tickets.',
  verification: {
    google: 'rJWgr_QE1lulNfn4OSh3ZZGP6HFrs7Rh6aiYfr2Tol0',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'TEDˣ VJIT',
    title: 'TEDˣ VJIT 2026 — Metamorphosis',
    description:
      'Join TEDˣ VJIT 2026 in Hyderabad. Discover speakers, explore the theme Metamorphosis, and book tickets.',
    images: [
      {
        url: `${siteUrl}/gallery/images/preview.jpg`,
        width: 1200,
        height: 630,
        alt: 'TEDˣ VJIT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDˣ VJIT 2026 — Metamorphosis',
    description:
      'Join TEDˣ VJIT 2026 in Hyderabad. Discover speakers, explore the theme Metamorphosis, and book tickets.',
    images: ['/gallery/images/preview.png'],
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
      name: 'TEDˣ VJIT',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'TEDˣ VJIT',
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
      name: 'TEDˣ VJIT — Metamorphosis',
      description:
        'An independently organized TED event at Vidya Jyothi Institute of Technology, Hyderabad. Explore speakers and book tickets for TEDˣ VJIT.',
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
      <body className="relative min-h-screen flex flex-col bg-gray-900 text-white font-sans overflow-x-hidden cursor-none">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow font-[var(--font-inter)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
