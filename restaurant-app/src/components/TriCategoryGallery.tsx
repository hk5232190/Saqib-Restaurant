"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// ╔══════════════════════════════════════════════════════════════════╗
// ║            📸  HOW TO SWAP GALLERY IMAGES                       ║
// ║                                                                  ║
// ║  1. Place your image files inside:                               ║
// ║        /public/images/gallery/                                   ║
// ║     e.g. public/images/gallery/ambiance-hall.jpg                ║
// ║                                                                  ║
// ║  2. In GALLERY_ITEMS below, find the item you want to change.   ║
// ║     Replace the `image:` URL with your local path:              ║
// ║        image: "/images/gallery/your-filename.jpg"               ║
// ║                                                                  ║
// ║  3. Save — Next.js hot-reloads automatically.                   ║
// ║                                                                  ║
// ║  Supported formats: .jpg  .jpeg  .png  .webp  .avif             ║
// ╚══════════════════════════════════════════════════════════════════╝

interface GalleryItem {
  id: number;
  category: "ambiance" | "moments" | "food";
  title: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Ambiance
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/ambiance-1.jpg". Place in /public/images/gallery/
  {
    id: 1,
    category: "ambiance",
    title: "Main Dining Room",
    description: "Reflecting elite grandeur with gold brass details, high arches, and natural stone.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/ambiance-2.jpg". Place in /public/images/gallery/
  {
    id: 2,
    category: "ambiance",
    title: "The Obsidian Lounge",
    description: "Warm glowing lights, rich mahogany wood textures, and plush leather seating.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/ambiance-3.jpg". Place in /public/images/gallery/
  {
    id: 3,
    category: "ambiance",
    title: "Panoramic Patio",
    description: "Open-air dining overlooking breath-taking city views and mountain horizons.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/ambiance-4.jpg". Place in /public/images/gallery/
  {
    id: 4,
    category: "ambiance",
    title: "VIP Mezzanine Suite",
    description: "Exclusive tables overlooking the grand hall, offering peak privacy and comfort.",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/ambiance-5.jpg". Place in /public/images/gallery/
  {
    id: 5,
    category: "ambiance",
    title: "The Wine Vault",
    description: "An intimate climate-controlled setting hosting private curated dinners.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/ambiance-6.jpg". Place in /public/images/gallery/
  {
    id: 6,
    category: "ambiance",
    title: "The Chef's Counter",
    description: "A front-row seat to culinary theater and hand-crafted delicacies.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
  },
  // Moments
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/moment-1.jpg". Place in /public/images/gallery/
  {
    id: 7,
    category: "moments",
    title: "Corporate Dinners",
    description: "Flawless executions of high-profile executive gatherings and corporate events.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/moment-2.jpg". Place in /public/images/gallery/
  {
    id: 8,
    category: "moments",
    title: "Birthday & Sparkler Bashes",
    description: "Creating warm, memorable milestones with custom setups and visual flair.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/moment-3.jpg". Place in /public/images/gallery/
  {
    id: 9,
    category: "moments",
    title: "Gala Celebrations",
    description: "Grand banquet events hosting massive families and milestone corporate lunches.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/moment-4.jpg". Place in /public/images/gallery/
  {
    id: 10,
    category: "moments",
    title: "Family Toasts",
    description: "A space where laughter echo and multi-generational feasts unite.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/moment-5.jpg". Place in /public/images/gallery/
  {
    id: 11,
    category: "moments",
    title: "Royal Buffet Catering",
    description: "Premium displays presenting traditional and global cuisines beautifully.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop",
  },
  // Food
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/food-1.jpg". Place in /public/images/gallery/
  {
    id: 12,
    category: "food",
    title: "Traditional Chapli Kebab",
    description: "Spicy beef patties shallow-fried in animal fat, seasoned with fresh pomegranate seeds.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/food-2.jpg". Place in /public/images/gallery/
  {
    id: 13,
    category: "food",
    title: "Swat Valley Pulao",
    description: "Fragrant, spiced beef broth rice with sweet carrots, raisins, and tender mutton.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/food-3.jpg". Place in /public/images/gallery/
  {
    id: 14,
    category: "food",
    title: "Mountain Mutton Karahi",
    description: "A classic northern wok of tender mutton cooked in tomatoes, ginger, and fresh green chilies.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/food-4.jpg". Place in /public/images/gallery/
  {
    id: 15,
    category: "food",
    title: "Swat River Trout — Grilled",
    description: "Freshly caught trout grilled with wild garlic and local valley herbs.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/food-5.jpg". Place in /public/images/gallery/
  {
    id: 16,
    category: "food",
    title: "Maize Roti & Raita Basket",
    description: "Traditional KPK unleavened corn bread served with cooling cucumber raita.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1000&auto=format&fit=crop",
  },
  // 📸 TO CHANGE: Replace the 'image' URL below with your file path.
  // Example: image: "/images/gallery/food-6.jpg". Place in /public/images/gallery/
  {
    id: 17,
    category: "food",
    title: "Sheer Khurma (Saffron Milk)",
    description: "Rich festive pudding simmered with dates, vermicelli, saffron, and crushed nuts.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop",
  },
];

type CategoryTab = "ambiance" | "moments" | "food";

export default function TriCategoryGallery() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("ambiance");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Filter items matching the tab
  const filteredItems = GALLERY_ITEMS.filter((item) => item.category === activeTab);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1;
    });
  };

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-brand text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
            Royal Visual Journey
          </span>
          <h1 
            className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Swat <span className="text-brand italic font-normal">Gallery</span>
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto font-light mt-4">
            Immerse yourself in our gorgeous views, custom celebrational events, and elite culinary offerings.
          </p>
          <div className="h-0.5 w-24 bg-brand mx-auto mt-6" />
        </div>

        {/* Dynamic Tab Bar */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full border border-stone-200 shadow-sm flex gap-2">
            {(["ambiance", "moments", "food"] as CategoryTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                className={`relative px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeTab === tab 
                    ? "text-white" 
                    : "text-stone-600 hover:text-foreground"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-brand rounded-full -z-10 shadow-[0_4px_12px_rgba(13,62,38,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="break-inside-avoid relative rounded-3xl overflow-hidden bg-white border border-stone-100 p-2 shadow-[0_4px_20px_rgba(0,0,0,0.01)] animate-pulse mb-6"
              >
                <div 
                  className="w-full bg-brand/15 rounded-2xl" 
                  style={{ height: idx % 3 === 0 ? "320px" : idx % 3 === 1 ? "240px" : "280px" }}
                />
              </div>
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.93, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.93, y: 15 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  onClick={() => setLightboxIndex(index)}
                  className="break-inside-avoid relative rounded-3xl overflow-hidden bg-white border border-stone-100 group cursor-pointer shadow-sm hover:shadow-stone-100/50 transition-all duration-500 mb-6"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Hover overlay details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-brand text-[10px] uppercase font-bold tracking-widest block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-serif text-white font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-stone-300 text-xs font-light line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-brand font-bold tracking-wider uppercase">
                        <ZoomIn size={14} />
                        <span>View Fullscreen</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

      </div>

      {/* Light-Themed Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FAF9F6]/95 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white text-foreground hover:text-brand shadow-md border border-stone-200 transition-colors z-51"
            >
              <X size={20} />
            </button>

            {/* Navigation Left */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 p-3 rounded-full bg-white text-foreground hover:text-brand shadow-md border border-stone-200 transition-colors z-51"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-2xl relative"
            >
              {/* Display Image */}
              <div className="relative aspect-[16/10] bg-stone-100 flex items-center justify-center overflow-hidden">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Label details */}
              <div className="p-8 border-t border-stone-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <span className="bg-brand/15 text-brand px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <span className="text-stone-400 text-xs">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2">
                  {filteredItems[lightboxIndex].title}
                </h2>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 p-3 rounded-full bg-white text-foreground hover:text-brand shadow-md border border-stone-200 transition-colors z-51"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
