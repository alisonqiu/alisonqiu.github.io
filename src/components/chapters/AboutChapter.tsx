"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ABOUT } from "@/data/portfolio";
import { useJournal } from "@/context/JournalContext";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="type-label mb-2 text-gold">{children}</p>;
}

export default function AboutChapter() {
  const { goToChapter } = useJournal();
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Left page — who & where */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
        <div className="coffee-stain top-6 right-3 h-12 w-12 opacity-60" />

        <h2 className="type-page-title text-ink">About Me</h2>
        <div className="mb-3 h-px w-10 bg-gold/50" />

        <SectionLabel>I am</SectionLabel>
        <ul className="mb-4 flex flex-wrap gap-1.5">
          {ABOUT.identities.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 + i * 0.025, duration: 0.25 }}
              className="type-body-sm rounded-sm border border-ink/10 bg-cream-dark/50 px-2.5 py-1 text-ink-muted"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="relative mx-auto mb-4 w-full max-w-[168px] -rotate-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="rounded-sm border border-ink/15 bg-cream p-1.5 shadow-[0_3px_12px_rgba(26,20,16,0.12)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/about-grand-canyon.png"
                alt="Alison smiling at the Grand Canyon during sunset"
                fill
                sizes="168px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          className="type-body-sm mb-4 text-ink-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {ABOUT.work}
        </motion.p>

        <p className="handwriting mt-auto text-lg text-gold">always curious, rarely bored</p>
      </div>

      {/* Right page — exploring & rabbit holes */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden border-l border-ink/5 p-5 sm:p-6">
        <motion.div
          className="relative mb-5 pt-1"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.55, y: 16, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 14,
            delay: 0.08,
          }}
        >
          <motion.span
            className="type-label absolute -top-2 right-2 z-10 rounded-full border border-gold/60 bg-gold px-2.5 py-1 text-cream shadow-[0_2px_8px_rgba(184,149,106,0.45)]"
            initial={prefersReducedMotion ? false : { scale: 0, rotate: 18 }}
            animate={{ scale: 1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 500, damping: 12, delay: 0.35 }}
            aria-hidden="true"
          >
            Psst!
          </motion.span>

          <motion.button
            type="button"
            onClick={() => goToChapter("afk")}
            className="afk-callout group relative w-full cursor-pointer rounded-2xl border-2 border-gold/70 bg-cream px-4 py-3.5 text-left shadow-[0_4px_18px_rgba(184,149,106,0.28)] transition-colors hover:border-gold hover:bg-gold/10 hover:shadow-[0_6px_22px_rgba(184,149,106,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 4px 18px rgba(184, 149, 106, 0.28)",
                      "0 8px 26px rgba(184, 149, 106, 0.42)",
                      "0 4px 18px rgba(184, 149, 106, 0.28)",
                    ],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Go to AFK chapter — personal interests, Goodreads, quotes, and podcasts"
          >
            <span className="flex items-center justify-between gap-3">
              <span className="block pr-1">
                <span className="handwriting block text-lg font-semibold leading-snug text-ink group-hover:text-gold sm:text-xl">
                  If you have no interest in software engineering, click here to see my personal interests!
                </span>
              </span>
              <span
                className="shrink-0 text-2xl text-gold transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </motion.button>
        </motion.div>

        <SectionLabel>Exploring</SectionLabel>
        <motion.p
          className="type-body-sm mb-4 text-ink-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {ABOUT.freeTime}
        </motion.p>

        <SectionLabel>Current rabbit holes</SectionLabel>
        <ul className="mb-3 space-y-2">
          {ABOUT.rabbitHoles.map((hole, i) => (
            <motion.li
              key={hole.label}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" aria-hidden="true" />
              {hole.href ? (
                <a
                  href={hole.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body-sm text-ink-muted underline decoration-gold/40 decoration-dotted underline-offset-2 hover:text-gold"
                >
                  {hole.label}
                </a>
              ) : (
                <span className="type-body-sm text-ink-muted">{hole.label}</span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
