"use client";

import React from "react";
import { motion } from "framer-motion";

const AMBIANCE_ITEMS = [
  {
    id: 1,
    label: "Signature Vibe",
    title: "The Dining Hall",
    subtitle: "Sophisticated mood lighting, plush seating, and a warm Pashtun welcome in every corner.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    label: "Exclusive Space",
    title: "The Chef's Table",
    subtitle: "Front-row seats to culinary theater. Interact with the chefs preparing your tasting menu.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    label: "Grand Setting",
    title: "Main Dining Room",
    subtitle: "A soaring layout accented with natural wood and stone — reflecting the grandeur of Swat.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    label: "Exclusive Space",
    title: "VIP Mezzanine",
    subtitle: "Overlooking the main dining hall, offering complete privacy and personal service.",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    label: "Open Air",
    title: "The Garden Terrace",
    subtitle: "An open-air terrace under the Swat sky — the perfect setting for family gatherings.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    label: "Tradition",
    title: "The Traditional Corner",
    subtitle: "Inspired by Swati architecture — raw wood, clay walls, and the aroma of freshly brewed Qehwa.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function AmbianceGallery() {
  return (
    <section className="py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="eyebrow block mb-4">Explore the Physical Vibe</span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-foreground mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Ambiance{" "}
            <em className="italic font-light text-brand">Gallery</em>
          </h2>
          <p className="text-muted max-w-md mx-auto text-sm font-light mb-6">
            A visual journey through the curated spaces of Saqib Restaurant.
          </p>
          <span className="gold-divider" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {AMBIANCE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.09 }}
              className="break-inside-avoid relative rounded-md overflow-hidden shadow-luxury group cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Always-visible bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />

              {/* Bottom label (always visible) */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold text-[9px] uppercase tracking-[0.22em] font-semibold">{item.label}</span>
                <h3
                  className="text-white text-lg font-bold mt-0.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs font-light mt-1 max-h-12 sm:max-h-0 sm:group-hover:max-h-12 overflow-hidden transition-all duration-500 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
