"use client";

import { motion } from "framer-motion";

export default function ChefStory() {
  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=1587&auto=format&fit=crop"
                alt="Head Chef at Saqib Restaurant"
                className="w-full h-[560px] object-cover"
                loading="lazy"
              />
              {/* Amber gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
              {/* Chef name badge */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm border border-stone-100 rounded-2xl px-6 py-4 shadow-sm">
                  <p className="text-brand text-xs uppercase tracking-widest font-semibold mb-1">Head Chef</p>
                  <p className="text-foreground text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Ahmad Karimi
                  </p>
                  <p className="text-muted text-sm">15 Years · 3 Michelin Stars</p>
                </div>
              </div>
            </div>

            {/* Decorative amber glow */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right: Story text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-brand text-sm uppercase tracking-widest font-semibold mb-4">
                Our Philosophy
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Kitchen Built on{" "}
                <span className="text-brand italic">Passion</span>
              </h2>
              <div className="h-1 w-16 bg-brand rounded mb-8" />
            </div>

            <p className="text-stone-600 text-lg leading-relaxed">
              Every dish at Saqib Restaurant begins with a single question: <em className="text-brand">"What story does this plate tell?"</em> 
              Chef Ahmad Karimi trained across Lahore, Istanbul, and London before returning to Pakistan with a singular vision — to craft a dining experience that honors local ingredients with world-class technique.
            </p>

            <p className="text-muted text-base leading-relaxed">
              Our menu changes seasonally. Our sourcing is local. Our commitment to zero-compromise quality is permanent. Each signature dish is a result of hundreds of iterations, late nights, and a relentless pursuit of the extraordinary.
            </p>

            {/* Signature stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: "12+", label: "Years of Craft" },
                { value: "48", label: "Signature Dishes" },
                { value: "98%", label: "Guest Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-stone-100 rounded-2xl py-6 px-4 bg-white shadow-sm hover:border-stone-200 hover:shadow-stone-100/50 transition-all">
                  <p className="text-3xl font-bold text-brand mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-muted text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Chef's signature */}
            <div className="border-t border-border pt-6">
              <p className="text-muted text-sm italic mb-2">Chef's personal signature</p>
              <p
                className="text-brand text-4xl"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                Ahmad K.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
