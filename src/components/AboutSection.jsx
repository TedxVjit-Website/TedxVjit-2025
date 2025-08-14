'use client'
import Image from 'next/image'
import { Sparkles, Target, Users, Lightbulb } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: "Transformative Ideas",
      description: "Where groundbreaking concepts evolve into revolutionary actions"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: "Innovation Hub",
      description: "A melting pot of creativity, technology, and human potential"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: "Community Catalyst",
      description: "Bringing together visionaries, creators, and change-makers"
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: "Future Vision",
      description: "Shaping tomorrow through today's boldest conversations"
    }
  ]

  return (
    <section className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent px-2 animate-fade-in-delay-1">
            About Metamorphism
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full animate-fade-in-delay-2" />
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4 animate-fade-in-delay-1">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-4 sm:mb-6">
            Just as metamorphism transforms rocks through heat, pressure, and chemical activity, 
            <span className="text-red-400 font-semibold"> TEDx VJIT 2025</span> embodies the 
            transformation of ideas into impactful actions.
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            We believe that every great change begins with a single thought, and every revolution 
            starts with a conversation. Join us as we explore the evolution of thought and harness 
            the power of change to shape a better tomorrow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 animate-fade-in-delay-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 group animate-fade-in-delay-3"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="p-2 sm:p-3 rounded-full bg-gray-800/50 group-hover:bg-red-500/20 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4 animate-fade-in-delay-3">
          <a
            href="#register"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 w-full sm:w-auto justify-center"
          >
            Be Part of the Transformation
            <Sparkles className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
