import { Lesson } from '../../types';

export const CHAPTER_7_LESSONS: Lesson[] = [
  {
    "id": "k2-b25",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 7,
    "chapterTitle": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
    "lessonNumber": 25,
    "title": "Bài 25. Phương trình bậc nhất một ẩn",
    "textbookRef": "Toán 8 KNTT - Bài 25",
    "summary": "• Phương trình bậc nhất một ẩn có dạng ax + b = 0 (với a, b là hai số đã cho và a ≠ 0).\\n• Quy tắc chuyển vế: Khi chuyển một hạng tử từ vế này sang vế kia của phương trình, ta phải đổi dấu hạng tử đó.\\n• Quy tắc nhân với một số: Ta có thể nhân (hoặc chia) cả hai vế của phương trình cho cùng một số khác 0.\\n• Phương trình bậc nhất một ẩn ax + b = 0 luôn có nghiệm duy nhất x = -b / a.",
    "keyFormulas": [
      "ax + b = 0 (a ≠ 0) <=> ax = -b <=> x = -b / a",
      "Chuyển vế đổi dấu"
    ],
    "questions": [
      {
        "id": "k2-b25-q1",
        "question": "Phương trình nào sau đây là phương trình bậc nhất một ẩn?",
        "options": [
          "2x - 4 = 0",
          "x² - 4 = 0",
          "2x + y = 3",
          "0x + 5 = 0"
        ],
        "correctIndex": 0,
        "explanation": "2x - 4 = 0 có dạng ax + b = 0 với a = 2 ≠ 0 và b = -4.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phương trình bậc nhất một ẩn là:",
          "options": [
            "3x + 6 = 0",
            "x² + 2x = 0",
            "1/x + 2 = 0",
            "2x - 3y = 1"
          ],
          "correctIndex": 0,
          "explanation": "3x + 6 = 0 có dạng ax + b = 0 với a = 3 ≠ 0."
        }
      },
      {
        "id": "k2-b25-q2",
        "question": "Nghiệm của phương trình 2x - 6 = 0 là:",
        "options": [
          "x = 3",
          "x = -3",
          "x = 6",
          "x = -6"
        ],
        "correctIndex": 0,
        "explanation": "2x = 6 => x = 6/2 = 3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nghiệm của 3x - 12 = 0 là:",
          "options": [
            "x = 4",
            "x = -4",
            "x = 3",
            "x = 12"
          ],
          "correctIndex": 0,
          "explanation": "3x = 12 => x = 4."
        }
      },
      {
        "id": "k2-b25-q3",
        "question": "Giải phương trình 5x + 10 = 0:",
        "options": [
          "x = -2",
          "x = 2",
          "x = -5",
          "x = 10"
        ],
        "correctIndex": 0,
        "explanation": "5x = -10 => x = -10/5 = -2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Giải 4x + 8 = 0:",
          "options": [
            "x = -2",
            "x = 2",
            "x = 4",
            "x = -4"
          ],
          "correctIndex": 0,
          "explanation": "x = -8/4 = -2."
        }
      },
      {
        "id": "k2-b25-q4",
        "question": "Khi chuyển vế hạng tử +5 từ vế trái sang vế phải của phương trình, hạng tử đó trở thành:",
        "options": [
          "-5",
          "+5",
          "1/5",
          "-1/5"
        ],
        "correctIndex": 0,
        "explanation": "Quy tắc chuyển vế: đổi dấu từ \"+\" thành \"-\".",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chuyển hạng tử -3x sang vế kia ta được:",
          "options": [
            "+3x",
            "-3x",
            "3/x",
            "-x/3"
          ],
          "correctIndex": 0,
          "explanation": "Đổi dấu thành +3x."
        }
      },
      {
        "id": "k2-b25-q5",
        "question": "Nghiệm của phương trình 3x - 2 = x + 4 là:",
        "options": [
          "x = 3",
          "x = 2",
          "x = 1",
          "x = -3"
        ],
        "correctIndex": 0,
        "explanation": "3x - x = 4 + 2 => 2x = 6 => x = 3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Giải phương trình 4x - 5 = 2x + 3:",
          "options": [
            "x = 4",
            "x = 2",
            "x = -4",
            "x = 8"
          ],
          "correctIndex": 0,
          "explanation": "2x = 8 => x = 4."
        }
      },
      {
        "id": "k2-b25-q6",
        "question": "Phương trình 0x = 0 có tập nghiệm là:",
        "options": [
          "Vô số nghiệm (S = ℝ)",
          "Vô nghiệm (S = ∅)",
          "x = 0",
          "x = 1"
        ],
        "correctIndex": 0,
        "explanation": "Với mọi số thực x thì 0 · x = 0 luôn đúng, nên có vô số nghiệm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phương trình 0x = 5 có tập nghiệm là:",
          "options": [
            "Vô nghiệm (S = ∅)",
            "Vô số nghiệm",
            "x = 0",
            "x = 5"
          ],
          "correctIndex": 0,
          "explanation": "Không có số nào nhân với 0 bằng 5, nên vô nghiệm."
        }
      },
      {
        "id": "k2-b25-q7",
        "question": "Số x = -1 là nghiệm của phương trình nào sau đây?",
        "options": [
          "2x + 2 = 0",
          "2x - 2 = 0",
          "x - 1 = 0",
          "3x + 1 = 0"
        ],
        "correctIndex": 0,
        "explanation": "Thay x = -1 vào 2x + 2: 2(-1) + 2 = -2 + 2 = 0 (thỏa mãn).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số x = 2 là nghiệm của phương trình nào?",
          "options": [
            "3x - 6 = 0",
            "3x + 6 = 0",
            "2x + 4 = 0",
            "x + 2 = 0"
          ],
          "correctIndex": 0,
          "explanation": "3(2) - 6 = 0."
        }
      },
      {
        "id": "k2-b25-q8",
        "question": "Giải phương trình (x - 1) / 2 = (x + 1) / 3:",
        "options": [
          "x = 5",
          "x = -5",
          "x = 1",
          "x = -1"
        ],
        "correctIndex": 0,
        "explanation": "Quy đồng khử mẫu: 3(x - 1) = 2(x + 1) => 3x - 3 = 2x + 2 => x = 5.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Giải (x + 2) / 3 = (x - 1) / 2:",
          "options": [
            "x = 7",
            "x = -7",
            "x = 5",
            "x = 3"
          ],
          "correctIndex": 0,
          "explanation": "2(x + 2) = 3(x - 1) => 2x + 4 = 3x - 3 => x = 7."
        }
      },
      {
        "id": "k2-b25-q9",
        "question": "Phương trình bậc nhất ax + b = 0 (a ≠ 0) có bao nhiêu nghiệm?",
        "options": [
          "Duy nhất một nghiệm",
          "Hai nghiệm",
          "Vô nghiệm",
          "Vô số nghiệm"
        ],
        "correctIndex": 0,
        "explanation": "Khi a ≠ 0, phương trình luôn có duy nhất một nghiệm x = -b/a.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu a = 0 và b ≠ 0 thì ax + b = 0 sẽ:",
          "options": [
            "Vô nghiệm",
            "Có 1 nghiệm",
            "Vô số nghiệm",
            "Có 2 nghiệm"
          ],
          "correctIndex": 0,
          "explanation": "0x = -b (với b ≠ 0) là vô nghiệm."
        }
      },
      {
        "id": "k2-b25-q10",
        "question": "Giá trị của m để phương trình (m - 1)x + 2 = 0 là phương trình bậc nhất một ẩn là:",
        "options": [
          "m ≠ 1",
          "m = 1",
          "m > 1",
          "m tùy ý"
        ],
        "correctIndex": 0,
        "explanation": "Hệ số của x phải khác 0: m - 1 ≠ 0 => m ≠ 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Để (2m - 4)x + 1 = 0 là phương trình bậc nhất một ẩn thì:",
          "options": [
            "m ≠ 2",
            "m = 2",
            "m > 2",
            "m ≠ 0"
          ],
          "correctIndex": 0,
          "explanation": "2m - 4 ≠ 0 => m ≠ 2."
        }
      }
    ]
  },
  {
    "id": "k2-b26",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 7,
    "chapterTitle": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
    "lessonNumber": 26,
    "title": "Bài 26. Giải bài toán bằng cách lập phương trình",
    "textbookRef": "Toán 8 KNTT - Bài 26",
    "summary": "• Các bước giải bài toán bằng cách lập phương trình:\\n  Bước 1: Lập phương trình (chọn ẩn và đặt điều kiện thích hợp; biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết; lập phương trình biểu thị mối quan hệ giữa các đại lượng).\\n  Bước 2: Giải phương trình vừa lập.\\n  Bước 3: Trả lời (kiểm tra nghiệm có thỏa mãn điều kiện hay không và kết luận).",
    "keyFormulas": [
      "Quãng đường: S = v · t",
      "Công việc: Năng suất × Thời gian = Khối lượng công việc"
    ],
    "questions": [
      {
        "id": "k2-b26-q1",
        "question": "Một mảnh vườn hình chữ nhật có chu vi 50 m, chiều dài hơn chiều rộng 5 m. Nếu gọi chiều rộng là x (m, x > 0), phương trình nào sau đây đúng?",
        "options": [
          "2(x + x + 5) = 50",
          "x + x + 5 = 50",
          "x(x + 5) = 50",
          "2x + 5 = 50"
        ],
        "correctIndex": 0,
        "explanation": "Chiều dài là x + 5. Chu vi là 2 × (dài + rộng) = 2(x + x + 5) = 50.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chu vi hình chữ nhật là 40 m, chiều rộng kém chiều dài 4 m. Gọi chiều dài là x thì phương trình là:",
          "options": [
            "2(x + x - 4) = 40",
            "x + x - 4 = 40",
            "x(x - 4) = 40",
            "2x - 4 = 40"
          ],
          "correctIndex": 0,
          "explanation": "2 × (x + x - 4) = 40."
        }
      },
      {
        "id": "k2-b26-q2",
        "question": "Trong bài toán trên, chiều rộng của mảnh vườn là bao nhiêu mét?",
        "options": [
          "10 m",
          "15 m",
          "20 m",
          "12 m"
        ],
        "correctIndex": 0,
        "explanation": "2(2x + 5) = 50 => 4x + 10 = 50 => 4x = 40 => x = 10 m.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chiều dài của mảnh vườn là:",
          "options": [
            "15 m",
            "10 m",
            "20 m",
            "25 m"
          ],
          "correctIndex": 0,
          "explanation": "x + 5 = 10 + 5 = 15 m."
        }
      },
      {
        "id": "k2-b26-q3",
        "question": "Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn. Nếu gọi số gà là x (x ∈ ℕ*, x < 36), phương trình biểu thị số chân là:",
        "options": [
          "2x + 4(36 - x) = 100",
          "4x + 2(36 - x) = 100",
          "2x + 4x = 100",
          "x + (36 - x) = 100"
        ],
        "correctIndex": 0,
        "explanation": "Số chó là 36 - x. Gà 2 chân, chó 4 chân: 2x + 4(36 - x) = 100.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trong bài toán dân gian trên, số gà là bao nhiêu con?",
          "options": [
            "22 con",
            "14 con",
            "20 con",
            "16 con"
          ],
          "correctIndex": 0,
          "explanation": "2x + 144 - 4x = 100 => -2x = -44 => x = 22 con gà."
        }
      },
      {
        "id": "k2-b26-q4",
        "question": "Số chó trong bài toán trên là:",
        "options": [
          "14 con",
          "22 con",
          "12 con",
          "16 con"
        ],
        "correctIndex": 0,
        "explanation": "36 - 22 = 14 con chó. (Kiểm tra chân: 22×2 + 14×4 = 44 + 56 = 100).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu có 10 con gồm gà và chó, tổng cộng 28 chân. Số gà là:",
          "options": [
            "6 con",
            "4 con",
            "5 con",
            "7 con"
          ],
          "correctIndex": 0,
          "explanation": "2x + 4(10 - x) = 28 => -2x = -12 => x = 6 con gà."
        }
      },
      {
        "id": "k2-b26-q5",
        "question": "Một ô tô đi từ A đến B với vận tốc 50 km/h rồi quay về A với vận tốc 40 km/h. Thời gian về nhiều hơn thời gian đi 30 phút (0.5 giờ). Gọi quãng đường AB là x (km, x > 0), phương trình là:",
        "options": [
          "x / 40 - x / 50 = 0.5",
          "x / 50 - x / 40 = 0.5",
          "50x - 40x = 0.5",
          "x / 40 + x / 50 = 0.5"
        ],
        "correctIndex": 0,
        "explanation": "Thời gian về là x/40, thời gian đi là x/50. Phương trình: x/40 - x/50 = 0.5.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Quãng đường AB dài bao nhiêu km?",
          "options": [
            "100 km",
            "120 km",
            "90 km",
            "80 km"
          ],
          "correctIndex": 0,
          "explanation": "x/40 - x/50 = 0.5 => 5x - 4x = 100 => x = 100 km."
        }
      },
      {
        "id": "k2-b26-q6",
        "question": "Năm nay tuổi mẹ gấp 3 lần tuổi con. Sau 5 năm nữa, tuổi mẹ gấp 2.5 lần tuổi con. Gọi tuổi con hiện nay là x (tuổi). Tuổi con hiện nay là:",
        "options": [
          "15 tuổi",
          "12 tuổi",
          "10 tuổi",
          "18 tuổi"
        ],
        "correctIndex": 0,
        "explanation": "3x + 5 = 2.5(x + 5) => 3x + 5 = 2.5x + 12.5 => 0.5x = 7.5 => x = 15.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tuổi mẹ hiện nay là:",
          "options": [
            "45 tuổi",
            "40 tuổi",
            "50 tuổi",
            "36 tuổi"
          ],
          "correctIndex": 0,
          "explanation": "3 × 15 = 45 tuổi."
        }
      },
      {
        "id": "k2-b26-q7",
        "question": "Một người gửi tiết kiệm 50 triệu đồng với lãi suất 6%/năm. Sau 1 năm người đó nhận được số tiền lãi là:",
        "options": [
          "3 triệu đồng",
          "300 nghìn đồng",
          "6 triệu đồng",
          "1.5 triệu đồng"
        ],
        "correctIndex": 0,
        "explanation": "Tiền lãi = 50 × 6% = 3 triệu đồng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Gửi 100 triệu với lãi suất 7%/năm thì sau 1 năm lãi là:",
          "options": [
            "7 triệu đồng",
            "700 nghìn đồng",
            "14 triệu đồng",
            "3.5 triệu đồng"
          ],
          "correctIndex": 0,
          "explanation": "100 × 7% = 7 triệu đồng."
        }
      },
      {
        "id": "k2-b26-q8",
        "question": "Một xưởng theo kế hoạch may 30 áo/ngày. Nhờ cải tiến may được 40 áo/ngày nên xong trước kế hoạch 2 ngày. Gọi số ngày theo kế hoạch là x (ngày, x > 2), phương trình là:",
        "options": [
          "30x = 40(x - 2)",
          "40x = 30(x - 2)",
          "30x = 40(x + 2)",
          "x / 30 = (x - 2) / 40"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số áo may là như nhau: 30x = 40(x - 2).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số ngày làm theo kế hoạch là:",
          "options": [
            "8 ngày",
            "6 ngày",
            "10 ngày",
            "12 ngày"
          ],
          "correctIndex": 0,
          "explanation": "30x = 40x - 80 => 10x = 80 => x = 8 ngày."
        }
      },
      {
        "id": "k2-b26-q9",
        "question": "Tổng của hai số là 80, hiệu của chúng là 20. Số lớn là:",
        "options": [
          "50",
          "60",
          "40",
          "30"
        ],
        "correctIndex": 0,
        "explanation": "Số lớn = (80 + 20) / 2 = 50.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tổng hai số là 100, số lớn gấp 4 lần số bé. Số bé là:",
          "options": [
            "20",
            "25",
            "80",
            "15"
          ],
          "correctIndex": 0,
          "explanation": "x + 4x = 100 => 5x = 100 => x = 20."
        }
      },
      {
        "id": "k2-b26-q10",
        "question": "Khi giải bài toán bằng cách lập phương trình, bước nào KHÔNG THỂ BỎ QUA để tránh chọn nhầm nghiệm không phù hợp?",
        "options": [
          "Kiểm tra nghiệm với điều kiện của ẩn và kết luận",
          "Vẽ đồ thị hàm số",
          "Đổi tên ẩn số",
          "Thử lại 10 lần"
        ],
        "correctIndex": 0,
        "explanation": "Phải đối chiếu nghiệm tìm được với điều kiện bài toán trước khi kết luận.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu tìm được nghiệm x = -5 người cho bài toán tìm số học sinh thì:",
          "options": [
            "Loại vì số học sinh phải là số nguyên dương",
            "Nhận nghiệm",
            "Lấy giá trị tuyệt đối",
            "Đổi dấu thành +5"
          ],
          "correctIndex": 0,
          "explanation": "Loại vì số người không thể là số âm."
        }
      }
    ]
  },
  {
    "id": "k2-b27",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 7,
    "chapterTitle": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
    "lessonNumber": 27,
    "title": "Bài 27. Khái niệm hàm số và đồ thị của hàm số",
    "textbookRef": "Toán 8 KNTT - Bài 27",
    "summary": "• Nếu đại lượng y phụ thuộc vào đại lượng thay đổi x sao cho với mỗi giá trị của x ta luôn xác định được chỉ một giá trị tương ứng của y thì y được gọi là hàm số của x, và x gọi là biến số.\\n• Kí hiệu: y = f(x).\\n• Mặt phẳng toạ độ Oxy có trục hoành Ox và trục tung Oy.\\n• Đồ thị hàm số y = f(x) là tập hợp tất cả các điểm M(x; f(x)) trên mặt phẳng toạ độ Oxy.",
    "keyFormulas": [
      "y = f(x)",
      "Điểm M(x₀; y₀) thuộc đồ thị y = f(x) <=> y₀ = f(x₀)"
    ],
    "questions": [
      {
        "id": "k2-b27-q1",
        "question": "Cho hàm số y = f(x) = 2x + 1. Giá trị f(2) bằng:",
        "options": [
          "5",
          "4",
          "3",
          "6"
        ],
        "correctIndex": 0,
        "explanation": "f(2) = 2(2) + 1 = 4 + 1 = 5.",
        "hasDiagram": true,
        "diagramType": "coordinate",
        "diagramData": {
          "x": 2,
          "y": 5
        },
        "similarQuestion": {
          "question": "Cho y = f(x) = 3x - 2. Tính f(3):",
          "options": [
            "7",
            "9",
            "6",
            "8"
          ],
          "correctIndex": 0,
          "explanation": "3(3) - 2 = 7."
        }
      },
      {
        "id": "k2-b27-q2",
        "question": "Điểm nào sau đây thuộc đồ thị hàm số y = 3x - 1?",
        "options": [
          "A(1; 2)",
          "B(0; 1)",
          "C(2; 4)",
          "D(-1; 2)"
        ],
        "correctIndex": 0,
        "explanation": "Thay x = 1: y = 3(1) - 1 = 2 => Điểm A(1; 2) thuộc đồ thị.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Điểm nào thuộc đồ thị y = 2x + 3?",
          "options": [
            "M(1; 5)",
            "N(0; 2)",
            "P(2; 6)",
            "Q(-1; 0)"
          ],
          "correctIndex": 0,
          "explanation": "2(1) + 3 = 5 => M(1; 5) thuộc đồ thị."
        }
      },
      {
        "id": "k2-b27-q3",
        "question": "Trong mặt phẳng tọa độ Oxy, trục nằm ngang Ox được gọi là:",
        "options": [
          "Trục hoành",
          "Trục tung",
          "Gốc tọa độ",
          "Trục đối xứng"
        ],
        "correctIndex": 0,
        "explanation": "Trục Ox là trục hoành, trục Oy là trục tung.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trục thẳng đứng Oy được gọi là:",
          "options": [
            "Trục tung",
            "Trục hoành",
            "Trục ảo",
            "Trục chính"
          ],
          "correctIndex": 0,
          "explanation": "Trục thẳng đứng là trục tung."
        }
      },
      {
        "id": "k2-b27-q4",
        "question": "Tọa độ của gốc tọa độ O là:",
        "options": [
          "(0; 0)",
          "(1; 1)",
          "(0; 1)",
          "(1; 0)"
        ],
        "correctIndex": 0,
        "explanation": "Gốc tọa độ O có tọa độ (0; 0).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Điểm nằm trên trục tung có hoành độ x bằng:",
          "options": [
            "0",
            "1",
            "Tùy ý",
            "-1"
          ],
          "correctIndex": 0,
          "explanation": "Mọi điểm trên trục tung đều có x = 0."
        }
      },
      {
        "id": "k2-b27-q5",
        "question": "Điểm M(3; -2) có:",
        "options": [
          "Hoành độ bằng 3, tung độ bằng -2",
          "Hoành độ bằng -2, tung độ bằng 3",
          "Hoành độ bằng 3, tung độ bằng 2",
          "Tung độ bằng 0"
        ],
        "correctIndex": 0,
        "explanation": "Quy ước (x; y): hoành độ trước, tung độ sau.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Điểm có hoành độ 4, tung độ 1 được viết là:",
          "options": [
            "(4; 1)",
            "(1; 4)",
            "(4; -1)",
            "(-4; 1)"
          ],
          "correctIndex": 0,
          "explanation": "(4; 1)."
        }
      },
      {
        "id": "k2-b27-q6",
        "question": "Cho hàm số y = f(x) = x² - 3. Giá trị f(-2) bằng:",
        "options": [
          "1",
          "-7",
          "7",
          "-1"
        ],
        "correctIndex": 0,
        "explanation": "f(-2) = (-2)² - 3 = 4 - 3 = 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho y = f(x) = x² + 1. Tính f(-3):",
          "options": [
            "10",
            "-8",
            "8",
            "7"
          ],
          "correctIndex": 0,
          "explanation": "(-3)² + 1 = 9 + 1 = 10."
        }
      },
      {
        "id": "k2-b27-q7",
        "question": "Để một tương quan y phụ thuộc vào x là một hàm số thì điều kiện tiên quyết là:",
        "options": [
          "Với mỗi giá trị của x, ta xác định được duy nhất một giá trị của y",
          "x và y phải tỉ lệ thuận",
          "x và y phải bằng nhau",
          "y luôn là số dương"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: mỗi giá trị của x chỉ cho duy nhất một giá trị tương ứng của y.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu 1 giá trị x cho 2 giá trị y khác nhau thì y có phải là hàm số của x không?",
          "options": [
            "Không phải là hàm số",
            "Là hàm số bậc hai",
            "Là hàm số hằng",
            "Chưa biết"
          ],
          "correctIndex": 0,
          "explanation": "Không thỏa mãn định nghĩa hàm số."
        }
      },
      {
        "id": "k2-b27-q8",
        "question": "Điểm M(-3; 0) nằm trên:",
        "options": [
          "Trục hoành Ox",
          "Trục tung Oy",
          "Góc phần tư thứ nhất",
          "Góc phần tư thứ tư"
        ],
        "correctIndex": 0,
        "explanation": "Có tung độ y = 0 nên nằm trên trục hoành Ox.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Điểm N(0; 5) nằm trên:",
          "options": [
            "Trục tung Oy",
            "Trục hoành Ox",
            "Gốc tọa độ",
            "Đường phân giác"
          ],
          "correctIndex": 0,
          "explanation": "Có hoành độ x = 0 nên nằm trên trục tung Oy."
        }
      },
      {
        "id": "k2-b27-q9",
        "question": "Cho hàm số y = 2x. Tìm x khi y = 8:",
        "options": [
          "x = 4",
          "x = 16",
          "x = 2",
          "x = 6"
        ],
        "correctIndex": 0,
        "explanation": "2x = 8 => x = 4.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho y = 3x. Tìm x khi y = -9:",
          "options": [
            "x = -3",
            "x = 3",
            "x = -27",
            "x = 6"
          ],
          "correctIndex": 0,
          "explanation": "3x = -9 => x = -3."
        }
      },
      {
        "id": "k2-b27-q10",
        "question": "Đồ thị của hàm số y = ax (a ≠ 0) là:",
        "options": [
          "Một đường thẳng đi qua gốc tọa độ O(0; 0)",
          "Một đường cong parabol",
          "Một đoạn thẳng",
          "Một đường tròn"
        ],
        "correctIndex": 0,
        "explanation": "y = ax là đường thẳng đi qua gốc toạ độ O(0; 0).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường thẳng y = 2x đi qua điểm nào?",
          "options": [
            "O(0; 0) và A(1; 2)",
            "O(0; 0) và B(1; 3)",
            "O(0; 0) và C(2; 1)",
            "D(1; 1)"
          ],
          "correctIndex": 0,
          "explanation": "Qua O(0;0) và A(1; 2)."
        }
      }
    ]
  },
  {
    "id": "k2-b28",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 7,
    "chapterTitle": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
    "lessonNumber": 28,
    "title": "Bài 28. Hàm số bậc nhất y = ax + b (a ≠ 0)",
    "textbookRef": "Toán 8 KNTT - Bài 28",
    "summary": "• Hàm số bậc nhất là hàm số được cho bởi công thức y = ax + b, trong đó a, b là các số cho trước và a ≠ 0.\\n• Khi b = 0, ta có hàm số y = ax.\\n• Đồ thị của hàm số y = ax + b (a ≠ 0) là một đường thẳng:\\n  - Cắt trục tung tại điểm P(0; b).\\n  - Song song với đường thẳng y = ax (nếu b ≠ 0); trùng với y = ax (nếu b = 0).\\n• Tính chất: Hàm số đồng biến khi a > 0; nghịch biến khi a < 0.",
    "keyFormulas": [
      "y = ax + b (a ≠ 0)",
      "a > 0: đồng biến (đi lên từ trái sang phải)",
      "a < 0: nghịch biến (đi xuống từ trái sang phải)"
    ],
    "questions": [
      {
        "id": "k2-b28-q1",
        "question": "Hàm số nào sau đây là hàm số bậc nhất?",
        "options": [
          "y = 2x - 3",
          "y = x² + 1",
          "y = 2/x",
          "y = 0x + 4"
        ],
        "correctIndex": 0,
        "explanation": "y = 2x - 3 có dạng y = ax + b với a = 2 ≠ 0.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hàm số bậc nhất trong các hàm sau là:",
          "options": [
            "y = -3x + 5",
            "y = 1/x - 2",
            "y = x³",
            "y = √x + 1"
          ],
          "correctIndex": 0,
          "explanation": "y = -3x + 5 có a = -3 ≠ 0."
        }
      },
      {
        "id": "k2-b28-q2",
        "question": "Hệ số a và b của hàm số y = -4x + 7 lần lượt là:",
        "options": [
          "a = -4, b = 7",
          "a = 4, b = 7",
          "a = 7, b = -4",
          "a = -4, b = -7"
        ],
        "correctIndex": 0,
        "explanation": "Hệ số của x là a = -4, hệ số tự do b = 7.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hệ số a của hàm số y = 5 - 2x là:",
          "options": [
            "-2",
            "5",
            "2",
            "-5"
          ],
          "correctIndex": 0,
          "explanation": "a là hệ số đứng trước x, a = -2."
        }
      },
      {
        "id": "k2-b28-q3",
        "question": "Đồ thị của hàm số y = 2x + 4 cắt trục tung tại điểm có tọa độ là:",
        "options": [
          "(0; 4)",
          "(4; 0)",
          "(-2; 0)",
          "(0; -2)"
        ],
        "correctIndex": 0,
        "explanation": "Cho x = 0 => y = 4 => Giao với trục tung là (0; 4).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đồ thị y = 3x - 6 cắt trục tung tại:",
          "options": [
            "(0; -6)",
            "(-6; 0)",
            "(2; 0)",
            "(0; 2)"
          ],
          "correctIndex": 0,
          "explanation": "Cho x = 0 => y = -6."
        }
      },
      {
        "id": "k2-b28-q4",
        "question": "Đồ thị của hàm số y = 2x + 4 cắt trục hoành tại điểm có tọa độ là:",
        "options": [
          "(-2; 0)",
          "(0; -2)",
          "(2; 0)",
          "(0; 4)"
        ],
        "correctIndex": 0,
        "explanation": "Cho y = 0 => 2x + 4 = 0 => x = -2 => Giao với trục hoành là (-2; 0).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đồ thị y = 3x - 6 cắt trục hoành tại:",
          "options": [
            "(2; 0)",
            "(-2; 0)",
            "(0; 2)",
            "(0; -6)"
          ],
          "correctIndex": 0,
          "explanation": "Cho y = 0 => 3x = 6 => x = 2."
        }
      },
      {
        "id": "k2-b28-q5",
        "question": "Hàm số bậc nhất y = ax + b đồng biến trên ℝ khi:",
        "options": [
          "a > 0",
          "a < 0",
          "a = 0",
          "b > 0"
        ],
        "correctIndex": 0,
        "explanation": "Hàm số bậc nhất đồng biến khi và chỉ khi hệ số a > 0.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hàm số bậc nhất nghịch biến trên ℝ khi:",
          "options": [
            "a < 0",
            "a > 0",
            "b < 0",
            "a = 0"
          ],
          "correctIndex": 0,
          "explanation": "Hệ số a < 0 thì hàm số nghịch biến."
        }
      },
      {
        "id": "k2-b28-q6",
        "question": "Hàm số y = -3x + 1 có tính chất gì?",
        "options": [
          "Nghịch biến trên ℝ",
          "Đồng biến trên ℝ",
          "Không tăng không giảm",
          "Đồng biến khi x > 0"
        ],
        "correctIndex": 0,
        "explanation": "Vì a = -3 < 0 nên hàm số nghịch biến trên ℝ.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hàm số y = 5x - 2 là hàm số:",
          "options": [
            "Đồng biến trên ℝ",
            "Nghịch biến trên ℝ",
            "Hàm hằng",
            "Không xác định"
          ],
          "correctIndex": 0,
          "explanation": "Vì a = 5 > 0 nên đồng biến trên ℝ."
        }
      },
      {
        "id": "k2-b28-q7",
        "question": "Tìm m để hàm số y = (m - 2)x + 3 đồng biến trên ℝ:",
        "options": [
          "m > 2",
          "m < 2",
          "m = 2",
          "m ≠ 2"
        ],
        "correctIndex": 0,
        "explanation": "Hàm số đồng biến khi hệ số a > 0 => m - 2 > 0 => m > 2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tìm m để y = (3 - m)x + 1 nghịch biến trên ℝ:",
          "options": [
            "m > 3",
            "m < 3",
            "m = 3",
            "m ≠ 3"
          ],
          "correctIndex": 0,
          "explanation": "3 - m < 0 => m > 3."
        }
      },
      {
        "id": "k2-b28-q8",
        "question": "Đồ thị hàm số y = 2x - 1 song song với đường thẳng nào sau đây?",
        "options": [
          "y = 2x + 5",
          "y = -2x - 1",
          "y = x - 1",
          "y = 3x - 1"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường thẳng song song khi có cùng hệ số góc a = 2 và b khác nhau (-1 ≠ 5).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường thẳng song song với y = -x + 3 là:",
          "options": [
            "y = -x + 1",
            "y = x + 3",
            "y = 2x + 3",
            "y = -2x"
          ],
          "correctIndex": 0,
          "explanation": "Có cùng hệ số a = -1."
        }
      },
      {
        "id": "k2-b28-q9",
        "question": "Để vẽ đồ thị hàm số y = ax + b (b ≠ 0), ta chỉ cần xác định:",
        "options": [
          "Hai điểm phân biệt thuộc đồ thị rồi kẻ đường thẳng qua hai điểm đó",
          "Một điểm duy nhất",
          "Ba điểm thẳng hàng",
          "Năm điểm"
        ],
        "correctIndex": 0,
        "explanation": "Qua hai điểm phân biệt xác định duy nhất một đường thẳng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai điểm thuận tiện nhất để vẽ đồ thị hàm số y = ax + b là:",
          "options": [
            "Giao điểm với hai trục tọa độ Ox và Oy",
            "Hai điểm bất kì",
            "Gốc tọa độ và 1 điểm khác",
            "Không có cách nào"
          ],
          "correctIndex": 0,
          "explanation": "Cho x = 0 tìm y và cho y = 0 tìm x (giao điểm với 2 trục)."
        }
      },
      {
        "id": "k2-b28-q10",
        "question": "Một bồn nước đang có 50 lít nước, mỗi phút chảy vào thêm 10 lít. Công thức lượng nước y (lít) sau x phút là:",
        "options": [
          "y = 10x + 50",
          "y = 50x + 10",
          "y = 10x - 50",
          "y = 50 - 10x"
        ],
        "correctIndex": 0,
        "explanation": "Ban đầu có 50 lít, mỗi phút tăng 10x lít => y = 10x + 50 (đây là hàm số bậc nhất).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Sau 5 phút thì bồn có bao nhiêu lít nước?",
          "options": [
            "100 lít",
            "80 lít",
            "60 lít",
            "120 lít"
          ],
          "correctIndex": 0,
          "explanation": "y = 10(5) + 50 = 100 lít."
        }
      }
    ]
  },
  {
    "id": "k2-b29",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 7,
    "chapterTitle": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
    "lessonNumber": 29,
    "title": "Bài 29. Hệ số góc của đường thẳng",
    "textbookRef": "Toán 8 KNTT - Bài 29",
    "summary": "• Trong hàm số bậc nhất y = ax + b (a ≠ 0), hệ số a được gọi là hệ số góc của đường thẳng.\\n• Góc tạo bởi đường thẳng y = ax + b và trục Ox:\\n  - Khi a > 0: góc tạo bởi đường thẳng và chiều dương trục Ox là góc nhọn. a càng lớn thì góc càng lớn.\\n  - Khi a < 0: góc tạo bởi đường thẳng và chiều dương trục Ox là góc tù.\\n• Vị trí tương đối của hai đường thẳng (d): y = ax + b và (d'): y = a'x + b':\\n  - d // d' <=> a = a' và b ≠ b'.\\n  - d trùng d' <=> a = a' và b = b'.\\n  - d cắt d' <=> a ≠ a'.\\n  - d ⊥ d' <=> a · a' = -1.",
    "keyFormulas": [
      "Hệ số góc: a",
      "d // d' <=> a = a' & b ≠ b'",
      "d cắt d' <=> a ≠ a'",
      "d ⊥ d' <=> a · a' = -1"
    ],
    "questions": [
      {
        "id": "k2-b29-q1",
        "question": "Hệ số góc của đường thẳng y = 3x - 5 là:",
        "options": [
          "3",
          "-5",
          "5",
          "-3"
        ],
        "correctIndex": 0,
        "explanation": "Hệ số góc chính là hệ số a đứng trước x: a = 3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hệ số góc của đường thẳng y = -2x + 4 là:",
          "options": [
            "-2",
            "4",
            "2",
            "-4"
          ],
          "correctIndex": 0,
          "explanation": "a = -2."
        }
      },
      {
        "id": "k2-b29-q2",
        "question": "Đường thẳng có hệ số góc a > 0 thì góc tạo bởi đường thẳng với trục Ox (chiều dương) là:",
        "options": [
          "Góc nhọn (< 90°)",
          "Góc tù (> 90°)",
          "Góc vuông (90°)",
          "Góc bẹt (180°)"
        ],
        "correctIndex": 0,
        "explanation": "Khi a > 0, đường thẳng đi lên từ trái sang phải tạo với tia Ox một góc nhọn.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường thẳng có hệ số góc a < 0 tạo với tia Ox một:",
          "options": [
            "Góc tù",
            "Góc nhọn",
            "Góc vuông",
            "Góc 0°"
          ],
          "correctIndex": 0,
          "explanation": "Khi a < 0 thì góc tạo với Ox là góc tù."
        }
      },
      {
        "id": "k2-b29-q3",
        "question": "Hai đường thẳng y = ax + b và y = a'x + b' song song với nhau khi và chỉ khi:",
        "options": [
          "a = a' và b ≠ b'",
          "a = a' và b = b'",
          "a ≠ a'",
          "a · a' = -1"
        ],
        "correctIndex": 0,
        "explanation": "Song song khi hệ số góc bằng nhau và tung độ gốc khác nhau.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai đường thẳng trùng nhau khi:",
          "options": [
            "a = a' và b = b'",
            "a = a' và b ≠ b'",
            "a ≠ a'",
            "a = -a'"
          ],
          "correctIndex": 0,
          "explanation": "Cùng hệ số góc và cùng tung độ gốc."
        }
      },
      {
        "id": "k2-b29-q4",
        "question": "Hai đường thẳng y = ax + b và y = a'x + b' cắt nhau khi và chỉ khi:",
        "options": [
          "a ≠ a'",
          "a = a'",
          "b ≠ b'",
          "b = b'"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường thẳng cắt nhau khi hai hệ số góc khác nhau (a ≠ a').",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cặp đường thẳng nào sau đây cắt nhau?",
          "options": [
            "y = 2x + 1 và y = 3x - 1",
            "y = 2x + 1 và y = 2x - 3",
            "y = -x và y = -x + 4",
            "y = 5x và y = 5x + 2"
          ],
          "correctIndex": 0,
          "explanation": "a = 2 khác a' = 3 nên hai đường thẳng cắt nhau."
        }
      },
      {
        "id": "k2-b29-q5",
        "question": "Tìm m để hai đường thẳng y = (m + 1)x + 2 và y = 3x - 1 song song với nhau:",
        "options": [
          "m = 2",
          "m = 3",
          "m = 1",
          "m = -2"
        ],
        "correctIndex": 0,
        "explanation": "m + 1 = 3 => m = 2 (khi đó 2 ≠ -1 nên song song).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tìm m để y = mx - 2 song song với y = 4x + 1:",
          "options": [
            "m = 4",
            "m = -4",
            "m = 2",
            "m = 1"
          ],
          "correctIndex": 0,
          "explanation": "m = 4."
        }
      },
      {
        "id": "k2-b29-q6",
        "question": "Đường thẳng y = ax + 3 đi qua điểm A(1; 5). Hệ số góc a bằng:",
        "options": [
          "2",
          "3",
          "5",
          "8"
        ],
        "correctIndex": 0,
        "explanation": "Thay x = 1, y = 5: 5 = a(1) + 3 => a = 2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường thẳng y = ax - 1 đi qua B(2; 3). Hệ số góc a là:",
          "options": [
            "2",
            "1",
            "4",
            "3"
          ],
          "correctIndex": 0,
          "explanation": "3 = 2a - 1 => 2a = 4 => a = 2."
        }
      },
      {
        "id": "k2-b29-q7",
        "question": "Hai đường thẳng vuông góc với nhau khi tích hai hệ số góc bằng:",
        "options": [
          "-1",
          "1",
          "0",
          "2"
        ],
        "correctIndex": 0,
        "explanation": "Điều kiện vuông góc: a · a' = -1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường thẳng vuông góc với đường thẳng y = 2x + 1 có hệ số góc là:",
          "options": [
            "-1/2",
            "1/2",
            "-2",
            "2"
          ],
          "correctIndex": 0,
          "explanation": "a · 2 = -1 => a = -1/2."
        }
      },
      {
        "id": "k2-b29-q8",
        "question": "Tung độ gốc của đường thẳng y = -5x + 8 là:",
        "options": [
          "8",
          "-5",
          "5",
          "-8"
        ],
        "correctIndex": 0,
        "explanation": "Tung độ gốc là b = 8 (tọa độ giao điểm với trục tung là (0; 8)).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tung độ gốc của y = 4x - 3 là:",
          "options": [
            "-3",
            "3",
            "4",
            "-4"
          ],
          "correctIndex": 0,
          "explanation": "b = -3."
        }
      },
      {
        "id": "k2-b29-q9",
        "question": "Cho ba đường thẳng: (d1): y = 2x, (d2): y = 2x + 3, (d3): y = -x + 1. Khẳng định nào đúng?",
        "options": [
          "d1 song song với d2",
          "d1 cắt d2",
          "d1 song song với d3",
          "d2 song song với d3"
        ],
        "correctIndex": 0,
        "explanation": "d1 và d2 có cùng hệ số góc a = 2 và b khác nhau (0 ≠ 3) nên song song.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường thẳng nào cắt cả d1 và d2?",
          "options": [
            "d3 (vì hệ số góc -1 khác 2)",
            "y = 2x - 5",
            "y = 2x + 10",
            "Không có"
          ],
          "correctIndex": 0,
          "explanation": "d3 có hệ số góc a = -1 ≠ 2 nên cắt cả d1 và d2."
        }
      },
      {
        "id": "k2-b29-q10",
        "question": "Góc tạo bởi đường thẳng y = x + 1 và trục Ox có số đo là:",
        "options": [
          "45°",
          "30°",
          "60°",
          "90°"
        ],
        "correctIndex": 0,
        "explanation": "Hệ số góc a = tan(α) = 1 => α = 45°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Góc tạo bởi đường thẳng y = -x + 2 và chiều dương trục Ox là:",
          "options": [
            "135°",
            "45°",
            "90°",
            "120°"
          ],
          "correctIndex": 0,
          "explanation": "180° - 45° = 135°."
        }
      }
    ]
  }
];
