"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.75)" }}
      >
        <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Multi-layer Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">

        {/* Gold eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
          className="flex flex-col items-center mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/70" />
            <span className="text-gold text-[10px] uppercase tracking-[0.35em] font-semibold">
              Matta · Swat Valley · Since 2015
            </span>
            <div className="h-px w-12 bg-gold/70" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: EASE }}
          className="text-[clamp(2.8rem,9vw,6.5rem)] font-bold text-white leading-[1.05] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
        >
          A Symphony of{" "}
          <span className="italic font-light" style={{ color: "#D4AF37" }}>
            Flavors
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: EASE }}
          className="text-[clamp(0.9rem,2vw,1.15rem)] text-white/75 mb-10 max-w-xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Where culinary artistry meets the spirit of Swat — an unforgettable
          dining experience rooted in authentic KPK tradition.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/menu">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-8 py-4 bg-gold text-black text-[11px] font-bold uppercase tracking-[0.18em] rounded-sm cursor-pointer transition-all duration-300"
            >
              Explore Our Menu
              <ArrowRight size={14} />
            </motion.div>
          </Link>

          <Link href="/book">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-8 py-4 bg-transparent border border-white/60 text-white text-[11px] font-bold uppercase tracking-[0.18em] rounded-sm cursor-pointer transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              <Calendar size={14} />
              Reserve a Table
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
          className="flex items-center justify-center gap-6 mt-12 text-white/50"
        >
          {["100% Halal", "Est. 2015", "Authentic KPK"].map((badge, i) => (
            <React.Fragment key={badge}>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{badge}</span>
              {i < 2 && <span className="text-gold/50 text-lg">·</span>}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-5 h-8 border border-white/25 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
