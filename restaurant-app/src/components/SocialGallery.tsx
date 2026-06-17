"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1064&auto=format&fit=crop",
    likes: "4.2K",
    comments: "186",
    caption: "Where art meets appetite ✨",
    tag: "#SaqibDining",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop",
    likes: "6.8K",
    comments: "342",
    caption: "Golden hour, golden plates 🍂",
    tag: "#SaqibMenu",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop",
    likes: "3.9K",
    comments: "217",
    caption: "Every table tells a story 🕯️",
    tag: "#SaqibExperience",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1587&auto=format&fit=crop",
    likes: "5.1K",
    comments: "291",
    caption: "Crafted with love, served with passion 🌿",
    tag: "#ChefAhmad",
  },
];

export default function SocialGallery() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-brand" size={24} />
            <p className="text-brand text-sm uppercase tracking-widest font-semibold">
              @SaqibRestaurant
            </p>
          </div>
          <h2
            className="text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Our <span className="text-brand italic">Gallery</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Follow our story — one stunning plate at a time.
          </p>
          <div className="h-1 w-16 bg-brand rounded mx-auto mt-6" />
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-400 flex flex-col items-center justify-center">
                {/* Instagram icon pulse */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Instagram className="text-brand mb-3" size={32} />
                </motion.div>

                {/* Likes and comments */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-6 mb-4">
                  <div className="flex items-center gap-1 text-foreground text-sm font-semibold">
                    <Heart size={16} className="fill-primary text-primary" />
                    {item.likes}
                  </div>
                  <div className="flex items-center gap-1 text-foreground text-sm font-semibold">
                    <MessageCircle size={16} />
                    {item.comments}
                  </div>
                </div>

                {/* Caption */}
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground text-xs text-center px-3">
                  {item.caption}
                </p>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand text-xs mt-1">
                  {item.tag}
                </p>
              </div>

              {/* Always-visible tag chip */}
              <div className="absolute top-3 left-3 bg-background/70 backdrop-blur-sm border border-border rounded-full px-2 py-1 opacity-0 group-hover:opacity-0">
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand border-2 border-brand text-white font-bold rounded-full hover:bg-[#0d5429] hover:border-[#0d5429] transition-all uppercase tracking-wide"
          >
            <Instagram size={20} />
            Follow @SaqibRestaurant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
