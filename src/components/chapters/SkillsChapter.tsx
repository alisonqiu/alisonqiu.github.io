"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolio";

const LEFT_CATEGORIES = SKILL_CATEGORIES.slice(0, 3);
const RIGHT_CATEGORIES = SKILL_CATEGORIES.slice(3);

function CategoryBlock({
  name,
  icon,
  skills,
  note,
  index,
}: {
  name: string;
  icon: string;
  skills: string[];
  note: string;
  index: number;
}) {
  return (
    <motion.section
      className="mb-4 last:mb-0"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.35 }}
    >
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-base text-gold/80" aria-hidden="true">
          {icon}
        </span>
        <h3 className="type-section-title text-ink">{name}</h3>
      </div>
      <div className="mb-2 h-px w-full bg-gold/25" />
      <p className="handwriting type-body-sm mb-2 italic text-ink-muted/80">{note}</p>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
        {skills.map((skill) => (
          <li key={skill} className="type-body-sm flex items-baseline gap-1.5 text-ink-muted">
            <span className="shrink-0 text-gold/50">·</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default function SkillsChapter() {
  return (
    <>
      {/* Left page */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
        <div className="coffee-stain -right-2 bottom-16 h-14 w-14 opacity-60" />

        <h2 className="type-page-title text-ink">Skills</h2>
        <div className="mb-2 h-px w-12 bg-gold/50" />

        <div className="page-scroll flex-1 overflow-y-auto pr-0.5">
          {LEFT_CATEGORIES.map((cat, i) => (
            <CategoryBlock key={cat.name} {...cat} index={i} />
          ))}
        </div>
      </div>

      {/* Right page */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden border-l border-ink/5 p-5 sm:p-6">
        <p className="type-label mb-4 text-ink-muted/70">Inventory — cont.</p>

        <div className="page-scroll flex-1 overflow-y-auto pr-0.5">
          {RIGHT_CATEGORIES.map((cat, i) => (
            <CategoryBlock key={cat.name} {...cat} index={i + LEFT_CATEGORIES.length} />
          ))}
        </div>

        {/* Compact skill map — visual summary */}
        <div className="mt-3 border-t border-dotted border-ink/10 pt-3">
          <svg viewBox="0 0 220 36" className="w-full opacity-20" aria-hidden="true">
            {SKILL_CATEGORIES.map((cat, i) => {
              const x = 12 + i * 42;
              return (
                <g key={cat.name}>
                  <rect
                    x={x}
                    y={8}
                    width={34}
                    height={20}
                    rx="2"
                    fill="none"
                    stroke="#b8956a"
                    strokeWidth="0.6"
                  />
                  <text
                    x={x + 17}
                    y={21}
                    textAnchor="middle"
                    fontSize="9"
                    fill="#4a3f35"
                    fontFamily="monospace"
                  >
                    {cat.skills.length}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </>
  );
}
