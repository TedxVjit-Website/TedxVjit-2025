"use client"

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SpeakersPreview from '../components/SpeakersPreview'
import LoadingScreen from '../components/LoadingScreen'

// Dynamic imports only for sections far below the fold
const SchedulePreview = dynamic(() => import('../components/SchedulePreview'), { ssr: false })
const PreviousPreview = dynamic(() => import('../components/PreviousPreview'), { ssr: false })
const CountdownPreview = dynamic(() => import('@/components/CountdownPreview'), { ssr: false })
const JoinTedxSection = dynamic(() => import('../components/JoinTedxSection'), { ssr: false })
const SponsorsPreview = dynamic(() => import('@/components/SponsorsPreview'), { ssr: false })
const MapSection = dynamic(() => import('@/components/MapSection'), { ssr: false })
const InstagramModal = dynamic(() => import('../components/InstagramModal'), { ssr: false })

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reveal site faster to avoid scroll-stutter during hydration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('source') === 'card') {
        setShowModal(true)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      <div className={isLoading ? 'fixed inset-0 overflow-hidden' : 'visible'}>
        <InstagramModal open={showModal} onClose={() => setShowModal(false)} />
        <Hero />
        
        {/* AboutSection and SpeakersPreview are now pre-mounted to prevent scrolling pauses */}
        <div className="relative">
          <AboutSection />
          <SpeakersPreview />
          
          <SchedulePreview />
          <PreviousPreview />
          <CountdownPreview />
          <JoinTedxSection />
          <SponsorsPreview />
          <MapSection />
        </div>
      </div>
    </>
  )
}


