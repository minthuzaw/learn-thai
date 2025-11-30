export interface VocabularyItem {
  thai?: string;
  phonetic: string;
  english: string;
  category?: string;
}

export interface Topic {
  id: string;
  title: string;
  titleThai: string;
  titlePhonetic: string;
  description: string;
  vocabulary: VocabularyItem[];
  examples?: string[];
  tips?: string;
}

export interface ImmigrationQuestion {
  id: string;
  questionThai: string;
  questionPhonetic: string;
  questionEnglish: string;
  answerThai: string;
  answerTemplate: string;
  answerPhonetic: string;
  answerEnglish: string;
  category: string;
}