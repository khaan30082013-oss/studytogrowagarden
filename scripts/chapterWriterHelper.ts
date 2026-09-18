import fs from 'fs';
import path from 'path';

export interface QRaw {
  q: string;
  opts: [string, string, string, string];
  ans: number;
  exp: string;
  simQ: string;
  simOpts: [string, string, string, string];
  simAns: number;
  simExp: string;
  diag?: string;
  diagData?: any;
}

export interface LessonRaw {
  id: string;
  grade: '8';
  semester: 1 | 2;
  chapterNumber: number;
  chapterTitle: string;
  lessonNumber: number;
  title: string;
  textbookRef: string;
  summary: string;
  keyFormulas: string[];
  questions: QRaw[];
}

export function writeChapterFile(chapterNum: number, lessons: LessonRaw[]) {
  const dir = path.join(process.cwd(), 'src/data/chapters');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const content = `import { Lesson } from '../../types';

export const CHAPTER_${chapterNum}_LESSONS: Lesson[] = ${JSON.stringify(
    lessons.map(l => ({
      id: l.id,
      grade: l.grade,
      semester: l.semester,
      chapterNumber: l.chapterNumber,
      chapterTitle: l.chapterTitle,
      lessonNumber: l.lessonNumber,
      title: l.title,
      textbookRef: l.textbookRef,
      summary: l.summary,
      keyFormulas: l.keyFormulas,
      questions: l.questions.map((q, idx) => ({
        id: `${l.id}-q${idx + 1}`,
        question: q.q,
        options: q.opts,
        correctIndex: q.ans,
        explanation: q.exp,
        hasDiagram: Boolean(q.diag),
        diagramType: q.diag,
        diagramData: q.diagData,
        similarQuestion: {
          question: q.simQ,
          options: q.simOpts,
          correctIndex: q.simAns,
          explanation: q.simExp
        }
      }))
    })),
    null,
    2
  )};
`;

  fs.writeFileSync(path.join(dir, `chapter${chapterNum}.ts`), content, 'utf-8');
  console.log(`Generated chapter${chapterNum}.ts with ${lessons.length} lessons`);
}
