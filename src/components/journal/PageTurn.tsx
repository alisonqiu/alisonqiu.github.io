"use client";

import { useCallback, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import type { FlipDirection } from "@/types/journal";

interface PageTurnProps {
  direction: FlipDirection;
  isActive: boolean;
  onComplete: () => void;
  children?: ReactNode;
}

export default function PageTurn({
  direction,
  isActive,
  onComplete,
  children,
}: PageTurnProps) {
  const progress = useMotionValue(0);
  const rotateY = useTransform(
    progress,
    [0, 1],
    direction === "forward" ? [0, -180] : [180, 0]
  );

  const started = useRef(false);

  const runAnimation = useCallback(() => {
    if (started.current) return;
    started.current = true;
    animate(progress, 1, {
      duration: 0.55,
      ease: [0.4, 0, 0.2, 1],
      onComplete,
    });
  }, [progress, onComplete]);

  if (isActive) {
    runAnimation();
  }

  if (!isActive) return null;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
    >
      <motion.div
        className="paper-texture absolute top-0 right-0 h-full w-1/2 origin-left"
        style={{
          rotateY,
          backfaceVisibility: "hidden",
          boxShadow: "-4px 0 16px rgba(0,0,0,0.2)",
        }}
      >
        {children}
        <div className="page-curl-shadow absolute inset-0" />
      </motion.div>
    </motion.div>
  );
}
