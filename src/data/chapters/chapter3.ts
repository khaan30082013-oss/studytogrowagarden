import { Lesson } from '../../types';

export const CHAPTER_3_LESSONS: Lesson[] = [
  {
    "id": "k1-b10",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 3,
    "chapterTitle": "Chương III: Tứ giác",
    "lessonNumber": 10,
    "title": "Bài 10. Tứ giác",
    "textbookRef": "Toán 8 KNTT - Bài 10",
    "summary": "• Tứ giác ABCD là hình gồm bốn đoạn thẳng AB, BC, CD, DA trong đó không có hai đoạn thẳng nào cùng nằm trên một đường thẳng.\\n• Tứ giác lồi là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào của tứ giác.\\n• Định lí: Tổng các góc của một tứ giác bằng 360°: ∠A + ∠B + ∠C + ∠D = 360°.",
    "keyFormulas": [
      "∠A + ∠B + ∠C + ∠D = 360°"
    ],
    "questions": [
      {
        "id": "k1-b10-q1",
        "question": "Tổng các góc trong một tứ giác bằng:",
        "options": [
          "360°",
          "180°",
          "270°",
          "540°"
        ],
        "correctIndex": 0,
        "explanation": "Theo định lí, tổng bốn góc của một tứ giác lồi luôn bằng 360°.",
        "hasDiagram": true,
        "diagramType": "quadrilateral",
        "diagramData": {
          "a": 110,
          "b": 70,
          "c": 120,
          "d": 60
        },
        "similarQuestion": {
          "question": "Tổng các góc trong một tam giác bằng bao nhiêu?",
          "options": [
            "180°",
            "360°",
            "90°",
            "270°"
          ],
          "correctIndex": 0,
          "explanation": "Tổng 3 góc tam giác là 180°."
        }
      },
      {
        "id": "k1-b10-q2",
        "question": "Tứ giác ABCD có ∠A = 60°, ∠B = 80°, ∠C = 100°. Số đo góc D là:",
        "options": [
          "120°",
          "110°",
          "130°",
          "100°"
        ],
        "correctIndex": 0,
        "explanation": "∠D = 360° - (60° + 80° + 100°) = 360° - 240° = 120°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tứ giác có 3 góc bằng 70°, 90°, 110°. Góc thứ tư bằng:",
          "options": [
            "90°",
            "80°",
            "100°",
            "120°"
          ],
          "correctIndex": 0,
          "explanation": "360° - 270° = 90°."
        }
      },
      {
        "id": "k1-b10-q3",
        "question": "Tứ giác có 4 góc bằng nhau thì mỗi góc có số đo là:",
        "options": [
          "90°",
          "60°",
          "120°",
          "45°"
        ],
        "correctIndex": 0,
        "explanation": "360° : 4 = 90°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tam giác đều có 3 góc bằng nhau, mỗi góc bằng:",
          "options": [
            "60°",
            "90°",
            "45°",
            "120°"
          ],
          "correctIndex": 0,
          "explanation": "180° : 3 = 60°."
        }
      },
      {
        "id": "k1-b10-q4",
        "question": "Một tứ giác có thể có nhiều nhất bao nhiêu góc tù (> 90°)?",
        "options": [
          "3 góc",
          "4 góc",
          "2 góc",
          "1 góc"
        ],
        "correctIndex": 0,
        "explanation": "Nếu có 4 góc tù thì tổng > 4 × 90° = 360° (vô lí), nên chỉ có tối đa 3 góc tù.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Một tứ giác có thể có nhiều nhất bao nhiêu góc nhọn (< 90°)?",
          "options": [
            "3 góc",
            "4 góc",
            "2 góc",
            "1 góc"
          ],
          "correctIndex": 0,
          "explanation": "Tối đa 3 góc nhọn (nếu 4 góc nhọn thì tổng < 360°)."
        }
      },
      {
        "id": "k1-b10-q5",
        "question": "Một tứ giác có nhiều nhất bao nhiêu góc vuông?",
        "options": [
          "4 góc",
          "3 góc",
          "2 góc",
          "1 góc"
        ],
        "correctIndex": 0,
        "explanation": "Hình chữ nhật hoặc hình vuông có đúng 4 góc vuông (4 × 90° = 360°).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu tứ giác có 3 góc vuông thì góc còn lại bằng:",
          "options": [
            "90°",
            "180°",
            "60°",
            "45°"
          ],
          "correctIndex": 0,
          "explanation": "360° - 3×90° = 90°."
        }
      },
      {
        "id": "k1-b10-q6",
        "question": "Tứ giác ABCD có ∠A = 100°, ∠B = 120°, góc C ngoài tại đỉnh C là 110°. Số đo góc D là:",
        "options": [
          "70°",
          "80°",
          "60°",
          "90°"
        ],
        "correctIndex": 0,
        "explanation": "Góc trong C = 180° - 110° = 70°. Vậy ∠D = 360° - (100° + 120° + 70°) = 70°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Góc kề bù với góc trong 80° có số đo là:",
          "options": [
            "100°",
            "80°",
            "90°",
            "280°"
          ],
          "correctIndex": 0,
          "explanation": "180° - 80° = 100°."
        }
      },
      {
        "id": "k1-b10-q7",
        "question": "Cho tứ giác ABCD có các góc tỉ lệ: A : B : C : D = 1 : 2 : 3 : 4. Góc A bằng:",
        "options": [
          "36°",
          "72°",
          "108°",
          "144°"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số phần: 1 + 2 + 3 + 4 = 10. Giá trị một phần = 360° : 10 = 36°. Vậy ∠A = 36°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu A : B : C : D = 1 : 1 : 1 : 1 thì mỗi góc bằng:",
          "options": [
            "90°",
            "60°",
            "120°",
            "45°"
          ],
          "correctIndex": 0,
          "explanation": "360° : 4 = 90°."
        }
      },
      {
        "id": "k1-b10-q8",
        "question": "Góc kề bù với một góc của tứ giác được gọi là:",
        "options": [
          "Góc ngoài của tứ giác",
          "Góc trong của tứ giác",
          "Góc đối của tứ giác",
          "Góc so le"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: góc kề bù với góc trong là góc ngoài của tứ giác.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tổng góc trong và góc ngoài tại cùng 1 đỉnh bằng:",
          "options": [
            "180°",
            "360°",
            "90°",
            "270°"
          ],
          "correctIndex": 0,
          "explanation": "Hai góc kề bù có tổng là 180°."
        }
      },
      {
        "id": "k1-b10-q9",
        "question": "Tổng các góc ngoài (mỗi đỉnh chọn 1 góc ngoài) của một tứ giác lồi bằng:",
        "options": [
          "360°",
          "180°",
          "720°",
          "540°"
        ],
        "correctIndex": 0,
        "explanation": "4 × 180° - 360° = 360°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tổng các góc ngoài của một tam giác bằng:",
          "options": [
            "360°",
            "180°",
            "720°",
            "90°"
          ],
          "correctIndex": 0,
          "explanation": "Tổng góc ngoài của đa giác lồi luôn là 360°."
        }
      },
      {
        "id": "k1-b10-q10",
        "question": "Đặc điểm nào sau đây KHÔNG PHẢI của tứ giác lồi?",
        "options": [
          "Có một đỉnh nằm thụt vào trong",
          "Nằm trọn vẹn trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào",
          "Các đường chéo cắt nhau tại 1 điểm",
          "Tổng 4 góc luôn bằng 360°"
        ],
        "correctIndex": 0,
        "explanation": "Tứ giác lồi không bị lõm/thụt vào trong.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai đường chéo của tứ giác lồi luôn:",
          "options": [
            "Cắt nhau",
            "Song song",
            "Vuông góc",
            "Bằng nhau"
          ],
          "correctIndex": 0,
          "explanation": "Luôn cắt nhau tại một điểm nằm bên trong tứ giác."
        }
      }
    ]
  },
  {
    "id": "k1-b11",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 3,
    "chapterTitle": "Chương III: Tứ giác",
    "lessonNumber": 11,
    "title": "Bài 11. Hình thang cân",
    "textbookRef": "Toán 8 KNTT - Bài 11",
    "summary": "• Hình thang là tứ giác có hai cạnh đối song song.\\n• Hình thang cân là hình thang có hai góc kề một đáy bằng nhau.\\n• Tính chất hình thang cân: hai cạnh bên bằng nhau; hai đường chéo bằng nhau.\\n• Dấu hiệu nhận biết: Hình thang có 2 góc kề một đáy bằng nhau hoặc có 2 đường chéo bằng nhau là hình thang cân.",
    "keyFormulas": [
      "AB // CD (Hình thang)",
      "∠C = ∠D hoặc ∠A = ∠B (Hình thang cân)",
      "AD = BC, AC = BD"
    ],
    "questions": [
      {
        "id": "k1-b11-q1",
        "question": "Hình thang cân là hình thang có:",
        "options": [
          "Hai góc kề một đáy bằng nhau",
          "Hai cạnh đối bằng nhau",
          "Hai đường chéo vuông góc",
          "Bốn góc bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: Hình thang có hai góc kề một đáy bằng nhau là hình thang cân.",
        "hasDiagram": true,
        "diagramType": "trapezoid",
        "diagramData": {
          "base1": 6,
          "base2": 12,
          "height": 5
        },
        "similarQuestion": {
          "question": "Trong hình thang cân, hai đường chéo:",
          "options": [
            "Bằng nhau",
            "Vuông góc với nhau",
            "Cắt nhau tại trung điểm mỗi đường",
            "Song song"
          ],
          "correctIndex": 0,
          "explanation": "Hai đường chéo của hình thang cân bằng nhau."
        }
      },
      {
        "id": "k1-b11-q2",
        "question": "Cho hình thang cân ABCD (AB // CD) có ∠C = 70°. Số đo góc D là:",
        "options": [
          "70°",
          "110°",
          "80°",
          "100°"
        ],
        "correctIndex": 0,
        "explanation": "Hai góc kề đáy CD bằng nhau nên ∠D = ∠C = 70°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình thang cân ABCD (AB // CD) có ∠A = 105°. Góc B bằng:",
          "options": [
            "105°",
            "75°",
            "85°",
            "95°"
          ],
          "correctIndex": 0,
          "explanation": "Hai góc kề đáy AB bằng nhau: ∠B = ∠A = 105°."
        }
      },
      {
        "id": "k1-b11-q3",
        "question": "Cho hình thang cân ABCD (AB // CD) có ∠D = 60°. Số đo góc A là:",
        "options": [
          "120°",
          "60°",
          "90°",
          "150°"
        ],
        "correctIndex": 0,
        "explanation": "Vì AB // CD nên ∠A và ∠D bù nhau: ∠A = 180° - 60° = 120°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Góc trong cùng phía với góc 80° có số đo là:",
          "options": [
            "100°",
            "80°",
            "90°",
            "110°"
          ],
          "correctIndex": 0,
          "explanation": "180° - 80° = 100°."
        }
      },
      {
        "id": "k1-b11-q4",
        "question": "Khẳng định nào sau đây là SAI về hình thang cân?",
        "options": [
          "Hai cạnh bên luôn song song",
          "Hai cạnh bên bằng nhau",
          "Hai đường chéo bằng nhau",
          "Hai góc kề một đáy bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Hai cạnh bên của hình thang cân cắt nhau (chỉ song song khi nó trở thành hình chữ nhật/hình bình hành).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trong hình thang cân, hai cạnh bên:",
          "options": [
            "Bằng nhau",
            "Song song",
            "Vuông góc",
            "Lớn hơn hai đáy"
          ],
          "correctIndex": 0,
          "explanation": "Hai cạnh bên bằng nhau."
        }
      },
      {
        "id": "k1-b11-q5",
        "question": "Dấu hiệu nào sau đây chứng minh một hình thang là hình thang cân?",
        "options": [
          "Hình thang có hai đường chéo bằng nhau",
          "Hình thang có hai cạnh bên bằng nhau",
          "Hình thang có hai góc đối bằng nhau",
          "Hình thang có một góc vuông"
        ],
        "correctIndex": 0,
        "explanation": "Hình thang có 2 đường chéo bằng nhau là hình thang cân. (Chú ý: hình thang có 2 cạnh bên bằng nhau chưa chắc là hình thang cân vì có thể là hình bình hành).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình thang có 2 góc kề một đáy bằng nhau là:",
          "options": [
            "Hình thang cân",
            "Hình chữ nhật",
            "Hình bình hành",
            "Hình thoi"
          ],
          "correctIndex": 0,
          "explanation": "Hình thang cân."
        }
      },
      {
        "id": "k1-b11-q6",
        "question": "Hình thang cân ABCD có đáy AB = 4 cm, CD = 10 cm, đường cao kẻ từ A hạ xuống CD chia CD thành 2 đoạn có độ dài là:",
        "options": [
          "3 cm và 7 cm",
          "4 cm và 6 cm",
          "2 cm và 8 cm",
          "5 cm và 5 cm"
        ],
        "correctIndex": 0,
        "explanation": "Đoạn ngoài = (CD - AB)/2 = (10 - 4)/2 = 3 cm. Đoạn còn lại = 10 - 3 = 7 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho hình thang cân có đáy 6 cm và 14 cm. Đoạn ngoài do 2 đường cao tạo ra là:",
          "options": [
            "4 cm",
            "8 cm",
            "2 cm",
            "6 cm"
          ],
          "correctIndex": 0,
          "explanation": "(14 - 6)/2 = 4 cm."
        }
      },
      {
        "id": "k1-b11-q7",
        "question": "Hình thang có một góc vuông được gọi là:",
        "options": [
          "Hình thang vuông",
          "Hình chữ nhật",
          "Hình thang cân",
          "Hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: Hình thang có một góc vuông là hình thang vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình thang vuông có mấy góc vuông?",
          "options": [
            "Ít nhất 2 góc vuông",
            "Chỉ 1 góc vuông",
            "3 góc vuông",
            "4 góc vuông"
          ],
          "correctIndex": 0,
          "explanation": "Vì 2 đáy song song nên nếu có 1 góc vuông thì góc trong cùng phía cũng vuông => có 2 góc vuông."
        }
      },
      {
        "id": "k1-b11-q8",
        "question": "Cho hình thang cân ABCD (AB // CD) có AC = 8 cm. Độ dài đoạn BD là:",
        "options": [
          "8 cm",
          "4 cm",
          "16 cm",
          "Chưa đủ dữ kiện"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường chéo hình thang cân bằng nhau: BD = AC = 8 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu BD = 10 cm thì AC bằng:",
          "options": [
            "10 cm",
            "5 cm",
            "20 cm",
            "15 cm"
          ],
          "correctIndex": 0,
          "explanation": "10 cm."
        }
      },
      {
        "id": "k1-b11-q9",
        "question": "Chu vi hình thang cân ABCD có đáy lớn 12 cm, đáy nhỏ 6 cm, cạnh bên 5 cm là:",
        "options": [
          "28 cm",
          "23 cm",
          "24 cm",
          "30 cm"
        ],
        "correctIndex": 0,
        "explanation": "12 + 6 + 5 + 5 = 28 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính chu vi hình thang cân có 2 đáy là 4 cm, 8 cm và cạnh bên 3 cm:",
          "options": [
            "18 cm",
            "15 cm",
            "20 cm",
            "16 cm"
          ],
          "correctIndex": 0,
          "explanation": "4 + 8 + 3 + 3 = 18 cm."
        }
      },
      {
        "id": "k1-b11-q10",
        "question": "Hình thang cân có hai góc đối bù nhau (tổng 180°) đúng hay sai?",
        "options": [
          "Đúng",
          "Sai",
          "Chỉ đúng với góc vuông",
          "Không xác định"
        ],
        "correctIndex": 0,
        "explanation": "Vì ∠A + ∠D = 180° và ∠C = ∠D nên ∠A + ∠C = 180° (hai góc đối bù nhau).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Góc kề đáy và góc đối diện trong hình thang cân có tổng bằng:",
          "options": [
            "180°",
            "360°",
            "90°",
            "120°"
          ],
          "correctIndex": 0,
          "explanation": "180°."
        }
      }
    ]
  },
  {
    "id": "k1-b12",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 3,
    "chapterTitle": "Chương III: Tứ giác",
    "lessonNumber": 12,
    "title": "Bài 12. Hình bình hành",
    "textbookRef": "Toán 8 KNTT - Bài 12",
    "summary": "• Hình bình hành là tứ giác có các cạnh đối song song.\\n• Tính chất: Các cạnh đối bằng nhau; các góc đối bằng nhau; hai đường chéo cắt nhau tại trung điểm của mỗi đường.\\n• Dấu hiệu nhận biết: Tứ giác có các cạnh đối song song (hoặc bằng nhau); có 1 cặp cạnh đối song song và bằng nhau; có các góc đối bằng nhau; có 2 đường chéo cắt nhau tại trung điểm mỗi đường.",
    "keyFormulas": [
      "AB // CD & AD // BC",
      "AB = CD & AD = BC",
      "OA = OC & OB = OD"
    ],
    "questions": [
      {
        "id": "k1-b12-q1",
        "question": "Hình bình hành là tứ giác có:",
        "options": [
          "Các cạnh đối song song",
          "Bốn cạnh bằng nhau",
          "Bốn góc vuông",
          "Hai đường chéo vuông góc"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: Hình bình hành là tứ giác có các cạnh đối song song.",
        "hasDiagram": true,
        "diagramType": "parallelogram",
        "diagramData": {
          "width": 10,
          "height": 6,
          "angle": 60
        },
        "similarQuestion": {
          "question": "Trong hình bình hành, các cạnh đối:",
          "options": [
            "Song song và bằng nhau",
            "Bằng nhau nhưng không song song",
            "Vuông góc",
            "Trùng nhau"
          ],
          "correctIndex": 0,
          "explanation": "Các cạnh đối vừa song song vừa bằng nhau."
        }
      },
      {
        "id": "k1-b12-q2",
        "question": "Cho hình bình hành ABCD có ∠A = 110°. Số đo góc C là:",
        "options": [
          "110°",
          "70°",
          "90°",
          "80°"
        ],
        "correctIndex": 0,
        "explanation": "Hai góc đối của hình bình hành bằng nhau: ∠C = ∠A = 110°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho hình bình hành ABCD có ∠B = 65°. Góc D bằng:",
          "options": [
            "65°",
            "115°",
            "120°",
            "75°"
          ],
          "correctIndex": 0,
          "explanation": "∠D = ∠B = 65°."
        }
      },
      {
        "id": "k1-b12-q3",
        "question": "Cho hình bình hành ABCD có ∠A = 110°. Số đo góc B là:",
        "options": [
          "70°",
          "110°",
          "80°",
          "90°"
        ],
        "correctIndex": 0,
        "explanation": "Hai góc kề một cạnh bù nhau: ∠B = 180° - 110° = 70°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai góc kề một cạnh của hình bình hành có tổng số đo bằng:",
          "options": [
            "180°",
            "360°",
            "90°",
            "120°"
          ],
          "correctIndex": 0,
          "explanation": "180°."
        }
      },
      {
        "id": "k1-b12-q4",
        "question": "Hai đường chéo của hình bình hành có tính chất nào?",
        "options": [
          "Cắt nhau tại trung điểm của mỗi đường",
          "Bằng nhau",
          "Vuông góc với nhau",
          "Là đường phân giác"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường chéo cắt nhau tại trung điểm mỗi đường.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu O là giao điểm hai đường chéo hình bình hành ABCD thì:",
          "options": [
            "OA = OC và OB = OD",
            "OA = OB = OC = OD",
            "AC vuông góc BD",
            "AC = BD"
          ],
          "correctIndex": 0,
          "explanation": "OA = OC và OB = OD."
        }
      },
      {
        "id": "k1-b12-q5",
        "question": "Dấu hiệu nào sau đây KHÔNG PHẢI là dấu hiệu nhận biết hình bình hành?",
        "options": [
          "Tứ giác có hai đường chéo bằng nhau",
          "Tứ giác có các cạnh đối bằng nhau",
          "Tứ giác có hai cạnh đối song song và bằng nhau",
          "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường"
        ],
        "correctIndex": 0,
        "explanation": "Tứ giác có 2 đường chéo bằng nhau chưa chắc là hình bình hành (ví dụ hình thang cân).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tứ giác có 2 cặp cạnh đối song song là:",
          "options": [
            "Hình bình hành",
            "Hình thang cân",
            "Hình vuông",
            "Hình thoi"
          ],
          "correctIndex": 0,
          "explanation": "Hình bình hành."
        }
      },
      {
        "id": "k1-b12-q6",
        "question": "Cho hình bình hành ABCD có chu vi 24 cm, cạnh AB = 7 cm. Độ dài cạnh BC là:",
        "options": [
          "5 cm",
          "7 cm",
          "10 cm",
          "12 cm"
        ],
        "correctIndex": 0,
        "explanation": "Nửa chu vi = 24 : 2 = 12 cm. BC = 12 - 7 = 5 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình bình hành có 2 cạnh kề là 4 cm và 6 cm thì chu vi là:",
          "options": [
            "20 cm",
            "10 cm",
            "24 cm",
            "16 cm"
          ],
          "correctIndex": 0,
          "explanation": "2 × (4 + 6) = 20 cm."
        }
      },
      {
        "id": "k1-b12-q7",
        "question": "Giao điểm O của hai đường chéo hình bình hành là:",
        "options": [
          "Tâm đối xứng của hình bình hành",
          "Trọng tâm",
          "Trực tâm",
          "Điểm cách đều 4 đỉnh"
        ],
        "correctIndex": 0,
        "explanation": "Giao điểm O của 2 đường chéo là tâm đối xứng của hình bình hành.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình bình hành có trục đối xứng không?",
          "options": [
            "Không có (trừ trường hợp đặc biệt)",
            "Luôn có 2 trục",
            "Luôn có 4 trục",
            "Luôn có 1 trục"
          ],
          "correctIndex": 0,
          "explanation": "Hình bình hành nói chung không có trục đối xứng, chỉ có tâm đối xứng."
        }
      },
      {
        "id": "k1-b12-q8",
        "question": "Cho hình bình hành ABCD. Lấy M trên AB, N trên CD sao cho AM = CN. Tứ giác AMCN là hình gì?",
        "options": [
          "Hình bình hành",
          "Hình thang cân",
          "Hình chữ nhật",
          "Hình thoi"
        ],
        "correctIndex": 0,
        "explanation": "AM // CN và AM = CN nên AMCN là hình bình hành.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tứ giác có 1 cặp cạnh đối song song và bằng nhau là:",
          "options": [
            "Hình bình hành",
            "Hình thang vuông",
            "Hình thang cân",
            "Tứ giác thường"
          ],
          "correctIndex": 0,
          "explanation": "Hình bình hành."
        }
      },
      {
        "id": "k1-b12-q9",
        "question": "Nếu hình bình hành ABCD có ∠A = 90° thì nó trở thành hình gì?",
        "options": [
          "Hình chữ nhật",
          "Hình thoi",
          "Hình vuông",
          "Hình thang cân"
        ],
        "correctIndex": 0,
        "explanation": "Hình bình hành có 1 góc vuông là hình chữ nhật.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình bình hành có 2 cạnh kề bằng nhau là hình gì?",
          "options": [
            "Hình thoi",
            "Hình chữ nhật",
            "Hình vuông",
            "Hình thang"
          ],
          "correctIndex": 0,
          "explanation": "Hình thoi."
        }
      },
      {
        "id": "k1-b12-q10",
        "question": "Cho hình bình hành ABCD. Khẳng định nào sau đây đúng?",
        "options": [
          "ΔABC = ΔCDA",
          "ΔABC vuông tại B",
          "AC vuông góc BD",
          "AC = BD"
        ],
        "correctIndex": 0,
        "explanation": "Đường chéo AC chia hình bình hành thành 2 tam giác bằng nhau: ΔABC = ΔCDA (c-c-c).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường chéo của hình bình hành chia nó thành:",
          "options": [
            "Hai tam giác bằng nhau",
            "Hai tam giác vuông",
            "Hai tam giác đều",
            "Hai tam giác cân"
          ],
          "correctIndex": 0,
          "explanation": "Hai tam giác bằng nhau."
        }
      }
    ]
  },
  {
    "id": "k1-b13",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 3,
    "chapterTitle": "Chương III: Tứ giác",
    "lessonNumber": 13,
    "title": "Bài 13. Hình chữ nhật",
    "textbookRef": "Toán 8 KNTT - Bài 13",
    "summary": "• Hình chữ nhật là tứ giác có bốn góc vuông.\\n• Hình chữ nhật có đầy đủ tính chất của hình bình hành và hình thang cân.\\n• Hai đường chéo của hình chữ nhật bằng nhau và cắt nhau tại trung điểm của mỗi đường.\\n• Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.",
    "keyFormulas": [
      "∠A = ∠B = ∠C = ∠D = 90°",
      "AC = BD & OA = OB = OC = OD",
      "AM = BC / 2 (trong tam giác vuông ABC)"
    ],
    "questions": [
      {
        "id": "k1-b13-q1",
        "question": "Hình chữ nhật là tứ giác có:",
        "options": [
          "Bốn góc vuông",
          "Bốn cạnh bằng nhau",
          "Hai đường chéo vuông góc",
          "Hai cạnh kề bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: Hình chữ nhật là tứ giác có bốn góc vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Một tứ giác có 3 góc vuông thì nó là hình gì?",
          "options": [
            "Hình chữ nhật",
            "Hình thang vuông",
            "Hình bình hành",
            "Hình vuông"
          ],
          "correctIndex": 0,
          "explanation": "Tổng 4 góc là 360° nên góc thứ 4 cũng vuông => Hình chữ nhật."
        }
      },
      {
        "id": "k1-b13-q2",
        "question": "Tính chất đặc trưng về đường chéo của hình chữ nhật là:",
        "options": [
          "Hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường",
          "Hai đường chéo vuông góc với nhau",
          "Hai đường chéo là phân giác các góc",
          "Hai đường chéo song song"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường chéo hình chữ nhật bằng nhau và cắt nhau tại trung điểm mỗi đường.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Giao điểm O của hai đường chéo hình chữ nhật ABCD cách đều:",
          "options": [
            "Cả 4 đỉnh A, B, C, D",
            "Chỉ 2 đỉnh A và C",
            "Chỉ các cạnh",
            "Không cách đều"
          ],
          "correctIndex": 0,
          "explanation": "OA = OB = OC = OD."
        }
      },
      {
        "id": "k1-b13-q3",
        "question": "Trong tam giác ABC vuông tại A, đường trung tuyến AM ứng với cạnh huyền BC có độ dài bằng:",
        "options": [
          "1/2 BC",
          "BC",
          "2 BC",
          "1/3 BC"
        ],
        "correctIndex": 0,
        "explanation": "Định lí: Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu tam giác vuông có cạnh huyền dài 10 cm thì trung tuyến ứng với cạnh huyền dài:",
          "options": [
            "5 cm",
            "10 cm",
            "20 cm",
            "2.5 cm"
          ],
          "correctIndex": 0,
          "explanation": "10 : 2 = 5 cm."
        }
      },
      {
        "id": "k1-b13-q4",
        "question": "Nếu một tam giác có đường trung tuyến ứng với một cạnh bằng nửa cạnh đó thì tam giác đó là:",
        "options": [
          "Tam giác vuông",
          "Tam giác đều",
          "Tam giác cân",
          "Tam giác tù"
        ],
        "correctIndex": 0,
        "explanation": "Định lí đảo: Tam giác có trung tuyến bằng nửa cạnh tương ứng là tam giác vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tam giác ABC có AM = 4 cm, BC = 8 cm (M là trung điểm BC). Tam giác ABC vuông tại:",
          "options": [
            "A",
            "B",
            "C",
            "Không vuông"
          ],
          "correctIndex": 0,
          "explanation": "AM = BC/2 nên vuông tại A."
        }
      },
      {
        "id": "k1-b13-q5",
        "question": "Dấu hiệu nào sau đây nhận biết hình chữ nhật?",
        "options": [
          "Hình bình hành có hai đường chéo bằng nhau",
          "Hình thang có hai đường chéo bằng nhau",
          "Hình bình hành có hai đường chéo vuông góc",
          "Tứ giác có hai đường chéo bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Hình bình hành có 2 đường chéo bằng nhau là hình chữ nhật.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình bình hành có 1 góc vuông là:",
          "options": [
            "Hình chữ nhật",
            "Hình thoi",
            "Hình vuông",
            "Hình thang"
          ],
          "correctIndex": 0,
          "explanation": "Hình chữ nhật."
        }
      },
      {
        "id": "k1-b13-q6",
        "question": "Cho hình chữ nhật ABCD có AB = 6 cm, BC = 8 cm. Độ dài đường chéo AC là:",
        "options": [
          "10 cm",
          "14 cm",
          "48 cm",
          "7 cm"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng định lí Pythagore: AC = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho hình chữ nhật có kích thước 3 cm và 4 cm. Độ dài đường chéo là:",
          "options": [
            "5 cm",
            "7 cm",
            "12 cm",
            "6 cm"
          ],
          "correctIndex": 0,
          "explanation": "√(3² + 4²) = 5 cm."
        }
      },
      {
        "id": "k1-b13-q7",
        "question": "Hình chữ nhật có mấy trục đối xứng?",
        "options": [
          "2 trục",
          "4 trục",
          "1 trục",
          "0 trục"
        ],
        "correctIndex": 0,
        "explanation": "Hai trục đối xứng là hai đường trung trực của hai cặp cạnh đối.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai trục đối xứng của hình chữ nhật là:",
          "options": [
            "Đường trung trực của các cạnh đối",
            "Hai đường chéo",
            "Đường phân giác",
            "Hai cạnh bên"
          ],
          "correctIndex": 0,
          "explanation": "Đường trung trực của các cạnh đối."
        }
      },
      {
        "id": "k1-b13-q8",
        "question": "Hình thang cân có một góc vuông là hình gì?",
        "options": [
          "Hình chữ nhật",
          "Hình vuông",
          "Hình thoi",
          "Hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Hình thang cân có 1 góc vuông thì các góc còn lại cũng vuông => Hình chữ nhật.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tứ giác có 3 góc vuông là hình gì?",
          "options": [
            "Hình chữ nhật",
            "Hình thoi",
            "Hình bình hành",
            "Hình thang cân"
          ],
          "correctIndex": 0,
          "explanation": "Hình chữ nhật."
        }
      },
      {
        "id": "k1-b13-q9",
        "question": "Chu vi hình chữ nhật có chiều dài 12 cm, diện tích 96 cm² là:",
        "options": [
          "40 cm",
          "20 cm",
          "44 cm",
          "32 cm"
        ],
        "correctIndex": 0,
        "explanation": "Chiều rộng = 96 : 12 = 8 cm. Chu vi = 2 × (12 + 8) = 40 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình chữ nhật có chiều rộng 5 cm, chu vi 30 cm thì chiều dài là:",
          "options": [
            "10 cm",
            "15 cm",
            "20 cm",
            "25 cm"
          ],
          "correctIndex": 0,
          "explanation": "30/2 - 5 = 10 cm."
        }
      },
      {
        "id": "k1-b13-q10",
        "question": "Khẳng định nào sau đây là SAI?",
        "options": [
          "Hình chữ nhật có hai đường chéo vuông góc với nhau",
          "Hình chữ nhật có hai đường chéo bằng nhau",
          "Hình chữ nhật là hình bình hành",
          "Hình chữ nhật là hình thang cân"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường chéo hình chữ nhật chỉ vuông góc khi nó là hình vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai đường chéo hình chữ nhật cắt nhau tạo thành:",
          "options": [
            "Các tam giác cân",
            "Các tam giác đều",
            "Các tam giác vuông",
            "Các hình vuông"
          ],
          "correctIndex": 0,
          "explanation": "Vì OA = OB = OC = OD nên tạo thành các tam giác cân tại O."
        }
      }
    ]
  },
  {
    "id": "k1-b14",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 3,
    "chapterTitle": "Chương III: Tứ giác",
    "lessonNumber": 14,
    "title": "Bài 14. Hình thoi và hình vuông",
    "textbookRef": "Toán 8 KNTT - Bài 14",
    "summary": "• Hình thoi là tứ giác có bốn cạnh bằng nhau.\\n• Tính chất hình thoi: hai đường chéo vuông góc với nhau và là đường phân giác của các góc.\\n• Hình vuông là tứ giác có bốn góc vuông và bốn cạnh bằng nhau.\\n• Hình vuông vừa là hình chữ nhật, vừa là hình thoi.",
    "keyFormulas": [
      "Hình thoi: AB = BC = CD = DA, AC ⊥ BD",
      "Hình vuông: 4 góc vuông + 4 cạnh bằng nhau",
      "Đường chéo hình vuông cạnh a: d = a√2"
    ],
    "questions": [
      {
        "id": "k1-b14-q1",
        "question": "Hình thoi là tứ giác có:",
        "options": [
          "Bốn cạnh bằng nhau",
          "Bốn góc vuông",
          "Hai đường chéo bằng nhau",
          "Hai góc đối bù nhau"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: Hình thoi là tứ giác có bốn cạnh bằng nhau.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tứ giác có 4 cạnh bằng nhau là:",
          "options": [
            "Hình thoi",
            "Hình chữ nhật",
            "Hình bình hành",
            "Hình thang cân"
          ],
          "correctIndex": 0,
          "explanation": "Hình thoi."
        }
      },
      {
        "id": "k1-b14-q2",
        "question": "Hai đường chéo của hình thoi có tính chất đặc trưng nào?",
        "options": [
          "Vuông góc với nhau và là tia phân giác các góc",
          "Bằng nhau",
          "Song song với nhau",
          "Không cắt nhau"
        ],
        "correctIndex": 0,
        "explanation": "Hai đường chéo của hình thoi vuông góc với nhau và là các đường phân giác.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình bình hành có hai đường chéo vuông góc là hình gì?",
          "options": [
            "Hình thoi",
            "Hình chữ nhật",
            "Hình thang cân",
            "Hình tròn"
          ],
          "correctIndex": 0,
          "explanation": "Hình thoi."
        }
      },
      {
        "id": "k1-b14-q3",
        "question": "Hình vuông là tứ giác có:",
        "options": [
          "Bốn góc vuông và bốn cạnh bằng nhau",
          "Bốn cạnh bằng nhau",
          "Bốn góc vuông",
          "Hai đường chéo bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Hình vuông vừa là hình chữ nhật vừa là hình thoi.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình chữ nhật có hai cạnh kề bằng nhau là hình gì?",
          "options": [
            "Hình vuông",
            "Hình thoi",
            "Hình thang",
            "Hình bình hành"
          ],
          "correctIndex": 0,
          "explanation": "Hình vuông."
        }
      },
      {
        "id": "k1-b14-q4",
        "question": "Hình thoi có một góc vuông thì trở thành hình gì?",
        "options": [
          "Hình vuông",
          "Hình chữ nhật",
          "Hình bình hành",
          "Hình thang cân"
        ],
        "correctIndex": 0,
        "explanation": "Hình thoi có 1 góc vuông là hình vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình chữ nhật có hai đường chéo vuông góc là hình gì?",
          "options": [
            "Hình vuông",
            "Hình thoi",
            "Hình bình hành",
            "Tam giác"
          ],
          "correctIndex": 0,
          "explanation": "Hình vuông."
        }
      },
      {
        "id": "k1-b14-q5",
        "question": "Độ dài đường chéo của hình vuông có cạnh bằng 4 cm là:",
        "options": [
          "4√2 cm",
          "8 cm",
          "4 cm",
          "16 cm"
        ],
        "correctIndex": 0,
        "explanation": "d = √(4² + 4²) = √32 = 4√2 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường chéo của hình vuông cạnh 5 cm là:",
          "options": [
            "5√2 cm",
            "10 cm",
            "25 cm",
            "5 cm"
          ],
          "correctIndex": 0,
          "explanation": "5√2 cm."
        }
      },
      {
        "id": "k1-b14-q6",
        "question": "Hình vuông có mấy trục đối xứng?",
        "options": [
          "4 trục",
          "2 trục",
          "1 trục",
          "Vô số"
        ],
        "correctIndex": 0,
        "explanation": "Hình vuông có 4 trục đối xứng (2 đường trung trực của cạnh và 2 đường chéo).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình thoi có mấy trục đối xứng?",
          "options": [
            "2 trục (hai đường chéo)",
            "4 trục",
            "1 trục",
            "0 trục"
          ],
          "correctIndex": 0,
          "explanation": "2 trục đối xứng chính là 2 đường chéo."
        }
      },
      {
        "id": "k1-b14-q7",
        "question": "Diện tích hình thoi có hai đường chéo d₁ = 6 cm và d₂ = 8 cm là:",
        "options": [
          "24 cm²",
          "48 cm²",
          "14 cm²",
          "28 cm²"
        ],
        "correctIndex": 0,
        "explanation": "S = (1/2) · d₁ · d₂ = (1/2) · 6 · 8 = 24 cm².",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tính diện tích hình thoi có 2 đường chéo là 4 cm và 10 cm:",
          "options": [
            "20 cm²",
            "40 cm²",
            "14 cm²",
            "28 cm²"
          ],
          "correctIndex": 0,
          "explanation": "(1/2) · 4 · 10 = 20 cm²."
        }
      },
      {
        "id": "k1-b14-q8",
        "question": "Cạnh của hình thoi có hai đường chéo dài 6 cm và 8 cm là:",
        "options": [
          "5 cm",
          "7 cm",
          "10 cm",
          "4 cm"
        ],
        "correctIndex": 0,
        "explanation": "Nửa các đường chéo là 3 cm và 4 cm. Cạnh hình thoi = √(3² + 4²) = 5 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Chu vi hình thoi có cạnh 5 cm là:",
          "options": [
            "20 cm",
            "25 cm",
            "15 cm",
            "10 cm"
          ],
          "correctIndex": 0,
          "explanation": "4 × 5 = 20 cm."
        }
      },
      {
        "id": "k1-b14-q9",
        "question": "Hình thoi có hai đường chéo bằng nhau là hình gì?",
        "options": [
          "Hình vuông",
          "Hình chữ nhật",
          "Hình bình hành",
          "Hình thang cân"
        ],
        "correctIndex": 0,
        "explanation": "Hình thoi có 2 đường chéo bằng nhau là hình vuông.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình chữ nhật có 1 đường chéo là phân giác của 1 góc là hình gì?",
          "options": [
            "Hình vuông",
            "Hình thoi",
            "Hình thang",
            "Hình bình hành"
          ],
          "correctIndex": 0,
          "explanation": "Hình vuông."
        }
      },
      {
        "id": "k1-b14-q10",
        "question": "Khẳng định nào sau đây là ĐÚNG?",
        "options": [
          "Mọi hình vuông đều là hình chữ nhật",
          "Mọi hình thoi đều là hình vuông",
          "Mọi hình chữ nhật đều là hình vuông",
          "Mọi hình thang đều là hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Hình vuông có 4 góc vuông nên là một hình chữ nhật đặc biệt.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khẳng định nào sau đây đúng?",
          "options": [
            "Mọi hình vuông đều là hình thoi",
            "Mọi hình bình hành đều là hình chữ nhật",
            "Mọi tứ giác đều có 4 góc vuông",
            "Hình thoi không phải là hình bình hành"
          ],
          "correctIndex": 0,
          "explanation": "Mọi hình vuông đều là hình thoi có 1 góc vuông."
        }
      }
    ]
  }
];
