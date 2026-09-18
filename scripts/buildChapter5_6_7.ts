import { writeChapterFile, LessonRaw } from './chapterWriterHelper';

// ==========================================
// CHƯƠNG V: DỮ LIỆU VÀ BIỂU ĐỒ
// ==========================================
const chapter5Lessons: LessonRaw[] = [
  // Bài 18
  {
    id: 'k1-b18',
    grade: '8',
    semester: 1,
    chapterNumber: 5,
    chapterTitle: 'Chương V: Dữ liệu và biểu đồ',
    lessonNumber: 18,
    title: 'Bài 18. Thu thập và phân loại dữ liệu',
    textbookRef: 'Toán 8 KNTT - Bài 18',
    summary: '• Dữ liệu là các thông tin thu thập được dưới dạng số, chữ, hình ảnh,...\\n• Dữ liệu số (số liệu) và dữ liệu không phải là số.\\n• Dữ liệu định tính (danh mục, thứ tự) và dữ liệu định lượng (rời rạc, liên tục).\\n• Tính hợp lí của dữ liệu: dữ liệu phải đúng định dạng, nằm trong phạm vi cho phép, không mâu thuẫn.',
    keyFormulas: [
      'Dữ liệu số (định lượng): đo lường, đếm được',
      'Dữ liệu không là số (định tính): phân loại, tên gọi, mức độ'
    ],
    questions: [
      {
        q: 'Dãy dữ liệu nào sau đây là dãy số liệu (dữ liệu định lượng)?',
        opts: ['Chiều cao (cm) của 5 học sinh: 155, 160, 158, 162, 165', 'Màu sắc yêu thích: đỏ, xanh, vàng', 'Xếp loại học lực: Tốt, Khá, Đạt', 'Tên các môn học: Toán, Văn, Anh'],
        ans: 0,
        exp: 'Dãy số 155, 160, 158, 162, 165 là các con số có thể đo lường và tính toán được.',
        simQ: 'Dãy dữ liệu nào sau đây là số liệu?',
        simOpts: ['Điểm kiểm tra Toán: 8, 9, 7, 10', 'Nơi sinh: Hà Nội, Huế, TP.HCM', 'Giới tính: Nam, Nữ', 'Sở thích: Đọc sách, Đá bóng'],
        simAns: 0,
        simExp: 'Điểm kiểm tra là số liệu định lượng.'
      },
      {
        q: 'Dữ liệu nào sau đây là dữ liệu không phải là số (định tính)?',
        opts: ['Quốc tịch của các du khách đến Việt Nam', 'Cân nặng của các bạn trong lớp', 'Số lượng học sinh giỏi', 'Nhiệt độ trung bình trong ngày'],
        ans: 0,
        exp: 'Quốc tịch là tên gọi (Việt Nam, Pháp, Nhật,...) không phải số.',
        simQ: 'Dữ liệu nào sau đây là định tính?',
        simOpts: ['Tên các loài hoa trong vườn trường', 'Số cánh của mỗi bông hoa', 'Chiều cao của cây hoa', 'Giá tiền của chậu hoa'],
        simAns: 0,
        simExp: 'Tên loài hoa là dữ liệu định tính.'
      },
      {
        q: 'Khi thu thập tuổi của học sinh lớp 8A, giá trị nào sau đây là KHÔNG hợp lí?',
        opts: ['140 tuổi', '13 tuổi', '14 tuổi', '15 tuổi'],
        ans: 0,
        exp: 'Học sinh lớp 8 thông thường khoảng 13-15 tuổi, 140 tuổi là giá trị vô lí do lỗi nhập liệu.',
        simQ: 'Điểm kiểm tra 1 tiết môn Toán (thang điểm 10) giá trị nào bất hợp lí?',
        simOpts: ['15 điểm', '8 điểm', '10 điểm', '6.5 điểm'],
        simAns: 0,
        simExp: 'Thang điểm 10 thì điểm tối đa là 10, 15 điểm là bất hợp lí.'
      },
      {
        q: 'Để khảo sát món ăn sáng yêu thích của học sinh lớp 8, phương pháp thu thập dữ liệu nào phù hợp nhất?',
        opts: ['Lập phiếu hỏi (bảng hỏi điều tra)', 'Đo lường bằng thước', 'Quan sát qua kính hiển vi', 'Lấy số liệu từ vệ tinh'],
        ans: 0,
        exp: 'Dùng phiếu hỏi hoặc phỏng vấn để thu thập ý kiến về sở thích.',
        simQ: 'Để biết nhiệt độ không khí tại một thời điểm, ta dùng phương pháp:',
        simOpts: ['Đo đạc bằng nhiệt kế', 'Hỏi ý kiến bạn bè', 'Bình chọn', 'Phỏng vấn'],
        simAns: 0,
        simExp: 'Đo trực tiếp bằng dụng cụ đo.'
      },
      {
        q: 'Dữ liệu nào sau đây có thể sắp xếp theo thứ tự (dữ liệu định tính có thứ tự)?',
        opts: ['Mức độ hài lòng: Rất hài lòng, Hài lòng, Bình thường, Không hài lòng', 'Màu mắt: đen, nâu, xanh', 'Nơi ở: Hà Nội, Đà Nẵng, Cần Thơ', 'Phương tiện đi học: xe đạp, xe buýt, đi bộ'],
        ans: 0,
        exp: 'Mức độ hài lòng có thứ bậc tự nhiên từ cao đến thấp.',
        simQ: 'Dữ liệu nào sau đây có thứ tự?',
        simOpts: ['Xếp loại rèn luyện: Tốt, Khá, Đạt, Chưa đạt', 'Họ và tên học sinh', 'Số điện thoại', 'Biển số xe'],
        simAns: 0,
        simExp: 'Mức xếp loại rèn luyện có thứ bậc rõ ràng.'
      },
      {
        q: 'Trong danh sách điểm kiểm tra của 5 bạn: 7, 8, -2, 9, 10. Giá trị không hợp lí là:',
        opts: ['-2', '7', '9', '10'],
        ans: 0,
        exp: 'Điểm số không thể là số âm.',
        simQ: 'Số con trong một gia đình: giá trị nào bất hợp lí?',
        simOpts: ['-1 con', '2 con', '3 con', '0 con'],
        simAns: 0,
        simExp: 'Số con phải là số tự nhiên không âm.'
      },
      {
        q: 'Dữ liệu rời rạc là dữ liệu số nhận giá trị nào sau đây?',
        opts: ['Số học sinh trong mỗi lớp học', 'Thời gian chạy 100m của học sinh', 'Chiều cao của cây', 'Khối lượng bao gạo'],
        ans: 0,
        exp: 'Số học sinh chỉ nhận các giá trị nguyên (1, 2, 3,...), là dữ liệu rời rạc.',
        simQ: 'Dữ liệu liên tục là:',
        simOpts: ['Nhiệt độ cơ thể người (đo bằng nhiệt kế)', 'Số bàn học trong phòng', 'Số quyển sách trên kệ', 'Số cây trồng trong vườn'],
        simAns: 0,
        simExp: 'Nhiệt độ có thể nhận giá trị thực liên tục (36.5°C, 37.1°C,...).'
      },
      {
        q: 'Thầy giáo ghi chép số lượng học sinh vắng mỗi ngày trong 1 tuần: 0, 1, 0, 2, 1. Đây là loại dữ liệu gì?',
        opts: ['Dữ liệu số (rời rạc)', 'Dữ liệu định tính', 'Dữ liệu liên tục', 'Dữ liệu không có giá trị'],
        ans: 0,
        exp: 'Các con số đếm 0, 1, 2 là số liệu rời rạc.',
        simQ: 'Dãy số áo của các cầu thủ bóng đá là loại dữ liệu:',
        simOpts: ['Dữ liệu định tính (dùng số làm nhãn định danh)', 'Dữ liệu đo lường', 'Dữ liệu liên tục', 'Dữ liệu vô nghĩa'],
        simAns: 0,
        simExp: 'Số áo dùng để định danh cầu thủ, không dùng để tính trung bình hay đo lường.'
      },
      {
        q: 'Tiêu chí nào để kiểm tra tính hợp lí của một bảng dữ liệu?',
        opts: ['Đúng định dạng, trong miền giá trị cho phép và không mâu thuẫn', 'Phải có ít nhất 1000 số liệu', 'Phải vẽ được biểu đồ tròn', 'Mọi số liệu phải bằng nhau'],
        ans: 0,
        exp: 'Dữ liệu phải đúng định dạng, nằm trong khoảng thực tế và không có mâu thuẫn nội tại.',
        simQ: 'Một lớp có 40 học sinh nhưng tổng số học sinh xếp loại Tốt, Khá, Đạt là 45. Bảng dữ liệu này:',
        simOpts: ['Bất hợp lí do mâu thuẫn về tổng số', 'Hoàn toàn hợp lí', 'Chính xác', 'Cần thêm số liệu'],
        simAns: 0,
        simExp: 'Tổng số thành phần (45) vượt quá tổng số cả lớp (40).'
      },
      {
        q: 'Dữ liệu thu thập từ Internet, sách báo, niên giám thống kê được gọi là:',
        opts: ['Dữ liệu thứ cấp (gián tiếp)', 'Dữ liệu sơ cấp (trực tiếp)', 'Dữ liệu sai lệch', 'Dữ liệu bí mật'],
        ans: 0,
        exp: 'Dữ liệu có sẵn từ nguồn tài liệu đã công bố gọi là dữ liệu thứ cấp.',
        simQ: 'Dữ liệu do chính bản thân em đi đo đạc và phỏng vấn được gọi là:',
        simOpts: ['Dữ liệu sơ cấp (trực tiếp)', 'Dữ liệu thứ cấp', 'Dữ liệu mô phỏng', 'Dữ liệu sao chép'],
        simAns: 0,
        simExp: 'Dữ liệu sơ cấp do chính người nghiên cứu thu thập trực tiếp.'
      }
    ]
  },

  // Bài 19
  {
    id: 'k1-b19',
    grade: '8',
    semester: 1,
    chapterNumber: 5,
    chapterTitle: 'Chương V: Dữ liệu và biểu đồ',
    lessonNumber: 19,
    title: 'Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ',
    textbookRef: 'Toán 8 KNTT - Bài 19',
    summary: '• Biểu diễn dữ liệu bằng bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép, biểu đồ đoạn thẳng, biểu đồ hình quạt tròn.\\n• Biểu đồ hình quạt tròn: thích hợp để biểu thị tỉ lệ phần trăm của từng phần so với toàn thể.\\n• Biểu đồ đoạn thẳng: thích hợp để biểu thị sự thay đổi xu hướng của một đại lượng theo thời gian.',
    keyFormulas: [
      'Tỉ lệ hình quạt tròn: góc ở tâm = tỉ lệ % × 360°',
      'Tổng các tỉ lệ % = 100%'
    ],
    questions: [
      {
        q: 'Để biểu diễn tỉ lệ phần trăm các loại cây trong một khu vườn, biểu đồ nào là thích hợp nhất?',
        opts: ['Biểu đồ hình quạt tròn', 'Biểu đồ đoạn thẳng', 'Biểu đồ đường gấp khúc', 'Biểu đồ phân tán'],
        ans: 0,
        exp: 'Biểu đồ hình quạt tròn dùng để so sánh các phần so với toàn thể (tổng 100%).',
        diag: 'chart',
        diagData: { type: 'pie', values: [40, 30, 20, 10] },
        simQ: 'Để thể hiện cơ cấu dân số theo nhóm tuổi, ta dùng:',
        simOpts: ['Biểu đồ hình quạt tròn', 'Biểu đồ đoạn thẳng', 'Biểu đồ nhánh', 'Sơ đồ hình cây'],
        simAns: 0,
        simExp: 'Cơ cấu phần trăm thường dùng biểu đồ hình quạt tròn.'
      },
      {
        q: 'Để biểu diễn sự thay đổi nhiệt độ tại Hà Nội trong 12 tháng của năm, biểu đồ nào thích hợp nhất?',
        opts: ['Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt tròn', 'Biểu đồ tranh', 'Bảng chữ'],
        ans: 0,
        exp: 'Biểu đồ đoạn thẳng trực quan nhất để quan sát xu hướng thay đổi theo thời gian.',
        simQ: 'Để theo dõi chiều cao của bạn An từ 6 tuổi đến 14 tuổi, ta nên dùng:',
        simOpts: ['Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt tròn', 'Biểu đồ cột chồng', 'Biểu đồ tròn'],
        simAns: 0,
        simExp: 'Biểu đồ đoạn thẳng biểu thị diễn biến theo thời gian.'
      },
      {
        q: 'Trên biểu đồ hình quạt tròn, một hình quạt biểu thị 25% thì góc ở tâm tương ứng là:',
        opts: ['90°', '45°', '60°', '100°'],
        ans: 0,
        exp: '25% × 360° = (1/4) × 360° = 90°.',
        simQ: 'Góc ở tâm tương ứng với 50% trong biểu đồ quạt tròn là:',
        simOpts: ['180°', '90°', '120°', '360°'],
        simAns: 0,
        simExp: '50% × 360° = 180°.'
      },
      {
        q: 'Góc ở tâm bằng 72° trong biểu đồ hình quạt tròn ứng với tỉ lệ phần trăm là bao nhiêu?',
        opts: ['20%', '15%', '25%', '30%'],
        ans: 0,
        exp: '(72° / 360°) × 100% = 0.2 × 100% = 20%.',
        simQ: 'Góc 36° ứng với bao nhiêu %?',
        simOpts: ['10%', '5%', '20%', '15%'],
        simAns: 0,
        simExp: '(36° / 360°) × 100% = 10%.'
      },
      {
        q: 'Để so sánh số học sinh nam và nữ của 4 lớp khối 8, loại biểu đồ nào thích hợp nhất?',
        opts: ['Biểu đồ cột kép', 'Biểu đồ đoạn thẳng', 'Biểu đồ hình quạt tròn', 'Biểu đồ tranh'],
        ans: 0,
        exp: 'Biểu đồ cột kép cho phép so sánh hai đối tượng (nam và nữ) song song trên từng đơn vị lớp.',
        simQ: 'So sánh lượng mưa trung bình giữa Hà Nội và TP.HCM qua các tháng, nên dùng:',
        simOpts: ['Biểu đồ cột kép (hoặc đường kép)', 'Biểu đồ quạt tròn', 'Biểu đồ tranh', 'Biểu đồ đơn'],
        simAns: 0,
        simExp: 'Biểu đồ cột kép thích hợp so sánh hai đối tượng.'
      },
      {
        q: 'Tổng phần trăm của tất cả các hình quạt trong biểu đồ hình quạt tròn luôn bằng:',
        opts: ['100%', '360%', '180%', '50%'],
        ans: 0,
        exp: 'Toàn bộ hình tròn đại diện cho 100% dữ liệu.',
        simQ: 'Tổng các góc ở tâm của tất cả các hình quạt trong một biểu đồ tròn bằng:',
        simOpts: ['360°', '180°', '100°', '720°'],
        simAns: 0,
        simExp: 'Một vòng tròn trọn vẹn là 360°.'
      },
      {
        q: 'Bảng thống kê cho biết tỉ lệ bình chọn: Bạn A (40%), Bạn B (35%), Bạn C (25%). Tổng tỉ lệ là:',
        opts: ['100%', '90%', '110%', '80%'],
        ans: 0,
        exp: '40% + 35% + 25% = 100%.',
        simQ: 'Nếu A chiếm 50%, B chiếm 30% thì phần còn lại của C là:',
        simOpts: ['20%', '15%', '25%', '10%'],
        simAns: 0,
        simExp: '100% - 50% - 30% = 20%.'
      },
      {
        q: 'Trong biểu đồ cột, độ cao của mỗi cột biểu thị:',
        opts: ['Số lượng hoặc giá trị của đại lượng cần biểu diễn', 'Thời gian xảy ra', 'Tên của nhóm đối tượng', 'Màu sắc'],
        ans: 0,
        exp: 'Độ cao (hoặc độ dài) của cột tỉ lệ thuận với số lượng/tần số của dữ liệu.',
        simQ: 'Khoảng cách giữa các cột trong biểu đồ cột nên:',
        simOpts: ['Bằng nhau và đồng đều', 'Không cách nhau', 'Cột sau chồng lên cột trước', 'Cách tùy ý'],
        simAns: 0,
        simExp: 'Bề rộng các cột và khoảng cách giữa các cột phải đều nhau để đảm bảo trực quan.'
      },
      {
        q: 'Ưu điểm nổi bật nhất của biểu đồ so với bảng số liệu là:',
        opts: ['Trực quan, dễ quan sát, nhận xét và so sánh nhanh chóng', 'Ghi được nhiều chi tiết hơn bảng số', 'Dễ vẽ hơn viết chữ', 'Không cần số liệu'],
        ans: 0,
        exp: 'Biểu đồ giúp người đọc nắm bắt xu thế và so sánh dữ liệu một cách trực quan, tức thì.',
        simQ: 'Biểu đồ tranh thường dùng biểu tượng gì?',
        simOpts: ['Hình ảnh hoặc biểu tượng quy ước số lượng', 'Các đoạn thẳng', 'Các hình tròn cắt nhỏ', 'Mũi tên'],
        simAns: 0,
        simExp: 'Dùng biểu tượng hình ảnh trực quan để thay cho số lượng.'
      },
      {
        q: 'Một biểu đồ hình quạt tròn thể hiện sở thích thể thao của 200 học sinh, trong đó bóng đá chiếm 45%. Số học sinh thích bóng đá là:',
        opts: ['90 học sinh', '45 học sinh', '80 học sinh', '100 học sinh'],
        ans: 0,
        exp: '200 × 45% = 200 × 0.45 = 90 học sinh.',
        simQ: 'Khu vườn có 150 cây, hoa hồng chiếm 20%. Số cây hoa hồng là:',
        simOpts: ['30 cây', '20 cây', '40 cây', '25 cây'],
        simAns: 0,
        simExp: '150 × 20% = 30 cây.'
      }
    ]
  },

  // Bài 20
  {
    id: 'k1-b20',
    grade: '8',
    semester: 1,
    chapterNumber: 5,
    chapterTitle: 'Chương V: Dữ liệu và biểu đồ',
    lessonNumber: 20,
    title: 'Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ',
    textbookRef: 'Toán 8 KNTT - Bài 20',
    summary: '• Đọc và phân tích thông tin từ biểu đồ: tìm giá trị lớn nhất, nhỏ nhất, xu hướng tăng/giảm.\\n• So sánh các dữ liệu giữa các nhóm đối tượng.\\n• Đưa ra nhận xét, kết luận và giải quyết các bài toán thực tiễn dựa trên dữ liệu biểu đồ.\\n• Nhận biết những biểu đồ gây hiểu lầm (ví dụ: trục tung không bắt đầu từ số 0 hoặc tỉ lệ không đều).',
    keyFormulas: [
      'Tỉ số tăng trưởng = (Giá trị sau - Giá trị trước) / Giá trị trước × 100%',
      'Giá trị trung bình = Tổng các giá trị / Số lượng giá trị'
    ],
    questions: [
      {
        q: 'Dựa vào biểu đồ đoạn thẳng thể hiện doanh thu 4 quý: Quý 1 (20 triệu), Quý 2 (30 triệu), Quý 3 (25 triệu), Quý 4 (45 triệu). Doanh thu cao nhất vào:',
        opts: ['Quý 4', 'Quý 2', 'Quý 3', 'Quý 1'],
        ans: 0,
        exp: 'Quý 4 đạt đỉnh cao nhất là 45 triệu đồng.',
        simQ: 'Quý có doanh thu thấp nhất là:',
        simOpts: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'],
        simAns: 0,
        simExp: 'Quý 1 thấp nhất với 20 triệu đồng.'
      },
      {
        q: 'Tổng doanh thu cả năm trong ví dụ trên là:',
        opts: ['120 triệu đồng', '110 triệu đồng', '130 triệu đồng', '100 triệu đồng'],
        ans: 0,
        exp: '20 + 30 + 25 + 45 = 120 triệu đồng.',
        simQ: 'Doanh thu trung bình mỗi quý là:',
        simOpts: ['30 triệu đồng', '25 triệu đồng', '35 triệu đồng', '40 triệu đồng'],
        simAns: 0,
        simExp: '120 / 4 = 30 triệu đồng.'
      },
      {
        q: 'Doanh thu từ Quý 3 lên Quý 4 đã tăng thêm bao nhiêu phần trăm?',
        opts: ['80%', '50%', '40%', '20%'],
        ans: 0,
        exp: 'Mức tăng: 45 - 25 = 20 triệu. Tỉ lệ tăng = (20 / 25) × 100% = 80%.',
        simQ: 'Số lượng từ 50 tăng lên 75 thì mức tăng phần trăm là:',
        simOpts: ['50%', '25%', '75%', '30%'],
        simAns: 0,
        simExp: '((75 - 50) / 50) × 100% = 50%.'
      },
      {
        q: 'Hiện tượng nào sau đây trên biểu đồ cột có thể gây hiểu lầm (phóng đại sự khác biệt)?',
        opts: ['Trục tung không bắt đầu từ giá trị 0 mà bắt đầu từ số lớn', 'Các cột có độ rộng bằng nhau', 'Có ghi rõ số liệu trên đầu mỗi cột', 'Có chú giải rõ ràng'],
        ans: 0,
        exp: 'Khi trục tung bị cắt bớt không bắt đầu từ 0, độ chênh lệch chiều cao cột sẽ phóng đại sự khác biệt thực tế.',
        simQ: 'Biểu đồ gây hiểu lầm khi:',
        simOpts: ['Khoảng cách chia trên trục số không đều', 'Các cột thẳng đứng', 'Có tên biểu đồ', 'Màu sắc trang nhã'],
        simAns: 0,
        simExp: 'Tỉ lệ trục không đều gây bóp méo nhận thức thị giác.'
      },
      {
        q: 'Biểu đồ cột kép so sánh điểm Toán thi giữa kì và cuối kì của bạn Bình: Giữa kì: 7 điểm, Cuối kì: 9 điểm. Điểm của Bình đã:',
        opts: ['Tăng 2 điểm', 'Giảm 2 điểm', 'Không đổi', 'Tăng 3 điểm'],
        ans: 0,
        exp: '9 - 7 = 2 điểm (tăng 2 điểm).',
        simQ: 'Giữa kì 8 điểm, cuối kì 6 điểm thì điểm đã:',
        simOpts: ['Giảm 2 điểm', 'Tăng 2 điểm', 'Giảm 1 điểm', 'Tăng 1 điểm'],
        simAns: 0,
        simExp: '8 - 6 = 2 điểm giảm.'
      },
      {
        q: 'Biểu đồ hình quạt tròn cho biết cơ cấu chi tiêu của gia đình: Tiền ăn 50%, Giáo dục 20%, Tiết kiệm 15%, Chi khác 15%. Khoản chi lớn nhất là:',
        opts: ['Tiền ăn', 'Giáo dục', 'Tiết kiệm', 'Chi khác'],
        ans: 0,
        exp: 'Tiền ăn chiếm tỉ lệ lớn nhất với 50%.',
        simQ: 'Khoản chi nào bằng nhau trong biểu đồ trên?',
        simOpts: ['Tiết kiệm và Chi khác', 'Tiền ăn và Giáo dục', 'Giáo dục và Tiết kiệm', 'Không có khoản nào'],
        simAns: 0,
        simExp: 'Cả hai đều chiếm 15%.'
      },
      {
        q: 'Nếu tổng thu nhập gia đình trên là 20 triệu đồng/tháng thì số tiền dành cho Giáo dục là:',
        opts: ['4 triệu đồng', '2 triệu đồng', '3 triệu đồng', '5 triệu đồng'],
        ans: 0,
        exp: '20 triệu × 20% = 4 triệu đồng.',
        simQ: 'Số tiền dành cho Tiết kiệm là:',
        simOpts: ['3 triệu đồng', '2 triệu đồng', '4 triệu đồng', '1.5 triệu đồng'],
        simAns: 0,
        simExp: '20 triệu × 15% = 3 triệu đồng.'
      },
      {
        q: 'Để rút ra kết luận chính xác từ biểu đồ, ta cần chú ý yếu tố nào?',
        opts: ['Nguồn gốc dữ liệu, đơn vị đo, gốc toạ độ và thời gian thu thập', 'Chỉ cần nhìn màu sắc biểu đồ', 'Chỉ nhìn độ cao của cột', 'Không cần đọc tiêu đề'],
        ans: 0,
        exp: 'Cần kiểm tra toàn diện nguồn gốc, đơn vị, mốc tọa độ để tránh kết luận sai lệch.',
        simQ: 'Tiêu đề biểu đồ cho biết điều gì?',
        simOpts: ['Nội dung và ý nghĩa của dữ liệu đang biểu diễn', 'Tên tác giả', 'Giá trị lớn nhất', 'Số lượng cột'],
        simAns: 0,
        simExp: 'Cho biết chủ đề và nội dung nghiên cứu.'
      },
      {
        q: 'Dựa vào bảng số liệu nhiệt độ tuần: T2 (28°C), T3 (30°C), T4 (32°C), T5 (31°C), T6 (29°C), T7 (27°C), CN (26°C). Ngày nóng nhất là:',
        opts: ['Thứ 4', 'Thứ 3', 'Thứ 5', 'Thứ 2'],
        ans: 0,
        exp: 'Thứ 4 có nhiệt độ cao nhất là 32°C.',
        simQ: 'Ngày mát nhất trong tuần là:',
        simOpts: ['Chủ nhật', 'Thứ 7', 'Thứ 2', 'Thứ 6'],
        simAns: 0,
        simExp: 'Chủ nhật có nhiệt độ thấp nhất 26°C.'
      },
      {
        q: 'Chênh lệch nhiệt độ giữa ngày nóng nhất và ngày mát nhất trong tuần trên là:',
        opts: ['6°C', '5°C', '4°C', '7°C'],
        ans: 0,
        exp: '32°C - 26°C = 6°C.',
        simQ: 'Nhiệt độ dao động từ 20°C đến 35°C thì biên độ nhiệt là:',
        simOpts: ['15°C', '10°C', '20°C', '25°C'],
        simAns: 0,
        simExp: '35 - 20 = 15°C.'
      }
    ]
  }
];

// ==========================================
// CHƯƠNG VI: PHÂN THỨC ĐẠI SỐ
// ==========================================
const chapter6Lessons: LessonRaw[] = [
  // Bài 21
  {
    id: 'k2-b21',
    grade: '8',
    semester: 2,
    chapterNumber: 6,
    chapterTitle: 'Chương VI: Phân thức đại số',
    lessonNumber: 21,
    title: 'Bài 21. Phân thức đại số',
    textbookRef: 'Toán 8 KNTT - Bài 21',
    summary: '• Phân thức đại số là một biểu thức có dạng A / B, trong đó A, B là những đa thức và B khác đa thức 0.\\n• A gọi là tử thức, B gọi là mẫu thức.\\n• Mỗi đa thức cũng được coi như một phân thức có mẫu thức bằng 1.\\n• Hai phân thức bằng nhau: A / B = C / D nếu A · D = B · C.\\n• Điều kiện xác định của phân thức: Mẫu thức B ≠ 0.',
    keyFormulas: [
      'A / B = C / D <=> A · D = B · C',
      'ĐKXĐ: Mẫu thức B ≠ 0'
    ],
    questions: [
      {
        q: 'Biểu thức nào sau đây là phân thức đại số?',
        opts: ['(2x + 1) / (x - 3)', '√(x - 1)', '2x² + √y', 'x / 0'],
        ans: 0,
        exp: '(2x + 1)/(x - 3) có dạng A/B với A, B là đa thức và B ≠ 0.',
        simQ: 'Biểu thức nào sau đây là phân thức đại số?',
        simOpts: ['(x² - 4) / (x + 1)', '3√x + 1', 'x / (y - y)', '√2x + 1'],
        simAns: 0,
        simExp: 'Đa thức chia đa thức khác 0.'
      },
      {
        q: 'Điều kiện xác định của phân thức (x + 2) / (x - 5) là:',
        opts: ['x ≠ 5', 'x ≠ -2', 'x ≠ 0', 'x > 5'],
        ans: 0,
        exp: 'Mẫu thức khác 0: x - 5 ≠ 0 => x ≠ 5.',
        simQ: 'Điều kiện xác định của phân thức 3 / (x + 4) là:',
        simOpts: ['x ≠ -4', 'x ≠ 4', 'x ≠ 0', 'x ≠ 3'],
        simAns: 0,
        simExp: 'x + 4 ≠ 0 => x ≠ -4.'
      },
      {
        q: 'Hai phân thức A/B và C/D bằng nhau khi và chỉ khi:',
        opts: ['A · D = B · C', 'A · C = B · D', 'A + D = B + C', 'A - D = B - C'],
        ans: 0,
        exp: 'Theo định nghĩa hai phân thức bằng nhau: tích chéo A·D = B·C.',
        simQ: 'Cặp phân thức nào sau đây bằng nhau?',
        simOpts: ['x / 2 và x² / 2x (với x ≠ 0)', 'x / 2 và 2 / x', 'x / 3 và (x + 1) / 4', '1 / x và -1 / x'],
        simAns: 0,
        simExp: 'x · (2x) = 2 · x² = 2x² nên bằng nhau.'
      },
      {
        q: 'Giá trị của phân thức (x² - 1) / (x + 1) tại x = 3 là:',
        opts: ['2', '4', '8', '0'],
        ans: 0,
        exp: '(x² - 1)/(x + 1) = x - 1. Tại x = 3: 3 - 1 = 2.',
        simQ: 'Tính giá trị của (x² - 4) / (x - 2) tại x = 5:',
        simOpts: ['7', '3', '5', '9'],
        simAns: 0,
        simExp: 'x + 2 tại x = 5 là 5 + 2 = 7.'
      },
      {
        q: 'Phân thức nào sau đây xác định với mọi số thực x?',
        opts: ['1 / (x² + 1)', '1 / (x² - 1)', '1 / x', '1 / (x - 2)'],
        ans: 0,
        exp: 'Vì x² + 1 ≥ 1 > 0 với mọi x nên mẫu thức luôn khác 0.',
        simQ: 'Phân thức xác định với mọi x là:',
        simOpts: ['(2x + 1) / (x² + 4)', 'x / x²', '3 / (x - 1)', '4 / (x² - 4)'],
        simAns: 0,
        simExp: 'x² + 4 > 0 với mọi x.'
      },
      {
        q: 'Điều kiện xác định của phân thức 1 / (x² - 9) là:',
        opts: ['x ≠ 3 và x ≠ -3', 'x ≠ 3', 'x ≠ -3', 'x ≠ 9'],
        ans: 0,
        exp: 'x² - 9 ≠ 0 => (x - 3)(x + 3) ≠ 0 => x ≠ ±3.',
        simQ: 'Điều kiện xác định của 1 / (x² - 16) là:',
        simOpts: ['x ≠ ±4', 'x ≠ 4', 'x ≠ 16', 'x ≠ 0'],
        simAns: 0,
        simExp: 'x² ≠ 16 => x ≠ ±4.'
      },
      {
        q: 'Mỗi đa thức P có thể coi là một phân thức có mẫu thức bằng:',
        opts: ['1', '0', 'P', 'x'],
        ans: 0,
        exp: 'Mọi đa thức P đều có thể viết dưới dạng P / 1.',
        simQ: 'Số 0 có phải là phân thức đại số không?',
        simOpts: ['Có, viết là 0/1', 'Không phải', 'Chỉ khi x khác 0', 'Chỉ là số nguyên'],
        simAns: 0,
        simExp: 'Số 0 là một đa thức, nên 0 = 0/1 là phân thức đại số.'
      },
      {
        q: 'Tìm đa thức A trong đẳng thức A / (x - 1) = (x + 1) / 1:',
        opts: ['x² - 1', 'x² + 1', 'x - 1', 'x + 1'],
        ans: 0,
        exp: 'A = (x - 1)(x + 1) = x² - 1.',
        simQ: 'Tìm M trong M / (x - 2) = x + 2:',
        simOpts: ['x² - 4', 'x² + 4', 'x - 2', 'x² - 2'],
        simAns: 0,
        simExp: 'M = (x - 2)(x + 2) = x² - 4.'
      },
      {
        q: 'Phân thức (x - 3) / (x² - 9) bằng 0 khi:',
        opts: ['Không có giá trị nào của x', 'x = 3', 'x = -3', 'x = 0'],
        ans: 0,
        exp: 'Để phân thức bằng 0 thì tử = 0 (x = 3), nhưng x = 3 làm mẫu bằng 0 (vi phạm ĐKXĐ x ≠ ±3), nên không có giá trị x thỏa mãn.',
        simQ: 'Phân thức (x - 2) / (x² - 4) có giá trị bằng 0 khi nào?',
        simOpts: ['Không có x nào thỏa mãn', 'x = 2', 'x = -2', 'x = 0'],
        simAns: 0,
        simExp: 'x = 2 vi phạm điều kiện xác định mẫu khác 0.'
      },
      {
        q: 'Rút gọn phân thức (3x²y) / (6xy²) ta được:',
        opts: ['x / 2y', 'x / y', '2x / y', '1 / 2xy'],
        ans: 0,
        exp: 'Chia cả tử và mẫu cho 3xy được x / 2y.',
        simQ: 'Rút gọn (4ab²) / (8a²b):',
        simOpts: ['b / 2a', 'a / 2b', '2b / a', '1 / 2ab'],
        simAns: 0,
        simExp: 'b / 2a.'
      }
    ]
  },

  // Bài 22
  {
    id: 'k2-b22',
    grade: '8',
    semester: 2,
    chapterNumber: 6,
    chapterTitle: 'Chương VI: Phân thức đại số',
    lessonNumber: 22,
    title: 'Bài 22. Tính chất cơ bản của phân thức đại số',
    textbookRef: 'Toán 8 KNTT - Bài 22',
    summary: '• Nhân cả tử và mẫu với cùng một đa thức khác 0: A / B = (A · M) / (B · M) (M ≠ 0).\\n• Chia cả tử và mẫu cho một nhân tử chung: A / B = (A : N) / (B : N).\\n• Quy tắc đổi dấu: A / B = (-A) / (-B) và - (A / B) = (-A) / B = A / (-B).\\n• Rút gọn phân thức: Phân tích tử và mẫu thành nhân tử rồi chia cho nhân tử chung.\\n• Quy đồng mẫu thức nhiều phân thức.',
    keyFormulas: [
      'A / B = (A · M) / (B · M)',
      'A / B = (A : N) / (B : N)',
      'A / B = (-A) / (-B)'
    ],
    questions: [
      {
        q: 'Rút gọn phân thức (x² - 4) / (x - 2) với x ≠ 2:',
        opts: ['x + 2', 'x - 2', '1 / (x + 2)', 'x'],
        ans: 0,
        exp: '(x - 2)(x + 2) / (x - 2) = x + 2.',
        simQ: 'Rút gọn (x² - 9) / (x - 3) với x ≠ 3:',
        simOpts: ['x + 3', 'x - 3', '3', '1 / (x + 3)'],
        simAns: 0,
        simExp: 'x + 3.'
      },
      {
        q: 'Phân thức đối của phân thức A / B là:',
        opts: ['- A / B', 'B / A', 'A / (-B)', 'Cả A và C đều đúng'],
        ans: 3,
        exp: 'Phân thức đối có thể viết là -(A/B), (-A)/B hoặc A/(-B).',
        simQ: 'Quy tắc đổi dấu: biểu thức (x - y) / (a - b) bằng biểu thức nào?',
        simOpts: ['(y - x) / (b - a)', '(y - x) / (a - b)', '(x - y) / (b - a)', '-(y - x) / (b - a)'],
        simAns: 0,
        simExp: 'Đổi dấu cả tử và mẫu: (-(x - y)) / (-(a - b)) = (y - x) / (b - a).'
      },
      {
        q: 'Mẫu thức chung đơn giản nhất của hai phân thức 1 / (2x) và 1 / (3x²) là:',
        opts: ['6x²', '6x³', '2x²', '3x²'],
        ans: 0,
        exp: 'BCNN(2, 3) = 6; lũy thừa x cao nhất là x² => MTC = 6x².',
        simQ: 'Mẫu thức chung của 1 / (4x²) và 1 / (6xy) là:',
        simOpts: ['12x²y', '24x²y', '12xy', '4x²y'],
        simAns: 0,
        simExp: 'BCNN(4, 6) = 12; biến x² và y => 12x²y.'
      },
      {
        q: 'Rút gọn phân thức (x² - 2x + 1) / (x² - 1) với x ≠ ±1:',
        opts: ['(x - 1) / (x + 1)', '(x + 1) / (x - 1)', 'x - 1', '1'],
        ans: 0,
        exp: '(x - 1)² / ((x - 1)(x + 1)) = (x - 1) / (x + 1).',
        simQ: 'Rút gọn (x² + 2x + 1) / (x² - 1):',
        simOpts: ['(x + 1) / (x - 1)', '(x - 1) / (x + 1)', '1', 'x + 1'],
        simAns: 0,
        simExp: '(x + 1) / (x - 1).'
      },
      {
        q: 'Điền đa thức thích hợp vào chỗ trống: (x + 1) / (x - 2) = ... / (x² - 4):',
        opts: ['(x + 1)(x + 2)', '(x + 1)(x - 2)', 'x² + 2', 'x² - 1'],
        ans: 0,
        exp: 'Nhân cả tử và mẫu với (x + 2): (x + 1)(x + 2).',
        simQ: 'Tìm tử số thích hợp: 2 / x = ... / x²y:',
        simOpts: ['2xy', '2x', '2y', 'xy'],
        simAns: 0,
        simExp: 'Nhân tử và mẫu với xy: 2xy.'
      },
      {
        q: 'Rút gọn phân thức (5x - 5y) / (10y - 10x):',
        opts: ['-1/2', '1/2', '-2', '2'],
        ans: 0,
        exp: '5(x - y) / (-10(x - y)) = 5 / (-10) = -1/2.',
        simQ: 'Rút gọn (a - b) / (b - a):',
        simOpts: ['-1', '1', '0', 'a/b'],
        simAns: 0,
        simExp: '(a - b) / (-(a - b)) = -1.'
      },
      {
        q: 'Phân thức nào sau đây là phân thức tối giản?',
        opts: ['(x + 1) / (x² + 1)', '(2x + 2) / (x + 1)', '(x² - 1) / (x - 1)', '3x / 6y'],
        ans: 0,
        exp: 'Tử và mẫu không có nhân tử chung nào ngoài ±1.',
        simQ: 'Phân thức tối giản trong các phân thức sau là:',
        simOpts: ['(x + 2) / (x + 3)', '(2x + 4) / 4', 'x² / x', '(x - 1) / (x² - 1)'],
        simAns: 0,
        simExp: '(x + 2) / (x + 3) không rút gọn được nữa.'
      },
      {
        q: 'Mẫu thức chung của hai phân thức 1 / (x - 1) và 1 / (1 - x) là:',
        opts: ['x - 1 (bằng cách đổi dấu 1 / (1 - x) thành -1 / (x - 1))', '(x - 1)²', '(x - 1)(1 - x)', 'x² - 1'],
        ans: 0,
        exp: 'Chỉ cần đổi dấu phân thức thứ hai thì mẫu thức chung là x - 1.',
        simQ: 'Đổi dấu phân thức 2 / (3 - x) thành:',
        simOpts: ['-2 / (x - 3)', '2 / (x - 3)', '-2 / (3 - x)', '2 / (3 + x)'],
        simAns: 0,
        simExp: '-2 / (x - 3).'
      },
      {
        q: 'Rút gọn phân thức (x³ - 8) / (x² + 2x + 4):',
        opts: ['x - 2', 'x + 2', '(x - 2)²', '1'],
        ans: 0,
        exp: '(x - 2)(x² + 2x + 4) / (x² + 2x + 4) = x - 2.',
        simQ: 'Rút gọn (x³ + 1) / (x² - x + 1):',
        simOpts: ['x + 1', 'x - 1', '(x + 1)²', '1'],
        simAns: 0,
        simExp: 'x + 1.'
      },
      {
        q: 'Khi quy đồng mẫu thức 1 / (x - y) và 1 / (x + y), mẫu thức chung là:',
        opts: ['x² - y²', 'x - y', 'x + y', '2(x - y)'],
        ans: 0,
        exp: '(x - y)(x + y) = x² - y².',
        simQ: 'MTC của 1 / (x - 2) và 1 / (x + 2) là:',
        simOpts: ['x² - 4', 'x - 2', 'x + 2', 'x² + 4'],
        simAns: 0,
        simExp: 'x² - 4.'
      }
    ]
  },

  // Bài 23
  {
    id: 'k2-b23',
    grade: '8',
    semester: 2,
    chapterNumber: 6,
    chapterTitle: 'Chương VI: Phân thức đại số',
    lessonNumber: 23,
    title: 'Bài 23. Phép cộng và phép trừ phân thức đại số',
    textbookRef: 'Toán 8 KNTT - Bài 23',
    summary: '• Cộng, trừ hai phân thức cùng mẫu: Cộng, trừ các tử thức và giữ nguyên mẫu thức: A/M ± B/M = (A ± B) / M.\\n• Cộng, trừ hai phân thức khác mẫu: Quy đồng mẫu thức rồi thực hiện như phân thức cùng mẫu.\\n• Phép cộng phân thức có tính chất giao hoán, kết hợp.\\n• Hai phân thức đối nhau: A / B + (-A) / B = 0.',
    keyFormulas: [
      'A / M + B / M = (A + B) / M',
      'A / B - C / D = A / B + (-C) / D'
    ],
    questions: [
      {
        q: 'Kết quả của phép tính (2x + 1) / (x + 2) + (x + 5) / (x + 2) là:',
        opts: ['3', '3x + 6', '(3x + 6) / (2x + 4)', 'x + 3'],
        ans: 0,
        exp: '(2x + 1 + x + 5) / (x + 2) = (3x + 6) / (x + 2) = 3(x + 2) / (x + 2) = 3.',
        simQ: 'Tính (x + 1) / (x + 3) + (2x + 8) / (x + 3):',
        simOpts: ['3', '3x + 9', '2', '1'],
        simAns: 0,
        simExp: '(3x + 9) / (x + 3) = 3.'
      },
      {
        q: 'Kết quả của (3x - 1) / (x - 1) - (2x) / (x - 1) là:',
        opts: ['1', '-1', '(x - 1) / (x - 1) = 1', 'x'],
        ans: 0,
        exp: '(3x - 1 - 2x) / (x - 1) = (x - 1) / (x - 1) = 1.',
        simQ: 'Tính (4x - 3) / (x - 1) - (3x - 2) / (x - 1):',
        simOpts: ['1', '-1', '2', '0'],
        simAns: 0,
        simExp: '(4x - 3 - 3x + 2) / (x - 1) = (x - 1) / (x - 1) = 1.'
      },
      {
        q: 'Tính 1 / x + 1 / y (với x, y ≠ 0):',
        opts: ['(x + y) / xy', '2 / (x + y)', '1 / xy', '(xy) / (x + y)'],
        ans: 0,
        exp: 'Quy đồng mẫu thức chung xy: y/xy + x/xy = (x + y)/xy.',
        simQ: 'Tính 1 / a - 1 / b:',
        simOpts: ['(b - a) / ab', '(a - b) / ab', '1 / (a - b)', '0'],
        simAns: 0,
        simExp: '(b - a) / ab.'
      },
      {
        q: 'Kết quả của 1 / (x - 1) - 1 / (x + 1) là:',
        opts: ['2 / (x² - 1)', '-2 / (x² - 1)', '0', '2x / (x² - 1)'],
        ans: 0,
        exp: '((x + 1) - (x - 1)) / (x² - 1) = 2 / (x² - 1).',
        simQ: 'Tính 1 / (x - 2) - 1 / (x + 2):',
        simOpts: ['4 / (x² - 4)', '2 / (x² - 4)', '-4 / (x² - 4)', '0'],
        simAns: 0,
        simExp: '((x + 2) - (x - 2)) / (x² - 4) = 4 / (x² - 4).'
      },
      {
        q: 'Tổng của hai phân thức đối nhau bằng:',
        opts: ['0', '1', '-1', 'Không xác định'],
        ans: 0,
        exp: 'A/B + (-A)/B = (A - A)/B = 0.',
        simQ: 'Phân thức đối của (x - 1) / (x + 2) là:',
        simOpts: ['(1 - x) / (x + 2)', '(x - 1) / (x - 2)', '(x + 1) / (x + 2)', '(1 - x) / (x - 2)'],
        simAns: 0,
        simExp: '-(x - 1)/(x + 2) = (1 - x)/(x + 2).'
      },
      {
        q: 'Thực hiện phép tính x / (x - 2) + 2 / (2 - x):',
        opts: ['1', '-1', '(x + 2) / (x - 2)', '0'],
        ans: 0,
        exp: 'Đổi dấu phân thức thứ hai: x / (x - 2) - 2 / (x - 2) = (x - 2) / (x - 2) = 1.',
        simQ: 'Tính a / (a - b) + b / (b - a):',
        simOpts: ['1', '-1', '0', 'a + b'],
        simAns: 0,
        simExp: '(a - b) / (a - b) = 1.'
      },
      {
        q: 'Tính 2x / (x² - 1) - 1 / (x - 1):',
        opts: ['1 / (x + 1)', '1 / (x - 1)', '2 / (x + 1)', '-1 / (x + 1)'],
        ans: 0,
        exp: 'MTC = (x - 1)(x + 1). (2x - (x + 1)) / (x² - 1) = (x - 1) / ((x - 1)(x + 1)) = 1 / (x + 1).',
        simQ: 'Tính 2x / (x² - 4) - 1 / (x - 2):',
        simOpts: ['1 / (x + 2)', '1 / (x - 2)', '2 / (x + 2)', '0'],
        simAns: 0,
        simExp: '(2x - (x + 2)) / (x² - 4) = (x - 2) / ((x - 2)(x + 2)) = 1 / (x + 2).'
      },
      {
        q: 'Tính x / (x + 1) + 1 / (x + 1):',
        opts: ['1', 'x', '2x', '(x + 1)²'],
        ans: 0,
        exp: '(x + 1) / (x + 1) = 1.',
        simQ: 'Tính (2x - 3) / 5 + (3 - 2x) / 5:',
        simOpts: ['0', '1', '-1', '2'],
        simAns: 0,
        simExp: '(2x - 3 + 3 - 2x) / 5 = 0 / 5 = 0.'
      },
      {
        q: 'Rút gọn P = 1 / x + 1 / (x + 1) + (2x + 1) / (x(x + 1)):',
        opts: ['2(2x + 1) / (x(x + 1))', '0', '1', '2 / x'],
        ans: 0,
        exp: '1/x + 1/(x+1) = (2x+1)/(x(x+1)). Cộng thêm biểu thức thứ 3 được 2(2x + 1) / (x(x + 1)).',
        simQ: '1 / (x(x + 1)) bằng hiệu của hai phân thức nào?',
        simOpts: ['1 / x - 1 / (x + 1)', '1 / (x + 1) - 1 / x', '1 / x + 1 / (x + 1)', 'x - (x + 1)'],
        simAns: 0,
        simExp: '((x + 1) - x) / (x(x + 1)) = 1 / (x(x + 1)).'
      },
      {
        q: 'Tìm phân thức A biết A + 1 / (x - 1) = x / (x - 1):',
        opts: ['1', 'x', 'x - 1', '0'],
        ans: 0,
        exp: 'A = x / (x - 1) - 1 / (x - 1) = (x - 1) / (x - 1) = 1.',
        simQ: 'Tìm A biết A - 2 / (x + 3) = x / (x + 3):',
        simOpts: ['1', 'x + 2', '(x + 2) / (x + 3)', '0'],
        simAns: 2,
        simExp: 'A = (x + 2) / (x + 3).'
      }
    ]
  },

  // Bài 24
  {
    id: 'k2-b24',
    grade: '8',
    semester: 2,
    chapterNumber: 6,
    chapterTitle: 'Chương VI: Phân thức đại số',
    lessonNumber: 24,
    title: 'Bài 24. Phép nhân và phép chia phân thức đại số',
    textbookRef: 'Toán 8 KNTT - Bài 24',
    summary: '• Nhân hai phân thức: Nhân các tử với nhau, nhân các mẫu với nhau: (A / B) · (C / D) = (A · C) / (B · D).\\n• Chia hai phân thức: Nhân phân thức thứ nhất với phân thức nghịch đảo của phân thức thứ hai: (A / B) : (C / D) = (A / B) · (D / C) (với C/D ≠ 0).\\n• Phân thức nghịch đảo của A / B (với A, B ≠ 0) là B / A.',
    keyFormulas: [
      '(A / B) · (C / D) = (A · C) / (B · D)',
      '(A / B) : (C / D) = (A / B) · (D / C)'
    ],
    questions: [
      {
        q: 'Kết quả của phép nhân (3x / 2y) · (4y² / 9x²) là:',
        opts: ['2y / 3x', '3x / 2y', '2x / 3y', '1'],
        ans: 0,
        exp: '(3x · 4y²) / (2y · 9x²) = 12xy² / 18x²y = 2y / 3x.',
        simQ: 'Tính (2a / 3b) · (9b / 4a):',
        simOpts: ['3/2', '2/3', '1', '6'],
        simAns: 0,
        simExp: '(18ab) / (12ab) = 3/2.'
      },
      {
        q: 'Phân thức nghịch đảo của (x - 2) / (x + 3) là:',
        opts: ['(x + 3) / (x - 2)', '-(x - 2) / (x + 3)', '(2 - x) / (x + 3)', '1 / (x - 2)'],
        ans: 0,
        exp: 'Đảo ngược vị trí tử và mẫu: (x + 3)/(x - 2).',
        simQ: 'Phân thức nghịch đảo của 1 / (x - 1) là:',
        simOpts: ['x - 1', '-(x - 1)', '1 - x', '1 / (1 - x)'],
        simAns: 0,
        simExp: '(x - 1) / 1 = x - 1.'
      },
      {
        q: 'Thực hiện phép chia (x² - 4) / (3x) : (x + 2) / (6x²):',
        opts: ['2x(x - 2)', '2(x - 2)', '(x - 2) / 2x', '2x(x + 2)'],
        ans: 0,
        exp: '((x - 2)(x + 2) / 3x) · (6x² / (x + 2)) = (x - 2) · 2x = 2x(x - 2).',
        simQ: 'Tính (x² - 1) / 2 : (x - 1) / 4:',
        simOpts: ['2(x + 1)', 'x + 1', '4(x + 1)', '2(x - 1)'],
        simAns: 0,
        simExp: '((x - 1)(x + 1) / 2) · (4 / (x - 1)) = 2(x + 1).'
      },
      {
        q: 'Kết quả của (x + 1) / (x - 1) · (x - 1) / (x + 1) là:',
        opts: ['1', '0', '-1', '(x + 1)²'],
        ans: 0,
        exp: 'Hai phân thức nghịch đảo của nhau nhân lại bằng 1.',
        simQ: 'Tích của một phân thức khác 0 với phân thức nghịch đảo của nó luôn bằng:',
        simOpts: ['1', '0', '-1', 'Bình phương phân thức đó'],
        simAns: 0,
        simExp: 'Luôn bằng 1.'
      },
      {
        q: 'Thực hiện phép nhân (x - 3) / (x + 1) · (x² + 2x + 1) / (x² - 9):',
        opts: ['(x + 1) / (x + 3)', '(x - 1) / (x - 3)', '(x + 3) / (x + 1)', '1'],
        ans: 0,
        exp: '(x - 3) / (x + 1) · (x + 1)² / ((x - 3)(x + 3)) = (x + 1) / (x + 3).',
        simQ: 'Tính (x - 2) / (x + 2) · (x + 2) / (x² - 4):',
        simOpts: ['1 / (x + 2)', '1 / (x - 2)', 'x + 2', '1'],
        simAns: 0,
        simExp: '(x - 2) / ((x - 2)(x + 2)) = 1 / (x + 2).'
      },
      {
        q: 'Chia một phân thức cho đa thức P (P ≠ 0): (A / B) : P bằng:',
        opts: ['A / (B · P)', '(A · P) / B', '(B · P) / A', 'A / B'],
        ans: 0,
        exp: 'P = P/1 nên (A/B) : (P/1) = (A/B) · (1/P) = A / (B · P).',
        simQ: 'Tính (2x / 3) : x:',
        simOpts: ['2/3', '2x²/3', '3/2', '2/3x'],
        simAns: 0,
        simExp: '2x / (3x) = 2/3.'
      },
      {
        q: 'Tính (x / (x - 1))² : (x² / (x² - 1)):',
        opts: ['(x + 1) / (x - 1)', '(x - 1) / (x + 1)', '1', 'x(x + 1)'],
        ans: 0,
        exp: '(x² / (x - 1)²) · ((x - 1)(x + 1) / x²) = (x + 1) / (x - 1).',
        simQ: 'Rút gọn (a / b) : (a / b²):',
        simOpts: ['b', '1/b', 'b²', 'a'],
        simAns: 0,
        simExp: '(a/b) · (b²/a) = b.'
      },
      {
        q: 'Giá trị của biểu thức P = ((x - 1) / x) · (x / (x + 1)) · ((x + 1) / (x - 1)) là:',
        opts: ['1', 'x', '0', '-1'],
        ans: 0,
        exp: 'Tất cả các nhân tử rút gọn triệt tiêu hết: P = 1.',
        simQ: 'Tính (a / b) · (b / c) · (c / a):',
        simOpts: ['1', '0', 'abc', 'a/c'],
        simAns: 0,
        simExp: '1.'
      },
      {
        q: 'Biểu thức (x² - 25) / (x + 5) có thể rút gọn nhanh thành:',
        opts: ['x - 5', 'x + 5', '1 / (x - 5)', '5'],
        ans: 0,
        exp: '(x - 5)(x + 5) / (x + 5) = x - 5.',
        simQ: 'Rút gọn (x² - 36) / (x - 6):',
        simOpts: ['x + 6', 'x - 6', '6', '1'],
        simAns: 0,
        simExp: 'x + 6.'
      },
      {
        q: 'Một chiếc ô tô đi quãng đường S = 100 km với vận tốc v = (x + 10) km/h. Thời gian đi là:',
        opts: ['100 / (x + 10) giờ', '100(x + 10) giờ', '(x + 10) / 100 giờ', '100 + x giờ'],
        ans: 0,
        exp: 't = S / v = 100 / (x + 10).',
        simQ: 'Đi 60 km với vận tốc x km/h mất thời gian là:',
        simOpts: ['60 / x giờ', '60x giờ', 'x / 60 giờ', '60 - x giờ'],
        simAns: 0,
        simExp: '60 / x giờ.'
      }
    ]
  }
];

// ==========================================
// CHƯƠNG VII: PHƯƠNG TRÌNH BẬC NHẤT VÀ HÀM SỐ BẬC NHẤT
// ==========================================
const chapter7Lessons: LessonRaw[] = [
  // Bài 25
  {
    id: 'k2-b25',
    grade: '8',
    semester: 2,
    chapterNumber: 7,
    chapterTitle: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất',
    lessonNumber: 25,
    title: 'Bài 25. Phương trình bậc nhất một ẩn',
    textbookRef: 'Toán 8 KNTT - Bài 25',
    summary: '• Phương trình bậc nhất một ẩn có dạng ax + b = 0 (với a, b là hai số đã cho và a ≠ 0).\\n• Quy tắc chuyển vế: Khi chuyển một hạng tử từ vế này sang vế kia của phương trình, ta phải đổi dấu hạng tử đó.\\n• Quy tắc nhân với một số: Ta có thể nhân (hoặc chia) cả hai vế của phương trình cho cùng một số khác 0.\\n• Phương trình bậc nhất một ẩn ax + b = 0 luôn có nghiệm duy nhất x = -b / a.',
    keyFormulas: [
      'ax + b = 0 (a ≠ 0) <=> ax = -b <=> x = -b / a',
      'Chuyển vế đổi dấu'
    ],
    questions: [
      {
        q: 'Phương trình nào sau đây là phương trình bậc nhất một ẩn?',
        opts: ['2x - 4 = 0', 'x² - 4 = 0', '2x + y = 3', '0x + 5 = 0'],
        ans: 0,
        exp: '2x - 4 = 0 có dạng ax + b = 0 với a = 2 ≠ 0 và b = -4.',
        simQ: 'Phương trình bậc nhất một ẩn là:',
        simOpts: ['3x + 6 = 0', 'x² + 2x = 0', '1/x + 2 = 0', '2x - 3y = 1'],
        simAns: 0,
        simExp: '3x + 6 = 0 có dạng ax + b = 0 với a = 3 ≠ 0.'
      },
      {
        q: 'Nghiệm của phương trình 2x - 6 = 0 là:',
        opts: ['x = 3', 'x = -3', 'x = 6', 'x = -6'],
        ans: 0,
        exp: '2x = 6 => x = 6/2 = 3.',
        simQ: 'Nghiệm của 3x - 12 = 0 là:',
        simOpts: ['x = 4', 'x = -4', 'x = 3', 'x = 12'],
        simAns: 0,
        simExp: '3x = 12 => x = 4.'
      },
      {
        q: 'Giải phương trình 5x + 10 = 0:',
        opts: ['x = -2', 'x = 2', 'x = -5', 'x = 10'],
        ans: 0,
        exp: '5x = -10 => x = -10/5 = -2.',
        simQ: 'Giải 4x + 8 = 0:',
        simOpts: ['x = -2', 'x = 2', 'x = 4', 'x = -4'],
        simAns: 0,
        simExp: 'x = -8/4 = -2.'
      },
      {
        q: 'Khi chuyển vế hạng tử +5 từ vế trái sang vế phải của phương trình, hạng tử đó trở thành:',
        opts: ['-5', '+5', '1/5', '-1/5'],
        ans: 0,
        exp: 'Quy tắc chuyển vế: đổi dấu từ "+" thành "-".',
        simQ: 'Chuyển hạng tử -3x sang vế kia ta được:',
        simOpts: ['+3x', '-3x', '3/x', '-x/3'],
        simAns: 0,
        simExp: 'Đổi dấu thành +3x.'
      },
      {
        q: 'Nghiệm của phương trình 3x - 2 = x + 4 là:',
        opts: ['x = 3', 'x = 2', 'x = 1', 'x = -3'],
        ans: 0,
        exp: '3x - x = 4 + 2 => 2x = 6 => x = 3.',
        simQ: 'Giải phương trình 4x - 5 = 2x + 3:',
        simOpts: ['x = 4', 'x = 2', 'x = -4', 'x = 8'],
        simAns: 0,
        simExp: '2x = 8 => x = 4.'
      },
      {
        q: 'Phương trình 0x = 0 có tập nghiệm là:',
        opts: ['Vô số nghiệm (S = ℝ)', 'Vô nghiệm (S = ∅)', 'x = 0', 'x = 1'],
        ans: 0,
        exp: 'Với mọi số thực x thì 0 · x = 0 luôn đúng, nên có vô số nghiệm.',
        simQ: 'Phương trình 0x = 5 có tập nghiệm là:',
        simOpts: ['Vô nghiệm (S = ∅)', 'Vô số nghiệm', 'x = 0', 'x = 5'],
        simAns: 0,
        simExp: 'Không có số nào nhân với 0 bằng 5, nên vô nghiệm.'
      },
      {
        q: 'Số x = -1 là nghiệm của phương trình nào sau đây?',
        opts: ['2x + 2 = 0', '2x - 2 = 0', 'x - 1 = 0', '3x + 1 = 0'],
        ans: 0,
        exp: 'Thay x = -1 vào 2x + 2: 2(-1) + 2 = -2 + 2 = 0 (thỏa mãn).',
        simQ: 'Số x = 2 là nghiệm của phương trình nào?',
        simOpts: ['3x - 6 = 0', '3x + 6 = 0', '2x + 4 = 0', 'x + 2 = 0'],
        simAns: 0,
        simExp: '3(2) - 6 = 0.'
      },
      {
        q: 'Giải phương trình (x - 1) / 2 = (x + 1) / 3:',
        opts: ['x = 5', 'x = -5', 'x = 1', 'x = -1'],
        ans: 0,
        exp: 'Quy đồng khử mẫu: 3(x - 1) = 2(x + 1) => 3x - 3 = 2x + 2 => x = 5.',
        simQ: 'Giải (x + 2) / 3 = (x - 1) / 2:',
        simOpts: ['x = 7', 'x = -7', 'x = 5', 'x = 3'],
        simAns: 0,
        simExp: '2(x + 2) = 3(x - 1) => 2x + 4 = 3x - 3 => x = 7.'
      },
      {
        q: 'Phương trình bậc nhất ax + b = 0 (a ≠ 0) có bao nhiêu nghiệm?',
        opts: ['Duy nhất một nghiệm', 'Hai nghiệm', 'Vô nghiệm', 'Vô số nghiệm'],
        ans: 0,
        exp: 'Khi a ≠ 0, phương trình luôn có duy nhất một nghiệm x = -b/a.',
        simQ: 'Nếu a = 0 và b ≠ 0 thì ax + b = 0 sẽ:',
        simOpts: ['Vô nghiệm', 'Có 1 nghiệm', 'Vô số nghiệm', 'Có 2 nghiệm'],
        simAns: 0,
        simExp: '0x = -b (với b ≠ 0) là vô nghiệm.'
      },
      {
        q: 'Giá trị của m để phương trình (m - 1)x + 2 = 0 là phương trình bậc nhất một ẩn là:',
        opts: ['m ≠ 1', 'm = 1', 'm > 1', 'm tùy ý'],
        ans: 0,
        exp: 'Hệ số của x phải khác 0: m - 1 ≠ 0 => m ≠ 1.',
        simQ: 'Để (2m - 4)x + 1 = 0 là phương trình bậc nhất một ẩn thì:',
        simOpts: ['m ≠ 2', 'm = 2', 'm > 2', 'm ≠ 0'],
        simAns: 0,
        simExp: '2m - 4 ≠ 0 => m ≠ 2.'
      }
    ]
  },

  // Bài 26
  {
    id: 'k2-b26',
    grade: '8',
    semester: 2,
    chapterNumber: 7,
    chapterTitle: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất',
    lessonNumber: 26,
    title: 'Bài 26. Giải bài toán bằng cách lập phương trình',
    textbookRef: 'Toán 8 KNTT - Bài 26',
    summary: '• Các bước giải bài toán bằng cách lập phương trình:\\n  Bước 1: Lập phương trình (chọn ẩn và đặt điều kiện thích hợp; biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết; lập phương trình biểu thị mối quan hệ giữa các đại lượng).\\n  Bước 2: Giải phương trình vừa lập.\\n  Bước 3: Trả lời (kiểm tra nghiệm có thỏa mãn điều kiện hay không và kết luận).',
    keyFormulas: [
      'Quãng đường: S = v · t',
      'Công việc: Năng suất × Thời gian = Khối lượng công việc'
    ],
    questions: [
      {
        q: 'Một mảnh vườn hình chữ nhật có chu vi 50 m, chiều dài hơn chiều rộng 5 m. Nếu gọi chiều rộng là x (m, x > 0), phương trình nào sau đây đúng?',
        opts: ['2(x + x + 5) = 50', 'x + x + 5 = 50', 'x(x + 5) = 50', '2x + 5 = 50'],
        ans: 0,
        exp: 'Chiều dài là x + 5. Chu vi là 2 × (dài + rộng) = 2(x + x + 5) = 50.',
        simQ: 'Chu vi hình chữ nhật là 40 m, chiều rộng kém chiều dài 4 m. Gọi chiều dài là x thì phương trình là:',
        simOpts: ['2(x + x - 4) = 40', 'x + x - 4 = 40', 'x(x - 4) = 40', '2x - 4 = 40'],
        simAns: 0,
        simExp: '2 × (x + x - 4) = 40.'
      },
      {
        q: 'Trong bài toán trên, chiều rộng của mảnh vườn là bao nhiêu mét?',
        opts: ['10 m', '15 m', '20 m', '12 m'],
        ans: 0,
        exp: '2(2x + 5) = 50 => 4x + 10 = 50 => 4x = 40 => x = 10 m.',
        simQ: 'Chiều dài của mảnh vườn là:',
        simOpts: ['15 m', '10 m', '20 m', '25 m'],
        simAns: 0,
        simExp: 'x + 5 = 10 + 5 = 15 m.'
      },
      {
        q: 'Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn. Nếu gọi số gà là x (x ∈ ℕ*, x < 36), phương trình biểu thị số chân là:',
        opts: ['2x + 4(36 - x) = 100', '4x + 2(36 - x) = 100', '2x + 4x = 100', 'x + (36 - x) = 100'],
        ans: 0,
        exp: 'Số chó là 36 - x. Gà 2 chân, chó 4 chân: 2x + 4(36 - x) = 100.',
        simQ: 'Trong bài toán dân gian trên, số gà là bao nhiêu con?',
        simOpts: ['22 con', '14 con', '20 con', '16 con'],
        simAns: 0,
        simExp: '2x + 144 - 4x = 100 => -2x = -44 => x = 22 con gà.'
      },
      {
        q: 'Số chó trong bài toán trên là:',
        opts: ['14 con', '22 con', '12 con', '16 con'],
        ans: 0,
        exp: '36 - 22 = 14 con chó. (Kiểm tra chân: 22×2 + 14×4 = 44 + 56 = 100).',
        simQ: 'Nếu có 10 con gồm gà và chó, tổng cộng 28 chân. Số gà là:',
        simOpts: ['6 con', '4 con', '5 con', '7 con'],
        simAns: 0,
        simExp: '2x + 4(10 - x) = 28 => -2x = -12 => x = 6 con gà.'
      },
      {
        q: 'Một ô tô đi từ A đến B với vận tốc 50 km/h rồi quay về A với vận tốc 40 km/h. Thời gian về nhiều hơn thời gian đi 30 phút (0.5 giờ). Gọi quãng đường AB là x (km, x > 0), phương trình là:',
        opts: ['x / 40 - x / 50 = 0.5', 'x / 50 - x / 40 = 0.5', '50x - 40x = 0.5', 'x / 40 + x / 50 = 0.5'],
        ans: 0,
        exp: 'Thời gian về là x/40, thời gian đi là x/50. Phương trình: x/40 - x/50 = 0.5.',
        simQ: 'Quãng đường AB dài bao nhiêu km?',
        simOpts: ['100 km', '120 km', '90 km', '80 km'],
        simAns: 0,
        simExp: 'x/40 - x/50 = 0.5 => 5x - 4x = 100 => x = 100 km.'
      },
      {
        q: 'Năm nay tuổi mẹ gấp 3 lần tuổi con. Sau 5 năm nữa, tuổi mẹ gấp 2.5 lần tuổi con. Gọi tuổi con hiện nay là x (tuổi). Tuổi con hiện nay là:',
        opts: ['15 tuổi', '12 tuổi', '10 tuổi', '18 tuổi'],
        ans: 0,
        exp: '3x + 5 = 2.5(x + 5) => 3x + 5 = 2.5x + 12.5 => 0.5x = 7.5 => x = 15.',
        simQ: 'Tuổi mẹ hiện nay là:',
        simOpts: ['45 tuổi', '40 tuổi', '50 tuổi', '36 tuổi'],
        simAns: 0,
        simExp: '3 × 15 = 45 tuổi.'
      },
      {
        q: 'Một người gửi tiết kiệm 50 triệu đồng với lãi suất 6%/năm. Sau 1 năm người đó nhận được số tiền lãi là:',
        opts: ['3 triệu đồng', '300 nghìn đồng', '6 triệu đồng', '1.5 triệu đồng'],
        ans: 0,
        exp: 'Tiền lãi = 50 × 6% = 3 triệu đồng.',
        simQ: 'Gửi 100 triệu với lãi suất 7%/năm thì sau 1 năm lãi là:',
        simOpts: ['7 triệu đồng', '700 nghìn đồng', '14 triệu đồng', '3.5 triệu đồng'],
        simAns: 0,
        simExp: '100 × 7% = 7 triệu đồng.'
      },
      {
        q: 'Một xưởng theo kế hoạch may 30 áo/ngày. Nhờ cải tiến may được 40 áo/ngày nên xong trước kế hoạch 2 ngày. Gọi số ngày theo kế hoạch là x (ngày, x > 2), phương trình là:',
        opts: ['30x = 40(x - 2)', '40x = 30(x - 2)', '30x = 40(x + 2)', 'x / 30 = (x - 2) / 40'],
        ans: 0,
        exp: 'Tổng số áo may là như nhau: 30x = 40(x - 2).',
        simQ: 'Số ngày làm theo kế hoạch là:',
        simOpts: ['8 ngày', '6 ngày', '10 ngày', '12 ngày'],
        simAns: 0,
        simExp: '30x = 40x - 80 => 10x = 80 => x = 8 ngày.'
      },
      {
        q: 'Tổng của hai số là 80, hiệu của chúng là 20. Số lớn là:',
        opts: ['50', '60', '40', '30'],
        ans: 0,
        exp: 'Số lớn = (80 + 20) / 2 = 50.',
        simQ: 'Tổng hai số là 100, số lớn gấp 4 lần số bé. Số bé là:',
        simOpts: ['20', '25', '80', '15'],
        simAns: 0,
        simExp: 'x + 4x = 100 => 5x = 100 => x = 20.'
      },
      {
        q: 'Khi giải bài toán bằng cách lập phương trình, bước nào KHÔNG THỂ BỎ QUA để tránh chọn nhầm nghiệm không phù hợp?',
        opts: ['Kiểm tra nghiệm với điều kiện của ẩn và kết luận', 'Vẽ đồ thị hàm số', 'Đổi tên ẩn số', 'Thử lại 10 lần'],
        ans: 0,
        exp: 'Phải đối chiếu nghiệm tìm được với điều kiện bài toán trước khi kết luận.',
        simQ: 'Nếu tìm được nghiệm x = -5 người cho bài toán tìm số học sinh thì:',
        simOpts: ['Loại vì số học sinh phải là số nguyên dương', 'Nhận nghiệm', 'Lấy giá trị tuyệt đối', 'Đổi dấu thành +5'],
        simAns: 0,
        simExp: 'Loại vì số người không thể là số âm.'
      }
    ]
  },

  // Bài 27
  {
    id: 'k2-b27',
    grade: '8',
    semester: 2,
    chapterNumber: 7,
    chapterTitle: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất',
    lessonNumber: 27,
    title: 'Bài 27. Khái niệm hàm số và đồ thị của hàm số',
    textbookRef: 'Toán 8 KNTT - Bài 27',
    summary: '• Nếu đại lượng y phụ thuộc vào đại lượng thay đổi x sao cho với mỗi giá trị của x ta luôn xác định được chỉ một giá trị tương ứng của y thì y được gọi là hàm số của x, và x gọi là biến số.\\n• Kí hiệu: y = f(x).\\n• Mặt phẳng toạ độ Oxy có trục hoành Ox và trục tung Oy.\\n• Đồ thị hàm số y = f(x) là tập hợp tất cả các điểm M(x; f(x)) trên mặt phẳng toạ độ Oxy.',
    keyFormulas: [
      'y = f(x)',
      'Điểm M(x₀; y₀) thuộc đồ thị y = f(x) <=> y₀ = f(x₀)'
    ],
    questions: [
      {
        q: 'Cho hàm số y = f(x) = 2x + 1. Giá trị f(2) bằng:',
        opts: ['5', '4', '3', '6'],
        ans: 0,
        exp: 'f(2) = 2(2) + 1 = 4 + 1 = 5.',
        diag: 'coordinate',
        diagData: { x: 2, y: 5 },
        simQ: 'Cho y = f(x) = 3x - 2. Tính f(3):',
        simOpts: ['7', '9', '6', '8'],
        simAns: 0,
        simExp: '3(3) - 2 = 7.'
      },
      {
        q: 'Điểm nào sau đây thuộc đồ thị hàm số y = 3x - 1?',
        opts: ['A(1; 2)', 'B(0; 1)', 'C(2; 4)', 'D(-1; 2)'],
        ans: 0,
        exp: 'Thay x = 1: y = 3(1) - 1 = 2 => Điểm A(1; 2) thuộc đồ thị.',
        simQ: 'Điểm nào thuộc đồ thị y = 2x + 3?',
        simOpts: ['M(1; 5)', 'N(0; 2)', 'P(2; 6)', 'Q(-1; 0)'],
        simAns: 0,
        simExp: '2(1) + 3 = 5 => M(1; 5) thuộc đồ thị.'
      },
      {
        q: 'Trong mặt phẳng tọa độ Oxy, trục nằm ngang Ox được gọi là:',
        opts: ['Trục hoành', 'Trục tung', 'Gốc tọa độ', 'Trục đối xứng'],
        ans: 0,
        exp: 'Trục Ox là trục hoành, trục Oy là trục tung.',
        simQ: 'Trục thẳng đứng Oy được gọi là:',
        simOpts: ['Trục tung', 'Trục hoành', 'Trục ảo', 'Trục chính'],
        simAns: 0,
        simExp: 'Trục thẳng đứng là trục tung.'
      },
      {
        q: 'Tọa độ của gốc tọa độ O là:',
        opts: ['(0; 0)', '(1; 1)', '(0; 1)', '(1; 0)'],
        ans: 0,
        exp: 'Gốc tọa độ O có tọa độ (0; 0).',
        simQ: 'Điểm nằm trên trục tung có hoành độ x bằng:',
        simOpts: ['0', '1', 'Tùy ý', '-1'],
        simAns: 0,
        simExp: 'Mọi điểm trên trục tung đều có x = 0.'
      },
      {
        q: 'Điểm M(3; -2) có:',
        opts: ['Hoành độ bằng 3, tung độ bằng -2', 'Hoành độ bằng -2, tung độ bằng 3', 'Hoành độ bằng 3, tung độ bằng 2', 'Tung độ bằng 0'],
        ans: 0,
        exp: 'Quy ước (x; y): hoành độ trước, tung độ sau.',
        simQ: 'Điểm có hoành độ 4, tung độ 1 được viết là:',
        simOpts: ['(4; 1)', '(1; 4)', '(4; -1)', '(-4; 1)'],
        simAns: 0,
        simExp: '(4; 1).'
      },
      {
        q: 'Cho hàm số y = f(x) = x² - 3. Giá trị f(-2) bằng:',
        opts: ['1', '-7', '7', '-1'],
        ans: 0,
        exp: 'f(-2) = (-2)² - 3 = 4 - 3 = 1.',
        simQ: 'Cho y = f(x) = x² + 1. Tính f(-3):',
        simOpts: ['10', '-8', '8', '7'],
        simAns: 0,
        simExp: '(-3)² + 1 = 9 + 1 = 10.'
      },
      {
        q: 'Để một tương quan y phụ thuộc vào x là một hàm số thì điều kiện tiên quyết là:',
        opts: ['Với mỗi giá trị của x, ta xác định được duy nhất một giá trị của y', 'x và y phải tỉ lệ thuận', 'x và y phải bằng nhau', 'y luôn là số dương'],
        ans: 0,
        exp: 'Định nghĩa: mỗi giá trị của x chỉ cho duy nhất một giá trị tương ứng của y.',
        simQ: 'Nếu 1 giá trị x cho 2 giá trị y khác nhau thì y có phải là hàm số của x không?',
        simOpts: ['Không phải là hàm số', 'Là hàm số bậc hai', 'Là hàm số hằng', 'Chưa biết'],
        simAns: 0,
        simExp: 'Không thỏa mãn định nghĩa hàm số.'
      },
      {
        q: 'Điểm M(-3; 0) nằm trên:',
        opts: ['Trục hoành Ox', 'Trục tung Oy', 'Góc phần tư thứ nhất', 'Góc phần tư thứ tư'],
        ans: 0,
        exp: 'Có tung độ y = 0 nên nằm trên trục hoành Ox.',
        simQ: 'Điểm N(0; 5) nằm trên:',
        simOpts: ['Trục tung Oy', 'Trục hoành Ox', 'Gốc tọa độ', 'Đường phân giác'],
        simAns: 0,
        simExp: 'Có hoành độ x = 0 nên nằm trên trục tung Oy.'
      },
      {
        q: 'Cho hàm số y = 2x. Tìm x khi y = 8:',
        opts: ['x = 4', 'x = 16', 'x = 2', 'x = 6'],
        ans: 0,
        exp: '2x = 8 => x = 4.',
        simQ: 'Cho y = 3x. Tìm x khi y = -9:',
        simOpts: ['x = -3', 'x = 3', 'x = -27', 'x = 6'],
        simAns: 0,
        simExp: '3x = -9 => x = -3.'
      },
      {
        q: 'Đồ thị của hàm số y = ax (a ≠ 0) là:',
        opts: ['Một đường thẳng đi qua gốc tọa độ O(0; 0)', 'Một đường cong parabol', 'Một đoạn thẳng', 'Một đường tròn'],
        ans: 0,
        exp: 'y = ax là đường thẳng đi qua gốc toạ độ O(0; 0).',
        simQ: 'Đường thẳng y = 2x đi qua điểm nào?',
        simOpts: ['O(0; 0) và A(1; 2)', 'O(0; 0) và B(1; 3)', 'O(0; 0) và C(2; 1)', 'D(1; 1)'],
        simAns: 0,
        simExp: 'Qua O(0;0) và A(1; 2).'
      }
    ]
  },

  // Bài 28
  {
    id: 'k2-b28',
    grade: '8',
    semester: 2,
    chapterNumber: 7,
    chapterTitle: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất',
    lessonNumber: 28,
    title: 'Bài 28. Hàm số bậc nhất y = ax + b (a ≠ 0)',
    textbookRef: 'Toán 8 KNTT - Bài 28',
    summary: '• Hàm số bậc nhất là hàm số được cho bởi công thức y = ax + b, trong đó a, b là các số cho trước và a ≠ 0.\\n• Khi b = 0, ta có hàm số y = ax.\\n• Đồ thị của hàm số y = ax + b (a ≠ 0) là một đường thẳng:\\n  - Cắt trục tung tại điểm P(0; b).\\n  - Song song với đường thẳng y = ax (nếu b ≠ 0); trùng với y = ax (nếu b = 0).\\n• Tính chất: Hàm số đồng biến khi a > 0; nghịch biến khi a < 0.',
    keyFormulas: [
      'y = ax + b (a ≠ 0)',
      'a > 0: đồng biến (đi lên từ trái sang phải)',
      'a < 0: nghịch biến (đi xuống từ trái sang phải)'
    ],
    questions: [
      {
        q: 'Hàm số nào sau đây là hàm số bậc nhất?',
        opts: ['y = 2x - 3', 'y = x² + 1', 'y = 2/x', 'y = 0x + 4'],
        ans: 0,
        exp: 'y = 2x - 3 có dạng y = ax + b với a = 2 ≠ 0.',
        simQ: 'Hàm số bậc nhất trong các hàm sau là:',
        simOpts: ['y = -3x + 5', 'y = 1/x - 2', 'y = x³', 'y = √x + 1'],
        simAns: 0,
        simExp: 'y = -3x + 5 có a = -3 ≠ 0.'
      },
      {
        q: 'Hệ số a và b của hàm số y = -4x + 7 lần lượt là:',
        opts: ['a = -4, b = 7', 'a = 4, b = 7', 'a = 7, b = -4', 'a = -4, b = -7'],
        ans: 0,
        exp: 'Hệ số của x là a = -4, hệ số tự do b = 7.',
        simQ: 'Hệ số a của hàm số y = 5 - 2x là:',
        simOpts: ['-2', '5', '2', '-5'],
        simAns: 0,
        simExp: 'a là hệ số đứng trước x, a = -2.'
      },
      {
        q: 'Đồ thị của hàm số y = 2x + 4 cắt trục tung tại điểm có tọa độ là:',
        opts: ['(0; 4)', '(4; 0)', '(-2; 0)', '(0; -2)'],
        ans: 0,
        exp: 'Cho x = 0 => y = 4 => Giao với trục tung là (0; 4).',
        simQ: 'Đồ thị y = 3x - 6 cắt trục tung tại:',
        simOpts: ['(0; -6)', '(-6; 0)', '(2; 0)', '(0; 2)'],
        simAns: 0,
        simExp: 'Cho x = 0 => y = -6.'
      },
      {
        q: 'Đồ thị của hàm số y = 2x + 4 cắt trục hoành tại điểm có tọa độ là:',
        opts: ['(-2; 0)', '(0; -2)', '(2; 0)', '(0; 4)'],
        ans: 0,
        exp: 'Cho y = 0 => 2x + 4 = 0 => x = -2 => Giao với trục hoành là (-2; 0).',
        simQ: 'Đồ thị y = 3x - 6 cắt trục hoành tại:',
        simOpts: ['(2; 0)', '(-2; 0)', '(0; 2)', '(0; -6)'],
        simAns: 0,
        simExp: 'Cho y = 0 => 3x = 6 => x = 2.'
      },
      {
        q: 'Hàm số bậc nhất y = ax + b đồng biến trên ℝ khi:',
        opts: ['a > 0', 'a < 0', 'a = 0', 'b > 0'],
        ans: 0,
        exp: 'Hàm số bậc nhất đồng biến khi và chỉ khi hệ số a > 0.',
        simQ: 'Hàm số bậc nhất nghịch biến trên ℝ khi:',
        simOpts: ['a < 0', 'a > 0', 'b < 0', 'a = 0'],
        simAns: 0,
        simExp: 'Hệ số a < 0 thì hàm số nghịch biến.'
      },
      {
        q: 'Hàm số y = -3x + 1 có tính chất gì?',
        opts: ['Nghịch biến trên ℝ', 'Đồng biến trên ℝ', 'Không tăng không giảm', 'Đồng biến khi x > 0'],
        ans: 0,
        exp: 'Vì a = -3 < 0 nên hàm số nghịch biến trên ℝ.',
        simQ: 'Hàm số y = 5x - 2 là hàm số:',
        simOpts: ['Đồng biến trên ℝ', 'Nghịch biến trên ℝ', 'Hàm hằng', 'Không xác định'],
        simAns: 0,
        simExp: 'Vì a = 5 > 0 nên đồng biến trên ℝ.'
      },
      {
        q: 'Tìm m để hàm số y = (m - 2)x + 3 đồng biến trên ℝ:',
        opts: ['m > 2', 'm < 2', 'm = 2', 'm ≠ 2'],
        ans: 0,
        exp: 'Hàm số đồng biến khi hệ số a > 0 => m - 2 > 0 => m > 2.',
        simQ: 'Tìm m để y = (3 - m)x + 1 nghịch biến trên ℝ:',
        simOpts: ['m > 3', 'm < 3', 'm = 3', 'm ≠ 3'],
        simAns: 0,
        simExp: '3 - m < 0 => m > 3.'
      },
      {
        q: 'Đồ thị hàm số y = 2x - 1 song song với đường thẳng nào sau đây?',
        opts: ['y = 2x + 5', 'y = -2x - 1', 'y = x - 1', 'y = 3x - 1'],
        ans: 0,
        exp: 'Hai đường thẳng song song khi có cùng hệ số góc a = 2 và b khác nhau (-1 ≠ 5).',
        simQ: 'Đường thẳng song song với y = -x + 3 là:',
        simOpts: ['y = -x + 1', 'y = x + 3', 'y = 2x + 3', 'y = -2x'],
        simAns: 0,
        simExp: 'Có cùng hệ số a = -1.'
      },
      {
        q: 'Để vẽ đồ thị hàm số y = ax + b (b ≠ 0), ta chỉ cần xác định:',
        opts: ['Hai điểm phân biệt thuộc đồ thị rồi kẻ đường thẳng qua hai điểm đó', 'Một điểm duy nhất', 'Ba điểm thẳng hàng', 'Năm điểm'],
        ans: 0,
        exp: 'Qua hai điểm phân biệt xác định duy nhất một đường thẳng.',
        simQ: 'Hai điểm thuận tiện nhất để vẽ đồ thị hàm số y = ax + b là:',
        simOpts: ['Giao điểm với hai trục tọa độ Ox và Oy', 'Hai điểm bất kì', 'Gốc tọa độ và 1 điểm khác', 'Không có cách nào'],
        simAns: 0,
        simExp: 'Cho x = 0 tìm y và cho y = 0 tìm x (giao điểm với 2 trục).'
      },
      {
        q: 'Một bồn nước đang có 50 lít nước, mỗi phút chảy vào thêm 10 lít. Công thức lượng nước y (lít) sau x phút là:',
        opts: ['y = 10x + 50', 'y = 50x + 10', 'y = 10x - 50', 'y = 50 - 10x'],
        ans: 0,
        exp: 'Ban đầu có 50 lít, mỗi phút tăng 10x lít => y = 10x + 50 (đây là hàm số bậc nhất).',
        simQ: 'Sau 5 phút thì bồn có bao nhiêu lít nước?',
        simOpts: ['100 lít', '80 lít', '60 lít', '120 lít'],
        simAns: 0,
        simExp: 'y = 10(5) + 50 = 100 lít.'
      }
    ]
  },

  // Bài 29
  {
    id: 'k2-b29',
    grade: '8',
    semester: 2,
    chapterNumber: 7,
    chapterTitle: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất',
    lessonNumber: 29,
    title: 'Bài 29. Hệ số góc của đường thẳng',
    textbookRef: 'Toán 8 KNTT - Bài 29',
    summary: '• Trong hàm số bậc nhất y = ax + b (a ≠ 0), hệ số a được gọi là hệ số góc của đường thẳng.\\n• Góc tạo bởi đường thẳng y = ax + b và trục Ox:\\n  - Khi a > 0: góc tạo bởi đường thẳng và chiều dương trục Ox là góc nhọn. a càng lớn thì góc càng lớn.\\n  - Khi a < 0: góc tạo bởi đường thẳng và chiều dương trục Ox là góc tù.\\n• Vị trí tương đối của hai đường thẳng (d): y = ax + b và (d\'): y = a\'x + b\':\\n  - d // d\' <=> a = a\' và b ≠ b\'.\\n  - d trùng d\' <=> a = a\' và b = b\'.\\n  - d cắt d\' <=> a ≠ a\'.\\n  - d ⊥ d\' <=> a · a\' = -1.',
    keyFormulas: [
      'Hệ số góc: a',
      'd // d\' <=> a = a\' & b ≠ b\'',
      'd cắt d\' <=> a ≠ a\'',
      'd ⊥ d\' <=> a · a\' = -1'
    ],
    questions: [
      {
        q: 'Hệ số góc của đường thẳng y = 3x - 5 là:',
        opts: ['3', '-5', '5', '-3'],
        ans: 0,
        exp: 'Hệ số góc chính là hệ số a đứng trước x: a = 3.',
        simQ: 'Hệ số góc của đường thẳng y = -2x + 4 là:',
        simOpts: ['-2', '4', '2', '-4'],
        simAns: 0,
        simExp: 'a = -2.'
      },
      {
        q: 'Đường thẳng có hệ số góc a > 0 thì góc tạo bởi đường thẳng với trục Ox (chiều dương) là:',
        opts: ['Góc nhọn (< 90°)', 'Góc tù (> 90°)', 'Góc vuông (90°)', 'Góc bẹt (180°)'],
        ans: 0,
        exp: 'Khi a > 0, đường thẳng đi lên từ trái sang phải tạo với tia Ox một góc nhọn.',
        simQ: 'Đường thẳng có hệ số góc a < 0 tạo với tia Ox một:',
        simOpts: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc 0°'],
        simAns: 0,
        simExp: 'Khi a < 0 thì góc tạo với Ox là góc tù.'
      },
      {
        q: 'Hai đường thẳng y = ax + b và y = a\'x + b\' song song với nhau khi và chỉ khi:',
        opts: ['a = a\' và b ≠ b\'', 'a = a\' và b = b\'', 'a ≠ a\'', 'a · a\' = -1'],
        ans: 0,
        exp: 'Song song khi hệ số góc bằng nhau và tung độ gốc khác nhau.',
        simQ: 'Hai đường thẳng trùng nhau khi:',
        simOpts: ['a = a\' và b = b\'', 'a = a\' và b ≠ b\'', 'a ≠ a\'', 'a = -a\''],
        simAns: 0,
        simExp: 'Cùng hệ số góc và cùng tung độ gốc.'
      },
      {
        q: 'Hai đường thẳng y = ax + b và y = a\'x + b\' cắt nhau khi và chỉ khi:',
        opts: ['a ≠ a\'', 'a = a\'', 'b ≠ b\'', 'b = b\''],
        ans: 0,
        exp: 'Hai đường thẳng cắt nhau khi hai hệ số góc khác nhau (a ≠ a\').',
        simQ: 'Cặp đường thẳng nào sau đây cắt nhau?',
        simOpts: ['y = 2x + 1 và y = 3x - 1', 'y = 2x + 1 và y = 2x - 3', 'y = -x và y = -x + 4', 'y = 5x và y = 5x + 2'],
        simAns: 0,
        simExp: 'a = 2 khác a\' = 3 nên hai đường thẳng cắt nhau.'
      },
      {
        q: 'Tìm m để hai đường thẳng y = (m + 1)x + 2 và y = 3x - 1 song song với nhau:',
        opts: ['m = 2', 'm = 3', 'm = 1', 'm = -2'],
        ans: 0,
        exp: 'm + 1 = 3 => m = 2 (khi đó 2 ≠ -1 nên song song).',
        simQ: 'Tìm m để y = mx - 2 song song với y = 4x + 1:',
        simOpts: ['m = 4', 'm = -4', 'm = 2', 'm = 1'],
        simAns: 0,
        simExp: 'm = 4.'
      },
      {
        q: 'Đường thẳng y = ax + 3 đi qua điểm A(1; 5). Hệ số góc a bằng:',
        opts: ['2', '3', '5', '8'],
        ans: 0,
        exp: 'Thay x = 1, y = 5: 5 = a(1) + 3 => a = 2.',
        simQ: 'Đường thẳng y = ax - 1 đi qua B(2; 3). Hệ số góc a là:',
        simOpts: ['2', '1', '4', '3'],
        simAns: 0,
        simExp: '3 = 2a - 1 => 2a = 4 => a = 2.'
      },
      {
        q: 'Hai đường thẳng vuông góc với nhau khi tích hai hệ số góc bằng:',
        opts: ['-1', '1', '0', '2'],
        ans: 0,
        exp: 'Điều kiện vuông góc: a · a\' = -1.',
        simQ: 'Đường thẳng vuông góc với đường thẳng y = 2x + 1 có hệ số góc là:',
        simOpts: ['-1/2', '1/2', '-2', '2'],
        simAns: 0,
        simExp: 'a · 2 = -1 => a = -1/2.'
      },
      {
        q: 'Tung độ gốc của đường thẳng y = -5x + 8 là:',
        opts: ['8', '-5', '5', '-8'],
        ans: 0,
        exp: 'Tung độ gốc là b = 8 (tọa độ giao điểm với trục tung là (0; 8)).',
        simQ: 'Tung độ gốc của y = 4x - 3 là:',
        simOpts: ['-3', '3', '4', '-4'],
        simAns: 0,
        simExp: 'b = -3.'
      },
      {
        q: 'Cho ba đường thẳng: (d1): y = 2x, (d2): y = 2x + 3, (d3): y = -x + 1. Khẳng định nào đúng?',
        opts: ['d1 song song với d2', 'd1 cắt d2', 'd1 song song với d3', 'd2 song song với d3'],
        ans: 0,
        exp: 'd1 và d2 có cùng hệ số góc a = 2 và b khác nhau (0 ≠ 3) nên song song.',
        simQ: 'Đường thẳng nào cắt cả d1 và d2?',
        simOpts: ['d3 (vì hệ số góc -1 khác 2)', 'y = 2x - 5', 'y = 2x + 10', 'Không có'],
        simAns: 0,
        simExp: 'd3 có hệ số góc a = -1 ≠ 2 nên cắt cả d1 và d2.'
      },
      {
        q: 'Góc tạo bởi đường thẳng y = x + 1 và trục Ox có số đo là:',
        opts: ['45°', '30°', '60°', '90°'],
        ans: 0,
        exp: 'Hệ số góc a = tan(α) = 1 => α = 45°.',
        simQ: 'Góc tạo bởi đường thẳng y = -x + 2 và chiều dương trục Ox là:',
        simOpts: ['135°', '45°', '90°', '120°'],
        simAns: 0,
        simExp: '180° - 45° = 135°.'
      }
    ]
  }
];

writeChapterFile(5, chapter5Lessons);
writeChapterFile(6, chapter6Lessons);
writeChapterFile(7, chapter7Lessons);
