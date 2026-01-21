'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const redXRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    // Red X special animation
    if (redXRef.current) {
      gsap.fromTo(redXRef.current,
        { scale: 0, rotation: -180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 1.5, 
          ease: 'elastic.out(1, 0.5)',
          delay: 0.5
        }
      )
    }

    // Parallax effect on scroll
    gsap.to('.parallax-bg', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 300,
      opacity: 0.3
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const title = 'METAMORPHOSIS'

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8
      }
    }
  }

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Enhanced Animated Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Multiple Red gradient orbs with enhanced animations */}
        <motion.div
          className="parallax-bg absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-red-600/45 sm:bg-red-600/35 rounded-full blur-[120px] sm:blur-[120px] lg:blur-[160px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="parallax-bg absolute bottom-1/4 right-1/4 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[550px] lg:h-[550px] bg-red-500/40 sm:bg-red-500/30 rounded-full blur-[120px] sm:blur-[120px] lg:blur-[150px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.45, 0.65, 0.45],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="hidden sm:block parallax-bg absolute top-1/2 left-1/2 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] bg-red-400/25 rounded-full blur-[100px] lg:blur-[130px]"
          animate={{
            scale: [1, 1.6, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Enhanced animated grid lines with vertical lines */}
        <div className="hidden sm:block absolute inset-0 opacity-8">
          {/* Horizontal lines */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{ top: `${i * 8.33}%`, width: '100%' }}
              animate={{
                opacity: [0.05, 0.25, 0.05],
                scaleX: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut'
              }}
            />
          ))}
          {/* Vertical lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-red-500 to-transparent"
              style={{ left: `${i * 12.5}%`, height: '100%' }}
              animate={{
                opacity: [0.05, 0.2, 0.05],
                scaleY: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Enhanced Rotating rings with better styling */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/15 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/8 rounded-full"
          animate={{
            rotate: -360,
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-red-600/15 sm:border-red-600/20 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Simplified TEDx Logo */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <h2 className="text-[1.7rem] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            <span className="text-red-600 font-black" style={{ fontWeight: 900 }}>TED</span>
            <sup ref={redXRef} className="text-red-600 inline-block text-[0.95rem] sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black" style={{ fontWeight: 900 }}>X</sup>
            <span className="text-white ml-3 sm:ml-5 md:ml-6 font-medium">VJIT</span>
          </h2>
        </motion.div>

        {/* Main Title - Letter by letter animation */}
        <div className="mb-6 sm:mb-8 w-full px-0.5 sm:px-4">
          <h1 className="text-[2.1rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-black text-center flex flex-wrap justify-center gap-x-[0.01rem] sm:gap-x-1 md:gap-x-2 lg:gap-x-2 xl:gap-x-3 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5 + i * 0.08
                }}
                className="inline-block bg-gradient-to-b from-white via-gray-100 to-red-500 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.div 
          variants={itemVariants} 
          className="mb-4 sm:mb-6 max-w-2xl text-center px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-300 font-light tracking-wide">
            The Journey of <span className="text-red-500 font-semibold">Becoming</span>
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          variants={itemVariants}
          className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-10 sm:mb-12 md:mb-16 rounded-full"
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Event Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 font-light px-4 text-center"
        >
          January 31st, 2026 • VJIT Campus, Hyderabad
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-row gap-2 sm:gap-4 md:gap-6 items-center w-full sm:w-auto px-2 sm:px-0"
        >
          <motion.button
            className="relative px-4 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full overflow-hidden group shadow-lg shadow-red-600/20 flex-1 sm:flex-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              const section = document.getElementById('about')
              if (section) section.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">
              Explore Theme
            </span>
          </motion.button>

          <motion.button
            className="relative px-4 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black bg-white rounded-full overflow-hidden group shadow-lg shadow-white/10 flex-1 sm:flex-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              const section = document.getElementById('join-tedx')
              if (section) section.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">
              Get Tickets
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <motion.div
              className="w-1.5 h-2 bg-red-500 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black pointer-events-none" />
    </section>
  )
}
