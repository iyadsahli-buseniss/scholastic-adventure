import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Question } from "@/data/quizzes";

export function Quiz({ questions }: { questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (questions.length === 0) return null;
  const q = questions[index];

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  const progress = ((index + (picked !== null ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="surface-card mt-14 overflow-hidden rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-accent">تمرين تفاعلي</h2>
        <span className="text-xs text-muted-foreground">
          {done ? "انتهى" : `السؤال ${index + 1} / ${questions.length}`}
        </span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-accent"
          animate={{ width: `${done ? 100 : progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-8 text-center"
          >
            <motion.p
              className="text-5xl font-black text-gold-gradient"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
            >
              {score} / {questions.length}
            </motion.p>
            <p className="mt-3 text-sm text-muted-foreground">
              {score === questions.length
                ? "ممتاز! أتقنت الدرس 🎉"
                : score >= questions.length / 2
                  ? "جيد، راجع النقاط التي أخطأت فيها."
                  : "أعد قراءة الدرس ثم حاول من جديد."}
            </p>
            <button
              onClick={restart}
              className="mt-6 rounded-full bg-accent px-6 py-2 text-sm font-bold text-accent-foreground"
            >
              إعادة المحاولة
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-5 text-[0.98rem] font-semibold leading-8">{q.q}</p>
            <div className="mt-4 space-y-2">
              {q.choices.map((c, i) => {
                const isAnswer = i === q.answer;
                const state =
                  picked === null
                    ? "idle"
                    : isAnswer
                      ? "correct"
                      : i === picked
                        ? "wrong"
                        : "muted";
                return (
                  <motion.button
                    key={c}
                    onClick={() => choose(i)}
                    whileHover={picked === null ? { x: -4 } : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-right text-sm transition-colors ${
                      state === "correct"
                        ? "border-accent bg-accent/15 text-accent"
                        : state === "wrong"
                          ? "border-destructive/60 bg-destructive/10 text-destructive"
                          : state === "muted"
                            ? "border-border/50 text-muted-foreground/60"
                            : "border-border hover:border-accent/60"
                    }`}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-current text-[0.7rem]">
                      {i + 1}
                    </span>
                    <span>{c}</span>
                  </motion.button>
                );
              })}
            </div>

            {picked !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-between gap-4"
              >
                <p className="text-xs leading-6 text-muted-foreground">
                  {q.explain ?? (picked === q.answer ? "إجابة صحيحة." : "إجابة خاطئة.")}
                </p>
                <button
                  onClick={next}
                  className="shrink-0 rounded-full bg-accent px-5 py-2 text-xs font-bold text-accent-foreground"
                >
                  {index + 1 === questions.length ? "النتيجة" : "التالي"}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
