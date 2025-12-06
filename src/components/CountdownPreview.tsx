"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedNumberCountdown from "@/components/countdown-number";

const CountdownPreview = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8"
      style={{
        background: "radial-gradient(circle at 50% 40%, #ff1b3c 0%, #1a0a0a 100%)",
      }}
    >
      {/* Event Date as Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-extrabold text-white text-center tracking-tight 
          drop-shadow-xl
        "
      >
        31 JANUARY 2026
      </motion.h1>

      {/* Countdown Timer */}
      <div className="mt-4 w-full flex justify-center">
        <AnimatedNumberCountdown
          endDate={new Date("2026-01-31T23:59:59")}
          className="max-w-4xl w-full"
        />
      </div>
    </section>
  );
};

export default CountdownPreview;
