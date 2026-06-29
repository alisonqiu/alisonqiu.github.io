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
      className="graph-paper relative cursor-pointer overflow-hidden rounded border border-ink/10 p-4"
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
          <h3 className="type-section-title font-semibold text-ink">{title}</h3>
          <p className="type-label mt-1 text-ink-muted">{date}</p>
        </div>
        <span className="type-tag shrink-0 rounded bg-gold/20 px-2 py-0.5 text-ink-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="type-body-sm mt-2.5 text-ink-muted">{overview}</p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3 border-t border-dashed border-ink/15 pt-3">
              <div>
                <span className="type-label text-gold">Problem</span>
                <p className="type-body-sm mt-1 text-ink-muted">{problem}</p>
              </div>
              <div>
                <span className="type-label text-gold">Solution</span>
                <p className="type-body-sm mt-1 text-ink-muted">{solution}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="type-tag rounded border border-ink/10 bg-cream px-2 py-0.5"
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
                  className="type-caption inline-flex items-center gap-1 font-mono text-gold hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub →
                </a>
              )}
              <p className="handwriting text-base text-gold">★ {highlight}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
