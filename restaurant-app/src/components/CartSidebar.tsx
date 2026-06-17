"use client";

import React, { useState } from "react";
import { X, Trash2, ShoppingCart, Gift, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQty, clearCart, isCartOpen: isOpen, setIsCartOpen: setIsOpen } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [premiumPackaging, setPremiumPackaging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Bill Calculations
  const gstSstRate = 0.16;
  const gstSst = Math.round(cartTotal * gstSstRate);
  const packagingCost = premiumPackaging ? 500 : 0;
  const total = cartTotal + gstSst + packagingCost;

  const handleCheckout = async () => {
    if (!customerName || !customerEmail) {
      setError("Please enter your name and email.");
      return;
    }
    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerEmail,
          items: cartItems,
          subtotal: cartTotal,
          tax: gstSst,
          gstSst,
          premiumPackaging,
          total,
        }),
      });

      if (!response.ok) throw new Error("Failed to place order.");

      setSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
        setCustomerName("");
        setCustomerEmail("");
        setPremiumPackaging(false);
        clearCart();
      }, 3000);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Cart Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 left-6 bg-brand text-white p-4 rounded-full shadow-[0_0_24px_rgba(11,70,36,0.45)] z-40 flex items-center justify-center"
      >
        <ShoppingCart size={22} />
        {/* Live Badge */}
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.span
              key={cartCount}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute -top-1.5 -right-1.5 bg-[#2C1E11] text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow"
            >
              {cartCount > 9 ? "9+" : cartCount}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l border-border/30 shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-border/20 flex justify-between items-center">
                <h2
                  className="text-xl font-bold text-brand uppercase tracking-widest flex items-center gap-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <ShoppingBag size={20} /> Your Selection
                </h2>
                <button onClick={() => setIsOpen(false)} className="text-muted hover:text-brand transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence>
                  {cartItems.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center h-48 text-center"
                    >
                      <ShoppingCart size={40} className="text-border mb-4" />
                      <p className="text-muted text-sm">Your cart is empty</p>
                      <p className="text-muted text-xs mt-1">Add dishes from the menu to get started</p>
                    </motion.div>
                  ) : (
                    cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 bg-background/40 p-3 rounded-xl border border-border/20 hover:border-border/40 transition-colors"
                      >
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-foreground text-sm font-semibold truncate">{item.title}</h4>
                          <div className="text-primary font-bold text-xs mt-1">Rs. {item.price.toLocaleString("en-PK")}</div>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="text-muted hover:text-foreground px-2 py-0.5 text-xs bg-surface border border-border/20 rounded hover:border-brand/40 transition-colors"
                            >
                              −
                            </button>
                            <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="text-muted hover:text-foreground px-2 py-0.5 text-xs bg-surface border border-border/20 rounded hover:border-brand/40 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs text-muted font-medium">
                            Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Checkout Footer */}
              <div className="p-6 border-t border-border/20 bg-background/70 space-y-5">
                {/* Customer Fields */}
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-surface border border-border/25 rounded-lg px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-surface border border-border/25 rounded-lg px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                {/* Premium Packaging Toggle */}
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/20 bg-surface/40">
                  <div className="flex items-center gap-3 bg-brand/5 p-4 rounded-xl border border-brand/10">
                    <Gift className="text-brand" size={18} />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-foreground">Premium Gold Packaging</span>
                      <span className="text-[10px] text-muted">+Rs. 500 (Signature Box & Ribbon)</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={premiumPackaging}
                    onChange={(e) => setPremiumPackaging(e.target.checked)}
                    className="w-4 h-4 rounded text-brand border-border bg-background cursor-pointer"
                  />
                </div>

                {/* Receipt */}
                <div className="bg-[#FAF6EE] p-5 rounded-xl border border-stone-200/80 font-mono text-[11px] text-muted space-y-2">
                  <div className="text-center font-bold text-foreground text-xs tracking-widest uppercase pb-1 border-b border-dashed border-stone-300/60">
                    Swat Restaurant — Receipt
                  </div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-stone-700">
                      <span className="truncate max-w-[60%]">{item.title} (×{item.quantity})</span>
                      <span>Rs. {(item.price * item.quantity).toLocaleString("en-PK")}</span>
                    </div>
                  ))}
                  <div className="border-t border-dashed border-stone-300/60 my-1 pt-2 space-y-1.5">
                    <div className="flex justify-between">
                      <span>SUBTOTAL</span>
                      <span className="text-stone-700">Rs. {cartTotal.toLocaleString("en-PK")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST/SST (16%)</span>
                      <span className="text-stone-700">Rs. {gstSst.toLocaleString("en-PK")}</span>
                    </div>
                    {premiumPackaging && (
                      <div className="flex justify-between text-brand font-semibold">
                        <span>GOLD PACKAGING</span>
                        <span>Rs. {packagingCost.toLocaleString("en-PK")}</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t-2 border-double border-stone-300 pt-2 flex justify-between text-xs font-bold text-foreground">
                    <span>TOTAL BILL</span>
                    <span className="text-primary">Rs. {total.toLocaleString("en-PK")}</span>
                  </div>
                </div>

                {error && <div className="text-red-500 text-xs text-center font-medium">{error}</div>}
                {success && <div className="text-emerald-500 text-xs text-center font-medium">✓ Order placed successfully!</div>}

                <motion.button
                  onClick={handleCheckout}
                  whileHover={!(isSubmitting || success || cartItems.length === 0) ? { scale: 1.02 } : {}}
                  whileTap={!(isSubmitting || success || cartItems.length === 0) ? { scale: 0.98 } : {}}
                  disabled={isSubmitting || success || cartItems.length === 0}
                  className={`w-full py-4 text-white text-sm font-bold rounded-xl transition-all uppercase tracking-widest shadow-sm ${
                    isSubmitting || success || cartItems.length === 0
                      ? "bg-stone-300 text-stone-500 cursor-not-allowed shadow-none"
                      : "bg-brand hover:bg-[#135c36] hover:shadow-md"
                  }`}
                >
                  {isSubmitting ? "Processing..." : success ? "✓ Confirmed!" : "Place Order"}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
