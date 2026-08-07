import { mathQuizzes } from "./math";
import { physiqueQuizzes } from "./physique";
import { svtQuizzes } from "./svt";
import { arabeQuizzes } from "./arabe";
import { francaisQuizzes, anglaisQuizzes } from "./langues";
import { socialesQuizzes } from "./sociales";
import type { Question, QuizMap } from "./types";

export type { Question };

const bySubject: Record<string, QuizMap> = {
  mathematiques: mathQuizzes,
  "physique-chimie": physiqueQuizzes,
  svt: svtQuizzes,
  arabe: arabeQuizzes,
  francais: francaisQuizzes,
  anglais: anglaisQuizzes,
  sociales: socialesQuizzes,
  islamique: socialesQuizzes,
};

export function getQuiz(subjectSlug: string, lessonSlug: string): Question[] {
  return bySubject[subjectSlug]?.[lessonSlug] ?? [];
}
