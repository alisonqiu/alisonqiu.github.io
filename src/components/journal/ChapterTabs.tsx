"use client";

import { CHAPTERS } from "@/data/portfolio";
import { useJournal } from "@/context/JournalContext";
import type { ChapterId } from "@/types/journal";

export default function ChapterTabs() {
  const { currentSpread, goToChapter } = useJournal();

  return (
    <div
      className="absolute -right-3 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-1"
      aria-label="Chapter navigation"
    >
      {CHAPTERS.map((chapter) => {
        const isActive = currentSpread === chapter.spreadIndex;
        return (
          <button
            key={chapter.id}
            type="button"
            onClick={() => goToChapter(chapter.id as ChapterId)}
            className={`chapter-tab rounded-r-sm px-1.5 py-3 font-medium ${
              isActive
                ? "bg-gold text-ink shadow-md"
                : "bg-cream-dark/90 text-ink-muted hover:bg-gold/80 hover:text-ink"
            }`}
            aria-label={`Go to ${chapter.title}`}
            aria-current={isActive ? "true" : undefined}
          >
            {chapter.title}
          </button>
        );
      })}
    </div>
  );
}
