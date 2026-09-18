import { Lesson } from '../../types';

export const CHAPTER_6_LESSONS: Lesson[] = [
  {
    "id": "k2-b21",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 6,
    "chapterTitle": "Chương VI: Phân thức đại số",
    "lessonNumber": 21,
    "title": "Bài 21. Phân thức đại số",
    "textbookRef": "Toán 8 KNTT - Bài 21",
    "summary": "• Phân thức đại số là một biểu thức có dạng A / B, trong đó A, B là những đa thức và B khác đa thức 0.\\n• A gọi là tử thức, B gọi là mẫu thức.\\n• Mỗi đa thức cũng được coi như một phân thức có mẫu thức bằng 1.\\n• Hai phân thức bằng nhau: A / B = C / D nếu A · D = B · C.\\n• Điều kiện xác định của phân thức: Mẫu thức B ≠ 0.",
    "keyFormulas": [
      "A / B = C / D <=> A · D = B · C",
      "ĐKXĐ: Mẫu thức B ≠ 0"
    ],
    "questions": [
      {
        "id": "k2-b21-q1",
        "question": "Biểu thức nào sau đây là phân thức đại số?",
        "options": [
          "(2x + 1) / (x - 3)",
          "√(x - 1)",
          "2x² + √y",
          "x / 0"
        ],
        "correctIndex": 0,
        "explanation": "(2x + 1)/(x - 3) có dạng A/B với A, B là đa thức và B ≠ 0.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Biểu thức nào sau đây là phân thức đại số?",
          "options": [
            "(x² - 4) / (x + 1)",
            "3√x + 1",
            "x / (y - y)",
            "√2x + 1"
          ],
          "correctIndex": 0,
          "explanation": "Đa thức chia đa thức khác 0."
        }
      },
      {
        "id": "k2-b21-q2",
        "question": "Điều kiện xác định của phân thức (x + 2) / (x - 5) là:",
        "options": [
          "x ≠ 5",
          "x ≠ -2",
          "x ≠ 0",
          "x > 5"
        ],
        "correctIndex": 0,
        "explanation": "Mẫu thức khác 0: x - 5 ≠ 0 => x ≠ 5.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Điều kiện xác định của phân thức 3 / (x + 4) là:",
          "options": [
            "x ≠ -4",
            "x ≠ 4",
            "x ≠ 0",
            "x ≠ 3"
          ],
          "correctIndex": 0,
          "explanation": "x + 4 ≠ 0 => x ≠ -4."
        }
      },
      {
        "id": "k2-b21-q3",
        "question": "Hai phân thức A/B và C/D bằng nhau khi và chỉ khi:",
        "options": [
          "A · D = B · C",
          "A · C = B · D",
          "A + D = B + C",
          "A - D = B - C"
        ],
        "correctIndex": 0,
        "explanation": "Theo định nghĩa hai phân thức bằng nhau: tích chéo A·D = B·C.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cặp phân thức nào sau đây bằng nhau?",
          "options": [
            "x / 2 và x² / 2x (với x ≠ 0)",
            "x / 2 và 2 / x",
            "x / 3 và (x + 1) / 4",
            "1 / x và -1 / x"
          ],
          "correctIndex": 0,
          "explanation": "x · (2x) = 2 · x² = 2x² nên bằng nhau."
        }
      },
      {
        "id": "k2-b21-q4",
        "question": "Giá trị của phân thức (x² - 1) / (x + 1) tại x = 3 là:",
        "options": [
          "2",
          "4",
          "8",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "(x² - 1)/(x + 1) = x - 1. Tại x = 3: 3 - 1 = 2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính giá trị của (x² - 4) / (x - 2) tại x = 5:",
          "options": [
            "7",
            "3",
            "5",
            "9"
          ],
          "correctIndex": 0,
          "explanation": "x + 2 tại x = 5 là 5 + 2 = 7."
        }
      },
      {
        "id": "k2-b21-q5",
        "question": "Phân thức nào sau đây xác định với mọi số thực x?",
        "options": [
          "1 / (x² + 1)",
          "1 / (x² - 1)",
          "1 / x",
          "1 / (x - 2)"
        ],
        "correctIndex": 0,
        "explanation": "Vì x² + 1 ≥ 1 > 0 với mọi x nên mẫu thức luôn khác 0.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phân thức xác định với mọi x là:",
          "options": [
            "(2x + 1) / (x² + 4)",
            "x / x²",
            "3 / (x - 1)",
            "4 / (x² - 4)"
          ],
          "correctIndex": 0,
          "explanation": "x² + 4 > 0 với mọi x."
        }
      },
      {
        "id": "k2-b21-q6",
        "question": "Điều kiện xác định của phân thức 1 / (x² - 9) là:",
        "options": [
          "x ≠ 3 và x ≠ -3",
          "x ≠ 3",
          "x ≠ -3",
          "x ≠ 9"
        ],
        "correctIndex": 0,
        "explanation": "x² - 9 ≠ 0 => (x - 3)(x + 3) ≠ 0 => x ≠ ±3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Điều kiện xác định của 1 / (x² - 16) là:",
          "options": [
            "x ≠ ±4",
            "x ≠ 4",
            "x ≠ 16",
            "x ≠ 0"
          ],
          "correctIndex": 0,
          "explanation": "x² ≠ 16 => x ≠ ±4."
        }
      },
      {
        "id": "k2-b21-q7",
        "question": "Mỗi đa thức P có thể coi là một phân thức có mẫu thức bằng:",
        "options": [
          "1",
          "0",
          "P",
          "x"
        ],
        "correctIndex": 0,
        "explanation": "Mọi đa thức P đều có thể viết dưới dạng P / 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số 0 có phải là phân thức đại số không?",
          "options": [
            "Có, viết là 0/1",
            "Không phải",
            "Chỉ khi x khác 0",
            "Chỉ là số nguyên"
          ],
          "correctIndex": 0,
          "explanation": "Số 0 là một đa thức, nên 0 = 0/1 là phân thức đại số."
        }
      },
      {
        "id": "k2-b21-q8",
        "question": "Tìm đa thức A trong đẳng thức A / (x - 1) = (x + 1) / 1:",
        "options": [
          "x² - 1",
          "x² + 1",
          "x - 1",
          "x + 1"
        ],
        "correctIndex": 0,
        "explanation": "A = (x - 1)(x + 1) = x² - 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tìm M trong M / (x - 2) = x + 2:",
          "options": [
            "x² - 4",
            "x² + 4",
            "x - 2",
            "x² - 2"
          ],
          "correctIndex": 0,
          "explanation": "M = (x - 2)(x + 2) = x² - 4."
        }
      },
      {
        "id": "k2-b21-q9",
        "question": "Phân thức (x - 3) / (x² - 9) bằng 0 khi:",
        "options": [
          "Không có giá trị nào của x",
          "x = 3",
          "x = -3",
          "x = 0"
        ],
        "correctIndex": 0,
        "explanation": "Để phân thức bằng 0 thì tử = 0 (x = 3), nhưng x = 3 làm mẫu bằng 0 (vi phạm ĐKXĐ x ≠ ±3), nên không có giá trị x thỏa mãn.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phân thức (x - 2) / (x² - 4) có giá trị bằng 0 khi nào?",
          "options": [
            "Không có x nào thỏa mãn",
            "x = 2",
            "x = -2",
            "x = 0"
          ],
          "correctIndex": 0,
          "explanation": "x = 2 vi phạm điều kiện xác định mẫu khác 0."
        }
      },
      {
        "id": "k2-b21-q10",
        "question": "Rút gọn phân thức (3x²y) / (6xy²) ta được:",
        "options": [
          "x / 2y",
          "x / y",
          "2x / y",
          "1 / 2xy"
        ],
        "correctIndex": 0,
        "explanation": "Chia cả tử và mẫu cho 3xy được x / 2y.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút gọn (4ab²) / (8a²b):",
          "options": [
            "b / 2a",
            "a / 2b",
            "2b / a",
            "1 / 2ab"
          ],
          "correctIndex": 0,
          "explanation": "b / 2a."
        }
      }
    ]
  },
  {
    "id": "k2-b22",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 6,
    "chapterTitle": "Chương VI: Phân thức đại số",
    "lessonNumber": 22,
    "title": "Bài 22. Tính chất cơ bản của phân thức đại số",
    "textbookRef": "Toán 8 KNTT - Bài 22",
    "summary": "• Nhân cả tử và mẫu với cùng một đa thức khác 0: A / B = (A · M) / (B · M) (M ≠ 0).\\n• Chia cả tử và mẫu cho một nhân tử chung: A / B = (A : N) / (B : N).\\n• Quy tắc đổi dấu: A / B = (-A) / (-B) và - (A / B) = (-A) / B = A / (-B).\\n• Rút gọn phân thức: Phân tích tử và mẫu thành nhân tử rồi chia cho nhân tử chung.\\n• Quy đồng mẫu thức nhiều phân thức.",
    "keyFormulas": [
      "A / B = (A · M) / (B · M)",
      "A / B = (A : N) / (B : N)",
      "A / B = (-A) / (-B)"
    ],
    "questions": [
      {
        "id": "k2-b22-q1",
        "question": "Rút gọn phân thức (x² - 4) / (x - 2) với x ≠ 2:",
        "options": [
          "x + 2",
          "x - 2",
          "1 / (x + 2)",
          "x"
        ],
        "correctIndex": 0,
        "explanation": "(x - 2)(x + 2) / (x - 2) = x + 2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút gọn (x² - 9) / (x - 3) với x ≠ 3:",
          "options": [
            "x + 3",
            "x - 3",
            "3",
            "1 / (x + 3)"
          ],
          "correctIndex": 0,
          "explanation": "x + 3."
        }
      },
      {
        "id": "k2-b22-q2",
        "question": "Phân thức đối của phân thức A / B là:",
        "options": [
          "- A / B",
          "B / A",
          "A / (-B)",
          "Cả A và C đều đúng"
        ],
        "correctIndex": 3,
        "explanation": "Phân thức đối có thể viết là -(A/B), (-A)/B hoặc A/(-B).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Quy tắc đổi dấu: biểu thức (x - y) / (a - b) bằng biểu thức nào?",
          "options": [
            "(y - x) / (b - a)",
            "(y - x) / (a - b)",
            "(x - y) / (b - a)",
            "-(y - x) / (b - a)"
          ],
          "correctIndex": 0,
          "explanation": "Đổi dấu cả tử và mẫu: (-(x - y)) / (-(a - b)) = (y - x) / (b - a)."
        }
      },
      {
        "id": "k2-b22-q3",
        "question": "Mẫu thức chung đơn giản nhất của hai phân thức 1 / (2x) và 1 / (3x²) là:",
        "options": [
          "6x²",
          "6x³",
          "2x²",
          "3x²"
        ],
        "correctIndex": 0,
        "explanation": "BCNN(2, 3) = 6; lũy thừa x cao nhất là x² => MTC = 6x².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Mẫu thức chung của 1 / (4x²) và 1 / (6xy) là:",
          "options": [
            "12x²y",
            "24x²y",
            "12xy",
            "4x²y"
          ],
          "correctIndex": 0,
          "explanation": "BCNN(4, 6) = 12; biến x² và y => 12x²y."
        }
      },
      {
        "id": "k2-b22-q4",
        "question": "Rút gọn phân thức (x² - 2x + 1) / (x² - 1) với x ≠ ±1:",
        "options": [
          "(x - 1) / (x + 1)",
          "(x + 1) / (x - 1)",
          "x - 1",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "(x - 1)² / ((x - 1)(x + 1)) = (x - 1) / (x + 1).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút gọn (x² + 2x + 1) / (x² - 1):",
          "options": [
            "(x + 1) / (x - 1)",
            "(x - 1) / (x + 1)",
            "1",
            "x + 1"
          ],
          "correctIndex": 0,
          "explanation": "(x + 1) / (x - 1)."
        }
      },
      {
        "id": "k2-b22-q5",
        "question": "Điền đa thức thích hợp vào chỗ trống: (x + 1) / (x - 2) = ... / (x² - 4):",
        "options": [
          "(x + 1)(x + 2)",
          "(x + 1)(x - 2)",
          "x² + 2",
          "x² - 1"
        ],
        "correctIndex": 0,
        "explanation": "Nhân cả tử và mẫu với (x + 2): (x + 1)(x + 2).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tìm tử số thích hợp: 2 / x = ... / x²y:",
          "options": [
            "2xy",
            "2x",
            "2y",
            "xy"
          ],
          "correctIndex": 0,
          "explanation": "Nhân tử và mẫu với xy: 2xy."
        }
      },
      {
        "id": "k2-b22-q6",
        "question": "Rút gọn phân thức (5x - 5y) / (10y - 10x):",
        "options": [
          "-1/2",
          "1/2",
          "-2",
          "2"
        ],
        "correctIndex": 0,
        "explanation": "5(x - y) / (-10(x - y)) = 5 / (-10) = -1/2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút gọn (a - b) / (b - a):",
          "options": [
            "-1",
            "1",
            "0",
            "a/b"
          ],
          "correctIndex": 0,
          "explanation": "(a - b) / (-(a - b)) = -1."
        }
      },
      {
        "id": "k2-b22-q7",
        "question": "Phân thức nào sau đây là phân thức tối giản?",
        "options": [
          "(x + 1) / (x² + 1)",
          "(2x + 2) / (x + 1)",
          "(x² - 1) / (x - 1)",
          "3x / 6y"
        ],
        "correctIndex": 0,
        "explanation": "Tử và mẫu không có nhân tử chung nào ngoài ±1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phân thức tối giản trong các phân thức sau là:",
          "options": [
            "(x + 2) / (x + 3)",
            "(2x + 4) / 4",
            "x² / x",
            "(x - 1) / (x² - 1)"
          ],
          "correctIndex": 0,
          "explanation": "(x + 2) / (x + 3) không rút gọn được nữa."
        }
      },
      {
        "id": "k2-b22-q8",
        "question": "Mẫu thức chung của hai phân thức 1 / (x - 1) và 1 / (1 - x) là:",
        "options": [
          "x - 1 (bằng cách đổi dấu 1 / (1 - x) thành -1 / (x - 1))",
          "(x - 1)²",
          "(x - 1)(1 - x)",
          "x² - 1"
        ],
        "correctIndex": 0,
        "explanation": "Chỉ cần đổi dấu phân thức thứ hai thì mẫu thức chung là x - 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đổi dấu phân thức 2 / (3 - x) thành:",
          "options": [
            "-2 / (x - 3)",
            "2 / (x - 3)",
            "-2 / (3 - x)",
            "2 / (3 + x)"
          ],
          "correctIndex": 0,
          "explanation": "-2 / (x - 3)."
        }
      },
      {
        "id": "k2-b22-q9",
        "question": "Rút gọn phân thức (x³ - 8) / (x² + 2x + 4):",
        "options": [
          "x - 2",
          "x + 2",
          "(x - 2)²",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "(x - 2)(x² + 2x + 4) / (x² + 2x + 4) = x - 2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút gọn (x³ + 1) / (x² - x + 1):",
          "options": [
            "x + 1",
            "x - 1",
            "(x + 1)²",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "x + 1."
        }
      },
      {
        "id": "k2-b22-q10",
        "question": "Khi quy đồng mẫu thức 1 / (x - y) và 1 / (x + y), mẫu thức chung là:",
        "options": [
          "x² - y²",
          "x - y",
          "x + y",
          "2(x - y)"
        ],
        "correctIndex": 0,
        "explanation": "(x - y)(x + y) = x² - y².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "MTC của 1 / (x - 2) và 1 / (x + 2) là:",
          "options": [
            "x² - 4",
            "x - 2",
            "x + 2",
            "x² + 4"
          ],
          "correctIndex": 0,
          "explanation": "x² - 4."
        }
      }
    ]
  },
  {
    "id": "k2-b23",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 6,
    "chapterTitle": "Chương VI: Phân thức đại số",
    "lessonNumber": 23,
    "title": "Bài 23. Phép cộng và phép trừ phân thức đại số",
    "textbookRef": "Toán 8 KNTT - Bài 23",
    "summary": "• Cộng, trừ hai phân thức cùng mẫu: Cộng, trừ các tử thức và giữ nguyên mẫu thức: A/M ± B/M = (A ± B) / M.\\n• Cộng, trừ hai phân thức khác mẫu: Quy đồng mẫu thức rồi thực hiện như phân thức cùng mẫu.\\n• Phép cộng phân thức có tính chất giao hoán, kết hợp.\\n• Hai phân thức đối nhau: A / B + (-A) / B = 0.",
    "keyFormulas": [
      "A / M + B / M = (A + B) / M",
      "A / B - C / D = A / B + (-C) / D"
    ],
    "questions": [
      {
        "id": "k2-b23-q1",
        "question": "Kết quả của phép tính (2x + 1) / (x + 2) + (x + 5) / (x + 2) là:",
        "options": [
          "3",
          "3x + 6",
          "(3x + 6) / (2x + 4)",
          "x + 3"
        ],
        "correctIndex": 0,
        "explanation": "(2x + 1 + x + 5) / (x + 2) = (3x + 6) / (x + 2) = 3(x + 2) / (x + 2) = 3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (x + 1) / (x + 3) + (2x + 8) / (x + 3):",
          "options": [
            "3",
            "3x + 9",
            "2",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "(3x + 9) / (x + 3) = 3."
        }
      },
      {
        "id": "k2-b23-q2",
        "question": "Kết quả của (3x - 1) / (x - 1) - (2x) / (x - 1) là:",
        "options": [
          "1",
          "-1",
          "(x - 1) / (x - 1) = 1",
          "x"
        ],
        "correctIndex": 0,
        "explanation": "(3x - 1 - 2x) / (x - 1) = (x - 1) / (x - 1) = 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (4x - 3) / (x - 1) - (3x - 2) / (x - 1):",
          "options": [
            "1",
            "-1",
            "2",
            "0"
          ],
          "correctIndex": 0,
          "explanation": "(4x - 3 - 3x + 2) / (x - 1) = (x - 1) / (x - 1) = 1."
        }
      },
      {
        "id": "k2-b23-q3",
        "question": "Tính 1 / x + 1 / y (với x, y ≠ 0):",
        "options": [
          "(x + y) / xy",
          "2 / (x + y)",
          "1 / xy",
          "(xy) / (x + y)"
        ],
        "correctIndex": 0,
        "explanation": "Quy đồng mẫu thức chung xy: y/xy + x/xy = (x + y)/xy.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính 1 / a - 1 / b:",
          "options": [
            "(b - a) / ab",
            "(a - b) / ab",
            "1 / (a - b)",
            "0"
          ],
          "correctIndex": 0,
          "explanation": "(b - a) / ab."
        }
      },
      {
        "id": "k2-b23-q4",
        "question": "Kết quả của 1 / (x - 1) - 1 / (x + 1) là:",
        "options": [
          "2 / (x² - 1)",
          "-2 / (x² - 1)",
          "0",
          "2x / (x² - 1)"
        ],
        "correctIndex": 0,
        "explanation": "((x + 1) - (x - 1)) / (x² - 1) = 2 / (x² - 1).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính 1 / (x - 2) - 1 / (x + 2):",
          "options": [
            "4 / (x² - 4)",
            "2 / (x² - 4)",
            "-4 / (x² - 4)",
            "0"
          ],
          "correctIndex": 0,
          "explanation": "((x + 2) - (x - 2)) / (x² - 4) = 4 / (x² - 4)."
        }
      },
      {
        "id": "k2-b23-q5",
        "question": "Tổng của hai phân thức đối nhau bằng:",
        "options": [
          "0",
          "1",
          "-1",
          "Không xác định"
        ],
        "correctIndex": 0,
        "explanation": "A/B + (-A)/B = (A - A)/B = 0.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phân thức đối của (x - 1) / (x + 2) là:",
          "options": [
            "(1 - x) / (x + 2)",
            "(x - 1) / (x - 2)",
            "(x + 1) / (x + 2)",
            "(1 - x) / (x - 2)"
          ],
          "correctIndex": 0,
          "explanation": "-(x - 1)/(x + 2) = (1 - x)/(x + 2)."
        }
      },
      {
        "id": "k2-b23-q6",
        "question": "Thực hiện phép tính x / (x - 2) + 2 / (2 - x):",
        "options": [
          "1",
          "-1",
          "(x + 2) / (x - 2)",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "Đổi dấu phân thức thứ hai: x / (x - 2) - 2 / (x - 2) = (x - 2) / (x - 2) = 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính a / (a - b) + b / (b - a):",
          "options": [
            "1",
            "-1",
            "0",
            "a + b"
          ],
          "correctIndex": 0,
          "explanation": "(a - b) / (a - b) = 1."
        }
      },
      {
        "id": "k2-b23-q7",
        "question": "Tính 2x / (x² - 1) - 1 / (x - 1):",
        "options": [
          "1 / (x + 1)",
          "1 / (x - 1)",
          "2 / (x + 1)",
          "-1 / (x + 1)"
        ],
        "correctIndex": 0,
        "explanation": "MTC = (x - 1)(x + 1). (2x - (x + 1)) / (x² - 1) = (x - 1) / ((x - 1)(x + 1)) = 1 / (x + 1).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính 2x / (x² - 4) - 1 / (x - 2):",
          "options": [
            "1 / (x + 2)",
            "1 / (x - 2)",
            "2 / (x + 2)",
            "0"
          ],
          "correctIndex": 0,
          "explanation": "(2x - (x + 2)) / (x² - 4) = (x - 2) / ((x - 2)(x + 2)) = 1 / (x + 2)."
        }
      },
      {
        "id": "k2-b23-q8",
        "question": "Tính x / (x + 1) + 1 / (x + 1):",
        "options": [
          "1",
          "x",
          "2x",
          "(x + 1)²"
        ],
        "correctIndex": 0,
        "explanation": "(x + 1) / (x + 1) = 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (2x - 3) / 5 + (3 - 2x) / 5:",
          "options": [
            "0",
            "1",
            "-1",
            "2"
          ],
          "correctIndex": 0,
          "explanation": "(2x - 3 + 3 - 2x) / 5 = 0 / 5 = 0."
        }
      },
      {
        "id": "k2-b23-q9",
        "question": "Rút gọn P = 1 / x + 1 / (x + 1) + (2x + 1) / (x(x + 1)):",
        "options": [
          "2(2x + 1) / (x(x + 1))",
          "0",
          "1",
          "2 / x"
        ],
        "correctIndex": 0,
        "explanation": "1/x + 1/(x+1) = (2x+1)/(x(x+1)). Cộng thêm biểu thức thứ 3 được 2(2x + 1) / (x(x + 1)).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "1 / (x(x + 1)) bằng hiệu của hai phân thức nào?",
          "options": [
            "1 / x - 1 / (x + 1)",
            "1 / (x + 1) - 1 / x",
            "1 / x + 1 / (x + 1)",
            "x - (x + 1)"
          ],
          "correctIndex": 0,
          "explanation": "((x + 1) - x) / (x(x + 1)) = 1 / (x(x + 1))."
        }
      },
      {
        "id": "k2-b23-q10",
        "question": "Tìm phân thức A biết A + 1 / (x - 1) = x / (x - 1):",
        "options": [
          "1",
          "x",
          "x - 1",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "A = x / (x - 1) - 1 / (x - 1) = (x - 1) / (x - 1) = 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tìm A biết A - 2 / (x + 3) = x / (x + 3):",
          "options": [
            "1",
            "x + 2",
            "(x + 2) / (x + 3)",
            "0"
          ],
          "correctIndex": 2,
          "explanation": "A = (x + 2) / (x + 3)."
        }
      }
    ]
  },
  {
    "id": "k2-b24",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 6,
    "chapterTitle": "Chương VI: Phân thức đại số",
    "lessonNumber": 24,
    "title": "Bài 24. Phép nhân và phép chia phân thức đại số",
    "textbookRef": "Toán 8 KNTT - Bài 24",
    "summary": "• Nhân hai phân thức: Nhân các tử với nhau, nhân các mẫu với nhau: (A / B) · (C / D) = (A · C) / (B · D).\\n• Chia hai phân thức: Nhân phân thức thứ nhất với phân thức nghịch đảo của phân thức thứ hai: (A / B) : (C / D) = (A / B) · (D / C) (với C/D ≠ 0).\\n• Phân thức nghịch đảo của A / B (với A, B ≠ 0) là B / A.",
    "keyFormulas": [
      "(A / B) · (C / D) = (A · C) / (B · D)",
      "(A / B) : (C / D) = (A / B) · (D / C)"
    ],
    "questions": [
      {
        "id": "k2-b24-q1",
        "question": "Kết quả của phép nhân (3x / 2y) · (4y² / 9x²) là:",
        "options": [
          "2y / 3x",
          "3x / 2y",
          "2x / 3y",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "(3x · 4y²) / (2y · 9x²) = 12xy² / 18x²y = 2y / 3x.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (2a / 3b) · (9b / 4a):",
          "options": [
            "3/2",
            "2/3",
            "1",
            "6"
          ],
          "correctIndex": 0,
          "explanation": "(18ab) / (12ab) = 3/2."
        }
      },
      {
        "id": "k2-b24-q2",
        "question": "Phân thức nghịch đảo của (x - 2) / (x + 3) là:",
        "options": [
          "(x + 3) / (x - 2)",
          "-(x - 2) / (x + 3)",
          "(2 - x) / (x + 3)",
          "1 / (x - 2)"
        ],
        "correctIndex": 0,
        "explanation": "Đảo ngược vị trí tử và mẫu: (x + 3)/(x - 2).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phân thức nghịch đảo của 1 / (x - 1) là:",
          "options": [
            "x - 1",
            "-(x - 1)",
            "1 - x",
            "1 / (1 - x)"
          ],
          "correctIndex": 0,
          "explanation": "(x - 1) / 1 = x - 1."
        }
      },
      {
        "id": "k2-b24-q3",
        "question": "Thực hiện phép chia (x² - 4) / (3x) : (x + 2) / (6x²):",
        "options": [
          "2x(x - 2)",
          "2(x - 2)",
          "(x - 2) / 2x",
          "2x(x + 2)"
        ],
        "correctIndex": 0,
        "explanation": "((x - 2)(x + 2) / 3x) · (6x² / (x + 2)) = (x - 2) · 2x = 2x(x - 2).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (x² - 1) / 2 : (x - 1) / 4:",
          "options": [
            "2(x + 1)",
            "x + 1",
            "4(x + 1)",
            "2(x - 1)"
          ],
          "correctIndex": 0,
          "explanation": "((x - 1)(x + 1) / 2) · (4 / (x - 1)) = 2(x + 1)."
        }
      },
      {
        "id": "k2-b24-q4",
        "question": "Kết quả của (x + 1) / (x - 1) · (x - 1) / (x + 1) là:",
        "options": [
          "1",
          "0",
          "-1",
          "(x + 1)²"
        ],
        "correctIndex": 0,
        "explanation": "Hai phân thức nghịch đảo của nhau nhân lại bằng 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tích của một phân thức khác 0 với phân thức nghịch đảo của nó luôn bằng:",
          "options": [
            "1",
            "0",
            "-1",
            "Bình phương phân thức đó"
          ],
          "correctIndex": 0,
          "explanation": "Luôn bằng 1."
        }
      },
      {
        "id": "k2-b24-q5",
        "question": "Thực hiện phép nhân (x - 3) / (x + 1) · (x² + 2x + 1) / (x² - 9):",
        "options": [
          "(x + 1) / (x + 3)",
          "(x - 1) / (x - 3)",
          "(x + 3) / (x + 1)",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "(x - 3) / (x + 1) · (x + 1)² / ((x - 3)(x + 3)) = (x + 1) / (x + 3).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (x - 2) / (x + 2) · (x + 2) / (x² - 4):",
          "options": [
            "1 / (x + 2)",
            "1 / (x - 2)",
            "x + 2",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "(x - 2) / ((x - 2)(x + 2)) = 1 / (x + 2)."
        }
      },
      {
        "id": "k2-b24-q6",
        "question": "Chia một phân thức cho đa thức P (P ≠ 0): (A / B) : P bằng:",
        "options": [
          "A / (B · P)",
          "(A · P) / B",
          "(B · P) / A",
          "A / B"
        ],
        "correctIndex": 0,
        "explanation": "P = P/1 nên (A/B) : (P/1) = (A/B) · (1/P) = A / (B · P).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (2x / 3) : x:",
          "options": [
            "2/3",
            "2x²/3",
            "3/2",
            "2/3x"
          ],
          "correctIndex": 0,
          "explanation": "2x / (3x) = 2/3."
        }
      },
      {
        "id": "k2-b24-q7",
        "question": "Tính (x / (x - 1))² : (x² / (x² - 1)):",
        "options": [
          "(x + 1) / (x - 1)",
          "(x - 1) / (x + 1)",
          "1",
          "x(x + 1)"
        ],
        "correctIndex": 0,
        "explanation": "(x² / (x - 1)²) · ((x - 1)(x + 1) / x²) = (x + 1) / (x - 1).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút gọn (a / b) : (a / b²):",
          "options": [
            "b",
            "1/b",
            "b²",
            "a"
          ],
          "correctIndex": 0,
          "explanation": "(a/b) · (b²/a) = b."
        }
      },
      {
        "id": "k2-b24-q8",
        "question": "Giá trị của biểu thức P = ((x - 1) / x) · (x / (x + 1)) · ((x + 1) / (x - 1)) là:",
        "options": [
          "1",
          "x",
          "0",
          "-1"
        ],
        "correctIndex": 0,
        "explanation": "Tất cả các nhân tử rút gọn triệt tiêu hết: P = 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính (a / b) · (b / c) · (c / a):",
          "options": [
            "1",
            "0",
            "abc",
            "a/c"
          ],
          "correctIndex": 0,
          "explanation": "1."
        }
      },
      {
        "id": "k2-b24-q9",
        "question": "Biểu thức (x² - 25) / (x + 5) có thể rút gọn nhanh thành:",
        "options": [
          "x - 5",
          "x + 5",
          "1 / (x - 5)",
          "5"
        ],
        "correctIndex": 0,
        "explanation": "(x - 5)(x + 5) / (x + 5) = x - 5.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút gọn (x² - 36) / (x - 6):",
          "options": [
            "x + 6",
            "x - 6",
            "6",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "x + 6."
        }
      },
      {
        "id": "k2-b24-q10",
        "question": "Một chiếc ô tô đi quãng đường S = 100 km với vận tốc v = (x + 10) km/h. Thời gian đi là:",
        "options": [
          "100 / (x + 10) giờ",
          "100(x + 10) giờ",
          "(x + 10) / 100 giờ",
          "100 + x giờ"
        ],
        "correctIndex": 0,
        "explanation": "t = S / v = 100 / (x + 10).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đi 60 km với vận tốc x km/h mất thời gian là:",
          "options": [
            "60 / x giờ",
            "60x giờ",
            "x / 60 giờ",
            "60 - x giờ"
          ],
          "correctIndex": 0,
          "explanation": "60 / x giờ."
        }
      }
    ]
  }
];
