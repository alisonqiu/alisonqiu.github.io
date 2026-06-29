"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";

const PROJECT_COLORS = [
  "#8B6914",
  "#5C4A32",
  "#6B5344",
  "#7A6248",
  "#4A6741",
  "#3D5A6C",
];

export default function ProjectsChapter() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];
  const activeIndex = PROJECTS.findIndex((p) => p.id === activeId);

  return (
    <>
      {/* Left page — bookmark tabs + project details */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
        <h2 className="type-page-title text-ink">Projects</h2>
        <div className="mb-3 h-px w-12 bg-gold/50" />

        <div className="mb-4 flex flex-wrap gap-1.5" role="tablist" aria-label="Projects">
          {PROJECTS.map((project, i) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={activeId === project.id}
              onClick={() => setActiveId(project.id)}
              className={`bookmark-tab type-caption font-medium text-white ${
                activeId === project.id ? "active" : ""
              }`}
              style={{
                backgroundColor: PROJECT_COLORS[i % PROJECT_COLORS.length],
                padding: "6px 10px",
                minWidth: "56px",
              }}
            >
              {project.title.split(" ")[0]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-1 flex-col overflow-hidden"
          >
            <h3 className="type-section-title text-ink">{active.title}</h3>
            <p className="type-label mt-1 text-ink-muted">{active.date}</p>

            <p className="type-body-sm mt-4 text-ink-muted">{active.overview}</p>

            <div className="page-scroll mt-4 flex-1 space-y-4 overflow-y-auto pr-1">
              <div>
                <span className="type-label text-gold">Problem</span>
                <p className="type-body-sm mt-1.5 text-ink-muted">{active.problem}</p>
              </div>
              <div>
                <span className="type-label text-gold">Solution</span>
                <p className="type-body-sm mt-1.5 text-ink-muted">{active.solution}</p>
              </div>
            </div>

            <p className="handwriting mt-3 text-base text-gold">★ {active.highlight}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right page — technologies + github */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden border-l border-ink/5 p-5 sm:p-6">
        <p className="type-label mb-2 text-gold">Stack</p>

        <div className="flex flex-wrap gap-2">
          {active.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              className="type-tag rounded border border-ink/10 bg-cream-dark/60 px-2.5 py-1 text-ink"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {active.github && (
          <a
            href={active.github}
            target="_blank"
            rel="noopener noreferrer"
            className="type-caption mt-5 inline-flex items-center gap-1 font-mono text-gold hover:underline"
          >
            View on GitHub →
          </a>
        )}

        {/* Blueprint-style schematic */}
        <div className="mt-auto">
          <p className="type-label mb-2 text-gold">Schematic</p>
          <svg viewBox="0 0 200 80" className="w-full opacity-25" aria-hidden="true">
            <rect
              x="10"
              y="10"
              width="50"
              height="60"
              fill="none"
              stroke={PROJECT_COLORS[activeIndex % PROJECT_COLORS.length]}
              strokeWidth="0.8"
            />
            <rect x="75" y="20" width="50" height="40" fill="none" stroke="#b8956a" strokeWidth="0.5" />
            <rect x="140" y="25" width="50" height="30" fill="none" stroke="#b8956a" strokeWidth="0.5" />
            <line x1="60" y1="40" x2="75" y2="40" stroke="#b8956a" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="125" y1="40" x2="140" y2="40" stroke="#b8956a" strokeWidth="0.5" strokeDasharray="2 2" />
            <text x="35" y="44" textAnchor="middle" fontSize="8" fill="#4a3f35" fontFamily="monospace">
              input
            </text>
            <text x="100" y="44" textAnchor="middle" fontSize="8" fill="#4a3f35" fontFamily="monospace">
              build
            </text>
            <text x="165" y="44" textAnchor="middle" fontSize="8" fill="#4a3f35" fontFamily="monospace">
              ship
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
