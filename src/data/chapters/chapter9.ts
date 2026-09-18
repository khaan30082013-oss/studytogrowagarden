import { Lesson } from '../../types';

export const CHAPTER_9_LESSONS: Lesson[] = [
  {
    "id": "k2-b33",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 9,
    "chapterTitle": "Chương IX: Tam giác đồng dạng",
    "lessonNumber": 33,
    "title": "Bài 33. Hai tam giác đồng dạng",
    "textbookRef": "Toán 8 KNTT - Bài 33",
    "summary": "• Định nghĩa: Tam giác A'B'C' gọi là đồng dạng với tam giác ABC (kí hiệu: ΔA'B'C' ∽ ΔABC) nếu:\\n  Â' = Â, B̂' = B̂, Ĉ' = Ĉ\\n  và A'B'/AB = B'C'/BC = C'A'/CA = k (k gọi là tỉ số đồng dạng).\\n• Tính chất: Mỗi tam giác đồng dạng với chính nó theo tỉ số k = 1.\\n• Nếu ΔA'B'C' ∽ ΔABC theo tỉ số k thì ΔABC ∽ ΔA'B'C' theo tỉ số 1/k.\\n• Tỉ số chu vi của hai tam giác đồng dạng bằng tỉ số đồng dạng k.\\n• Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng k².",
    "keyFormulas": [
      "ΔA'B'C' ∽ ΔABC theo tỉ số k",
      "Tỉ số chu vi: P' / P = k",
      "Tỉ số diện tích: S' / S = k²"
    ],
    "questions": [
      {
        "id": "k2-b33-q1",
        "question": "Nếu ΔABC ∽ ΔA'B'C' theo tỉ số đồng dạng k = 2/3 thì ΔA'B'C' ∽ ΔABC theo tỉ số đồng dạng là:",
        "options": [
          "3/2",
          "2/3",
          "4/9",
          "9/4"
        ],
        "correctIndex": 0,
        "explanation": "Tỉ số nghịch đảo: 1 / (2/3) = 3/2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu ΔMNP ∽ ΔDEF theo tỉ số k = 4 thì ΔDEF ∽ ΔMNP theo tỉ số:",
          "options": [
            "1/4",
            "4",
            "16",
            "1/16"
          ],
          "correctIndex": 0,
          "explanation": "Tỉ số là 1/k = 1/4."
        }
      },
      {
        "id": "k2-b33-q2",
        "question": "Hai tam giác bằng nhau thì đồng dạng với nhau theo tỉ số đồng dạng là:",
        "options": [
          "k = 1",
          "k = 0",
          "k = 2",
          "Tùy ý"
        ],
        "correctIndex": 0,
        "explanation": "Các cạnh tương ứng bằng nhau nên tỉ số các cạnh là 1/1 = 1.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai tam giác đồng dạng có nhất thiết phải bằng nhau không?",
          "options": [
            "Không, chúng chỉ bằng nhau khi k = 1",
            "Luôn luôn bằng nhau",
            "Bằng nhau khi các góc bằng 60°",
            "Có"
          ],
          "correctIndex": 0,
          "explanation": "Chỉ bằng nhau khi tỉ số đồng dạng k = 1."
        }
      },
      {
        "id": "k2-b33-q3",
        "question": "Cho ΔABC ∽ ΔDEF theo tỉ số k = 3. Biết chu vi ΔDEF là 15 cm. Chu vi ΔABC là:",
        "options": [
          "45 cm",
          "5 cm",
          "15 cm",
          "135 cm"
        ],
        "correctIndex": 0,
        "explanation": "P(ABC) / P(DEF) = k = 3 => P(ABC) = 3 × 15 = 45 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chu vi ΔA'B'C' là 20 cm, ΔA'B'C' ∽ ΔABC theo tỉ số k = 1/2. Chu vi ΔABC là:",
          "options": [
            "40 cm",
            "10 cm",
            "20 cm",
            "80 cm"
          ],
          "correctIndex": 0,
          "explanation": "P(ABC) = 20 / (1/2) = 40 cm."
        }
      },
      {
        "id": "k2-b33-q4",
        "question": "Nếu ΔABC ∽ ΔMNP theo tỉ số k = 2 thì tỉ số diện tích S(ABC) / S(MNP) bằng:",
        "options": [
          "4",
          "2",
          "8",
          "1/4"
        ],
        "correctIndex": 0,
        "explanation": "Tỉ số diện tích bằng bình phương tỉ số đồng dạng: k² = 2² = 4.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tỉ số diện tích của hai tam giác đồng dạng có tỉ số k = 1/3 là:",
          "options": [
            "1/9",
            "1/3",
            "1/6",
            "9"
          ],
          "correctIndex": 0,
          "explanation": "(1/3)² = 1/9."
        }
      },
      {
        "id": "k2-b33-q5",
        "question": "Cho ΔABC ∽ ΔDEF có Â = 60°, B̂ = 70°. Số đo của góc F̂ là:",
        "options": [
          "50°",
          "60°",
          "70°",
          "130°"
        ],
        "correctIndex": 0,
        "explanation": "Ĉ = 180° - (60° + 70°) = 50°. Vì đồng dạng nên F̂ = Ĉ = 50°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho ΔABC ∽ ΔXYZ có Â = 80°, B̂ = 40°. Góc Ẑ bằng:",
          "options": [
            "60°",
            "80°",
            "40°",
            "120°"
          ],
          "correctIndex": 0,
          "explanation": "180° - (80° + 40°) = 60°."
        }
      },
      {
        "id": "k2-b33-q6",
        "question": "Định lí cơ bản: Nếu một đường thẳng cắt hai cạnh của tam giác và song song với cạnh thứ ba thì:",
        "options": [
          "Nó tạo thành một tam giác mới đồng dạng với tam giác đã cho",
          "Nó chia tam giác thành hai phần bằng nhau",
          "Nó tạo thành tam giác vuông",
          "Nó tạo thành tam giác đều"
        ],
        "correctIndex": 0,
        "explanation": "MN // BC (M ∈ AB, N ∈ AC) => ΔAMN ∽ ΔABC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho tam giác ABC, DE // BC (D ∈ AB, E ∈ AC). Khẳng định nào đúng?",
          "options": [
            "ΔADE ∽ ΔABC",
            "ΔADE = ΔABC",
            "ΔBDE ∽ ΔABC",
            "AD = AE"
          ],
          "correctIndex": 0,
          "explanation": "ΔADE ∽ ΔABC theo định lí cơ bản."
        }
      },
      {
        "id": "k2-b33-q7",
        "question": "Cho ΔABC ∽ ΔA'B'C' theo tỉ số k1 và ΔA'B'C' ∽ ΔA\"B\"C\" theo tỉ số k2. Thì ΔABC ∽ ΔA\"B\"C\" theo tỉ số:",
        "options": [
          "k1 · k2",
          "k1 + k2",
          "k1 / k2",
          "k1 - k2"
        ],
        "correctIndex": 0,
        "explanation": "Tính chất bắc cầu: tỉ số đồng dạng là k1 · k2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu k1 = 2 và k2 = 3 thì tỉ số giữa ΔABC và ΔA\"B\"C\" là:",
          "options": [
            "6",
            "5",
            "2/3",
            "1"
          ],
          "correctIndex": 0,
          "explanation": "2 · 3 = 6."
        }
      },
      {
        "id": "k2-b33-q8",
        "question": "Hai tam giác đều bất kì luôn:",
        "options": [
          "Đồng dạng với nhau",
          "Bằng nhau",
          "Có diện tích bằng nhau",
          "Không đồng dạng"
        ],
        "correctIndex": 0,
        "explanation": "Mọi tam giác đều đều có 3 góc bằng 60° và các cạnh tỉ lệ với nhau, nên luôn đồng dạng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai tam giác vuông cân bất kì luôn:",
          "options": [
            "Đồng dạng với nhau",
            "Bằng nhau",
            "Có chu vi bằng nhau",
            "Không liên quan"
          ],
          "correctIndex": 0,
          "explanation": "Đều có các góc 45°, 45°, 90° nên luôn đồng dạng."
        }
      },
      {
        "id": "k2-b33-q9",
        "question": "Cho ΔABC có AB = 4 cm, BC = 6 cm, AC = 8 cm. Biết ΔDEF ∽ ΔABC và DE = 2 cm (DE tương ứng với AB). Độ dài cạnh DF là:",
        "options": [
          "4 cm",
          "3 cm",
          "6 cm",
          "8 cm"
        ],
        "correctIndex": 0,
        "explanation": "Tỉ số đồng dạng k = DE/AB = 2/4 = 1/2. Cạnh DF = (1/2) · AC = (1/2) · 8 = 4 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Độ dài cạnh EF là:",
          "options": [
            "3 cm",
            "4 cm",
            "2 cm",
            "5 cm"
          ],
          "correctIndex": 0,
          "explanation": "EF = (1/2) · BC = (1/2) · 6 = 3 cm."
        }
      },
      {
        "id": "k2-b33-q10",
        "question": "Kí hiệu đồng dạng \"∽\" thể hiện mối quan hệ giữa:",
        "options": [
          "Hình dạng tương đồng (cùng hình dạng, khác kích thước)",
          "Kích thước bằng nhau",
          "Khối lượng bằng nhau",
          "Gốc toạ độ"
        ],
        "correctIndex": 0,
        "explanation": "Đồng dạng nghĩa là cùng dạng (hình dáng giống hệt nhau, chỉ khác tỉ lệ phóng to hay thu nhỏ).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khi viết kí hiệu đồng dạng ΔABC ∽ ΔMNP, thứ tự các đỉnh:",
          "options": [
            "Phải tương ứng giữa các góc bằng nhau",
            "Viết tùy ý đỉnh nào trước cũng được",
            "Theo thứ tự bảng chữ cái",
            "Không quan trọng"
          ],
          "correctIndex": 0,
          "explanation": "Bắt buộc phải viết theo đúng thứ tự các cặp đỉnh tương ứng."
        }
      }
    ]
  },
  {
    "id": "k2-b34",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 9,
    "chapterTitle": "Chương IX: Tam giác đồng dạng",
    "lessonNumber": 34,
    "title": "Bài 34. Ba trường hợp đồng dạng của hai tam giác",
    "textbookRef": "Toán 8 KNTT - Bài 34",
    "summary": "• Trường hợp 1 (c.c.c): Nếu ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia thì hai tam giác đó đồng dạng.\\n• Trường hợp 2 (c.g.c): Nếu hai cạnh của tam giác này tỉ lệ với hai cạnh của tam giác kia và hai góc tạo bởi các cặp cạnh đó bằng nhau thì hai tam giác đó đồng dạng.\\n• Trường hợp 3 (g.g): Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đó đồng dạng.",
    "keyFormulas": [
      "c.c.c: A'B'/AB = B'C'/BC = C'A'/CA => ΔA'B'C' ∽ ΔABC",
      "c.g.c: A'B'/AB = A'C'/AC và Â' = Â => ΔA'B'C' ∽ ΔABC",
      "g.g: Â' = Â và B̂' = B̂ => ΔA'B'C' ∽ ΔABC"
    ],
    "questions": [
      {
        "id": "k2-b34-q1",
        "question": "Hai tam giác có các cạnh lần lượt là (3; 4; 5) và (6; 8; 10) đồng dạng với nhau theo trường hợp nào?",
        "options": [
          "Cạnh - cạnh - cạnh (c.c.c)",
          "Cạnh - góc - cạnh (c.g.c)",
          "Góc - góc (g.g)",
          "Góc - cạnh - góc"
        ],
        "correctIndex": 0,
        "explanation": "6/3 = 8/4 = 10/5 = 2. Ba cạnh tương ứng tỉ lệ => đồng dạng theo trường hợp c.c.c.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Bộ ba cạnh (2; 3; 4) và (4; 6; 8) đồng dạng theo trường hợp:",
          "options": [
            "c.c.c",
            "c.g.c",
            "g.g",
            "Không đồng dạng"
          ],
          "correctIndex": 0,
          "explanation": "4/2 = 6/3 = 8/4 = 2 (c.c.c)."
        }
      },
      {
        "id": "k2-b34-q2",
        "question": "Cho ΔABC và ΔA'B'C' có Â = Â' = 60° và AB/A'B' = AC/A'C'. Hai tam giác đồng dạng theo trường hợp:",
        "options": [
          "Cạnh - góc - cạnh (c.g.c)",
          "Cạnh - cạnh - cạnh (c.c.c)",
          "Góc - góc (g.g)",
          "Huyền - góc nhọn"
        ],
        "correctIndex": 0,
        "explanation": "Hai cạnh kề tỉ lệ và góc xen giữa bằng nhau => đồng dạng theo c.g.c.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trong trường hợp c.g.c, góc bằng nhau phải là:",
          "options": [
            "Góc xen giữa hai cạnh tỉ lệ",
            "Góc bất kì",
            "Góc lớn nhất",
            "Góc nhọn"
          ],
          "correctIndex": 0,
          "explanation": "Bắt buộc phải là góc xen giữa hai cặp cạnh tỉ lệ."
        }
      },
      {
        "id": "k2-b34-q3",
        "question": "Cho ΔABC và ΔDEF có Â = D̂ = 50° và B̂ = Ê = 70°. Hai tam giác đồng dạng theo trường hợp nào?",
        "options": [
          "Góc - góc (g.g)",
          "Cạnh - cạnh - cạnh (c.c.c)",
          "Cạnh - góc - cạnh (c.g.c)",
          "Bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Hai góc tương ứng bằng nhau nên đồng dạng theo trường hợp g.g.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chỉ cần hai tam giác có mấy cặp góc tương ứng bằng nhau là đủ kết luận đồng dạng?",
          "options": [
            "2 cặp góc",
            "3 cặp góc",
            "1 cặp góc",
            "4 cặp góc"
          ],
          "correctIndex": 0,
          "explanation": "Vì tổng 3 góc bằng 180° nên 2 cặp góc bằng nhau suy ra cặp thứ 3 cũng bằng nhau (g.g)."
        }
      },
      {
        "id": "k2-b34-q4",
        "question": "Tam giác ABC cân tại A có Â = 40°. Tam giác MNP cân tại M có M̂ = 40°. Hai tam giác này:",
        "options": [
          "Đồng dạng với nhau (g.g)",
          "Bằng nhau",
          "Không đồng dạng",
          "Chưa đủ dữ kiện"
        ],
        "correctIndex": 0,
        "explanation": "Cùng là tam giác cân có góc ở đỉnh 40° => các góc ở đáy đều bằng (180° - 40°)/2 = 70° => đồng dạng theo g.g.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai tam giác cân có góc ở đáy bằng nhau thì:",
          "options": [
            "Đồng dạng với nhau",
            "Bằng nhau",
            "Không đồng dạng",
            "Có cạnh đáy bằng nhau"
          ],
          "correctIndex": 0,
          "explanation": "Góc ở đáy bằng nhau thì góc ở đỉnh cũng bằng nhau => đồng dạng (g.g)."
        }
      },
      {
        "id": "k2-b34-q5",
        "question": "Cho ΔABC có AB = 6, AC = 9. Trên AB lấy M sao cho AM = 3, trên AC lấy N sao cho AN = 4.5. Khi đó ΔAMN và ΔABC:",
        "options": [
          "Đồng dạng với nhau theo trường hợp c.g.c",
          "Không đồng dạng",
          "Đồng dạng theo c.c.c",
          "Bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "AM/AB = 3/6 = 1/2; AN/AC = 4.5/9 = 1/2. Góc Â chung => ΔAMN ∽ ΔABC (c.g.c).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tỉ số đồng dạng k của ΔAMN và ΔABC trong bài trên là:",
          "options": [
            "1/2",
            "2",
            "1/3",
            "2/3"
          ],
          "correctIndex": 0,
          "explanation": "k = AM / AB = 1/2."
        }
      },
      {
        "id": "k2-b34-q6",
        "question": "Hình thang ABCD (AB // CD) có hai đường chéo AC và BD cắt nhau tại O. Cặp tam giác nào sau đây đồng dạng?",
        "options": [
          "ΔOAB ∽ ΔOCD (g.g)",
          "ΔOAB ∽ ΔOAD",
          "ΔOAD ∽ ΔOBC",
          "ΔABC ∽ ΔADC"
        ],
        "correctIndex": 0,
        "explanation": "AB // CD => Các cặp góc so le trong bằng nhau: ÔAB = ÔCD, ÔBA = ÔDC => ΔOAB ∽ ΔOCD (g.g).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trong hình thang trên, OA/OC bằng tỉ số nào?",
          "options": [
            "OB/OD và AB/CD",
            "OA/OB",
            "AD/BC",
            "AC/BD"
          ],
          "correctIndex": 0,
          "explanation": "OA/OC = OB/OD = AB/CD từ tam giác đồng dạng."
        }
      },
      {
        "id": "k2-b34-q7",
        "question": "Một tam giác có độ dài các cạnh là 4 cm, 5 cm, 6 cm. Tam giác đồng dạng với nó có cạnh nhỏ nhất là 8 cm thì cạnh lớn nhất là:",
        "options": [
          "12 cm",
          "10 cm",
          "16 cm",
          "14 cm"
        ],
        "correctIndex": 0,
        "explanation": "Cạnh nhỏ nhất tăng từ 4 lên 8 (gấp 2 lần). Cạnh lớn nhất: 6 × 2 = 12 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cạnh còn lại của tam giác đó dài:",
          "options": [
            "10 cm",
            "9 cm",
            "8 cm",
            "11 cm"
          ],
          "correctIndex": 0,
          "explanation": "5 × 2 = 10 cm."
        }
      },
      {
        "id": "k2-b34-q8",
        "question": "Cho ΔABC có đường cao AH. Khi đó cặp tam giác vuông nào sau đây đồng dạng với ΔABC?",
        "options": [
          "ΔHBA và ΔHAC",
          "Chỉ có ΔHBA",
          "Chỉ có ΔHAC",
          "Không có tam giác nào"
        ],
        "correctIndex": 0,
        "explanation": "ΔHBA và ΔABC có góc B̂ chung, góc vuông; ΔHAC và ΔABC có góc Ĉ chung, góc vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Từ ΔHBA ∽ ΔHAC suy ra hệ thức đường cao:",
          "options": [
            "AH² = HB · HC",
            "AH = HB + HC",
            "AH² = AB · AC",
            "AH = BC / 2"
          ],
          "correctIndex": 0,
          "explanation": "AH/HC = HB/AH => AH² = HB · HC."
        }
      },
      {
        "id": "k2-b34-q9",
        "question": "Trường hợp đồng dạng nào của hai tam giác đòi hỏi ÍT thông tin về độ dài cạnh nhất?",
        "options": [
          "Trường hợp góc - góc (g.g) (không cần biết cạnh nào)",
          "Trường hợp cạnh - cạnh - cạnh",
          "Trường hợp cạnh - góc - cạnh",
          "Cả ba như nhau"
        ],
        "correctIndex": 0,
        "explanation": "Trường hợp g.g chỉ cần biết số đo của 2 góc, hoàn toàn không cần biết độ dài cạnh.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Muốn đo chiều cao của một cột cờ bằng bóng nắng mặt trời, ta dùng trường hợp đồng dạng nào?",
          "options": [
            "Góc - góc (g.g) nhờ cùng góc nghiêng tia nắng và góc vuông",
            "c.c.c",
            "c.g.c",
            "Không dùng đồng dạng"
          ],
          "correctIndex": 0,
          "explanation": "Tia sáng mặt trời tạo với mặt đất cùng góc nhọn, cột cờ và cọc tiêu cùng vuông góc với mặt đất (g.g)."
        }
      },
      {
        "id": "k2-b34-q10",
        "question": "Một cọc tiêu cao 2 m có bóng dài 3 m. Cùng lúc đó, bóng của cột cờ dài 15 m. Chiều cao của cột cờ là:",
        "options": [
          "10 m",
          "12 m",
          "8 m",
          "15 m"
        ],
        "correctIndex": 0,
        "explanation": "h / 2 = 15 / 3 = 5 => h = 2 × 5 = 10 m.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu bóng cột cờ dài 9 m thì chiều cao cột cờ là:",
          "options": [
            "6 m",
            "5 m",
            "8 m",
            "4.5 m"
          ],
          "correctIndex": 0,
          "explanation": "h = 2 × (9 / 3) = 6 m."
        }
      }
    ]
  },
  {
    "id": "k2-b35",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 9,
    "chapterTitle": "Chương IX: Tam giác đồng dạng",
    "lessonNumber": 35,
    "title": "Bài 35. Định lí Pythagore và ứng dụng",
    "textbookRef": "Toán 8 KNTT - Bài 35",
    "summary": "• Định lí Pythagore thuận: Trong một tam giác vuông, bình phương của cạnh huyền bằng tổng các bình phương của hai cạnh góc vuông: a² = b² + c².\\n• Định lí Pythagore đảo: Nếu một tam giác có bình phương của một cạnh bằng tổng các bình phương của hai cạnh kia thì tam giác đó là tam giác vuông.\\n• Tam giác có độ dài ba cạnh (3; 4; 5), (5; 12; 13), (6; 8; 10), (8; 15; 17),... gọi là các bộ ba số Pythagore.",
    "keyFormulas": [
      "ΔABC vuông tại A <=> BC² = AB² + AC²",
      "BC = √(AB² + AC²)",
      "Bộ ba Pythagore: (3, 4, 5), (5, 12, 13), (7, 24, 25)"
    ],
    "questions": [
      {
        "id": "k2-b35-q1",
        "question": "Cho tam giác vuông có hai cạnh góc vuông là 3 cm và 4 cm. Độ dài cạnh huyền là:",
        "options": [
          "5 cm",
          "7 cm",
          "6 cm",
          "25 cm"
        ],
        "correctIndex": 0,
        "explanation": "c² = 3² + 4² = 9 + 16 = 25 => c = √25 = 5 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cạnh góc vuông là 6 cm và 8 cm. Độ dài cạnh huyền là:",
          "options": [
            "10 cm",
            "14 cm",
            "12 cm",
            "100 cm"
          ],
          "correctIndex": 0,
          "explanation": "√(6² + 8²) = √(36 + 64) = √100 = 10 cm."
        }
      },
      {
        "id": "k2-b35-q2",
        "question": "Cho tam giác vuông có cạnh huyền bằng 13 cm và một cạnh góc vuông bằng 5 cm. Cạnh góc vuông còn lại là:",
        "options": [
          "12 cm",
          "8 cm",
          "10 cm",
          "√194 cm"
        ],
        "correctIndex": 0,
        "explanation": "b² = 13² - 5² = 169 - 25 = 144 => b = √144 = 12 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cạnh huyền 10 cm, một cạnh góc vuông 6 cm. Cạnh kia là:",
          "options": [
            "8 cm",
            "4 cm",
            "7 cm",
            "16 cm"
          ],
          "correctIndex": 0,
          "explanation": "√(10² - 6²) = √(100 - 36) = √64 = 8 cm."
        }
      },
      {
        "id": "k2-b35-q3",
        "question": "Bộ ba số nào sau đây là độ dài ba cạnh của một tam giác vuông?",
        "options": [
          "6 cm; 8 cm; 10 cm",
          "3 cm; 4 cm; 6 cm",
          "5 cm; 7 cm; 9 cm",
          "2 cm; 3 cm; 4 cm"
        ],
        "correctIndex": 0,
        "explanation": "6² + 8² = 36 + 64 = 100 = 10² => Theo định lí Pythagore đảo, đây là tam giác vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Bộ ba nào là ba cạnh tam giác vuông?",
          "options": [
            "5, 12, 13",
            "4, 5, 6",
            "6, 7, 8",
            "1, 2, 3"
          ],
          "correctIndex": 0,
          "explanation": "5² + 12² = 25 + 144 = 169 = 13²."
        }
      },
      {
        "id": "k2-b35-q4",
        "question": "Cho tam giác vuông cân có cạnh góc vuông bằng a. Độ dài cạnh huyền là:",
        "options": [
          "a√2",
          "2a",
          "a√3",
          "a²"
        ],
        "correctIndex": 0,
        "explanation": "c² = a² + a² = 2a² => c = a√2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Một hình vuông có cạnh bằng 5 cm thì đường chéo dài:",
          "options": [
            "5√2 cm",
            "10 cm",
            "25 cm",
            "5√3 cm"
          ],
          "correctIndex": 0,
          "explanation": "Đường chéo hình vuông = a√2 = 5√2 cm."
        }
      },
      {
        "id": "k2-b35-q5",
        "question": "Một tam giác đều cạnh a có đường cao h bằng:",
        "options": [
          "(a√3) / 2",
          "a√3",
          "a / 2",
          "(a√2) / 2"
        ],
        "correctIndex": 0,
        "explanation": "Đường cao chia đáy làm đôi: h² = a² - (a/2)² = a² - a²/4 = 3a²/4 => h = (a√3)/2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tam giác đều cạnh 6 cm có đường cao bằng:",
          "options": [
            "3√3 cm",
            "6√3 cm",
            "3 cm",
            "4 cm"
          ],
          "correctIndex": 0,
          "explanation": "(6√3) / 2 = 3√3 cm."
        }
      },
      {
        "id": "k2-b35-q6",
        "question": "Một chiếc thang dài 5 m đặt dựa vào tường, chân thang cách tường 3 m. Chiều cao đỉnh thang chạm tường là:",
        "options": [
          "4 m",
          "3 m",
          "2 m",
          "√34 m"
        ],
        "correctIndex": 0,
        "explanation": "h = √(5² - 3²) = √(25 - 9) = √16 = 4 m.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Thang dài 10 m, chân thang cách tường 6 m. Đỉnh thang cao:",
          "options": [
            "8 m",
            "4 m",
            "6 m",
            "9 m"
          ],
          "correctIndex": 0,
          "explanation": "√(10² - 6²) = 8 m."
        }
      },
      {
        "id": "k2-b35-q7",
        "question": "Hình chữ nhật có chiều dài 8 cm, chiều rộng 6 cm. Độ dài đường chéo là:",
        "options": [
          "10 cm",
          "14 cm",
          "48 cm",
          "7 cm"
        ],
        "correctIndex": 0,
        "explanation": "d = √(8² + 6²) = 10 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình chữ nhật kích thước 12 cm × 5 cm có đường chéo là:",
          "options": [
            "13 cm",
            "17 cm",
            "15 cm",
            "10 cm"
          ],
          "correctIndex": 0,
          "explanation": "√(12² + 5²) = 13 cm."
        }
      },
      {
        "id": "k2-b35-q8",
        "question": "Cho ΔABC có AB = 9 cm, AC = 12 cm, BC = 15 cm. Tam giác ABC là tam giác:",
        "options": [
          "Vuông tại A",
          "Vuông tại B",
          "Vuông tại C",
          "Tam giác nhọn"
        ],
        "correctIndex": 0,
        "explanation": "9² + 12² = 81 + 144 = 225 = 15² => Vuông tại A (đối diện với cạnh huyền BC).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tam giác có ba cạnh 7, 24, 25 là tam giác vuông đối diện với cạnh dài:",
          "options": [
            "25",
            "24",
            "7",
            "Không phải tam giác vuông"
          ],
          "correctIndex": 0,
          "explanation": "Cạnh huyền là cạnh lớn nhất 25 (7² + 24² = 625 = 25²)."
        }
      },
      {
        "id": "k2-b35-q9",
        "question": "Diện tích hình vuông dựng trên cạnh huyền của tam giác vuông có hai cạnh góc vuông 5 cm và 7 cm là:",
        "options": [
          "74 cm²",
          "144 cm²",
          "24 cm²",
          "12 cm²"
        ],
        "correctIndex": 0,
        "explanation": "Diện tích = c² = a² + b² = 5² + 7² = 25 + 49 = 74 cm².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai cạnh góc vuông là 3 và 4. Diện tích hình vuông trên cạnh huyền là:",
          "options": [
            "25",
            "7",
            "12",
            "50"
          ],
          "correctIndex": 0,
          "explanation": "3² + 4² = 25."
        }
      },
      {
        "id": "k2-b35-q10",
        "question": "Định lí Pythagore mang tên nhà toán học cổ đại Pythagore người nước nào?",
        "options": [
          "Hy Lạp",
          "Ai Cập",
          "La Mã",
          "Ấn Độ"
        ],
        "correctIndex": 0,
        "explanation": "Pythagore (Pythagoras) là nhà toán học và triết học nổi tiếng của Hy Lạp cổ đại.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Định lí Pythagore chỉ áp dụng được trực tiếp cho loại tam giác nào?",
          "options": [
            "Tam giác vuông",
            "Tam giác nhọn",
            "Tam giác tù",
            "Mọi loại tam giác"
          ],
          "correctIndex": 0,
          "explanation": "Chỉ áp dụng trực tiếp cho tam giác vuông."
        }
      }
    ]
  },
  {
    "id": "k2-b36",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 9,
    "chapterTitle": "Chương IX: Tam giác đồng dạng",
    "lessonNumber": 36,
    "title": "Bài 36. Các trường hợp đồng dạng của hai tam giác vuông",
    "textbookRef": "Toán 8 KNTT - Bài 36",
    "summary": "• Tam giác vuông đã có sẵn một góc vuông (90°).\\n• Hai tam giác vuông đồng dạng khi:\\n  - Trường hợp 1: Có một cặp góc nhọn bằng nhau.\\n  - Trường hợp 2: Hai cạnh góc vuông của tam giác này tỉ lệ với hai cạnh góc vuông của tam giác kia.\\n  - Trường hợp 3 (Cạnh huyền - cạnh góc vuông): Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác vuông kia.",
    "keyFormulas": [
      "Góc nhọn: B̂ = B̂' => ΔABC ∽ ΔA'B'C'",
      "Hai cạnh góc vuông: A'B'/AB = A'C'/AC => ΔA'B'C' ∽ ΔABC",
      "Huyền - góc vuông: B'C'/BC = A'B'/AB => ΔA'B'C' ∽ ΔABC"
    ],
    "questions": [
      {
        "id": "k2-b36-q1",
        "question": "Hai tam giác vuông đồng dạng khi chỉ cần điều kiện nào sau đây về góc?",
        "options": [
          "Một cặp góc nhọn tương ứng bằng nhau",
          "Hai góc tù bằng nhau",
          "Cả ba góc đều bằng 90°",
          "Không cần góc nào"
        ],
        "correctIndex": 0,
        "explanation": "Vì mỗi tam giác vuông đã có sẵn 1 góc 90°, nên có thêm 1 góc nhọn bằng nhau thì đồng dạng theo g.g.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "ΔABC vuông tại A có B̂ = 30°. ΔMNP vuông tại M có N̂ = 30°. Hai tam giác này:",
          "options": [
            "Đồng dạng với nhau",
            "Bằng nhau",
            "Không đồng dạng",
            "Chưa xác định"
          ],
          "correctIndex": 0,
          "explanation": "Đồng dạng vì cùng có góc 90° và góc 30°."
        }
      },
      {
        "id": "k2-b36-q2",
        "question": "Trường hợp đồng dạng \"cạnh huyền - cạnh góc vuông\" của hai tam giác vuông phát biểu là:",
        "options": [
          "Nếu cạnh huyền và một cạnh góc vuông của tam giác này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác kia thì hai tam giác vuông đó đồng dạng",
          "Cạnh huyền bằng nhau",
          "Hai cạnh góc vuông bằng nhau",
          "Tích hai cạnh góc vuông bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Đây là trường hợp đồng dạng đặc biệt áp dụng định lí Pythagore để suy ra cạnh thứ ba cũng tỉ lệ.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "ΔABC (Â = 90°) và ΔA'B'C' (Â' = 90°) có BC/B'C' = AB/A'B'. Khi đó:",
          "options": [
            "ΔABC ∽ ΔA'B'C' (cạnh huyền - cạnh góc vuông)",
            "ΔABC = ΔA'B'C'",
            "AC = A'C'",
            "Không đồng dạng"
          ],
          "correctIndex": 0,
          "explanation": "Đồng dạng theo trường hợp cạnh huyền - cạnh góc vuông."
        }
      },
      {
        "id": "k2-b36-q3",
        "question": "Cho ΔABC vuông tại A có AB = 3, AC = 4. ΔDEF vuông tại D có DE = 6, DF = 8. Hai tam giác này đồng dạng theo trường hợp:",
        "options": [
          "Hai cạnh góc vuông tỉ lệ",
          "Cạnh huyền - cạnh góc vuông",
          "Góc nhọn",
          "Bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "DE/AB = 6/3 = 2; DF/AC = 8/4 = 2. Hai cạnh góc vuông tỉ lệ.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tỉ số đồng dạng k của ΔDEF đối với ΔABC là:",
          "options": [
            "2",
            "1/2",
            "4",
            "1/4"
          ],
          "correctIndex": 0,
          "explanation": "6/3 = 2."
        }
      },
      {
        "id": "k2-b36-q4",
        "question": "Tỉ số hai đường cao tương ứng của hai tam giác đồng dạng bằng:",
        "options": [
          "Tỉ số đồng dạng k",
          "Bình phương k²",
          "Căn bậc hai √k",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "Các đoạn thẳng tương ứng (đường cao, trung tuyến, phân giác) đều có tỉ số bằng tỉ số đồng dạng k.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tỉ số hai bán kính đường tròn nội tiếp của hai tam giác đồng dạng bằng:",
          "options": [
            "k",
            "k²",
            "2k",
            "1/k"
          ],
          "correctIndex": 0,
          "explanation": "Bằng tỉ số đồng dạng k."
        }
      },
      {
        "id": "k2-b36-q5",
        "question": "Cho tam giác ABC vuông tại A có đường cao AH. Khẳng định nào sau đây SAI?",
        "options": [
          "ΔABH ∽ ΔCAH là trường hợp c.c.c",
          "ΔABH ∽ ΔCBA",
          "ΔCAH ∽ ΔCBA",
          "ΔABH ∽ ΔCAH"
        ],
        "correctIndex": 0,
        "explanation": "ΔABH ∽ ΔCAH theo trường hợp góc - góc (hoặc cạnh góc vuông tỉ lệ), khẳng định c.c.c là sai.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hệ thức AB² = BH · BC được suy ra từ cặp tam giác đồng dạng nào?",
          "options": [
            "ΔHBA ∽ ΔABC",
            "ΔHAC ∽ ΔABC",
            "ΔHBA ∽ ΔHAC",
            "ΔABC = ΔHBA"
          ],
          "correctIndex": 0,
          "explanation": "AB / BC = BH / AB => AB² = BH · BC."
        }
      },
      {
        "id": "k2-b36-q6",
        "question": "Một tam giác vuông có cạnh huyền 15 cm và một cạnh góc vuông 9 cm. Một tam giác vuông khác có cạnh huyền 5 cm và cạnh góc vuông 3 cm. Tỉ số đồng dạng là:",
        "options": [
          "3",
          "1/3",
          "5",
          "9/5"
        ],
        "correctIndex": 0,
        "explanation": "15/5 = 9/3 = 3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cạnh góc vuông còn lại của tam giác nhỏ là bao nhiêu cm?",
          "options": [
            "4 cm",
            "5 cm",
            "2 cm",
            "6 cm"
          ],
          "correctIndex": 0,
          "explanation": "√(5² - 3²) = 4 cm."
        }
      },
      {
        "id": "k2-b36-q7",
        "question": "Tam giác vuông cân có góc nhọn bằng:",
        "options": [
          "45°",
          "30°",
          "60°",
          "90°"
        ],
        "correctIndex": 0,
        "explanation": "(180° - 90°) / 2 = 45°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Mọi tam giác vuông cân đều đồng dạng với nhau vì:",
          "options": [
            "Đều có một góc vuông và hai góc nhọn bằng 45°",
            "Cạnh huyền bằng nhau",
            "Diện tích bằng nhau",
            "Chu vi bằng nhau"
          ],
          "correctIndex": 0,
          "explanation": "Góc tương ứng bằng nhau (90°, 45°, 45°)."
        }
      },
      {
        "id": "k2-b36-q8",
        "question": "Hệ thức AC² = CH · BC trong tam giác vuông ABC (đường cao AH) suy ra từ:",
        "options": [
          "ΔHAC ∽ ΔABC",
          "ΔHAB ∽ ΔABC",
          "ΔHAB ∽ ΔHAC",
          "Định lí Thalès"
        ],
        "correctIndex": 0,
        "explanation": "AC / BC = CH / AC => AC² = CH · BC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hệ thức AH · BC = AB · AC suy ra từ công thức:",
          "options": [
            "Diện tích tam giác S = 1/2 AH · BC = 1/2 AB · AC",
            "Định lí Pythagore",
            "Định lí Thalès",
            "Chu vi"
          ],
          "correctIndex": 0,
          "explanation": "Cùng tính diện tích tam giác vuông ABC theo 2 cách."
        }
      },
      {
        "id": "k2-b36-q9",
        "question": "Cho ΔABC vuông tại A có AB = 6 cm, AC = 8 cm. Đường cao AH có độ dài là:",
        "options": [
          "4.8 cm",
          "5 cm",
          "4 cm",
          "6 cm"
        ],
        "correctIndex": 0,
        "explanation": "BC = √(6² + 8²) = 10 cm. AH = (AB · AC) / BC = (6 · 8) / 10 = 4.8 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đoạn thẳng BH có độ dài là:",
          "options": [
            "3.6 cm",
            "6.4 cm",
            "4 cm",
            "5 cm"
          ],
          "correctIndex": 0,
          "explanation": "BH = AB² / BC = 36 / 10 = 3.6 cm."
        }
      },
      {
        "id": "k2-b36-q10",
        "question": "Đoạn thẳng CH có độ dài là:",
        "options": [
          "6.4 cm",
          "3.6 cm",
          "5 cm",
          "7 cm"
        ],
        "correctIndex": 0,
        "explanation": "CH = BC - BH = 10 - 3.6 = 6.4 cm (hoặc 8² / 10 = 6.4 cm).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tích BH · CH bằng:",
          "options": [
            "23.04 (bằng AH² = 4.8²)",
            "20",
            "25",
            "18"
          ],
          "correctIndex": 0,
          "explanation": "3.6 × 6.4 = 23.04 = 4.8² = AH²."
        }
      }
    ]
  },
  {
    "id": "k2-b37",
    "grade": "8",
    "semester": 2,
    "chapterNumber": 9,
    "chapterTitle": "Chương IX: Tam giác đồng dạng",
    "lessonNumber": 37,
    "title": "Bài 37. Hình đồng dạng",
    "textbookRef": "Toán 8 KNTT - Bài 37",
    "summary": "• Hình đồng dạng: Hai hình gọi là đồng dạng nếu chúng có cùng hình dạng nhưng có thể khác nhau về kích thước.\\n• Hình đồng dạng phối cảnh (hình vị tự): Cho điểm O và số k > 0. Phép biến hình biến mỗi điểm M thành M' sao cho OM' = k · OM gọi là phép phối cảnh tâm O tỉ số k.\\n• Ứng dụng: Thu phóng hình ảnh trên máy tính, bản đồ địa lí, kiến trúc xây dựng, kính hiển vi và kính thiên văn.",
    "keyFormulas": [
      "Phối cảnh tâm O tỉ số k: OM' / OM = k",
      "Hai hình bằng nhau là trường hợp riêng của hai hình đồng dạng với k = 1"
    ],
    "questions": [
      {
        "id": "k2-b37-q1",
        "question": "Hai hình nào sau đây luôn luôn đồng dạng với nhau?",
        "options": [
          "Hai hình tròn bất kì",
          "Hai hình chữ nhật bất kì",
          "Hai hình thoi bất kì",
          "Hai hình thang bất kì"
        ],
        "correctIndex": 0,
        "explanation": "Tất cả các hình tròn đều có cùng hình dạng, tỉ lệ bán kính quyết định kích thước.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cặp hình nào sau đây luôn đồng dạng?",
          "options": [
            "Hai hình vuông bất kì",
            "Hai hình bình hành",
            "Hai tam giác cân",
            "Hai hình thang cân"
          ],
          "correctIndex": 0,
          "explanation": "Mọi hình vuông đều có 4 góc vuông và 4 cạnh bằng nhau nên luôn đồng dạng."
        }
      },
      {
        "id": "k2-b37-q2",
        "question": "Phép phối cảnh tâm O tỉ số k = 3 biến đoạn thẳng AB dài 5 cm thành đoạn thẳng A'B' có độ dài:",
        "options": [
          "15 cm",
          "5/3 cm",
          "8 cm",
          "2 cm"
        ],
        "correctIndex": 0,
        "explanation": "A'B' = k · AB = 3 × 5 = 15 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Phép phối cảnh tỉ số k = 1/2 biến đoạn thẳng 10 cm thành đoạn thẳng dài:",
          "options": [
            "5 cm",
            "20 cm",
            "15 cm",
            "2 cm"
          ],
          "correctIndex": 0,
          "explanation": "10 × (1/2) = 5 cm."
        }
      },
      {
        "id": "k2-b37-q3",
        "question": "Bản đồ có tỉ lệ 1 : 1 000 000. Khoảng cách giữa hai thành phố trên bản đồ là 5 cm. Khoảng cách thực tế là:",
        "options": [
          "50 km",
          "5 km",
          "500 km",
          "5000 m"
        ],
        "correctIndex": 0,
        "explanation": "5 cm × 1 000 000 = 5 000 000 cm = 50 000 m = 50 km.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Bản đồ tỉ lệ 1 : 50 000. Đoạn đường trên bản đồ dài 4 cm thì thực tế dài:",
          "options": [
            "2 km",
            "20 km",
            "200 m",
            "2000 km"
          ],
          "correctIndex": 0,
          "explanation": "4 × 50000 = 200000 cm = 2 km."
        }
      },
      {
        "id": "k2-b37-q4",
        "question": "Nếu một bức ảnh có kích thước 6 cm × 9 cm được phóng to với tỉ số k = 2 thì kích thước mới là:",
        "options": [
          "12 cm × 18 cm",
          "8 cm × 11 cm",
          "12 cm × 9 cm",
          "6 cm × 18 cm"
        ],
        "correctIndex": 0,
        "explanation": "Cả chiều dài và chiều rộng đều nhân với 2: 12 cm × 18 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Diện tích của bức ảnh sau khi phóng to gấp mấy lần diện tích ban đầu?",
          "options": [
            "4 lần (k² = 2² = 4)",
            "2 lần",
            "8 lần",
            "6 lần"
          ],
          "correctIndex": 0,
          "explanation": "Tỉ số diện tích bằng k² = 2² = 4 lần."
        }
      },
      {
        "id": "k2-b37-q5",
        "question": "Tâm phối cảnh O là điểm có tính chất:",
        "options": [
          "Các đường thẳng nối các cặp điểm tương ứng đều đồng quy tại O",
          "Là trung điểm mọi đoạn thẳng",
          "Là trọng tâm tam giác",
          "Nằm ngoài mặt phẳng"
        ],
        "correctIndex": 0,
        "explanation": "Tất cả các tia xuất phát từ O đi qua điểm gốc và điểm ảnh tương ứng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khi chiếu phim từ máy chiếu lên màn hình, bóng của vật thể và vật thể đồng dạng theo tâm phối cảnh là:",
          "options": [
            "Ống kính máy chiếu",
            "Màn hình",
            "Bóng đèn trần",
            "Khán giả"
          ],
          "correctIndex": 0,
          "explanation": "Tia sáng xuất phát từ bóng đèn qua thấu kính (tâm phối cảnh)."
        }
      },
      {
        "id": "k2-b37-q6",
        "question": "Đặc điểm chung quan trọng nhất của hai hình đồng dạng là:",
        "options": [
          "Các góc tương ứng bằng nhau và các kích thước tương ứng tỉ lệ",
          "Diện tích bằng nhau",
          "Chu vi bằng nhau",
          "Trùng khít lên nhau"
        ],
        "correctIndex": 0,
        "explanation": "Hình dáng giữ nguyên (góc bảo toàn), kích thước tỉ lệ thuận theo hệ số k.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai hình bằng nhau là trường hợp đặc biệt của hai hình đồng dạng khi tỉ số k bằng:",
          "options": [
            "k = 1",
            "k = 0",
            "k = 2",
            "k = -1"
          ],
          "correctIndex": 0,
          "explanation": "Khi k = 1 thì kích thước giữ nguyên, hai hình bằng nhau."
        }
      },
      {
        "id": "k2-b37-q7",
        "question": "Trong tự nhiên, hiện tượng nào sau đây thể hiện cấu trúc đồng dạng (tự đồng dạng)?",
        "options": [
          "Cành cây súp lơ (Romanesco), lá dương xỉ, vỏ ốc anh vũ",
          "Hòn đá cuội",
          "Vũng nước mưa",
          "Khúc gỗ mục"
        ],
        "correctIndex": 0,
        "explanation": "Súp lơ Romanesco và lá dương xỉ là những ví dụ điển hình về cấu trúc Fractal (hình học đồng dạng vô hạn).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình ảnh chú bé qua kính lúp trông to hơn là một ví dụ về:",
          "options": [
            "Hình đồng dạng phóng to",
            "Hình biến dạng méo mó",
            "Ảnh đối xứng",
            "Ảo ảnh"
          ],
          "correctIndex": 0,
          "explanation": "Kính lúp phóng to hình ảnh đồng dạng với tỉ lệ k > 1."
        }
      },
      {
        "id": "k2-b37-q8",
        "question": "Nếu một mô hình thu nhỏ của chiếc máy bay có tỉ lệ 1 : 100. Chiều dài cánh thật là 30 m thì chiều dài cánh trên mô hình là:",
        "options": [
          "30 cm (0.3 m)",
          "3 cm",
          "3 m",
          "300 cm"
        ],
        "correctIndex": 0,
        "explanation": "30 m / 100 = 0.3 m = 30 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chiều dài máy bay thật 40 m thì mô hình dài:",
          "options": [
            "40 cm",
            "4 cm",
            "4 m",
            "400 cm"
          ],
          "correctIndex": 0,
          "explanation": "40 / 100 = 0.4 m = 40 cm."
        }
      },
      {
        "id": "k2-b37-q9",
        "question": "Khi thu nhỏ một hình với tỉ số k = 0.5, chu vi của hình mới sẽ:",
        "options": [
          "Bằng một nửa (50%) chu vi ban đầu",
          "Bằng 1/4 chu vi ban đầu",
          "Không thay đổi",
          "Gấp đôi"
        ],
        "correctIndex": 0,
        "explanation": "Chu vi tỉ lệ thuận bậc nhất với kích thước: P' = k · P = 0.5 · P.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Diện tích của hình mới sẽ:",
          "options": [
            "Bằng 1/4 (25%) diện tích ban đầu (0.5² = 0.25)",
            "Bằng 1/2",
            "Bằng 1/8",
            "Không đổi"
          ],
          "correctIndex": 0,
          "explanation": "Diện tích tỉ lệ theo k² = 0.5² = 0.25."
        }
      },
      {
        "id": "k2-b37-q10",
        "question": "Phép đồng dạng bảo toàn tính chất nào sau đây của hình học?",
        "options": [
          "Độ lớn của các góc và sự thẳng hàng của các điểm",
          "Khoảng cách giữa hai điểm bất kì",
          "Diện tích",
          "Chu vi"
        ],
        "correctIndex": 0,
        "explanation": "Phép đồng dạng bảo toàn số đo các góc và thứ tự các điểm thẳng hàng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Góc 60° qua phép đồng dạng tỉ số k = 3 trở thành góc có số đo là:",
          "options": [
            "60° (không đổi)",
            "180°",
            "20°",
            "120°"
          ],
          "correctIndex": 0,
          "explanation": "Số đo các góc luôn được bảo toàn nguyên vẹn."
        }
      }
    ]
  }
];
