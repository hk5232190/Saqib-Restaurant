"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MENU_DATA, type MenuItem } from "@/data/menu";

export default function TastingMenu() {
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState<number[]>([]);

  // Select 4 signature dishes from the menu dataset
  const signatureIds = [43, 28, 17, 27]; // Trout, Chicken Karahi, Mutton Tikka, Chapli Kebab
  const featuredItems = MENU_DATA.filter(item => signatureIds.includes(item.id));

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
    });
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 1200);
  };

  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="eyebrow block mb-4">A Journey Through Swat Valley</span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-foreground mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Signature{" "}
            <em className="italic font-light text-brand">Dishes</em>
          </h2>
          <span className="gold-divider" />
        </motion.div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredItems.map((item, idx) => {
            const isAdded = addedIds.includes(item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
                className="bg-white rounded-md overflow-hidden border border-[#E5E5E5] shadow-luxury transition-all duration-400 group flex flex-col h-[450px]"
              >
                <div className="flex-1">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-[#F7F7F7]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Dietary tags */}
                    <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end max-w-[70%] z-10">
                      {item.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/95 text-[8px] uppercase tracking-[0.15em] font-bold text-brand px-2.5 py-1 rounded-sm border border-brand/15 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Gradient bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3
                        className="text-[1.1rem] font-bold text-foreground leading-snug line-clamp-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.title}
                      </h3>
                      <span className="text-base font-bold text-gold whitespace-nowrap mt-0.5 flex-shrink-0">
                        Rs.{item.price.toLocaleString("en-PK")}
                      </span>
                    </div>
                    <p className="text-muted text-xs font-light line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="p-5 pt-0">
                  <motion.button
                    onClick={() => handleAddToCart(item)}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className={`w-full py-3 rounded-sm font-bold text-[10px] uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all duration-300 border ${
                      isAdded
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-brand border-brand text-white hover:bg-brand-dark"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isAdded ? (
                        <motion.span key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <Check size={13} /> Added!
                        </motion.span>
                      ) : (
                        <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <Plus size={13} /> Add to Cart
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/menu">
            <motion.div
              whileHover={{ x: 6 }}
              className="inline-flex items-center justify-center gap-3 text-brand text-[11px] font-bold uppercase tracking-[0.2em] cursor-pointer pt-2 group"
            >
              View Full Menu
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}
