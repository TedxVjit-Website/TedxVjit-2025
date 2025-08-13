'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ target: ref })
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 70)
  })

  return (
    <motion.header
      ref={ref}
      animate={{
        backdropFilter: visible ? 'blur(50px)' : 'none',
        backgroundColor: visible ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0)',
        boxShadow: visible
          ? '0 6px 30px rgba(225,29,72,0.5), 0 2px 4px rgba(225,29,72,0.1)'
          : 'none',
        borderRadius: visible ? '1.85rem' : '0rem',
        y: visible ? 8 : 0,
        paddingTop: visible ? '0.85rem' : '1rem',
        paddingBottom: visible ? '0.85rem' : '1rem',
        paddingLeft: '1.9rem',
        paddingRight: '1.9rem',
        border: visible ? '0px solid rgba(225,29,72,0.6)' : 'rgba(225,29,72,0.25)',
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.5,
        ease: 'easeInOut',
      }}
      className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700"
    >
      <nav className="flex items-center justify-between w-full text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/assets/tedxvjlogo.png"
              alt="TEDxVJIT Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-md font-semibold tracking-wide relative">
          {['About', 'Speakers', 'Schedule'].map((text, idx) => (
            <li key={idx} className="relative group px-3 py-1">
              <Link
                href={`#${text.toLowerCase()}`}
                className="relative z-10 text-white transition-colors duration-200 group-hover:text-red-400"
              >
                {text}
              </Link>
              <motion.span
                layoutId="hovered"
                className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="#register"
          className="ml-4 px-5 py-2.5 rounded-full text-sm font-semibold transition-transform duration-300
           bg-red-600 text-white shadow-md hover:scale-105 hover:shadow-red-600/50 animate-pulse hidden md:block"
        >
          Register Now
        </Link>
      </nav>
    </motion.header>
  )
}
