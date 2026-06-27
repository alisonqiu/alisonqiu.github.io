"use client";

import { motion } from "framer-motion";

interface ArchitectureDiagramProps {
  nodes: string[];
  active?: boolean;
}

export default function ArchitectureDiagram({
  nodes,
  active = true,
}: ArchitectureDiagramProps) {
  return (
    <div className="relative w-full py-2" aria-hidden={!active}>
      <svg viewBox="0 0 320 80" className="w-full" role="img" aria-label="Architecture diagram">
        {nodes.map((node, i) => {
          const x = 10 + (i * 300) / Math.max(nodes.length - 1, 1);
          return (
            <g key={node}>
              {i < nodes.length - 1 && (
                <motion.line
                  x1={x + 28}
                  y1="40"
                  x2={10 + ((i + 1) * 300) / Math.max(nodes.length - 1, 1) - 28}
                  y2="40"
                  stroke="#b8956a"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={active ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                />
              )}
              <motion.rect
                x={x - 28}
                y="22"
                width="56"
                height="36"
                rx="4"
                fill="#f5f0e6"
                stroke="#b8956a"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
              />
              <motion.text
                x={x}
                y="44"
                textAnchor="middle"
                fontSize="7"
                fill="#1a1410"
                fontFamily="var(--font-jetbrains), monospace"
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.3 }}
              >
                {node.length > 10 ? node.slice(0, 9) + "…" : node}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
