import GalleryGrid from '../../components/GalleryGrid'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in"
          >
            Event
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Gallery
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1"
          >
            Relive the inspiring moments, powerful speeches, and unforgettable experiences 
            from our TEDx events through this curated collection of memories.
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 animate-fade-in-delay-2"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Captured Moments
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Event Highlights
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Visual Stories
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </div>
  )
}
