"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/data/portfolio";
import { useJournal } from "@/context/JournalContext";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1.5 font-mono text-[9px] uppercase tracking-wider text-gold">
      {children}
    </p>
  );
}

export default function AboutChapter() {
  const { goToChapter } = useJournal();

  return (
    <>
      {/* Left page — who & where */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden p-3.5 sm:p-4">
        <div className="coffee-stain top-6 right-3 h-12 w-12 opacity-60" />

        <h2
          className="text-2xl font-semibold text-ink sm:text-3xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          About Me
        </h2>
        <div className="mb-2.5 h-px w-10 bg-gold/50" />

        <SectionLabel>I am</SectionLabel>
        <ul className="mb-3 flex flex-wrap gap-1">
          {ABOUT.identities.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 + i * 0.025, duration: 0.25 }}
              className="rounded-sm border border-ink/10 bg-cream-dark/50 px-1.5 py-0.5 font-mono text-[8px] leading-tight text-ink-muted"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="mb-3 text-[10px] leading-snug text-ink-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {ABOUT.work}
        </motion.p>

        <p
          className="mt-auto text-sm text-gold"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          always curious, rarely bored
        </p>
      </div>

      {/* Right page — exploring & rabbit holes */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden border-l border-ink/5 p-3.5 sm:p-4">


        <motion.button
          type="button"
          onClick={() => goToChapter("afk")}
          className="group mb-3 w-full cursor-pointer rounded-sm border-2 border-gold/50 bg-cream-dark/80 px-3 py-2.5 text-left shadow-sm transition-all hover:border-gold hover:bg-gold/10 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          aria-label="Go to AFK chapter — personal interests, Goodreads, quotes, and podcasts"
        >
          <span className="flex items-center justify-between gap-2">
            <span className="block">
              <span
                className="mt-1 block text-[11px] font-medium leading-snug text-ink group-hover:text-gold"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                If you have no interest in software engineering, click here to go to AFK!
              </span>
            </span>
            <span
              className="shrink-0 text-lg text-gold transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </motion.button>

        <SectionLabel>Exploring</SectionLabel>
        <motion.p
          className="mb-3 text-[10px] leading-snug text-ink-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {ABOUT.freeTime}
        </motion.p>

        <SectionLabel>Current rabbit holes</SectionLabel>
        <ul className="mb-3 space-y-1.5">
          {ABOUT.rabbitHoles.map((hole, i) => (
            <motion.li
              key={hole.label}
              className="flex items-start gap-1.5"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
            >
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold/70" aria-hidden="true" />
              {hole.href ? (
                <a
                  href={hole.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] leading-snug text-ink-muted underline decoration-gold/40 decoration-dotted underline-offset-2 hover:text-gold"
                >
                  {hole.label}
                </a>
              ) : (
                <span className="text-[10px] leading-snug text-ink-muted">{hole.label}</span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
