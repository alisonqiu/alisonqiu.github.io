"use client";

import { motion } from "framer-motion";

interface TimelineProps {
  items: { year: string; event: string }[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <motion.div
        className="absolute top-0 left-2 w-px bg-gold/40"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <ul className="space-y-4">
        {items.map((item, i) => (
          <motion.li
            key={item.year}
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
          >
            <motion.div
              className="absolute -left-4 top-1.5 h-2 w-2 rounded-full border-2 border-gold bg-cream"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
            />
            <span className="font-mono text-xs font-medium text-gold">{item.year}</span>
            <p className="text-xs leading-relaxed text-ink-muted">{item.event}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
