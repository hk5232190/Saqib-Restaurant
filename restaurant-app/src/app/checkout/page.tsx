"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Phone, MapPin, CreditCard, Banknote, CheckCircle,
  ChevronRight, Package, Utensils, Bike
} from "lucide-react";
import Link from "next/link";

const STEPS = ["Your Details", "Payment", "Order Status"];

const CART_ITEMS = [
  { id: 1, title: "Truffle Gold Burger", price: 1250, quantity: 1 },
  { id: 4, title: "Citrus Sparkle", price: 450, quantity: 2 },
];

const subtotal = CART_ITEMS.reduce((s, i) => s + i.price * i.quantity, 0);
const tax = Math.round(subtotal * 0.08);
const total = subtotal + tax;

type OrderType = "delivery" | "dinein" | "pickup";
type PaymentMethod = "cod" | "card" | "";

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");
  const [trackingStep, setTrackingStep] = useState(0);
  // Generate order ID once on client-side only (avoid hydration mismatch)
  const [orderId] = useState(() => Math.floor(Math.random() * 9000) + 1000);

  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", address: "",
    cardNumber: "", cardExpiry: "", cardCvc: "",
  });

  const handleNext = () => {
    if (step === 1) {
      // Simulate order progress animation
      setStep(2);
      let t = 0;
      const interval = setInterval(() => {
        t++;
        setTrackingStep(t);
        if (t >= 2) clearInterval(interval);
      }, 2000);
    } else {
      setStep((s) => s + 1);
    }
  };

  const trackingStages = [
    { label: "Order Received", icon: Package, desc: "We've got your order!", active: trackingStep >= 0 },
    { label: "Preparing", icon: Utensils, desc: "Chef Ahmad is on it!", active: trackingStep >= 1 },
    { label: "Out for Delivery", icon: Bike, desc: "On the way to you!", active: trackingStep >= 2 },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Step progress bar */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {STEPS.map((label, idx) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-500 ${
                  idx <= step
                    ? "bg-brand border-brand text-white"
                    : "bg-transparent border-stone-100 text-muted"
                }`}>
                  {idx < step ? <CheckCircle size={18} /> : idx + 1}
                </div>
                <p className={`text-xs uppercase tracking-wider font-semibold ${idx <= step ? "text-brand" : "text-muted"}`}>
                  {label}
                </p>
              </div>
              {idx < STEPS.length - 1 && (
                <div className={`h-px flex-1 mb-6 transition-all duration-700 ${idx < step ? "bg-brand" : "bg-stone-100"}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">

              {/* STEP 1: Contact & Delivery */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface rounded-3xl p-8 border border-border"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Contact Details
                  </h2>

                  <div className="space-y-5 mb-8">
                    {[
                      { icon: User, key: "fullName", label: "Full Name", type: "text", placeholder: "Ahmad Khan" },
                      { icon: Mail, key: "email", label: "Email", type: "email", placeholder: "ahmad@gmail.com" },
                      { icon: Phone, key: "phone", label: "Phone", type: "tel", placeholder: "+92 300 1234567" },
                    ].map(({ icon: Icon, key, label, type, placeholder }) => (
                      <div key={key} className="space-y-2">
                        <label className="text-muted text-sm uppercase tracking-wider font-medium">{label}</label>
                        <div className="relative">
                          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                          <input
                            type={type} placeholder={placeholder}
                            value={(form as any)[key]}
                            onChange={e => setForm({ ...form, [key]: e.target.value })}
                            className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order type selection */}
                  <div className="mb-8">
                    <p className="text-muted text-sm uppercase tracking-wider font-medium mb-4">Order Type</p>
                    <div className="grid grid-cols-3 gap-3">
                      {([
                        { type: "delivery", icon: Bike, label: "Delivery" },
                        { type: "dinein", icon: Utensils, label: "Dine-In" },
                        { type: "pickup", icon: Package, label: "Pickup" },
                      ] as { type: OrderType; icon: any; label: string }[]).map(({ type, icon: Icon, label }) => (
                        <button
                          key={type}
                          onClick={() => setOrderType(type)}
                          className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all font-semibold text-sm ${
                            orderType === type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted hover:border-stone-500"
                          }`}
                        >
                          <Icon size={22} />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {orderType === "delivery" && (
                    <div className="space-y-2 mb-6">
                      <label className="text-muted text-sm uppercase tracking-wider font-medium">Delivery Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 text-muted" size={18} />
                        <textarea
                          rows={3} placeholder="Street, Area, City..."
                          value={form.address}
                          onChange={e => setForm({ ...form, address: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        />
                      </div>
                    </div>
                  )}

                  <motion.button onClick={handleNext}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 0 2px #0D3E26" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-brand hover:bg-[#0d5429] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-[0_0_20px_rgba(11,70,36,0.3)]"
                  >
                    Continue to Payment <ChevronRight size={20} />
                  </motion.button>
                </motion.div>
              )}

              {/* STEP 2: Payment */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface rounded-3xl p-8 border border-border"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Payment Method
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {([
                      { method: "cod", icon: Banknote, label: "Cash on Delivery", desc: "Pay when it arrives" },
                      { method: "card", icon: CreditCard, label: "Credit / Debit Card", desc: "Secure online payment" },
                    ] as { method: PaymentMethod; icon: any; label: string; desc: string }[]).map(({ method, icon: Icon, label, desc }) => (
                      <button
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        className={`flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left ${
                          paymentMethod === method
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-stone-500"
                        }`}
                      >
                        <Icon size={28} className={paymentMethod === method ? "text-primary" : "text-muted"} />
                        <p className={`font-bold mt-3 text-sm ${paymentMethod === method ? "text-primary" : "text-foreground"}`}>{label}</p>
                        <p className="text-muted text-xs mt-1">{desc}</p>
                      </button>
                    ))}
                  </div>

                  {paymentMethod === "card" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 mb-6 p-5 bg-background rounded-2xl border border-border"
                    >
                      <div>
                        <label className="text-muted text-xs uppercase tracking-wider">Card Number</label>
                        <input
                          placeholder="1234 5678 9012 3456"
                          value={form.cardNumber}
                          onChange={e => setForm({ ...form, cardNumber: e.target.value })}
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground mt-2 focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-muted text-xs uppercase tracking-wider">Expiry</label>
                          <input
                            placeholder="MM / YY"
                            value={form.cardExpiry}
                            onChange={e => setForm({ ...form, cardExpiry: e.target.value })}
                            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground mt-2 focus:outline-none focus:border-primary transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-muted text-xs uppercase tracking-wider">CVC</label>
                          <input
                            placeholder="•••"
                            value={form.cardCvc}
                            onChange={e => setForm({ ...form, cardCvc: e.target.value })}
                            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground mt-2 focus:outline-none focus:border-primary transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.button
                    onClick={handleNext}
                    disabled={!paymentMethod}
                    whileHover={paymentMethod ? { scale: 1.02, boxShadow: "0 0 0 2px #0D3E26" } : {}}
                    whileTap={paymentMethod ? { scale: 0.98 } : {}}
                    className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider ${
                      paymentMethod
                        ? "bg-brand hover:bg-[#0d5429] text-white shadow-[0_0_20px_rgba(11,70,36,0.3)]"
                        : "bg-stone-100 text-muted cursor-not-allowed"
                    }`}
                  >
                    Place Order <ChevronRight size={20} />
                  </motion.button>
                </motion.div>
              )}

              {/* STEP 3: Order Tracking */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-surface rounded-3xl p-8 border border-border"
                >
                  <div className="text-center mb-10">
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle className="w-20 h-20 text-primary mx-auto mb-4" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Order Confirmed!
                    </h2>
                    <p className="text-muted">Order #SAQ-{orderId}</p>
                  </div>

                  {/* Tracking timeline */}
                  <div className="relative space-y-0">
                    {trackingStages.map((stage, idx) => {
                      const Icon = stage.icon;
                      return (
                        <div key={stage.label} className="flex items-start gap-5 relative">
                          {/* Vertical line */}
                          {idx < trackingStages.length - 1 && (
                            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-stone-100 z-0" />
                          )}
                          {idx < trackingStages.length - 1 && stage.active && (
                            <motion.div
                              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                              transition={{ duration: 1, delay: idx * 2 + 0.5 }}
                              style={{ originY: 0 }}
                              className="absolute left-[19px] top-10 h-full w-0.5 bg-primary z-0"
                            />
                          )}

                          {/* Circle */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: stage.active ? 1 : 0.7 }}
                            transition={{ delay: idx * 2, type: "spring" }}
                            className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 ${
                              stage.active
                                ? "bg-primary border-primary text-background"
                                : "bg-stone-100 border-stone-100 text-muted"
                            }`}
                          >
                            <Icon size={18} />
                          </motion.div>

                          <div className="pb-10">
                            <p className={`font-bold text-base ${stage.active ? "text-foreground" : "text-muted"}`}>
                              {stage.label}
                            </p>
                            <p className={`text-sm ${stage.active ? "text-primary" : "text-muted"}`}>
                              {stage.desc}
                            </p>
                            {stage.active && (
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 2 + 0.5 }}
                                className="inline-block mt-1 text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full border border-primary/30"
                              >
                                ✓ Confirmed
                              </motion.span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-border pt-6 flex gap-4">
                    <Link href="/"
                      className="flex-1 py-3 text-center border-2 border-brand text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-all uppercase tracking-wide text-sm"
                    >
                      Back to Menu
                    </Link>
                    <Link href="/dashboard"
                      className="flex-1 py-3 text-center bg-brand text-white font-bold rounded-xl hover:bg-[#0d5429] transition-all uppercase tracking-wide text-sm"
                    >
                      Track Order
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-3xl p-6 border border-border sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-5 uppercase tracking-wider">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {CART_ITEMS.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-foreground text-sm font-medium">{item.title}</p>
                      <p className="text-muted text-xs">x{item.quantity}</p>
                    </div>
                    <span className="text-primary font-bold text-sm">
                      Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-muted text-sm">
                  <span>Subtotal</span><span>Rs. {subtotal.toLocaleString("en-PK")}</span>
                </div>
                <div className="flex justify-between text-muted text-sm">
                  <span>Tax (8%)</span><span>Rs. {tax.toLocaleString("en-PK")}</span>
                </div>
                <div className="flex justify-between text-foreground font-bold text-base pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">Rs. {total.toLocaleString("en-PK")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
