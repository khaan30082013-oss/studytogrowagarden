import { Lesson } from '../../types';

export const CHAPTER_8_LESSONS: Lesson[] = [
  {
    "id": "k2-b30",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 8,
    "chapterTitle": "Chương VIII: Mở đầu về tính xác suất của biến cố",
    "lessonNumber": 30,
    "title": "Bài 30. Kết quả có thể và kết quả thuận lợi",
    "textbookRef": "Toán 8 KNTT - Bài 30",
    "summary": "• Phép thử ngẫu nhiên: Hành động hay thực nghiệm mà kết quả của nó không thể biết trước.\\n• Kết quả có thể: Tất cả các kết quả có thể xảy ra của một phép thử.\\n• Biến cố: Một sự kiện liên quan đến phép thử mà ta có thể xác định được nó xảy ra hay không xảy ra.\\n• Kết quả thuận lợi cho biến cố: Là những kết quả của phép thử làm cho biến cố đó xảy ra.",
    "keyFormulas": [
      "Không gian kết quả có thể: tập hợp tất cả các kết quả",
      "Kết quả thuận lợi: tập con các kết quả làm biến cố xảy ra"
    ],
    "questions": [
      {
        "id": "k2-b30-q1",
        "question": "Gieo một con xúc xắc 6 mặt cân đối. Có bao nhiêu kết quả có thể xảy ra?",
        "options": [
          "6 kết quả (xuất hiện mặt 1, 2, 3, 4, 5, 6 chấm)",
          "5 kết quả",
          "12 kết quả",
          "1 kết quả"
        ],
        "correctIndex": 0,
        "explanation": "Xúc xắc có 6 mặt đánh số từ 1 đến 6 nên có 6 kết quả có thể.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tung một đồng xu cân đối, có bao nhiêu kết quả có thể xảy ra?",
          "options": [
            "2 kết quả (Mặt sấp S hoặc Mặt ngửa N)",
            "1 kết quả",
            "4 kết quả",
            "Vô số"
          ],
          "correctIndex": 0,
          "explanation": "Có 2 kết quả: Sấp (S) hoặc Ngửa (N)."
        }
      },
      {
        "id": "k2-b30-q2",
        "question": "Gieo một con xúc xắc 6 mặt. Số kết quả thuận lợi cho biến cố \"Xuất hiện mặt có số chấm là số chẵn\" là:",
        "options": [
          "3 kết quả (mặt 2, 4, 6 chấm)",
          "2 kết quả",
          "4 kết quả",
          "6 kết quả"
        ],
        "correctIndex": 0,
        "explanation": "Các số chẵn từ 1 đến 6 là {2, 4, 6} => Có 3 kết quả thuận lợi.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số kết quả thuận lợi cho biến cố \"Xuất hiện mặt lẻ\" khi gieo xúc xắc là:",
          "options": [
            "3 kết quả (1, 3, 5)",
            "2 kết quả",
            "4 kết quả",
            "1 kết quả"
          ],
          "correctIndex": 0,
          "explanation": "Các mặt {1, 3, 5} có 3 kết quả."
        }
      },
      {
        "id": "k2-b30-q3",
        "question": "Gieo một con xúc xắc. Biến cố nào sau đây là biến cố chắc chắn?",
        "options": [
          "Số chấm xuất hiện nhỏ hơn 7",
          "Số chấm xuất hiện là số 6",
          "Số chấm xuất hiện lớn hơn 3",
          "Số chấm xuất hiện là số 0"
        ],
        "correctIndex": 0,
        "explanation": "Xúc xắc chỉ có từ 1 đến 6 chấm nên số chấm luôn nhỏ hơn 7 (chắc chắn xảy ra).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Biến cố nào sau đây là biến cố không thể khi gieo xúc xắc?",
          "options": [
            "Xuất hiện mặt 7 chấm",
            "Xuất hiện mặt 1 chấm",
            "Xuất hiện số chẵn",
            "Xuất hiện số nguyên tố"
          ],
          "correctIndex": 0,
          "explanation": "Không có mặt nào 7 chấm nên đây là biến cố không thể."
        }
      },
      {
        "id": "k2-b30-q4",
        "question": "Một hộp có 4 quả bóng xanh, đỏ, tím, vàng. Lấy ngẫu nhiên 1 quả bóng. Có bao nhiêu kết quả có thể?",
        "options": [
          "4 kết quả",
          "1 kết quả",
          "3 kết quả",
          "6 kết quả"
        ],
        "correctIndex": 0,
        "explanation": "Có 4 quả bóng khác nhau nên có 4 kết quả có thể.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Rút ngẫu nhiên một thẻ từ hộp gồm các thẻ đánh số 1, 2, 3, 4, 5. Số kết quả có thể là:",
          "options": [
            "5 kết quả",
            "1 kết quả",
            "10 kết quả",
            "4 kết quả"
          ],
          "correctIndex": 0,
          "explanation": "Có 5 thẻ nên có 5 kết quả có thể."
        }
      },
      {
        "id": "k2-b30-q5",
        "question": "Rút một thẻ từ hộp chứa 10 thẻ đánh số từ 1 đến 10. Số kết quả thuận lợi cho biến cố \"Số trên thẻ chia hết cho 3\" là:",
        "options": [
          "3 kết quả (3, 6, 9)",
          "4 kết quả",
          "2 kết quả",
          "5 kết quả"
        ],
        "correctIndex": 0,
        "explanation": "Các số chia hết cho 3 từ 1 đến 10 là 3, 6, 9 (3 kết quả).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số kết quả thuận lợi cho biến cố \"Số trên thẻ là số nguyên tố\" từ 1 đến 10 là:",
          "options": [
            "4 kết quả (2, 3, 5, 7)",
            "5 kết quả",
            "3 kết quả",
            "2 kết quả"
          ],
          "correctIndex": 0,
          "explanation": "Các số nguyên tố là 2, 3, 5, 7 (4 kết quả)."
        }
      },
      {
        "id": "k2-b30-q6",
        "question": "Gieo đồng thời hai đồng xu cân đối. Tập hợp các kết quả có thể là:",
        "options": [
          "{SS, SN, NS, NN}",
          "{SS, NN}",
          "{S, N}",
          "{SS, SN, NN}"
        ],
        "correctIndex": 0,
        "explanation": "Mỗi đồng xu có 2 khả năng, 2 đồng xu có 2 × 2 = 4 kết quả: {SS, SN, NS, NN}.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số kết quả có thể khi tung 2 đồng xu là:",
          "options": [
            "4",
            "2",
            "3",
            "8"
          ],
          "correctIndex": 0,
          "explanation": "2 × 2 = 4 kết quả."
        }
      },
      {
        "id": "k2-b30-q7",
        "question": "Khi tung 2 đồng xu, số kết quả thuận lợi cho biến cố \"Có ít nhất một mặt sấp\" là:",
        "options": [
          "3 (SS, SN, NS)",
          "2 (SN, NS)",
          "1 (SS)",
          "4"
        ],
        "correctIndex": 0,
        "explanation": "Có 3 trường hợp thỏa mãn có ít nhất 1 mặt sấp: SS, SN, NS.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số kết quả thuận lợi cho \"Cả hai mặt đều ngửa\" là:",
          "options": [
            "1 (NN)",
            "2",
            "3",
            "4"
          ],
          "correctIndex": 0,
          "explanation": "Chỉ có 1 kết quả duy nhất là NN."
        }
      },
      {
        "id": "k2-b30-q8",
        "question": "Một túi chứa 3 viên bi xanh và 2 viên bi đỏ. Lấy ngẫu nhiên 1 viên bi. Số kết quả có thể là:",
        "options": [
          "5 kết quả",
          "2 kết quả",
          "3 kết quả",
          "6 kết quả"
        ],
        "correctIndex": 0,
        "explanation": "Tổng cộng có 3 + 2 = 5 viên bi phân biệt, nên có 5 kết quả có thể.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số kết quả thuận lợi cho biến cố \"Lấy được bi đỏ\" là:",
          "options": [
            "2 kết quả",
            "3 kết quả",
            "5 kết quả",
            "1 kết quả"
          ],
          "correctIndex": 0,
          "explanation": "Có 2 viên bi đỏ nên có 2 kết quả thuận lợi."
        }
      },
      {
        "id": "k2-b30-q9",
        "question": "Chọn ngẫu nhiên một chữ cái trong từ \"HOC TAP\". Có bao nhiêu kết quả có thể (tính cả dấu cách hoặc chỉ chữ cái)? Nếu chỉ chọn chữ cái:",
        "options": [
          "6 kết quả (H, O, C, T, A, P)",
          "7 kết quả",
          "5 kết quả",
          "8 kết quả"
        ],
        "correctIndex": 0,
        "explanation": "Các chữ cái là H, O, C, T, A, P (6 chữ cái đôi một khác nhau).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số kết quả có thể chọn một chữ cái trong từ \"TOAN\":",
          "options": [
            "4 (T, O, A, N)",
            "3",
            "5",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "Có 4 chữ cái phân biệt."
        }
      },
      {
        "id": "k2-b30-q10",
        "question": "Phép thử \"Chọn ngẫu nhiên một tháng trong năm\". Số kết quả thuận lợi cho biến cố \"Tháng có 31 ngày\" là:",
        "options": [
          "7 kết quả (Tháng 1, 3, 5, 7, 8, 10, 12)",
          "6 kết quả",
          "4 kết quả",
          "5 kết quả"
        ],
        "correctIndex": 0,
        "explanation": "Các tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12 (7 tháng).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số kết quả thuận lợi cho \"Tháng có 30 ngày\" là:",
          "options": [
            "4 kết quả (Tháng 4, 6, 9, 11)",
            "5 kết quả",
            "7 kết quả",
            "6 kết quả"
          ],
          "correctIndex": 0,
          "explanation": "Có 4 tháng có 30 ngày (4, 6, 9, 11)."
        }
      }
    ]
  },
  {
    "id": "k2-b31",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 8,
    "chapterTitle": "Chương VIII: Mở đầu về tính xác suất của biến cố",
    "lessonNumber": 31,
    "title": "Bài 31. Cách tính xác suất của biến cố bằng tỉ số",
    "textbookRef": "Toán 8 KNTT - Bài 31",
    "summary": "• Khi tất cả các kết quả có thể của một phép thử là đồng khả năng, xác suất của biến cố E được tính bằng công thức:\\n  P(E) = n(E) / n\\n  trong đó:\\n  n(E) là số kết quả thuận lợi cho biến cố E;\\n  n là tổng số kết quả có thể của phép thử.\\n• Xác suất của biến cố chắc chắn bằng 1.\\n• Xác suất của biến cố không thể bằng 0.\\n• 0 ≤ P(E) ≤ 1 với mọi biến cố E.",
    "keyFormulas": [
      "P(E) = n(E) / n",
      "0 ≤ P(E) ≤ 1",
      "P(Chắc chắn) = 1, P(Không thể) = 0"
    ],
    "questions": [
      {
        "id": "k2-b31-q1",
        "question": "Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt 5 chấm là:",
        "options": [
          "1/6",
          "5/6",
          "1/2",
          "1/5"
        ],
        "correctIndex": 0,
        "explanation": "Có 1 kết quả thuận lợi trên tổng số 6 kết quả có thể: P = 1/6.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất để xuất hiện mặt 1 chấm khi gieo xúc xắc là:",
          "options": [
            "1/6",
            "1/2",
            "1/3",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "P = 1/6."
        }
      },
      {
        "id": "k2-b31-q2",
        "question": "Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
        "options": [
          "1/2 (hay 3/6)",
          "1/3",
          "1/6",
          "2/3"
        ],
        "correctIndex": 0,
        "explanation": "Số chẵn là {2, 4, 6} (3 kết quả) => P = 3/6 = 1/2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất xuất hiện mặt lẻ khi gieo xúc xắc là:",
          "options": [
            "1/2",
            "1/3",
            "1/6",
            "2/3"
          ],
          "correctIndex": 0,
          "explanation": "P = 3/6 = 1/2."
        }
      },
      {
        "id": "k2-b31-q3",
        "question": "Tung một đồng xu cân đối. Xác suất để xuất hiện mặt sấp là:",
        "options": [
          "1/2",
          "1",
          "1/4",
          "0"
        ],
        "correctIndex": 0,
        "explanation": "Đồng xu có 2 mặt đồng khả năng => P = 1/2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất xuất hiện mặt ngửa là:",
          "options": [
            "1/2",
            "1/4",
            "3/4",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "P = 1/2."
        }
      },
      {
        "id": "k2-b31-q4",
        "question": "Một hộp có 3 quả bóng đỏ và 7 quả bóng vàng có cùng kích thước. Lấy ngẫu nhiên 1 quả bóng. Xác suất lấy được bóng đỏ là:",
        "options": [
          "3/10",
          "7/10",
          "3/7",
          "1/3"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số bóng = 3 + 7 = 10. Số bóng đỏ = 3 => P = 3/10 = 0.3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất lấy được quả bóng vàng là:",
          "options": [
            "7/10",
            "3/10",
            "7/3",
            "1/7"
          ],
          "correctIndex": 0,
          "explanation": "P = 7/10 = 0.7."
        }
      },
      {
        "id": "k2-b31-q5",
        "question": "Gieo một con xúc xắc 6 mặt. Xác suất xuất hiện mặt có số chấm lớn hơn 4 là:",
        "options": [
          "1/3 (hay 2/6)",
          "1/2",
          "2/3",
          "1/6"
        ],
        "correctIndex": 0,
        "explanation": "Các mặt lớn hơn 4 là {5, 6} (2 mặt) => P = 2/6 = 1/3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất xuất hiện số chấm nhỏ hơn hoặc bằng 2 là:",
          "options": [
            "1/3",
            "1/2",
            "1/6",
            "2/3"
          ],
          "correctIndex": 0,
          "explanation": "Các mặt {1, 2} có 2 mặt => 2/6 = 1/3."
        }
      },
      {
        "id": "k2-b31-q6",
        "question": "Rút ngẫu nhiên một thẻ từ hộp có 20 thẻ đánh số từ 1 đến 20. Xác suất rút được thẻ ghi số chia hết cho 5 là:",
        "options": [
          "1/5 (hay 4/20)",
          "1/4",
          "1/2",
          "1/10"
        ],
        "correctIndex": 0,
        "explanation": "Các số chia hết cho 5 là {5, 10, 15, 20} (4 số) => P = 4/20 = 1/5.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất rút được số chia hết cho 10 là:",
          "options": [
            "1/10 (hay 2/20)",
            "1/5",
            "1/20",
            "2/10"
          ],
          "correctIndex": 0,
          "explanation": "{10, 20} có 2 số => 2/20 = 1/10."
        }
      },
      {
        "id": "k2-b31-q7",
        "question": "Xác suất của một biến cố không thể xảy ra luôn bằng:",
        "options": [
          "0",
          "1",
          "0.5",
          "-1"
        ],
        "correctIndex": 0,
        "explanation": "Biến cố không thể có số kết quả thuận lợi bằng 0 nên P = 0.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất của biến cố chắc chắn luôn bằng:",
          "options": [
            "1",
            "0",
            "100",
            "0.5"
          ],
          "correctIndex": 0,
          "explanation": "Biến cố chắc chắn có xác suất bằng 1 (hoặc 100%)."
        }
      },
      {
        "id": "k2-b31-q8",
        "question": "Gieo đồng thời hai đồng xu cân đối. Xác suất để cả hai đồng xu đều xuất hiện mặt ngửa là:",
        "options": [
          "1/4",
          "1/2",
          "3/4",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số kết quả là 4 (SS, SN, NS, NN). Chỉ có 1 kết quả NN => P = 1/4.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất để có ít nhất một mặt ngửa là:",
          "options": [
            "3/4",
            "1/2",
            "1/4",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "{NN, NS, SN} có 3 kết quả => 3/4."
        }
      },
      {
        "id": "k2-b31-q9",
        "question": "Một lớp có 18 bạn nam và 22 bạn nữ. Chọn ngẫu nhiên một bạn làm lớp trưởng. Xác suất bạn được chọn là nữ là:",
        "options": [
          "11/20 (hay 22/40)",
          "9/20",
          "22/18",
          "1/2"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số học sinh = 18 + 22 = 40. Số nữ = 22 => P = 22/40 = 11/20 = 55%.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất bạn được chọn là nam là:",
          "options": [
            "9/20 (hay 18/40)",
            "11/20",
            "18/22",
            "1/2"
          ],
          "correctIndex": 0,
          "explanation": "18/40 = 9/20 = 45%."
        }
      },
      {
        "id": "k2-b31-q10",
        "question": "Nếu biến cố A có xác suất P(A) = 0.35 thì xác suất của biến cố \"A không xảy ra\" là:",
        "options": [
          "0.65",
          "0.35",
          "1.35",
          "-0.35"
        ],
        "correctIndex": 0,
        "explanation": "P(không xảy ra A) = 1 - P(A) = 1 - 0.35 = 0.65.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu xác suất mưa là 40% (0.4) thì xác suất không mưa là:",
          "options": [
            "60% (0.6)",
            "40%",
            "100%",
            "20%"
          ],
          "correctIndex": 0,
          "explanation": "100% - 40% = 60%."
        }
      }
    ]
  },
  {
    "id": "k2-b32",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 8,
    "chapterTitle": "Chương VIII: Mở đầu về tính xác suất của biến cố",
    "lessonNumber": 32,
    "title": "Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất lí thuyết",
    "textbookRef": "Toán 8 KNTT - Bài 32",
    "summary": "• Xác suất thực nghiệm của biến cố E được tính bằng: (Số lần biến cố E xảy ra) / (Tổng số lần thực hiện phép thử).\\n• Khi số lần thực hiện phép thử càng lớn thì xác suất thực nghiệm của biến cố sẽ càng gần với xác suất lí thuyết của biến cố đó.\\n• Ứng dụng: Dùng xác suất lí thuyết để dự đoán số lần xuất hiện của biến cố trong thực tế, hoặc dùng thực nghiệm để ước lượng xác suất.",
    "keyFormulas": [
      "Xác suất thực nghiệm = k / n",
      "Khi n rất lớn: k / n ≈ P(E)",
      "Số lần dự đoán xuất hiện = n · P(E)"
    ],
    "questions": [
      {
        "id": "k2-b32-q1",
        "question": "Tung một đồng xu 100 lần, thấy có 48 lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt ngửa là:",
        "options": [
          "48/100 = 0.48",
          "52/100 = 0.52",
          "1/2 = 0.5",
          "48/52"
        ],
        "correctIndex": 0,
        "explanation": "Xác suất thực nghiệm = 48 / 100 = 0.48.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Gieo đồng xu 50 lần có 26 lần mặt sấp. Xác suất thực nghiệm mặt sấp là:",
          "options": [
            "26/50 = 0.52",
            "24/50 = 0.48",
            "0.5",
            "26/24"
          ],
          "correctIndex": 0,
          "explanation": "26 / 50 = 0.52."
        }
      },
      {
        "id": "k2-b32-q2",
        "question": "Mối quan hệ giữa xác suất thực nghiệm và xác suất lí thuyết là:",
        "options": [
          "Khi số phép thử lặp lại rất lớn, xác suất thực nghiệm dao động xung quanh và xấp xỉ bằng xác suất lí thuyết",
          "Xác suất thực nghiệm luôn luôn bằng xác suất lí thuyết",
          "Xác suất thực nghiệm luôn lớn hơn xác suất lí thuyết",
          "Không có liên hệ gì"
        ],
        "correctIndex": 0,
        "explanation": "Theo quy luật số lớn, thực nghiệm tiệm cận lí thuyết khi số lần thử n rất lớn.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Để xác suất thực nghiệm càng sát với xác suất lí thuyết, ta cần:",
          "options": [
            "Thực hiện phép thử càng nhiều lần càng tốt",
            "Chỉ thực hiện 1 lần duy nhất",
            "Đổi dụng cụ thử",
            "Lấy kết quả đầu tiên"
          ],
          "correctIndex": 0,
          "explanation": "Tăng số lần lặp lại thí nghiệm."
        }
      },
      {
        "id": "k2-b32-q3",
        "question": "Xác suất lí thuyết xuất hiện mặt 6 chấm khi gieo xúc xắc là 1/6. Nếu gieo xúc xắc 600 lần, số lần dự đoán xuất hiện mặt 6 chấm là khoảng:",
        "options": [
          "100 lần",
          "60 lần",
          "200 lần",
          "50 lần"
        ],
        "correctIndex": 0,
        "explanation": "Số lần dự đoán = 600 × (1/6) = 100 lần.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tung đồng xu 200 lần, số lần xuất hiện mặt ngửa dự đoán khoảng:",
          "options": [
            "100 lần",
            "50 lần",
            "150 lần",
            "200 lần"
          ],
          "correctIndex": 0,
          "explanation": "200 × (1/2) = 100 lần."
        }
      },
      {
        "id": "k2-b32-q4",
        "question": "Nhà toán học Pearson đã tung đồng xu 24000 lần và thu được 12012 lần mặt ngửa. Xác suất thực nghiệm là:",
        "options": [
          "12012 / 24000 = 0.5005",
          "0.5",
          "0.4995",
          "0.52"
        ],
        "correctIndex": 0,
        "explanation": "12012 / 24000 = 0.5005, cực kì gần với xác suất lí thuyết 0.5.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Buffon tung đồng xu 4040 lần có 2048 lần mặt ngửa. Tỉ số thực nghiệm xấp xỉ:",
          "options": [
            "0.5069",
            "0.4040",
            "0.6",
            "0.45"
          ],
          "correctIndex": 0,
          "explanation": "2048 / 4040 ≈ 0.5069."
        }
      },
      {
        "id": "k2-b32-q5",
        "question": "Kiểm tra 500 bóng đèn của một nhà máy thì thấy có 5 bóng bị hỏng. Xác suất thực nghiệm gặp bóng đèn bị hỏng là:",
        "options": [
          "5/500 = 1% (0.01)",
          "5/500 = 10%",
          "0.005",
          "5%"
        ],
        "correctIndex": 0,
        "explanation": "5 / 500 = 1/100 = 0.01 = 1%.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu nhà máy sản xuất 10000 bóng đèn thì dự đoán có khoảng bao nhiêu bóng hỏng?",
          "options": [
            "100 bóng",
            "50 bóng",
            "10 bóng",
            "500 bóng"
          ],
          "correctIndex": 0,
          "explanation": "10000 × 1% = 100 bóng hỏng."
        }
      },
      {
        "id": "k2-b32-q6",
        "question": "Gieo một con xúc xắc 120 lần, số lần xuất hiện mặt chẵn dự đoán khoảng bao nhiêu lần?",
        "options": [
          "60 lần",
          "40 lần",
          "20 lần",
          "80 lần"
        ],
        "correctIndex": 0,
        "explanation": "120 × (1/2) = 60 lần.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số lần xuất hiện mặt có số chấm chia hết cho 3 (3 và 6) dự đoán khoảng:",
          "options": [
            "40 lần",
            "60 lần",
            "30 lần",
            "20 lần"
          ],
          "correctIndex": 0,
          "explanation": "120 × (2/6) = 40 lần."
        }
      },
      {
        "id": "k2-b32-q7",
        "question": "Bắn 50 phát súng vào bia trúng đích 42 phát. Xác suất thực nghiệm bắn trúng đích của xạ thủ là:",
        "options": [
          "42/50 = 84% (0.84)",
          "42/50 = 42%",
          "8/50 = 16%",
          "0.5"
        ],
        "correctIndex": 0,
        "explanation": "42 / 50 = 0.84 = 84%.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Xác suất thực nghiệm bắn trượt đích là:",
          "options": [
            "8/50 = 16% (0.16)",
            "84%",
            "8%",
            "42%"
          ],
          "correctIndex": 0,
          "explanation": "(50 - 42) / 50 = 8/50 = 16%."
        }
      },
      {
        "id": "k2-b32-q8",
        "question": "Một hạt giống có xác suất nảy mầm là 85%. Nếu gieo 200 hạt giống thì dự kiến sẽ có bao nhiêu hạt nảy mầm?",
        "options": [
          "170 hạt",
          "150 hạt",
          "185 hạt",
          "190 hạt"
        ],
        "correctIndex": 0,
        "explanation": "200 × 85% = 200 × 0.85 = 170 hạt giống.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu gieo 500 hạt giống thì dự đoán số hạt nảy mầm là:",
          "options": [
            "425 hạt",
            "400 hạt",
            "450 hạt",
            "350 hạt"
          ],
          "correctIndex": 0,
          "explanation": "500 × 85% = 425 hạt."
        }
      },
      {
        "id": "k2-b32-q9",
        "question": "Khi tung xúc xắc 10 lần mà không có lần nào ra mặt 6 chấm, ta kết luận xác suất mặt 6 chấm bằng 0 là:",
        "options": [
          "Sai, vì số lần thử quá ít nên xác suất thực nghiệm chưa phản ánh đúng xác suất lí thuyết",
          "Đúng hoàn toàn",
          "Xúc xắc bị lỗi",
          "Không thể xác định"
        ],
        "correctIndex": 0,
        "explanation": "10 lần là quá ít, quy luật thống kê chỉ đúng khi số phép thử đủ lớn.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tung đồng xu 3 lần liên tiếp đều ra ngửa, lần thứ 4 xác suất ra sấp là:",
          "options": [
            "Vẫn là 1/2",
            "Bằng 1",
            "Bằng 0",
            "Bằng 3/4"
          ],
          "correctIndex": 0,
          "explanation": "Các lần tung độc lập với nhau, xác suất mỗi lần tung vẫn là 1/2."
        }
      },
      {
        "id": "k2-b32-q10",
        "question": "Ý nghĩa thực tiễn lớn nhất của xác suất thực nghiệm là:",
        "options": [
          "Ước lượng xác suất trong các tình huống thực tế không thể tính bằng lí thuyết thuần túy",
          "Thay thế hoàn toàn toán học",
          "Làm trò chơi may rủi",
          "Tìm nghiệm phương trình"
        ],
        "correctIndex": 0,
        "explanation": "Dùng để ước lượng tỉ lệ trong y tế, bảo hiểm, khí tượng, nông nghiệp khi không có công thức lí thuyết chính xác.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Dự báo thời tiết thông báo xác suất mưa ngày mai là 70% có nghĩa là:",
          "options": [
            "Trong các ngày có điều kiện tương tự thì có khoảng 70% số ngày sẽ có mưa",
            "Mưa 70% diện tích",
            "Mưa trong 70% thời gian của ngày",
            "Chắc chắn mưa"
          ],
          "correctIndex": 0,
          "explanation": "Tần suất xuất hiện mưa dựa trên mô hình dữ liệu thống kê."
        }
      }
    ]
  }
];
