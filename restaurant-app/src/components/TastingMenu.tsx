"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TastingMenu() {
  const courses = [
    {
      course: "Starter",
      name: "Swat River Trout Ceviche",
      description:
        "Freshly caught Swat river trout, marinated in mountain herbs, wild lemon, and chilled mint — served on a carved river-stone plate.",
    },
    {
      course: "Palate Cleanser",
      name: "Himalayan Rose Sherbet",
      description:
        "Hand-harvested rose petals from the Swat Valley infused in chilled spring water with cardamom and a touch of wild honey.",
    },
    {
      course: "Main Course",
      name: "Mountain Lamb Sajji",
      description:
        "Slow-roasted whole lamb leg marinated 24 hours in saffron, Swat spices, and wild garlic. Served with hand-ground chutney and maize roti.",
    },
    {
      course: "Dessert",
      name: "Sheer Khurma & Dry Fruits",
      description:
        "Warm milk simmered with Swat saffron, crushed pistachios, and rose-soaked vermicelli — finished with premium dry fruits from Matta bazaar.",
    },
  ];

  return (
    <section id="experience" className="py-32 bg-background border-t border-border/40">
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
            A Journey Through Swat Valley
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Chef's Curated{" "}
            <span className="text-brand italic font-normal">Tasting Menu</span>
          </h2>
          <div className="h-0.5 w-24 bg-brand mx-auto mt-6" />
        </motion.div>

        {/* Split Screen Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] lg:h-[700px] w-full rounded-2xl overflow-hidden border border-border shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
              alt="Swat Valley Tasting Menu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <span className="text-brand text-xs uppercase tracking-widest font-semibold">Signature Dish</span>
              <h3 className="text-2xl font-bold text-white mt-1 font-serif">Mountain Lamb Sajji</h3>
              <p className="text-stone-300 text-sm mt-2 font-light">
                Slow-roasted over mountain wood embers, Swat-style.
              </p>
            </div>
          </motion.div>

          {/* Right: Course Listing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              {courses.map((item, idx) => (
                <div key={idx} className="border-b border-border/40 pb-6 last:border-b-0 last:pb-0">
                  <span className="text-brand/70 text-xs uppercase tracking-[0.2em] font-medium block mb-1">
                    {item.course}
                  </span>
                  <h3 className="text-xl font-bold text-foreground tracking-wide">{item.name}</h3>
                  <p className="text-muted text-sm mt-2 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
