import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",          // Pure white
        "surface":  "#FFFFFF",          // Pure white cards
        "surface-2":"#F7F7F7",          // Light gray alternating sections
        border:     "#E5E5E5",          // Subtle gray border
        primary:    "#D4AF37",          // Luxury gold — highlights & prices
        brand:      "#0F5132",          // Deep emerald green — branding & CTAs
        "brand-dark":"#0A3D26",         // Darker emerald for hover
        foreground: "#222222",          // Dark charcoal — body text
        muted:      "#555555",          // Medium gray — secondary text
        gold:       "#D4AF37",          // Alias for primary gold
        "gold-light":"#F0D875",         // Lighter gold for gradients
      },
      fontFamily: {
        serif:  ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans:   ["Inter", "system-ui", "sans-serif"],
        display:["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient":   "linear-gradient(90deg, #D4AF37, #F0D875, #D4AF37)",
      },
      boxShadow: {
        "luxury": "0 4px 40px rgba(0,0,0,0.08)",
        "luxury-hover": "0 12px 60px rgba(0,0,0,0.12)",
        "gold": "0 6px 30px rgba(212, 175, 55, 0.25)",
        "emerald": "0 6px 30px rgba(15, 81, 50, 0.3)",
      },
      letterSpacing: {
        "widest-2": "0.25em",
        "widest-3": "0.3em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
