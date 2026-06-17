"use client";

import React, { useState } from "react";
import { Calendar, Users, Clock, CheckCircle, Shield, Sparkles, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ExperienceType = "standard" | "vip";

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [experienceType, setExperienceType] = useState<ExperienceType>("standard");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    vipRoom: "The Obsidian Room",
    floralTheme: "None (Standard Table Decor)",
    chefNotes: "",
    isEvent: false,
    eventType: "Birthday Party",
    eventGuests: "10-20 Guests",
    decorPreferences: [] as string[],
    buffetPreferences: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      experienceType,
      vipRoom: experienceType === "vip" ? formData.vipRoom : null,
      floralTheme: experienceType === "vip" ? formData.floralTheme : null,
      chefNotes: experienceType === "vip" ? formData.chefNotes : null,
      isEvent: formData.isEvent,
      eventType: formData.isEvent ? formData.eventType : null,
      eventGuests: formData.isEvent ? formData.eventGuests : null,
      decorPreferences: formData.isEvent ? formData.decorPreferences : [],
      buffetPreferences: formData.isEvent ? formData.buffetPreferences : [],
    };

    try {
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to make reservation.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface p-12 rounded-3xl text-center border border-primary/20 max-w-lg shadow-[0_0_30px_rgba(197,168,128,0.15)]"
        >
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">Reservation Confirmed!</h2>
          <p className="text-muted mb-8">
            Thank you for choosing Saqib Restaurant. We've sent the details to your email and look forward to serving you an unforgettable {experienceType === "vip" ? "VIP experience" : "dining experience"}.
          </p>
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 0 2px #0D3E26", borderColor: "transparent" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                date: "",
                time: "",
                guests: 2,
                vipRoom: "The Obsidian Room",
                floralTheme: "None (Standard Table Decor)",
                chefNotes: "",
                isEvent: false,
                eventType: "Birthday Party",
                eventGuests: "10-20 Guests",
                decorPreferences: [],
                buffetPreferences: []
              });
            }}
            className="px-8 py-3 bg-transparent border-2 border-brand text-brand font-bold rounded-full hover:text-white hover:bg-brand transition-colors uppercase tracking-wide"
          >
            Make Another Booking
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4 uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>Reserve a Table</h1>
          <p className="text-muted text-lg">Join us for an exceptional culinary journey.</p>
        </div>

        <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          {/* Premium Tab Toggle */}
          <div className="flex flex-col sm:flex-row justify-center border-b border-border/40 pb-6 mb-8 gap-4 relative z-10">
            <button
              type="button"
              onClick={() => setExperienceType("standard")}
              className={`px-6 py-3 rounded-lg text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 ${
                experienceType === "standard"
                  ? "bg-brand text-white shadow-[0_0_15px_rgba(11,70,36,0.3)] font-semibold"
                  : "text-muted hover:text-foreground bg-background/50 border border-border/50"
              }`}
            >
              <Coffee size={16} /> Table Reservation
            </button>
            <button
              type="button"
              onClick={() => setExperienceType("vip")}
              className={`px-6 py-3 rounded-lg text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 ${
                experienceType === "vip"
                  ? "bg-brand text-white shadow-[0_0_15px_rgba(11,70,36,0.3)] font-semibold"
                  : "text-muted hover:text-foreground bg-background/50 border border-border/50"
              }`}
            >
              <Sparkles size={16} /> VIP Experiences & Lounges
            </button>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:light]"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <select 
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                  >
                    <option value="">Select a time...</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <select 
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: Number(e.target.value)})}
                    className="w-full bg-background border border-border rounded-lg pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                  >
                    {experienceType === "vip" 
                      ? [2, 4, 6, 8, 10, 12, 15, 20, 30, 40, 50].map(num => (
                          <option key={num} value={num}>{num} Guests</option>
                        ))
                      : [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                        ))
                    }
                  </select>
                </div>
              </div>

              {/* Conditionally Render VIP Booking Fields */}
              {experienceType === "vip" ? (
                <>
                  {/* VIP Lounges dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                      <Shield size={16} className="text-primary" /> Select VIP Lounge
                    </label>
                    <select
                      value={formData.vipRoom}
                      onChange={(e) => setFormData({...formData, vipRoom: e.target.value})}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    >
                      <option value="The Obsidian Room">The Obsidian Room (Private dining up to 12 guests)</option>
                      <option value="The Wine Cellar Vault">The Wine Cellar Vault (Private dining up to 8 guests)</option>
                      <option value="Rooftop Skyline">Rooftop Skyline (Seating up to 50 guests)</option>
                      <option value="Royal Hall">Royal Hall (Seating up to 30 guests)</option>
                    </select>
                  </div>

                  {/* Floral Arrangements dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Floral & Decor Theme</label>
                    <select
                      value={formData.floralTheme}
                      onChange={(e) => setFormData({...formData, floralTheme: e.target.value})}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    >
                      <option value="None (Standard Table Decor)">None (Standard Table Decor)</option>
                      <option value="Muted Champagne Gold Elegance">Muted Champagne Gold Elegance</option>
                      <option value="Classic White Lilies & Silk Drapery">Classic White Lilies & Silk Drapery</option>
                      <option value="Midnight Rose & Candelabras">Midnight Rose & Candelabras (Romantic Vibe)</option>
                    </select>
                  </div>

                  {/* Executive Chef notes */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Executive Chef Notes</label>
                    <textarea
                      rows={4}
                      value={formData.chefNotes}
                      onChange={(e) => setFormData({...formData, chefNotes: e.target.value})}
                      placeholder="Leave details about allergy considerations, dietary preferences, or menu customizations for our Executive Chef..."
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>
                </>
              ) : (
                <div className="hidden" />
              )}

            </div>

            {/* Celebrate With Us Toggle Card */}
            <div className="bg-[#FAF9F6] border border-stone-200/60 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <div>
                <label className="flex items-center gap-3 text-foreground font-bold cursor-pointer select-none">
                  <Sparkles size={18} className="text-brand" /> Host an Event / Celebration?
                </label>
                <p className="text-xs text-[#8A7968]">
                  Planning a Birthday, Corporate Lunch, or Family Feast? Let us craft a tailored experience.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isEvent}
                  onChange={(e) => setFormData({ ...formData, isEvent: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand"></div>
              </label>
            </div>

            {/* Event Details Panel */}
            <AnimatePresence>
              {formData.isEvent && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden space-y-6 pt-6 border-t border-stone-200/60 mt-6"
                >
                  <h4 className="text-base font-serif font-bold text-[#2C1E11] tracking-wide uppercase">
                    Event Details & Customizations
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Event Type */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Type of Event</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Corporate Lunch/Dinner">Corporate Lunch/Dinner</option>
                        <option value="Family Feast">Family Feast</option>
                        <option value="Wedding Reception">Wedding Reception</option>
                        <option value="Other Celebration">Other Celebration</option>
                      </select>
                    </div>

                    {/* Guest Count */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Guest Count (Up to 50+)</label>
                      <select
                        value={formData.eventGuests}
                        onChange={(e) => setFormData({ ...formData, eventGuests: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option value="10-20 Guests">10-20 Guests</option>
                        <option value="20-50 Guests">20-50 Guests</option>
                        <option value="50-100 Guests">50-100 Guests (Grand Hall required)</option>
                        <option value="100+ Guests">100+ Guests (Skyline Terrace required)</option>
                      </select>
                    </div>
                  </div>

                  {/* Checklist Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Decor Checklist */}
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider block">
                        Custom Decor Setup Preferences
                      </label>
                      <div className="space-y-2.5">
                        {[
                          { id: "floral", label: "Floral Centerpieces & Arches" },
                          { id: "balloons", label: "Themed Balloon Backdrop" },
                          { id: "lighting", label: "Fairy Lights & Ambient Illumination" },
                          { id: "av", label: "AV & Sound System (Mic/Projector)" },
                        ].map((decor) => {
                          const isChecked = formData.decorPreferences.includes(decor.id);
                          return (
                            <label key={decor.id} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {
                                  const updated = isChecked
                                    ? formData.decorPreferences.filter(x => x !== decor.id)
                                    : [...formData.decorPreferences, decor.id];
                                  setFormData({ ...formData, decorPreferences: updated });
                                }}
                                className="rounded border-stone-300 text-brand focus:ring-brand h-4 w-4"
                              />
                              <span className="text-sm text-[#8A7968] group-hover:text-[#2C1E11] transition-colors">
                                {decor.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Buffet Checklist */}
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-stone-600 uppercase tracking-wider block">
                        Pakistani Buffet & Setup Layout
                      </label>
                      <div className="space-y-2.5">
                        {[
                          { id: "bbq", label: "Live BBQ & Skewers Station" },
                          { id: "karahi", label: "Live Karahi & Clay Pot Station" },
                          { id: "naan", label: "Live Clay Oven Tandoor (Roghni/Naan)" },
                          { id: "desserts", label: "Traditional Dessert Buffet Display" },
                        ].map((buffet) => {
                          const isChecked = formData.buffetPreferences.includes(buffet.id);
                          return (
                            <label key={buffet.id} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {
                                  const updated = isChecked
                                    ? formData.buffetPreferences.filter(x => x !== buffet.id)
                                    : [...formData.buffetPreferences, buffet.id];
                                  setFormData({ ...formData, buffetPreferences: updated });
                                }}
                                className="rounded border-stone-300 text-brand focus:ring-brand h-4 w-4"
                              />
                              <span className="text-sm text-[#8A7968] group-hover:text-[#2C1E11] transition-colors">
                                {buffet.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && <div className="text-red-500 text-sm mt-4 text-center">{error}</div>}

            <motion.button 
              whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 0 2px #0D3E26" } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 text-white text-lg font-bold rounded-xl transition-colors uppercase tracking-widest mt-8 ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-brand hover:bg-[#0d5429] shadow-[0_0_15px_rgba(11,70,36,0.3)]'}`}
            >
              {isSubmitting ? "Processing..." : experienceType === "vip" ? "Book VIP Experience" : "Confirm Reservation"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
