"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useJournal } from "@/context/JournalContext";
import TableOfContents from "./TableOfContents";
import AboutChapter from "@/components/chapters/AboutChapter";
import ExperienceChapter from "@/components/chapters/ExperienceChapter";
import ProjectsChapter from "@/components/chapters/ProjectsChapter";
import SkillsChapter from "@/components/chapters/SkillsChapter";
import AfkChapter from "@/components/chapters/AfkChapter";
import ChapterTabs from "./ChapterTabs";
import Cover from "./Cover";
import { JOURNAL_FULLSCREEN_STYLE, JOURNAL_STYLE } from "@/constants/journal";
import { TOTAL_SPREADS } from "@/data/portfolio";

function TocWelcomePage() {
  return (
    <div className="paper-texture relative flex h-full flex-col items-center justify-center overflow-hidden p-6">
      <div className="coffee-stain top-12 left-8 h-16 w-16" />
      <motion.svg
        viewBox="0 0 200 160"
        className="w-40 opacity-30"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <rect x="60" y="20" width="80" height="100" rx="2" fill="none" stroke="#b8956a" strokeWidth="1" />
        <line x1="100" y1="20" x2="100" y2="120" stroke="#b8956a" strokeWidth="0.5" />
        {[40, 55, 70, 85, 100].map((y) => (
          <line key={y} x1="70" y1={y} x2="90" y2={y} stroke="#b8956a" strokeWidth="0.5" opacity="0.5" />
        ))}
        <path d="M30 140 Q100 100, 170 140" fill="none" stroke="#b8956a" strokeWidth="0.8" />
      </motion.svg>
      <p
        className="handwriting mt-4 text-center text-2xl text-ink-muted"
        style={{ fontFamily: "var(--font-caveat)" }}
      >
        an engineer&apos;s journal
      </p>
      <p className="type-body-sm mt-3 text-center text-ink-muted/80">
        Turn the page or select a chapter →
      </p>
    </div>
  );
}

const SPREADS: ReactNode[] = [
  <>
    <TableOfContents />
    <TocWelcomePage />
  </>,
  <AboutChapter />,
  <ExperienceChapter />,
  <ProjectsChapter />,
  <SkillsChapter />,
  <AfkChapter />,
];

const COVER_ANIMATING = new Set(["opening", "closing"]);

export default function Journal() {
  const {
    phase,
    currentSpread,
    isFlipping,
    flipDirection,
    turnPage,
    openToAbout,
    closeCover,
    canGoForward,
    canGoBack,
  } = useJournal();

  const touchStartX = useRef(0);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const isOpen = phase === "open";
  const isCoverAnimating = COVER_ANIMATING.has(phase);
  const isFullscreen = phase !== "closed";

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isCoverAnimating || isFlipping) return;

      if (phase === "closed") {
        if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "Enter") {
          e.preventDefault();
          openToAbout();
        }
        return;
      }

      if (phase !== "open") return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        if (canGoForward) turnPage("forward");
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "Escape") {
        e.preventDefault();
        if (canGoBack) turnPage("backward");
      }
    },
    [phase, isCoverAnimating, isFlipping, canGoForward, canGoBack, turnPage, openToAbout]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isCoverAnimating || isFlipping) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (phase === "closed") {
      if (diff > 50) openToAbout();
      return;
    }

    if (phase !== "open") return;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && canGoForward) turnPage("forward");
      else if (diff < 0 && canGoBack) turnPage("backward");
    }
  };

  const handlePointerDown = (e: React.PointerEvent, corner: "left" | "right") => {
    if (!isOpen || isFlipping) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent, corner: "left" | "right") => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - dragStartX.current;
    if (corner === "right" && diff < -30 && canGoForward) turnPage("forward");
    if (corner === "left" && diff > 30 && canGoBack) turnPage("backward");
  };

  const handleCornerClick = (corner: "left" | "right") => {
    if (isCoverAnimating || isFlipping) return;

    if (phase === "closed" && corner === "right") {
      openToAbout();
      return;
    }

    if (!isOpen) return;

    if (corner === "right" && canGoForward) turnPage("forward");
    if (corner === "left" && canGoBack) {
      if (currentSpread <= 1) closeCover();
      else turnPage("backward");
    }
  };

  const coverRotation =
    phase === "closed" || phase === "closing" ? 0 : phase === "opening" ? -160 : -165;

  return (
    <div
      className={isFullscreen ? "relative h-full w-full" : "relative"}
      style={{ perspective: 2000 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="application"
      aria-label="Portfolio journal"
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          ...(isFullscreen ? JOURNAL_FULLSCREEN_STYLE : JOURNAL_STYLE),
          transformStyle: "preserve-3d",
        }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Journal body */}
        <div
          className={`absolute inset-0 ${isFullscreen ? "" : "rounded-r-sm rounded-l-md"}`}
          style={{
            background: "linear-gradient(to right, #e8dfd0, #f5f0e6, #e8dfd0)",
            boxShadow: isFullscreen
              ? "none"
              : "4px 8px 32px rgba(0,0,0,0.45), 0 2px 4px rgba(0,0,0,0.2)",
            transform: "translateZ(-2px)",
          }}
        />

        {!isFullscreen &&
          [1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute rounded-r-sm"
              style={{
                top: i,
                bottom: i,
                left: 4 + i,
                right: -i,
                background: "#e8dfd0",
                zIndex: i,
              }}
            />
          ))}

        {/* Journal pages — visible when open or animating open */}
        {(isOpen || phase === "opening") && (
          <div
            className={`absolute inset-0 z-10 grid grid-cols-2 overflow-hidden ${
              isFullscreen ? "" : "rounded-r-sm"
            }`}
            style={{ marginLeft: isFullscreen ? 0 : 12 }}
          >
            <motion.div
              key={currentSpread}
              className="col-span-2 grid h-full grid-cols-2"
              initial={
                isFlipping
                  ? {
                      opacity: 0.7,
                      rotateY: flipDirection === "forward" ? -8 : 8,
                    }
                  : false
              }
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.4 }}
            >
              {SPREADS[currentSpread]}
            </motion.div>

            {/* Back to cover — visible on About Me */}
            {currentSpread === 1 && (
              <button
                type="button"
                onClick={closeCover}
                className="handwriting absolute right-3 bottom-3 z-30 rounded-sm bg-cream/90 px-3 py-2 text-base text-ink-muted shadow-md backdrop-blur-sm transition-colors hover:text-gold"
                style={{ fontFamily: "var(--font-caveat)" }}
                aria-label="Close journal and return to cover"
              >
                ← cover
              </button>
            )}

            <button
              type="button"
              className="absolute bottom-0 left-0 z-20 h-16 w-16 cursor-pointer opacity-0 hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, transparent 50%, rgba(184,149,106,0.15) 50%)",
              }}
              aria-label={currentSpread <= 1 ? "Return to cover" : "Previous page"}
              onClick={() => handleCornerClick("left")}
              onPointerDown={(e) => handlePointerDown(e, "left")}
              onPointerUp={(e) => handlePointerUp(e, "left")}
              disabled={!canGoBack}
            />
            <button
              type="button"
              className="absolute right-0 bottom-0 z-20 h-16 w-16 cursor-pointer opacity-0 hover:opacity-100"
              style={{
                background:
                  "linear-gradient(-135deg, transparent 50%, rgba(184,149,106,0.15) 50%)",
              }}
              aria-label="Next page"
              onClick={() => handleCornerClick("right")}
              onPointerDown={(e) => handlePointerDown(e, "right")}
              onPointerUp={(e) => handlePointerUp(e, "right")}
              disabled={!canGoForward}
            />

            {isOpen && <ChapterTabs />}
          </div>
        )}

        {/* Cover */}
        <motion.div
          className="absolute inset-0 z-30"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            pointerEvents: isOpen && !isCoverAnimating ? "none" : "auto",
          }}
          animate={{ rotateY: coverRotation }}
          transition={{
            duration: isCoverAnimating ? 1.2 : 0,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Cover isOpen={isOpen} isFullscreen={isFullscreen} onOpen={openToAbout} />
        </motion.div>

        {/* Page indicator */}
        {isOpen && (
          <div
            className={`absolute left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 ${
              isFullscreen ? "bottom-4" : "-bottom-8"
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            {Array.from({ length: TOTAL_SPREADS }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSpread ? "w-6 bg-gold" : "w-1.5 bg-gold/30"
                }`}
                aria-hidden="true"
              />
            ))}
            <span className="sr-only">
              Page {currentSpread + 1} of {TOTAL_SPREADS}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
