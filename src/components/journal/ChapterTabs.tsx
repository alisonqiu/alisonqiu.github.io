"use client";

import { CHAPTERS } from "@/data/portfolio";
import { useJournal } from "@/context/JournalContext";
import type { ChapterId } from "@/types/journal";

const MOBILE_LABELS: Record<(typeof CHAPTERS)[number]["id"], string> = {
  about: "About",
  experience: "Work",
  projects: "Projects",
  skills: "Skills",
  afk: "AFK",
};

export default function ChapterTabs() {
  const { currentSpread, goToChapter, phase } = useJournal();
  const isFullscreen = phase !== "closed";

  return (
    <>
      {/* Desktop — vertical edge tabs */}
      <div
        className={`absolute top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 md:flex ${
          isFullscreen ? "right-0" : "-right-3"
        }`}
        aria-label="Chapter navigation"
      >
        {CHAPTERS.map((chapter) => {
          const isActive = currentSpread === chapter.spreadIndex;
          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => goToChapter(chapter.id as ChapterId)}
              className={`chapter-tab rounded-r-sm px-2 py-3.5 font-medium ${
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

      {/* Mobile — bottom tab bar */}
      <nav
        className="absolute inset-x-0 bottom-0 z-30 flex items-stretch gap-0.5 border-t border-ink/10 bg-cream/95 px-1 pt-1.5 backdrop-blur-sm md:hidden"
        style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom, 0px))" }}
        aria-label="Chapter navigation"
      >
        {CHAPTERS.map((chapter) => {
          const isActive = currentSpread === chapter.spreadIndex;
          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => goToChapter(chapter.id as ChapterId)}
              className={`chapter-tab-mobile flex-1 rounded-sm px-1 py-2 text-center font-medium transition-colors ${
                isActive
                  ? "bg-gold text-ink shadow-sm"
                  : "text-ink-muted hover:bg-gold/15 hover:text-ink"
              }`}
              aria-label={`Go to ${chapter.title}`}
              aria-current={isActive ? "true" : undefined}
            >
              {MOBILE_LABELS[chapter.id]}
            </button>
          );
        })}
      </nav>
    </>
  );
}
