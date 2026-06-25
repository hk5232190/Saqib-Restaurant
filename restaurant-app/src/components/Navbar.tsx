"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();
  
  const isDarkHero = ["/", "/about", "/contact"].includes(pathname);
  const iconColorClass = isScrolled 
    ? "text-brand hover:text-brand-dark" 
    : (isDarkHero ? "text-white hover:text-gold" : "text-brand hover:text-brand-dark");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.08)] border-b border-[#E5E5E5]"
            : "top-0 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gold/40 group-hover:border-gold/80 transition-colors duration-300">
                <Image
                  src="/assets/images/logo.png"
                  alt="Saqib Restaurant Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`text-[13px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${
                    isScrolled ? "text-brand" : "text-white"
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Saqib
                </span>
                <span
                  className={`text-[10px] tracking-[0.22em] uppercase font-light transition-colors duration-300 ${
                    isScrolled ? "text-muted" : "text-white/70"
                  }`}
                >
                  Restaurant
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[11px] font-semibold uppercase tracking-[0.18em] pb-1 transition-colors duration-300 ${
                      active
                        ? isScrolled ? "text-brand" : "text-gold"
                        : isScrolled
                        ? "text-foreground hover:text-brand"
                        : "text-white/90 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side: Reserve CTA + Cart */}
            <div className="hidden md:flex items-center gap-4">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 transition-colors duration-300 ${
                  isScrolled ? "text-foreground hover:text-brand" : "text-white/80 hover:text-gold"
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag size={19} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      className="absolute -top-0.5 -right-0.5 bg-gold text-black text-[9px] font-black rounded-full h-4 w-4 flex items-center justify-center"
                    >
                      {cartCount > 9 ? "9+" : cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Contact Us CTA */}
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 6px 24px rgba(15,81,50,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 bg-brand text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-sm cursor-pointer transition-colors duration-300 hover:bg-brand-dark"
                >
                  Contact Us
                </motion.div>
              </Link>
            </div>

            {/* Mobile: Cart + Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 transition-colors ${iconColorClass}`}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-gold text-black text-[9px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors ${iconColorClass}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-t border-[#E5E5E5] shadow-luxury overflow-hidden"
            >
              <div className="px-5 py-6 space-y-1">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-sm text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors ${
                          active
                            ? "bg-brand/8 text-brand border-l-2 border-gold pl-[14px]"
                            : "text-foreground hover:text-brand hover:bg-brand/5"
                        }`}
                      >
                        {link.label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="pt-4 border-t border-[#E5E5E5] mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <div className="w-full py-3.5 bg-brand text-white text-[11px] font-bold uppercase tracking-[0.18em] rounded-sm text-center">
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
