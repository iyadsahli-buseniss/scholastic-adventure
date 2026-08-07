import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { pdfViewerUrl } from "@/data/resource-types";

export type ViewerDoc = { label: string; url: string; topic?: string };

export function PdfViewer({ doc, onClose }: { doc: ViewerDoc | null; onClose: () => void }) {
  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [doc, onClose]);

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between gap-4 border-b border-border/60 px-4 py-3">
            <div className="min-w-0">
              {doc.topic && <p className="truncate text-xs text-accent/80">{doc.topic}</p>}
              <p className="truncate text-sm font-bold">{doc.label}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={pdfViewerUrl(doc.url)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-1.5 text-xs transition-colors hover:border-accent hover:text-accent"
              >
                نافذة جديدة
              </a>
              <a
                href={pdfViewerUrl(doc.url)}
                download
                className="rounded-full border border-border px-4 py-1.5 text-xs transition-colors hover:border-accent hover:text-accent"
              >
                تحميل
              </a>

              <button
                onClick={onClose}
                className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground"
              >
                إغلاق
              </button>
            </div>
          </div>
          <motion.div
            className="flex-1"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title={doc.label}
              src={pdfViewerUrl(doc.url)}
              className="h-full w-full border-0 bg-secondary/40"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
