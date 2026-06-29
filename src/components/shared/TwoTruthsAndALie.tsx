"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export type Statement = {
  text: string;
  isLie: boolean;
};

function shuffleStatements(statements: Statement[]): Statement[] {
  const copy = [...statements];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

type TwoTruthsAndALieProps = {
  statements: Statement[];
};

export default function TwoTruthsAndALie({ statements }: TwoTruthsAndALieProps) {
  const shuffled = useMemo(() => shuffleStatements(statements), [statements]);
  const [wrongGuesses, setWrongGuesses] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);

  const handleSelect = (index: number) => {
    if (solved || wrongGuesses.includes(index)) return;

    if (shuffled[index].isLie) {
      setSolved(true);
    } else {
      setWrongGuesses((prev) => [...prev, index]);
    }
  };

  return (
    <section>
      <p className="type-label mb-1 text-gold">Let&apos;s play a game!!!</p>
      <p className="type-body-sm mb-3 text-ink-muted">
        Here are some fun facts about me. Click on the one you think is a lie:)
      </p>

      <ul className="space-y-2.5">
        {shuffled.map((statement, i) => {
          const isWrongGuess = wrongGuesses.includes(i);
          const isLie = statement.isLie;
          const showAsLie = solved && isLie;
          const showAsTruth = solved && !isLie;

          return (
            <motion.li
              key={statement.text}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
            >
              <button
                type="button"
                onClick={() => handleSelect(i)}
                disabled={solved || isWrongGuess}
                className={[
                  "sticky-note relative w-full p-3 text-left transition-all",
                  !solved && !isWrongGuess && "cursor-pointer hover:scale-[1.02] hover:shadow-md",
                  (solved || isWrongGuess) && "cursor-default",
                  showAsLie && "ring-2 ring-gold",
                  isWrongGuess && "opacity-60",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-label={
                  solved
                    ? `${statement.text}${isLie ? " — the lie" : " — true"}`
                    : `Pick as the lie: ${statement.text}`
                }
              >
                <p className="handwriting type-body-sm text-ink">{statement.text}</p>
                {isWrongGuess && !solved && (
                  <p className="type-label mt-1.5 text-ink-muted">Nope try again</p>
                )}
                {showAsLie && (
                  <p className="type-label mt-1.5 text-gold">
                    That&apos;s a lie! I can speak English, Mandarin, and Spanish though.
                  </p>
                )}
                {showAsTruth && (
                  <p className="type-label mt-1.5 text-ink-muted/70">True</p>
                )}
              </button>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
