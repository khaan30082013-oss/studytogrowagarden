import { Lesson } from '../../types';

export const CHAPTER_10_LESSONS: Lesson[] = [
  {
    "id": "k2-b38",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 10,
    "chapterTitle": "Chương X: Một số hình khối trong thực tiễn",
    "lessonNumber": 38,
    "title": "Bài 38. Hình chóp tam giác đều",
    "textbookRef": "Toán 8 KNTT - Bài 38",
    "summary": "• Hình chóp tam giác đều có:\\n  - Mặt đáy là một tam giác đều.\\n  - Các mặt bên là các tam giác cân bằng nhau có chung đỉnh (gọi là đỉnh của hình chóp).\\n  - Các cạnh bên bằng nhau.\\n  - Chân đường cao kẻ từ đỉnh trùng với trọng tâm (tâm đường tròn ngoại tiếp) của tam giác đáy.\\n  - Trung đoạn là đường cao kẻ từ đỉnh của một mặt bên.\\n• Diện tích xung quanh: Sxq = (1/2) · C · d (C là chu vi đáy, d là trung đoạn).\\n• Thể tích: V = (1/3) · Sáy · h (h là chiều cao).",
    "keyFormulas": [
      "Sxq = (1/2) · C · d (d là trung đoạn, C là chu vi đáy)",
      "Stp = Sxq + Sđáy",
      "V = (1/3) · Sđáy · h"
    ],
    "questions": [
      {
        "id": "k2-b38-q1",
        "question": "Mặt đáy của hình chóp tam giác đều là hình gì?",
        "options": [
          "Tam giác đều",
          "Tam giác vuông",
          "Tam giác cân",
          "Tứ giác đều"
        ],
        "correctIndex": 0,
        "explanation": "Hình chóp tam giác đều có mặt đáy là tam giác đều.",
        "hasDiagram": true,
        "diagramType": "pyramid",
        "diagramData": {
          "shape": "pyramid3",
          "base": "triangle"
        },
        "similarQuestion": {
          "question": "Các mặt bên của hình chóp tam giác đều là:",
          "options": [
            "Các tam giác cân bằng nhau",
            "Các hình chữ nhật",
            "Các tam giác đều",
            "Các tam giác vuông cân"
          ],
          "correctIndex": 0,
          "explanation": "Các mặt bên là các tam giác cân bằng nhau có chung đỉnh."
        }
      },
      {
        "id": "k2-b38-q2",
        "question": "Đoạn thẳng nối đỉnh của hình chóp tam giác đều với trung điểm một cạnh đáy của mặt bên được gọi là:",
        "options": [
          "Trung đoạn",
          "Đường cao của hình chóp",
          "Cạnh bên",
          "Đường trung tuyến đáy"
        ],
        "correctIndex": 0,
        "explanation": "Đường cao kẻ từ đỉnh hạ xuống cạnh đáy của một mặt bên gọi là trung đoạn.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường cao của hình chóp là đoạn thẳng nối đỉnh với:",
          "options": [
            "Trọng tâm (tâm đường tròn ngoại tiếp) của đáy",
            "Một đỉnh của đáy",
            "Trung điểm một cạnh đáy",
            "Tùy ý"
          ],
          "correctIndex": 0,
          "explanation": "Nối từ đỉnh vuông góc với mặt phẳng đáy tại tâm đáy."
        }
      },
      {
        "id": "k2-b38-q3",
        "question": "Công thức tính diện tích xung quanh của hình chóp tam giác đều là:",
        "options": [
          "Sxq = (1/2) · C · d (C là chu vi đáy, d là trung đoạn)",
          "Sxq = C · d",
          "Sxq = (1/3) · C · d",
          "Sxq = 2C · d"
        ],
        "correctIndex": 0,
        "explanation": "Sxq = p · d = (1/2) · C · d.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Công thức tính thể tích của hình chóp tam giác đều là:",
          "options": [
            "V = (1/3) · Sđáy · h",
            "V = Sđáy · h",
            "V = (1/2) · Sđáy · h",
            "V = 3 · Sđáy · h"
          ],
          "correctIndex": 0,
          "explanation": "V = (1/3) · S · h."
        }
      },
      {
        "id": "k2-b38-q4",
        "question": "Tính diện tích xung quanh của hình chóp tam giác đều có chu vi đáy là 24 cm và trung đoạn là 10 cm:",
        "options": [
          "120 cm²",
          "240 cm²",
          "80 cm²",
          "60 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Sxq = (1/2) · C · d = (1/2) · 24 · 10 = 120 cm².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chu vi đáy 30 cm, trung đoạn 8 cm. Diện tích xung quanh là:",
          "options": [
            "120 cm²",
            "240 cm²",
            "60 cm²",
            "80 cm²"
          ],
          "correctIndex": 0,
          "explanation": "(1/2) · 30 · 8 = 120 cm²."
        }
      },
      {
        "id": "k2-b38-q5",
        "question": "Một hình chóp tam giác đều có diện tích đáy là 30 cm² và chiều cao là 9 cm. Thể tích của hình chóp là:",
        "options": [
          "90 cm³",
          "270 cm³",
          "135 cm³",
          "45 cm³"
        ],
        "correctIndex": 0,
        "explanation": "V = (1/3) · Sđáy · h = (1/3) · 30 · 9 = 90 cm³.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Diện tích đáy 20 cm², chiều cao 6 cm. Thể tích là:",
          "options": [
            "40 cm³",
            "120 cm³",
            "60 cm³",
            "80 cm³"
          ],
          "correctIndex": 0,
          "explanation": "(1/3) · 20 · 6 = 40 cm³."
        }
      },
      {
        "id": "k2-b38-q6",
        "question": "Hình chóp tam giác đều có bao nhiêu mặt, bao nhiêu cạnh?",
        "options": [
          "4 mặt (1 đáy + 3 mặt bên) và 6 cạnh (3 cạnh đáy + 3 cạnh bên)",
          "3 mặt và 4 cạnh",
          "5 mặt và 8 cạnh",
          "4 mặt và 4 cạnh"
        ],
        "correctIndex": 0,
        "explanation": "Có 1 mặt đáy + 3 mặt bên = 4 mặt; 3 cạnh đáy + 3 cạnh bên = 6 cạnh.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình chóp tam giác đều có bao nhiêu đỉnh?",
          "options": [
            "4 đỉnh (1 đỉnh chóp + 3 đỉnh đáy)",
            "3 đỉnh",
            "5 đỉnh",
            "6 đỉnh"
          ],
          "correctIndex": 0,
          "explanation": "Có 4 đỉnh."
        }
      },
      {
        "id": "k2-b38-q7",
        "question": "Nếu gấp miếng bìa gồm 4 tam giác đều bằng nhau, ta thu được hình chóp tam giác đều đặc biệt gọi là:",
        "options": [
          "Hình tứ diện đều",
          "Hình lập phương",
          "Hình hộp chữ nhật",
          "Hình lăng trụ"
        ],
        "correctIndex": 0,
        "explanation": "Khối có 4 mặt đều là tam giác đều bằng nhau gọi là tứ diện đều.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tất cả các cạnh của hình tứ diện đều:",
          "options": [
            "Bằng nhau",
            "Khác nhau",
            "Cạnh bên gấp đôi cạnh đáy",
            "Chỉ cạnh đáy bằng nhau"
          ],
          "correctIndex": 0,
          "explanation": "Cả 6 cạnh đều bằng nhau."
        }
      },
      {
        "id": "k2-b38-q8",
        "question": "Cho hình chóp tam giác đều có cạnh đáy bằng 6 cm, trung đoạn bằng 5 cm. Diện tích của MỘT mặt bên là:",
        "options": [
          "15 cm²",
          "30 cm²",
          "7.5 cm²",
          "18 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Mặt bên là tam giác cân có đáy 6 cm và đường cao (trung đoạn) 5 cm => S = (1/2) · 6 · 5 = 15 cm².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Diện tích xung quanh của hình chóp đó (gồm 3 mặt bên) là:",
          "options": [
            "45 cm²",
            "15 cm²",
            "30 cm²",
            "90 cm²"
          ],
          "correctIndex": 0,
          "explanation": "3 × 15 = 45 cm²."
        }
      },
      {
        "id": "k2-b38-q9",
        "question": "Khối rubik tam giác (Pyraminx) là vật thể thực tế có dạng:",
        "options": [
          "Hình tứ diện đều (hình chóp tam giác đều)",
          "Hình chóp tứ giác đều",
          "Hình lập phương",
          "Hình trụ"
        ],
        "correctIndex": 0,
        "explanation": "Pyraminx có dạng khối tứ diện đều 4 mặt tam giác đều.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đèn kéo quân hình chóp tam giác đều có 3 mặt kính bên, mỗi mặt cần trang trí hoa văn. Số mặt kính cần trang trí là:",
          "options": [
            "3 mặt bên",
            "4 mặt",
            "1 mặt",
            "6 mặt"
          ],
          "correctIndex": 0,
          "explanation": "Có 3 mặt bên xung quanh."
        }
      },
      {
        "id": "k2-b38-q10",
        "question": "Một hộp quà hình chóp tam giác đều có thể tích 100 cm³, chiều cao 10 cm. Diện tích đáy hộp là:",
        "options": [
          "30 cm²",
          "10 cm²",
          "15 cm²",
          "20 cm²"
        ],
        "correctIndex": 0,
        "explanation": "V = (1/3) · S · h => S = 3V / h = 3 · 100 / 10 = 30 cm².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu V = 60 cm³, h = 6 cm thì Sđáy bằng:",
          "options": [
            "30 cm²",
            "10 cm²",
            "20 cm²",
            "15 cm²"
          ],
          "correctIndex": 0,
          "explanation": "3 × 60 / 6 = 30 cm²."
        }
      }
    ]
  },
  {
    "id": "k2-b39",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 10,
    "chapterTitle": "Chương X: Một số hình khối trong thực tiễn",
    "lessonNumber": 39,
    "title": "Bài 39. Hình chóp tứ giác đều",
    "textbookRef": "Toán 8 KNTT - Bài 39",
    "summary": "• Hình chóp tứ giác đều có:\\n  - Mặt đáy là một hình vuông.\\n  - 4 mặt bên là các tam giác cân bằng nhau có chung đỉnh.\\n  - 4 cạnh bên bằng nhau.\\n  - Chân đường cao kẻ từ đỉnh trùng với tâm của đáy (giao điểm của hai đường chéo hình vuông đáy).\\n  - Trung đoạn là đường cao của một mặt bên kẻ từ đỉnh.\\n• Diện tích xung quanh: Sxq = (1/2) · C · d = 2 · a · d (với a là cạnh đáy, d là trung đoạn).\\n• Diện tích toàn phần: Stp = Sxq + Sđáy = Sxq + a².\\n• Thể tích: V = (1/3) · Sđáy · h = (1/3) · a² · h.",
    "keyFormulas": [
      "Sxq = (1/2) · C · d = 2 · a · d",
      "Stp = Sxq + a²",
      "V = (1/3) · a² · h"
    ],
    "questions": [
      {
        "id": "k2-b39-q1",
        "question": "Mặt đáy của hình chóp tứ giác đều là hình gì?",
        "options": [
          "Hình vuông",
          "Hình chữ nhật",
          "Hình thoi",
          "Hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Hình chóp tứ giác đều có đáy là hình vuông.",
        "hasDiagram": true,
        "diagramType": "pyramid",
        "diagramData": {
          "shape": "pyramid4",
          "base": "square"
        },
        "similarQuestion": {
          "question": "Bốn mặt bên của hình chóp tứ giác đều là:",
          "options": [
            "Bốn tam giác cân bằng nhau",
            "Bốn hình vuông",
            "Bốn tam giác đều",
            "Bốn hình chữ nhật"
          ],
          "correctIndex": 0,
          "explanation": "Các mặt bên là các tam giác cân bằng nhau."
        }
      },
      {
        "id": "k2-b39-q2",
        "question": "Kim tự tháp Kê-ốp (Ai Cập) là công trình kiến trúc nổi tiếng có dạng:",
        "options": [
          "Hình chóp tứ giác đều",
          "Hình chóp tam giác đều",
          "Hình lăng trụ tứ giác",
          "Hình nón"
        ],
        "correctIndex": 0,
        "explanation": "Kim tự tháp Ai Cập có đáy hình vuông và 4 mặt bên tam giác cân dốc lên đỉnh.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Bảo tàng Louvre (Paris) có kim tự tháp kính là hình:",
          "options": [
            "Hình chóp tứ giác đều",
            "Hình lập phương",
            "Hình cầu",
            "Hình trụ"
          ],
          "correctIndex": 0,
          "explanation": "Kim tự tháp kính Louvre có dạng hình chóp tứ giác đều."
        }
      },
      {
        "id": "k2-b39-q3",
        "question": "Hình chóp tứ giác đều có bao nhiêu mặt, bao nhiêu cạnh?",
        "options": [
          "5 mặt (1 đáy + 4 mặt bên) và 8 cạnh (4 cạnh đáy + 4 cạnh bên)",
          "4 mặt và 6 cạnh",
          "6 mặt và 10 cạnh",
          "5 mặt và 5 cạnh"
        ],
        "correctIndex": 0,
        "explanation": "Có 1 mặt đáy hình vuông + 4 mặt bên tam giác cân = 5 mặt; 4 cạnh đáy + 4 cạnh bên = 8 cạnh.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số đỉnh của hình chóp tứ giác đều là:",
          "options": [
            "5 đỉnh (1 đỉnh chóp + 4 đỉnh đáy)",
            "4 đỉnh",
            "6 đỉnh",
            "8 đỉnh"
          ],
          "correctIndex": 0,
          "explanation": "Có 5 đỉnh."
        }
      },
      {
        "id": "k2-b39-q4",
        "question": "Tính diện tích xung quanh của hình chóp tứ giác đều có cạnh đáy a = 10 cm và trung đoạn d = 12 cm:",
        "options": [
          "240 cm²",
          "480 cm²",
          "120 cm²",
          "340 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi đáy C = 4 × 10 = 40 cm. Sxq = (1/2) · C · d = (1/2) · 40 · 12 = 240 cm².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cạnh đáy a = 6 cm, trung đoạn d = 8 cm. Sxq là:",
          "options": [
            "96 cm²",
            "192 cm²",
            "48 cm²",
            "132 cm²"
          ],
          "correctIndex": 0,
          "explanation": "C = 24 cm => Sxq = (1/2) · 24 · 8 = 96 cm²."
        }
      },
      {
        "id": "k2-b39-q5",
        "question": "Diện tích toàn phần của hình chóp tứ giác đều trong câu trên (a = 10 cm, d = 12 cm) là:",
        "options": [
          "340 cm²",
          "240 cm²",
          "100 cm²",
          "480 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Sđáy = a² = 10² = 100 cm². Stp = Sxq + Sđáy = 240 + 100 = 340 cm².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu a = 6 cm, Sxq = 96 cm² thì Stp là:",
          "options": [
            "132 cm²",
            "102 cm²",
            "96 cm²",
            "168 cm²"
          ],
          "correctIndex": 0,
          "explanation": "96 + 6² = 96 + 36 = 132 cm²."
        }
      },
      {
        "id": "k2-b39-q6",
        "question": "Tính thể tích của hình chóp tứ giác đều có cạnh đáy a = 6 cm và chiều cao h = 10 cm:",
        "options": [
          "120 cm³",
          "360 cm³",
          "60 cm³",
          "180 cm³"
        ],
        "correctIndex": 0,
        "explanation": "Sđáy = 6² = 36 cm². V = (1/3) · Sđáy · h = (1/3) · 36 · 10 = 120 cm³.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cạnh đáy a = 9 cm, chiều cao h = 8 cm. Thể tích là:",
          "options": [
            "216 cm³",
            "648 cm³",
            "108 cm³",
            "324 cm³"
          ],
          "correctIndex": 0,
          "explanation": "(1/3) · 9² · 8 = (1/3) · 81 · 8 = 216 cm³."
        }
      },
      {
        "id": "k2-b39-q7",
        "question": "Chân đường cao của hình chóp tứ giác đều là:",
        "options": [
          "Giao điểm của hai đường chéo đáy",
          "Trung điểm một cạnh đáy",
          "Một đỉnh của đáy",
          "Trọng tâm một mặt bên"
        ],
        "correctIndex": 0,
        "explanation": "Hạ từ đỉnh vuông góc xuống đáy tại tâm hình vuông (giao điểm 2 đường chéo).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khoảng cách từ tâm đáy đến một cạnh đáy của hình vuông cạnh a là:",
          "options": [
            "a / 2",
            "a",
            "a√2 / 2",
            "a / 4"
          ],
          "correctIndex": 0,
          "explanation": "Bằng nửa cạnh đáy: a/2."
        }
      },
      {
        "id": "k2-b39-q8",
        "question": "Mối liên hệ giữa chiều cao h, trung đoạn d và cạnh đáy a trong hình chóp tứ giác đều theo Pythagore là:",
        "options": [
          "d² = h² + (a / 2)²",
          "h² = d² + (a / 2)²",
          "d = h + a / 2",
          "d² = h² + a²"
        ],
        "correctIndex": 0,
        "explanation": "Tam giác vuông tạo bởi đường cao h, đoạn nối tâm đến trung điểm cạnh đáy (a/2) và trung đoạn d: d² = h² + (a/2)².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu h = 4 cm và a = 6 cm thì trung đoạn d bằng:",
          "options": [
            "5 cm",
            "7 cm",
            "√52 cm",
            "6 cm"
          ],
          "correctIndex": 0,
          "explanation": "a/2 = 3 cm => d = √(4² + 3²) = √25 = 5 cm."
        }
      },
      {
        "id": "k2-b39-q9",
        "question": "Một chiếc lều cắm trại có dạng hình chóp tứ giác đều với cạnh đáy 2 m, chiều cao 1.5 m. Thể tích không khí bên trong lều là:",
        "options": [
          "2 m³",
          "6 m³",
          "4 m³",
          "3 m³"
        ],
        "correctIndex": 0,
        "explanation": "Sđáy = 2 × 2 = 4 m². V = (1/3) · 4 · 1.5 = 2 m³.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu đáy lều là 3 m × 3 m, chiều cao 2 m thì thể tích là:",
          "options": [
            "6 m³",
            "18 m³",
            "9 m³",
            "12 m³"
          ],
          "correctIndex": 0,
          "explanation": "(1/3) · 9 · 2 = 6 m³."
        }
      },
      {
        "id": "k2-b39-q10",
        "question": "Kim tự tháp Kê-ốp có cạnh đáy khoảng 230 m, chiều cao khoảng 147 m. Thể tích ước tính của nó khoảng:",
        "options": [
          "Khoảng 2.6 triệu m³",
          "Khoảng 7.8 triệu m³",
          "Khoảng 1.2 triệu m³",
          "Khoảng 5 triệu m³"
        ],
        "correctIndex": 0,
        "explanation": "V = (1/3) · 230² · 147 ≈ (1/3) · 52900 · 147 ≈ 2 592 100 m³ ≈ 2.6 triệu m³.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Diện tích mặt đáy của kim tự tháp Kê-ốp khoảng bao nhiêu m²?",
          "options": [
            "Khoảng 52 900 m²",
            "Khoảng 23 000 m²",
            "Khoảng 10 000 m²",
            "Khoảng 100 000 m²"
          ],
          "correctIndex": 0,
          "explanation": "230² = 52 900 m²."
        }
      }
    ]
  }
];
