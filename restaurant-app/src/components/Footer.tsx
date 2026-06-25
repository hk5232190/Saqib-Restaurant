"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

const TikTok = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
import { useMemo } from "react";

function useIsOpenNow() {
  return useMemo(() => {
    const now = new Date();
    const totalMins = now.getHours() * 60 + now.getMinutes();
    return totalMins >= 660 && totalMins < 1380; // 11AM–11PM
  }, []);
}

export default function Footer() {
  const isOpen = useIsOpenNow();

  return (
    <footer className="bg-[#0A1A0F] text-white">
      {/* Gold top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold/70 transition-colors duration-300">
                <Image src="/assets/images/logo.png" alt="Saqib Restaurant" fill className="object-cover" />
              </div>
              <div>
                <p
                  className="text-gold text-sm font-bold tracking-[0.18em] uppercase leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Saqib
                </p>
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-light mt-0.5">
                  Restaurant
                </p>
              </div>
            </Link>

            <p className="text-white/45 text-sm font-light leading-relaxed mb-7 max-w-xs">
              An uncompromising dining experience — where every plate tells a story of craft,
              culture, and Swati passion.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: TikTok, href: "#", label: "TikTok" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, color: "#D4AF37" }}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/50 transition-colors duration-300"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.22em] mb-6 flex items-center gap-3">
              Navigate
              <span className="h-px flex-1 bg-white/10" />
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Home", href: "/" },
                { label: "Our Menu", href: "/menu" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/45 hover:text-gold text-sm font-light transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.22em] mb-6 flex items-center gap-3">
              Find Us
              <span className="h-px flex-1 bg-white/10" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/45 text-sm font-light leading-relaxed">
                  Main Matta Bazaar Road, Matta, Swat, KPK, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span className="text-white/70 text-sm font-semibold">+92 946 720 101</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <span className="text-white/45 text-sm font-light">hello@saqibrestaurant.pk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.22em] mb-6 flex items-center gap-3">
              Hours
              <span className="h-px flex-1 bg-white/10" />
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm font-semibold">Everyday</p>
                  <p className="text-gold text-sm font-light">11:00 AM – 11:00 PM</p>
                </div>
              </div>

              {/* Live status */}
              <div className="flex items-center gap-2.5 mt-4 bg-white/5 border border-white/8 rounded-sm px-4 py-3">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-emerald-400" : "bg-amber-400"}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? "bg-emerald-400" : "bg-amber-400"}`} />
                </span>
                <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${isOpen ? "text-emerald-400" : "text-amber-400"}`}>
                  {isOpen ? "Currently Open" : "Currently Closed"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-light text-center sm:text-left">
            © {new Date().getFullYear()} Saqib Restaurant · Matta, Swat. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[11px] text-white/25">
            {["Halal Certified", "Privacy Policy", "Terms of Service"].map((item) => (
              <span key={item} className="hover:text-gold cursor-pointer transition-colors duration-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
