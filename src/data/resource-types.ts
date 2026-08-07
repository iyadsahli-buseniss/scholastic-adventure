export type DocKind = "lesson" | "summary" | "exercises" | "sheet" | "exam" | "doc";

export type ResourceDoc = {
  kind: DocKind;
  label: string;
  url: string;
};

export type ResourceTopic = {
  title: string;
  source: string;
  docs: ResourceDoc[];
};

export type ResourceSubject = {
  subject: string;
  name: string;
  topics: ResourceTopic[];
};

export const docKindLabel: Record<DocKind, string> = {
  lesson: "درس",
  summary: "ملخص",
  exercises: "تمارين",
  sheet: "جذاذة",
  exam: "فرض",
  doc: "وثيقة",
};

export function pdfViewerUrl(url: string) {
  return `/api/public/pdf?u=${encodeURIComponent(url)}`;
}
