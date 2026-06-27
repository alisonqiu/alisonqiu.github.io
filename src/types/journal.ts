export type JournalPhase = "closed" | "opening" | "open" | "closing";

export type FlipDirection = "forward" | "backward";

export type ChapterId = "about" | "experience" | "projects" | "skills" | "afk";

export interface JournalState {
  phase: JournalPhase;
  currentSpread: number;
  isFlipping: boolean;
  flipDirection: FlipDirection;
  targetSpread: number | null;
}
