"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT } from "@/data/portfolio";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

const LINKS = [
  { href: CONTACT.github, label: "GitHub", icon: GitHubIcon },
  { href: CONTACT.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: EmailIcon },
];

interface CoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function Cover({ isOpen, onOpen }: CoverProps) {
  return (
    <div
      className="leather-texture absolute inset-0 overflow-hidden rounded-r-sm rounded-l-md"
      style={{
        transformOrigin: "left center",
        backfaceVisibility: "hidden",
        boxShadow: isOpen
          ? "inset -4px 0 12px rgba(0,0,0,0.3)"
          : "4px 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 z-20 w-3 rounded-l-md"
        style={{
          background: "linear-gradient(to right, #2a1815, #4a2c2a, #3d2420)",
          boxShadow: "inset -2px 0 4px rgba(0,0,0,0.4)",
        }}
      />

      <div className="absolute inset-3 z-10 rounded-sm border border-[#8a6555]/30" />

      <div className="absolute inset-3 overflow-hidden rounded-sm bg-[#4a3528]">
        <Image
          src="/images/alison-portrait.png"
          alt="Alison Qiu"
          fill
          sizes="400px"
          className="object-contain object-center"
          priority
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(255,220,160,0.08) 0%, transparent 55%), linear-gradient(to bottom, transparent 50%, rgba(26,20,16,0.75) 100%)",
          }}
        />

        {!isOpen && (
          <button
            type="button"
            onClick={onOpen}
            className="absolute inset-0 bottom-36 z-[5] cursor-pointer"
            aria-label="Open journal to About Me"
          />
        )}

        <div className="absolute right-0 bottom-0 left-0 z-10 px-4 pb-5 pt-20 text-center">
          <h1
            className="text-2xl font-semibold tracking-wide sm:text-3xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#f5f0e6",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {CONTACT.name}
          </h1>

          <nav
            className="mt-3 flex flex-wrap items-center justify-center gap-2"
            aria-label="Contact links"
            onClick={(e) => e.stopPropagation()}
          >
            {LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-1 rounded-full border border-[#c4a882]/40 bg-black/30 px-2.5 py-1 text-[#e8dfd0] backdrop-blur-sm transition-colors hover:border-[#c4a882] hover:bg-black/45"
                aria-label={label}
                onClick={(e) => e.stopPropagation()}
              >
                <Icon />
                <span className="text-[10px] font-medium tracking-wide">{label}</span>
              </a>
            ))}
          </nav>

          {!isOpen && (
            <motion.button
              type="button"
              onClick={onOpen}
              className="handwriting mt-3 text-base text-[#d4b896] underline-offset-4 hover:underline"
              style={{ fontFamily: "var(--font-caveat)" }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              open here →
            </motion.button>
          )}
        </div>
      </div>

      <div className="absolute top-5 left-5 z-20 h-8 w-8 border-t border-l border-[#8a6555]/25" />
      <div className="absolute top-5 right-5 z-20 h-8 w-8 border-t border-r border-[#8a6555]/25" />
      <div className="absolute bottom-5 left-5 z-20 h-8 w-8 border-b border-l border-[#8a6555]/25" />
      <div className="absolute bottom-5 right-5 z-20 h-8 w-8 border-b border-r border-[#8a6555]/25" />
    </div>
  );
}
