// replace-light.js — Phase 11 light theme migration
const fs = require("fs");
const path = require("path");

const SRC_DIR = "./src";

const REPLACEMENTS = [
  // Specific shadows
  [/shadow-\[0_0_20px_rgba\(245,158,11,0\.5\)\]/g, "shadow-[0_0_20px_rgba(197,168,128,0.4)]"],
  [/shadow-\[0_0_20px_rgba\(245,158,11,0\.3\)\]/g, "shadow-[0_0_20px_rgba(197,168,128,0.3)]"],
  [/shadow-\[0_0_15px_rgba\(212,175,55,0\.3\)\]/g, "shadow-[0_0_15px_rgba(197,168,128,0.3)]"],
  [/shadow-\[0_0_15px_rgba\(212,175,55,0\.2\)\]/g, "shadow-[0_0_15px_rgba(197,168,128,0.2)]"],
  [/shadow-\[0_0_25px_rgba\(212,175,55,0\.4\)\]/g, "shadow-[0_0_20px_rgba(197,168,128,0.4)]"],
  [/shadow-\[0_0_10px_rgba\(212,175,55,0\.2\)\]/g, "shadow-[0_0_10px_rgba(197,168,128,0.2)]"],
  [/shadow-\[0_0_30px_rgba\(245,158,11,0\.1\)\]/g, "shadow-[0_0_30px_rgba(197,168,128,0.15)]"],
  [/shadow-\[0_0_15px_rgba\(245,158,11,0\.4\)\]/g, "shadow-[0_0_15px_rgba(197,168,128,0.4)]"],
  [/shadow-\[0_0_20px_rgba\(212,175,55,0\.4\)\]/g, "shadow-[0_0_20px_rgba(197,168,128,0.4)]"],

  // Framer Motion boxShadow strings
  [/"0 0 0 2px #D4AF37"/g,   '"0 0 0 2px #C5A880"'],
  [/"0 0 0 1px #D4AF37"/g,   '"0 0 0 1px #C5A880"'],
  [/"0 0 15px rgba\(212,175,55,0\.4\)"/g, '"0 0 15px rgba(197,168,128,0.4)"'],

  // Hardcoded borders & surfaces to semantic variables or tailwind light styles
  [/border-stone-800/g,       "border-stone-100"],
  [/border-stone-700/g,       "border-stone-100"],
  [/border-stone-600/g,       "border-stone-100"],
  [/bg-stone-950/g,           "bg-background"],
  [/bg-stone-900/g,           "bg-background"],
  [/bg-stone-800/g,           "bg-surface"],
  [/bg-stone-700/g,           "bg-stone-100"],
  [/from-stone-950/g,         "from-background"],
  [/to-stone-950/g,           "to-background"],

  // Amber color overrides to primary gold
  [/text-amber-400/g,         "text-primary"],
  [/text-amber-500/g,         "text-primary"],
  [/bg-amber-400/g,           "bg-primary"],
  [/bg-amber-500/g,           "bg-primary"],
  [/hover:bg-amber-400/g,     "hover:bg-primary/90"],
  [/focus:ring-amber-500/g,   "focus:ring-primary"],
  [/border-amber-500/g,       "border-primary"],
  [/fill-amber-500/g,         "fill-primary"],
  [/#D4AF37/g,                "#C5A880"], // Hex for old gold

  // White text in light components -> mahogany foreground
  [/\btext-white\b/g,         "text-foreground"],
  [/\bfill-white\b/g,         "fill-foreground"],
  [/hover:text-white\b/g,     "hover:text-foreground"],

  // Muted/gray text overrides to readable warm brown/muted text
  [/text-gray-600/g,          "text-muted"],
  [/text-gray-500/g,          "text-muted"],
  [/text-gray-400/g,          "text-muted"],
  [/text-gray-300/g,          "text-stone-600"], // darker for better contrast on cream
  [/text-gray-200/g,          "text-stone-500"], // darker for better contrast on cream
];

function getAllFiles(dir) {
  const results = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      results.push(...getAllFiles(full));
    } else if ([".tsx", ".ts", ".jsx", ".js", ".css"].includes(path.extname(name))) {
      results.push(full);
    }
  }
  return results;
}

let totalFiles = 0;
let totalChanges = 0;

for (const file of getAllFiles(SRC_DIR)) {
  let src = fs.readFileSync(file, "utf8");
  let changed = false;
  for (const [pattern, replacement] of REPLACEMENTS) {
    const next = src.replace(pattern, replacement);
    if (next !== src) { changed = true; totalChanges++; }
    src = next;
  }
  if (changed) {
    fs.writeFileSync(file, src, "utf8");
    totalFiles++;
    console.log("  Updated:", file);
  }
}

console.log(`\nDone — ${totalChanges} replacements across ${totalFiles} files.`);
