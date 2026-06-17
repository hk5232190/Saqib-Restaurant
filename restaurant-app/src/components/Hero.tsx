"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background HTML5 Video Player */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/assets/videos/hero-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay to make video darker and legible text */}
      <div className="absolute inset-0 z-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-2"
        >
          Welcome to Saqib Restaurant
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold mb-4 text-white tracking-[0.15em] leading-tight uppercase" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Symphony of <span className="text-primary italic font-normal">Flavors</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Where culinary artistry meets standard luxury. Indulge in an unforgettable sensory experience.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center pt-4"
        >
          <Link href="#experience">
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(13,62,38,0.3)", backgroundColor: "#1a5c3a" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand text-white font-bold rounded-lg transition-colors flex items-center justify-center uppercase tracking-widest text-sm cursor-pointer"
            >
              Explore the Experience
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
