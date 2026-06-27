"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceBlueprintCardProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  architecture: string[];
  technologies: string[];
  impact: string;
  color: string;
  index: number;
}

export default function ExperienceBlueprintCard({
  company,
  role,
  period,
  responsibilities,
  architecture,
  technologies,
  impact,
  color,
  index,
}: ExperienceBlueprintCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className="graph-paper relative cursor-pointer overflow-hidden rounded border border-ink/10 p-2.5"
      initial={{ opacity: 0, scaleY: 0.6, originY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
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
      <div className="absolute top-1 left-1 h-2.5 w-2.5 border-t border-l border-ink/20" />
      <div className="absolute top-1 right-1 h-2.5 w-2.5 border-t border-r border-ink/20" />
      <div className="absolute bottom-1 left-1 h-2.5 w-2.5 border-b border-l border-ink/20" />
      <div className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r border-ink/20" />

      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3
            className="truncate text-sm font-semibold text-ink leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {company}
          </h3>
          <p className="text-[11px] text-gold">{role}</p>
          <p className="font-mono text-[9px] text-ink-muted">{period}</p>
        </div>
        <span
          className="shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] text-white"
          style={{ backgroundColor: color }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-ink-muted">
        {responsibilities[0]}
      </p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 space-y-2 border-t border-dashed border-ink/15 pt-2">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold">
                  Responsibilities
                </span>
                <ul className="mt-1 space-y-1">
                  {responsibilities.map((r) => (
                    <li key={r} className="flex gap-1.5 text-[10px] text-ink-muted">
                      <span className="shrink-0 text-gold">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold">
                  Architecture
                </span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {architecture.map((node) => (
                    <span
                      key={node}
                      className="rounded border border-ink/10 bg-cream px-1.5 py-0.5 font-mono text-[8px]"
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-ink/10 bg-cream px-1.5 py-0.5 font-mono text-[8px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p
                className="handwriting text-sm text-gold"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                ★ {impact}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
