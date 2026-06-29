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
      className="group graph-paper relative cursor-pointer overflow-hidden rounded border border-ink/10 p-3.5 transition-[border-color,box-shadow,background-color] duration-300 hover:border-gold/55 hover:bg-gold/[0.05] hover:shadow-[0_4px_18px_rgba(184,149,106,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      initial={{ opacity: 0, scaleY: 0.6, originY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      whileHover={{ y: -2 }}
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
      aria-label={`${company}, ${role}. Hover or tap to expand full blueprint.`}
    >
      <div
        className="absolute top-0 left-0 h-full w-0.5 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/70"
        aria-hidden
      />
      <div className="absolute top-1 left-1 h-2.5 w-2.5 border-t border-l border-ink/20 transition-colors group-hover:border-gold/40" />
      <div className="absolute top-1 right-1 h-2.5 w-2.5 border-t border-r border-ink/20 transition-colors group-hover:border-gold/40" />
      <div className="absolute bottom-1 left-1 h-2.5 w-2.5 border-b border-l border-ink/20 transition-colors group-hover:border-gold/40" />
      <div className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r border-ink/20 transition-colors group-hover:border-gold/40" />

      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="type-section-title truncate font-semibold text-ink transition-colors group-hover:text-gold">
            {company}
          </h3>
          <p className="type-body-sm text-gold">{role}</p>
          <p className="type-label mt-0.5 text-ink-muted">{period}</p>
        </div>
        <span
          className="type-tag shrink-0 rounded px-2 py-0.5 text-white"
          style={{ backgroundColor: color }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="type-body-sm mt-2 line-clamp-2 text-ink-muted">{responsibilities[0]}</p>

      <AnimatePresence initial={false}>
        {!expanded && (
          <motion.div
            key="expand-hint"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-dashed border-ink/15 pt-2 transition-colors group-hover:border-gold/35">
              <span className="type-label inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-gold transition-all group-hover:border-gold/55 group-hover:bg-gold/15">
                See tech stack & impact
                <span
                  className="inline-block text-base leading-none transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                >
                  ↓
                </span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <span className="type-label text-gold">Responsibilities</span>
                <ul className="mt-1.5 space-y-1.5">
                  {responsibilities.map((r) => (
                    <li key={r} className="type-body-sm flex gap-2 text-ink-muted">
                      <span className="shrink-0 text-gold">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="type-label text-gold">Architecture</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {architecture.map((node) => (
                    <span
                      key={node}
                      className="type-tag rounded border border-ink/10 bg-cream px-2 py-0.5"
                    >
                      {node}
                    </span>
                  ))}
                </div>
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
              <p className="handwriting text-base text-gold">★ {impact}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
