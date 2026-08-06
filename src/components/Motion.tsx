import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ZelligeOrnament() {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className="pointer-events-none absolute h-[34rem] w-[34rem] animate-spin-slow opacity-[0.16]"
    >
      <g fill="none" stroke="oklch(0.79 0.128 82)" strokeWidth="1">
        <rect x="90" y="90" width="220" height="220" />
        <rect x="90" y="90" width="220" height="220" transform="rotate(45 200 200)" />
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="110" />
        <circle cx="200" cy="200" r="62" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 150 * Math.cos((i * Math.PI) / 6)}
            y2={200 + 150 * Math.sin((i * Math.PI) / 6)}
          />
        ))}
      </g>
    </svg>
  );
}
