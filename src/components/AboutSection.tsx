'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ---------- Variants (minimal & fast) ---------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-16 sm:py-24 gap-8"
    >
      {/* ---------- Left Image ---------- */}
      <div
        className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0"
        // variants={fadeLeft}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, margin: '-80px' }}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black/60 max-w-xl w-full aspect-video">
          <img
            src="https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-2.JPG?updatedAt=1759593304566"
            alt="TEDˣ VJIT event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ---------- Right Content ---------- */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-2xl"
        // variants={staggerContainer}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, margin: '-80px' }}
      >
        <h2
          // variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
        >
          About <span className="text-white">Metamorphosis</span>
        </h2>

        <div
          // variants={fadeUp}
          className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-14"
        />

        {[
          'Metamorphosis is about letting go of old ways and embracing something new. It is the quiet space between endings and beginnings, where challenges turn into opportunities and chaos becomes creation.',
          'Real change starts within us, whether through a shift in perspective, a struggle that reshapes us, or a dream that refuses to fade. These inner transformations ripple outward, touching lives and inspiring the world around us.',
        ].map((text, i) => (
          <p
            key={i}
            // variants={fadeUp}
            className="text-lg sm:text-xl text-white mb-6 leading-relaxed tracking-wide"
          >
            {text}
          </p>
        ))}

        {/* ---------- Button (tiny interaction only) ---------- */}
        <button
          // whileHover={{ scale: 1.03 }}
          // whileTap={{ scale: 0.97 }}
          className="relative flex items-center justify-center font-semibold text-white rounded-[0.9em] overflow-hidden cursor-pointer bg-red-600 px-[1.2em] pr-[3em] py-[0.35em] h-[2.8em] shadow-[inset_0_0_1.6em_-0.6em_rgba(180,0,0,0.5)] min-w-[150px] sm:min-w-[200px] mt-4"
          onClick={() => (window.location.href = '/about')}
        >
          <span className="relative z-10 text-sm sm:text-base">
            Learn More About TEDˣ
          </span>

          <span className="absolute top-0 right-0 h-full flex items-center justify-center pr-3">
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </span>
        </button>
      </div>
    </section>
  )
}
