"use client";

import { motion } from "framer-motion";
import { CHAPTERS } from "@/data/portfolio";
import { useJournal } from "@/context/JournalContext";
import type { ChapterId } from "@/types/journal";

export default function TableOfContents() {
  const { currentSpread, goToChapter } = useJournal();

  return (
    <div className="paper-texture relative flex h-full flex-col p-6 sm:p-8">
      <div className="coffee-stain -right-4 -bottom-4 h-24 w-24" />

      <h2 className="type-page-title mb-2 text-ink">Table of Contents</h2>
      <div className="mb-6 h-px w-full bg-ink/10" />

      <ol className="flex flex-1 flex-col justify-center gap-5">
        {CHAPTERS.map((chapter, i) => (
          <motion.li
            key={chapter.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
          >
            <button
              type="button"
              onClick={() => goToChapter(chapter.id as ChapterId)}
              className={`group flex w-full items-baseline gap-4 text-left transition-colors ${
                currentSpread === chapter.spreadIndex
                  ? "text-gold"
                  : "text-ink hover:text-gold"
              }`}
              aria-current={currentSpread === chapter.spreadIndex ? "page" : undefined}
            >
              <span
                className="text-4xl font-light text-gold/60"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="type-section-title block font-medium">{chapter.title}</span>
                <span className="mt-1 block border-b border-dotted border-ink/15 group-hover:border-gold/40" />
              </span>
              <span className="text-base text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </button>
          </motion.li>
        ))}
      </ol>

      <p className="handwriting mt-4 text-xl text-ink-muted">
        begin anywhere — every page tells a story
      </p>
    </div>
  );
}
