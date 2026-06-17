"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, Leaf, Star, ArrowRight, Wind } from "lucide-react";

const STATS = [
  { value: "8+", label: "Years in the Valley", icon: Mountain },
  { value: "32", label: "Swat Signature Dishes", icon: Leaf },
  { value: "99%", label: "Guest Satisfaction", icon: Star },
];

const VALUES = [
  {
    icon: Mountain,
    title: "Mountain Sourced",
    desc: "Every ingredient is hand-selected from the fertile valleys and rivers of Swat — trout pulled fresh daily, herbs foraged at dawn.",
  },
  {
    icon: Leaf,
    title: "Rooted in Tradition",
    desc: "Our recipes trace back generations of KPK hospitality. We honor the Pashtun culinary legacy with modern precision and care.",
  },
  {
    icon: Wind,
    title: "Dining with a View",
    desc: "Set against the towering Hindukush peaks and the silver shimmer of the Swat River, every meal is a feast for the eyes too.",
  },
];

export default function AboutPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#FAF9F6] min-h-screen py-16 animate-pulse">
        {/* Hero split skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="h-[50vh] bg-brand/15 rounded-3xl w-full" />
          <div className="space-y-6 max-w-lg">
            <div className="h-4 bg-brand/10 rounded w-1/4" />
            <div className="h-12 bg-brand/20 rounded w-3/4" />
            <div className="h-1 bg-brand/15 rounded w-16" />
            <div className="space-y-3">
              <div className="h-4 bg-brand/10 rounded w-full" />
              <div className="h-4 bg-brand/10 rounded w-full" />
              <div className="h-4 bg-brand/10 rounded w-5/6" />
            </div>
            <div className="h-12 bg-brand/20 rounded-xl w-40 mt-8" />
          </div>
        </div>

        {/* Stats skeleton */}
        <div className="border-y border-[#E8E4DC] py-12 bg-white mt-12">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand/10" />
                <div className="h-8 bg-brand/20 rounded w-1/3" />
                <div className="h-3 bg-brand/10 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6]">

      {/* ── HERO SPLIT ── */}
      <section className="min-h-[92vh] grid grid-cols-1 lg:grid-cols-2">

        {/* Left: Large cinematic image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[55vh] lg:h-auto overflow-hidden"
        >
          <img
            src="/assets/images/matta.jpg"
            alt="Swat Valley mountain dining landscape"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Warm golden vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAF9F6]/60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent lg:hidden" />

          {/* Floating location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm border border-[#E8E4DC] rounded-2xl px-6 py-4 shadow-sm"
          >
            <p className="text-brand text-[10px] uppercase tracking-widest font-bold mb-1">Our Home</p>
            <p className="text-foreground text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Matta, Swat Valley
            </p>
            <p className="text-stone-600 text-xs mt-0.5">KPK, Pakistan · Est. 2016</p>
          </motion.div>
        </motion.div>

        {/* Right: Editorial text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center px-8 sm:px-16 lg:px-20 py-16 lg:py-24"
        >
          <div className="max-w-lg">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-brand text-xs uppercase tracking-[0.3em] font-semibold block mb-6"
            >
              Our Story
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where the{" "}
              <span className="text-brand italic font-normal">Mountains</span>{" "}
              Feed the Soul
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="h-0.5 w-16 bg-brand mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="text-stone-700 text-lg leading-relaxed mb-6 font-light"
            >
              Nestled in the emerald-green valley of Matta, Swat — where glacial rivers run clear 
              and the air carries the fragrance of pine — our restaurant was born from a singular 
              belief: <em className="text-brand not-italic font-medium">the finest food comes from the finest land.</em>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.88, duration: 0.7 }}
              className="text-stone-600 text-base leading-relaxed mb-10 font-light"
            >
              Every dish we serve is a love letter to Swat Valley — its rivers gifting us 
              golden trout, its hillsides offering wild herbs, and its people sharing 
              centuries-old Pashtun recipes that we are honoured to preserve and elevate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link href="/book">
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(13,62,38,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white font-bold rounded-xl uppercase tracking-widest text-sm cursor-pointer shadow-[0_4px_20px_rgba(13,62,38,0.25)]"
                >
                  Reserve a Table <ArrowRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-16 bg-white border-y border-[#E8E4DC]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {STATS.map(({ value, label, icon: Icon }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                <Icon size={22} className="text-brand" />
              </div>
              <p className="text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                {value}
              </p>
              <p className="text-stone-600 text-xs uppercase tracking-widest font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── VALUES GRID ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
            What Defines Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Swat{" "}
            <span className="text-brand italic font-normal">Philosophy</span>
          </h2>
          <div className="h-0.5 w-20 bg-brand mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-10 border border-stone-100 hover:border-stone-200 hover:shadow-stone-100/50 shadow-sm transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20 mb-6">
                <Icon size={26} className="text-brand" />
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FULL-WIDTH SCENIC QUOTE ── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop"
          alt="Swat Valley peaks"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-[#FAF9F6]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
        >
          <span className="text-brand text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>"</span>
          <p
            className="text-2xl md:text-3xl text-foreground font-light leading-relaxed mt-2 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            In Swat, the mountains don't just surround you —
            they become part of every bite, every breath,
            every memory made at our table.
          </p>
          <p className="text-brand text-sm uppercase tracking-widest font-bold">
            — The Swat Restaurant, Matta
          </p>
        </motion.div>
      </section>

      {/* ── CHEF SECTION ── */}
      <section className="py-24 bg-white border-t border-[#E8E4DC]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=1587&auto=format&fit=crop"
                alt="Head Chef at Swat Restaurant"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm border border-stone-100 rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-brand text-[10px] uppercase tracking-widest font-semibold mb-1">Head Chef</p>
              <p className="text-foreground text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ahmad Karimi
              </p>
              <p className="text-stone-600 text-sm">15 Years · KPK Culinary Heritage</p>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand/8 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="text-brand text-xs uppercase tracking-widest font-semibold">Meet Our Chef</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Kitchen Built on{" "}
              <span className="text-brand italic">Passion</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand" />
            <p className="text-stone-700 text-base leading-relaxed font-light">
              Chef Ahmad Karimi grew up in the Swat Valley, learning to cook beside the river 
              banks and mountain fires. After training in Lahore and Istanbul, he returned home 
              with one mission — to show the world that KPK cuisine is among the finest on earth.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Every dish is a result of his relentless pursuit of perfection: locally sourced, 
              seasonally changing, and always deeply rooted in the traditions he grew up with.
            </p>
            <div
              className="text-brand text-4xl pt-2"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              Ahmad K.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
