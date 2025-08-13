
import { useState } from 'react'
import { motion } from 'framer-motion'

// Sample data—replace with your real gallery images/videos
const galleryItems = [
  { type: 'image', src: '/gallery/photo1.jpg', alt: 'Event 1' },
  { type: 'image', src: '/gallery/photo2.jpg', alt: 'Event 2' },
  { type: 'image', src: '/gallery/photo3.jpg', alt: 'Crowd' },
  // You can add { type: 'video', src: '/gallery/video1.mp4', alt: 'Video Event' } as needed
]

export default function GalleryGrid() {
  // Optional: For modal/lightbox
  const [selected, setSelected] = useState(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryItems.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => setSelected(item)}
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover group-hover:brightness-75 transition"
              loading="lazy"
            />
          ) : (
            <video
              src={item.src}
              controls={false}
              className="w-full h-64 object-cover group-hover:brightness-75 transition"
              aria-label={item.alt}
            />
          )}
          {/* Optional overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white text-lg font-semibold">View</span>
          </div>
        </motion.div>
      ))}

      {/* Optional: Simple Modal/Lightbox for viewing */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-3xl w-full p-4">
            {selected.type === 'image' ? (
              <img src={selected.src} alt={selected.alt} className="w-full rounded-lg" />
            ) : (
              <video src={selected.src} controls className="w-full rounded-lg" />
            )}
            <p className="text-white text-center mt-4">{selected.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
