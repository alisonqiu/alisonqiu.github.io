"use client";

import dynamic from "next/dynamic";
import { JournalProvider } from "@/context/JournalContext";
import DeskScene from "@/components/desk/DeskScene";
import { JOURNAL_STYLE } from "@/constants/journal";

const Journal = dynamic(() => import("@/components/journal/Journal"), {
  ssr: false,
  loading: () => (
    <div
      className="flex items-center justify-center"
      style={JOURNAL_STYLE}
      aria-label="Loading journal"
    >
      <div className="h-8 w-8 animate-pulse rounded-full bg-gold/30" />
    </div>
  ),
});

export default function Workbench() {
  return (
    <JournalProvider>
      <a
        href="#journal-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to journal
      </a>
      <DeskScene>
        <div id="journal-main">
          <Journal />
        </div>
      </DeskScene>
    </JournalProvider>
  );
}
