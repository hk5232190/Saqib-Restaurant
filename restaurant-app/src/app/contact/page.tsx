"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook } from "lucide-react";

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

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const INFO = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["Main Matta Bazaar Road", "Matta, Swat, KPK, Pakistan"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+92 946 720 101"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["hello@saqibrestaurant.pk"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      lines: ["Everyday", "11:00 AM – 11:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      {/* Hero Banner */}
      <div className="relative bg-[#0A1A0F] py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0F5132 0%, transparent 50%)" }}
        />
        <div className="h-px w-full absolute top-0 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 bg-gold/60" />
              <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-semibold">Saqib Restaurant</span>
              <div className="h-px w-10 bg-gold/60" />
            </div>
            <h1
              className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Get In <em className="italic font-light text-gold">Touch</em>
            </h1>
            <p className="text-white/55 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have a question about our menu,
              want to arrange an event, or simply want to say hello — reach out anytime.
            </p>
          </motion.div>
        </div>
        <div className="h-px w-full absolute bottom-0 bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="eyebrow block mb-3">Send a Message</span>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              We'll Reply <em className="italic font-light text-brand">Promptly</em>
            </h2>
            <span className="gold-divider" style={{ margin: "1.25rem 0 2rem 0" }} />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 border border-[#E5E5E5] rounded-md shadow-luxury"
              >
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                  <CheckCircle size={30} className="text-brand" />
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Message Received!
                </h3>
                <p className="text-muted text-sm font-light max-w-xs">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-7 text-brand text-[11px] uppercase tracking-[0.2em] font-bold border-b border-brand pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-[#E5E5E5] rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand transition-colors bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[#E5E5E5] rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand transition-colors bg-white"
                      placeholder="+92 946 720 101"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand transition-colors bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand transition-colors bg-white appearance-none"
                  >
                    <option value="">Select a subject...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Menu Information">Menu Information</option>
                    <option value="Event / Celebration">Event / Celebration</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-[#E5E5E5] rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand transition-colors bg-white resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02, boxShadow: "0 8px 30px rgba(15,81,50,0.3)" } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full py-4 bg-brand text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center justify-center gap-3 transition-colors hover:bg-brand-dark disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2"><Send size={13} /> Send Message</span>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="space-y-5"
          >
            <span className="eyebrow block mb-3">Our Details</span>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-foreground mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Find Us in <em className="italic font-light text-brand">Matta, Swat</em>
            </h2>
            <span className="gold-divider" style={{ margin: "1.25rem 0 2rem 0" }} />

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-luxury hover:shadow-luxury-hover hover:border-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-brand/8 flex items-center justify-center mb-4 group-hover:bg-brand/15 transition-colors">
                      <Icon size={17} className="text-brand" />
                    </div>
                    <h3 className="text-[11px] uppercase tracking-[0.18em] font-bold text-muted mb-2">{item.title}</h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className={`text-sm leading-relaxed ${j === 0 ? "text-foreground font-semibold" : "text-muted font-light"}`}>
                        {line}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="mt-6 bg-[#F7F7F7] rounded-md p-6 border border-[#E5E5E5]">
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Facebook, label: "Facebook", href: "#" },
                  { Icon: TikTok, label: "TikTok", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-sm text-muted text-[10px] uppercase tracking-[0.15em] font-semibold hover:border-brand hover:text-brand transition-colors duration-300"
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-4 rounded-md overflow-hidden border border-[#E5E5E5] shadow-luxury">
              <a
                href="https://maps.google.com/?q=Matta+Swat+KPK+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#0A1A0F] h-36 flex flex-col items-center justify-center gap-3 text-white/60 hover:bg-[#0F2A18] transition-colors duration-300 cursor-pointer">
                  <MapPin size={24} className="text-gold" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50">
                    View on Google Maps
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
