import { math } from "./math";
import { physique } from "./physique";
import { svt } from "./svt";
import { arabe } from "./arabe";
import { francais, anglais } from "./langues";
import { sociales, islamique } from "./sociales";
import type { Subject, Lesson } from "./types";

export type { Subject, Lesson };

export const subjects: Subject[] = [
  math,
  physique,
  svt,
  arabe,
  francais,
  anglais,
  sociales,
  islamique,
];

export const totalLessons = subjects.reduce((n, s) => n + s.lessons.length, 0);

export function getSubject(slug: string) {
  return subjects.find((s) => s.slug === slug);
}

export function getLesson(subjectSlug: string, lessonSlug: string) {
  const subject = getSubject(subjectSlug);
  const lesson = subject?.lessons.find((l) => l.slug === lessonSlug);
  return { subject, lesson };
}
