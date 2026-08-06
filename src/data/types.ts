export type Section = {
  heading: string;
  body: string[];
  formula?: string;
  example?: string;
  list?: string[];
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  unit: string;
  objectives: string[];
  sections: Section[];
  keyTerms: string[];
};

export type Subject = {
  slug: string;
  name: string;
  latin: string;
  tagline: string;
  icon: string;
  accent: string;
  lessons: Lesson[];
};
