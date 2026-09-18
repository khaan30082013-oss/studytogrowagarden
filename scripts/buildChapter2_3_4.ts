import { writeChapterFile, LessonRaw } from './chapterWriterHelper';

// ==========================================
// CHƯƠNG II: HẰNG ĐẲNG THỨC ĐÁNG NHỚ VÀ ỨNG DỤNG
// ==========================================
const chapter2Lessons: LessonRaw[] = [
  // Bài 6
  {
    id: 'k1-b6',
    grade: '8',
    semester: 1,
    chapterNumber: 2,
    chapterTitle: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    lessonNumber: 6,
    title: 'Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu',
    textbookRef: 'Toán 8 KNTT - Bài 6',
    summary: '• Hiệu hai bình phương: A² - B² = (A - B)(A + B)\\n• Bình phương của một tổng: (A + B)² = A² + 2AB + B²\\n• Bình phương của một hiệu: (A - B)² = A² - 2AB + B²',
    keyFormulas: [
      'A² - B² = (A - B)(A + B)',
      '(A + B)² = A² + 2AB + B²',
      '(A - B)² = A² - 2AB + B²'
    ],
    questions: [
      {
        q: 'Khai triển (x + 3)² ta được kết quả là:',
        opts: ['x² + 6x + 9', 'x² + 3x + 9', 'x² + 9', 'x² + 6x + 6'],
        ans: 0,
        exp: '(x + 3)² = x² + 2 · 3 · x + 3² = x² + 6x + 9.',
        simQ: 'Khai triển (x + 5)²:',
        simOpts: ['x² + 10x + 25', 'x² + 5x + 25', 'x² + 25', 'x² + 10x + 10'],
        simAns: 0,
        simExp: 'x² + 2·5·x + 25 = x² + 10x + 25.'
      },
      {
        q: 'Khai triển (2x - 1)² ta được kết quả là:',
        opts: ['4x² - 4x + 1', '4x² - 2x + 1', '2x² - 4x + 1', '4x² - 1'],
        ans: 0,
        exp: '(2x)² - 2·2x·1 + 1² = 4x² - 4x + 1.',
        simQ: 'Khai triển (3x - 1)²:',
        simOpts: ['9x² - 6x + 1', '9x² - 3x + 1', '3x² - 6x + 1', '9x² - 1'],
        simAns: 0,
        simExp: '9x² - 6x + 1.'
      },
      {
        q: 'Viết biểu thức x² - 16 dưới dạng tích:',
        opts: ['(x - 4)(x + 4)', '(x - 8)(x + 8)', '(x - 4)²', '(x + 4)²'],
        ans: 0,
        exp: 'x² - 16 = x² - 4² = (x - 4)(x + 4).',
        simQ: 'Viết x² - 25 dưới dạng tích:',
        simOpts: ['(x - 5)(x + 5)', '(x - 5)²', '(x + 5)²', '(x - 10)(x + 10)'],
        simAns: 0,
        simExp: '(x - 5)(x + 5).'
      },
      {
        q: 'Biểu thức 4x² - 12x + 9 được viết gọn thành bình phương một hiệu là:',
        opts: ['(2x - 3)²', '(2x + 3)²', '(4x - 3)²', '(2x - 9)²'],
        ans: 0,
        exp: '(2x)² - 2·2x·3 + 3² = (2x - 3)²',
        simQ: 'Viết x² - 6x + 9 thành bình phương một hiệu:',
        simOpts: ['(x - 3)²', '(x + 3)²', '(x - 9)²', '(x - 6)²'],
        simAns: 0,
        simExp: '(x - 3)².'
      },
      {
        q: 'Tính nhanh 101² bằng cách áp dụng hằng đẳng thức:',
        opts: ['10201', '10101', '10200', '10001'],
        ans: 0,
        exp: '(100 + 1)² = 10000 + 200 + 1 = 10201.',
        simQ: 'Tính nhanh 51²:',
        simOpts: ['2601', '2501', '2551', '2610'],
        simAns: 0,
        simExp: '(50 + 1)² = 2500 + 100 + 1 = 2601.'
      },
      {
        q: 'Tính nhanh 99² bằng hằng đẳng thức:',
        opts: ['9801', '9901', '9800', '9701'],
        ans: 0,
        exp: '(100 - 1)² = 10000 - 200 + 1 = 9801.',
        simQ: 'Tính nhanh 49²:',
        simOpts: ['2401', '2501', '2411', '2301'],
        simAns: 0,
        simExp: '(50 - 1)² = 2500 - 100 + 1 = 2401.'
      },
      {
        q: 'Tính nhanh 75² - 25²:',
        opts: ['5000', '2500', '10000', '500'],
        ans: 0,
        exp: '(75 - 25)(75 + 25) = 50 · 100 = 5000.',
        simQ: 'Tính nhanh 65² - 35²:',
        simOpts: ['3000', '6000', '1000', '4500'],
        simAns: 0,
        simExp: '(65 - 35)(65 + 35) = 30 · 100 = 3000.'
      },
      {
        q: 'Biểu thức (x - y)² bằng biểu thức nào sau đây?',
        opts: ['(y - x)²', '-(x - y)²', 'x² - y²', '-(y - x)²'],
        ans: 0,
        exp: '(x - y)² = (-(y - x))² = (y - x)².',
        simQ: 'Biểu thức (a - b)² bằng:',
        simOpts: ['(b - a)²', '-(b - a)²', 'a² - b²', '-(a - b)'],
        simAns: 0,
        simExp: '(b - a)².'
      },
      {
        q: 'Tìm x biết x² - 9 = 0:',
        opts: ['x = 3 hoặc x = -3', 'x = 3', 'x = -3', 'x = 9'],
        ans: 0,
        exp: '(x - 3)(x + 3) = 0 => x = ±3.',
        simQ: 'Tìm x biết x² - 16 = 0:',
        simOpts: ['x = 4 hoặc x = -4', 'x = 4', 'x = 16', 'x = -4'],
        simAns: 0,
        simExp: 'x = ±4.'
      },
      {
        q: 'Giá trị nhỏ nhất của biểu thức A = x² - 4x + 7 là:',
        opts: ['3', '7', '4', '0'],
        ans: 0,
        exp: 'A = (x - 2)² + 3 ≥ 3 khi x = 2.',
        simQ: 'Giá trị nhỏ nhất của P = x² - 2x + 5 là:',
        simOpts: ['4', '5', '1', '2'],
        simAns: 0,
        simExp: '(x - 1)² + 4 ≥ 4 khi x = 1.'
      }
    ]
  },

  // Bài 7
  {
    id: 'k1-b7',
    grade: '8',
    semester: 1,
    chapterNumber: 2,
    chapterTitle: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    lessonNumber: 7,
    title: 'Bài 7. Lập phương của một tổng. Lập phương của một hiệu',
    textbookRef: 'Toán 8 KNTT - Bài 7',
    summary: '• Lập phương của một tổng: (A + B)³ = A³ + 3A²B + 3AB² + B³\\n• Lập phương của một hiệu: (A - B)³ = A³ - 3A²B + 3AB² - B³',
    keyFormulas: [
      '(A + B)³ = A³ + 3A²B + 3AB² + B³',
      '(A - B)³ = A³ - 3A²B + 3AB² - B³'
    ],
    questions: [
      {
        q: 'Khai triển (x + 1)³ ta được kết quả là:',
        opts: ['x³ + 3x² + 3x + 1', 'x³ + x² + x + 1', 'x³ + 3x + 1', 'x³ + 1'],
        ans: 0,
        exp: '(x + 1)³ = x³ + 3x²·1 + 3x·1² + 1³ = x³ + 3x² + 3x + 1.',
        simQ: 'Khai triển (x + 2)³:',
        simOpts: ['x³ + 6x² + 12x + 8', 'x³ + 2x² + 4x + 8', 'x³ + 6x + 8', 'x³ + 8'],
        simAns: 0,
        simExp: 'x³ + 3·2·x² + 3·4·x + 8 = x³ + 6x² + 12x + 8.'
      },
      {
        q: 'Khai triển (x - 1)³ ta được kết quả là:',
        opts: ['x³ - 3x² + 3x - 1', 'x³ - 3x² - 3x - 1', 'x³ - x² + x - 1', 'x³ - 1'],
        ans: 0,
        exp: '(x - 1)³ = x³ - 3x² + 3x - 1.',
        simQ: 'Khai triển (x - 2)³:',
        simOpts: ['x³ - 6x² + 12x - 8', 'x³ - 6x² - 12x - 8', 'x³ - 8', 'x³ - 2x² + 4x - 8'],
        simAns: 0,
        simExp: 'x³ - 6x² + 12x - 8.'
      },
      {
        q: 'Viết biểu thức x³ + 6x² + 12x + 8 dưới dạng lập phương của một tổng:',
        opts: ['(x + 2)³', '(x + 4)³', '(x + 8)³', '(2x + 1)³'],
        ans: 0,
        exp: 'x³ + 3·x²·2 + 3·x·2² + 2³ = (x + 2)³.',
        simQ: 'Viết x³ + 3x² + 3x + 1 dưới dạng lập phương:',
        simOpts: ['(x + 1)³', '(x + 3)³', '(x - 1)³', '(3x + 1)³'],
        simAns: 0,
        simExp: '(x + 1)³.'
      },
      {
        q: 'Viết x³ - 3x² + 3x - 1 dưới dạng lập phương của một hiệu:',
        opts: ['(x - 1)³', '(x + 1)³', '(1 - x)³', '(x - 3)³'],
        ans: 0,
        exp: '(x - 1)³.',
        simQ: 'Viết x³ - 6x² + 12x - 8 thành lập phương:',
        simOpts: ['(x - 2)³', '(x + 2)³', '(x - 8)³', '(2x - 1)³'],
        simAns: 0,
        simExp: '(x - 2)³.'
      },
      {
        q: 'Tính giá trị của P = x³ + 3x² + 3x + 1 tại x = 99:',
        opts: ['1000000', '100000', '990000', '10000'],
        ans: 0,
        exp: 'P = (x + 1)³ = (99 + 1)³ = 100³ = 1 000 000.',
        simQ: 'Tính P = x³ + 3x² + 3x + 1 tại x = 9:',
        simOpts: ['1000', '100', '10000', '729'],
        simAns: 0,
        simExp: '(9 + 1)³ = 10³ = 1000.'
      },
      {
        q: 'Tính giá trị của Q = x³ - 3x² + 3x - 1 tại x = 101:',
        opts: ['1000000', '100000', '10000', '101000'],
        ans: 0,
        exp: 'Q = (x - 1)³ = (101 - 1)³ = 100³ = 1 000 000.',
        simQ: 'Tính Q = x³ - 3x² + 3x - 1 tại x = 11:',
        simOpts: ['1000', '100', '1100', '1331'],
        simAns: 0,
        simExp: '(11 - 1)³ = 10³ = 1000.'
      },
      {
        q: 'Biểu thức (2x + y)³ khai triển có hệ số của x²y là:',
        opts: ['12', '6', '4', '8'],
        ans: 0,
        exp: '3 · (2x)² · y = 3 · 4x² · y = 12x²y. Hệ số là 12.',
        simQ: 'Hệ số của xy² trong khai triển (x + 2y)³ là:',
        simOpts: ['12', '6', '4', '8'],
        simAns: 0,
        simExp: '3 · x · (2y)² = 12xy². Hệ số là 12.'
      },
      {
        q: 'Hằng đẳng thức nào sau đây là SAI?',
        opts: ['(a - b)³ = a³ - b³', '(a + b)³ = a³ + 3a²b + 3ab² + b³', '(a - b)³ = -(b - a)³', '(a + b)³ = a³ + b³ + 3ab(a + b)'],
        ans: 0,
        exp: '(a - b)³ = a³ - 3a²b + 3ab² - b³ ≠ a³ - b³.',
        simQ: 'Hằng đẳng thức nào sau đây đúng?',
        simOpts: ['(a - b)³ = -(b - a)³', '(a - b)³ = (b - a)³', '(a + b)³ = a³ + b³', '(a - b)³ = a³ - b³'],
        simAns: 0,
        simExp: 'Vì mũ lẻ nên (a - b)³ = -(b - a)³.'
      },
      {
        q: 'Rút gọn biểu thức (x + 1)³ - (x - 1)³ - 6x²:',
        opts: ['2', '0', '6x', '2x³'],
        ans: 0,
        exp: '(x³ + 3x² + 3x + 1) - (x³ - 3x² + 3x - 1) - 6x² = 6x² + 2 - 6x² = 2.',
        simQ: 'Rút gọn (x + 1)³ - (x - 1)³:',
        simOpts: ['6x² + 2', '6x²', '2', '2x³ + 6x'],
        simAns: 0,
        simExp: '6x² + 2.'
      },
      {
        q: 'Dạng thu gọn của a³ + b³ + 3ab(a + b) là:',
        opts: ['(a + b)³', '(a - b)³', 'a³ + b³', '(a + b)²'],
        ans: 0,
        exp: 'Đó chính là dạng viết lại của hằng đẳng thức (a + b)³.',
        simQ: 'Dạng thu gọn của a³ - b³ - 3ab(a - b) là:',
        simOpts: ['(a - b)³', '(a + b)³', 'a³ - b³', '(a - b)²'],
        simAns: 0,
        simExp: '(a - b)³.'
      }
    ]
  },

  // Bài 8
  {
    id: 'k1-b8',
    grade: '8',
    semester: 1,
    chapterNumber: 2,
    chapterTitle: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    lessonNumber: 8,
    title: 'Bài 8. Tổng và hiệu hai lập phương',
    textbookRef: 'Toán 8 KNTT - Bài 8',
    summary: '• Tổng hai lập phương: A³ + B³ = (A + B)(A² - AB + B²)\\n• Hiệu hai lập phương: A³ - B³ = (A - B)(A² + AB + B²)\\n• A² - AB + B² gọi là bình phương thiếu của hiệu, A² + AB + B² là bình phương thiếu của tổng.',
    keyFormulas: [
      'A³ + B³ = (A + B)(A² - AB + B²)',
      'A³ - B³ = (A - B)(A² + AB + B²)'
    ],
    questions: [
      {
        q: 'Viết x³ + 8 dưới dạng tích:',
        opts: ['(x + 2)(x² - 2x + 4)', '(x + 2)(x² + 2x + 4)', '(x - 2)(x² + 2x + 4)', '(x + 2)³'],
        ans: 0,
        exp: 'x³ + 2³ = (x + 2)(x² - 2x + 4).',
        simQ: 'Viết x³ + 27 dưới dạng tích:',
        simOpts: ['(x + 3)(x² - 3x + 9)', '(x + 3)(x² + 3x + 9)', '(x - 3)(x² + 3x + 9)', '(x + 3)³'],
        simAns: 0,
        simExp: '(x + 3)(x² - 3x + 9).'
      },
      {
        q: 'Viết x³ - 1 dưới dạng tích:',
        opts: ['(x - 1)(x² + x + 1)', '(x - 1)(x² - x + 1)', '(x + 1)(x² - x + 1)', '(x - 1)³'],
        ans: 0,
        exp: 'x³ - 1³ = (x - 1)(x² + x + 1).',
        simQ: 'Viết x³ - 8 dưới dạng tích:',
        simOpts: ['(x - 2)(x² + 2x + 4)', '(x - 2)(x² - 2x + 4)', '(x + 2)(x² - 2x + 4)', '(x - 2)³'],
        simAns: 0,
        simExp: '(x - 2)(x² + 2x + 4).'
      },
      {
        q: 'Khai triển tích (x + 1)(x² - x + 1) ta được:',
        opts: ['x³ + 1', 'x³ - 1', '(x + 1)³', 'x³ + 3'],
        ans: 0,
        exp: 'Đây là hằng đẳng thức tổng hai lập phương: x³ + 1.',
        simQ: 'Khai triển (x - 1)(x² + x + 1):',
        simOpts: ['x³ - 1', 'x³ + 1', '(x - 1)³', 'x² - 1'],
        simAns: 0,
        simExp: 'x³ - 1.'
      },
      {
        q: 'Biểu thức nào là bình phương thiếu của tổng A và B?',
        opts: ['A² + AB + B²', 'A² - AB + B²', 'A² + 2AB + B²', 'A² - 2AB + B²'],
        ans: 0,
        exp: 'A² + AB + B² thiếu hệ số 2 so với (A + B)² nên gọi là bình phương thiếu của tổng.',
        simQ: 'Biểu thức bình phương thiếu của hiệu A và B là:',
        simOpts: ['A² - AB + B²', 'A² + AB + B²', 'A² - 2AB + B²', 'A² + B²'],
        simAns: 0,
        simExp: 'A² - AB + B².'
      },
      {
        q: 'Tính giá trị của M = (x - 3)(x² + 3x + 9) tại x = 4:',
        opts: ['37', '27', '64', '1'],
        ans: 0,
        exp: 'M = x³ - 27 = 4³ - 27 = 64 - 27 = 37.',
        simQ: 'Tính (x + 2)(x² - 2x + 4) tại x = 3:',
        simOpts: ['35', '27', '8', '33'],
        simAns: 0,
        simExp: 'x³ + 8 = 3³ + 8 = 27 + 8 = 35.'
      },
      {
        q: 'Viết 8x³ - y³ dưới dạng tích:',
        opts: ['(2x - y)(4x² + 2xy + y²)', '(2x - y)(4x² - 2xy + y²)', '(2x + y)(4x² - 2xy + y²)', '(2x - y)³'],
        ans: 0,
        exp: '(2x)³ - y³ = (2x - y)(4x² + 2xy + y²).',
        simQ: 'Viết 27x³ + 1 dưới dạng tích:',
        simOpts: ['(3x + 1)(9x² - 3x + 1)', '(3x + 1)(9x² + 3x + 1)', '(3x - 1)(9x² + 3x + 1)', '(3x + 1)³'],
        simAns: 0,
        simExp: '(3x + 1)(9x² - 3x + 1).'
      },
      {
        q: 'Rút gọn (x - 2)(x² + 2x + 4) - x³:',
        opts: ['-8', '8', '0', '-4'],
        ans: 0,
        exp: 'x³ - 8 - x³ = -8.',
        simQ: 'Rút gọn (x + 3)(x² - 3x + 9) - x³:',
        simOpts: ['27', '-27', '9', '0'],
        simAns: 0,
        simExp: '27.'
      },
      {
        q: 'Tìm x biết (x - 1)(x² + x + 1) = 7:',
        opts: ['x = 2', 'x = -2', 'x = 8', 'x = 1'],
        ans: 0,
        exp: 'x³ - 1 = 7 => x³ = 8 => x = 2.',
        simQ: 'Tìm x biết (x + 1)(x² - x + 1) = 28:',
        simOpts: ['x = 3', 'x = -3', 'x = 2', 'x = 4'],
        simAns: 0,
        simExp: 'x³ + 1 = 28 => x³ = 27 => x = 3.'
      },
      {
        q: 'Với mọi x, giá trị biểu thức x² - x + 1 luôn:',
        opts: ['Dương (> 0)', 'Âm (< 0)', 'Bằng 0', 'Tùy giá trị x'],
        ans: 0,
        exp: 'x² - x + 1 = (x - 1/2)² + 3/4 > 0 với mọi x.',
        simQ: 'Giá trị biểu thức x² + x + 1 luôn:',
        simOpts: ['Dương (> 0)', 'Âm (< 0)', 'Bằng 0', 'Nhỏ hơn 1'],
        simAns: 0,
        simExp: '(x + 1/2)² + 3/4 > 0.'
      },
      {
        q: 'Hiệu a³ - b³ chia cho (a - b) được thương là:',
        opts: ['a² + ab + b²', 'a² - ab + b²', 'a² + 2ab + b²', '(a - b)²'],
        ans: 0,
        exp: 'a³ - b³ = (a - b)(a² + ab + b²).',
        simQ: 'Tổng a³ + b³ chia cho (a + b) được:',
        simOpts: ['a² - ab + b²', 'a² + ab + b²', '(a + b)²', 'a² + b²'],
        simAns: 0,
        simExp: 'a² - ab + b².'
      }
    ]
  },

  // Bài 9
  {
    id: 'k1-b9',
    grade: '8',
    semester: 1,
    chapterNumber: 2,
    chapterTitle: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    lessonNumber: 9,
    title: 'Bài 9. Phân tích đa thức thành nhân tử',
    textbookRef: 'Toán 8 KNTT - Bài 9',
    summary: '• Phân tích đa thức thành nhân tử (thừa số) là biến đổi đa thức đó thành tích của những đa thức.\\n• Các phương pháp cơ bản:\\n  1. Đặt nhân tử chung: A · B + A · C = A(B + C).\\n  2. Dùng hằng đẳng thức.\\n  3. Nhóm hạng tử.\\n  4. Phối hợp nhiều phương pháp.',
    keyFormulas: [
      'A·B + A·C = A(B + C)',
      'A² - B² = (A - B)(A + B)',
      'A² ± 2AB + B² = (A ± B)²'
    ],
    questions: [
      {
        q: 'Phân tích đa thức 2x² - 4x thành nhân tử:',
        opts: ['2x(x - 2)', '2(x² - 2)', 'x(2x - 4)', '2x(x - 4)'],
        ans: 0,
        exp: 'Đặt nhân tử chung 2x: 2x(x - 2).',
        simQ: 'Phân tích 3x² + 6x thành nhân tử:',
        simOpts: ['3x(x + 2)', '3(x² + 2x)', 'x(3x + 6)', '3x(x + 6)'],
        simAns: 0,
        simExp: '3x(x + 2).'
      },
      {
        q: 'Phân tích x² - 4y² thành nhân tử:',
        opts: ['(x - 2y)(x + 2y)', '(x - 4y)(x + 4y)', '(x - 2y)²', '(x + 2y)²'],
        ans: 0,
        exp: 'x² - (2y)² = (x - 2y)(x + 2y).',
        simQ: 'Phân tích 4x² - 9 thành nhân tử:',
        simOpts: ['(2x - 3)(2x + 3)', '(4x - 9)(4x + 9)', '(2x - 3)²', '(4x - 3)(4x + 3)'],
        simAns: 0,
        simExp: '(2x - 3)(2x + 3).'
      },
      {
        q: 'Phân tích x² - 2xy + y² - 4 thành nhân tử:',
        opts: ['(x - y - 2)(x - y + 2)', '(x - y - 4)(x - y + 4)', '(x - y - 2)²', '(x + y - 2)(x + y + 2)'],
        ans: 0,
        exp: '(x - y)² - 2² = (x - y - 2)(x - y + 2).',
        simQ: 'Phân tích x² + 2xy + y² - 9:',
        simOpts: ['(x + y - 3)(x + y + 3)', '(x + y - 9)(x + y + 9)', '(x - y - 3)(x - y + 3)', '(x + y - 3)²'],
        simAns: 0,
        simExp: '(x + y - 3)(x + y + 3).'
      },
      {
        q: 'Phân tích đa thức x² - xy + x - y thành nhân tử:',
        opts: ['(x - y)(x + 1)', '(x - y)(x - 1)', '(x + y)(x + 1)', '(x + y)(x - 1)'],
        ans: 0,
        exp: 'x(x - y) + (x - y) = (x - y)(x + 1).',
        simQ: 'Phân tích a² + ab + a + b:',
        simOpts: ['(a + b)(a + 1)', '(a + b)(a - 1)', '(a - b)(a + 1)', '(a + b)²'],
        simAns: 0,
        simExp: '(a + b)(a + 1).'
      },
      {
        q: 'Tìm x biết 2x(x - 3) + x - 3 = 0:',
        opts: ['x = 3 hoặc x = -1/2', 'x = 3 hoặc x = 1/2', 'x = -3 hoặc x = -1/2', 'x = 3'],
        ans: 0,
        exp: '(x - 3)(2x + 1) = 0 => x = 3 hoặc x = -1/2.',
        simQ: 'Tìm x biết x(x - 2) + x - 2 = 0:',
        simOpts: ['x = 2 hoặc x = -1', 'x = 2 hoặc x = 1', 'x = -2', 'x = 1'],
        simAns: 0,
        simExp: '(x - 2)(x + 1) = 0 => x = 2 hoặc x = -1.'
      },
      {
        q: 'Phân tích x³ - x thành nhân tử:',
        opts: ['x(x - 1)(x + 1)', 'x(x² - 1)', '(x - 1)(x² + 1)', 'x²(x - 1)'],
        ans: 0,
        exp: 'x(x² - 1) = x(x - 1)(x + 1).',
        simQ: 'Phân tích x³ - 4x:',
        simOpts: ['x(x - 2)(x + 2)', 'x(x² - 4)', '(x - 2)(x² + 2)', 'x²(x - 4)'],
        simAns: 0,
        simExp: 'x(x - 2)(x + 2).'
      },
      {
        q: 'Phân tích đa thức x² - 5x + 6 thành nhân tử:',
        opts: ['(x - 2)(x - 3)', '(x - 1)(x - 6)', '(x + 2)(x + 3)', '(x + 1)(x + 6)'],
        ans: 0,
        exp: 'Tách -5x = -2x - 3x => x(x - 2) - 3(x - 2) = (x - 2)(x - 3).',
        simQ: 'Phân tích x² - 7x + 12 thành nhân tử:',
        simOpts: ['(x - 3)(x - 4)', '(x - 2)(x - 6)', '(x + 3)(x + 4)', '(x - 1)(x - 12)'],
        simAns: 0,
        simExp: '(x - 3)(x - 4).'
      },
      {
        q: 'Giá trị của biểu thức A = x² - y² tại x = 87, y = 13 là:',
        opts: ['7400', '1000', '740', '10000'],
        ans: 0,
        exp: '(x - y)(x + y) = (87 - 13)(87 + 13) = 74 · 100 = 7400.',
        simQ: 'Tính x² - y² tại x = 95, y = 5:',
        simOpts: ['9000', '900', '10000', '8000'],
        simAns: 0,
        simExp: '(95 - 5)(95 + 5) = 90 · 100 = 9000.'
      },
      {
        q: 'Nhân tử chung của 5x²(x - 2y) - 15x(x - 2y) là:',
        opts: ['5x(x - 2y)', '5(x - 2y)', 'x(x - 2y)', '15x(x - 2y)'],
        ans: 0,
        exp: 'UCLN(5x², 15x) = 5x và phần chung (x - 2y).',
        simQ: 'Nhân tử chung của 6a(b - 1) + 2(b - 1) là:',
        simOpts: ['2(b - 1)', 'b - 1', '6(b - 1)', '2a(b - 1)'],
        simAns: 0,
        simExp: '2(b - 1).'
      },
      {
        q: 'Biết x + y = 5 và xy = 6. Giá trị của x³ + y³ là:',
        opts: ['35', '125', '95', '65'],
        ans: 0,
        exp: 'x³ + y³ = (x + y)³ - 3xy(x + y) = 5³ - 3 · 6 · 5 = 125 - 90 = 35.',
        simQ: 'Biết x + y = 4 và xy = 3. Tính x² + y²:',
        simOpts: ['10', '16', '13', '7'],
        simAns: 0,
        simExp: '(x + y)² - 2xy = 16 - 6 = 10.'
      }
    ]
  }
];

// ==========================================
// CHƯƠNG III: TỨ GIÁC
// ==========================================
const chapter3Lessons: LessonRaw[] = [
  // Bài 10
  {
    id: 'k1-b10',
    grade: '8',
    semester: 1,
    chapterNumber: 3,
    chapterTitle: 'Chương III: Tứ giác',
    lessonNumber: 10,
    title: 'Bài 10. Tứ giác',
    textbookRef: 'Toán 8 KNTT - Bài 10',
    summary: '• Tứ giác ABCD là hình gồm bốn đoạn thẳng AB, BC, CD, DA trong đó không có hai đoạn thẳng nào cùng nằm trên một đường thẳng.\\n• Tứ giác lồi là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào của tứ giác.\\n• Định lí: Tổng các góc của một tứ giác bằng 360°: ∠A + ∠B + ∠C + ∠D = 360°.',
    keyFormulas: ['∠A + ∠B + ∠C + ∠D = 360°'],
    questions: [
      {
        q: 'Tổng các góc trong một tứ giác bằng:',
        opts: ['360°', '180°', '270°', '540°'],
        ans: 0,
        exp: 'Theo định lí, tổng bốn góc của một tứ giác lồi luôn bằng 360°.',
        diag: 'quadrilateral',
        diagData: { a: 110, b: 70, c: 120, d: 60 },
        simQ: 'Tổng các góc trong một tam giác bằng bao nhiêu?',
        simOpts: ['180°', '360°', '90°', '270°'],
        simAns: 0,
        simExp: 'Tổng 3 góc tam giác là 180°.'
      },
      {
        q: 'Tứ giác ABCD có ∠A = 60°, ∠B = 80°, ∠C = 100°. Số đo góc D là:',
        opts: ['120°', '110°', '130°', '100°'],
        ans: 0,
        exp: '∠D = 360° - (60° + 80° + 100°) = 360° - 240° = 120°.',
        simQ: 'Tứ giác có 3 góc bằng 70°, 90°, 110°. Góc thứ tư bằng:',
        simOpts: ['90°', '80°', '100°', '120°'],
        simAns: 0,
        simExp: '360° - 270° = 90°.'
      },
      {
        q: 'Tứ giác có 4 góc bằng nhau thì mỗi góc có số đo là:',
        opts: ['90°', '60°', '120°', '45°'],
        ans: 0,
        exp: '360° : 4 = 90°.',
        simQ: 'Tam giác đều có 3 góc bằng nhau, mỗi góc bằng:',
        simOpts: ['60°', '90°', '45°', '120°'],
        simAns: 0,
        simExp: '180° : 3 = 60°.'
      },
      {
        q: 'Một tứ giác có thể có nhiều nhất bao nhiêu góc tù (> 90°)?',
        opts: ['3 góc', '4 góc', '2 góc', '1 góc'],
        ans: 0,
        exp: 'Nếu có 4 góc tù thì tổng > 4 × 90° = 360° (vô lí), nên chỉ có tối đa 3 góc tù.',
        simQ: 'Một tứ giác có thể có nhiều nhất bao nhiêu góc nhọn (< 90°)?',
        simOpts: ['3 góc', '4 góc', '2 góc', '1 góc'],
        simAns: 0,
        simExp: 'Tối đa 3 góc nhọn (nếu 4 góc nhọn thì tổng < 360°).'
      },
      {
        q: 'Một tứ giác có nhiều nhất bao nhiêu góc vuông?',
        opts: ['4 góc', '3 góc', '2 góc', '1 góc'],
        ans: 0,
        exp: 'Hình chữ nhật hoặc hình vuông có đúng 4 góc vuông (4 × 90° = 360°).',
        simQ: 'Nếu tứ giác có 3 góc vuông thì góc còn lại bằng:',
        simOpts: ['90°', '180°', '60°', '45°'],
        simAns: 0,
        simExp: '360° - 3×90° = 90°.'
      },
      {
        q: 'Tứ giác ABCD có ∠A = 100°, ∠B = 120°, góc C ngoài tại đỉnh C là 110°. Số đo góc D là:',
        opts: ['70°', '80°', '60°', '90°'],
        ans: 0,
        exp: 'Góc trong C = 180° - 110° = 70°. Vậy ∠D = 360° - (100° + 120° + 70°) = 70°.',
        simQ: 'Góc kề bù với góc trong 80° có số đo là:',
        simOpts: ['100°', '80°', '90°', '280°'],
        simAns: 0,
        simExp: '180° - 80° = 100°.'
      },
      {
        q: 'Cho tứ giác ABCD có các góc tỉ lệ: A : B : C : D = 1 : 2 : 3 : 4. Góc A bằng:',
        opts: ['36°', '72°', '108°', '144°'],
        ans: 0,
        exp: 'Tổng số phần: 1 + 2 + 3 + 4 = 10. Giá trị một phần = 360° : 10 = 36°. Vậy ∠A = 36°.',
        simQ: 'Nếu A : B : C : D = 1 : 1 : 1 : 1 thì mỗi góc bằng:',
        simOpts: ['90°', '60°', '120°', '45°'],
        simAns: 0,
        simExp: '360° : 4 = 90°.'
      },
      {
        q: 'Góc kề bù với một góc của tứ giác được gọi là:',
        opts: ['Góc ngoài của tứ giác', 'Góc trong của tứ giác', 'Góc đối của tứ giác', 'Góc so le'],
        ans: 0,
        exp: 'Định nghĩa: góc kề bù với góc trong là góc ngoài của tứ giác.',
        simQ: 'Tổng góc trong và góc ngoài tại cùng 1 đỉnh bằng:',
        simOpts: ['180°', '360°', '90°', '270°'],
        simAns: 0,
        simExp: 'Hai góc kề bù có tổng là 180°.'
      },
      {
        q: 'Tổng các góc ngoài (mỗi đỉnh chọn 1 góc ngoài) của một tứ giác lồi bằng:',
        opts: ['360°', '180°', '720°', '540°'],
        ans: 0,
        exp: '4 × 180° - 360° = 360°.',
        simQ: 'Tổng các góc ngoài của một tam giác bằng:',
        simOpts: ['360°', '180°', '720°', '90°'],
        simAns: 0,
        simExp: 'Tổng góc ngoài của đa giác lồi luôn là 360°.'
      },
      {
        q: 'Đặc điểm nào sau đây KHÔNG PHẢI của tứ giác lồi?',
        opts: ['Có một đỉnh nằm thụt vào trong', 'Nằm trọn vẹn trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào', 'Các đường chéo cắt nhau tại 1 điểm', 'Tổng 4 góc luôn bằng 360°'],
        ans: 0,
        exp: 'Tứ giác lồi không bị lõm/thụt vào trong.',
        simQ: 'Hai đường chéo của tứ giác lồi luôn:',
        simOpts: ['Cắt nhau', 'Song song', 'Vuông góc', 'Bằng nhau'],
        simAns: 0,
        simExp: 'Luôn cắt nhau tại một điểm nằm bên trong tứ giác.'
      }
    ]
  },

  // Bài 11
  {
    id: 'k1-b11',
    grade: '8',
    semester: 1,
    chapterNumber: 3,
    chapterTitle: 'Chương III: Tứ giác',
    lessonNumber: 11,
    title: 'Bài 11. Hình thang cân',
    textbookRef: 'Toán 8 KNTT - Bài 11',
    summary: '• Hình thang là tứ giác có hai cạnh đối song song.\\n• Hình thang cân là hình thang có hai góc kề một đáy bằng nhau.\\n• Tính chất hình thang cân: hai cạnh bên bằng nhau; hai đường chéo bằng nhau.\\n• Dấu hiệu nhận biết: Hình thang có 2 góc kề một đáy bằng nhau hoặc có 2 đường chéo bằng nhau là hình thang cân.',
    keyFormulas: [
      'AB // CD (Hình thang)',
      '∠C = ∠D hoặc ∠A = ∠B (Hình thang cân)',
      'AD = BC, AC = BD'
    ],
    questions: [
      {
        q: 'Hình thang cân là hình thang có:',
        opts: ['Hai góc kề một đáy bằng nhau', 'Hai cạnh đối bằng nhau', 'Hai đường chéo vuông góc', 'Bốn góc bằng nhau'],
        ans: 0,
        exp: 'Định nghĩa: Hình thang có hai góc kề một đáy bằng nhau là hình thang cân.',
        diag: 'trapezoid',
        diagData: { base1: 6, base2: 12, height: 5 },
        simQ: 'Trong hình thang cân, hai đường chéo:',
        simOpts: ['Bằng nhau', 'Vuông góc với nhau', 'Cắt nhau tại trung điểm mỗi đường', 'Song song'],
        simAns: 0,
        simExp: 'Hai đường chéo của hình thang cân bằng nhau.'
      },
      {
        q: 'Cho hình thang cân ABCD (AB // CD) có ∠C = 70°. Số đo góc D là:',
        opts: ['70°', '110°', '80°', '100°'],
        ans: 0,
        exp: 'Hai góc kề đáy CD bằng nhau nên ∠D = ∠C = 70°.',
        simQ: 'Hình thang cân ABCD (AB // CD) có ∠A = 105°. Góc B bằng:',
        simOpts: ['105°', '75°', '85°', '95°'],
        simAns: 0,
        simExp: 'Hai góc kề đáy AB bằng nhau: ∠B = ∠A = 105°.'
      },
      {
        q: 'Cho hình thang cân ABCD (AB // CD) có ∠D = 60°. Số đo góc A là:',
        opts: ['120°', '60°', '90°', '150°'],
        ans: 0,
        exp: 'Vì AB // CD nên ∠A và ∠D bù nhau: ∠A = 180° - 60° = 120°.',
        simQ: 'Góc trong cùng phía với góc 80° có số đo là:',
        simOpts: ['100°', '80°', '90°', '110°'],
        simAns: 0,
        simExp: '180° - 80° = 100°.'
      },
      {
        q: 'Khẳng định nào sau đây là SAI về hình thang cân?',
        opts: ['Hai cạnh bên luôn song song', 'Hai cạnh bên bằng nhau', 'Hai đường chéo bằng nhau', 'Hai góc kề một đáy bằng nhau'],
        ans: 0,
        exp: 'Hai cạnh bên của hình thang cân cắt nhau (chỉ song song khi nó trở thành hình chữ nhật/hình bình hành).',
        simQ: 'Trong hình thang cân, hai cạnh bên:',
        simOpts: ['Bằng nhau', 'Song song', 'Vuông góc', 'Lớn hơn hai đáy'],
        simAns: 0,
        simExp: 'Hai cạnh bên bằng nhau.'
      },
      {
        q: 'Dấu hiệu nào sau đây chứng minh một hình thang là hình thang cân?',
        opts: ['Hình thang có hai đường chéo bằng nhau', 'Hình thang có hai cạnh bên bằng nhau', 'Hình thang có hai góc đối bằng nhau', 'Hình thang có một góc vuông'],
        ans: 0,
        exp: 'Hình thang có 2 đường chéo bằng nhau là hình thang cân. (Chú ý: hình thang có 2 cạnh bên bằng nhau chưa chắc là hình thang cân vì có thể là hình bình hành).',
        simQ: 'Hình thang có 2 góc kề một đáy bằng nhau là:',
        simOpts: ['Hình thang cân', 'Hình chữ nhật', 'Hình bình hành', 'Hình thoi'],
        simAns: 0,
        simExp: 'Hình thang cân.'
      },
      {
        q: 'Hình thang cân ABCD có đáy AB = 4 cm, CD = 10 cm, đường cao kẻ từ A hạ xuống CD chia CD thành 2 đoạn có độ dài là:',
        opts: ['3 cm và 7 cm', '4 cm và 6 cm', '2 cm và 8 cm', '5 cm và 5 cm'],
        ans: 0,
        exp: 'Đoạn ngoài = (CD - AB)/2 = (10 - 4)/2 = 3 cm. Đoạn còn lại = 10 - 3 = 7 cm.',
        simQ: 'Cho hình thang cân có đáy 6 cm và 14 cm. Đoạn ngoài do 2 đường cao tạo ra là:',
        simOpts: ['4 cm', '8 cm', '2 cm', '6 cm'],
        simAns: 0,
        simExp: '(14 - 6)/2 = 4 cm.'
      },
      {
        q: 'Hình thang có một góc vuông được gọi là:',
        opts: ['Hình thang vuông', 'Hình chữ nhật', 'Hình thang cân', 'Hình bình hành'],
        ans: 0,
        exp: 'Định nghĩa: Hình thang có một góc vuông là hình thang vuông.',
        simQ: 'Hình thang vuông có mấy góc vuông?',
        simOpts: ['Ít nhất 2 góc vuông', 'Chỉ 1 góc vuông', '3 góc vuông', '4 góc vuông'],
        simAns: 0,
        simExp: 'Vì 2 đáy song song nên nếu có 1 góc vuông thì góc trong cùng phía cũng vuông => có 2 góc vuông.'
      },
      {
        q: 'Cho hình thang cân ABCD (AB // CD) có AC = 8 cm. Độ dài đoạn BD là:',
        opts: ['8 cm', '4 cm', '16 cm', 'Chưa đủ dữ kiện'],
        ans: 0,
        exp: 'Hai đường chéo hình thang cân bằng nhau: BD = AC = 8 cm.',
        simQ: 'Nếu BD = 10 cm thì AC bằng:',
        simOpts: ['10 cm', '5 cm', '20 cm', '15 cm'],
        simAns: 0,
        simExp: '10 cm.'
      },
      {
        q: 'Chu vi hình thang cân ABCD có đáy lớn 12 cm, đáy nhỏ 6 cm, cạnh bên 5 cm là:',
        opts: ['28 cm', '23 cm', '24 cm', '30 cm'],
        ans: 0,
        exp: '12 + 6 + 5 + 5 = 28 cm.',
        simQ: 'Tính chu vi hình thang cân có 2 đáy là 4 cm, 8 cm và cạnh bên 3 cm:',
        simOpts: ['18 cm', '15 cm', '20 cm', '16 cm'],
        simAns: 0,
        simExp: '4 + 8 + 3 + 3 = 18 cm.'
      },
      {
        q: 'Hình thang cân có hai góc đối bù nhau (tổng 180°) đúng hay sai?',
        opts: ['Đúng', 'Sai', 'Chỉ đúng với góc vuông', 'Không xác định'],
        ans: 0,
        exp: 'Vì ∠A + ∠D = 180° và ∠C = ∠D nên ∠A + ∠C = 180° (hai góc đối bù nhau).',
        simQ: 'Góc kề đáy và góc đối diện trong hình thang cân có tổng bằng:',
        simOpts: ['180°', '360°', '90°', '120°'],
        simAns: 0,
        simExp: '180°.'
      }
    ]
  },

  // Bài 12
  {
    id: 'k1-b12',
    grade: '8',
    semester: 1,
    chapterNumber: 3,
    chapterTitle: 'Chương III: Tứ giác',
    lessonNumber: 12,
    title: 'Bài 12. Hình bình hành',
    textbookRef: 'Toán 8 KNTT - Bài 12',
    summary: '• Hình bình hành là tứ giác có các cạnh đối song song.\\n• Tính chất: Các cạnh đối bằng nhau; các góc đối bằng nhau; hai đường chéo cắt nhau tại trung điểm của mỗi đường.\\n• Dấu hiệu nhận biết: Tứ giác có các cạnh đối song song (hoặc bằng nhau); có 1 cặp cạnh đối song song và bằng nhau; có các góc đối bằng nhau; có 2 đường chéo cắt nhau tại trung điểm mỗi đường.',
    keyFormulas: [
      'AB // CD & AD // BC',
      'AB = CD & AD = BC',
      'OA = OC & OB = OD'
    ],
    questions: [
      {
        q: 'Hình bình hành là tứ giác có:',
        opts: ['Các cạnh đối song song', 'Bốn cạnh bằng nhau', 'Bốn góc vuông', 'Hai đường chéo vuông góc'],
        ans: 0,
        exp: 'Định nghĩa: Hình bình hành là tứ giác có các cạnh đối song song.',
        diag: 'parallelogram',
        diagData: { width: 10, height: 6, angle: 60 },
        simQ: 'Trong hình bình hành, các cạnh đối:',
        simOpts: ['Song song và bằng nhau', 'Bằng nhau nhưng không song song', 'Vuông góc', 'Trùng nhau'],
        simAns: 0,
        simExp: 'Các cạnh đối vừa song song vừa bằng nhau.'
      },
      {
        q: 'Cho hình bình hành ABCD có ∠A = 110°. Số đo góc C là:',
        opts: ['110°', '70°', '90°', '80°'],
        ans: 0,
        exp: 'Hai góc đối của hình bình hành bằng nhau: ∠C = ∠A = 110°.',
        simQ: 'Cho hình bình hành ABCD có ∠B = 65°. Góc D bằng:',
        simOpts: ['65°', '115°', '120°', '75°'],
        simAns: 0,
        simExp: '∠D = ∠B = 65°.'
      },
      {
        q: 'Cho hình bình hành ABCD có ∠A = 110°. Số đo góc B là:',
        opts: ['70°', '110°', '80°', '90°'],
        ans: 0,
        exp: 'Hai góc kề một cạnh bù nhau: ∠B = 180° - 110° = 70°.',
        simQ: 'Hai góc kề một cạnh của hình bình hành có tổng số đo bằng:',
        simOpts: ['180°', '360°', '90°', '120°'],
        simAns: 0,
        simExp: '180°.'
      },
      {
        q: 'Hai đường chéo của hình bình hành có tính chất nào?',
        opts: ['Cắt nhau tại trung điểm của mỗi đường', 'Bằng nhau', 'Vuông góc với nhau', 'Là đường phân giác'],
        ans: 0,
        exp: 'Hai đường chéo cắt nhau tại trung điểm mỗi đường.',
        simQ: 'Nếu O là giao điểm hai đường chéo hình bình hành ABCD thì:',
        simOpts: ['OA = OC và OB = OD', 'OA = OB = OC = OD', 'AC vuông góc BD', 'AC = BD'],
        simAns: 0,
        simExp: 'OA = OC và OB = OD.'
      },
      {
        q: 'Dấu hiệu nào sau đây KHÔNG PHẢI là dấu hiệu nhận biết hình bình hành?',
        opts: ['Tứ giác có hai đường chéo bằng nhau', 'Tứ giác có các cạnh đối bằng nhau', 'Tứ giác có hai cạnh đối song song và bằng nhau', 'Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường'],
        ans: 0,
        exp: 'Tứ giác có 2 đường chéo bằng nhau chưa chắc là hình bình hành (ví dụ hình thang cân).',
        simQ: 'Tứ giác có 2 cặp cạnh đối song song là:',
        simOpts: ['Hình bình hành', 'Hình thang cân', 'Hình vuông', 'Hình thoi'],
        simAns: 0,
        simExp: 'Hình bình hành.'
      },
      {
        q: 'Cho hình bình hành ABCD có chu vi 24 cm, cạnh AB = 7 cm. Độ dài cạnh BC là:',
        opts: ['5 cm', '7 cm', '10 cm', '12 cm'],
        ans: 0,
        exp: 'Nửa chu vi = 24 : 2 = 12 cm. BC = 12 - 7 = 5 cm.',
        simQ: 'Hình bình hành có 2 cạnh kề là 4 cm và 6 cm thì chu vi là:',
        simOpts: ['20 cm', '10 cm', '24 cm', '16 cm'],
        simAns: 0,
        simExp: '2 × (4 + 6) = 20 cm.'
      },
      {
        q: 'Giao điểm O của hai đường chéo hình bình hành là:',
        opts: ['Tâm đối xứng của hình bình hành', 'Trọng tâm', 'Trực tâm', 'Điểm cách đều 4 đỉnh'],
        ans: 0,
        exp: 'Giao điểm O của 2 đường chéo là tâm đối xứng của hình bình hành.',
        simQ: 'Hình bình hành có trục đối xứng không?',
        simOpts: ['Không có (trừ trường hợp đặc biệt)', 'Luôn có 2 trục', 'Luôn có 4 trục', 'Luôn có 1 trục'],
        simAns: 0,
        simExp: 'Hình bình hành nói chung không có trục đối xứng, chỉ có tâm đối xứng.'
      },
      {
        q: 'Cho hình bình hành ABCD. Lấy M trên AB, N trên CD sao cho AM = CN. Tứ giác AMCN là hình gì?',
        opts: ['Hình bình hành', 'Hình thang cân', 'Hình chữ nhật', 'Hình thoi'],
        ans: 0,
        exp: 'AM // CN và AM = CN nên AMCN là hình bình hành.',
        simQ: 'Tứ giác có 1 cặp cạnh đối song song và bằng nhau là:',
        simOpts: ['Hình bình hành', 'Hình thang vuông', 'Hình thang cân', 'Tứ giác thường'],
        simAns: 0,
        simExp: 'Hình bình hành.'
      },
      {
        q: 'Nếu hình bình hành ABCD có ∠A = 90° thì nó trở thành hình gì?',
        opts: ['Hình chữ nhật', 'Hình thoi', 'Hình vuông', 'Hình thang cân'],
        ans: 0,
        exp: 'Hình bình hành có 1 góc vuông là hình chữ nhật.',
        simQ: 'Hình bình hành có 2 cạnh kề bằng nhau là hình gì?',
        simOpts: ['Hình thoi', 'Hình chữ nhật', 'Hình vuông', 'Hình thang'],
        simAns: 0,
        simExp: 'Hình thoi.'
      },
      {
        q: 'Cho hình bình hành ABCD. Khẳng định nào sau đây đúng?',
        opts: ['ΔABC = ΔCDA', 'ΔABC vuông tại B', 'AC vuông góc BD', 'AC = BD'],
        ans: 0,
        exp: 'Đường chéo AC chia hình bình hành thành 2 tam giác bằng nhau: ΔABC = ΔCDA (c-c-c).',
        simQ: 'Đường chéo của hình bình hành chia nó thành:',
        simOpts: ['Hai tam giác bằng nhau', 'Hai tam giác vuông', 'Hai tam giác đều', 'Hai tam giác cân'],
        simAns: 0,
        simExp: 'Hai tam giác bằng nhau.'
      }
    ]
  },

  // Bài 13
  {
    id: 'k1-b13',
    grade: '8',
    semester: 1,
    chapterNumber: 3,
    chapterTitle: 'Chương III: Tứ giác',
    lessonNumber: 13,
    title: 'Bài 13. Hình chữ nhật',
    textbookRef: 'Toán 8 KNTT - Bài 13',
    summary: '• Hình chữ nhật là tứ giác có bốn góc vuông.\\n• Hình chữ nhật có đầy đủ tính chất của hình bình hành và hình thang cân.\\n• Hai đường chéo của hình chữ nhật bằng nhau và cắt nhau tại trung điểm của mỗi đường.\\n• Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.',
    keyFormulas: [
      '∠A = ∠B = ∠C = ∠D = 90°',
      'AC = BD & OA = OB = OC = OD',
      'AM = BC / 2 (trong tam giác vuông ABC)'
    ],
    questions: [
      {
        q: 'Hình chữ nhật là tứ giác có:',
        opts: ['Bốn góc vuông', 'Bốn cạnh bằng nhau', 'Hai đường chéo vuông góc', 'Hai cạnh kề bằng nhau'],
        ans: 0,
        exp: 'Định nghĩa: Hình chữ nhật là tứ giác có bốn góc vuông.',
        simQ: 'Một tứ giác có 3 góc vuông thì nó là hình gì?',
        simOpts: ['Hình chữ nhật', 'Hình thang vuông', 'Hình bình hành', 'Hình vuông'],
        simAns: 0,
        simExp: 'Tổng 4 góc là 360° nên góc thứ 4 cũng vuông => Hình chữ nhật.'
      },
      {
        q: 'Tính chất đặc trưng về đường chéo của hình chữ nhật là:',
        opts: ['Hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường', 'Hai đường chéo vuông góc với nhau', 'Hai đường chéo là phân giác các góc', 'Hai đường chéo song song'],
        ans: 0,
        exp: 'Hai đường chéo hình chữ nhật bằng nhau và cắt nhau tại trung điểm mỗi đường.',
        simQ: 'Giao điểm O của hai đường chéo hình chữ nhật ABCD cách đều:',
        simOpts: ['Cả 4 đỉnh A, B, C, D', 'Chỉ 2 đỉnh A và C', 'Chỉ các cạnh', 'Không cách đều'],
        simAns: 0,
        simExp: 'OA = OB = OC = OD.'
      },
      {
        q: 'Trong tam giác ABC vuông tại A, đường trung tuyến AM ứng với cạnh huyền BC có độ dài bằng:',
        opts: ['1/2 BC', 'BC', '2 BC', '1/3 BC'],
        ans: 0,
        exp: 'Định lí: Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.',
        simQ: 'Nếu tam giác vuông có cạnh huyền dài 10 cm thì trung tuyến ứng với cạnh huyền dài:',
        simOpts: ['5 cm', '10 cm', '20 cm', '2.5 cm'],
        simAns: 0,
        simExp: '10 : 2 = 5 cm.'
      },
      {
        q: 'Nếu một tam giác có đường trung tuyến ứng với một cạnh bằng nửa cạnh đó thì tam giác đó là:',
        opts: ['Tam giác vuông', 'Tam giác đều', 'Tam giác cân', 'Tam giác tù'],
        ans: 0,
        exp: 'Định lí đảo: Tam giác có trung tuyến bằng nửa cạnh tương ứng là tam giác vuông.',
        simQ: 'Tam giác ABC có AM = 4 cm, BC = 8 cm (M là trung điểm BC). Tam giác ABC vuông tại:',
        simOpts: ['A', 'B', 'C', 'Không vuông'],
        simAns: 0,
        simExp: 'AM = BC/2 nên vuông tại A.'
      },
      {
        q: 'Dấu hiệu nào sau đây nhận biết hình chữ nhật?',
        opts: ['Hình bình hành có hai đường chéo bằng nhau', 'Hình thang có hai đường chéo bằng nhau', 'Hình bình hành có hai đường chéo vuông góc', 'Tứ giác có hai đường chéo bằng nhau'],
        ans: 0,
        exp: 'Hình bình hành có 2 đường chéo bằng nhau là hình chữ nhật.',
        simQ: 'Hình bình hành có 1 góc vuông là:',
        simOpts: ['Hình chữ nhật', 'Hình thoi', 'Hình vuông', 'Hình thang'],
        simAns: 0,
        simExp: 'Hình chữ nhật.'
      },
      {
        q: 'Cho hình chữ nhật ABCD có AB = 6 cm, BC = 8 cm. Độ dài đường chéo AC là:',
        opts: ['10 cm', '14 cm', '48 cm', '7 cm'],
        ans: 0,
        exp: 'Áp dụng định lí Pythagore: AC = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.',
        simQ: 'Cho hình chữ nhật có kích thước 3 cm và 4 cm. Độ dài đường chéo là:',
        simOpts: ['5 cm', '7 cm', '12 cm', '6 cm'],
        simAns: 0,
        simExp: '√(3² + 4²) = 5 cm.'
      },
      {
        q: 'Hình chữ nhật có mấy trục đối xứng?',
        opts: ['2 trục', '4 trục', '1 trục', '0 trục'],
        ans: 0,
        exp: 'Hai trục đối xứng là hai đường trung trực của hai cặp cạnh đối.',
        simQ: 'Hai trục đối xứng của hình chữ nhật là:',
        simOpts: ['Đường trung trực của các cạnh đối', 'Hai đường chéo', 'Đường phân giác', 'Hai cạnh bên'],
        simAns: 0,
        simExp: 'Đường trung trực của các cạnh đối.'
      },
      {
        q: 'Hình thang cân có một góc vuông là hình gì?',
        opts: ['Hình chữ nhật', 'Hình vuông', 'Hình thoi', 'Hình bình hành'],
        ans: 0,
        exp: 'Hình thang cân có 1 góc vuông thì các góc còn lại cũng vuông => Hình chữ nhật.',
        simQ: 'Tứ giác có 3 góc vuông là hình gì?',
        simOpts: ['Hình chữ nhật', 'Hình thoi', 'Hình bình hành', 'Hình thang cân'],
        simAns: 0,
        simExp: 'Hình chữ nhật.'
      },
      {
        q: 'Chu vi hình chữ nhật có chiều dài 12 cm, diện tích 96 cm² là:',
        opts: ['40 cm', '20 cm', '44 cm', '32 cm'],
        ans: 0,
        exp: 'Chiều rộng = 96 : 12 = 8 cm. Chu vi = 2 × (12 + 8) = 40 cm.',
        simQ: 'Hình chữ nhật có chiều rộng 5 cm, chu vi 30 cm thì chiều dài là:',
        simOpts: ['10 cm', '15 cm', '20 cm', '25 cm'],
        simAns: 0,
        simExp: '30/2 - 5 = 10 cm.'
      },
      {
        q: 'Khẳng định nào sau đây là SAI?',
        opts: ['Hình chữ nhật có hai đường chéo vuông góc với nhau', 'Hình chữ nhật có hai đường chéo bằng nhau', 'Hình chữ nhật là hình bình hành', 'Hình chữ nhật là hình thang cân'],
        ans: 0,
        exp: 'Hai đường chéo hình chữ nhật chỉ vuông góc khi nó là hình vuông.',
        simQ: 'Hai đường chéo hình chữ nhật cắt nhau tạo thành:',
        simOpts: ['Các tam giác cân', 'Các tam giác đều', 'Các tam giác vuông', 'Các hình vuông'],
        simAns: 0,
        simExp: 'Vì OA = OB = OC = OD nên tạo thành các tam giác cân tại O.'
      }
    ]
  },

  // Bài 14
  {
    id: 'k1-b14',
    grade: '8',
    semester: 1,
    chapterNumber: 3,
    chapterTitle: 'Chương III: Tứ giác',
    lessonNumber: 14,
    title: 'Bài 14. Hình thoi và hình vuông',
    textbookRef: 'Toán 8 KNTT - Bài 14',
    summary: '• Hình thoi là tứ giác có bốn cạnh bằng nhau.\\n• Tính chất hình thoi: hai đường chéo vuông góc với nhau và là đường phân giác của các góc.\\n• Hình vuông là tứ giác có bốn góc vuông và bốn cạnh bằng nhau.\\n• Hình vuông vừa là hình chữ nhật, vừa là hình thoi.',
    keyFormulas: [
      'Hình thoi: AB = BC = CD = DA, AC ⊥ BD',
      'Hình vuông: 4 góc vuông + 4 cạnh bằng nhau',
      'Đường chéo hình vuông cạnh a: d = a√2'
    ],
    questions: [
      {
        q: 'Hình thoi là tứ giác có:',
        opts: ['Bốn cạnh bằng nhau', 'Bốn góc vuông', 'Hai đường chéo bằng nhau', 'Hai góc đối bù nhau'],
        ans: 0,
        exp: 'Định nghĩa: Hình thoi là tứ giác có bốn cạnh bằng nhau.',
        simQ: 'Tứ giác có 4 cạnh bằng nhau là:',
        simOpts: ['Hình thoi', 'Hình chữ nhật', 'Hình bình hành', 'Hình thang cân'],
        simAns: 0,
        simExp: 'Hình thoi.'
      },
      {
        q: 'Hai đường chéo của hình thoi có tính chất đặc trưng nào?',
        opts: ['Vuông góc với nhau và là tia phân giác các góc', 'Bằng nhau', 'Song song với nhau', 'Không cắt nhau'],
        ans: 0,
        exp: 'Hai đường chéo của hình thoi vuông góc với nhau và là các đường phân giác.',
        simQ: 'Hình bình hành có hai đường chéo vuông góc là hình gì?',
        simOpts: ['Hình thoi', 'Hình chữ nhật', 'Hình thang cân', 'Hình tròn'],
        simAns: 0,
        simExp: 'Hình thoi.'
      },
      {
        q: 'Hình vuông là tứ giác có:',
        opts: ['Bốn góc vuông và bốn cạnh bằng nhau', 'Bốn cạnh bằng nhau', 'Bốn góc vuông', 'Hai đường chéo bằng nhau'],
        ans: 0,
        exp: 'Hình vuông vừa là hình chữ nhật vừa là hình thoi.',
        simQ: 'Hình chữ nhật có hai cạnh kề bằng nhau là hình gì?',
        simOpts: ['Hình vuông', 'Hình thoi', 'Hình thang', 'Hình bình hành'],
        simAns: 0,
        simExp: 'Hình vuông.'
      },
      {
        q: 'Hình thoi có một góc vuông thì trở thành hình gì?',
        opts: ['Hình vuông', 'Hình chữ nhật', 'Hình bình hành', 'Hình thang cân'],
        ans: 0,
        exp: 'Hình thoi có 1 góc vuông là hình vuông.',
        simQ: 'Hình chữ nhật có hai đường chéo vuông góc là hình gì?',
        simOpts: ['Hình vuông', 'Hình thoi', 'Hình bình hành', 'Tam giác'],
        simAns: 0,
        simExp: 'Hình vuông.'
      },
      {
        q: 'Độ dài đường chéo của hình vuông có cạnh bằng 4 cm là:',
        opts: ['4√2 cm', '8 cm', '4 cm', '16 cm'],
        ans: 0,
        exp: 'd = √(4² + 4²) = √32 = 4√2 cm.',
        simQ: 'Đường chéo của hình vuông cạnh 5 cm là:',
        simOpts: ['5√2 cm', '10 cm', '25 cm', '5 cm'],
        simAns: 0,
        simExp: '5√2 cm.'
      },
      {
        q: 'Hình vuông có mấy trục đối xứng?',
        opts: ['4 trục', '2 trục', '1 trục', 'Vô số'],
        ans: 0,
        exp: 'Hình vuông có 4 trục đối xứng (2 đường trung trực của cạnh và 2 đường chéo).',
        simQ: 'Hình thoi có mấy trục đối xứng?',
        simOpts: ['2 trục (hai đường chéo)', '4 trục', '1 trục', '0 trục'],
        simAns: 0,
        simExp: '2 trục đối xứng chính là 2 đường chéo.'
      },
      {
        q: 'Diện tích hình thoi có hai đường chéo d₁ = 6 cm và d₂ = 8 cm là:',
        opts: ['24 cm²', '48 cm²', '14 cm²', '28 cm²'],
        ans: 0,
        exp: 'S = (1/2) · d₁ · d₂ = (1/2) · 6 · 8 = 24 cm².',
        simQ: 'Tính diện tích hình thoi có 2 đường chéo là 4 cm và 10 cm:',
        simOpts: ['20 cm²', '40 cm²', '14 cm²', '28 cm²'],
        simAns: 0,
        simExp: '(1/2) · 4 · 10 = 20 cm².'
      },
      {
        q: 'Cạnh của hình thoi có hai đường chéo dài 6 cm và 8 cm là:',
        opts: ['5 cm', '7 cm', '10 cm', '4 cm'],
        ans: 0,
        exp: 'Nửa các đường chéo là 3 cm và 4 cm. Cạnh hình thoi = √(3² + 4²) = 5 cm.',
        simQ: 'Chu vi hình thoi có cạnh 5 cm là:',
        simOpts: ['20 cm', '25 cm', '15 cm', '10 cm'],
        simAns: 0,
        simExp: '4 × 5 = 20 cm.'
      },
      {
        q: 'Hình thoi có hai đường chéo bằng nhau là hình gì?',
        opts: ['Hình vuông', 'Hình chữ nhật', 'Hình bình hành', 'Hình thang cân'],
        ans: 0,
        exp: 'Hình thoi có 2 đường chéo bằng nhau là hình vuông.',
        simQ: 'Hình chữ nhật có 1 đường chéo là phân giác của 1 góc là hình gì?',
        simOpts: ['Hình vuông', 'Hình thoi', 'Hình thang', 'Hình bình hành'],
        simAns: 0,
        simExp: 'Hình vuông.'
      },
      {
        q: 'Khẳng định nào sau đây là ĐÚNG?',
        opts: ['Mọi hình vuông đều là hình chữ nhật', 'Mọi hình thoi đều là hình vuông', 'Mọi hình chữ nhật đều là hình vuông', 'Mọi hình thang đều là hình bình hành'],
        ans: 0,
        exp: 'Hình vuông có 4 góc vuông nên là một hình chữ nhật đặc biệt.',
        simQ: 'Khẳng định nào sau đây đúng?',
        simOpts: ['Mọi hình vuông đều là hình thoi', 'Mọi hình bình hành đều là hình chữ nhật', 'Mọi tứ giác đều có 4 góc vuông', 'Hình thoi không phải là hình bình hành'],
        simAns: 0,
        simExp: 'Mọi hình vuông đều là hình thoi có 1 góc vuông.'
      }
    ]
  }
];

// ==========================================
// CHƯƠNG IV: ĐỊNH LÍ THALÈS
// ==========================================
const chapter4Lessons: LessonRaw[] = [
  // Bài 15
  {
    id: 'k1-b15',
    grade: '8',
    semester: 1,
    chapterNumber: 4,
    chapterTitle: 'Chương IV: Định lí Thalès',
    lessonNumber: 15,
    title: 'Bài 15. Định lí Thalès trong tam giác',
    textbookRef: 'Toán 8 KNTT - Bài 15',
    summary: '• Đoạn thẳng tỉ lệ: Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng theo cùng một đơn vị đo.\\n• Định lí Thalès: Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.\\n• Định lí Thalès đảo: Nếu một đường thẳng cắt hai cạnh và định ra trên hai cạnh đó những đoạn tương ứng tỉ lệ thì nó song song với cạnh thứ ba.\\n• Hệ quả: Một đường thẳng song song với một cạnh tam giác và cắt hai cạnh còn lại tạo thành một tam giác mới có ba cạnh tương ứng tỉ lệ với ba cạnh của tam giác đã cho.',
    keyFormulas: [
      'MN // BC => AM/AB = AN/AC = MN/BC',
      'AM/MB = AN/NC'
    ],
    questions: [
      {
        q: 'Tỉ số của hai đoạn thẳng AB = 3 cm và CD = 6 cm là:',
        opts: ['1/2', '2', '1/3', '3'],
        ans: 0,
        exp: 'AB / CD = 3 / 6 = 1/2.',
        diag: 'thales',
        diagData: { ab: 6, ac: 9, mn: 4, bc: 6 },
        simQ: 'Tỉ số của đoạn MN = 4 cm và PQ = 12 cm là:',
        simOpts: ['1/3', '3', '1/4', '4'],
        simAns: 0,
        simExp: '4 / 12 = 1/3.'
      },
      {
        q: 'Cho ΔABC có MN // BC (M ∈ AB, N ∈ AC). Hệ thức nào sau đây đúng theo định lí Thalès?',
        opts: ['AM / MB = AN / NC', 'AM / AB = NC / AN', 'AM / AN = BC / MN', 'MB / AM = AN / NC'],
        ans: 0,
        exp: 'Theo định lí Thalès: AM/MB = AN/NC.',
        simQ: 'Cho MN // BC (M ∈ AB, N ∈ AC). Hệ thức nào sau đây đúng?',
        simOpts: ['AM / AB = AN / AC', 'AM / MB = AC / AN', 'AB / AM = AN / AC', 'MN = BC'],
        simAns: 0,
        simExp: 'AM / AB = AN / AC.'
      },
      {
        q: 'Cho ΔABC có MN // BC. Biết AM = 2 cm, MB = 4 cm, AN = 3 cm. Độ dài NC là:',
        opts: ['6 cm', '4 cm', '8 cm', '5 cm'],
        ans: 0,
        exp: 'AM/MB = AN/NC => 2/4 = 3/NC => NC = (4 × 3) / 2 = 6 cm.',
        simQ: 'Biết AM = 3 cm, MB = 6 cm, AN = 2 cm. Tính NC:',
        simOpts: ['4 cm', '5 cm', '6 cm', '3 cm'],
        simAns: 0,
        simExp: 'NC = (6 × 2) / 3 = 4 cm.'
      },
      {
        q: 'Cho ΔABC có MN // BC (M ∈ AB, N ∈ AC). Biết AM = 3 cm, AB = 9 cm, BC = 15 cm. Độ dài MN là:',
        opts: ['5 cm', '6 cm', '4 cm', '7.5 cm'],
        ans: 0,
        exp: 'Theo hệ quả Thalès: MN/BC = AM/AB => MN/15 = 3/9 = 1/3 => MN = 5 cm.',
        simQ: 'Biết AM/AB = 1/2 và BC = 10 cm. Tính MN (với MN // BC):',
        simOpts: ['5 cm', '6 cm', '4 cm', '2.5 cm'],
        simAns: 0,
        simExp: '10 × (1/2) = 5 cm.'
      },
      {
        q: 'Định lí Thalès đảo được sử dụng chủ yếu để làm gì?',
        opts: ['Chứng minh hai đường thẳng song song', 'Tính độ dài đoạn thẳng', 'Chứng minh hai góc bằng nhau', 'Chứng minh tam giác đều'],
        ans: 0,
        exp: 'Định lí Thalès đảo dùng để chứng minh hai đường thẳng song song khi biết tỉ lệ các đoạn thẳng.',
        simQ: 'Nếu AM/MB = AN/NC trên hai cạnh AB, AC của ΔABC thì:',
        simOpts: ['MN // BC', 'MN vuông góc BC', 'MN = BC', 'MN cắt BC'],
        simAns: 0,
        simExp: 'MN // BC theo định lí Thalès đảo.'
      },
      {
        q: 'Cho ΔABC có AB = 6 cm, AC = 8 cm. Lấy M trên AB sao cho AM = 3 cm, N trên AC sao cho AN = 4 cm. Kết luận nào đúng?',
        opts: ['MN // BC', 'MN không song song BC', 'MN = 1/2 BC', 'MN vuông góc BC'],
        ans: 0,
        exp: 'AM/AB = 3/6 = 1/2; AN/AC = 4/8 = 1/2 => AM/AB = AN/AC nên MN // BC.',
        simQ: 'Nếu AM/AB = 2/3 và AN/AC = 2/3 thì:',
        simOpts: ['MN // BC', 'MN cắt BC', 'MN vuông góc BC', 'Chưa thể kết luận'],
        simAns: 0,
        simExp: 'MN // BC theo định lí đảo.'
      },
      {
        q: 'Hệ quả định lí Thalès áp dụng cho trường hợp nào?',
        opts: ['Đường thẳng song song cắt hai cạnh hoặc phần kéo dài của hai cạnh', 'Chỉ khi cắt hai cạnh bên trong tam giác', 'Chỉ khi đường thẳng đi qua trung điểm', 'Chỉ tam giác vuông'],
        ans: 0,
        exp: 'Hệ quả vẫn đúng khi đường thẳng song song cắt phần kéo dài của hai cạnh tam giác.',
        simQ: 'Đường thẳng cắt phần kéo dài của AB và AC song song với BC tạo ra:',
        simOpts: ['Tam giác mới có các cạnh tỉ lệ với tam giác cũ', 'Tam giác vuông', 'Hình thang', 'Tam giác đều'],
        simAns: 0,
        simExp: 'Tam giác mới có các cạnh tỉ lệ với tam giác cũ.'
      },
      {
        q: 'Người ta dùng định lí Thalès và bóng của cột cờ để đo chiều cao. Cột cờ có bóng 6 m, cùng lúc một cọc cao 1.5 m có bóng 2 m. Chiều cao cột cờ là:',
        opts: ['4.5 m', '5 m', '4 m', '6 m'],
        ans: 0,
        exp: 'h / 1.5 = 6 / 2 => h = 1.5 × 3 = 4.5 m.',
        simQ: 'Một cây có bóng 8 m, cọc 1 m có bóng 2 m. Cây cao bao nhiêu?',
        simOpts: ['4 m', '6 m', '5 m', '3 m'],
        simAns: 0,
        simExp: 'h / 1 = 8 / 2 => h = 4 m.'
      },
      {
        q: 'Cho hình thang ABCD (AB // CD). Một đường thẳng song song với hai đáy cắt AD tại M, BC tại N. Ta có:',
        opts: ['AM / MD = BN / NC', 'AM / AD = NC / BC', 'AM / MD = NC / BN', 'AM = BN'],
        ans: 0,
        exp: 'Định lí Thalès mở rộng trong hình thang: AM/MD = BN/NC.',
        simQ: 'Trong hình thang ABCD (AB // CD), nếu M là trung điểm AD và MN // AB thì N là:',
        simOpts: ['Trung điểm BC', 'Điểm bất kì trên BC', 'Trực tâm', 'Đỉnh'],
        simAns: 0,
        simExp: 'N là trung điểm của BC.'
      },
      {
        q: 'Cho đoạn thẳng AB = 10 cm. Điểm C thuộc AB sao cho CA / CB = 2/3. Độ dài CA là:',
        opts: ['4 cm', '6 cm', '5 cm', '3 cm'],
        ans: 0,
        exp: 'CA = (2 / (2 + 3)) × 10 = (2/5) × 10 = 4 cm.',
        simQ: 'Đoạn AB = 12 cm. Điểm M trên AB sao cho MA / MB = 1/3. Độ dài MA là:',
        simOpts: ['3 cm', '4 cm', '6 cm', '2 cm'],
        simAns: 0,
        simExp: '12 / (1 + 3) = 3 cm.'
      }
    ]
  },

  // Bài 16
  {
    id: 'k1-b16',
    grade: '8',
    semester: 1,
    chapterNumber: 4,
    chapterTitle: 'Chương IV: Định lí Thalès',
    lessonNumber: 16,
    title: 'Bài 16. Đường trung bình của tam giác',
    textbookRef: 'Toán 8 KNTT - Bài 16',
    summary: '• Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.\\n• Định lí: Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.\\n• Tính chất: Đường trung bình của tam giác thì song song với cạnh thứ ba và bằng nửa cạnh ấy: MN // BC và MN = BC / 2.',
    keyFormulas: [
      'M là trung điểm AB, N là trung điểm AC => MN là ĐTB',
      'MN // BC & MN = BC / 2'
    ],
    questions: [
      {
        q: 'Đường trung bình của tam giác là đoạn thẳng:',
        opts: ['Nối trung điểm hai cạnh của tam giác', 'Nối đỉnh với trung điểm cạnh đối diện', 'Đi qua trọng tâm tam giác', 'Vuông góc với một cạnh'],
        ans: 0,
        exp: 'Định nghĩa: Đường trung bình của tam giác nối trung điểm hai cạnh.',
        simQ: 'Một tam giác có bao nhiêu đường trung bình?',
        simOpts: ['3 đường', '1 đường', '2 đường', '4 đường'],
        simAns: 0,
        simExp: 'Mỗi cặp hai cạnh có 1 đường trung bình => có 3 đường.'
      },
      {
        q: 'Tính chất của đường trung bình của tam giác là:',
        opts: ['Song song với cạnh thứ ba và bằng một nửa cạnh ấy', 'Bằng cạnh thứ ba', 'Vuông góc với cạnh thứ ba', 'Cắt cạnh thứ ba tại trung điểm'],
        ans: 0,
        exp: 'Đường trung bình song song với cạnh thứ ba và bằng nửa cạnh đó.',
        simQ: 'Nếu MN là đường trung bình của ΔABC (MN ứng với cạnh đáy BC) thì:',
        simOpts: ['MN // BC và MN = 1/2 BC', 'MN = BC', 'MN vuông góc BC', 'MN // AB'],
        simAns: 0,
        simExp: 'MN // BC và MN = BC/2.'
      },
      {
        q: 'Cho ΔABC có BC = 12 cm. Gọi M, N lần lượt là trung điểm của AB, AC. Độ dài đoạn MN là:',
        opts: ['6 cm', '24 cm', '4 cm', '8 cm'],
        ans: 0,
        exp: 'MN = BC / 2 = 12 / 2 = 6 cm.',
        simQ: 'Cho MN là đường trung bình ứng với cạnh BC. Biết MN = 5 cm, độ dài BC là:',
        simOpts: ['10 cm', '2.5 cm', '5 cm', '15 cm'],
        simAns: 0,
        simExp: 'BC = 2 × MN = 10 cm.'
      },
      {
        q: 'Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì:',
        opts: ['Đi qua trung điểm của cạnh thứ ba', 'Bằng cạnh thứ hai', 'Vuông góc với cạnh thứ ba', 'Là đường phân giác'],
        ans: 0,
        exp: 'Định lí: Đi qua trung điểm cạnh thứ nhất và song song cạnh thứ 2 thì đi qua trung điểm cạnh thứ 3.',
        simQ: 'Trong ΔABC, M là trung điểm AB, d qua M song song BC cắt AC tại N. N là:',
        simOpts: ['Trung điểm của AC', 'Trực tâm', 'Trọng tâm', 'Điểm tùy ý'],
        simAns: 0,
        simExp: 'N là trung điểm của AC.'
      },
      {
        q: 'Ba đường trung bình của một tam giác chia tam giác đó thành:',
        opts: ['Bốn tam giác bằng nhau', 'Ba tam giác bằng nhau', 'Hai tam giác bằng nhau', 'Bốn tam giác vuông'],
        ans: 0,
        exp: 'Ba đường trung bình chia tam giác thành 4 tam giác nhỏ bằng nhau (c-c-c).',
        simQ: 'Diện tích tam giác tạo bởi 3 đường trung bình bằng bao nhiêu phần diện tích tam giác ban đầu?',
        simOpts: ['1/4', '1/2', '1/3', '1/8'],
        simAns: 0,
        simExp: 'Bằng 1/4 diện tích tam giác gốc.'
      },
      {
        q: 'Chu vi tam giác tạo bởi ba đường trung bình của ΔABC bằng bao nhiêu phần chu vi ΔABC?',
        opts: ['1/2', '1/4', '1/3', '2/3'],
        ans: 0,
        exp: 'Mỗi cạnh của tam giác nhỏ bằng 1/2 cạnh tương ứng nên chu vi bằng 1/2 chu vi ΔABC.',
        simQ: 'Nếu chu vi ΔABC là 20 cm thì chu vi tam giác tạo bởi 3 đường trung bình là:',
        simOpts: ['10 cm', '5 cm', '15 cm', '40 cm'],
        simAns: 0,
        simExp: '20 / 2 = 10 cm.'
      },
      {
        q: 'Cho tứ giác ABCD. Nối trung điểm của 4 cạnh AB, BC, CD, DA theo thứ tự được một hình gì?',
        opts: ['Hình bình hành', 'Hình chữ nhật', 'Hình thoi', 'Hình thang cân'],
        ans: 0,
        exp: 'Các cạnh của tứ giác mới song song và bằng nửa đường chéo AC, BD nên là hình bình hành (hình bình hành Varignon).',
        simQ: 'Tứ giác có các đỉnh là trung điểm 4 cạnh của một tứ giác bất kì luôn là:',
        simOpts: ['Hình bình hành', 'Hình thoi', 'Hình chữ nhật', 'Hình vuông'],
        simAns: 0,
        simExp: 'Hình bình hành.'
      },
      {
        q: 'Để hình bình hành nối 4 trung điểm của tứ giác ABCD là hình thoi thì tứ giác ABCD cần có:',
        opts: ['Hai đường chéo bằng nhau (AC = BD)', 'Hai đường chéo vuông góc', 'Các cạnh bằng nhau', 'Bốn góc vuông'],
        ans: 0,
        exp: 'Các cạnh hình bình hành bằng nửa AC và nửa BD. Để các cạnh bằng nhau thì AC = BD.',
        simQ: 'Để hình bình hành nối 4 trung điểm là hình chữ nhật thì hai đường chéo tứ giác phải:',
        simOpts: ['Vuông góc với nhau (AC ⊥ BD)', 'Bằng nhau', 'Song song', 'Cắt nhau tại trung điểm'],
        simAns: 0,
        simExp: 'Vuông góc với nhau.'
      },
      {
        q: 'Cho ΔABC cân tại A có AB = AC = 10 cm, BC = 12 cm. Đường trung bình MN song song với BC có độ dài là:',
        opts: ['6 cm', '5 cm', '10 cm', '12 cm'],
        ans: 0,
        exp: 'MN = BC / 2 = 12 / 2 = 6 cm.',
        simQ: 'Đường trung bình nối trung điểm AB và BC có độ dài là:',
        simOpts: ['5 cm', '6 cm', '10 cm', '4 cm'],
        simAns: 0,
        simExp: 'AC / 2 = 10 / 2 = 5 cm.'
      },
      {
        q: 'Đường trung bình của hình thang có tính chất:',
        opts: ['Song song với hai đáy và bằng nửa tổng hai đáy', 'Bằng đáy lớn', 'Bằng đáy nhỏ', 'Bằng hiệu hai đáy'],
        ans: 0,
        exp: 'Đường trung bình hình thang = (đáy lớn + đáy nhỏ) / 2.',
        simQ: 'Hình thang có 2 đáy là 6 cm và 10 cm thì đường trung bình dài:',
        simOpts: ['8 cm', '16 cm', '4 cm', '7 cm'],
        simAns: 0,
        simExp: '(6 + 10) / 2 = 8 cm.'
      }
    ]
  },

  // Bài 17
  {
    id: 'k1-b17',
    grade: '8',
    semester: 1,
    chapterNumber: 4,
    chapterTitle: 'Chương IV: Định lí Thalès',
    lessonNumber: 17,
    title: 'Bài 17. Tính chất đường phân giác của tam giác',
    textbookRef: 'Toán 8 KNTT - Bài 17',
    summary: '• Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn đó.\\n• Nếu AD là tia phân giác của góc A trong ΔABC (D ∈ BC) thì: DB / DC = AB / AC.\\n• Định lí vẫn đúng đối với tia phân giác của góc ngoài của tam giác.',
    keyFormulas: [
      'AD là phân giác trong góc A: DB / DC = AB / AC',
      'AE là phân giác ngoài góc A (AB ≠ AC): EB / EC = AB / AC'
    ],
    questions: [
      {
        q: 'Cho ΔABC có AD là phân giác trong của góc A (D ∈ BC). Hệ thức nào sau đây đúng?',
        opts: ['DB / DC = AB / AC', 'DB / DC = AC / AB', 'DB / AB = AC / DC', 'DB / DC = BC / AC'],
        ans: 0,
        exp: 'Định lí đường phân giác: DB / DC = AB / AC.',
        simQ: 'Hệ thức nào tương đương với DB / DC = AB / AC?',
        simOpts: ['DB / AB = DC / AC', 'DB · DC = AB · AC', 'DB / AC = DC / AB', 'DB + DC = AB + AC'],
        simAns: 0,
        simExp: 'Hoán vị trung tỉ: DB / AB = DC / AC.'
      },
      {
        q: 'Cho ΔABC có AB = 4 cm, AC = 6 cm. Tia phân giác góc A cắt BC tại D. Tỉ số DB / DC là:',
        opts: ['2/3', '3/2', '1/2', '4/10'],
        ans: 0,
        exp: 'DB / DC = AB / AC = 4 / 6 = 2/3.',
        simQ: 'Nếu AB = 6 cm, AC = 9 cm thì tỉ số DB / DC bằng:',
        simOpts: ['2/3', '3/2', '1/3', '3/4'],
        simAns: 0,
        simExp: '6 / 9 = 2/3.'
      },
      {
        q: 'Cho ΔABC có AB = 6 cm, AC = 9 cm, BC = 10 cm. Phân giác AD cắt BC tại D. Độ dài đoạn DB là:',
        opts: ['4 cm', '6 cm', '5 cm', '3 cm'],
        ans: 0,
        exp: 'DB / DC = 6 / 9 = 2/3 => DB / (DB + DC) = 2 / (2 + 3) => DB / 10 = 2/5 => DB = 4 cm.',
        simQ: 'Nếu AB = 3 cm, AC = 6 cm, BC = 9 cm thì DB dài:',
        simOpts: ['3 cm', '6 cm', '4.5 cm', '2 cm'],
        simAns: 0,
        simExp: 'DB / 9 = 3 / (3 + 6) = 1/3 => DB = 3 cm.'
      },
      {
        q: 'Trong bài toán trên (AB = 6 cm, AC = 9 cm, BC = 10 cm), độ dài đoạn DC là:',
        opts: ['6 cm', '4 cm', '5 cm', '7 cm'],
        ans: 0,
        exp: 'DC = BC - DB = 10 - 4 = 6 cm.',
        simQ: 'Với BC = 9 cm và DB = 3 cm thì DC dài:',
        simOpts: ['6 cm', '3 cm', '4.5 cm', '5 cm'],
        simAns: 0,
        simExp: '9 - 3 = 6 cm.'
      },
      {
        q: 'Tam giác ABC cân tại A có đường phân giác AD xuất phát từ đỉnh A. Điểm D là:',
        opts: ['Trung điểm của BC', 'Trực tâm', 'Trọng tâm', 'Điểm nằm ngoài BC'],
        ans: 0,
        exp: 'Trong tam giác cân, đường phân giác xuất phát từ đỉnh đồng thời là đường trung tuyến nên D là trung điểm BC.',
        simQ: 'Khi tam giác ABC cân tại A thì tỉ số DB / DC bằng:',
        simOpts: ['1', '2', '1/2', '0'],
        simAns: 0,
        simExp: 'Vì AB = AC nên DB / DC = 1 => DB = DC.'
      },
      {
        q: 'Đường phân giác góc ngoài của tam giác có tính chất tỉ lệ tương tự khi nào?',
        opts: ['Khi tam giác không cân tại đỉnh đó (hai cạnh kề không bằng nhau)', 'Với mọi tam giác', 'Chỉ khi tam giác đều', 'Chỉ khi tam giác vuông'],
        ans: 0,
        exp: 'Nếu AB = AC thì phân giác ngoài song song với BC, không cắt đường thẳng BC.',
        simQ: 'Nếu ΔABC cân tại A thì phân giác góc ngoài tại A sẽ:',
        simOpts: ['Song song với BC', 'Cắt BC', 'Vuông góc với BC', 'Trùng với BC'],
        simAns: 0,
        simExp: 'Song song với cạnh đáy BC.'
      },
      {
        q: 'Cho ΔABC vuông tại A có AB = 6 cm, AC = 8 cm. Tính BC:',
        opts: ['10 cm', '14 cm', '48 cm', '7 cm'],
        ans: 0,
        exp: 'BC = √(6² + 8²) = 10 cm.',
        simQ: 'Với AB = 6, AC = 8, BC = 10, phân giác AD cắt BC tại D. Tính DB:',
        simOpts: ['30/7 cm', '40/7 cm', '5 cm', '4 cm'],
        simAns: 0,
        simExp: 'DB / 10 = 6 / (6 + 8) = 6/14 = 3/7 => DB = 30/7 cm.'
      },
      {
        q: 'Nếu D nằm trên cạnh BC của ΔABC sao cho DB / DC = AB / AC thì kết luận nào đúng?',
        opts: ['AD là tia phân giác của góc BAC', 'AD là đường cao', 'AD là trung tuyến', 'AD vuông góc BC'],
        ans: 0,
        exp: 'Định lí đảo: Nếu DB/DC = AB/AC thì AD là đường phân giác của góc BAC.',
        simQ: 'Nếu D là trung điểm BC và AB = AC thì AD là:',
        simOpts: ['Phân giác góc A', 'Đường trung bình', 'Cạnh bên', 'Không xác định'],
        simAns: 0,
        simExp: 'Phân giác góc A.'
      },
      {
        q: 'Cho ΔABC có phân giác trong AD và phân giác ngoài AE (D, E ∈ BC). Khi đó góc DAE bằng:',
        opts: ['90°', '60°', '120°', '180°'],
        ans: 0,
        exp: 'Tia phân giác của hai góc kề bù luôn vuông góc với nhau: ∠DAE = 90°.',
        simQ: 'Hai tia phân giác của hai góc kề bù tạo với nhau một góc bằng:',
        simOpts: ['90°', '180°', '45°', '60°'],
        simAns: 0,
        simExp: '90°.'
      },
      {
        q: 'Cho ΔABC, phân giác AD. Biết DB = 2 cm, DC = 3 cm và chu vi ΔABC bằng 15 cm. Độ dài AB là:',
        opts: ['4 cm', '6 cm', '5 cm', '3 cm'],
        ans: 0,
        exp: 'BC = 2 + 3 = 5 cm => AB + AC = 15 - 5 = 10 cm. AB/AC = 2/3 => AB = 10 × 2/5 = 4 cm.',
        simQ: 'Trong bài toán trên, độ dài AC là:',
        simOpts: ['6 cm', '4 cm', '5 cm', '8 cm'],
        simAns: 0,
        simExp: '10 - 4 = 6 cm.'
      }
    ]
  }
];

writeChapterFile(2, chapter2Lessons);
writeChapterFile(3, chapter3Lessons);
writeChapterFile(4, chapter4Lessons);
