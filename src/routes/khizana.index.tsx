import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiteHeader, SiteFooter } from "@/components/Chrome";
import { Reveal } from "@/components/Motion";
import { PdfViewer, type ViewerDoc } from "@/components/PdfViewer";
import { resourceLibrary } from "@/data/resources";
import { docKindLabel, type DocKind } from "@/data/resource-types";

const title = "خزانة الدروس PDF — الثالثة إعدادي | نُبوغ";
const description =
  "أكثر من 490 وثيقة PDF: دروس وملخصات وتمارين وجذاذات لجميع مواد السنة الثالثة إعدادي، قابلة للتصفح والتحميل مباشرة داخل نُبوغ.";

export const Route = createFileRoute("/khizana/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LibraryPage,
});

const kinds: DocKind[] = ["lesson", "summary", "exercises", "sheet"];

function LibraryPage() {
  const [subject, setSubject] = useState<string>("all");
  const [kind, setKind] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [doc, setDoc] = useState<ViewerDoc | null>(null);

  const totalDocs = useMemo(
    () => resourceLibrary.reduce((n, s) => n + s.topics.reduce((m, t) => m + t.docs.length, 0), 0),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim();
    return resourceLibrary
      .filter((s) => subject === "all" || s.subject === subject)
      .map((s) => ({
        ...s,
        topics: s.topics
          .map((t) => ({
            ...t,
            docs: t.docs.filter((d) => kind === "all" || d.kind === kind),
          }))
          .filter(
            (t) =>
              t.docs.length > 0 &&
              (q === "" || t.title.includes(q) || t.docs.some((d) => d.label.includes(q))),
          ),
      }))
      .filter((s) => s.topics.length > 0);
  }, [subject, kind, query]);

  return (
    <div dir="rtl" className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-14">
        <Reveal>
          <p className="text-xs tracking-widest text-accent/80">مصادر إضافية</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">خزانة الدروس PDF</h1>
          <p className="mt-3 max-w-2xl leading-8 text-muted-foreground">
            {totalDocs} وثيقة بصيغة PDF — دروس مفصّلة، ملخصات، تمارين وجذاذات — مصنّفة حسب المادة
            والدرس، تُقرأ داخل التطبيق مباشرة دون مغادرة الصفحة.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface-card mt-8 space-y-4 rounded-2xl p-5">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن درس أو وثيقة…"
              className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
            <div className="flex flex-wrap gap-2">
              <Chip active={subject === "all"} onClick={() => setSubject("all")}>
                كل المواد
              </Chip>
              {resourceLibrary.map((s) => (
                <Chip
                  key={s.subject}
                  active={subject === s.subject}
                  onClick={() => setSubject(s.subject)}
                >
                  {s.name}
                </Chip>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip active={kind === "all"} onClick={() => setKind("all")} subtle>
                كل الأنواع
              </Chip>
              {kinds.map((k) => (
                <Chip key={k} active={kind === k} onClick={() => setKind(k)} subtle>
                  {docKindLabel[k]}
                </Chip>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 space-y-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.section
                key={s.subject}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="mb-5 text-xl font-bold text-accent">{s.name}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {s.topics.map((t, i) => (
                    <motion.article
                      key={t.source + t.title}
                      layout
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.04 }}
                      whileHover={{ y: -4 }}
                      className="surface-card flex flex-col rounded-2xl p-5"
                    >
                      <h3 className="text-sm font-bold leading-7">{t.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{t.docs.length} وثيقة</p>
                      <ul className="mt-4 space-y-2">
                        {t.docs.map((d) => (
                          <li key={d.url}>
                            <button
                              onClick={() => setDoc({ label: d.label, url: d.url, topic: t.title })}
                              className="group flex w-full items-center gap-2 rounded-xl bg-secondary/50 px-3 py-2 text-right text-xs transition-colors hover:bg-secondary"
                            >
                              <span className="shrink-0 rounded-full border border-accent/40 px-2 py-0.5 text-[0.65rem] text-accent">
                                {docKindLabel[d.kind]}
                              </span>
                              <span className="truncate text-foreground/85 group-hover:text-foreground">
                                {d.label}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">لا توجد وثائق مطابقة لبحثك.</p>
          )}
        </div>

        <p className="mt-16 text-center text-xs leading-6 text-muted-foreground">
          الوثائق مصدرها موقع moutamadris.ma وتُعرض هنا لغرض تعليمي مع حفظ حقوق أصحابها.
        </p>
      </main>

      <PdfViewer doc={doc} onClose={() => setDoc(null)} />
      <SiteFooter />
    </div>
  );
}

function Chip({
  active,
  subtle,
  onClick,
  children,
}: {
  active: boolean;
  subtle?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
        active
          ? "border-accent bg-accent/15 text-accent"
          : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
      } ${subtle && !active ? "opacity-80" : ""}`}
    >
      {children}
    </button>
  );
}
