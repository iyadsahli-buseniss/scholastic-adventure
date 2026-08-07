export type Question = {
  q: string;
  choices: string[];
  answer: number;
  explain?: string;
};

export type QuizMap = Record<string, Question[]>;
