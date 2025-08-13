'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Simulate scroll effect without framer-motion
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navigationItems = [
    { text: 'About', href: '/about' },
    { text: 'Speakers', href: '/speakers' },
    { text: 'Gallery', href: '/gallery' }
  ]

  return (
    <header
      ref={ref}
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 ${
        visible 
          ? 'backdrop-blur-[50px] bg-black/85 shadow-[0_6px_30px_rgba(225,29,72,0.5),0_2px_4px_rgba(225,29,72,0.1)] rounded-[1.85rem] translate-y-2 border border-red-500/60' 
          : 'bg-transparent border-transparent'
      }`}
      style={{
        paddingTop: visible ? '0.85rem' : '1rem',
        paddingBottom: visible ? '0.85rem' : '1rem',
        paddingLeft: '1.9rem',
        paddingRight: '1.9rem',
      }}
    >
      <nav className="flex items-center justify-between w-full text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/assets/tedxvjlogo.png"
              alt="TEDxVJIT Logo"
              width={140}
              height={140}
              className="object-contain w-32 sm:w-36 md:w-44 lg:w-52"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-md font-semibold tracking-wide relative">
          {navigationItems.map((item, idx) => (
            <li key={idx} className="relative group px-3 py-1">
              <Link
                href={item.href}
                className="relative z-10 text-white transition-colors duration-200 group-hover:text-red-400"
              >
                {item.text}
              </Link>
              <span className="absolute inset-0 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button with Dropdown */}
        <div className="relative ml-4 hidden md:block">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
             bg-red-600 text-white shadow-md hover:scale-105 hover:shadow-red-600/50 animate-pulse flex items-center gap-2"
          >
            Register Now
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm rounded-xl border border-red-500/30 shadow-2xl overflow-hidden animate-fade-in">
              <div className="py-2">
                <Link
                  href="#register-audience"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center px-4 py-3 text-white hover:bg-red-600/20 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40 transition-colors duration-200">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">As Audience</div>
                    <div className="text-xs text-gray-400">Join as an attendee</div>
                  </div>
                </Link>
                
                <Link
                  href="#register-speaker"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center px-4 py-3 text-white hover:bg-red-600/20 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40 transition-colors duration-200">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.543 12.674a1 1 0 000 1.652l5.914 3.674a1 1 0 001.543-.868V8.738a1 1 0 00-1.543-.868l-5.914 3.674a1 1 0 000 1.652z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">As Speaker</div>
                    <div className="text-xs text-gray-400">Share your ideas</div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-red-400 transition-colors duration-200"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-red-500/30 shadow-2xl overflow-hidden">
          <div className="py-4">
            {/* Navigation Links */}
            <div className="px-4 py-2">
              {navigationItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:bg-red-600/20 transition-colors duration-200 rounded-lg"
                >
                  {item.text}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700/50 my-2" />

            {/* Mobile CTA Buttons */}
            <div className="px-4 py-2 space-y-2">
              <Link
                href="#register-audience"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 text-white hover:bg-red-600/20 transition-colors duration-200 rounded-lg group"
              >
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40 transition-colors duration-200">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Register as Audience</div>
                  <div className="text-xs text-gray-400">Join as an attendee</div>
                </div>
              </Link>
              
              <Link
                href="#register-speaker"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 text-white hover:bg-red-600/20 transition-colors duration-200 rounded-lg group"
              >
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500/40 transition-colors duration-200">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.543 12.674a1 1 0 000 1.652l5.914 3.674a1 1 0 001.543-.868V8.738a1 1 0 00-1.543-.868l-5.914 3.674a1 1 0 000 1.652z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Register as Speaker</div>
                  <div className="text-xs text-gray-400">Share your ideas</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
