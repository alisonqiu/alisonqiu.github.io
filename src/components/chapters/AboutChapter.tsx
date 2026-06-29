"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ABOUT } from "@/data/portfolio";
import { useJournal } from "@/context/JournalContext";
import { JOURNAL_PAGE, JOURNAL_PAGE_DIVIDER } from "@/constants/journal";
import type { ChapterId } from "@/types/journal";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="type-label mb-2 text-gold">{children}</p>;
}

type AdventurePath = "engineering" | "hobbies";

const PATHS: {
  id: AdventurePath;
  chapter: ChapterId;
  label: string;
  flavor: string;
  emoji: string;
}[] = [
  {
    id: "engineering",
    chapter: "experience",
    label: "I'm here for the software engineering work",
    flavor: "Turning to the engineering chapter…",
    emoji: "",
  },
  {
    id: "hobbies",
    chapter: "afk",
    label: "I'm more curious about your hobbies & interests",
    flavor: "Turning to the AFK chapter…",
    emoji: "",
  },
];

function ChooseYourAdventure() {
  const { goToChapter } = useJournal();
  const prefersReducedMotion = useReducedMotion();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isReady = useInView(sentinelRef, { once: true, amount: 0.6 });
  const [chosen, setChosen] = useState<AdventurePath | null>(null);

  const handleChoice = (path: AdventurePath) => {
    if (chosen) return;
    setChosen(path);
    const { chapter } = PATHS.find((p) => p.id === path)!;
    window.setTimeout(() => goToChapter(chapter), prefersReducedMotion ? 0 : 750);
  };

  const chosenPath = PATHS.find((p) => p.id === chosen);

  return (
    <>
      <div ref={sentinelRef} className="h-1 w-full shrink-0" aria-hidden="true" />
      <AnimatePresence>
        {isReady && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="relative mt-6 rounded-sm border-2 border-dashed border-gold/50 bg-cream-dark/40 p-4 md:p-5"
            role="group"
            aria-label="Choose your adventure"
          >
            <p className="handwriting text-xl leading-snug text-ink md:text-2xl">
              To learn more about me, what brings you here today?
            </p>
            <p className="type-body-sm mt-1.5 text-ink-muted">Choose one:</p>

            <div className="mt-4 space-y-2.5">
              {PATHS.map((path, i) => {
                const isSelected = chosen === path.id;
                const isFaded = chosen !== null && !isSelected;

                return (
                  <motion.button
                    key={path.id}
                    type="button"
                    onClick={() => handleChoice(path.id)}
                    disabled={chosen !== null}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                    animate={{
                      opacity: isFaded ? 0.35 : 1,
                      x: 0,
                      scale: isSelected ? 1.02 : 1,
                    }}
                    transition={{ delay: prefersReducedMotion ? 0 : 0.12 + i * 0.1 }}
                    whileHover={chosen ? undefined : { x: 4 }}
                    whileTap={chosen ? undefined : { scale: 0.98 }}
                    className={`group flex w-full items-start gap-3 rounded-sm border px-3.5 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-default ${
                      isSelected
                        ? "border-gold bg-gold/15 shadow-[0_4px_16px_rgba(184,149,106,0.25)]"
                        : "border-ink/15 bg-cream hover:border-gold/60 hover:bg-gold/5"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className="type-label mt-0.5 shrink-0 text-gold" aria-hidden="true">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">
                      <span className="type-body-sm block font-medium text-ink group-hover:text-gold">
                        <span aria-hidden="true">{path.emoji} </span>
                        {path.label}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-gold transition-transform ${
                        isSelected ? "translate-x-1" : "opacity-0 group-hover:opacity-100"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {chosenPath && (
                <motion.p
                  key={chosenPath.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="handwriting mt-4 text-center text-lg text-gold"
                >
                  {chosenPath.flavor}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function AboutChapter() {
  return (
    <>
      {/* Left page — who & where */}
      <div className={`paper-texture ${JOURNAL_PAGE}`}>
        <div className="coffee-stain top-6 right-3 hidden h-12 w-12 opacity-60 sm:block" />

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

        <p className="handwriting mt-auto text-lg text-gold">I like to learn about random things</p>
      </div>

      {/* Right page — exploring & rabbit holes */}
      <div className={`paper-texture page-scroll ${JOURNAL_PAGE} ${JOURNAL_PAGE_DIVIDER} md:overflow-y-auto md:border-l md:border-ink/5`}>
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

        <ChooseYourAdventure />
      </div>
    </>
  );
}
