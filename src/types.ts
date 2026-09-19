export type GradeLevel = '8' | '6' | '7' | '9';
export type Semester = 1 | 2;

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hasDiagram?: boolean;
  diagramType?: 'quadrilateral' | 'trapezoid' | 'parallelogram' | 'thales' | 'pythagoras' | 'pyramid' | 'coordinate' | 'chart';
  diagramData?: Record<string, any>;
  similarQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface Lesson {
  id: string;
  grade: GradeLevel;
  semester: Semester;
  chapterNumber: number;
  chapterTitle: string;
  lessonNumber: number;
  title: string;
  summary: string;
  keyFormulas?: string[];
  textbookRef: string;
  questions: Question[];
}

export interface SeedItem {
  id: string;
  name: string;
  buyPrice: number;
  harvestProfit: number;
  harvestTotal: number;
  growthMinutes: number;
  icon: string;
  levelRequired: number;
  description: string;
  color: string;
}

export interface DecorationItem {
  id: string;
  name: string;
  price: number;
  icon: string;
  type: 'flower' | 'fence' | 'pond' | 'bench' | 'lamp' | 'special';
  description: string;
}

export type GardenTileType = 'soil' | 'grass' | 'stone';

export interface GardenPlot {
  id: number;
  row?: number;
  col?: number;
  tileType?: GardenTileType;
  plantedSeedId?: string;
  plantedAt?: number; // timestamp
  growthMinutes: number;
  isWatered?: boolean;
  decorationId?: string;
  decorationName?: string;
  decorationIcon?: string;
}

export interface PlacedDecoration {
  id: string;
  decorationId: string;
  x: number;
  y: number;
}

export interface LessonLog {
  id: string;
  lessonId: string;
  lessonTitle: string;
  chapterTitle: string;
  date: string;
  score: number;
  totalQuestions: number;
  coinsEarned: number;
  xpEarned: number;
  summary: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  coins: number;
  xp: number;
  level: number;
  streak: number;
  lastStudyDate: string; // YYYY-MM-DD
  isStreakBroken: boolean;
  soundEnabled: boolean;
  fontSize: 'normal' | 'large' | 'xlarge'; // normal: 18px, large: 20px, xlarge: 23px
  hasSeenOnboarding: boolean;
  inventory: Record<string, number>; // seedId/decorationId -> count
  plots: GardenPlot[];
  decorations: PlacedDecoration[];
  completedLessons: LessonLog[];
}
