"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

// 🔹 Dynamic imports (preloadable)
const Hero = dynamic(() => import("../components/Hero"), { ssr: false })
const AboutSection = dynamic(() => import("../components/AboutSection"))
const SpeakersPreview = dynamic(() => import("../components/SpeakersPreview"))
const SchedulePreview = dynamic(() => import("../components/SchedulePreview"))
const PreviousPreview = dynamic(() => import("../components/PreviousPreview"))
const CountdownPreview = dynamic(() => import("@/components/CountdownPreview"))
const SponsorsPreview = dynamic(() => import("@/components/SponsorsPreview"))
const MapSection = dynamic(() => import("@/components/MapSection"))
const JoinTedxSection = dynamic(() => import("../components/JoinTedxSection"))

import InstagramModal from "../components/InstagramModal"
import LoadingScreen from "../components/LoadingScreen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let mounted = true

    const preloadApp = async () => {
      /* -------------------------------------------
         1️⃣ Preload critical components
      ------------------------------------------- */
      await Promise.all([
        import("../components/Hero"),
        import("../components/AboutSection"),
        import("../components/SpeakersPreview"),
        import("../components/SchedulePreview"),
      ])

      /* -------------------------------------------
         2️⃣ Preload critical images
      ------------------------------------------- */
      const images = [
        "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Core%20Images/G-images-2.JPG?updatedAt=1759593304566",
      ]

      await Promise.all(
        images.map(
          src =>
            new Promise(resolve => {
              const img = new Image()
              img.src = src
              img.onload = resolve
              img.onerror = resolve
            })
        )
      )

      /* -------------------------------------------
         3️⃣ Minimum loader duration (UX)
      ------------------------------------------- */
      await new Promise(res => setTimeout(res, 1000))

      if (mounted) setIsLoading(false)
    }

    preloadApp()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      {/* 🔴 LOADING SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* 🟢 MAIN CONTENT */}
      {!isLoading && (
        <>
          <InstagramModal
            open={showModal}
            onClose={() => setShowModal(false)}
          />

          {/* Above-the-fold */}
          <Hero />
          <AboutSection />

          {/* Mid sections */}
          <SpeakersPreview />
          <SchedulePreview />
          <PreviousPreview />

          {/* Below-the-fold */}
          <CountdownPreview />
          <JoinTedxSection />
          <SponsorsPreview />
          <MapSection />
        </>
      )}
    </>
  )
}
