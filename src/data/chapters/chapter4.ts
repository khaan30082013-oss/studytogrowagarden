import { Lesson } from '../../types';

export const CHAPTER_4_LESSONS: Lesson[] = [
  {
    "id": "k1-b15",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 4,
    "chapterTitle": "Chương IV: Định lí Thalès",
    "lessonNumber": 15,
    "title": "Bài 15. Định lí Thalès trong tam giác",
    "textbookRef": "Toán 8 KNTT - Bài 15",
    "summary": "• Đoạn thẳng tỉ lệ: Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng theo cùng một đơn vị đo.\\n• Định lí Thalès: Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.\\n• Định lí Thalès đảo: Nếu một đường thẳng cắt hai cạnh và định ra trên hai cạnh đó những đoạn tương ứng tỉ lệ thì nó song song với cạnh thứ ba.\\n• Hệ quả: Một đường thẳng song song với một cạnh tam giác và cắt hai cạnh còn lại tạo thành một tam giác mới có ba cạnh tương ứng tỉ lệ với ba cạnh của tam giác đã cho.",
    "keyFormulas": [
      "MN // BC => AM/AB = AN/AC = MN/BC",
      "AM/MB = AN/NC"
    ],
    "questions": [
      {
        "id": "k1-b15-q1",
        "question": "Tỉ số của hai đoạn thẳng AB = 3 cm và CD = 6 cm là:",
        "options": [
          "1/2",
          "2",
          "1/3",
          "3"
        ],
        "correctIndex": 0,
        "explanation": "AB / CD = 3 / 6 = 1/2.",
        "hasDiagram": true,
        "diagramType": "thales",
        "diagramData": {
          "ab": 6,
          "ac": 9,
          "mn": 4,
          "bc": 6
        },
        "similarQuestion": {
          "question": "Tỉ số của đoạn MN = 4 cm và PQ = 12 cm là:",
          "options": [
            "1/3",
            "3",
            "1/4",
            "4"
          ],
          "correctIndex": 0,
          "explanation": "4 / 12 = 1/3."
        }
      },
      {
        "id": "k1-b15-q2",
        "question": "Cho ΔABC có MN // BC (M ∈ AB, N ∈ AC). Hệ thức nào sau đây đúng theo định lí Thalès?",
        "options": [
          "AM / MB = AN / NC",
          "AM / AB = NC / AN",
          "AM / AN = BC / MN",
          "MB / AM = AN / NC"
        ],
        "correctIndex": 0,
        "explanation": "Theo định lí Thalès: AM/MB = AN/NC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho MN // BC (M ∈ AB, N ∈ AC). Hệ thức nào sau đây đúng?",
          "options": [
            "AM / AB = AN / AC",
            "AM / MB = AC / AN",
            "AB / AM = AN / AC",
            "MN = BC"
          ],
          "correctIndex": 0,
          "explanation": "AM / AB = AN / AC."
        }
      },
      {
        "id": "k1-b15-q3",
        "question": "Cho ΔABC có MN // BC. Biết AM = 2 cm, MB = 4 cm, AN = 3 cm. Độ dài NC là:",
        "options": [
          "6 cm",
          "4 cm",
          "8 cm",
          "5 cm"
        ],
        "correctIndex": 0,
        "explanation": "AM/MB = AN/NC => 2/4 = 3/NC => NC = (4 × 3) / 2 = 6 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Biết AM = 3 cm, MB = 6 cm, AN = 2 cm. Tính NC:",
          "options": [
            "4 cm",
            "5 cm",
            "6 cm",
            "3 cm"
          ],
          "correctIndex": 0,
          "explanation": "NC = (6 × 2) / 3 = 4 cm."
        }
      },
      {
        "id": "k1-b15-q4",
        "question": "Cho ΔABC có MN // BC (M ∈ AB, N ∈ AC). Biết AM = 3 cm, AB = 9 cm, BC = 15 cm. Độ dài MN là:",
        "options": [
          "5 cm",
          "6 cm",
          "4 cm",
          "7.5 cm"
        ],
        "correctIndex": 0,
        "explanation": "Theo hệ quả Thalès: MN/BC = AM/AB => MN/15 = 3/9 = 1/3 => MN = 5 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Biết AM/AB = 1/2 và BC = 10 cm. Tính MN (với MN // BC):",
          "options": [
            "5 cm",
            "6 cm",
            "4 cm",
            "2.5 cm"
          ],
          "correctIndex": 0,
          "explanation": "10 × (1/2) = 5 cm."
        }
      },
      {
        "id": "k1-b15-q5",
        "question": "Định lí Thalès đảo được sử dụng chủ yếu để làm gì?",
        "options": [
          "Chứng minh hai đường thẳng song song",
          "Tính độ dài đoạn thẳng",
          "Chứng minh hai góc bằng nhau",
          "Chứng minh tam giác đều"
        ],
        "correctIndex": 0,
        "explanation": "Định lí Thalès đảo dùng để chứng minh hai đường thẳng song song khi biết tỉ lệ các đoạn thẳng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu AM/MB = AN/NC trên hai cạnh AB, AC của ΔABC thì:",
          "options": [
            "MN // BC",
            "MN vuông góc BC",
            "MN = BC",
            "MN cắt BC"
          ],
          "correctIndex": 0,
          "explanation": "MN // BC theo định lí Thalès đảo."
        }
      },
      {
        "id": "k1-b15-q6",
        "question": "Cho ΔABC có AB = 6 cm, AC = 8 cm. Lấy M trên AB sao cho AM = 3 cm, N trên AC sao cho AN = 4 cm. Kết luận nào đúng?",
        "options": [
          "MN // BC",
          "MN không song song BC",
          "MN = 1/2 BC",
          "MN vuông góc BC"
        ],
        "correctIndex": 0,
        "explanation": "AM/AB = 3/6 = 1/2; AN/AC = 4/8 = 1/2 => AM/AB = AN/AC nên MN // BC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu AM/AB = 2/3 và AN/AC = 2/3 thì:",
          "options": [
            "MN // BC",
            "MN cắt BC",
            "MN vuông góc BC",
            "Chưa thể kết luận"
          ],
          "correctIndex": 0,
          "explanation": "MN // BC theo định lí đảo."
        }
      },
      {
        "id": "k1-b15-q7",
        "question": "Hệ quả định lí Thalès áp dụng cho trường hợp nào?",
        "options": [
          "Đường thẳng song song cắt hai cạnh hoặc phần kéo dài của hai cạnh",
          "Chỉ khi cắt hai cạnh bên trong tam giác",
          "Chỉ khi đường thẳng đi qua trung điểm",
          "Chỉ tam giác vuông"
        ],
        "correctIndex": 0,
        "explanation": "Hệ quả vẫn đúng khi đường thẳng song song cắt phần kéo dài của hai cạnh tam giác.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường thẳng cắt phần kéo dài của AB và AC song song với BC tạo ra:",
          "options": [
            "Tam giác mới có các cạnh tỉ lệ với tam giác cũ",
            "Tam giác vuông",
            "Hình thang",
            "Tam giác đều"
          ],
          "correctIndex": 0,
          "explanation": "Tam giác mới có các cạnh tỉ lệ với tam giác cũ."
        }
      },
      {
        "id": "k1-b15-q8",
        "question": "Người ta dùng định lí Thalès và bóng của cột cờ để đo chiều cao. Cột cờ có bóng 6 m, cùng lúc một cọc cao 1.5 m có bóng 2 m. Chiều cao cột cờ là:",
        "options": [
          "4.5 m",
          "5 m",
          "4 m",
          "6 m"
        ],
        "correctIndex": 0,
        "explanation": "h / 1.5 = 6 / 2 => h = 1.5 × 3 = 4.5 m.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Một cây có bóng 8 m, cọc 1 m có bóng 2 m. Cây cao bao nhiêu?",
          "options": [
            "4 m",
            "6 m",
            "5 m",
            "3 m"
          ],
          "correctIndex": 0,
          "explanation": "h / 1 = 8 / 2 => h = 4 m."
        }
      },
      {
        "id": "k1-b15-q9",
        "question": "Cho hình thang ABCD (AB // CD). Một đường thẳng song song với hai đáy cắt AD tại M, BC tại N. Ta có:",
        "options": [
          "AM / MD = BN / NC",
          "AM / AD = NC / BC",
          "AM / MD = NC / BN",
          "AM = BN"
        ],
        "correctIndex": 0,
        "explanation": "Định lí Thalès mở rộng trong hình thang: AM/MD = BN/NC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trong hình thang ABCD (AB // CD), nếu M là trung điểm AD và MN // AB thì N là:",
          "options": [
            "Trung điểm BC",
            "Điểm bất kì trên BC",
            "Trực tâm",
            "Đỉnh"
          ],
          "correctIndex": 0,
          "explanation": "N là trung điểm của BC."
        }
      },
      {
        "id": "k1-b15-q10",
        "question": "Cho đoạn thẳng AB = 10 cm. Điểm C thuộc AB sao cho CA / CB = 2/3. Độ dài CA là:",
        "options": [
          "4 cm",
          "6 cm",
          "5 cm",
          "3 cm"
        ],
        "correctIndex": 0,
        "explanation": "CA = (2 / (2 + 3)) × 10 = (2/5) × 10 = 4 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đoạn AB = 12 cm. Điểm M trên AB sao cho MA / MB = 1/3. Độ dài MA là:",
          "options": [
            "3 cm",
            "4 cm",
            "6 cm",
            "2 cm"
          ],
          "correctIndex": 0,
          "explanation": "12 / (1 + 3) = 3 cm."
        }
      }
    ]
  },
  {
    "id": "k1-b16",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 4,
    "chapterTitle": "Chương IV: Định lí Thalès",
    "lessonNumber": 16,
    "title": "Bài 16. Đường trung bình của tam giác",
    "textbookRef": "Toán 8 KNTT - Bài 16",
    "summary": "• Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.\\n• Định lí: Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.\\n• Tính chất: Đường trung bình của tam giác thì song song với cạnh thứ ba và bằng nửa cạnh ấy: MN // BC và MN = BC / 2.",
    "keyFormulas": [
      "M là trung điểm AB, N là trung điểm AC => MN là ĐTB",
      "MN // BC & MN = BC / 2"
    ],
    "questions": [
      {
        "id": "k1-b16-q1",
        "question": "Đường trung bình của tam giác là đoạn thẳng:",
        "options": [
          "Nối trung điểm hai cạnh của tam giác",
          "Nối đỉnh với trung điểm cạnh đối diện",
          "Đi qua trọng tâm tam giác",
          "Vuông góc với một cạnh"
        ],
        "correctIndex": 0,
        "explanation": "Định nghĩa: Đường trung bình của tam giác nối trung điểm hai cạnh.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Một tam giác có bao nhiêu đường trung bình?",
          "options": [
            "3 đường",
            "1 đường",
            "2 đường",
            "4 đường"
          ],
          "correctIndex": 0,
          "explanation": "Mỗi cặp hai cạnh có 1 đường trung bình => có 3 đường."
        }
      },
      {
        "id": "k1-b16-q2",
        "question": "Tính chất của đường trung bình của tam giác là:",
        "options": [
          "Song song với cạnh thứ ba và bằng một nửa cạnh ấy",
          "Bằng cạnh thứ ba",
          "Vuông góc với cạnh thứ ba",
          "Cắt cạnh thứ ba tại trung điểm"
        ],
        "correctIndex": 0,
        "explanation": "Đường trung bình song song với cạnh thứ ba và bằng nửa cạnh đó.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu MN là đường trung bình của ΔABC (MN ứng với cạnh đáy BC) thì:",
          "options": [
            "MN // BC và MN = 1/2 BC",
            "MN = BC",
            "MN vuông góc BC",
            "MN // AB"
          ],
          "correctIndex": 0,
          "explanation": "MN // BC và MN = BC/2."
        }
      },
      {
        "id": "k1-b16-q3",
        "question": "Cho ΔABC có BC = 12 cm. Gọi M, N lần lượt là trung điểm của AB, AC. Độ dài đoạn MN là:",
        "options": [
          "6 cm",
          "24 cm",
          "4 cm",
          "8 cm"
        ],
        "correctIndex": 0,
        "explanation": "MN = BC / 2 = 12 / 2 = 6 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Cho MN là đường trung bình ứng với cạnh BC. Biết MN = 5 cm, độ dài BC là:",
          "options": [
            "10 cm",
            "2.5 cm",
            "5 cm",
            "15 cm"
          ],
          "correctIndex": 0,
          "explanation": "BC = 2 × MN = 10 cm."
        }
      },
      {
        "id": "k1-b16-q4",
        "question": "Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì:",
        "options": [
          "Đi qua trung điểm của cạnh thứ ba",
          "Bằng cạnh thứ hai",
          "Vuông góc với cạnh thứ ba",
          "Là đường phân giác"
        ],
        "correctIndex": 0,
        "explanation": "Định lí: Đi qua trung điểm cạnh thứ nhất và song song cạnh thứ 2 thì đi qua trung điểm cạnh thứ 3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trong ΔABC, M là trung điểm AB, d qua M song song BC cắt AC tại N. N là:",
          "options": [
            "Trung điểm của AC",
            "Trực tâm",
            "Trọng tâm",
            "Điểm tùy ý"
          ],
          "correctIndex": 0,
          "explanation": "N là trung điểm của AC."
        }
      },
      {
        "id": "k1-b16-q5",
        "question": "Ba đường trung bình của một tam giác chia tam giác đó thành:",
        "options": [
          "Bốn tam giác bằng nhau",
          "Ba tam giác bằng nhau",
          "Hai tam giác bằng nhau",
          "Bốn tam giác vuông"
        ],
        "correctIndex": 0,
        "explanation": "Ba đường trung bình chia tam giác thành 4 tam giác nhỏ bằng nhau (c-c-c).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Diện tích tam giác tạo bởi 3 đường trung bình bằng bao nhiêu phần diện tích tam giác ban đầu?",
          "options": [
            "1/4",
            "1/2",
            "1/3",
            "1/8"
          ],
          "correctIndex": 0,
          "explanation": "Bằng 1/4 diện tích tam giác gốc."
        }
      },
      {
        "id": "k1-b16-q6",
        "question": "Chu vi tam giác tạo bởi ba đường trung bình của ΔABC bằng bao nhiêu phần chu vi ΔABC?",
        "options": [
          "1/2",
          "1/4",
          "1/3",
          "2/3"
        ],
        "correctIndex": 0,
        "explanation": "Mỗi cạnh của tam giác nhỏ bằng 1/2 cạnh tương ứng nên chu vi bằng 1/2 chu vi ΔABC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu chu vi ΔABC là 20 cm thì chu vi tam giác tạo bởi 3 đường trung bình là:",
          "options": [
            "10 cm",
            "5 cm",
            "15 cm",
            "40 cm"
          ],
          "correctIndex": 0,
          "explanation": "20 / 2 = 10 cm."
        }
      },
      {
        "id": "k1-b16-q7",
        "question": "Cho tứ giác ABCD. Nối trung điểm của 4 cạnh AB, BC, CD, DA theo thứ tự được một hình gì?",
        "options": [
          "Hình bình hành",
          "Hình chữ nhật",
          "Hình thoi",
          "Hình thang cân"
        ],
        "correctIndex": 0,
        "explanation": "Các cạnh của tứ giác mới song song và bằng nửa đường chéo AC, BD nên là hình bình hành (hình bình hành Varignon).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tứ giác có các đỉnh là trung điểm 4 cạnh của một tứ giác bất kì luôn là:",
          "options": [
            "Hình bình hành",
            "Hình thoi",
            "Hình chữ nhật",
            "Hình vuông"
          ],
          "correctIndex": 0,
          "explanation": "Hình bình hành."
        }
      },
      {
        "id": "k1-b16-q8",
        "question": "Để hình bình hành nối 4 trung điểm của tứ giác ABCD là hình thoi thì tứ giác ABCD cần có:",
        "options": [
          "Hai đường chéo bằng nhau (AC = BD)",
          "Hai đường chéo vuông góc",
          "Các cạnh bằng nhau",
          "Bốn góc vuông"
        ],
        "correctIndex": 0,
        "explanation": "Các cạnh hình bình hành bằng nửa AC và nửa BD. Để các cạnh bằng nhau thì AC = BD.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Để hình bình hành nối 4 trung điểm là hình chữ nhật thì hai đường chéo tứ giác phải:",
          "options": [
            "Vuông góc với nhau (AC ⊥ BD)",
            "Bằng nhau",
            "Song song",
            "Cắt nhau tại trung điểm"
          ],
          "correctIndex": 0,
          "explanation": "Vuông góc với nhau."
        }
      },
      {
        "id": "k1-b16-q9",
        "question": "Cho ΔABC cân tại A có AB = AC = 10 cm, BC = 12 cm. Đường trung bình MN song song với BC có độ dài là:",
        "options": [
          "6 cm",
          "5 cm",
          "10 cm",
          "12 cm"
        ],
        "correctIndex": 0,
        "explanation": "MN = BC / 2 = 12 / 2 = 6 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Đường trung bình nối trung điểm AB và BC có độ dài là:",
          "options": [
            "5 cm",
            "6 cm",
            "10 cm",
            "4 cm"
          ],
          "correctIndex": 0,
          "explanation": "AC / 2 = 10 / 2 = 5 cm."
        }
      },
      {
        "id": "k1-b16-q10",
        "question": "Đường trung bình của hình thang có tính chất:",
        "options": [
          "Song song với hai đáy và bằng nửa tổng hai đáy",
          "Bằng đáy lớn",
          "Bằng đáy nhỏ",
          "Bằng hiệu hai đáy"
        ],
        "correctIndex": 0,
        "explanation": "Đường trung bình hình thang = (đáy lớn + đáy nhỏ) / 2.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hình thang có 2 đáy là 6 cm và 10 cm thì đường trung bình dài:",
          "options": [
            "8 cm",
            "16 cm",
            "4 cm",
            "7 cm"
          ],
          "correctIndex": 0,
          "explanation": "(6 + 10) / 2 = 8 cm."
        }
      }
    ]
  },
  {
    "id": "k1-b17",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 4,
    "chapterTitle": "Chương IV: Định lí Thalès",
    "lessonNumber": 17,
    "title": "Bài 17. Tính chất đường phân giác của tam giác",
    "textbookRef": "Toán 8 KNTT - Bài 17",
    "summary": "• Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn đó.\\n• Nếu AD là tia phân giác của góc A trong ΔABC (D ∈ BC) thì: DB / DC = AB / AC.\\n• Định lí vẫn đúng đối với tia phân giác của góc ngoài của tam giác.",
    "keyFormulas": [
      "AD là phân giác trong góc A: DB / DC = AB / AC",
      "AE là phân giác ngoài góc A (AB ≠ AC): EB / EC = AB / AC"
    ],
    "questions": [
      {
        "id": "k1-b17-q1",
        "question": "Cho ΔABC có AD là phân giác trong của góc A (D ∈ BC). Hệ thức nào sau đây đúng?",
        "options": [
          "DB / DC = AB / AC",
          "DB / DC = AC / AB",
          "DB / AB = AC / DC",
          "DB / DC = BC / AC"
        ],
        "correctIndex": 0,
        "explanation": "Định lí đường phân giác: DB / DC = AB / AC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hệ thức nào tương đương với DB / DC = AB / AC?",
          "options": [
            "DB / AB = DC / AC",
            "DB · DC = AB · AC",
            "DB / AC = DC / AB",
            "DB + DC = AB + AC"
          ],
          "correctIndex": 0,
          "explanation": "Hoán vị trung tỉ: DB / AB = DC / AC."
        }
      },
      {
        "id": "k1-b17-q2",
        "question": "Cho ΔABC có AB = 4 cm, AC = 6 cm. Tia phân giác góc A cắt BC tại D. Tỉ số DB / DC là:",
        "options": [
          "2/3",
          "3/2",
          "1/2",
          "4/10"
        ],
        "correctIndex": 0,
        "explanation": "DB / DC = AB / AC = 4 / 6 = 2/3.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu AB = 6 cm, AC = 9 cm thì tỉ số DB / DC bằng:",
          "options": [
            "2/3",
            "3/2",
            "1/3",
            "3/4"
          ],
          "correctIndex": 0,
          "explanation": "6 / 9 = 2/3."
        }
      },
      {
        "id": "k1-b17-q3",
        "question": "Cho ΔABC có AB = 6 cm, AC = 9 cm, BC = 10 cm. Phân giác AD cắt BC tại D. Độ dài đoạn DB là:",
        "options": [
          "4 cm",
          "6 cm",
          "5 cm",
          "3 cm"
        ],
        "correctIndex": 0,
        "explanation": "DB / DC = 6 / 9 = 2/3 => DB / (DB + DC) = 2 / (2 + 3) => DB / 10 = 2/5 => DB = 4 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu AB = 3 cm, AC = 6 cm, BC = 9 cm thì DB dài:",
          "options": [
            "3 cm",
            "6 cm",
            "4.5 cm",
            "2 cm"
          ],
          "correctIndex": 0,
          "explanation": "DB / 9 = 3 / (3 + 6) = 1/3 => DB = 3 cm."
        }
      },
      {
        "id": "k1-b17-q4",
        "question": "Trong bài toán trên (AB = 6 cm, AC = 9 cm, BC = 10 cm), độ dài đoạn DC là:",
        "options": [
          "6 cm",
          "4 cm",
          "5 cm",
          "7 cm"
        ],
        "correctIndex": 0,
        "explanation": "DC = BC - DB = 10 - 4 = 6 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Với BC = 9 cm và DB = 3 cm thì DC dài:",
          "options": [
            "6 cm",
            "3 cm",
            "4.5 cm",
            "5 cm"
          ],
          "correctIndex": 0,
          "explanation": "9 - 3 = 6 cm."
        }
      },
      {
        "id": "k1-b17-q5",
        "question": "Tam giác ABC cân tại A có đường phân giác AD xuất phát từ đỉnh A. Điểm D là:",
        "options": [
          "Trung điểm của BC",
          "Trực tâm",
          "Trọng tâm",
          "Điểm nằm ngoài BC"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác cân, đường phân giác xuất phát từ đỉnh đồng thời là đường trung tuyến nên D là trung điểm BC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khi tam giác ABC cân tại A thì tỉ số DB / DC bằng:",
          "options": [
            "1",
            "2",
            "1/2",
            "0"
          ],
          "correctIndex": 0,
          "explanation": "Vì AB = AC nên DB / DC = 1 => DB = DC."
        }
      },
      {
        "id": "k1-b17-q6",
        "question": "Đường phân giác góc ngoài của tam giác có tính chất tỉ lệ tương tự khi nào?",
        "options": [
          "Khi tam giác không cân tại đỉnh đó (hai cạnh kề không bằng nhau)",
          "Với mọi tam giác",
          "Chỉ khi tam giác đều",
          "Chỉ khi tam giác vuông"
        ],
        "correctIndex": 0,
        "explanation": "Nếu AB = AC thì phân giác ngoài song song với BC, không cắt đường thẳng BC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu ΔABC cân tại A thì phân giác góc ngoài tại A sẽ:",
          "options": [
            "Song song với BC",
            "Cắt BC",
            "Vuông góc với BC",
            "Trùng với BC"
          ],
          "correctIndex": 0,
          "explanation": "Song song với cạnh đáy BC."
        }
      },
      {
        "id": "k1-b17-q7",
        "question": "Cho ΔABC vuông tại A có AB = 6 cm, AC = 8 cm. Tính BC:",
        "options": [
          "10 cm",
          "14 cm",
          "48 cm",
          "7 cm"
        ],
        "correctIndex": 0,
        "explanation": "BC = √(6² + 8²) = 10 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Với AB = 6, AC = 8, BC = 10, phân giác AD cắt BC tại D. Tính DB:",
          "options": [
            "30/7 cm",
            "40/7 cm",
            "5 cm",
            "4 cm"
          ],
          "correctIndex": 0,
          "explanation": "DB / 10 = 6 / (6 + 8) = 6/14 = 3/7 => DB = 30/7 cm."
        }
      },
      {
        "id": "k1-b17-q8",
        "question": "Nếu D nằm trên cạnh BC của ΔABC sao cho DB / DC = AB / AC thì kết luận nào đúng?",
        "options": [
          "AD là tia phân giác của góc BAC",
          "AD là đường cao",
          "AD là trung tuyến",
          "AD vuông góc BC"
        ],
        "correctIndex": 0,
        "explanation": "Định lí đảo: Nếu DB/DC = AB/AC thì AD là đường phân giác của góc BAC.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu D là trung điểm BC và AB = AC thì AD là:",
          "options": [
            "Phân giác góc A",
            "Đường trung bình",
            "Cạnh bên",
            "Không xác định"
          ],
          "correctIndex": 0,
          "explanation": "Phân giác góc A."
        }
      },
      {
        "id": "k1-b17-q9",
        "question": "Cho ΔABC có phân giác trong AD và phân giác ngoài AE (D, E ∈ BC). Khi đó góc DAE bằng:",
        "options": [
          "90°",
          "60°",
          "120°",
          "180°"
        ],
        "correctIndex": 0,
        "explanation": "Tia phân giác của hai góc kề bù luôn vuông góc với nhau: ∠DAE = 90°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Hai tia phân giác của hai góc kề bù tạo với nhau một góc bằng:",
          "options": [
            "90°",
            "180°",
            "45°",
            "60°"
          ],
          "correctIndex": 0,
          "explanation": "90°."
        }
      },
      {
        "id": "k1-b17-q10",
        "question": "Cho ΔABC, phân giác AD. Biết DB = 2 cm, DC = 3 cm và chu vi ΔABC bằng 15 cm. Độ dài AB là:",
        "options": [
          "4 cm",
          "6 cm",
          "5 cm",
          "3 cm"
        ],
        "correctIndex": 0,
        "explanation": "BC = 2 + 3 = 5 cm => AB + AC = 15 - 5 = 10 cm. AB/AC = 2/3 => AB = 10 × 2/5 = 4 cm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Trong bài toán trên, độ dài AC là:",
          "options": [
            "6 cm",
            "4 cm",
            "5 cm",
            "8 cm"
          ],
          "correctIndex": 0,
          "explanation": "10 - 4 = 6 cm."
        }
      }
    ]
  }
];
