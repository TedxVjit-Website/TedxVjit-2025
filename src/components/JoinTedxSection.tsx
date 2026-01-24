"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Users, Mic } from "lucide-react";

export default function JoinTedxSection() {
  return (
    <section
      id="join-tedx"
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Optimized Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Fewer, better-optimized gradient orbs */}
        <motion.div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-600/15 blur-[120px] rounded-full will-change-transform"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full will-change-transform"
          animate={{
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Static grid pattern for better performance */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Heading with enhanced styling */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col items-center mb-16 text-center relative"
      >
        
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl mb-4">
          Join <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent animate-gradient">TED<sup className="text-2xl md:text-3xl text-red-600">X</sup> VJIT</span>
        </h1>
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-6"
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <p className="text-gray-300 text-xl md:text-3xl font-light tracking-wide">
          <span className="text-white font-semibold">Metamorphosis:</span> The Journey of Becoming
        </p>
      </motion.div>

      {/* Event Info Cards with enhanced design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
      >
        <motion.div 
          className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-3 bg-red-600/20 rounded-xl group-hover:bg-red-600/30 transition-colors">
            <CalendarDays className="text-red-400 w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-wider">Event Date</span>
            <span className="text-white text-lg md:text-xl font-bold">
              31st January 2026
            </span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-3 bg-red-600/20 rounded-xl group-hover:bg-red-600/30 transition-colors">
            <MapPin className="text-red-400 w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs uppercase tracking-wider">Venue</span>
            <span className="text-white text-lg md:text-xl font-bold">
              VJIT Campus, Hyderabad
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content - Enhanced Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Registration Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-8 w-full"
        >

          {/* Attendee Registration Card */}
          <motion.div
            className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Users className="text-white w-7 h-7" />
                </div>
                <span className="text-xs text-white font-semibold px-3 py-1 bg-white/10 rounded-full">
                  Limited Seats
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Register as Attendee</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Be part of an inspiring community. Experience ideas worth spreading in an unforgettable atmosphere.
              </p>
              
              <motion.button
                onClick={() => window.open("https://vpulse.campx.in/vpulse/ums/public/form/68c93a448c6af42941ea051b", "_blank")}
                className="w-full bg-white text-black font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-white/30 transition-all duration-300 group/btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base">Book Your Seat</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Enhanced Persuasive Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-8 w-full"
        >
          {/* Main persuasive card */}
          <div className="relative bg-gradient-to-br from-red-900/30 via-black/60 to-black/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-red-800/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mb-6"
              >
                <h2 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent">
                    Be Part of the
                  </span>
                  <br />
                  <span className="text-red-500 text-5xl">Movement</span>
                </h2>
              </motion.div>
              
              <p className="text-gray-200 text-base leading-relaxed mb-6">
                Step into a space where <span className="text-white font-semibold">bold ideas</span>, powerful stories, and meaningful conversations converge to spark <span className="text-red-400 font-semibold">real change</span>.
              </p>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                At <span className="text-red-500 font-bold">TED<sup className="text-xs">x</sup> VJIT</span>, you become part of a global community driven by curiosity and purpose—whether you're taking the stage or watching from the audience.
              </p>
                    </div>
          </div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative bg-gradient-to-r from-red-600/20 via-yellow-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10 flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-6">
              <p className="text-center text-white font-semibold text-base">
                <span className="text-yellow-400">Don't miss out!</span> Secure your seat now for an unforgettable experience at TEDˣ VJIT
              </p>
            </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}