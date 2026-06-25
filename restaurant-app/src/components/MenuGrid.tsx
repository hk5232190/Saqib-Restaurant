"use client";

import React, { useState, useEffect } from "react";
import { Check, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { MENU_DATA, type Category, type MenuItem } from "@/data/menu";


const CATEGORIES: Category[] = ["Breakfast", "Muttons", "Chickens", "Fishes", "Rices", "Platters", "Vegetables", "Drinks", "Chai"];

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Breakfast");
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredMenu = MENU_DATA.filter((item) => item.category === activeCategory);

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
    <section id="menu" className="py-24 bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"
      >
        <div className="text-center mb-14">
          <span className="eyebrow block mb-4">Gourmet Mountain Dining</span>
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-foreground mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Saqib Restaurant{" "}
            <em className="italic font-light text-brand">Menu</em>
          </h2>
          <span className="gold-divider" style={{ marginBottom: "2.5rem" }} />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  if (activeCategory !== category) {
                    setIsLoading(true);
                    setActiveCategory(category);
                    setTimeout(() => { setIsLoading(false); }, 350);
                  }
                }}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] rounded-sm transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-gold border-gold text-black shadow-gold"
                    : "bg-white border-[#E5E5E5] text-muted hover:border-gold/60 hover:text-brand"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4 min-h-[50vh]">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-md overflow-hidden border border-[#E5E5E5] animate-pulse shadow-luxury flex flex-col h-[440px]">
                <div className="relative h-52 bg-brand/5" />
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex justify-between items-start gap-4">
                    <div className="h-5 bg-brand/8 rounded w-2/3" />
                    <div className="h-5 bg-gold/20 rounded w-1/4" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="h-3 bg-brand/5 rounded w-full" />
                    <div className="h-3 bg-brand/5 rounded w-5/6" />
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="h-11 bg-brand/8 rounded-sm w-full" />
                </div>
              </div>
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredMenu.map((item, idx) => {
                const isAdded = addedIds.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: 20 }}
                    transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
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
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </section>
  );
}
