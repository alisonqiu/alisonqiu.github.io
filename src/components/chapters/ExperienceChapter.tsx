"use client";

import { EXPERIENCES } from "@/data/portfolio";
import ExperienceBlueprintCard from "@/components/shared/ExperienceBlueprintCard";

export default function ExperienceChapter() {
  const midpoint = Math.ceil(EXPERIENCES.length / 2);

  return (
    <>
      {/* Left page */}
      <div className="graph-paper relative flex h-full flex-col overflow-hidden p-4 sm:p-5">
        <h2
          className="text-xl font-semibold text-ink"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Experience
        </h2>
        <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">
          in the corporate world
        </p>
        <div className="mb-2 h-px w-full border-t border-dashed border-ink/15" />

        <div className="page-scroll grid flex-1 grid-cols-1 gap-2 overflow-y-auto">
          {EXPERIENCES.slice(0, midpoint).map((exp, i) => (
            <ExperienceBlueprintCard key={exp.id} {...exp} index={i} />
          ))}
        </div>
      </div>

      {/* Right page */}
      <div className="graph-paper relative flex h-full flex-col overflow-hidden border-l border-ink/10 p-4 sm:p-5">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-ink-muted">
          Sheet 2 of 2
        </p>

        <div className="page-scroll grid flex-1 grid-cols-1 gap-2 overflow-y-auto">
          {EXPERIENCES.slice(midpoint).map((exp, i) => (
            <ExperienceBlueprintCard key={exp.id} {...exp} index={i + midpoint} />
          ))}
        </div>

        <p
          className="handwriting mt-2 text-center text-sm text-ink-muted"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          hover or tap to expand each card to see more details
        </p>
      </div>
    </>
  );
}
