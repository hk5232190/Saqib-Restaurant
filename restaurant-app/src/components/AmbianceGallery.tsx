"use client";

import React from "react";
import { motion } from "framer-motion";

interface AmbianceItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const AMBIANCE_ITEMS: AmbianceItem[] = [
  {
    id: 1,
    title: "The Obsidian Lounge",
    subtitle: "Sophisticated mood lighting, plush leather seating, and curated jazz. Perfect for pre-dinner aperitifs.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Chef's Table",
    subtitle: "Front-row seats to culinary theater. Interact directly with the chefs preparing your tasting menu.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Main Dining Room",
    subtitle: "A soaring ceiling layout accented with gold brass and natural stone, reflecting elite grandeur.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "VIP Mezzanine",
    subtitle: "Overlooking the main dining hall, offering complete privacy and dedicated sommelier service.",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Patio Bar",
    subtitle: "An open-air garden terrace setting featuring fire pits and custom botanical mocktails.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "The Wine Cellar",
    subtitle: "A climate-controlled vault containing rare vintages and premium reserved selections.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function AmbianceGallery() {
  return (
    <section className="py-32 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-brand text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
            Explore the Physical Vibe
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Ambiance <span className="text-brand italic font-normal">Gallery</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto font-light mt-4">
            A visual journey through the curated spaces of Saqib Restaurant.
          </p>
          <div className="h-0.5 w-24 bg-brand mx-auto mt-6" />
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {AMBIANCE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-border/60 bg-surface group cursor-pointer"
            >
              {/* Dynamic Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Backdrop Blur Hover Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-background/60 backdrop-blur-md flex flex-col justify-end p-8 z-25 opacity-0 transition-opacity duration-300"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="space-y-2"
                >
                  <span className="text-brand text-xs uppercase tracking-widest font-semibold">
                    {item.id % 2 === 0 ? "Exclusive Space" : "Signature Vibe"}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground font-serif">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
