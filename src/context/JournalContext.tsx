"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CHAPTERS, TOTAL_SPREADS } from "@/data/portfolio";
import type { ChapterId, FlipDirection, JournalPhase } from "@/types/journal";

interface JournalContextValue {
  phase: JournalPhase;
  currentSpread: number;
  isFlipping: boolean;
  flipDirection: FlipDirection;
  openToAbout: () => void;
  closeCover: () => void;
  goToSpread: (index: number) => void;
  goToChapter: (chapterId: ChapterId) => void;
  turnPage: (direction: FlipDirection) => void;
  canGoForward: boolean;
  canGoBack: boolean;
  isCoverVisible: boolean;
}

const JournalContext = createContext<JournalContextValue | null>(null);

const FLIP_DURATION = 600;
const RAPID_FLIP_DURATION = 180;
const COVER_ANIMATION_MS = 1200;
const ABOUT_SPREAD = 1;

export function JournalProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<JournalPhase>("closed");
  const [currentSpread, setCurrentSpread] = useState(ABOUT_SPREAD);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<FlipDirection>("forward");

  const openToAbout = useCallback(() => {
    if (phase !== "closed" || isFlipping) return;
    setCurrentSpread(ABOUT_SPREAD);
    setPhase("opening");
    setTimeout(() => setPhase("open"), COVER_ANIMATION_MS);
  }, [phase, isFlipping]);

  const closeCover = useCallback(() => {
    if (phase !== "open" || isFlipping) return;
    setPhase("closing");
    setTimeout(() => setPhase("closed"), COVER_ANIMATION_MS);
  }, [phase, isFlipping]);

  const animateToSpread = useCallback(
    (target: number, rapid = false) => {
      if (phase !== "open" || isFlipping || target === currentSpread) return;
      if (target < 0 || target >= TOTAL_SPREADS) return;

      const direction: FlipDirection = target > currentSpread ? "forward" : "backward";
      const steps = Math.abs(target - currentSpread);
      const duration = rapid ? RAPID_FLIP_DURATION : FLIP_DURATION;

      setIsFlipping(true);
      setFlipDirection(direction);

      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCurrentSpread((prev) =>
          direction === "forward" ? Math.min(prev + 1, target) : Math.max(prev - 1, target)
        );
        if (step >= steps) {
          clearInterval(interval);
          setTimeout(() => setIsFlipping(false), duration);
        }
      }, duration);

      return () => clearInterval(interval);
    },
    [currentSpread, isFlipping, phase]
  );

  const goToSpread = useCallback(
    (index: number) => {
      if (phase === "closed") {
        openToAbout();
        if (index !== ABOUT_SPREAD) {
          setTimeout(() => animateToSpread(index, true), COVER_ANIMATION_MS + 50);
        }
        return;
      }
      animateToSpread(index, false);
    },
    [animateToSpread, openToAbout, phase]
  );

  const goToChapter = useCallback(
    (chapterId: ChapterId) => {
      const chapter = CHAPTERS.find((c) => c.id === chapterId);
      if (!chapter) return;
      if (phase === "closed") {
        openToAbout();
        if (chapter.spreadIndex !== ABOUT_SPREAD) {
          setTimeout(
            () => animateToSpread(chapter.spreadIndex, true),
            COVER_ANIMATION_MS + 50
          );
        }
        return;
      }
      animateToSpread(chapter.spreadIndex, true);
    },
    [animateToSpread, openToAbout, phase]
  );

  const turnPage = useCallback(
    (direction: FlipDirection) => {
      if (phase === "closed") {
        if (direction === "forward") openToAbout();
        return;
      }
      if (phase !== "open" || isFlipping) return;

      if (direction === "backward" && currentSpread <= ABOUT_SPREAD) {
        closeCover();
        return;
      }

      const next =
        direction === "forward" ? currentSpread + 1 : currentSpread - 1;
      animateToSpread(next, false);
    },
    [
      animateToSpread,
      closeCover,
      currentSpread,
      isFlipping,
      openToAbout,
      phase,
    ]
  );

  const isCoverVisible = phase === "closed" || phase === "opening" || phase === "closing";

  const value = useMemo(
    () => ({
      phase,
      currentSpread,
      isFlipping,
      flipDirection,
      openToAbout,
      closeCover,
      goToSpread,
      goToChapter,
      turnPage,
      isCoverVisible,
      canGoForward:
        phase === "closed" ||
        (phase === "open" && currentSpread < TOTAL_SPREADS - 1 && !isFlipping),
      canGoBack: phase === "open" && !isFlipping,
    }),
    [
      phase,
      currentSpread,
      isFlipping,
      flipDirection,
      openToAbout,
      closeCover,
      goToSpread,
      goToChapter,
      turnPage,
    ]
  );

  return (
    <JournalContext.Provider value={value}>{children}</JournalContext.Provider>
  );
}

export function useJournal() {
  const ctx = useContext(JournalContext);
  if (!ctx) throw new Error("useJournal must be used within JournalProvider");
  return ctx;
}
