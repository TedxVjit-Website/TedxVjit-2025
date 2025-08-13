'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Metamorphism
      </motion.h2>
      <motion.p
        className="max-w-4xl text-lg leading-relaxed text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Metamorphism is the geological process of transformation of rocks through heat, pressure, and chemical activity.
        Similarly, TEDx VJIT 2025 embraces transformation of ideas into impactful actions.
      </motion.p>
      {/* Optionally add an SVG or Lottie animation here */}
    </section>
  )
}
