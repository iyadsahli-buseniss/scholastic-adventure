import { motion } from "motion/react";
import logo from "@/assets/logo.png";

export function Logo({ size = 44, spin = false }: { size?: number; spin?: boolean }) {
  return (
    <motion.img
      src={logo}
      alt="شعار منصة نُبوغ"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={spin ? "animate-float drop-shadow-[0_0_28px_oklch(0.79_0.128_82/0.35)]" : ""}
      initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export function Wordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="text-2xl font-black tracking-tight text-gold-gradient">نُبوغ</span>
      <span className="text-[0.62rem] font-medium tracking-[0.2em] text-muted-foreground">
        الثالثة إعدادي
      </span>
    </span>
  );
}
