"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const branch = {
    name: "Main Branch (Matta, Swat)",
    address: "Main Matta Bazaar Road, Matta, Swat, KPK, Pakistan",
    phone: "+92 946 720 101",
    hours: "Daily: 11:00 AM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Matta+Swat+KPK+Pakistan",
  };

  return (
    <section id="location-details" className="py-24 bg-[#FAF9F6] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
            Our Sanctuary
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2C1E11] uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Location & <span className="text-brand italic font-normal">Hours</span>
          </h2>
          <p className="text-stone-600 max-w-lg mx-auto font-light">
            Visit our absolute authority flagship venue nestled in the spectacular Matta Valley.
          </p>
          <div className="h-0.5 w-24 bg-brand mx-auto mt-6" />
        </motion.div>

        {/* Info Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm overflow-hidden flex flex-col md:flex-row gap-10 items-center justify-between"
          >
            {/* Visual Highlight Decor */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl" />

            <div className="space-y-6 flex-grow max-w-lg">
              <h3 className="text-3xl font-serif font-bold text-foreground tracking-wide">
                {branch.name}
              </h3>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-base text-[#8A7968]">
                  <MapPin size={20} className="text-brand mt-1 flex-shrink-0" />
                  <span>{branch.address}</span>
                </li>
                <li className="flex items-center gap-4 text-base text-[#8A7968]">
                  <Phone size={20} className="text-brand flex-shrink-0" />
                  <span className="font-semibold text-foreground">{branch.phone}</span>
                </li>
                <li className="flex items-center gap-4 text-base text-[#8A7968]">
                  <Clock size={20} className="text-brand flex-shrink-0" />
                  <span>{branch.hours}</span>
                </li>
                <li className="flex items-center gap-4 text-base text-[#8A7968]">
                  <Mail size={20} className="text-brand flex-shrink-0" />
                  <span>hello@restaurant-swat.pk</span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-location-map"
                className="w-full md:w-auto py-4 px-8 bg-brand hover:bg-[#0d5429] text-white rounded-xl flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_6px_20px_rgba(11,70,36,0.25)]"
              >
                <span>Navigate on Google Maps</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
