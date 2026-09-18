import { Lesson } from '../types';
import { CHAPTER_1_LESSONS } from './chapters/chapter1';
import { CHAPTER_2_LESSONS } from './chapters/chapter2';
import { CHAPTER_3_LESSONS } from './chapters/chapter3';
import { CHAPTER_4_LESSONS } from './chapters/chapter4';
import { CHAPTER_5_LESSONS } from './chapters/chapter5';
import { CHAPTER_6_LESSONS } from './chapters/chapter6';
import { CHAPTER_7_LESSONS } from './chapters/chapter7';
import { CHAPTER_8_LESSONS } from './chapters/chapter8';
import { CHAPTER_9_LESSONS } from './chapters/chapter9';
import { CHAPTER_10_LESSONS } from './chapters/chapter10';

export const CURRICULUM_LESSONS: Lesson[] = [
  ...CHAPTER_1_LESSONS,
  ...CHAPTER_2_LESSONS,
  ...CHAPTER_3_LESSONS,
  ...CHAPTER_4_LESSONS,
  ...CHAPTER_5_LESSONS,
  ...CHAPTER_6_LESSONS,
  ...CHAPTER_7_LESSONS,
  ...CHAPTER_8_LESSONS,
  ...CHAPTER_9_LESSONS,
  ...CHAPTER_10_LESSONS
];

export const CHAPTER_LIST = [
  { number: 1, title: 'Chương I: Đa thức', semester: 1 },
  { number: 2, title: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng', semester: 1 },
  { number: 3, title: 'Chương III: Tứ giác', semester: 1 },
  { number: 4, title: 'Chương IV: Định lí Thalès trong tam giác', semester: 1 },
  { number: 5, title: 'Chương V: Dữ liệu và biểu đồ', semester: 1 },
  { number: 6, title: 'Chương VI: Phân thức đại số', semester: 2 },
  { number: 7, title: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất', semester: 2 },
  { number: 8, title: 'Chương VIII: Mở đầu về tính xác suất của biến cố', semester: 2 },
  { number: 9, title: 'Chương IX: Tam giác đồng dạng', semester: 2 },
  { number: 10, title: 'Chương X: Một số hình khối trong thực tiễn', semester: 2 }
];
