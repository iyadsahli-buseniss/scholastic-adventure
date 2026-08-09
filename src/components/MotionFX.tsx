import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- deterministic pseudo-random (SSR-safe) ---------- */
function seeded(i: number, salt = 1) {
  const x = Math.sin((i + 1) * 12.9898 * salt) * 43758.5453;
  return x - Math.floor(x);
}

/** Thin gold bar that tracks page scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-right"
    >
      <div className="h-full w-full bg-[image:var(--gradient-gold)]" />
    </motion.div>
  );
}

/** Slow-drifting emerald/gold light blobs behind content. */
export function AuroraField() {
  const blobs = [
    { c: "oklch(0.74 0.132 158 / 0.30)", s: 620, x: "12%", y: "-14%", d: 0 },
    { c: "oklch(0.79 0.128 82 / 0.22)", s: 520, x: "72%", y: "6%", d: 3 },
    { c: "oklch(0.55 0.10 200 / 0.20)", s: 480, x: "42%", y: "48%", d: 6 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: b.s,
            height: b.s,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
          }}
          animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0], scale: [1, 1.12, 0.95, 1] }}
          transition={{ duration: 26 + i * 7, delay: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/** Floating gold motes. */
export function ParticleField({ count = 26 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = seeded(i, 1) * 100;
        const top = seeded(i, 2) * 100;
        const size = 2 + seeded(i, 3) * 4;
        const dur = 9 + seeded(i, 4) * 12;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-accent"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity: 0.35 }}
            animate={{ y: [0, -70 - seeded(i, 5) * 60, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: dur, delay: seeded(i, 6) * 8, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

/** Animated self-drawing zellige constellation. */
export function ZelligeDraw({ className = "" }: { className?: string }) {
  const pts = Array.from({ length: 8 }).map((_, i) => {
    const a = (i * Math.PI) / 4;
    return [200 + 130 * Math.cos(a), 200 + 130 * Math.sin(a)] as const;
  });
  return (
    <svg viewBox="0 0 400 400" aria-hidden className={className}>
      <g fill="none" stroke="oklch(0.79 0.128 82)" strokeWidth="1.1" opacity="0.6">
        {pts.map(([x, y], i) => {
          const [x2, y2] = pts[(i + 3) % pts.length]!;
          return (
            <motion.line
              key={i}
              x1={x}
              y1={y}
              x2={x2}
              y2={y2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.4, delay: i * 0.18, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.6 }}
            />
          );
        })}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        />
      </g>
    </svg>
  );
}

/** Number that counts up when scrolled into view. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  const [text, setText] = useState("0");

  useEffect(() => rounded.on("change", setText), [rounded]);
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
      return () => c.stop();
    }
  }, [inView, to, mv]);

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}

/** 3D tilt + gold glow follow on pointer move. */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 12);
        rx.set(-py * 12);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Infinite RTL marquee strip of subject names. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span key={i} className="text-sm font-bold tracking-widest text-muted-foreground">
            <span className="text-accent">◆</span> {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
