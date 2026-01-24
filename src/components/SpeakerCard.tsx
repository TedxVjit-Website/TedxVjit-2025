// Updated responsive version of SpeakerCard - Optimized for performance
'use client'

import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SpeakerCardProps {
  speaker: {
    id: number;
    name: string;
    title: string;
    company: string;
    image: string;
    bio: string;
    description: string;
    expertise: string[];
    social: {
      linkedin: string;
      instagram?: string;
      twitter: string;
      website: string;
    };
  };
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCardClick = () => {
    if (mounted && window.innerWidth < 768) {
      setActive(prev => !prev)
    }
  }

  if (!mounted) {
    return (
      <div className="w-full max-w-[260px] sm:max-w-[300px] h-[260px] sm:h-[300px] bg-gray-900 animate-pulse rounded-2xl" />
    )
  }

  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col justify-end relative group border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-[260px] sm:h-[300px] md:h-[340px] cursor-pointer bg-black/40 ${active ? 'active' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={speaker.image}
        alt={speaker.name}
        fill
        sizes="(max-width: 768px) 300px, 400px"
        className={`object-cover absolute inset-0 z-0 transition-opacity duration-500 grayscale ${active || hovered ? 'opacity-0' : 'opacity-100'}`}
        priority={speaker.id <= 3}
      />

      {/* Expanding Circle Image - Optimized scaling */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-4 sm:top-8 z-10 rounded-full overflow-hidden border-4 border-red-500 transition-all duration-500 will-change-transform ${
          active || hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36`}
      >
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 px-3 py-3 sm:py-4 flex flex-col items-center">
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent -z-10 rounded-b-2xl"></div>

        <motion.div
          className="relative z-10 w-full flex flex-col items-center"
          animate={{ y: active || hovered ? -10 : 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-500 mb-0.5 truncate w-full text-center">
            {speaker.name}
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-white font-medium mb-1 truncate w-full text-center">
            {speaker.title}
          </p>
        </motion.div>

        {mounted && (hovered || active) && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-row gap-4 w-full justify-center mt-2 text-lg sm:text-xl text-white"
          >
            {speaker.social?.linkedin && speaker.social.linkedin !== '#' && (
              <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <FaLinkedin />
              </a>
            )}
            {speaker.social?.instagram && speaker.social.instagram !== '#' && (
              <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <FaInstagram />
              </a>
            )}
            {speaker.social?.twitter && speaker.social.twitter !== '#' && (
              <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <FaTwitter />
              </a>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

