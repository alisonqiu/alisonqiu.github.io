"use client";

import { EXPERIENCES } from "@/data/portfolio";
import ExperienceBlueprintCard from "@/components/shared/ExperienceBlueprintCard";

export default function ExperienceChapter() {
  const midpoint = Math.ceil(EXPERIENCES.length / 2);

  return (
    <>
      {/* Left page */}
      <div className="graph-paper relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
        <h2 className="type-page-title text-ink">Experience</h2>
        <p className="type-label mt-1 text-ink-muted">in the corporate world</p>
        <p className="handwriting mt-2 text-base text-gold">
          Hover over each card to see more details
        </p>
        <div className="mb-3 mt-2 h-px w-full border-t border-dashed border-ink/15" />

        <div className="page-scroll grid flex-1 grid-cols-1 gap-2.5 overflow-y-auto">
          {EXPERIENCES.slice(0, midpoint).map((exp, i) => (
            <ExperienceBlueprintCard key={exp.id} {...exp} index={i} />
          ))}
        </div>
      </div>

      {/* Right page */}
      <div className="graph-paper relative flex h-full flex-col overflow-hidden border-l border-ink/10 p-5 sm:p-6">
        <p className="type-label mb-3 text-ink-muted">Sheet 2 of 2</p>

        <div className="page-scroll grid flex-1 grid-cols-1 gap-2.5 overflow-y-auto">
          {EXPERIENCES.slice(midpoint).map((exp, i) => (
            <ExperienceBlueprintCard key={exp.id} {...exp} index={i + midpoint} />
          ))}
        </div>

        <p className="handwriting mt-3 text-center text-base text-gold/90">
          curious? rest your cursor on any role to peek inside →
        </p>
      </div>
    </>
  );
}
