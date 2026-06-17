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
    avatar: "https://i.pravatar.cc/80?img=47",
    dish: "Mutton Karahi & Peshawari Naan",
  },
  {
    id: 2,
    name: "Khushal Khan",
    location: "Matta, Swat",
    rating: 5,
    text: "The slow-cooked Mountain Lamb Sajji is exceptionally flavorful. Juicy, perfectly seasoned, and roasted to absolute perfection over pine wood embers.",
    avatar: "https://i.pravatar.cc/80?img=11",
    dish: "Mountain Lamb Sajji",
  },
  {
    id: 3,
    name: "Zainab Bibi",
    location: "Kalam, Swat",
    rating: 5,
    text: "We ordered the fresh Swat River Trout ceviche and Karak Chai. Everything was prepared fresh and tasted wonderful under the cool Swat night sky.",
    avatar: "https://i.pravatar.cc/80?img=45",
    dish: "Swat River Trout Ceviche",
  },
  {
    id: 4,
    name: "Asadullah Jan",
    location: "Peshawar",
    rating: 5,
    text: "Being from Peshawar, I appreciate good Kabuli Pulao. The version here is outstanding—soft raisins, perfectly caramelized carrots, and fall-off-the-bone meat.",
    avatar: "https://i.pravatar.cc/80?img=15",
    dish: "Kabuli Pulao",
  },
  {
    id: 5,
    name: "Jawaria Bibi",
    location: "Matta Swat",
    rating: 5,
    text: "An elegant, premium retreat with authentic flavors. The Peshawari Qehwa finished with green cardamom was the perfect end to our feast.",
    avatar: "https://i.pravatar.cc/80?img=49",
    dish: "Peshawari Qehwa",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-primary text-primary" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm uppercase tracking-widest font-semibold mb-4">
            What Our Guests Say
          </p>
          <h2
            className="text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reviews of <span className="text-brand italic">Saqib Restaurant</span>
          </h2>
          <div className="h-1 w-16 bg-brand rounded mx-auto" />
        </motion.div>

        {/* Horizontal scrolling carousel */}
        <div className="relative">
          {/* Fade masks on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-80 bg-white border border-stone-100 shadow-sm hover:shadow-stone-100/50 hover:border-stone-200 rounded-3xl p-8 snap-start transition-all duration-300 relative"
              >
                {/* Quote icon */}
                <Quote className="text-brand/30 absolute top-6 right-6" size={40} />

                {/* Stars */}
                <StarRating count={review.rating} />

                {/* Review text */}
                <p className="text-stone-600 text-sm leading-relaxed mt-4 mb-6">
                  "{review.text}"
                </p>

                {/* Dish tag */}
                <div className="inline-block bg-brand/10 border border-brand/20 text-brand text-xs px-3 py-1 rounded-full mb-6">
                  ✦ {review.dish}
                </div>

                {/* Reviewer */}
                <div className="flex items-center gap-3 border-t border-border pt-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand/40"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-foreground font-semibold text-sm">{review.name}</p>
                    <p className="text-muted text-xs">{review.location}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
                      <Star size={14} className="fill-primary text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Aggregate rating summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 bg-white shadow-sm border border-stone-100 rounded-2xl px-10 py-6 max-w-lg mx-auto"
        >
          <div className="text-center">
            <p className="text-5xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>5.0</p>
            <StarRating count={5} />
            <p className="text-muted text-xs mt-1">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-stone-100 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">2,400+</p>
            <p className="text-muted text-xs mt-1">Happy Diners</p>
          </div>
          <div className="h-12 w-px bg-stone-100 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">98%</p>
            <p className="text-muted text-xs mt-1">Would Return</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
