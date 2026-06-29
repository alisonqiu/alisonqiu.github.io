"use client";

import type { ReactNode } from "react";
import DustParticles from "./DustParticles";

interface DeskSceneProps {
  children: ReactNode;
  showDesk?: boolean;
}

export default function DeskScene({ children, showDesk = true }: DeskSceneProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${
        showDesk ? "" : "bg-cream-dark"
      }`}
    >
      {showDesk && (
        <>
          <div className="wood-desk wood-grain absolute inset-0" aria-hidden="true" />

          {/* Sunlight */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 35% 15%, rgba(255, 230, 180, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 65% 25%, rgba(255, 210, 150, 0.08) 0%, transparent 40%)",
            }}
          />

          <DustParticles />

          {/* Desk surface vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
            }}
          />

          {/* Subtle desk edge */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-2"
            aria-hidden="true"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
            }}
          />
        </>
      )}

      <div
        className={`relative z-10 flex h-full w-full ${
          showDesk ? "items-center justify-center p-4 sm:p-8" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
