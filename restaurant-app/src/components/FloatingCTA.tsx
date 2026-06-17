"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const pathname = usePathname();
  
  // Don't show on the booking page itself
  if (pathname === "/book") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-40 md:hidden"
    >
      <Link href="/book">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-3 bg-brand text-white rounded-full shadow-[0_8px_30px_rgba(11,70,36,0.45)] font-bold text-sm uppercase tracking-wider"
        >
          <CalendarDays size={18} />
          Reserve Now
        </motion.div>
      </Link>
    </motion.div>
  );
}
