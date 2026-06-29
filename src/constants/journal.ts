/** Portrait journal — tall format; wide enough for two-page spreads inside */
export const JOURNAL_WIDTH = "min(92vw, 520px)";
export const JOURNAL_HEIGHT = "min(92vh, 720px)";

export const JOURNAL_STYLE = {
  width: JOURNAL_WIDTH,
  height: JOURNAL_HEIGHT,
} as const;

export const JOURNAL_FULLSCREEN_STYLE = {
  width: "100%",
  height: "100%",
} as const;

/** Shared responsive layout for journal page columns */
export const JOURNAL_PAGE =
  "relative flex h-auto flex-col overflow-visible p-5 md:h-full md:min-h-0 md:overflow-hidden sm:p-6";

/** Separates stacked right pages on mobile; left border on desktop */
export const JOURNAL_PAGE_DIVIDER = "border-t border-ink/5 pt-6 md:border-t-0 md:pt-5";
