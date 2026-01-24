'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Optimized CustomCursor Component
 * 
 * Performance Fix:
 * Uses Framer Motion's useMotionValue and useSpring instead of React's useState.
 * This prevents the component from re-rendering on every mouse move,
 * significantly reducing CPU/GPU overhead.
 */
export default function CustomCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring configuration for smooth follows
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 1024 // Disable on mobile and tablets for performance
      setIsMobile(isTouchDevice && isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 6)
      mouseY.set(e.clientY - 6)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile, isVisible, mouseX, mouseY])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="relative w-3 h-3">
        {/* Main dot */}
        <div className="absolute inset-0 bg-white rounded-full" />
        
        {/* Glow effect - using CSS animations which are GPU accelerated */}
        <div className="absolute inset-0 bg-white rounded-full blur-sm opacity-80 animate-pulse" />
        <div className="absolute -inset-0.5 bg-white rounded-full blur-md opacity-50 animate-pulse" />
      </div>
    </motion.div>
  )
}

