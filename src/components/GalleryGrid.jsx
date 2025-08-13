'use client'

import { useState } from 'react'
import Image from 'next/image'

// Gallery data using actual images from public/gallery folder
const galleryItems = [
  { 
    id: 1,
    src: '/gallery/KVK_3568.JPG', 
    alt: 'TEDx Event Opening Ceremony',
    category: 'Event',
    description: 'The grand opening ceremony of our TEDx event with distinguished guests and speakers'
  },
  { 
    id: 2,
    src: '/gallery/_DSC8353.JPG', 
    alt: 'Speaker Presentation',
    category: 'Speakers',
    description: 'Inspiring speaker delivering a powerful talk to the engaged audience'
  },
  { 
    id: 3,
    src: '/gallery/_DSC7571.JPG', 
    alt: 'Audience Engagement',
    category: 'Crowd',
    description: 'Captivated audience members during an engaging presentation session'
  },
  { 
    id: 4,
    src: '/gallery/KVK_3670.JPG', 
    alt: 'Event Highlights',
    category: 'Highlights',
    description: 'Memorable moments and highlights captured during the TEDx event'
  }
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Gallery Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Event Gallery
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Relive the inspiring moments, powerful speeches, and unforgettable experiences from our TEDx events
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            onClick={() => setSelected(item)}
          >
            {/* Image Container */}
            <div className="relative h-96 overflow-hidden">
              {!imageErrors[item.id] ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  onError={() => handleImageError(item.id)}
                  priority={idx < 2} // Load first 2 images with priority
                />
              ) : (
                // Fallback placeholder when image fails to load
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Image not available</p>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
              
              {/* View Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                {item.alt}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-gray-900 border border-gray-700 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            
            {/* Image Info */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                  {selected.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {selected.alt}
              </h3>
              <p className="text-gray-300 text-lg">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
