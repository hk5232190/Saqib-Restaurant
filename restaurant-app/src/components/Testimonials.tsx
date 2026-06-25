"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Haseena Bibi",
    location: "Mingora, Swat",
    rating: 5,
    text: "The Mutton Karahi cooked in local butter and served with hot Peshawari naan is unmatched. The family ambiance here in Swat makes it a must-visit.",
    dish: "Mutton Karahi & Peshawari Naan",
  },
  {
    id: 2,
    name: "Khushal Khan",
    location: "Matta, Swat",
    rating: 5,
    text: "The slow-cooked Mountain Lamb Sajji is exceptionally flavorful. Juicy, perfectly seasoned, and roasted to absolute perfection over pine wood embers.",
    dish: "Mountain Lamb Sajji",
  },
  {
    id: 3,
    name: "Zainab Bibi",
    location: "Kalam, Swat",
    rating: 5,
    text: "We ordered the fresh Swat River Trout and Karak Chai. Everything was prepared fresh and tasted wonderful under the cool Swat night sky.",
    dish: "Swat River Trout",
  },
  {
    id: 4,
    name: "Asadullah Jan",
    location: "Peshawar",
    rating: 5,
    text: "Being from Peshawar, I appreciate good Kabuli Pulao. The version here is outstanding — soft raisins, perfectly caramelized carrots, fall-off-the-bone meat.",
    dish: "Kabuli Pulao",
  },
  {
    id: 5,
    name: "Jawaria Bibi",
    location: "Matta, Swat",
    rating: 5,
    text: "An elegant, premium retreat with authentic flavors. The Peshawari Qehwa finished with green cardamom was the perfect end to our feast.",
    dish: "Peshawari Qehwa",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export default function Testimonials() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow block mb-4">What Our Guests Say</span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-foreground mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reviews of{" "}
            <em className="italic font-light text-brand">Saqib Restaurant</em>
          </h2>
          <span className="gold-divider" />
        </motion.div>

        {/* Aggregate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14 bg-brand text-white rounded-md px-10 py-7 max-w-lg mx-auto"
        >
          <div className="text-center">
            <p
              className="text-5xl font-bold text-gold leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              5.0
            </p>
            <div className="flex gap-0.5 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mt-1">Average</p>
          </div>
          <div className="h-10 w-px bg-white/15 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2,400+</p>
            <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mt-1">Happy Diners</p>
          </div>
          <div className="h-10 w-px bg-white/15 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>98%</p>
            <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mt-1">Would Return</p>
          </div>
        </motion.div>

        {/* Review Cards — horizontal scroll */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 16px 50px rgba(0,0,0,0.10)" }}
                className="flex-shrink-0 w-80 bg-white border border-[#E5E5E5] rounded-md p-7 snap-start transition-all duration-300 relative shadow-luxury"
              >
                {/* Quote decoration */}
                <Quote className="text-brand/10 absolute top-5 right-5" size={48} />

                <StarRating count={review.rating} />

                <p className="text-[#444444] text-sm leading-relaxed mt-4 mb-5 font-light">
                  "{review.text}"
                </p>

                <div className="inline-flex items-center gap-1.5 bg-brand/8 border border-brand/15 text-brand text-[10px] px-3 py-1 rounded-full mb-5 uppercase tracking-[0.15em] font-medium">
                  ✦ {review.dish}
                </div>

                <div className="flex items-center gap-3 border-t border-[#E5E5E5] pt-5">
                  {/* Avatar initials */}
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {initials(review.name)}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{review.name}</p>
                    <p className="text-muted text-xs">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
