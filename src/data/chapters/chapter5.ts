import { Lesson } from '../../types';

export const CHAPTER_5_LESSONS: Lesson[] = [
  {
    "id": "k1-b18",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 5,
    "chapterTitle": "Chương V: Dữ liệu và biểu đồ",
    "lessonNumber": 18,
    "title": "Bài 18. Thu thập và phân loại dữ liệu",
    "textbookRef": "Toán 8 KNTT - Bài 18",
    "summary": "• Dữ liệu là các thông tin thu thập được dưới dạng số, chữ, hình ảnh,...\\n• Dữ liệu số (số liệu) và dữ liệu không phải là số.\\n• Dữ liệu định tính (danh mục, thứ tự) và dữ liệu định lượng (rời rạc, liên tục).\\n• Tính hợp lí của dữ liệu: dữ liệu phải đúng định dạng, nằm trong phạm vi cho phép, không mâu thuẫn.",
    "keyFormulas": [
      "Dữ liệu số (định lượng): đo lường, đếm được",
      "Dữ liệu không là số (định tính): phân loại, tên gọi, mức độ"
    ],
    "questions": [
      {
        "id": "k1-b18-q1",
        "question": "Dãy dữ liệu nào sau đây là dãy số liệu (dữ liệu định lượng)?",
        "options": [
          "Chiều cao (cm) của 5 học sinh: 155, 160, 158, 162, 165",
          "Màu sắc yêu thích: đỏ, xanh, vàng",
          "Xếp loại học lực: Tốt, Khá, Đạt",
          "Tên các môn học: Toán, Văn, Anh"
        ],
        "correctIndex": 0,
        "explanation": "Dãy số 155, 160, 158, 162, 165 là các con số có thể đo lường và tính toán được.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Dãy dữ liệu nào sau đây là số liệu?",
          "options": [
            "Điểm kiểm tra Toán: 8, 9, 7, 10",
            "Nơi sinh: Hà Nội, Huế, TP.HCM",
            "Giới tính: Nam, Nữ",
            "Sở thích: Đọc sách, Đá bóng"
          ],
          "correctIndex": 0,
          "explanation": "Điểm kiểm tra là số liệu định lượng."
        }
      },
      {
        "id": "k1-b18-q2",
        "question": "Dữ liệu nào sau đây là dữ liệu không phải là số (định tính)?",
        "options": [
          "Quốc tịch của các du khách đến Việt Nam",
          "Cân nặng của các bạn trong lớp",
          "Số lượng học sinh giỏi",
          "Nhiệt độ trung bình trong ngày"
        ],
        "correctIndex": 0,
        "explanation": "Quốc tịch là tên gọi (Việt Nam, Pháp, Nhật,...) không phải số.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Dữ liệu nào sau đây là định tính?",
          "options": [
            "Tên các loài hoa trong vườn trường",
            "Số cánh của mỗi bông hoa",
            "Chiều cao của cây hoa",
            "Giá tiền của chậu hoa"
          ],
          "correctIndex": 0,
          "explanation": "Tên loài hoa là dữ liệu định tính."
        }
      },
      {
        "id": "k1-b18-q3",
        "question": "Khi thu thập tuổi của học sinh lớp 8A, giá trị nào sau đây là KHÔNG hợp lí?",
        "options": [
          "140 tuổi",
          "13 tuổi",
          "14 tuổi",
          "15 tuổi"
        ],
        "correctIndex": 0,
        "explanation": "Học sinh lớp 8 thông thường khoảng 13-15 tuổi, 140 tuổi là giá trị vô lí do lỗi nhập liệu.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Điểm kiểm tra 1 tiết môn Toán (thang điểm 10) giá trị nào bất hợp lí?",
          "options": [
            "15 điểm",
            "8 điểm",
            "10 điểm",
            "6.5 điểm"
          ],
          "correctIndex": 0,
          "explanation": "Thang điểm 10 thì điểm tối đa là 10, 15 điểm là bất hợp lí."
        }
      },
      {
        "id": "k1-b18-q4",
        "question": "Để khảo sát món ăn sáng yêu thích của học sinh lớp 8, phương pháp thu thập dữ liệu nào phù hợp nhất?",
        "options": [
          "Lập phiếu hỏi (bảng hỏi điều tra)",
          "Đo lường bằng thước",
          "Quan sát qua kính hiển vi",
          "Lấy số liệu từ vệ tinh"
        ],
        "correctIndex": 0,
        "explanation": "Dùng phiếu hỏi hoặc phỏng vấn để thu thập ý kiến về sở thích.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Để biết nhiệt độ không khí tại một thời điểm, ta dùng phương pháp:",
          "options": [
            "Đo đạc bằng nhiệt kế",
            "Hỏi ý kiến bạn bè",
            "Bình chọn",
            "Phỏng vấn"
          ],
          "correctIndex": 0,
          "explanation": "Đo trực tiếp bằng dụng cụ đo."
        }
      },
      {
        "id": "k1-b18-q5",
        "question": "Dữ liệu nào sau đây có thể sắp xếp theo thứ tự (dữ liệu định tính có thứ tự)?",
        "options": [
          "Mức độ hài lòng: Rất hài lòng, Hài lòng, Bình thường, Không hài lòng",
          "Màu mắt: đen, nâu, xanh",
          "Nơi ở: Hà Nội, Đà Nẵng, Cần Thơ",
          "Phương tiện đi học: xe đạp, xe buýt, đi bộ"
        ],
        "correctIndex": 0,
        "explanation": "Mức độ hài lòng có thứ bậc tự nhiên từ cao đến thấp.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Dữ liệu nào sau đây có thứ tự?",
          "options": [
            "Xếp loại rèn luyện: Tốt, Khá, Đạt, Chưa đạt",
            "Họ và tên học sinh",
            "Số điện thoại",
            "Biển số xe"
          ],
          "correctIndex": 0,
          "explanation": "Mức xếp loại rèn luyện có thứ bậc rõ ràng."
        }
      },
      {
        "id": "k1-b18-q6",
        "question": "Trong danh sách điểm kiểm tra của 5 bạn: 7, 8, -2, 9, 10. Giá trị không hợp lí là:",
        "options": [
          "-2",
          "7",
          "9",
          "10"
        ],
        "correctIndex": 0,
        "explanation": "Điểm số không thể là số âm.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số con trong một gia đình: giá trị nào bất hợp lí?",
          "options": [
            "-1 con",
            "2 con",
            "3 con",
            "0 con"
          ],
          "correctIndex": 0,
          "explanation": "Số con phải là số tự nhiên không âm."
        }
      },
      {
        "id": "k1-b18-q7",
        "question": "Dữ liệu rời rạc là dữ liệu số nhận giá trị nào sau đây?",
        "options": [
          "Số học sinh trong mỗi lớp học",
          "Thời gian chạy 100m của học sinh",
          "Chiều cao của cây",
          "Khối lượng bao gạo"
        ],
        "correctIndex": 0,
        "explanation": "Số học sinh chỉ nhận các giá trị nguyên (1, 2, 3,...), là dữ liệu rời rạc.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Dữ liệu liên tục là:",
          "options": [
            "Nhiệt độ cơ thể người (đo bằng nhiệt kế)",
            "Số bàn học trong phòng",
            "Số quyển sách trên kệ",
            "Số cây trồng trong vườn"
          ],
          "correctIndex": 0,
          "explanation": "Nhiệt độ có thể nhận giá trị thực liên tục (36.5°C, 37.1°C,...)."
        }
      },
      {
        "id": "k1-b18-q8",
        "question": "Thầy giáo ghi chép số lượng học sinh vắng mỗi ngày trong 1 tuần: 0, 1, 0, 2, 1. Đây là loại dữ liệu gì?",
        "options": [
          "Dữ liệu số (rời rạc)",
          "Dữ liệu định tính",
          "Dữ liệu liên tục",
          "Dữ liệu không có giá trị"
        ],
        "correctIndex": 0,
        "explanation": "Các con số đếm 0, 1, 2 là số liệu rời rạc.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Dãy số áo của các cầu thủ bóng đá là loại dữ liệu:",
          "options": [
            "Dữ liệu định tính (dùng số làm nhãn định danh)",
            "Dữ liệu đo lường",
            "Dữ liệu liên tục",
            "Dữ liệu vô nghĩa"
          ],
          "correctIndex": 0,
          "explanation": "Số áo dùng để định danh cầu thủ, không dùng để tính trung bình hay đo lường."
        }
      },
      {
        "id": "k1-b18-q9",
        "question": "Tiêu chí nào để kiểm tra tính hợp lí của một bảng dữ liệu?",
        "options": [
          "Đúng định dạng, trong miền giá trị cho phép và không mâu thuẫn",
          "Phải có ít nhất 1000 số liệu",
          "Phải vẽ được biểu đồ tròn",
          "Mọi số liệu phải bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "Dữ liệu phải đúng định dạng, nằm trong khoảng thực tế và không có mâu thuẫn nội tại.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Một lớp có 40 học sinh nhưng tổng số học sinh xếp loại Tốt, Khá, Đạt là 45. Bảng dữ liệu này:",
          "options": [
            "Bất hợp lí do mâu thuẫn về tổng số",
            "Hoàn toàn hợp lí",
            "Chính xác",
            "Cần thêm số liệu"
          ],
          "correctIndex": 0,
          "explanation": "Tổng số thành phần (45) vượt quá tổng số cả lớp (40)."
        }
      },
      {
        "id": "k1-b18-q10",
        "question": "Dữ liệu thu thập từ Internet, sách báo, niên giám thống kê được gọi là:",
        "options": [
          "Dữ liệu thứ cấp (gián tiếp)",
          "Dữ liệu sơ cấp (trực tiếp)",
          "Dữ liệu sai lệch",
          "Dữ liệu bí mật"
        ],
        "correctIndex": 0,
        "explanation": "Dữ liệu có sẵn từ nguồn tài liệu đã công bố gọi là dữ liệu thứ cấp.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Dữ liệu do chính bản thân em đi đo đạc và phỏng vấn được gọi là:",
          "options": [
            "Dữ liệu sơ cấp (trực tiếp)",
            "Dữ liệu thứ cấp",
            "Dữ liệu mô phỏng",
            "Dữ liệu sao chép"
          ],
          "correctIndex": 0,
          "explanation": "Dữ liệu sơ cấp do chính người nghiên cứu thu thập trực tiếp."
        }
      }
    ]
  },
  {
    "id": "k1-b19",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 5,
    "chapterTitle": "Chương V: Dữ liệu và biểu đồ",
    "lessonNumber": 19,
    "title": "Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ",
    "textbookRef": "Toán 8 KNTT - Bài 19",
    "summary": "• Biểu diễn dữ liệu bằng bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép, biểu đồ đoạn thẳng, biểu đồ hình quạt tròn.\\n• Biểu đồ hình quạt tròn: thích hợp để biểu thị tỉ lệ phần trăm của từng phần so với toàn thể.\\n• Biểu đồ đoạn thẳng: thích hợp để biểu thị sự thay đổi xu hướng của một đại lượng theo thời gian.",
    "keyFormulas": [
      "Tỉ lệ hình quạt tròn: góc ở tâm = tỉ lệ % × 360°",
      "Tổng các tỉ lệ % = 100%"
    ],
    "questions": [
      {
        "id": "k1-b19-q1",
        "question": "Để biểu diễn tỉ lệ phần trăm các loại cây trong một khu vườn, biểu đồ nào là thích hợp nhất?",
        "options": [
          "Biểu đồ hình quạt tròn",
          "Biểu đồ đoạn thẳng",
          "Biểu đồ đường gấp khúc",
          "Biểu đồ phân tán"
        ],
        "correctIndex": 0,
        "explanation": "Biểu đồ hình quạt tròn dùng để so sánh các phần so với toàn thể (tổng 100%).",
        "hasDiagram": true,
        "diagramType": "chart",
        "diagramData": {
          "type": "pie",
          "values": [
            40,
            30,
            20,
            10
          ]
        },
        "similarQuestion": {
          "question": "Để thể hiện cơ cấu dân số theo nhóm tuổi, ta dùng:",
          "options": [
            "Biểu đồ hình quạt tròn",
            "Biểu đồ đoạn thẳng",
            "Biểu đồ nhánh",
            "Sơ đồ hình cây"
          ],
          "correctIndex": 0,
          "explanation": "Cơ cấu phần trăm thường dùng biểu đồ hình quạt tròn."
        }
      },
      {
        "id": "k1-b19-q2",
        "question": "Để biểu diễn sự thay đổi nhiệt độ tại Hà Nội trong 12 tháng của năm, biểu đồ nào thích hợp nhất?",
        "options": [
          "Biểu đồ đoạn thẳng",
          "Biểu đồ hình quạt tròn",
          "Biểu đồ tranh",
          "Bảng chữ"
        ],
        "correctIndex": 0,
        "explanation": "Biểu đồ đoạn thẳng trực quan nhất để quan sát xu hướng thay đổi theo thời gian.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Để theo dõi chiều cao của bạn An từ 6 tuổi đến 14 tuổi, ta nên dùng:",
          "options": [
            "Biểu đồ đoạn thẳng",
            "Biểu đồ hình quạt tròn",
            "Biểu đồ cột chồng",
            "Biểu đồ tròn"
          ],
          "correctIndex": 0,
          "explanation": "Biểu đồ đoạn thẳng biểu thị diễn biến theo thời gian."
        }
      },
      {
        "id": "k1-b19-q3",
        "question": "Trên biểu đồ hình quạt tròn, một hình quạt biểu thị 25% thì góc ở tâm tương ứng là:",
        "options": [
          "90°",
          "45°",
          "60°",
          "100°"
        ],
        "correctIndex": 0,
        "explanation": "25% × 360° = (1/4) × 360° = 90°.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Góc ở tâm tương ứng với 50% trong biểu đồ quạt tròn là:",
          "options": [
            "180°",
            "90°",
            "120°",
            "360°"
          ],
          "correctIndex": 0,
          "explanation": "50% × 360° = 180°."
        }
      },
      {
        "id": "k1-b19-q4",
        "question": "Góc ở tâm bằng 72° trong biểu đồ hình quạt tròn ứng với tỉ lệ phần trăm là bao nhiêu?",
        "options": [
          "20%",
          "15%",
          "25%",
          "30%"
        ],
        "correctIndex": 0,
        "explanation": "(72° / 360°) × 100% = 0.2 × 100% = 20%.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Góc 36° ứng với bao nhiêu %?",
          "options": [
            "10%",
            "5%",
            "20%",
            "15%"
          ],
          "correctIndex": 0,
          "explanation": "(36° / 360°) × 100% = 10%."
        }
      },
      {
        "id": "k1-b19-q5",
        "question": "Để so sánh số học sinh nam và nữ của 4 lớp khối 8, loại biểu đồ nào thích hợp nhất?",
        "options": [
          "Biểu đồ cột kép",
          "Biểu đồ đoạn thẳng",
          "Biểu đồ hình quạt tròn",
          "Biểu đồ tranh"
        ],
        "correctIndex": 0,
        "explanation": "Biểu đồ cột kép cho phép so sánh hai đối tượng (nam và nữ) song song trên từng đơn vị lớp.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "So sánh lượng mưa trung bình giữa Hà Nội và TP.HCM qua các tháng, nên dùng:",
          "options": [
            "Biểu đồ cột kép (hoặc đường kép)",
            "Biểu đồ quạt tròn",
            "Biểu đồ tranh",
            "Biểu đồ đơn"
          ],
          "correctIndex": 0,
          "explanation": "Biểu đồ cột kép thích hợp so sánh hai đối tượng."
        }
      },
      {
        "id": "k1-b19-q6",
        "question": "Tổng phần trăm của tất cả các hình quạt trong biểu đồ hình quạt tròn luôn bằng:",
        "options": [
          "100%",
          "360%",
          "180%",
          "50%"
        ],
        "correctIndex": 0,
        "explanation": "Toàn bộ hình tròn đại diện cho 100% dữ liệu.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tổng các góc ở tâm của tất cả các hình quạt trong một biểu đồ tròn bằng:",
          "options": [
            "360°",
            "180°",
            "100°",
            "720°"
          ],
          "correctIndex": 0,
          "explanation": "Một vòng tròn trọn vẹn là 360°."
        }
      },
      {
        "id": "k1-b19-q7",
        "question": "Bảng thống kê cho biết tỉ lệ bình chọn: Bạn A (40%), Bạn B (35%), Bạn C (25%). Tổng tỉ lệ là:",
        "options": [
          "100%",
          "90%",
          "110%",
          "80%"
        ],
        "correctIndex": 0,
        "explanation": "40% + 35% + 25% = 100%.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nếu A chiếm 50%, B chiếm 30% thì phần còn lại của C là:",
          "options": [
            "20%",
            "15%",
            "25%",
            "10%"
          ],
          "correctIndex": 0,
          "explanation": "100% - 50% - 30% = 20%."
        }
      },
      {
        "id": "k1-b19-q8",
        "question": "Trong biểu đồ cột, độ cao của mỗi cột biểu thị:",
        "options": [
          "Số lượng hoặc giá trị của đại lượng cần biểu diễn",
          "Thời gian xảy ra",
          "Tên của nhóm đối tượng",
          "Màu sắc"
        ],
        "correctIndex": 0,
        "explanation": "Độ cao (hoặc độ dài) của cột tỉ lệ thuận với số lượng/tần số của dữ liệu.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khoảng cách giữa các cột trong biểu đồ cột nên:",
          "options": [
            "Bằng nhau và đồng đều",
            "Không cách nhau",
            "Cột sau chồng lên cột trước",
            "Cách tùy ý"
          ],
          "correctIndex": 0,
          "explanation": "Bề rộng các cột và khoảng cách giữa các cột phải đều nhau để đảm bảo trực quan."
        }
      },
      {
        "id": "k1-b19-q9",
        "question": "Ưu điểm nổi bật nhất của biểu đồ so với bảng số liệu là:",
        "options": [
          "Trực quan, dễ quan sát, nhận xét và so sánh nhanh chóng",
          "Ghi được nhiều chi tiết hơn bảng số",
          "Dễ vẽ hơn viết chữ",
          "Không cần số liệu"
        ],
        "correctIndex": 0,
        "explanation": "Biểu đồ giúp người đọc nắm bắt xu thế và so sánh dữ liệu một cách trực quan, tức thì.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Biểu đồ tranh thường dùng biểu tượng gì?",
          "options": [
            "Hình ảnh hoặc biểu tượng quy ước số lượng",
            "Các đoạn thẳng",
            "Các hình tròn cắt nhỏ",
            "Mũi tên"
          ],
          "correctIndex": 0,
          "explanation": "Dùng biểu tượng hình ảnh trực quan để thay cho số lượng."
        }
      },
      {
        "id": "k1-b19-q10",
        "question": "Một biểu đồ hình quạt tròn thể hiện sở thích thể thao của 200 học sinh, trong đó bóng đá chiếm 45%. Số học sinh thích bóng đá là:",
        "options": [
          "90 học sinh",
          "45 học sinh",
          "80 học sinh",
          "100 học sinh"
        ],
        "correctIndex": 0,
        "explanation": "200 × 45% = 200 × 0.45 = 90 học sinh.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khu vườn có 150 cây, hoa hồng chiếm 20%. Số cây hoa hồng là:",
          "options": [
            "30 cây",
            "20 cây",
            "40 cây",
            "25 cây"
          ],
          "correctIndex": 0,
          "explanation": "150 × 20% = 30 cây."
        }
      }
    ]
  },
  {
    "id": "k1-b20",
    "grade": "8",
    "semester": 1,
    "chapterNumber": 5,
    "chapterTitle": "Chương V: Dữ liệu và biểu đồ",
    "lessonNumber": 20,
    "title": "Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ",
    "textbookRef": "Toán 8 KNTT - Bài 20",
    "summary": "• Đọc và phân tích thông tin từ biểu đồ: tìm giá trị lớn nhất, nhỏ nhất, xu hướng tăng/giảm.\\n• So sánh các dữ liệu giữa các nhóm đối tượng.\\n• Đưa ra nhận xét, kết luận và giải quyết các bài toán thực tiễn dựa trên dữ liệu biểu đồ.\\n• Nhận biết những biểu đồ gây hiểu lầm (ví dụ: trục tung không bắt đầu từ số 0 hoặc tỉ lệ không đều).",
    "keyFormulas": [
      "Tỉ số tăng trưởng = (Giá trị sau - Giá trị trước) / Giá trị trước × 100%",
      "Giá trị trung bình = Tổng các giá trị / Số lượng giá trị"
    ],
    "questions": [
      {
        "id": "k1-b20-q1",
        "question": "Dựa vào biểu đồ đoạn thẳng thể hiện doanh thu 4 quý: Quý 1 (20 triệu), Quý 2 (30 triệu), Quý 3 (25 triệu), Quý 4 (45 triệu). Doanh thu cao nhất vào:",
        "options": [
          "Quý 4",
          "Quý 2",
          "Quý 3",
          "Quý 1"
        ],
        "correctIndex": 0,
        "explanation": "Quý 4 đạt đỉnh cao nhất là 45 triệu đồng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Quý có doanh thu thấp nhất là:",
          "options": [
            "Quý 1",
            "Quý 2",
            "Quý 3",
            "Quý 4"
          ],
          "correctIndex": 0,
          "explanation": "Quý 1 thấp nhất với 20 triệu đồng."
        }
      },
      {
        "id": "k1-b20-q2",
        "question": "Tổng doanh thu cả năm trong ví dụ trên là:",
        "options": [
          "120 triệu đồng",
          "110 triệu đồng",
          "130 triệu đồng",
          "100 triệu đồng"
        ],
        "correctIndex": 0,
        "explanation": "20 + 30 + 25 + 45 = 120 triệu đồng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Doanh thu trung bình mỗi quý là:",
          "options": [
            "30 triệu đồng",
            "25 triệu đồng",
            "35 triệu đồng",
            "40 triệu đồng"
          ],
          "correctIndex": 0,
          "explanation": "120 / 4 = 30 triệu đồng."
        }
      },
      {
        "id": "k1-b20-q3",
        "question": "Doanh thu từ Quý 3 lên Quý 4 đã tăng thêm bao nhiêu phần trăm?",
        "options": [
          "80%",
          "50%",
          "40%",
          "20%"
        ],
        "correctIndex": 0,
        "explanation": "Mức tăng: 45 - 25 = 20 triệu. Tỉ lệ tăng = (20 / 25) × 100% = 80%.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số lượng từ 50 tăng lên 75 thì mức tăng phần trăm là:",
          "options": [
            "50%",
            "25%",
            "75%",
            "30%"
          ],
          "correctIndex": 0,
          "explanation": "((75 - 50) / 50) × 100% = 50%."
        }
      },
      {
        "id": "k1-b20-q4",
        "question": "Hiện tượng nào sau đây trên biểu đồ cột có thể gây hiểu lầm (phóng đại sự khác biệt)?",
        "options": [
          "Trục tung không bắt đầu từ giá trị 0 mà bắt đầu từ số lớn",
          "Các cột có độ rộng bằng nhau",
          "Có ghi rõ số liệu trên đầu mỗi cột",
          "Có chú giải rõ ràng"
        ],
        "correctIndex": 0,
        "explanation": "Khi trục tung bị cắt bớt không bắt đầu từ 0, độ chênh lệch chiều cao cột sẽ phóng đại sự khác biệt thực tế.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Biểu đồ gây hiểu lầm khi:",
          "options": [
            "Khoảng cách chia trên trục số không đều",
            "Các cột thẳng đứng",
            "Có tên biểu đồ",
            "Màu sắc trang nhã"
          ],
          "correctIndex": 0,
          "explanation": "Tỉ lệ trục không đều gây bóp méo nhận thức thị giác."
        }
      },
      {
        "id": "k1-b20-q5",
        "question": "Biểu đồ cột kép so sánh điểm Toán thi giữa kì và cuối kì của bạn Bình: Giữa kì: 7 điểm, Cuối kì: 9 điểm. Điểm của Bình đã:",
        "options": [
          "Tăng 2 điểm",
          "Giảm 2 điểm",
          "Không đổi",
          "Tăng 3 điểm"
        ],
        "correctIndex": 0,
        "explanation": "9 - 7 = 2 điểm (tăng 2 điểm).",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Giữa kì 8 điểm, cuối kì 6 điểm thì điểm đã:",
          "options": [
            "Giảm 2 điểm",
            "Tăng 2 điểm",
            "Giảm 1 điểm",
            "Tăng 1 điểm"
          ],
          "correctIndex": 0,
          "explanation": "8 - 6 = 2 điểm giảm."
        }
      },
      {
        "id": "k1-b20-q6",
        "question": "Biểu đồ hình quạt tròn cho biết cơ cấu chi tiêu của gia đình: Tiền ăn 50%, Giáo dục 20%, Tiết kiệm 15%, Chi khác 15%. Khoản chi lớn nhất là:",
        "options": [
          "Tiền ăn",
          "Giáo dục",
          "Tiết kiệm",
          "Chi khác"
        ],
        "correctIndex": 0,
        "explanation": "Tiền ăn chiếm tỉ lệ lớn nhất với 50%.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Khoản chi nào bằng nhau trong biểu đồ trên?",
          "options": [
            "Tiết kiệm và Chi khác",
            "Tiền ăn và Giáo dục",
            "Giáo dục và Tiết kiệm",
            "Không có khoản nào"
          ],
          "correctIndex": 0,
          "explanation": "Cả hai đều chiếm 15%."
        }
      },
      {
        "id": "k1-b20-q7",
        "question": "Nếu tổng thu nhập gia đình trên là 20 triệu đồng/tháng thì số tiền dành cho Giáo dục là:",
        "options": [
          "4 triệu đồng",
          "2 triệu đồng",
          "3 triệu đồng",
          "5 triệu đồng"
        ],
        "correctIndex": 0,
        "explanation": "20 triệu × 20% = 4 triệu đồng.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Số tiền dành cho Tiết kiệm là:",
          "options": [
            "3 triệu đồng",
            "2 triệu đồng",
            "4 triệu đồng",
            "1.5 triệu đồng"
          ],
          "correctIndex": 0,
          "explanation": "20 triệu × 15% = 3 triệu đồng."
        }
      },
      {
        "id": "k1-b20-q8",
        "question": "Để rút ra kết luận chính xác từ biểu đồ, ta cần chú ý yếu tố nào?",
        "options": [
          "Nguồn gốc dữ liệu, đơn vị đo, gốc toạ độ và thời gian thu thập",
          "Chỉ cần nhìn màu sắc biểu đồ",
          "Chỉ nhìn độ cao của cột",
          "Không cần đọc tiêu đề"
        ],
        "correctIndex": 0,
        "explanation": "Cần kiểm tra toàn diện nguồn gốc, đơn vị, mốc tọa độ để tránh kết luận sai lệch.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Tiêu đề biểu đồ cho biết điều gì?",
          "options": [
            "Nội dung và ý nghĩa của dữ liệu đang biểu diễn",
            "Tên tác giả",
            "Giá trị lớn nhất",
            "Số lượng cột"
          ],
          "correctIndex": 0,
          "explanation": "Cho biết chủ đề và nội dung nghiên cứu."
        }
      },
      {
        "id": "k1-b20-q9",
        "question": "Dựa vào bảng số liệu nhiệt độ tuần: T2 (28°C), T3 (30°C), T4 (32°C), T5 (31°C), T6 (29°C), T7 (27°C), CN (26°C). Ngày nóng nhất là:",
        "options": [
          "Thứ 4",
          "Thứ 3",
          "Thứ 5",
          "Thứ 2"
        ],
        "correctIndex": 0,
        "explanation": "Thứ 4 có nhiệt độ cao nhất là 32°C.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Ngày mát nhất trong tuần là:",
          "options": [
            "Chủ nhật",
            "Thứ 7",
            "Thứ 2",
            "Thứ 6"
          ],
          "correctIndex": 0,
          "explanation": "Chủ nhật có nhiệt độ thấp nhất 26°C."
        }
      },
      {
        "id": "k1-b20-q10",
        "question": "Chênh lệch nhiệt độ giữa ngày nóng nhất và ngày mát nhất trong tuần trên là:",
        "options": [
          "6°C",
          "5°C",
          "4°C",
          "7°C"
        ],
        "correctIndex": 0,
        "explanation": "32°C - 26°C = 6°C.",
        "hasDiagram": false,
        "similarQuestion": {
          "question": "Nhiệt độ dao động từ 20°C đến 35°C thì biên độ nhiệt là:",
          "options": [
            "15°C",
            "10°C",
            "20°C",
            "25°C"
          ],
          "correctIndex": 0,
          "explanation": "35 - 20 = 15°C."
        }
      }
    ]
  }
];
