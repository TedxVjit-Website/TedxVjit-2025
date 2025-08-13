'use client'


import { motion } from 'framer-motion'
import Image from 'next/image'
import Lottie from 'lottie-react'
import mtm from '../../public/animations/mtm background effect.json'
import rotate from '../../public/animations/Animation rotate.json'
import TypingText from '../components/TypingText'
import { Ticket } from 'lucide-react'
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.55,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 20,
    },
  },
};


export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden font-['Montserrat',sans-serif] text-white">

      {/* Background Image */}
      <Image
        src="/assets/6.png"
        alt="TEDxVJIT Hero"
        fill
        priority
        className="absolute inset-0 object-cover opacity-30 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-black/30 z-10" />

      {/* Lottie Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-25 mix-blend-screen">
        <Lottie
          animationData={rotate}
          loop
          autoplay
          className="w-full max-w-6xl"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-30 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        {/* Main Title */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold  tracking-tight leading-tight drop-shadow-[0_4px_30px_rgba(255,0,0,0.7)]"
        >
          <span className="text-red-600 ">TEDx</span>VJIT 2025
        </motion.h1>

        {/* Subtitle */}


        <TypingText
          prefix="Metamorphism"
          text=" — The Evolution of Thought. The Power of Change."
          className="mt-6 text-lg sm:text-xl font-extrabold md:text-3xl max-w-3xl text-white/90 leading-relaxed"
        />



        {/* CTA */}
        <motion.a
          variants={fadeUp}
          href="#register"
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 25px rgba(255, 0, 0, 0.6)",
            backgroundColor: "#b91c1c",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 rounded-full font-semibold bg-red-600 text-white transition-all duration-300 shadow-lg inline-flex items-center gap-2"
        >

          <Ticket size={20} strokeWidth={2.5} className="text-white" />
           Reserve Your Seat
        </motion.a>


      </motion.div>
    </section>
  )
}
