// app/layout.tsx
import './globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ReactNode } from 'react'
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <title>TEDˣ VJIT</title>
        <meta name="description" content="TEDx VJIT - Ideas Worth Spreading. Official TEDx event at VNR Vignana Jyothi Institute of Engineering and Technology" />
        <meta name="keywords" content="TEDx, VJIT, TEDxVJIT, Conference, Speakers, Innovation, Ideas" />
        <meta name="author" content="TEDx VJIT Team" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://tedxvjit.in/" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="relative min-h-screen flex flex-col bg-gray-900 text-white font-sans">
        <Navbar />
        <main className="flex-grow font-[var(--font-inter)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
