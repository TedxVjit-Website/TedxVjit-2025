'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true) // Start as true to avoid flash

  useEffect(() => {
    // Check if device is mobile phone (exclude tablets)
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice && isSmallScreen);
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    // Don't add mouse listeners on mobile phones
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
  }, [isMobile, isVisible])

  // Don't render cursor on mobile phones only
  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      initial={{ opacity: 0 }}
      animate={{
        x: mousePosition.x - 5,
        y: mousePosition.y - 5,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        x: { type: 'spring', damping: 30, stiffness: 400, mass: 0.5 },
        y: { type: 'spring', damping: 30, stiffness: 400, mass: 0.5 },
        opacity: { duration: 0.2 }
      }}
    >
      <img 
        src="/cursor/white-circle-svgrepo-com.svg" 
        alt="cursor"
        width={10} 
        height={10}
        style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))' }}
      />
    </motion.div>
  )
}
