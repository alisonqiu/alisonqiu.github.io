"use client";

import { motion } from "framer-motion";

interface HandwritingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function HandwritingText({
  text,
  className = "",
  delay = 0,
}: HandwritingTextProps) {
  return (
    <motion.p
      className={`handwriting text-ink-muted ${className}`}
      style={{ fontFamily: "var(--font-caveat)" }}
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ delay, duration: 1.2, ease: "easeOut" }}
    >
      {text}
    </motion.p>
  );
}
