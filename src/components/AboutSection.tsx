'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import Image from 'next/image'

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' } as const
    }
  }

  return (
    <section 
      id="about" 
      className="relative w-full min-h-[70vh] sm:min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-12 sm:py-20 gap-12 overflow-hidden"
    >
      {/* Background radial gradient - Using CSS variable for smoother rendering */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(153,27,27,0.1),transparent_60%)] pointer-events-none" />

      {/* Main Single Trigger Wrapper with optimized viewport */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }} // Trigger almost instantly to prevent 'thinking' pause
        variants={containerVariants}
      >
        {/* Left Image Section - Pre-rendered shadow and optimized Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center items-center"
          variants={itemVariants}
        >
          <div className="relative group max-w-xl w-full translate-z-0">
            <div className="absolute -inset-0.5 bg-red-600/10 rounded-2xl opacity-50 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#0a0a0a] aspect-video">
              <Image
                src="https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-2.JPG?updatedAt=1759593304566"
                alt="TEDx VJIT event theme"
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 will-change-transform"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            About <span className="text-red-600">Metamorphosis</span>
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="w-16 h-1 bg-red-600 rounded-full mb-8" 
          />

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
          >
            Metamorphosis is about letting go of old ways and embracing something new. It is the quiet space between endings and beginnings, where challenges turn into opportunities and chaos becomes creation.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
          >
            Real change starts within us, whether through a shift in perspective, a struggle that reshapes us, or a dream that refuses to fade.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              className="group relative flex items-center gap-3 font-semibold text-white bg-red-600 hover:bg-red-700 px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = '/about')}
            >
              <span>Learn More About TEDˣ</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}