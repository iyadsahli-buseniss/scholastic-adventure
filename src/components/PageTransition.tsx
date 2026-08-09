import { AnimatePresence, motion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Soft cross-fade + lift between routes, keyed on the pathname. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 18, filter: "blur(6px)", scale: 0.995 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        exit={{ opacity: 0, y: -12, filter: "blur(6px)", scale: 0.995 }}
        transition={{ duration: 0.45, ease }}
        onAnimationStart={() => {
          if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/** Thin gold bar + veil shown while a navigation is pending. */
export function RouteProgress() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.cursor = isLoading ? "progress" : "";
    return () => {
      document.body.style.cursor = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="route-progress"
          aria-hidden
          className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-right overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-full w-full bg-[image:var(--gradient-gold)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 0.6, 0.85, 1] }}
            transition={{ duration: 1.1, ease }}
            style={{ originX: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
