"use client";

import { motion } from "framer-motion";
import { Leaf, Award, ChefHat, Star } from "lucide-react";

const FEATURES = [
  {
    icon: Award,
    title: "Est. 2015",
    subtitle: "A Decade of Excellence",
  },
  {
    icon: Leaf,
    title: "100% Halal",
    subtitle: "Certified & Guaranteed",
  },
  {
    icon: ChefHat,
    title: "Authentic KPK",
    subtitle: "Traditional Recipes",
  },
  {
    icon: Star,
    title: "5.0 Rating",
    subtitle: "2,400+ Happy Guests",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-brand py-12 border-y border-brand-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 md:divide-x md:divide-white/10">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`flex flex-col items-center text-center px-4 md:px-8 py-2 ${i % 2 !== 0 ? 'border-l border-white/10 md:border-l-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-gold" />
                </div>
                <p
                  className="text-white text-xl font-bold tracking-wide mb-0.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {feat.title}
                </p>
                <p className="text-white/55 text-[10px] uppercase tracking-[0.18em] font-medium">
                  {feat.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
