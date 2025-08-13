'use client'

import { useState } from 'react'
import Image from 'next/image'

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
      twitter: string;
      website: string;
    };
  };
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Speaker Card */}
      <div
        className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-2 hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Image Container */}
        <div className="relative mb-4 sm:mb-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto relative">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover rounded-full border-4 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"
              sizes="(max-width: 640px) 96px, 128px"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center relative z-10">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
            {speaker.name}
          </h3>
          <p className="text-red-400 font-semibold text-xs sm:text-sm mb-1">
            {speaker.title}
          </p>
          <p className="text-gray-400 text-xs mb-2 sm:mb-3">
            {speaker.company}
          </p>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {speaker.bio}
          </p>
          
          {/* Expertise Tags */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-3 sm:mt-4">
            {speaker.expertise.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Click Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-gray-400">Click for details</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative mb-4 sm:mb-6">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover rounded-full border-4 border-red-500"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {speaker.name}
                </h2>
                <p className="text-lg sm:text-xl text-red-400 font-semibold mb-1">
                  {speaker.title}
                </p>
                <p className="text-gray-400 text-base sm:text-lg">
                  {speaker.company}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">About</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  {speaker.description}
                </p>
              </div>

              {/* Expertise */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {speaker.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500/20 text-red-400 text-xs sm:text-sm rounded-full border border-red-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Connect</h3>
                <div className="flex justify-center gap-3 sm:gap-4">
                  <a
                    href={speaker.social.linkedin}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 hover:bg-red-600/40 rounded-full flex items-center justify-center border border-red-500/30 hover:border-red-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={speaker.social.twitter}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 hover:bg-red-600/40 rounded-full flex items-center justify-center border border-red-500/30 hover:border-red-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={speaker.social.website}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 hover:bg-red-600/40 rounded-full flex items-center justify-center border border-red-500/30 hover:border-red-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
