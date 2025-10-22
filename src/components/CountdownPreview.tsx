"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedNumberCountdown from "@/components/countdown-number";

const CountdownPreview = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8"
      style={{
        background: "radial-gradient(circle at 50% 40%, #ff1b3c 0%, #1a0a0a 100%)",
      }}
    >
      {/* Coming Soon Text */}
      <motion.h1
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white text-center drop-shadow-2xl tracking-wider"
      >
        COMING SOON
      </motion.h1>
    </section>
  );
};

export default CountdownPreview;
