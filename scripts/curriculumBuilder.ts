import fs from 'fs';
import path from 'path';

// Definition of each lesson and its 10 questions
interface QuestionInput {
  q: string;
  opts: [string, string, string, string];
  ans: number;
  exp: string;
  diagramType?: 'quadrilateral' | 'trapezoid' | 'parallelogram' | 'thales' | 'pythagoras' | 'pyramid' | 'coordinate' | 'chart';
  diagramData?: any;
  simQ: string;
  simOpts: [string, string, string, string];
  simAns: number;
  simExp: string;
}

interface LessonDef {
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
  questions: QuestionInput[];
}

// Function to generate full TS export
export function generateCurriculum() {
  // Let's create the lessons array
  const lessons: LessonDef[] = [
    // --- CHƯƠNG 1 ---
    // Bài 1
    {
      id: 'k1-b1',
      grade: '8',
      semester: 1,
      chapterNumber: 1,
      chapterTitle: 'Chương I: Đa thức',
      lessonNumber: 1,
      title: 'Bài 1. Đơn thức',
      textbookRef: 'Toán 8 Kết nối tri thức - Bài 1',
      summary: 'Đơn thức là biểu thức đại số gồm một số, một biến hoặc tích giữa các số và biến. Đơn thức thu gọn có hệ số và phần biến. Bậc của đơn thức là tổng số mũ của các biến. Đơn thức đồng dạng có cùng phần biến.',
      keyFormulas: ['Đơn thức = a · x^m · y^n', 'Bậc = tổng các số mũ biến', 'ax + bx = (a + b)x'],
      questions: [
        {
          q: 'Biểu thức nào sau đây là một đơn thức?',
          opts: ['x + 2y', '3x²y', 'x / y', '2x - 5'],
          ans: 1,
          exp: '3x²y là tích giữa số 3 và các biến x, y nên là đơn thức.',
          simQ: 'Biểu thức nào là đơn thức?',
          simOpts: ['5xy³z', 'x² - y²', '4/x', 'a + b'],
          simAns: 0,
          simExp: '5xy³z là đơn thức vì chỉ gồm tích số và biến.'
        },
        {
          q: 'Hệ số và phần biến của đơn thức -6x³y lần lượt là:',
          opts: ['Hệ số là 6, phần biến là x³y', 'Hệ số là -6, phần biến là x³y', 'Hệ số là -6, phần biến là x³', 'Hệ số là x³y, phần biến là -6'],
          ans: 1,
          exp: 'Hệ số là -6, phần biến là x³y.',
          simQ: 'Hệ số của đơn thức -4a²b là:',
          simOpts: ['-4', '4', 'a²b', '-4a'],
          simAns: 0,
          simExp: 'Phần số kèm dấu âm là -4.'
        },
        {
          q: 'Bậc của đơn thức 5x²y³z là bao nhiêu?',
          opts: ['5', '6', '2', '3'],
          ans: 1,
          exp: 'Bậc là tổng số mũ các biến: 2 + 3 + 1 = 6.',
          simQ: 'Bậc của đơn thức 7x³y² là:',
          simOpts: ['3', '2', '5', '7'],
          simAns: 2,
          simExp: 'Tổng số mũ: 3 + 2 = 5.'
        },
        {
          q: 'Thu gọn đơn thức A = 2xy · (-3x²) ta được kết quả là:',
          opts: ['-6x²y', '-6x³y', '6x³y', '-x³y'],
          ans: 1,
          exp: '2 · (-3) · (x · x²) · y = -6x³y.',
          simQ: 'Thu gọn 3x²y · (-2xy):',
          simOpts: ['-6x³y²', '-5x³y²', '6x²y', '-6x²y²'],
          simAns: 0,
          simExp: '3 · (-2) · x³ · y² = -6x³y².'
        },
        {
          q: 'Cặp đơn thức nào sau đây là hai đơn thức đồng dạng?',
          opts: ['2x²y và 3xy²', '-5x²y³ và 2x²y³', '4x³ và 4y³', '3xy và 3x'],
          ans: 1,
          exp: 'Hai đơn thức có cùng phần biến x²y³ nên đồng dạng.',
          simQ: 'Đơn thức đồng dạng với 8xy² là:',
          simOpts: ['-3xy²', '8x²y', '8x²y²', '5xy'],
          simAns: 0,
          simExp: 'Có cùng phần biến xy².'
        },
        {
          q: 'Kết quả của phép tính 3xy² + (-5xy²) + xy² là:',
          opts: ['-xy²', '-2xy²', 'xy²', '-xy'],
          ans: 0,
          exp: '(3 - 5 + 1)xy² = -1xy² = -xy².',
          simQ: 'Tính 4x²y - 7x²y + 2x²y:',
          simOpts: ['-x²y', '-5x²y', 'x²y', '-3x²y'],
          simAns: 0,
          simExp: '(4 - 7 + 2)x²y = -x²y.'
        },
        {
          q: 'Giá trị của đơn thức 2x²y tại x = -1, y = 2 là:',
          opts: ['-4', '4', '-8', '8'],
          ans: 1,
          exp: '2 · (-1)² · 2 = 2 · 1 · 2 = 4.',
          simQ: 'Tính giá trị của 3xy² tại x = 2, y = -1:',
          simOpts: ['6', '-6', '12', '-12'],
          simAns: 0,
          simExp: '3 · 2 · (-1)² = 6.'
        },
        {
          q: 'Đơn thức nào sau đây có bậc bằng 4?',
          opts: ['4xy', '2x²y²', '3x³y²', '5x⁴y'],
          ans: 1,
          exp: '2x²y² có số mũ 2 + 2 = 4.',
          simQ: 'Đơn thức nào có bậc bằng 3?',
          simOpts: ['3x³y', '2xy²', '4x²y²', '5x⁴'],
          simAns: 1,
          simExp: '2xy² có số mũ 1 + 2 = 3.'
        },
        {
          q: 'Số thực khác 0 là một đơn thức có bậc bằng:',
          opts: ['1', '0', 'Không có bậc', '5'],
          ans: 1,
          exp: 'Số thực khác 0 là đơn thức bậc 0.',
          simQ: 'Đa thức 0 có bậc là:',
          simOpts: ['0', '1', 'Không có bậc', 'Vô cùng'],
          simAns: 2,
          simExp: 'Số 0 là đơn thức không có bậc.'
        },
        {
          q: 'Tìm m để đơn thức 3x^m y² có bậc là 5 (m ∈ ℕ*):',
          opts: ['m = 2', 'm = 3', 'm = 5', 'm = 7'],
          ans: 1,
          exp: 'm + 2 = 5 => m = 3.',
          simQ: 'Tìm n để -2x² y^n có bậc bằng 6:',
          simOpts: ['n = 2', 'n = 3', 'n = 4', 'n = 6'],
          simAns: 2,
          simExp: '2 + n = 6 => n = 4.'
        }
      ]
    },

    // Bài 2
    {
      id: 'k1-b2',
      grade: '8',
      semester: 1,
      chapterNumber: 1,
      chapterTitle: 'Chương I: Đa thức',
      lessonNumber: 2,
      title: 'Bài 2. Đa thức',
      textbookRef: 'Toán 8 Kết nối tri thức - Bài 2',
      summary: 'Đa thức là tổng của những đơn thức. Mỗi đơn thức là một hạng tử. Thu gọn đa thức bằng cách cộng trừ các hạng tử đồng dạng. Bậc của đa thức là bậc của hạng tử có bậc cao nhất trong dạng thu gọn.',
      keyFormulas: ['Đa thức = tổng các đơn thức', 'Bậc = max(bậc các hạng tử thu gọn)'],
      questions: [
        {
          q: 'Biểu thức nào sau đây KHÔNG PHẢI là đa thức?',
          opts: ['x² - 3xy + 1', '5x³ - 2y', '(x + 1) / y', '2x + 7'],
          ans: 2,
          exp: '(x+1)/y có biến ở mẫu nên không phải đa thức.',
          simQ: 'Biểu thức nào sau đây là đa thức?',
          simOpts: ['2/x + y', '3x² - 4xy + 5', '1/(x² + 1)', 'x/y - 3'],
          simAns: 1,
          simExp: '3x² - 4xy + 5 là đa thức hợp lệ.'
        },
        {
          q: 'Các hạng tử của đa thức P = 3x²y - 2xy + 5 là:',
          opts: ['3x²y, 2xy, 5', '3x²y, -2xy, 5', '3, -2, 5', 'x²y, xy, 1'],
          ans: 1,
          exp: 'Các hạng tử gồm dấu: 3x²y, -2xy, 5.',
          simQ: 'Hạng tử tự do của đa thức x² - 4x + 9 là:',
          simOpts: ['1', '-4', '9', 'x²'],
          simAns: 2,
          simExp: '9 không chứa biến.'
        },
        {
          q: 'Thu gọn đa thức P = 2x²y + 3xy² - 5x²y + 2 ta được:',
          opts: ['-3x²y + 3xy² + 2', '7x²y + 3xy² + 2', '-3x²y + 5', '3xy² + 2'],
          ans: 0,
          exp: '(2x²y - 5x²y) + 3xy² + 2 = -3x²y + 3xy² + 2.',
          simQ: 'Thu gọn Q = 5x² - 2x + 3x² + 7:',
          simOpts: ['8x² - 2x + 7', '2x² - 2x + 7', '8x² + 5', '6x² + 7'],
          simAns: 0,
          simExp: '8x² - 2x + 7.'
        },
        {
          q: 'Bậc của đa thức Q = x³y² - 2x⁴ + y⁵ - 1 là:',
          opts: ['3', '4', '5', '6'],
          ans: 2,
          exp: 'x³y² có bậc 5, y⁵ có bậc 5. Bậc cao nhất là 5.',
          simQ: 'Bậc của đa thức 4x²y³ - 3x⁵y + 2 là:',
          simOpts: ['5', '6', '2', '7'],
          simAns: 1,
          simExp: '-3x⁵y có bậc 5 + 1 = 6.'
        },
        {
          q: 'Tính giá trị của A = x² - 2xy + y² tại x = 3, y = 1:',
          opts: ['4', '2', '8', '16'],
          ans: 0,
          exp: 'A = (3 - 1)² = 2² = 4.',
          simQ: 'Tính x² + y² tại x = 3, y = 4:',
          simOpts: ['7', '25', '12', '14'],
          simAns: 1,
          simExp: '3² + 4² = 25.'
        },
        {
          q: 'Đa thức nào sau đây đã được thu gọn?',
          opts: ['x² + 2xy - x²', '3x²y - 2xy + 1', '4x - 2 + 3x', 'xy + yx - 5'],
          ans: 1,
          exp: '3x²y - 2xy + 1 không còn hạng tử đồng dạng nào.',
          simQ: 'Đa thức nào CHƯA thu gọn?',
          simOpts: ['2x + 3y', 'x² - y²', '3xy - 5xy + 1', 'x³ + 1'],
          simAns: 2,
          simExp: '3xy và -5xy chưa cộng gộp.'
        },
        {
          q: 'Bậc của đa thức P = x⁴ - 2x³y + 3x⁴ + 5 sau khi thu gọn là:',
          opts: ['3', '4', '7', '5'],
          ans: 1,
          exp: 'P = 4x⁴ - 2x³y + 5 có bậc cao nhất là 4.',
          simQ: 'Bậc của 2x³ - 5x² + 1 là:',
          simOpts: ['2', '3', '5', '1'],
          simAns: 1,
          simExp: 'Hạng tử bậc cao nhất là 3.'
        },
        {
          q: 'Cho M = ax²y + 2xy. Để M có bậc 3 thì:',
          opts: ['a = 0', 'a ≠ 0', 'a = 1', 'Tùy ý'],
          ans: 1,
          exp: 'ax²y có bậc 3 nên cần hệ số a ≠ 0.',
          simQ: 'Để (m - 2)x³ + 4x có bậc 3 thì m cần:',
          simOpts: ['m = 2', 'm ≠ 2', 'm > 2', 'm < 2'],
          simAns: 1,
          simExp: 'm - 2 ≠ 0 => m ≠ 2.'
        },
        {
          q: 'Hệ số cao nhất của đa thức một biến P(x) = 4x³ - 7x² + 2 là:',
          opts: ['4', '-7', '2', '3'],
          ans: 0,
          exp: 'Hệ số đi liền với lũy thừa cao nhất x³ là 4.',
          simQ: 'Hệ số cao nhất của 5x⁴ - 2x + 1 là:',
          simOpts: ['5', '-2', '1', '4'],
          simAns: 0,
          simExp: 'Hệ số của x⁴ là 5.'
        },
        {
          q: 'Giá trị của P = 2(x + y) biết x + y = 10 là:',
          opts: ['10', '20', '12', '5'],
          ans: 1,
          exp: '2 · 10 = 20.',
          simQ: 'Giá trị của 3(a - b) biết a - b = 7 là:',
          simOpts: ['10', '21', '14', '4'],
          simAns: 1,
          simExp: '3 · 7 = 21.'
        }
      ]
    },

    // Bài 3
    {
      id: 'k1-b3',
      grade: '8',
      semester: 1,
      chapterNumber: 1,
      chapterTitle: 'Chương I: Đa thức',
      lessonNumber: 3,
      title: 'Bài 3. Phép cộng và phép trừ đa thức',
      textbookRef: 'Toán 8 Kết nối tri thức - Bài 3',
      summary: 'Để cộng, trừ hai đa thức: bỏ dấu ngoặc (chú ý đổi dấu khi có dấu trừ phía trước), sau đó nhóm các hạng tử đồng dạng và cộng trừ các hệ số.',
      keyFormulas: ['A + B: giữ dấu', 'A - B: đổi dấu các hạng tử của B'],
      questions: [
        {
          q: 'Cho A = 2x + y và B = x - y. Tổng A + B bằng:',
          opts: ['3x', '3x + 2y', 'x', '3x - y'],
          ans: 0,
          exp: '2x + y + x - y = 3x.',
          simQ: 'Cho P = 3a - b và Q = a + b. Tổng P + Q là:',
          simOpts: ['4a', '2a', '4a - 2b', '4a + 2b'],
          simAns: 0,
          simExp: '3a - b + a + b = 4a.'
        },
        {
          q: 'Cho A = 2x + y và B = x - y. Hiệu A - B bằng:',
          opts: ['x + 2y', 'x', '3x', 'x - 2y'],
          ans: 0,
          exp: '2x + y - (x - y) = 2x + y - x + y = x + 2y.',
          simQ: 'Cho M = 4x + 3y và N = x + y. Hiệu M - N bằng:',
          simOpts: ['3x + 2y', '5x + 4y', '3x + 4y', '3x'],
          simAns: 0,
          simExp: '4x + 3y - x - y = 3x + 2y.'
        },
        {
          q: 'Bỏ dấu ngoặc trong biểu thức -(x² - 3xy + 2) ta được:',
          opts: ['-x² - 3xy + 2', '-x² + 3xy - 2', 'x² - 3xy + 2', '-x² - 3xy - 2'],
          ans: 1,
          exp: 'Đổi dấu toàn bộ các số hạng bên trong ngoặc.',
          simQ: 'Bỏ ngoặc biểu thức -(2a - b + 5):',
          simOpts: ['-2a + b - 5', '-2a - b + 5', '2a - b - 5', '-2a + b + 5'],
          simAns: 0,
          simExp: '-2a + b - 5.'
        },
        {
          q: 'Cho P + (x² - 2y²) = 3x² - y². Đa thức P là:',
          opts: ['2x² + y²', '4x² - 3y²', '2x² - y²', 'x² + y²'],
          ans: 0,
          exp: 'P = (3x² - y²) - (x² - 2y²) = 2x² + y².',
          simQ: 'Tìm P biết P - (2x + 1) = 3x - 4:',
          simOpts: ['5x - 3', 'x - 5', '5x - 5', 'x - 3'],
          simAns: 0,
          simExp: 'P = 3x - 4 + 2x + 1 = 5x - 3.'
        },
        {
          q: 'Tính (x² - 2xy) + (2xy - y²):',
          opts: ['x² - y²', 'x² + y²', 'x² - 4xy - y²', '2x² - 2y²'],
          ans: 0,
          exp: 'x² - 2xy + 2xy - y² = x² - y².',
          simQ: 'Tính (a² + 3ab) + (-3ab + b²):',
          simOpts: ['a² + b²', 'a² - b²', 'a² + 6ab + b²', '2a²'],
          simAns: 0,
          simExp: 'a² + b².'
        },
        {
          q: 'Tổng của 5x²y - 3xy² và 2x²y + 3xy² là:',
          opts: ['7x²y', '7x²y + 6xy²', '3x²y', '7xy'],
          ans: 0,
          exp: '(5 + 2)x²y + (-3 + 3)xy² = 7x²y.',
          simQ: 'Tính 4xy + (-4xy) + 2x:',
          simOpts: ['2x', '8xy + 2x', '0', '4x'],
          simAns: 0,
          simExp: '2x.'
        },
        {
          q: 'Hiệu (x² + y²) - (x² - y²) bằng:',
          opts: ['2y²', '0', '2x²', '-2y²'],
          ans: 0,
          exp: 'x² + y² - x² + y² = 2y².',
          simQ: 'Hiệu (a + b) - (a - b) bằng:',
          simOpts: ['2b', '2a', '0', '-2b'],
          simAns: 0,
          simExp: '2b.'
        },
        {
          q: 'Bậc của tổng A = x³ + 2x và B = -x³ + x² + 1 là:',
          opts: ['2', '3', '1', '0'],
          ans: 0,
          exp: 'A + B = x² + 2x + 1, bậc là 2 vì hạng tử x³ bị triệt tiêu.',
          simQ: 'Bậc của (x² + 1) + (-x² + x) là:',
          simOpts: ['1', '2', '0', '3'],
          simAns: 0,
          simExp: 'x + 1 có bậc là 1.'
        },
        {
          q: 'Tìm M biết M + (x² - y²) = 0:',
          opts: ['-x² + y²', 'x² + y²', '-x² - y²', 'x² - y²'],
          ans: 0,
          exp: 'M = -(x² - y²) = -x² + y².',
          simQ: 'Đa thức đối của 2x - 3y là:',
          simOpts: ['-2x + 3y', '-2x - 3y', '2x + 3y', '3x - 2y'],
          simAns: 0,
          simExp: '-2x + 3y.'
        },
        {
          q: 'Rút gọn (x + y) - (x - y) + (y - x):',
          opts: ['3y - x', 'y + x', '3y + x', 'y - x'],
          ans: 0,
          exp: 'x + y - x + y + y - x = 3y - x.',
          simQ: 'Rút gọn (a + b) + (a - b):',
          simOpts: ['2a', '2b', 'a² - b²', '0'],
          simAns: 0,
          simExp: '2a.'
        }
      ]
    },

    // Bài 4
    {
      id: 'k1-b4',
      grade: '8',
      semester: 1,
      chapterNumber: 1,
      chapterTitle: 'Chương I: Đa thức',
      lessonNumber: 4,
      title: 'Bài 4. Phép nhân đa thức',
      textbookRef: 'Toán 8 Kết nối tri thức - Bài 4',
      summary: 'Nhân đơn thức với đa thức: A(B + C) = AB + AC. Nhân đa thức với đa thức: nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi thu gọn.',
      keyFormulas: ['A(B + C) = AB + AC', '(A + B)(C + D) = AC + AD + BC + BD'],
      questions: [
        {
          q: 'Tích của đơn thức 2x và đa thức (x - 3) là:',
          opts: ['2x² - 6x', '2x² - 3', '2x² + 6x', 'x² - 6x'],
          ans: 0,
          exp: '2x · x - 2x · 3 = 2x² - 6x.',
          simQ: 'Tính 3x(2x + 1):',
          simOpts: ['6x² + 3x', '6x² + 1', '5x² + 3x', '6x + 3'],
          simAns: 0,
          simExp: '6x² + 3x.'
        },
        {
          q: 'Thực hiện phép tính -xy(x² - y):',
          opts: ['-x³y + xy²', '-x³y - xy²', 'x³y + xy²', '-x²y + xy'],
          ans: 0,
          exp: '-xy · x² - xy · (-y) = -x³y + xy².',
          simQ: 'Tính -2x(x - 4):',
          simOpts: ['-2x² + 8x', '-2x² - 8x', '2x² + 8x', '-2x + 8'],
          simAns: 0,
          simExp: '-2x² + 8x.'
        },
        {
          q: 'Khai triển (x + 2)(x + 3) ta được:',
          opts: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 5x + 5', 'x² + 6'],
          ans: 0,
          exp: 'x² + 3x + 2x + 6 = x² + 5x + 6.',
          simQ: 'Khai triển (x + 1)(x + 4):',
          simOpts: ['x² + 5x + 4', 'x² + 4x + 1', 'x² + 5x + 5', 'x² + 4'],
          simAns: 0,
          simExp: 'x² + 5x + 4.'
        },
        {
          q: 'Khai triển (x - 1)(x + 1):',
          opts: ['x² - 1', 'x² + 1', 'x² - 2x + 1', 'x² - 2'],
          ans: 0,
          exp: 'x² - 1² = x² - 1.',
          simQ: 'Khai triển (x - 2)(x + 2):',
          simOpts: ['x² - 4', 'x² + 4', 'x² - 2', 'x² - 4x + 4'],
          simAns: 0,
          simExp: 'x² - 4.'
        },
        {
          q: 'Kết quả của (2x - 1)(x + 2) là:',
          opts: ['2x² + 3x - 2', '2x² + 4x - 2', '2x² - 3x - 2', '2x² + 3x + 2'],
          ans: 0,
          exp: '2x² + 4x - x - 2 = 2x² + 3x - 2.',
          simQ: 'Tính (3x + 1)(x - 2):',
          simOpts: ['3x² - 5x - 2', '3x² + 5x - 2', '3x² - 6x - 2', '3x² - 5x + 2'],
          simAns: 0,
          simExp: '3x² - 5x - 2.'
        },
        {
          q: 'Rút gọn x(x - y) + y(x - y):',
          opts: ['x² - y²', 'x² + y²', '(x - y)²', 'x² - 2xy + y²'],
          ans: 0,
          exp: '(x + y)(x - y) = x² - y².',
          simQ: 'Rút gọn a(b + c) - b(a + c):',
          simOpts: ['c(a - b)', 'ab - bc', '0', 'ac + bc'],
          simAns: 0,
          simExp: 'c(a - b).'
        },
        {
          q: 'Hệ số của x trong P = (x + 3)(x - 5) là:',
          opts: ['-2', '2', '-15', '8'],
          ans: 0,
          exp: 'P = x² - 2x - 15. Hệ số của x là -2.',
          simQ: 'Hệ số của x trong (x + 2)(x + 5) là:',
          simOpts: ['7', '10', '3', '1'],
          simAns: 0,
          simExp: '2 + 5 = 7.'
        },
        {
          q: 'Giá trị của (x - 2)(x + 2) tại x = 10 là:',
          opts: ['96', '100', '104', '98'],
          ans: 0,
          exp: '10² - 4 = 100 - 4 = 96.',
          simQ: 'Tính (x - 1)(x + 1) tại x = 5:',
          simOpts: ['24', '25', '26', '20'],
          simAns: 0,
          simExp: '5² - 1 = 24.'
        },
        {
          q: 'Khai triển (x - 2)(x² + 2x + 4):',
          opts: ['x³ - 8', 'x³ - 4', 'x³ + 8', 'x³ - 6'],
          ans: 0,
          exp: 'x³ - 2³ = x³ - 8.',
          simQ: 'Khai triển (x - 3)(x² + 3x + 9):',
          simOpts: ['x³ - 27', 'x³ + 27', 'x³ - 9', 'x³ - 18'],
          simAns: 0,
          simExp: 'x³ - 27.'
        },
        {
          q: 'Tìm x biết x(x - 2) - x² = 8:',
          opts: ['x = -4', 'x = 4', 'x = -2', 'x = 2'],
          ans: 0,
          exp: '-2x = 8 => x = -4.',
          simQ: 'Tìm x biết x(x + 3) - x² = 6:',
          simOpts: ['x = 2', 'x = -2', 'x = 3', 'x = -3'],
          simAns: 0,
          simExp: '3x = 6 => x = 2.'
        }
      ]
    },

    // Bài 5
    {
      id: 'k1-b5',
      grade: '8',
      semester: 1,
      chapterNumber: 1,
      chapterTitle: 'Chương I: Đa thức',
      lessonNumber: 5,
      title: 'Bài 5. Phép chia đa thức cho đơn thức',
      textbookRef: 'Toán 8 Kết nối tri thức - Bài 5',
      summary: 'Chia đơn thức cho đơn thức: chia hệ số cho hệ số và lũy thừa cùng biến với nhau. Chia đa thức cho đơn thức: chia từng hạng tử của đa thức cho đơn thức rồi cộng các thương lại.',
      keyFormulas: ['x^m : x^n = x^(m - n)', '(A + B) : C = A:C + B:C'],
      questions: [
        {
          q: 'Kết quả của 6x⁴ : 2x² là:',
          opts: ['3x²', '3x', '4x²', '3x⁶'],
          ans: 0,
          exp: '(6:2)x^(4-2) = 3x².',
          simQ: 'Tính 8x⁵ : 4x²:',
          simOpts: ['2x³', '2x²', '4x³', '2x⁷'],
          simAns: 0,
          simExp: '2x³.'
        },
        {
          q: 'Kết quả của (-12x³y²) : (4xy) là:',
          opts: ['-3x²y', '-3xy', '3x²y', '-3x²'],
          ans: 0,
          exp: '-3x²y.',
          simQ: 'Tính 15a²b : (-3ab):',
          simOpts: ['-5a', '5a', '-5ab', '-5b'],
          simAns: 0,
          simExp: '-5a.'
        },
        {
          q: 'Đơn thức 4x²y chia hết cho đơn thức nào?',
          opts: ['2xy', '3x³', 'xy²', '2xyz'],
          ans: 0,
          exp: '2xy có bậc mỗi biến ≤ số mũ trong 4x²y.',
          simQ: 'Đơn thức nào chia hết cho 2x²?',
          simOpts: ['6x³y', '4x', '2y²', 'x'],
          simAns: 0,
          simExp: '6x³y.'
        },
        {
          q: 'Thực hiện phép chia (4x³ - 2x²) : 2x²:',
          opts: ['2x - 1', '2x', '2x² - 1', 'x - 1'],
          ans: 0,
          exp: '4x³:2x² - 2x²:2x² = 2x - 1.',
          simQ: 'Tính (6x⁴ + 9x²) : 3x²:',
          simOpts: ['2x² + 3', '2x² + 3x', '3x² + 3', '2x + 3'],
          simAns: 0,
          simExp: '2x² + 3.'
        },
        {
          q: 'Kết quả của (9x²y² - 6xy³) : (-3xy) là:',
          opts: ['-3xy + 2y²', '3xy - 2y²', '-3x + 2y', '-3xy - 2y²'],
          ans: 0,
          exp: '-3xy + 2y².',
          simQ: 'Tính (8xy - 4y) : 4y:',
          simOpts: ['2x - 1', '2xy - 1', '2x', '2x - 4'],
          simAns: 0,
          simExp: '2x - 1.'
        },
        {
          q: 'Điều kiện để x^n chia hết cho x³ (n ∈ ℕ*):',
          opts: ['n ≥ 3', 'n ≤ 3', 'n > 3', 'n = 3'],
          ans: 0,
          exp: 'Số mũ bị chia phải lớn hơn hoặc bằng số mũ chia.',
          simQ: 'Để x⁵ chia hết cho x^m thì:',
          simOpts: ['m ≤ 5', 'm ≥ 5', 'm > 5', 'm = 5'],
          simAns: 0,
          simExp: 'm ≤ 5.'
        },
        {
          q: 'Thương của (x³y + 2x²y²) : xy là:',
          opts: ['x² + 2xy', 'x² + 2y', 'x³ + 2xy', 'x²y + 2xy'],
          ans: 0,
          exp: 'x² + 2xy.',
          simQ: 'Tính (a²b + ab²) : ab:',
          simOpts: ['a + b', 'ab', 'a - b', 'a² + b²'],
          simAns: 0,
          simExp: 'a + b.'
        },
        {
          q: 'Giá trị của P = (10x³y² - 5x²y³) : 5x²y² tại x = 3, y = 2:',
          opts: ['4', '6', '1', '2'],
          ans: 0,
          exp: 'P = 2x - y = 2(3) - 2 = 4.',
          simQ: 'Tính P = (6x² - 4x) : 2x tại x = 5:',
          simOpts: ['13', '15', '11', '10'],
          simAns: 0,
          simExp: '3(5) - 2 = 13.'
        },
        {
          q: 'Đa thức 3x³ - 6x² chia cho đơn thức nào có thương là x - 2?',
          opts: ['3x²', '3x', 'x²', '-3x²'],
          ans: 0,
          exp: '(3x³ - 6x²) : 3x² = x - 2.',
          simQ: 'Đa thức 2x² + 4x chia cho đơn thức nào được x + 2?',
          simOpts: ['2x', 'x', '2', '4x'],
          simAns: 0,
          simExp: '2x.'
        },
        {
          q: 'Phép chia nào sau đây là phép chia hết?',
          opts: ['(x³ + 2x) : x', '(x² + y) : x', '(x² + 1) : x²', '(x²y + 1) : y'],
          ans: 0,
          exp: 'x³:x = x² và 2x:x = 2.',
          simQ: 'Đa thức nào chia hết cho x?',
          simOpts: ['x² + 3x', 'x + 2', '2x² + 5', 'x³ - 1'],
          simAns: 0,
          simExp: 'x² + 3x.'
        }
      ]
    }
  ];

  return lessons;
}
