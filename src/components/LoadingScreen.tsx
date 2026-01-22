'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Padding creates gap between text and circle */}
      <div className="relative flex items-center justify-center p-12 sm:p-14 md:p-16">
        
        {/* TEDx VJIT Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2
            className="text-lg sm:text-xl md:text-2xl tracking-tight"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            <span className="text-red-600 font-black">TED</span>
            <sup className="text-red-600 inline-block text-[0.65rem] sm:text-xs md:text-sm font-black">
              X
            </sup>
            <span className="text-white ml-2 sm:ml-2.5 md:ml-3">VJIT</span>
          </h2>
        </motion.div>

        {/* Rotating Loading Circle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* ✅ Circle now scales with wrapper size */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#E62B1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="120 180"
              strokeDashoffset="0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ transformOrigin: '50% 50%' }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
