import fs from 'fs';
import path from 'path';

// Helper to write file ensuring dir exists
function writeChapter(fileName: string, content: string) {
  const dir = path.join(process.cwd(), 'src/data/chapters');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, fileName), content, 'utf-8');
  console.log(`Wrote ${fileName}`);
}

// Chapter 1: Bài 1 to Bài 5
const chapter1Content = `import { Lesson } from '../../types';

export const CHAPTER_1_LESSONS: Lesson[] = [
  {
    id: 'k1-b1',
    grade: '8',
    semester: 1,
    chapterNumber: 1,
    chapterTitle: 'Chương I: Đa thức',
    lessonNumber: 1,
    title: 'Bài 1. Đơn thức',
    textbookRef: 'Toán 8 KNTT - Bài 1',
    summary: '• Đơn thức là biểu thức đại số gồm một số, một biến hoặc tích giữa các số và biến.\\n• Đơn thức thu gọn gồm hệ số và phần biến.\\n• Bậc của đơn thức là tổng số mũ của tất cả các biến.\\n• Hai đơn thức đồng dạng có hệ số khác 0 và cùng phần biến.\\n• Muốn cộng, trừ đơn thức đồng dạng, ta cộng, trừ các hệ số và giữ nguyên phần biến.',
    keyFormulas: ['Đơn thức: a · x^m · y^n', 'Bậc = m + n + ...', 'aX + bX = (a + b)X'],
    questions: [
      {
        id: 'k1-b1-q1',
        question: 'Biểu thức nào sau đây là đơn thức?',
        options: ['x + 2y', '3x²y', 'x / y', '2x - 5'],
        correctIndex: 1,
        explanation: '3x²y là tích của số 3 và các biến x, y nên là đơn thức. Các biểu thức khác chứa phép cộng, trừ hoặc phép chia cho biến.',
        similarQuestion: {
          question: 'Biểu thức nào sau đây là đơn thức?',
          options: ['5xy³z', 'x² - y²', '4/x', 'a + b + c'],
          correctIndex: 0,
          explanation: '5xy³z chỉ gồm phép nhân giữa số và các biến.'
        }
      },
      {
        id: 'k1-b1-q2',
        question: 'Hệ số và phần biến của đơn thức -6x³y lần lượt là:',
        options: ['Hệ số là 6, phần biến là x³y', 'Hệ số là -6, phần biến là x³y', 'Hệ số là -6, phần biến là x³', 'Hệ số là x³y, phần biến là -6'],
        correctIndex: 1,
        explanation: 'Hệ số là -6 và phần biến là x³y.',
        similarQuestion: {
          question: 'Hệ số của đơn thức -4a²b là:',
          options: ['-4', '4', 'a²b', '-4a'],
          correctIndex: 0,
          explanation: 'Hệ số là -4.'
        }
      },
      {
        id: 'k1-b1-q3',
        question: 'Bậc của đơn thức 5x²y³z là bao nhiêu?',
        options: ['5', '6', '2', '3'],
        correctIndex: 1,
        explanation: 'Bậc là tổng số mũ các biến: 2 + 3 + 1 = 6.',
        similarQuestion: {
          question: 'Bậc của đơn thức 7x³y² là bao nhiêu?',
          options: ['3', '2', '5', '7'],
          correctIndex: 2,
          explanation: 'Tổng số mũ: 3 + 2 = 5.'
        }
      },
      {
        id: 'k1-b1-q4',
        question: 'Thu gọn đơn thức A = 2xy · (-3x²) ta được:',
        options: ['-6x²y', '-6x³y', '6x³y', '-x³y'],
        correctIndex: 1,
        explanation: '2 · (-3) · (x · x²) · y = -6x³y.',
        similarQuestion: {
          question: 'Thu gọn 3x²y · (-2xy):',
          options: ['-6x³y²', '-5x³y²', '6x²y', '-6x²y²'],
          correctIndex: 0,
          explanation: '3 · (-2) · x³ · y² = -6x³y².'
        }
      },
      {
        id: 'k1-b1-q5',
        question: 'Cặp đơn thức nào sau đây đồng dạng với nhau?',
        options: ['2x²y và 3xy²', '-5x²y³ và 2x²y³', '4x³ và 4y³', '3xy và 3x'],
        correctIndex: 1,
        explanation: 'Cùng phần biến x²y³ nên đồng dạng.',
        similarQuestion: {
          question: 'Đơn thức nào đồng dạng với 8xy²?',
          options: ['-3xy²', '8x²y', '8x²y²', '5xy'],
          correctIndex: 0,
          explanation: 'Có cùng phần biến xy².'
        }
      },
      {
        id: 'k1-b1-q6',
        question: 'Kết quả của phép tính 3xy² + (-5xy²) + xy² là:',
        options: ['-xy²', '-2xy²', 'xy²', '-xy'],
        correctIndex: 0,
        explanation: '(3 - 5 + 1)xy² = -xy².',
        similarQuestion: {
          question: 'Tính 4x²y - 7x²y + 2x²y:',
          options: ['-x²y', '-5x²y', 'x²y', '-3x²y'],
          correctIndex: 0,
          explanation: '(4 - 7 + 2)x²y = -x²y.'
        }
      },
      {
        id: 'k1-b1-q7',
        question: 'Giá trị của đơn thức 2x²y tại x = -1, y = 2 là:',
        options: ['-4', '4', '-8', '8'],
        correctIndex: 1,
        explanation: '2 · (-1)² · 2 = 2 · 1 · 2 = 4.',
        similarQuestion: {
          question: 'Tính giá trị của 3xy² tại x = 2, y = -1:',
          options: ['6', '-6', '12', '-12'],
          correctIndex: 0,
          explanation: '3 · 2 · (-1)² = 6.'
        }
      },
      {
        id: 'k1-b1-q8',
        question: 'Đơn thức nào sau đây có bậc bằng 4?',
        options: ['4xy', '2x²y²', '3x³y²', '5x⁴y'],
        correctIndex: 1,
        explanation: '2x²y² có tổng số mũ 2 + 2 = 4.',
        similarQuestion: {
          question: 'Đơn thức nào có bậc bằng 3?',
          options: ['3x³y', '2xy²', '4x²y²', '5x⁴'],
          correctIndex: 1,
          explanation: '2xy² có số mũ 1 + 2 = 3.'
        }
      },
      {
        id: 'k1-b1-q9',
        question: 'Một số thực khác 0 là một đơn thức có bậc bằng:',
        options: ['1', '0', 'Không có bậc', '5'],
        correctIndex: 1,
        explanation: 'Số thực khác 0 là đơn thức bậc 0.',
        similarQuestion: {
          question: 'Số 0 là đơn thức có bậc:',
          options: ['0', '1', 'Không có bậc', 'Vô cùng'],
          correctIndex: 2,
          explanation: 'Số 0 là đơn thức không có bậc.'
        }
      },
      {
        id: 'k1-b1-q10',
        question: 'Tìm m để đơn thức 3x^m y² có bậc là 5 (m ∈ ℕ*):',
        options: ['m = 2', 'm = 3', 'm = 5', 'm = 7'],
        correctIndex: 1,
        explanation: 'm + 2 = 5 => m = 3.',
        similarQuestion: {
          question: 'Tìm n để đơn thức -2x² y^n có bậc bằng 6:',
          options: ['n = 2', 'n = 3', 'n = 4', 'n = 6'],
          correctIndex: 2,
          explanation: '2 + n = 6 => n = 4.'
        }
      }
    ]
  },
  {
    id: 'k1-b2',
    grade: '8',
    semester: 1,
    chapterNumber: 1,
    chapterTitle: 'Chương I: Đa thức',
    lessonNumber: 2,
    title: 'Bài 2. Đa thức',
    textbookRef: 'Toán 8 KNTT - Bài 2',
    summary: '• Đa thức là một tổng của những đơn thức. Mỗi đơn thức gọi là một hạng tử.\\n• Thu gọn đa thức bằng cách nhóm và cộng trừ các hạng tử đồng dạng.\\n• Bậc của đa thức là bậc của hạng tử có bậc cao nhất trong dạng thu gọn.',
    keyFormulas: ['Đa thức = tổng các đơn thức', 'Bậc đa thức = max(bậc các hạng tử thu gọn)'],
    questions: [
      {
        id: 'k1-b2-q1',
        question: 'Biểu thức nào sau đây KHÔNG PHẢI là đa thức?',
        options: ['x² - 3xy + 1', '5x³ - 2y', '(x + 1) / y', '2x + 7'],
        correctIndex: 2,
        explanation: '(x+1)/y có biến ở mẫu nên không phải đa thức.',
        similarQuestion: {
          question: 'Biểu thức nào sau đây là đa thức?',
          options: ['2/x + y', '3x² - 4xy + 5', '1/(x² + 1)', 'x/y - 3'],
          correctIndex: 1,
          explanation: '3x² - 4xy + 5 là đa thức.'
        }
      },
      {
        id: 'k1-b2-q2',
        question: 'Các hạng tử của đa thức P = 3x²y - 2xy + 5 là:',
        options: ['3x²y, 2xy, 5', '3x²y, -2xy, 5', '3, -2, 5', 'x²y, xy, 1'],
        correctIndex: 1,
        explanation: 'Các hạng tử mang cả dấu tương ứng: 3x²y, -2xy, 5.',
        similarQuestion: {
          question: 'Hạng tử tự do của đa thức x² - 4x + 9 là:',
          options: ['1', '-4', '9', 'x²'],
          correctIndex: 2,
          explanation: '9 là hạng tử không chứa biến.'
        }
      },
      {
        id: 'k1-b2-q3',
        question: 'Thu gọn đa thức P = 2x²y + 3xy² - 5x²y + 2:',
        options: ['-3x²y + 3xy² + 2', '7x²y + 3xy² + 2', '-3x²y + 5', '3xy² + 2'],
        correctIndex: 0,
        explanation: '(2 - 5)x²y + 3xy² + 2 = -3x²y + 3xy² + 2.',
        similarQuestion: {
          question: 'Thu gọn đa thức 5x² - 2x + 3x² + 7:',
          options: ['8x² - 2x + 7', '2x² - 2x + 7', '8x² + 5', '6x² + 7'],
          correctIndex: 0,
          explanation: '(5 + 3)x² - 2x + 7 = 8x² - 2x + 7.'
        }
      },
      {
        id: 'k1-b2-q4',
        question: 'Bậc của đa thức Q = x³y² - 2x⁴ + y⁵ - 1 là:',
        options: ['3', '4', '5', '6'],
        correctIndex: 2,
        explanation: 'x³y² có bậc 5, y⁵ có bậc 5. Bậc cao nhất là 5.',
        similarQuestion: {
          question: 'Bậc của đa thức 4x²y³ - 3x⁵y + 2 là:',
          options: ['5', '6', '2', '7'],
          correctIndex: 1,
          explanation: '-3x⁵y có bậc 5 + 1 = 6.'
        }
      },
      {
        id: 'k1-b2-q5',
        question: 'Tính giá trị của đa thức A = x² - 2xy + y² tại x = 3, y = 1:',
        options: ['4', '2', '8', '16'],
        correctIndex: 0,
        explanation: '(3 - 1)² = 2² = 4.',
        similarQuestion: {
          question: 'Tính x² + y² tại x = 3, y = 4:',
          options: ['7', '25', '12', '14'],
          correctIndex: 1,
          explanation: '3² + 4² = 9 + 16 = 25.'
        }
      },
      {
        id: 'k1-b2-q6',
        question: 'Đa thức nào sau đây đã được thu gọn?',
        options: ['x² + 2xy - x²', '3x²y - 2xy + 1', '4x - 2 + 3x', 'xy + yx - 5'],
        correctIndex: 1,
        explanation: 'Không còn hạng tử nào đồng dạng với nhau.',
        similarQuestion: {
          question: 'Đa thức nào CHƯA thu gọn?',
          options: ['2x + 3y', 'x² - y²', '3xy - 5xy + 1', 'x³ + 1'],
          correctIndex: 2,
          explanation: '3xy và -5xy là hai hạng tử đồng dạng chưa gộp.'
        }
      },
      {
        id: 'k1-b2-q7',
        question: 'Bậc của đa thức P = x⁴ - 2x³y + 3x⁴ + 5 sau khi thu gọn là:',
        options: ['3', '4', '7', '5'],
        correctIndex: 1,
        explanation: 'P = 4x⁴ - 2x³y + 5 có bậc lớn nhất là 4.',
        similarQuestion: {
          question: 'Bậc của đa thức 2x³ - 5x² + 1 là:',
          options: ['2', '3', '5', '1'],
          correctIndex: 1,
          explanation: 'Bậc cao nhất là 3.'
        }
      },
      {
        id: 'k1-b2-q8',
        question: 'Cho M = ax²y + 2xy. Để M có bậc 3 thì:',
        options: ['a = 0', 'a ≠ 0', 'a = 1', 'Tùy ý'],
        correctIndex: 1,
        explanation: 'Hạng tử ax²y có bậc 3 nên hệ số a phải khác 0.',
        similarQuestion: {
          question: 'Để (m - 2)x³ + 4x có bậc 3 thì m cần:',
          options: ['m = 2', 'm ≠ 2', 'm > 2', 'm < 2'],
          correctIndex: 1,
          explanation: 'm - 2 ≠ 0 => m ≠ 2.'
        }
      },
      {
        id: 'k1-b2-q9',
        question: 'Hệ số cao nhất của đa thức P(x) = 4x³ - 7x² + 2 là:',
        options: ['4', '-7', '2', '3'],
        correctIndex: 0,
        explanation: 'Hệ số của bậc cao nhất (x³) là 4.',
        similarQuestion: {
          question: 'Hệ số tự do của P(x) = 4x³ - 7x² + 2 là:',
          options: ['4', '-7', '2', '0'],
          correctIndex: 2,
          explanation: 'Số hạng tự do là 2.'
        }
      },
      {
        id: 'k1-b2-q10',
        question: 'Giá trị của P = 2(x + y) biết x + y = 10 là:',
        options: ['10', '20', '12', '5'],
        correctIndex: 1,
        explanation: '2 · 10 = 20.',
        similarQuestion: {
          question: 'Giá trị của 3(a - b) biết a - b = 7 là:',
          options: ['10', '21', '14', '4'],
          correctIndex: 1,
          explanation: '3 · 7 = 21.'
        }
      }
    ]
  },
  {
    id: 'k1-b3',
    grade: '8',
    semester: 1,
    chapterNumber: 1,
    chapterTitle: 'Chương I: Đa thức',
    lessonNumber: 3,
    title: 'Bài 3. Phép cộng và phép trừ đa thức',
    textbookRef: 'Toán 8 KNTT - Bài 3',
    summary: '• Khi cộng hoặc trừ đa thức, áp dụng quy tắc bỏ dấu ngoặc: trước ngoặc có dấu trừ thì đổi dấu toàn bộ bên trong.\\n• Nhóm các hạng tử đồng dạng và tính toán.',
    keyFormulas: ['A + B: giữ nguyên dấu', 'A - B = A + (-B): đổi dấu các hạng tử của B'],
    questions: [
      {
        id: 'k1-b3-q1',
        question: 'Cho A = 2x + y và B = x - y. Tổng A + B bằng:',
        options: ['3x', '3x + 2y', 'x', '3x - y'],
        correctIndex: 0,
        explanation: '2x + y + x - y = 3x.',
        similarQuestion: {
          question: 'Cho P = 3a - b và Q = a + b. Tổng P + Q là:',
          options: ['4a', '2a', '4a - 2b', '4a + 2b'],
          correctIndex: 0,
          explanation: '3a - b + a + b = 4a.'
        }
      },
      {
        id: 'k1-b3-q2',
        question: 'Cho A = 2x + y và B = x - y. Hiệu A - B bằng:',
        options: ['x + 2y', 'x', '3x', 'x - 2y'],
        correctIndex: 0,
        explanation: '2x + y - (x - y) = 2x + y - x + y = x + 2y.',
        similarQuestion: {
          question: 'Cho M = 4x + 3y và N = x + y. Hiệu M - N là:',
          options: ['3x + 2y', '5x + 4y', '3x + 4y', '3x'],
          correctIndex: 0,
          explanation: '4x + 3y - x - y = 3x + 2y.'
        }
      },
      {
        id: 'k1-b3-q3',
        question: 'Bỏ dấu ngoặc biểu thức -(x² - 3xy + 2):',
        options: ['-x² - 3xy + 2', '-x² + 3xy - 2', 'x² - 3xy + 2', '-x² - 3xy - 2'],
        correctIndex: 1,
        explanation: 'Đổi dấu toàn bộ các hạng tử: -x² + 3xy - 2.',
        similarQuestion: {
          question: 'Bỏ ngoặc -(2a - b + 5):',
          options: ['-2a + b - 5', '-2a - b + 5', '2a - b - 5', '-2a + b + 5'],
          correctIndex: 0,
          explanation: '-2a + b - 5.'
        }
      },
      {
        id: 'k1-b3-q4',
        question: 'Cho P + (x² - 2y²) = 3x² - y². Đa thức P là:',
        options: ['2x² + y²', '4x² - 3y²', '2x² - y²', 'x² + y²'],
        correctIndex: 0,
        explanation: 'P = 3x² - y² - (x² - 2y²) = 2x² + y².',
        similarQuestion: {
          question: 'Tìm P biết P - (2x + 1) = 3x - 4:',
          options: ['5x - 3', 'x - 5', '5x - 5', 'x - 3'],
          correctIndex: 0,
          explanation: 'P = 3x - 4 + 2x + 1 = 5x - 3.'
        }
      },
      {
        id: 'k1-b3-q5',
        question: 'Tính (x² - 2xy) + (2xy - y²):',
        options: ['x² - y²', 'x² + y²', 'x² - 4xy - y²', '2x² - 2y²'],
        correctIndex: 0,
        explanation: 'x² - 2xy + 2xy - y² = x² - y².',
        similarQuestion: {
          question: 'Tính (a² + 3ab) + (-3ab + b²):',
          options: ['a² + b²', 'a² - b²', 'a² + 6ab + b²', '2a²'],
          correctIndex: 0,
          explanation: 'a² + b².'
        }
      },
      {
        id: 'k1-b3-q6',
        question: 'Tổng của 5x²y - 3xy² và 2x²y + 3xy² là:',
        options: ['7x²y', '7x²y + 6xy²', '3x²y', '7xy'],
        correctIndex: 0,
        explanation: '(5 + 2)x²y + (-3 + 3)xy² = 7x²y.',
        similarQuestion: {
          question: 'Tính 4xy + (-4xy) + 2x:',
          options: ['2x', '8xy + 2x', '0', '4x'],
          correctIndex: 0,
          explanation: '2x.'
        }
      },
      {
        id: 'k1-b3-q7',
        question: 'Hiệu (x² + y²) - (x² - y²) bằng:',
        options: ['2y²', '0', '2x²', '-2y²'],
        correctIndex: 0,
        explanation: 'x² + y² - x² + y² = 2y².',
        similarQuestion: {
          question: 'Hiệu (a + b) - (a - b) bằng:',
          options: ['2b', '2a', '0', '-2b'],
          correctIndex: 0,
          explanation: '2b.'
        }
      },
      {
        id: 'k1-b3-q8',
        question: 'Bậc của đa thức tổng A + B với A = x³ + 2x và B = -x³ + x² + 1 là:',
        options: ['2', '3', '1', '0'],
        correctIndex: 0,
        explanation: 'A + B = x² + 2x + 1 có bậc là 2.',
        similarQuestion: {
          question: 'Bậc của (x² + 1) + (-x² + x) là:',
          options: ['1', '2', '0', '3'],
          correctIndex: 0,
          explanation: 'x + 1 có bậc là 1.'
        }
      },
      {
        id: 'k1-b3-q9',
        question: 'Tìm M biết M + (x² - y²) = 0:',
        options: ['-x² + y²', 'x² + y²', '-x² - y²', 'x² - y²'],
        correctIndex: 0,
        explanation: 'M = -x² + y².',
        similarQuestion: {
          question: 'Đa thức đối của 2x - 3y là:',
          options: ['-2x + 3y', '-2x - 3y', '2x + 3y', '3x - 2y'],
          correctIndex: 0,
          explanation: '-2x + 3y.'
        }
      },
      {
        id: 'k1-b3-q10',
        question: 'Rút gọn (x + y) - (x - y) + (y - x):',
        options: ['3y - x', 'y + x', '3y + x', 'y - x'],
        correctIndex: 0,
        explanation: 'x + y - x + y + y - x = 3y - x.',
        similarQuestion: {
          question: 'Rút gọn (a + b) + (a - b):',
          options: ['2a', '2b', 'a² - b²', '0'],
          correctIndex: 0,
          explanation: '2a.'
        }
      }
    ]
  },
  {
    id: 'k1-b4',
    grade: '8',
    semester: 1,
    chapterNumber: 1,
    chapterTitle: 'Chương I: Đa thức',
    lessonNumber: 4,
    title: 'Bài 4. Phép nhân đa thức',
    textbookRef: 'Toán 8 KNTT - Bài 4',
    summary: '• Nhân đơn thức với đa thức: A(B + C) = AB + AC.\\n• Nhân đa thức với đa thức: (A + B)(C + D) = AC + AD + BC + BD.',
    keyFormulas: ['A(B + C) = AB + AC', '(A + B)(C + D) = AC + AD + BC + BD'],
    questions: [
      {
        id: 'k1-b4-q1',
        question: 'Tích của đơn thức 2x và đa thức (x - 3) là:',
        options: ['2x² - 6x', '2x² - 3', '2x² + 6x', 'x² - 6x'],
        correctIndex: 0,
        explanation: '2x · x - 2x · 3 = 2x² - 6x.',
        similarQuestion: {
          question: 'Tính 3x(2x + 1):',
          options: ['6x² + 3x', '6x² + 1', '5x² + 3x', '6x + 3'],
          correctIndex: 0,
          explanation: '6x² + 3x.'
        }
      },
      {
        id: 'k1-b4-q2',
        question: 'Thực hiện phép tính -xy(x² - y):',
        options: ['-x³y + xy²', '-x³y - xy²', 'x³y + xy²', '-x²y + xy'],
        correctIndex: 0,
        explanation: '-xy · x² - xy · (-y) = -x³y + xy².',
        similarQuestion: {
          question: 'Tính -2x(x - 4):',
          options: ['-2x² + 8x', '-2x² - 8x', '2x² + 8x', '-2x + 8'],
          correctIndex: 0,
          explanation: '-2x² + 8x.'
        }
      },
      {
        id: 'k1-b4-q3',
        question: 'Khai triển (x + 2)(x + 3) ta được:',
        options: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 5x + 5', 'x² + 6'],
        correctIndex: 0,
        explanation: 'x² + 3x + 2x + 6 = x² + 5x + 6.',
        similarQuestion: {
          question: 'Khai triển (x + 1)(x + 4):',
          options: ['x² + 5x + 4', 'x² + 4x + 1', 'x² + 5x + 5', 'x² + 4'],
          correctIndex: 0,
          explanation: 'x² + 5x + 4.'
        }
      },
      {
        id: 'k1-b4-q4',
        question: 'Khai triển (x - 1)(x + 1):',
        options: ['x² - 1', 'x² + 1', 'x² - 2x + 1', 'x² - 2'],
        correctIndex: 0,
        explanation: 'x² - 1.',
        similarQuestion: {
          question: 'Khai triển (x - 2)(x + 2):',
          options: ['x² - 4', 'x² + 4', 'x² - 2', 'x² - 4x + 4'],
          correctIndex: 0,
          explanation: 'x² - 4.'
        }
      },
      {
        id: 'k1-b4-q5',
        question: 'Kết quả của (2x - 1)(x + 2) là:',
        options: ['2x² + 3x - 2', '2x² + 4x - 2', '2x² - 3x - 2', '2x² + 3x + 2'],
        correctIndex: 0,
        explanation: '2x² + 4x - x - 2 = 2x² + 3x - 2.',
        similarQuestion: {
          question: 'Tính (3x + 1)(x - 2):',
          options: ['3x² - 5x - 2', '3x² + 5x - 2', '3x² - 6x - 2', '3x² - 5x + 2'],
          correctIndex: 0,
          explanation: '3x² - 5x - 2.'
        }
      },
      {
        id: 'k1-b4-q6',
        question: 'Rút gọn x(x - y) + y(x - y):',
        options: ['x² - y²', 'x² + y²', '(x - y)²', 'x² - 2xy + y²'],
        correctIndex: 0,
        explanation: '(x + y)(x - y) = x² - y².',
        similarQuestion: {
          question: 'Rút gọn a(b + c) - b(a + c):',
          options: ['c(a - b)', 'ab - bc', '0', 'ac + bc'],
          correctIndex: 0,
          explanation: 'c(a - b).'
        }
      },
      {
        id: 'k1-b4-q7',
        question: 'Hệ số của x trong P = (x + 3)(x - 5) là:',
        options: ['-2', '2', '-15', '8'],
        correctIndex: 0,
        explanation: 'P = x² - 2x - 15. Hệ số của x là -2.',
        similarQuestion: {
          question: 'Hệ số của x trong (x + 2)(x + 5) là:',
          options: ['7', '10', '3', '1'],
          correctIndex: 0,
          explanation: '2 + 5 = 7.'
        }
      },
      {
        id: 'k1-b4-q8',
        question: 'Giá trị của (x - 2)(x + 2) tại x = 10 là:',
        options: ['96', '100', '104', '98'],
        correctIndex: 0,
        explanation: '10² - 4 = 96.',
        similarQuestion: {
          question: 'Tính (x - 1)(x + 1) tại x = 5:',
          options: ['24', '25', '26', '20'],
          correctIndex: 0,
          explanation: '24.'
        }
      },
      {
        id: 'k1-b4-q9',
        question: 'Khai triển (x - 2)(x² + 2x + 4):',
        options: ['x³ - 8', 'x³ - 4', 'x³ + 8', 'x³ - 6'],
        correctIndex: 0,
        explanation: 'x³ - 2³ = x³ - 8.',
        similarQuestion: {
          question: 'Khai triển (x - 3)(x² + 3x + 9):',
          options: ['x³ - 27', 'x³ + 27', 'x³ - 9', 'x³ - 18'],
          correctIndex: 0,
          explanation: 'x³ - 27.'
        }
      },
      {
        id: 'k1-b4-q10',
        question: 'Tìm x biết x(x - 2) - x² = 8:',
        options: ['x = -4', 'x = 4', 'x = -2', 'x = 2'],
        correctIndex: 0,
        explanation: '-2x = 8 => x = -4.',
        similarQuestion: {
          question: 'Tìm x biết x(x + 3) - x² = 6:',
          options: ['x = 2', 'x = -2', 'x = 3', 'x = -3'],
          correctIndex: 0,
          explanation: '3x = 6 => x = 2.'
        }
      }
    ]
  },
  {
    id: 'k1-b5',
    grade: '8',
    semester: 1,
    chapterNumber: 1,
    chapterTitle: 'Chương I: Đa thức',
    lessonNumber: 5,
    title: 'Bài 5. Phép chia đa thức cho đơn thức',
    textbookRef: 'Toán 8 KNTT - Bài 5',
    summary: '• Chia đơn thức cho đơn thức: chia hệ số cho hệ số, lũy thừa cùng biến cho nhau.\\n• Chia đa thức cho đơn thức: chia từng hạng tử của đa thức cho đơn thức rồi cộng các kết quả.',
    keyFormulas: ['x^m : x^n = x^(m-n)', '(A + B) : C = A:C + B:C'],
    questions: [
      {
        id: 'k1-b5-q1',
        question: 'Kết quả của 6x⁴ : 2x² là:',
        options: ['3x²', '3x', '4x²', '3x⁶'],
        correctIndex: 0,
        explanation: '(6:2)x^(4-2) = 3x².',
        similarQuestion: {
          question: 'Tính 8x⁵ : 4x²:',
          options: ['2x³', '2x²', '4x³', '2x⁷'],
          correctIndex: 0,
          explanation: '2x³.'
        }
      },
      {
        id: 'k1-b5-q2',
        question: 'Kết quả của (-12x³y²) : (4xy) là:',
        options: ['-3x²y', '-3xy', '3x²y', '-3x²'],
        correctIndex: 0,
        explanation: '-3x²y.',
        similarQuestion: {
          question: 'Tính 15a²b : (-3ab):',
          options: ['-5a', '5a', '-5ab', '-5b'],
          correctIndex: 0,
          explanation: '-5a.'
        }
      },
      {
        id: 'k1-b5-q3',
        question: 'Đơn thức 4x²y chia hết cho đơn thức nào?',
        options: ['2xy', '3x³', 'xy²', '2xyz'],
        correctIndex: 0,
        explanation: '2xy có bậc các biến nhỏ hơn hoặc bằng 4x²y.',
        similarQuestion: {
          question: 'Đơn thức nào chia hết cho 2x²?',
          options: ['6x³y', '4x', '2y²', 'x'],
          correctIndex: 0,
          explanation: '6x³y.'
        }
      },
      {
        id: 'k1-b5-q4',
        question: 'Thực hiện phép chia (4x³ - 2x²) : 2x²:',
        options: ['2x - 1', '2x', '2x² - 1', 'x - 1'],
        correctIndex: 0,
        explanation: '4x³:2x² - 2x²:2x² = 2x - 1.',
        similarQuestion: {
          question: 'Tính (6x⁴ + 9x²) : 3x²:',
          options: ['2x² + 3', '2x² + 3x', '3x² + 3', '2x + 3'],
          correctIndex: 0,
          explanation: '2x² + 3.'
        }
      },
      {
        id: 'k1-b5-q5',
        question: 'Kết quả của (9x²y² - 6xy³) : (-3xy) là:',
        options: ['-3xy + 2y²', '3xy - 2y²', '-3x + 2y', '-3xy - 2y²'],
        correctIndex: 0,
        explanation: '-3xy + 2y².',
        similarQuestion: {
          question: 'Tính (8xy - 4y) : 4y:',
          options: ['2x - 1', '2xy - 1', '2x', '2x - 4'],
          correctIndex: 0,
          explanation: '2x - 1.'
        }
      },
      {
        id: 'k1-b5-q6',
        question: 'Điều kiện để x^n chia hết cho x³ (n ∈ ℕ*):',
        options: ['n ≥ 3', 'n ≤ 3', 'n > 3', 'n = 3'],
        correctIndex: 0,
        explanation: 'n ≥ 3.',
        similarQuestion: {
          question: 'Để x⁵ chia hết cho x^m thì:',
          options: ['m ≤ 5', 'm ≥ 5', 'm > 5', 'm = 5'],
          correctIndex: 0,
          explanation: 'm ≤ 5.'
        }
      },
      {
        id: 'k1-b5-q7',
        question: 'Thương của (x³y + 2x²y²) : xy là:',
        options: ['x² + 2xy', 'x² + 2y', 'x³ + 2xy', 'x²y + 2xy'],
        correctIndex: 0,
        explanation: 'x² + 2xy.',
        similarQuestion: {
          question: 'Tính (a²b + ab²) : ab:',
          options: ['a + b', 'ab', 'a - b', 'a² + b²'],
          correctIndex: 0,
          explanation: 'a + b.'
        }
      },
      {
        id: 'k1-b5-q8',
        question: 'Giá trị của P = (10x³y² - 5x²y³) : 5x²y² tại x = 3, y = 2:',
        options: ['4', '6', '1', '2'],
        correctIndex: 0,
        explanation: 'P = 2x - y = 6 - 2 = 4.',
        similarQuestion: {
          question: 'Tính P = (6x² - 4x) : 2x tại x = 5:',
          options: ['13', '15', '11', '10'],
          correctIndex: 0,
          explanation: '3(5) - 2 = 13.'
        }
      },
      {
        id: 'k1-b5-q9',
        question: 'Đa thức 3x³ - 6x² chia cho đơn thức nào có thương là x - 2?',
        options: ['3x²', '3x', 'x²', '-3x²'],
        correctIndex: 0,
        explanation: '(3x³ - 6x²) : 3x² = x - 2.',
        similarQuestion: {
          question: 'Đa thức 2x² + 4x chia cho đơn thức nào được x + 2?',
          options: ['2x', 'x', '2', '4x'],
          correctIndex: 0,
          explanation: '2x.'
        }
      },
      {
        id: 'k1-b5-q10',
        question: 'Phép chia nào sau đây là phép chia hết?',
        options: ['(x³ + 2x) : x', '(x² + y) : x', '(x² + 1) : x²', '(x²y + 1) : y'],
        correctIndex: 0,
        explanation: 'x³ và 2x đều chia hết cho x.',
        similarQuestion: {
          question: 'Đa thức nào chia hết cho x?',
          options: ['x² + 3x', 'x + 2', '2x² + 5', 'x³ - 1'],
          correctIndex: 0,
          explanation: 'x² + 3x.'
        }
      }
    ]
  }
];
`;

writeChapter('chapter1.ts', chapter1Content);
