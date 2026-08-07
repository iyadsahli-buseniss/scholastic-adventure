import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getLesson, type Subject, type Lesson } from "@/data/curriculum";
import { getQuiz } from "@/data/quizzes";
import { Quiz } from "@/components/Quiz";
import { Reveal } from "@/components/Motion";
import { SiteHeader, SiteFooter } from "@/components/Chrome";


export const Route = createFileRoute("/mawad/$subject/$lesson")({
  loader: ({ params }) => {
    const { subject, lesson } = getLesson(params.subject, params.lesson);
    if (!subject || !lesson) throw notFound();
    return { subject, lesson };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "الدرس غير متوفر | نُبوغ" }, { name: "robots", content: "noindex" }],
      };
    }
    const { subject, lesson } = loaderData;
    const title = `${lesson.title} — ${subject.name} | نُبوغ`;
    return {
      meta: [
        { title },
        { name: "description", content: lesson.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: lesson.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: LessonPage,
});

function LessonPage() {
  const { subject, lesson } = Route.useLoaderData() as { subject: Subject; lesson: Lesson };
  const quiz = getQuiz(subject.slug, lesson.slug);



  return (
    <div dir="rtl" className="min-h-screen">
      <SiteHeader />
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-right bg-accent"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <main className="mx-auto max-w-3xl px-5 py-14">
        <Reveal>
          <Link
            to="/mawad/$subject"
            params={{ subject: subject.slug }}
            className="text-sm text-muted-foreground hover:text-accent"
          >
            ← {subject.name}
          </Link>
          <p className="mt-5 text-xs tracking-widest text-accent/80">{lesson.unit}</p>
          <h1 className="mt-2 text-3xl font-black leading-snug sm:text-4xl">{lesson.title}</h1>
          <p className="mt-3 text-muted-foreground">{lesson.summary}</p>
          <span className="mt-3 inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            الحصص المقترحة: {lesson.duration}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="surface-card mt-9 rounded-2xl p-6">
            <h2 className="mb-3 font-bold text-accent">أهداف الدرس</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {lesson.objectives.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <article className="mt-12 space-y-10">
          {lesson.sections.map((s, i) => (
            <Reveal key={s.heading} delay={0.05 * i}>
              <section>
                <h2 className="text-xl font-bold text-foreground">{s.heading}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-[0.98rem] leading-8 text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>

                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-xl bg-secondary/60 px-4 py-2 text-sm text-foreground/90"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.formula && (
                  <pre
                    dir="ltr"
                    className="gold-ring mt-5 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-secondary/70 p-5 text-center text-base font-semibold text-gold-gradient"
                  >
                    {s.formula}
                  </pre>
                )}

                {s.example && (
                  <p className="mt-4 rounded-2xl border-r-2 border-accent bg-secondary/40 px-4 py-3 text-sm leading-7">
                    <span className="font-bold text-accent">مثال: </span>
                    {s.example}
                  </p>
                )}
              </section>
            </Reveal>
          ))}
        </article>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <h2 className="mb-3 font-bold">مفاهيم أساسية</h2>
            <div className="flex flex-wrap gap-2">
              {lesson.keyTerms.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Quiz questions={quiz} />
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            to="/khizana"
            className="surface-card mt-8 flex items-center justify-between gap-4 rounded-2xl p-5 transition-colors hover:border-accent"
          >
            <span>
              <span className="block text-sm font-bold">وثائق PDF لهذا المستوى</span>
              <span className="mt-1 block text-xs text-muted-foreground">
                دروس وملخصات وتمارين إضافية قابلة للقراءة والتحميل
              </span>
            </span>
            <span className="text-accent">←</span>
          </Link>
        </Reveal>

      </main>
      <SiteFooter />
    </div>
  );
}
