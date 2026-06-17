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
        background: "#FAF9F6",    // warm cream / off-white
        surface:    "#FFFFFF",    // pure white cards & panels
        border:     "#E8E4DC",    // razor-thin warm stone border
        primary:    "#C5A880",    // luxury gold – prices & star ratings ONLY
        brand:      "#0D3E26",    // deep emerald green – branding & action buttons
        foreground: "#1A1A1A",    // deep onyx – high-contrast body text
        muted:      "#57534e",    // stone-600 – subtitles & secondary text
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
