"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    number: "01",
    course: "Starter",
    name: "Swat River Trout Ceviche",
    description:
      "Freshly caught Swat river trout, marinated in mountain herbs, wild lemon, and chilled mint — served on a carved river-stone plate.",
  },
  {
    number: "02",
    course: "Palate Cleanser",
    name: "Himalayan Rose Sherbet",
    description:
      "Hand-harvested rose petals from the Swat Valley infused in chilled spring water with cardamom and a touch of wild honey.",
  },
  {
    number: "03",
    course: "Main Course",
    name: "Mountain Lamb Sajji",
    description:
      "Slow-roasted whole lamb leg marinated 24 hours in saffron, Swat spices, and wild garlic. Served with hand-ground chutney and maize roti.",
  },
  {
    number: "04",
    course: "Dessert",
    name: "Sheer Khurma & Dry Fruits",
    description:
      "Warm milk simmered with Swat saffron, crushed pistachios, and rose-soaked vermicelli — finished with premium dry fruits from Matta bazaar.",
  },
];

export default function TastingMenu() {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="eyebrow block mb-4">A Journey Through Swat Valley</span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-foreground mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Chef's Curated{" "}
            <em className="italic font-light text-brand">Tasting Menu</em>
          </h2>
          <span className="gold-divider" />
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[520px] lg:h-[680px] w-full rounded-lg overflow-hidden shadow-luxury group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
              alt="Swat Valley Tasting Menu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold text-[10px] uppercase tracking-[0.25em] font-semibold">Signature Dish</span>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Mountain Lamb Sajji
              </h3>
              <p className="text-white/60 text-sm font-light">
                Slow-roasted over mountain wood embers, Swat-style.
              </p>
            </div>
          </motion.div>

          {/* Right: Course List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-10"
          >
            {courses.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className="flex gap-6 items-start pb-8 border-b border-[#E5E5E5] last:border-b-0 last:pb-0 group"
              >
                {/* Gold Number */}
                <div
                  className="text-[2.5rem] font-light text-gold/30 leading-none select-none group-hover:text-gold/60 transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.number}
                </div>
                <div className="flex-1 pt-1">
                  <span className="text-muted text-[10px] uppercase tracking-[0.22em] font-semibold block mb-1.5">
                    {item.course}
                  </span>
                  <h3
                    className="text-xl font-bold text-foreground mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-muted text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <Link href="/menu">
              <motion.div
                whileHover={{ x: 6 }}
                className="inline-flex items-center gap-3 text-brand text-[11px] font-bold uppercase tracking-[0.2em] cursor-pointer pt-2 group"
              >
                View Full Menu
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
