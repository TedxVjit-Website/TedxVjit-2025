'use client'
import { motion } from 'framer-motion'

export default function RegistrationCTA() {
  return (
    <section className="flex justify-center py-16 bg-gray-900">
      <motion.a
        href="/register"
        className="px-12 py-6 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 cursor-pointer select-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register Now
      </motion.a>
    </section>
  )
}
