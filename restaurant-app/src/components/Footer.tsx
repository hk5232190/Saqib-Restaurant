"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useMemo } from "react";

function useIsOpenNow() {
  return useMemo(() => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const totalMins = hour * 60 + minute;

    // Daily: 11:00 AM (660 mins) – 11:00 PM (1380 mins)
    return totalMins >= 660 && totalMins < 1380;
  }, []);
}

export default function Footer() {
  const isOpen = useIsOpenNow();
  const address = "Main Matta Bazaar Road, Matta, Swat, KPK, Pakistan";
  const phone = "+92 946 720 101";

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-brand tracking-widest uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              Saqib Restaurant
            </Link>
            <p className="text-muted text-sm mt-4 leading-relaxed">
              An uncompromising dining experience — where every plate tells a story of craft, culture, and passion.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3, color: "#0D3E26" }}
                  className="w-10 h-10 border border-border rounded-xl flex items-center justify-center text-muted hover:border-brand/50 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Our Menu", href: "/menu" },
                { label: "Reserve a Table", href: "/book" },
                { label: "Checkout", href: "/checkout" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-muted hover:text-brand transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-6">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted text-sm">
                <MapPin size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm">
                <Phone size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <span className="font-semibold">{phone}</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm">
                <Mail size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <span>hello@restaurant-swat.pk</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-6">Hours</h4>
            <ul className="space-y-3">
              {[
                { day: "Everyday", time: "11:00 AM – 11:00 PM" },
              ].map(({ day, time }) => (
                <li key={day} className="flex justify-between text-sm">
                  <span className="text-muted">{day}</span>
                  <span className="text-brand font-medium">{time}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 mt-4 text-xs">
                <span className={`relative flex h-2 w-2`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                </span>
                <span className={isOpen ? 'text-emerald-400' : 'text-amber-400'}>
                  {isOpen ? 'Currently Open' : 'Currently Closed'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © 2026 Saqib Restaurant (Main Branch). All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <span className="hover:text-brand cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-brand cursor-pointer transition-colors">Halal Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
