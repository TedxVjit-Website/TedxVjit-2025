'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    
    checkMobile()
    
    // Don't add mouse listeners on mobile
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible, isMobile])

  // Don't render cursor on mobile devices
  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      initial={{ opacity: 0 }}
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        x: { type: 'spring', damping: 30, stiffness: 400, mass: 0.5 },
        y: { type: 'spring', damping: 30, stiffness: 400, mass: 0.5 },
        opacity: { duration: 0.2 }
      }}
    >
      {/* Outer glow */}
      <div className="relative w-3 h-3">
        {/* Main white dot */}
        <div className="absolute inset-0 bg-white rounded-full" />
        
        {/* Shining effect - inner glow */}
        <div className="absolute inset-0 bg-white rounded-full blur-sm opacity-80 animate-pulse" />
        
        {/* Outer glow ring */}
        <div className="absolute -inset-0.5 bg-white rounded-full blur-md opacity-50 animate-pulse" />
      </div>
    </motion.div>
  )
}
