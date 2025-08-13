'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypingTextProps {
  prefix?: string
  text: string
  className?: string
  speed?: number
}

export default function TypingText({
  prefix = '',
  text,
  className = '',
  speed = 60,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0 }}
      className={className}
    >
      <span className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-red-700 animate-shimmer">
        {prefix}
      </span>{' '}
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.p>
  )
}
