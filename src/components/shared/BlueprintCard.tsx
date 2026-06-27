"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlueprintCardProps {
  title: string;
  date: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  github: string | null;
  highlight: string;
  index: number;
}

export default function BlueprintCard({
  title,
  date,
  overview,
  problem,
  solution,
  technologies,
  github,
  highlight,
  index,
}: BlueprintCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className="graph-paper relative cursor-pointer overflow-hidden rounded border border-ink/10 p-3"
      initial={{ opacity: 0, scaleY: 0.6, originY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded((v) => !v);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
    >
      {/* Blueprint corner marks */}
      <div className="absolute top-1 left-1 h-3 w-3 border-t border-l border-ink/20" />
      <div className="absolute top-1 right-1 h-3 w-3 border-t border-r border-ink/20" />
      <div className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-ink/20" />
      <div className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-ink/20" />

      <div className="flex items-start justify-between gap-2">
        <div>
          <h3
            className="text-sm font-semibold text-ink leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {title}
          </h3>
          <p className="mt-0.5 font-mono text-[10px] text-ink-muted">{date}</p>
        </div>
        <span className="shrink-0 rounded bg-gold/20 px-1.5 py-0.5 font-mono text-[9px] text-ink-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-2 text-xs leading-relaxed text-ink-muted">{overview}</p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2 border-t border-dashed border-ink/15 pt-2">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold">
                  Problem
                </span>
                <p className="text-[11px] text-ink-muted">{problem}</p>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold">
                  Solution
                </span>
                <p className="text-[11px] text-ink-muted">{solution}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-ink/10 bg-cream px-1.5 py-0.5 font-mono text-[9px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] text-gold hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub →
                </a>
              )}
              <p
                className="handwriting text-sm text-gold"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                ★ {highlight}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
