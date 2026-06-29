"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AFK } from "@/data/portfolio";
import TwoTruthsAndALie from "@/components/shared/TwoTruthsAndALie";

export default function AfkChapter() {
  return (
    <>
      {/* Left page — reading & fun facts */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
        <div className="coffee-stain bottom-20 -left-2 h-14 w-14 opacity-70" />

        <h2 className="type-page-title text-ink">AFK</h2>
        <p className="type-label mt-1 text-ink-muted">{AFK.subtitle}</p>
        <div className="mb-4 h-px w-12 bg-gold/50" />

        <div className="page-scroll flex-1 space-y-4 overflow-y-auto pr-0.5">
          {/* Goodreads bookmark */}
          <motion.a
            href={AFK.goodreads.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-sm border border-gold/30 bg-cream-dark/60 p-4 transition-colors hover:border-gold hover:bg-cream"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 10px), 50% 100%, 0 calc(100% - 10px))",
            }}
          >
            <span className="type-label text-gold">Click here to see what I'm reading!</span>
            <p className="type-section-title mt-1.5 text-ink group-hover:text-gold">
              {AFK.goodreads.label} →
            </p>
            <p className="type-body-sm mt-1 text-ink-muted">{AFK.goodreads.note}</p>
          </motion.a>

          <TwoTruthsAndALie statements={AFK.twoTruthsAndALie} />
        </div>
      </div>

      {/* Right page — quotes, etc */}
      <div className="paper-texture relative flex h-full flex-col overflow-hidden border-l border-ink/5 p-5 sm:p-6">
        <div className="page-scroll flex-1 space-y-4 overflow-y-auto pr-0.5">
          <motion.div
            className="relative mx-auto w-full max-w-[200px] rotate-[1.5deg]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="rounded-sm border border-ink/15 bg-cream p-1.5 shadow-[0_3px_12px_rgba(26,20,16,0.12)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/afk-totoro-cotton-candy.png"
                  alt="Alison next to a Totoro-shaped cotton candy"
                  fill
                  sizes="200px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Quotes */}
          <section>
            <p className="type-label mb-2 text-gold">Favorite quotes</p>
            <ul className="space-y-3">
              {AFK.quotes.map((quote, i) => (
                <motion.li
                  key={quote.text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="border-l-2 border-gold/40 pl-3"
                >
                  <p
                    className="type-body-sm italic text-ink-muted"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <p className="type-label mt-1 text-gold">— {quote.author}</p>
                </motion.li>
              ))}
            </ul>
          </section>


        </div>

      </div>
    </>
  );
}
