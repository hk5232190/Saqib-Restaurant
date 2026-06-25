"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const branch = {
    name: "Main Branch · Matta, Swat",
    address: "Main Matta Bazaar Road, Matta, Swat, KPK, Pakistan",
    phone: "+92 946 720 101",
    hours: "Daily: 11:00 AM – 11:00 PM",
    email: "hello@saqibrestaurant.pk",
    mapUrl: "https://maps.google.com/?q=Matta+Swat+KPK+Pakistan",
  };

  return (
    <section id="location-details" className="py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="eyebrow block mb-4">Our Sanctuary</span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-foreground mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Location &{" "}
            <em className="italic font-light text-brand">Hours</em>
          </h2>
          <p className="text-muted max-w-md mx-auto text-sm font-light mb-6">
            Visit our flagship venue nestled in the spectacular Matta Valley, Swat.
          </p>
          <span className="gold-divider" />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-md shadow-luxury border-l-4 border-gold overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">

              {/* Info Column */}
              <div className="p-10">
                <h3
                  className="text-2xl font-bold text-foreground mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {branch.name}
                </h3>
                <ul className="space-y-5">
                  {[
                    { icon: MapPin, content: branch.address, highlight: false },
                    { icon: Phone, content: branch.phone, highlight: true },
                    { icon: Clock, content: branch.hours, highlight: false },
                    { icon: Mail, content: branch.email, highlight: false },
                  ].map(({ icon: Icon, content, highlight }, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-sm bg-brand/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={15} className="text-brand" />
                      </div>
                      <span className={`text-sm leading-relaxed ${highlight ? "font-semibold text-foreground" : "text-muted"}`}>
                        {content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Column */}
              <div className="p-10 flex flex-col justify-between gap-8">
                <div>
                  <p className="text-muted text-sm font-light leading-relaxed mb-6">
                    We are located in the heart of Matta Bazaar, easily accessible from
                    Mingora and the Swat Expressway. Ample parking available on-site.
                  </p>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-emerald-600 text-[11px] font-semibold uppercase tracking-[0.18em]">
                      Open Today · 11 AM – 11 PM
                    </span>
                  </div>
                </div>

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-location-map"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(15,81,50,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 bg-brand text-white text-[11px] font-bold uppercase tracking-[0.18em] rounded-sm flex items-center justify-center gap-3 cursor-pointer transition-colors hover:bg-brand-dark"
                  >
                    Navigate on Google Maps
                    <ExternalLink size={13} />
                  </motion.div>
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
