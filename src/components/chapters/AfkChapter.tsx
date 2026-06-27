"use client";

import { motion } from "framer-motion";
import { AFK } from "@/data/portfolio";

export default function AfkChapter() {
  return (
    <>
      {/* Left page — reading & fun facts */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden p-4 sm:p-5">
        <div className="coffee-stain bottom-20 -left-2 h-14 w-14 opacity-70" />

        <h2
          className="text-xl font-semibold text-ink"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          AFK
        </h2>
        <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">
          {AFK.subtitle}
        </p>
        <div className="mb-3 h-px w-12 bg-gold/50" />

        <div className="page-scroll flex-1 space-y-3 overflow-y-auto pr-0.5">
          {/* Goodreads bookmark */}
          <motion.a
            href={AFK.goodreads.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-sm border border-gold/30 bg-cream-dark/60 p-3 transition-colors hover:border-gold hover:bg-cream"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 10px), 50% 100%, 0 calc(100% - 10px))",
            }}
          >
            <span className="font-mono text-[9px] uppercase tracking-wider text-gold">
              Currently reading
            </span>
            <p
              className="mt-1 text-sm font-medium text-ink group-hover:text-gold"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {AFK.goodreads.label} →
            </p>
            <p className="mt-0.5 text-[10px] text-ink-muted">{AFK.goodreads.note}</p>
          </motion.a>

          {/* Fun facts */}
          <section>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-gold">
              Fun facts
            </p>
            <ul className="space-y-2">
              {AFK.funFacts.map((fact, i) => (
                <motion.li
                  key={fact}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="sticky-note relative p-2.5"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                >
                  <p
                    className="text-[11px] leading-snug text-ink"
                    style={{ fontFamily: "var(--font-caveat)" }}
                  >
                    {fact}
                  </p>
                </motion.li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Right page — quotes, podcasts, thoughts */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden border-l border-ink/5 p-4 sm:p-5">
        <div className="page-scroll flex-1 space-y-3 overflow-y-auto pr-0.5">
          {/* Quotes */}
          <section>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-gold">
              Favorite quotes
            </p>
            <ul className="space-y-2.5">
              {AFK.quotes.map((quote, i) => (
                <motion.li
                  key={quote.text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="border-l-2 border-gold/40 pl-2.5"
                >
                  <p
                    className="text-[11px] italic leading-relaxed text-ink-muted"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] text-gold">— {quote.author}</p>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Podcasts */}
          <section>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-gold">
              Podcast rabbit holes
            </p>
            <ul className="space-y-2">
              {AFK.podcasts.map((pod, i) => (
                <motion.li
                  key={`${pod.show}-${pod.episode}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="rounded-sm border border-dashed border-ink/12 bg-cream/50 p-2"
                >
                  <a
                    href={pod.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-ink hover:text-gold"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {pod.show}
                  </a>
                  <p className="font-mono text-[9px] text-ink-muted">{pod.episode}</p>
                  <p
                    className="mt-1 text-[10px] leading-snug text-ink-muted"
                    style={{ fontFamily: "var(--font-caveat)" }}
                  >
                    {pod.thought}
                  </p>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Random thoughts */}
          <section>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-gold">
              Marginalia
            </p>
            <ul className="space-y-2">
              {AFK.thoughts.map((item) => (
                <li key={item.text} className="flex gap-2">
                  <span className="shrink-0 font-mono text-[8px] text-gold/70">{item.date}</span>
                  <p
                    className="text-[10px] leading-relaxed text-ink-muted"
                    style={{ fontFamily: "var(--font-caveat)" }}
                  >
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p
          className="handwriting mt-2 border-t border-dotted border-ink/10 pt-2 text-center text-xs text-ink-muted/80"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          add more chaos here anytime
        </p>
      </div>
    </>
  );
}
