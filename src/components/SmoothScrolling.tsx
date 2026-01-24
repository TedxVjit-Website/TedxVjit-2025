'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

/**
 * SmoothScrolling Component
 * 
 * This component wraps the application with Lenis to provide smooth scrolling.
 * It uses the 'lenis/react' package for React integration.
 * 
 * Why Lenis?
 * - High performance smooth scroll
 * - Doesn't break native scrolling
 * - Customizable (duration, easing, etc.)
 * 
 * @param {ReactNode} children - The content of the application
 */
function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.12, 
      duration: 1.2, 
      smoothWheel: true 
    }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrolling
