import { writeChapterFile, LessonRaw } from './chapterWriterHelper';

// ==========================================
// CHƯƠNG VIII: MỞ ĐẦU VỀ TÍNH XÁC SUẤT CỦA BIẾN CỐ
// ==========================================
const chapter8Lessons: LessonRaw[] = [
  // Bài 30
  {
    id: 'k2-b30',
    grade: '8',
    semester: 2,
    chapterNumber: 8,
    chapterTitle: 'Chương VIII: Mở đầu về tính xác suất của biến cố',
    lessonNumber: 30,
    title: 'Bài 30. Kết quả có thể và kết quả thuận lợi',
    textbookRef: 'Toán 8 KNTT - Bài 30',
    summary: '• Phép thử ngẫu nhiên: Hành động hay thực nghiệm mà kết quả của nó không thể biết trước.\\n• Kết quả có thể: Tất cả các kết quả có thể xảy ra của một phép thử.\\n• Biến cố: Một sự kiện liên quan đến phép thử mà ta có thể xác định được nó xảy ra hay không xảy ra.\\n• Kết quả thuận lợi cho biến cố: Là những kết quả của phép thử làm cho biến cố đó xảy ra.',
    keyFormulas: [
      'Không gian kết quả có thể: tập hợp tất cả các kết quả',
      'Kết quả thuận lợi: tập con các kết quả làm biến cố xảy ra'
    ],
    questions: [
      {
        q: 'Gieo một con xúc xắc 6 mặt cân đối. Có bao nhiêu kết quả có thể xảy ra?',
        opts: ['6 kết quả (xuất hiện mặt 1, 2, 3, 4, 5, 6 chấm)', '5 kết quả', '12 kết quả', '1 kết quả'],
        ans: 0,
        exp: 'Xúc xắc có 6 mặt đánh số từ 1 đến 6 nên có 6 kết quả có thể.',
        simQ: 'Tung một đồng xu cân đối, có bao nhiêu kết quả có thể xảy ra?',
        simOpts: ['2 kết quả (Mặt sấp S hoặc Mặt ngửa N)', '1 kết quả', '4 kết quả', 'Vô số'],
        simAns: 0,
        simExp: 'Có 2 kết quả: Sấp (S) hoặc Ngửa (N).'
      },
      {
        q: 'Gieo một con xúc xắc 6 mặt. Số kết quả thuận lợi cho biến cố "Xuất hiện mặt có số chấm là số chẵn" là:',
        opts: ['3 kết quả (mặt 2, 4, 6 chấm)', '2 kết quả', '4 kết quả', '6 kết quả'],
        ans: 0,
        exp: 'Các số chẵn từ 1 đến 6 là {2, 4, 6} => Có 3 kết quả thuận lợi.',
        simQ: 'Số kết quả thuận lợi cho biến cố "Xuất hiện mặt lẻ" khi gieo xúc xắc là:',
        simOpts: ['3 kết quả (1, 3, 5)', '2 kết quả', '4 kết quả', '1 kết quả'],
        simAns: 0,
        simExp: 'Các mặt {1, 3, 5} có 3 kết quả.'
      },
      {
        q: 'Gieo một con xúc xắc. Biến cố nào sau đây là biến cố chắc chắn?',
        opts: ['Số chấm xuất hiện nhỏ hơn 7', 'Số chấm xuất hiện là số 6', 'Số chấm xuất hiện lớn hơn 3', 'Số chấm xuất hiện là số 0'],
        ans: 0,
        exp: 'Xúc xắc chỉ có từ 1 đến 6 chấm nên số chấm luôn nhỏ hơn 7 (chắc chắn xảy ra).',
        simQ: 'Biến cố nào sau đây là biến cố không thể khi gieo xúc xắc?',
        simOpts: ['Xuất hiện mặt 7 chấm', 'Xuất hiện mặt 1 chấm', 'Xuất hiện số chẵn', 'Xuất hiện số nguyên tố'],
        simAns: 0,
        simExp: 'Không có mặt nào 7 chấm nên đây là biến cố không thể.'
      },
      {
        q: 'Một hộp có 4 quả bóng xanh, đỏ, tím, vàng. Lấy ngẫu nhiên 1 quả bóng. Có bao nhiêu kết quả có thể?',
        opts: ['4 kết quả', '1 kết quả', '3 kết quả', '6 kết quả'],
        ans: 0,
        exp: 'Có 4 quả bóng khác nhau nên có 4 kết quả có thể.',
        simQ: 'Rút ngẫu nhiên một thẻ từ hộp gồm các thẻ đánh số 1, 2, 3, 4, 5. Số kết quả có thể là:',
        simOpts: ['5 kết quả', '1 kết quả', '10 kết quả', '4 kết quả'],
        simAns: 0,
        simExp: 'Có 5 thẻ nên có 5 kết quả có thể.'
      },
      {
        q: 'Rút một thẻ từ hộp chứa 10 thẻ đánh số từ 1 đến 10. Số kết quả thuận lợi cho biến cố "Số trên thẻ chia hết cho 3" là:',
        opts: ['3 kết quả (3, 6, 9)', '4 kết quả', '2 kết quả', '5 kết quả'],
        ans: 0,
        exp: 'Các số chia hết cho 3 từ 1 đến 10 là 3, 6, 9 (3 kết quả).',
        simQ: 'Số kết quả thuận lợi cho biến cố "Số trên thẻ là số nguyên tố" từ 1 đến 10 là:',
        simOpts: ['4 kết quả (2, 3, 5, 7)', '5 kết quả', '3 kết quả', '2 kết quả'],
        simAns: 0,
        simExp: 'Các số nguyên tố là 2, 3, 5, 7 (4 kết quả).'
      },
      {
        q: 'Gieo đồng thời hai đồng xu cân đối. Tập hợp các kết quả có thể là:',
        opts: ['{SS, SN, NS, NN}', '{SS, NN}', '{S, N}', '{SS, SN, NN}'],
        ans: 0,
        exp: 'Mỗi đồng xu có 2 khả năng, 2 đồng xu có 2 × 2 = 4 kết quả: {SS, SN, NS, NN}.',
        simQ: 'Số kết quả có thể khi tung 2 đồng xu là:',
        simOpts: ['4', '2', '3', '8'],
        simAns: 0,
        simExp: '2 × 2 = 4 kết quả.'
      },
      {
        q: 'Khi tung 2 đồng xu, số kết quả thuận lợi cho biến cố "Có ít nhất một mặt sấp" là:',
        opts: ['3 (SS, SN, NS)', '2 (SN, NS)', '1 (SS)', '4'],
        ans: 0,
        exp: 'Có 3 trường hợp thỏa mãn có ít nhất 1 mặt sấp: SS, SN, NS.',
        simQ: 'Số kết quả thuận lợi cho "Cả hai mặt đều ngửa" là:',
        simOpts: ['1 (NN)', '2', '3', '4'],
        simAns: 0,
        simExp: 'Chỉ có 1 kết quả duy nhất là NN.'
      },
      {
        q: 'Một túi chứa 3 viên bi xanh và 2 viên bi đỏ. Lấy ngẫu nhiên 1 viên bi. Số kết quả có thể là:',
        opts: ['5 kết quả', '2 kết quả', '3 kết quả', '6 kết quả'],
        ans: 0,
        exp: 'Tổng cộng có 3 + 2 = 5 viên bi phân biệt, nên có 5 kết quả có thể.',
        simQ: 'Số kết quả thuận lợi cho biến cố "Lấy được bi đỏ" là:',
        simOpts: ['2 kết quả', '3 kết quả', '5 kết quả', '1 kết quả'],
        simAns: 0,
        simExp: 'Có 2 viên bi đỏ nên có 2 kết quả thuận lợi.'
      },
      {
        q: 'Chọn ngẫu nhiên một chữ cái trong từ "HOC TAP". Có bao nhiêu kết quả có thể (tính cả dấu cách hoặc chỉ chữ cái)? Nếu chỉ chọn chữ cái:',
        opts: ['6 kết quả (H, O, C, T, A, P)', '7 kết quả', '5 kết quả', '8 kết quả'],
        ans: 0,
        exp: 'Các chữ cái là H, O, C, T, A, P (6 chữ cái đôi một khác nhau).',
        simQ: 'Số kết quả có thể chọn một chữ cái trong từ "TOAN":',
        simOpts: ['4 (T, O, A, N)', '3', '5', '1'],
        simAns: 0,
        simExp: 'Có 4 chữ cái phân biệt.'
      },
      {
        q: 'Phép thử "Chọn ngẫu nhiên một tháng trong năm". Số kết quả thuận lợi cho biến cố "Tháng có 31 ngày" là:',
        opts: ['7 kết quả (Tháng 1, 3, 5, 7, 8, 10, 12)', '6 kết quả', '4 kết quả', '5 kết quả'],
        ans: 0,
        exp: 'Các tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12 (7 tháng).',
        simQ: 'Số kết quả thuận lợi cho "Tháng có 30 ngày" là:',
        simOpts: ['4 kết quả (Tháng 4, 6, 9, 11)', '5 kết quả', '7 kết quả', '6 kết quả'],
        simAns: 0,
        simExp: 'Có 4 tháng có 30 ngày (4, 6, 9, 11).'
      }
    ]
  },

  // Bài 31
  {
    id: 'k2-b31',
    grade: '8',
    semester: 2,
    chapterNumber: 8,
    chapterTitle: 'Chương VIII: Mở đầu về tính xác suất của biến cố',
    lessonNumber: 31,
    title: 'Bài 31. Cách tính xác suất của biến cố bằng tỉ số',
    textbookRef: 'Toán 8 KNTT - Bài 31',
    summary: '• Khi tất cả các kết quả có thể của một phép thử là đồng khả năng, xác suất của biến cố E được tính bằng công thức:\\n  P(E) = n(E) / n\\n  trong đó:\\n  n(E) là số kết quả thuận lợi cho biến cố E;\\n  n là tổng số kết quả có thể của phép thử.\\n• Xác suất của biến cố chắc chắn bằng 1.\\n• Xác suất của biến cố không thể bằng 0.\\n• 0 ≤ P(E) ≤ 1 với mọi biến cố E.',
    keyFormulas: [
      'P(E) = n(E) / n',
      '0 ≤ P(E) ≤ 1',
      'P(Chắc chắn) = 1, P(Không thể) = 0'
    ],
    questions: [
      {
        q: 'Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt 5 chấm là:',
        opts: ['1/6', '5/6', '1/2', '1/5'],
        ans: 0,
        exp: 'Có 1 kết quả thuận lợi trên tổng số 6 kết quả có thể: P = 1/6.',
        simQ: 'Xác suất để xuất hiện mặt 1 chấm khi gieo xúc xắc là:',
        simOpts: ['1/6', '1/2', '1/3', '1'],
        simAns: 0,
        simExp: 'P = 1/6.'
      },
      {
        q: 'Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm là số chẵn là:',
        opts: ['1/2 (hay 3/6)', '1/3', '1/6', '2/3'],
        ans: 0,
        exp: 'Số chẵn là {2, 4, 6} (3 kết quả) => P = 3/6 = 1/2.',
        simQ: 'Xác suất xuất hiện mặt lẻ khi gieo xúc xắc là:',
        simOpts: ['1/2', '1/3', '1/6', '2/3'],
        simAns: 0,
        simExp: 'P = 3/6 = 1/2.'
      },
      {
        q: 'Tung một đồng xu cân đối. Xác suất để xuất hiện mặt sấp là:',
        opts: ['1/2', '1', '1/4', '0'],
        ans: 0,
        exp: 'Đồng xu có 2 mặt đồng khả năng => P = 1/2.',
        simQ: 'Xác suất xuất hiện mặt ngửa là:',
        simOpts: ['1/2', '1/4', '3/4', '1'],
        simAns: 0,
        simExp: 'P = 1/2.'
      },
      {
        q: 'Một hộp có 3 quả bóng đỏ và 7 quả bóng vàng có cùng kích thước. Lấy ngẫu nhiên 1 quả bóng. Xác suất lấy được bóng đỏ là:',
        opts: ['3/10', '7/10', '3/7', '1/3'],
        ans: 0,
        exp: 'Tổng số bóng = 3 + 7 = 10. Số bóng đỏ = 3 => P = 3/10 = 0.3.',
        simQ: 'Xác suất lấy được quả bóng vàng là:',
        simOpts: ['7/10', '3/10', '7/3', '1/7'],
        simAns: 0,
        simExp: 'P = 7/10 = 0.7.'
      },
      {
        q: 'Gieo một con xúc xắc 6 mặt. Xác suất xuất hiện mặt có số chấm lớn hơn 4 là:',
        opts: ['1/3 (hay 2/6)', '1/2', '2/3', '1/6'],
        ans: 0,
        exp: 'Các mặt lớn hơn 4 là {5, 6} (2 mặt) => P = 2/6 = 1/3.',
        simQ: 'Xác suất xuất hiện số chấm nhỏ hơn hoặc bằng 2 là:',
        simOpts: ['1/3', '1/2', '1/6', '2/3'],
        simAns: 0,
        simExp: 'Các mặt {1, 2} có 2 mặt => 2/6 = 1/3.'
      },
      {
        q: 'Rút ngẫu nhiên một thẻ từ hộp có 20 thẻ đánh số từ 1 đến 20. Xác suất rút được thẻ ghi số chia hết cho 5 là:',
        opts: ['1/5 (hay 4/20)', '1/4', '1/2', '1/10'],
        ans: 0,
        exp: 'Các số chia hết cho 5 là {5, 10, 15, 20} (4 số) => P = 4/20 = 1/5.',
        simQ: 'Xác suất rút được số chia hết cho 10 là:',
        simOpts: ['1/10 (hay 2/20)', '1/5', '1/20', '2/10'],
        simAns: 0,
        simExp: '{10, 20} có 2 số => 2/20 = 1/10.'
      },
      {
        q: 'Xác suất của một biến cố không thể xảy ra luôn bằng:',
        opts: ['0', '1', '0.5', '-1'],
        ans: 0,
        exp: 'Biến cố không thể có số kết quả thuận lợi bằng 0 nên P = 0.',
        simQ: 'Xác suất của biến cố chắc chắn luôn bằng:',
        simOpts: ['1', '0', '100', '0.5'],
        simAns: 0,
        simExp: 'Biến cố chắc chắn có xác suất bằng 1 (hoặc 100%).'
      },
      {
        q: 'Gieo đồng thời hai đồng xu cân đối. Xác suất để cả hai đồng xu đều xuất hiện mặt ngửa là:',
        opts: ['1/4', '1/2', '3/4', '1'],
        ans: 0,
        exp: 'Tổng số kết quả là 4 (SS, SN, NS, NN). Chỉ có 1 kết quả NN => P = 1/4.',
        simQ: 'Xác suất để có ít nhất một mặt ngửa là:',
        simOpts: ['3/4', '1/2', '1/4', '1'],
        simAns: 0,
        simExp: '{NN, NS, SN} có 3 kết quả => 3/4.'
      },
      {
        q: 'Một lớp có 18 bạn nam và 22 bạn nữ. Chọn ngẫu nhiên một bạn làm lớp trưởng. Xác suất bạn được chọn là nữ là:',
        opts: ['11/20 (hay 22/40)', '9/20', '22/18', '1/2'],
        ans: 0,
        exp: 'Tổng số học sinh = 18 + 22 = 40. Số nữ = 22 => P = 22/40 = 11/20 = 55%.',
        simQ: 'Xác suất bạn được chọn là nam là:',
        simOpts: ['9/20 (hay 18/40)', '11/20', '18/22', '1/2'],
        simAns: 0,
        simExp: '18/40 = 9/20 = 45%.'
      },
      {
        q: 'Nếu biến cố A có xác suất P(A) = 0.35 thì xác suất của biến cố "A không xảy ra" là:',
        opts: ['0.65', '0.35', '1.35', '-0.35'],
        ans: 0,
        exp: 'P(không xảy ra A) = 1 - P(A) = 1 - 0.35 = 0.65.',
        simQ: 'Nếu xác suất mưa là 40% (0.4) thì xác suất không mưa là:',
        simOpts: ['60% (0.6)', '40%', '100%', '20%'],
        simAns: 0,
        simExp: '100% - 40% = 60%.'
      }
    ]
  },

  // Bài 32
  {
    id: 'k2-b32',
    grade: '8',
    semester: 2,
    chapterNumber: 8,
    chapterTitle: 'Chương VIII: Mở đầu về tính xác suất của biến cố',
    lessonNumber: 32,
    title: 'Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất lí thuyết',
    textbookRef: 'Toán 8 KNTT - Bài 32',
    summary: '• Xác suất thực nghiệm của biến cố E được tính bằng: (Số lần biến cố E xảy ra) / (Tổng số lần thực hiện phép thử).\\n• Khi số lần thực hiện phép thử càng lớn thì xác suất thực nghiệm của biến cố sẽ càng gần với xác suất lí thuyết của biến cố đó.\\n• Ứng dụng: Dùng xác suất lí thuyết để dự đoán số lần xuất hiện của biến cố trong thực tế, hoặc dùng thực nghiệm để ước lượng xác suất.',
    keyFormulas: [
      'Xác suất thực nghiệm = k / n',
      'Khi n rất lớn: k / n ≈ P(E)',
      'Số lần dự đoán xuất hiện = n · P(E)'
    ],
    questions: [
      {
        q: 'Tung một đồng xu 100 lần, thấy có 48 lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt ngửa là:',
        opts: ['48/100 = 0.48', '52/100 = 0.52', '1/2 = 0.5', '48/52'],
        ans: 0,
        exp: 'Xác suất thực nghiệm = 48 / 100 = 0.48.',
        simQ: 'Gieo đồng xu 50 lần có 26 lần mặt sấp. Xác suất thực nghiệm mặt sấp là:',
        simOpts: ['26/50 = 0.52', '24/50 = 0.48', '0.5', '26/24'],
        simAns: 0,
        simExp: '26 / 50 = 0.52.'
      },
      {
        q: 'Mối quan hệ giữa xác suất thực nghiệm và xác suất lí thuyết là:',
        opts: ['Khi số phép thử lặp lại rất lớn, xác suất thực nghiệm dao động xung quanh và xấp xỉ bằng xác suất lí thuyết', 'Xác suất thực nghiệm luôn luôn bằng xác suất lí thuyết', 'Xác suất thực nghiệm luôn lớn hơn xác suất lí thuyết', 'Không có liên hệ gì'],
        ans: 0,
        exp: 'Theo quy luật số lớn, thực nghiệm tiệm cận lí thuyết khi số lần thử n rất lớn.',
        simQ: 'Để xác suất thực nghiệm càng sát với xác suất lí thuyết, ta cần:',
        simOpts: ['Thực hiện phép thử càng nhiều lần càng tốt', 'Chỉ thực hiện 1 lần duy nhất', 'Đổi dụng cụ thử', 'Lấy kết quả đầu tiên'],
        simAns: 0,
        simExp: 'Tăng số lần lặp lại thí nghiệm.'
      },
      {
        q: 'Xác suất lí thuyết xuất hiện mặt 6 chấm khi gieo xúc xắc là 1/6. Nếu gieo xúc xắc 600 lần, số lần dự đoán xuất hiện mặt 6 chấm là khoảng:',
        opts: ['100 lần', '60 lần', '200 lần', '50 lần'],
        ans: 0,
        exp: 'Số lần dự đoán = 600 × (1/6) = 100 lần.',
        simQ: 'Tung đồng xu 200 lần, số lần xuất hiện mặt ngửa dự đoán khoảng:',
        simOpts: ['100 lần', '50 lần', '150 lần', '200 lần'],
        simAns: 0,
        simExp: '200 × (1/2) = 100 lần.'
      },
      {
        q: 'Nhà toán học Pearson đã tung đồng xu 24000 lần và thu được 12012 lần mặt ngửa. Xác suất thực nghiệm là:',
        opts: ['12012 / 24000 = 0.5005', '0.5', '0.4995', '0.52'],
        ans: 0,
        exp: '12012 / 24000 = 0.5005, cực kì gần với xác suất lí thuyết 0.5.',
        simQ: 'Buffon tung đồng xu 4040 lần có 2048 lần mặt ngửa. Tỉ số thực nghiệm xấp xỉ:',
        simOpts: ['0.5069', '0.4040', '0.6', '0.45'],
        simAns: 0,
        simExp: '2048 / 4040 ≈ 0.5069.'
      },
      {
        q: 'Kiểm tra 500 bóng đèn của một nhà máy thì thấy có 5 bóng bị hỏng. Xác suất thực nghiệm gặp bóng đèn bị hỏng là:',
        opts: ['5/500 = 1% (0.01)', '5/500 = 10%', '0.005', '5%'],
        ans: 0,
        exp: '5 / 500 = 1/100 = 0.01 = 1%.',
        simQ: 'Nếu nhà máy sản xuất 10000 bóng đèn thì dự đoán có khoảng bao nhiêu bóng hỏng?',
        simOpts: ['100 bóng', '50 bóng', '10 bóng', '500 bóng'],
        simAns: 0,
        simExp: '10000 × 1% = 100 bóng hỏng.'
      },
      {
        q: 'Gieo một con xúc xắc 120 lần, số lần xuất hiện mặt chẵn dự đoán khoảng bao nhiêu lần?',
        opts: ['60 lần', '40 lần', '20 lần', '80 lần'],
        ans: 0,
        exp: '120 × (1/2) = 60 lần.',
        simQ: 'Số lần xuất hiện mặt có số chấm chia hết cho 3 (3 và 6) dự đoán khoảng:',
        simOpts: ['40 lần', '60 lần', '30 lần', '20 lần'],
        simAns: 0,
        simExp: '120 × (2/6) = 40 lần.'
      },
      {
        q: 'Bắn 50 phát súng vào bia trúng đích 42 phát. Xác suất thực nghiệm bắn trúng đích của xạ thủ là:',
        opts: ['42/50 = 84% (0.84)', '42/50 = 42%', '8/50 = 16%', '0.5'],
        ans: 0,
        exp: '42 / 50 = 0.84 = 84%.',
        simQ: 'Xác suất thực nghiệm bắn trượt đích là:',
        simOpts: ['8/50 = 16% (0.16)', '84%', '8%', '42%'],
        simAns: 0,
        simExp: '(50 - 42) / 50 = 8/50 = 16%.'
      },
      {
        q: 'Một hạt giống có xác suất nảy mầm là 85%. Nếu gieo 200 hạt giống thì dự kiến sẽ có bao nhiêu hạt nảy mầm?',
        opts: ['170 hạt', '150 hạt', '185 hạt', '190 hạt'],
        ans: 0,
        exp: '200 × 85% = 200 × 0.85 = 170 hạt giống.',
        simQ: 'Nếu gieo 500 hạt giống thì dự đoán số hạt nảy mầm là:',
        simOpts: ['425 hạt', '400 hạt', '450 hạt', '350 hạt'],
        simAns: 0,
        simExp: '500 × 85% = 425 hạt.'
      },
      {
        q: 'Khi tung xúc xắc 10 lần mà không có lần nào ra mặt 6 chấm, ta kết luận xác suất mặt 6 chấm bằng 0 là:',
        opts: ['Sai, vì số lần thử quá ít nên xác suất thực nghiệm chưa phản ánh đúng xác suất lí thuyết', 'Đúng hoàn toàn', 'Xúc xắc bị lỗi', 'Không thể xác định'],
        ans: 0,
        exp: '10 lần là quá ít, quy luật thống kê chỉ đúng khi số phép thử đủ lớn.',
        simQ: 'Tung đồng xu 3 lần liên tiếp đều ra ngửa, lần thứ 4 xác suất ra sấp là:',
        simOpts: ['Vẫn là 1/2', 'Bằng 1', 'Bằng 0', 'Bằng 3/4'],
        simAns: 0,
        simExp: 'Các lần tung độc lập với nhau, xác suất mỗi lần tung vẫn là 1/2.'
      },
      {
        q: 'Ý nghĩa thực tiễn lớn nhất của xác suất thực nghiệm là:',
        opts: ['Ước lượng xác suất trong các tình huống thực tế không thể tính bằng lí thuyết thuần túy', 'Thay thế hoàn toàn toán học', 'Làm trò chơi may rủi', 'Tìm nghiệm phương trình'],
        ans: 0,
        exp: 'Dùng để ước lượng tỉ lệ trong y tế, bảo hiểm, khí tượng, nông nghiệp khi không có công thức lí thuyết chính xác.',
        simQ: 'Dự báo thời tiết thông báo xác suất mưa ngày mai là 70% có nghĩa là:',
        simOpts: ['Trong các ngày có điều kiện tương tự thì có khoảng 70% số ngày sẽ có mưa', 'Mưa 70% diện tích', 'Mưa trong 70% thời gian của ngày', 'Chắc chắn mưa'],
        simAns: 0,
        simExp: 'Tần suất xuất hiện mưa dựa trên mô hình dữ liệu thống kê.'
      }
    ]
  }
];

// ==========================================
// CHƯƠNG IX: TAM GIÁC ĐỒNG DẠNG
// ==========================================
const chapter9Lessons: LessonRaw[] = [
  // Bài 33
  {
    id: 'k2-b33',
    grade: '8',
    semester: 2,
    chapterNumber: 9,
    chapterTitle: 'Chương IX: Tam giác đồng dạng',
    lessonNumber: 33,
    title: 'Bài 33. Hai tam giác đồng dạng',
    textbookRef: 'Toán 8 KNTT - Bài 33',
    summary: '• Định nghĩa: Tam giác A\'B\'C\' gọi là đồng dạng với tam giác ABC (kí hiệu: ΔA\'B\'C\' ∽ ΔABC) nếu:\\n  Â\' = Â, B̂\' = B̂, Ĉ\' = Ĉ\\n  và A\'B\'/AB = B\'C\'/BC = C\'A\'/CA = k (k gọi là tỉ số đồng dạng).\\n• Tính chất: Mỗi tam giác đồng dạng với chính nó theo tỉ số k = 1.\\n• Nếu ΔA\'B\'C\' ∽ ΔABC theo tỉ số k thì ΔABC ∽ ΔA\'B\'C\' theo tỉ số 1/k.\\n• Tỉ số chu vi của hai tam giác đồng dạng bằng tỉ số đồng dạng k.\\n• Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng k².',
    keyFormulas: [
      'ΔA\'B\'C\' ∽ ΔABC theo tỉ số k',
      'Tỉ số chu vi: P\' / P = k',
      'Tỉ số diện tích: S\' / S = k²'
    ],
    questions: [
      {
        q: 'Nếu ΔABC ∽ ΔA\'B\'C\' theo tỉ số đồng dạng k = 2/3 thì ΔA\'B\'C\' ∽ ΔABC theo tỉ số đồng dạng là:',
        opts: ['3/2', '2/3', '4/9', '9/4'],
        ans: 0,
        exp: 'Tỉ số nghịch đảo: 1 / (2/3) = 3/2.',
        simQ: 'Nếu ΔMNP ∽ ΔDEF theo tỉ số k = 4 thì ΔDEF ∽ ΔMNP theo tỉ số:',
        simOpts: ['1/4', '4', '16', '1/16'],
        simAns: 0,
        simExp: 'Tỉ số là 1/k = 1/4.'
      },
      {
        q: 'Hai tam giác bằng nhau thì đồng dạng với nhau theo tỉ số đồng dạng là:',
        opts: ['k = 1', 'k = 0', 'k = 2', 'Tùy ý'],
        ans: 0,
        exp: 'Các cạnh tương ứng bằng nhau nên tỉ số các cạnh là 1/1 = 1.',
        simQ: 'Hai tam giác đồng dạng có nhất thiết phải bằng nhau không?',
        simOpts: ['Không, chúng chỉ bằng nhau khi k = 1', 'Luôn luôn bằng nhau', 'Bằng nhau khi các góc bằng 60°', 'Có'],
        simAns: 0,
        simExp: 'Chỉ bằng nhau khi tỉ số đồng dạng k = 1.'
      },
      {
        q: 'Cho ΔABC ∽ ΔDEF theo tỉ số k = 3. Biết chu vi ΔDEF là 15 cm. Chu vi ΔABC là:',
        opts: ['45 cm', '5 cm', '15 cm', '135 cm'],
        ans: 0,
        exp: 'P(ABC) / P(DEF) = k = 3 => P(ABC) = 3 × 15 = 45 cm.',
        simQ: 'Chu vi ΔA\'B\'C\' là 20 cm, ΔA\'B\'C\' ∽ ΔABC theo tỉ số k = 1/2. Chu vi ΔABC là:',
        simOpts: ['40 cm', '10 cm', '20 cm', '80 cm'],
        simAns: 0,
        simExp: 'P(ABC) = 20 / (1/2) = 40 cm.'
      },
      {
        q: 'Nếu ΔABC ∽ ΔMNP theo tỉ số k = 2 thì tỉ số diện tích S(ABC) / S(MNP) bằng:',
        opts: ['4', '2', '8', '1/4'],
        ans: 0,
        exp: 'Tỉ số diện tích bằng bình phương tỉ số đồng dạng: k² = 2² = 4.',
        simQ: 'Tỉ số diện tích của hai tam giác đồng dạng có tỉ số k = 1/3 là:',
        simOpts: ['1/9', '1/3', '1/6', '9'],
        simAns: 0,
        simExp: '(1/3)² = 1/9.'
      },
      {
        q: 'Cho ΔABC ∽ ΔDEF có Â = 60°, B̂ = 70°. Số đo của góc F̂ là:',
        opts: ['50°', '60°', '70°', '130°'],
        ans: 0,
        exp: 'Ĉ = 180° - (60° + 70°) = 50°. Vì đồng dạng nên F̂ = Ĉ = 50°.',
        simQ: 'Cho ΔABC ∽ ΔXYZ có Â = 80°, B̂ = 40°. Góc Ẑ bằng:',
        simOpts: ['60°', '80°', '40°', '120°'],
        simAns: 0,
        simExp: '180° - (80° + 40°) = 60°.'
      },
      {
        q: 'Định lí cơ bản: Nếu một đường thẳng cắt hai cạnh của tam giác và song song với cạnh thứ ba thì:',
        opts: ['Nó tạo thành một tam giác mới đồng dạng với tam giác đã cho', 'Nó chia tam giác thành hai phần bằng nhau', 'Nó tạo thành tam giác vuông', 'Nó tạo thành tam giác đều'],
        ans: 0,
        exp: 'MN // BC (M ∈ AB, N ∈ AC) => ΔAMN ∽ ΔABC.',
        simQ: 'Cho tam giác ABC, DE // BC (D ∈ AB, E ∈ AC). Khẳng định nào đúng?',
        simOpts: ['ΔADE ∽ ΔABC', 'ΔADE = ΔABC', 'ΔBDE ∽ ΔABC', 'AD = AE'],
        simAns: 0,
        simExp: 'ΔADE ∽ ΔABC theo định lí cơ bản.'
      },
      {
        q: 'Cho ΔABC ∽ ΔA\'B\'C\' theo tỉ số k1 và ΔA\'B\'C\' ∽ ΔA"B"C" theo tỉ số k2. Thì ΔABC ∽ ΔA"B"C" theo tỉ số:',
        opts: ['k1 · k2', 'k1 + k2', 'k1 / k2', 'k1 - k2'],
        ans: 0,
        exp: 'Tính chất bắc cầu: tỉ số đồng dạng là k1 · k2.',
        simQ: 'Nếu k1 = 2 và k2 = 3 thì tỉ số giữa ΔABC và ΔA"B"C" là:',
        simOpts: ['6', '5', '2/3', '1'],
        simAns: 0,
        simExp: '2 · 3 = 6.'
      },
      {
        q: 'Hai tam giác đều bất kì luôn:',
        opts: ['Đồng dạng với nhau', 'Bằng nhau', 'Có diện tích bằng nhau', 'Không đồng dạng'],
        ans: 0,
        exp: 'Mọi tam giác đều đều có 3 góc bằng 60° và các cạnh tỉ lệ với nhau, nên luôn đồng dạng.',
        simQ: 'Hai tam giác vuông cân bất kì luôn:',
        simOpts: ['Đồng dạng với nhau', 'Bằng nhau', 'Có chu vi bằng nhau', 'Không liên quan'],
        simAns: 0,
        simExp: 'Đều có các góc 45°, 45°, 90° nên luôn đồng dạng.'
      },
      {
        q: 'Cho ΔABC có AB = 4 cm, BC = 6 cm, AC = 8 cm. Biết ΔDEF ∽ ΔABC và DE = 2 cm (DE tương ứng với AB). Độ dài cạnh DF là:',
        opts: ['4 cm', '3 cm', '6 cm', '8 cm'],
        ans: 0,
        exp: 'Tỉ số đồng dạng k = DE/AB = 2/4 = 1/2. Cạnh DF = (1/2) · AC = (1/2) · 8 = 4 cm.',
        simQ: 'Độ dài cạnh EF là:',
        simOpts: ['3 cm', '4 cm', '2 cm', '5 cm'],
        simAns: 0,
        simExp: 'EF = (1/2) · BC = (1/2) · 6 = 3 cm.'
      },
      {
        q: 'Kí hiệu đồng dạng "∽" thể hiện mối quan hệ giữa:',
        opts: ['Hình dạng tương đồng (cùng hình dạng, khác kích thước)', 'Kích thước bằng nhau', 'Khối lượng bằng nhau', 'Gốc toạ độ'],
        ans: 0,
        exp: 'Đồng dạng nghĩa là cùng dạng (hình dáng giống hệt nhau, chỉ khác tỉ lệ phóng to hay thu nhỏ).',
        simQ: 'Khi viết kí hiệu đồng dạng ΔABC ∽ ΔMNP, thứ tự các đỉnh:',
        simOpts: ['Phải tương ứng giữa các góc bằng nhau', 'Viết tùy ý đỉnh nào trước cũng được', 'Theo thứ tự bảng chữ cái', 'Không quan trọng'],
        simAns: 0,
        simExp: 'Bắt buộc phải viết theo đúng thứ tự các cặp đỉnh tương ứng.'
      }
    ]
  },

  // Bài 34
  {
    id: 'k2-b34',
    grade: '8',
    semester: 2,
    chapterNumber: 9,
    chapterTitle: 'Chương IX: Tam giác đồng dạng',
    lessonNumber: 34,
    title: 'Bài 34. Ba trường hợp đồng dạng của hai tam giác',
    textbookRef: 'Toán 8 KNTT - Bài 34',
    summary: '• Trường hợp 1 (c.c.c): Nếu ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia thì hai tam giác đó đồng dạng.\\n• Trường hợp 2 (c.g.c): Nếu hai cạnh của tam giác này tỉ lệ với hai cạnh của tam giác kia và hai góc tạo bởi các cặp cạnh đó bằng nhau thì hai tam giác đó đồng dạng.\\n• Trường hợp 3 (g.g): Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đó đồng dạng.',
    keyFormulas: [
      'c.c.c: A\'B\'/AB = B\'C\'/BC = C\'A\'/CA => ΔA\'B\'C\' ∽ ΔABC',
      'c.g.c: A\'B\'/AB = A\'C\'/AC và Â\' = Â => ΔA\'B\'C\' ∽ ΔABC',
      'g.g: Â\' = Â và B̂\' = B̂ => ΔA\'B\'C\' ∽ ΔABC'
    ],
    questions: [
      {
        q: 'Hai tam giác có các cạnh lần lượt là (3; 4; 5) và (6; 8; 10) đồng dạng với nhau theo trường hợp nào?',
        opts: ['Cạnh - cạnh - cạnh (c.c.c)', 'Cạnh - góc - cạnh (c.g.c)', 'Góc - góc (g.g)', 'Góc - cạnh - góc'],
        ans: 0,
        exp: '6/3 = 8/4 = 10/5 = 2. Ba cạnh tương ứng tỉ lệ => đồng dạng theo trường hợp c.c.c.',
        simQ: 'Bộ ba cạnh (2; 3; 4) và (4; 6; 8) đồng dạng theo trường hợp:',
        simOpts: ['c.c.c', 'c.g.c', 'g.g', 'Không đồng dạng'],
        simAns: 0,
        simExp: '4/2 = 6/3 = 8/4 = 2 (c.c.c).'
      },
      {
        q: 'Cho ΔABC và ΔA\'B\'C\' có Â = Â\' = 60° và AB/A\'B\' = AC/A\'C\'. Hai tam giác đồng dạng theo trường hợp:',
        opts: ['Cạnh - góc - cạnh (c.g.c)', 'Cạnh - cạnh - cạnh (c.c.c)', 'Góc - góc (g.g)', 'Huyền - góc nhọn'],
        ans: 0,
        exp: 'Hai cạnh kề tỉ lệ và góc xen giữa bằng nhau => đồng dạng theo c.g.c.',
        simQ: 'Trong trường hợp c.g.c, góc bằng nhau phải là:',
        simOpts: ['Góc xen giữa hai cạnh tỉ lệ', 'Góc bất kì', 'Góc lớn nhất', 'Góc nhọn'],
        simAns: 0,
        simExp: 'Bắt buộc phải là góc xen giữa hai cặp cạnh tỉ lệ.'
      },
      {
        q: 'Cho ΔABC và ΔDEF có Â = D̂ = 50° và B̂ = Ê = 70°. Hai tam giác đồng dạng theo trường hợp nào?',
        opts: ['Góc - góc (g.g)', 'Cạnh - cạnh - cạnh (c.c.c)', 'Cạnh - góc - cạnh (c.g.c)', 'Bằng nhau'],
        ans: 0,
        exp: 'Hai góc tương ứng bằng nhau nên đồng dạng theo trường hợp g.g.',
        simQ: 'Chỉ cần hai tam giác có mấy cặp góc tương ứng bằng nhau là đủ kết luận đồng dạng?',
        simOpts: ['2 cặp góc', '3 cặp góc', '1 cặp góc', '4 cặp góc'],
        simAns: 0,
        simExp: 'Vì tổng 3 góc bằng 180° nên 2 cặp góc bằng nhau suy ra cặp thứ 3 cũng bằng nhau (g.g).'
      },
      {
        q: 'Tam giác ABC cân tại A có Â = 40°. Tam giác MNP cân tại M có M̂ = 40°. Hai tam giác này:',
        opts: ['Đồng dạng với nhau (g.g)', 'Bằng nhau', 'Không đồng dạng', 'Chưa đủ dữ kiện'],
        ans: 0,
        exp: 'Cùng là tam giác cân có góc ở đỉnh 40° => các góc ở đáy đều bằng (180° - 40°)/2 = 70° => đồng dạng theo g.g.',
        simQ: 'Hai tam giác cân có góc ở đáy bằng nhau thì:',
        simOpts: ['Đồng dạng với nhau', 'Bằng nhau', 'Không đồng dạng', 'Có cạnh đáy bằng nhau'],
        simAns: 0,
        simExp: 'Góc ở đáy bằng nhau thì góc ở đỉnh cũng bằng nhau => đồng dạng (g.g).'
      },
      {
        q: 'Cho ΔABC có AB = 6, AC = 9. Trên AB lấy M sao cho AM = 3, trên AC lấy N sao cho AN = 4.5. Khi đó ΔAMN và ΔABC:',
        opts: ['Đồng dạng với nhau theo trường hợp c.g.c', 'Không đồng dạng', 'Đồng dạng theo c.c.c', 'Bằng nhau'],
        ans: 0,
        exp: 'AM/AB = 3/6 = 1/2; AN/AC = 4.5/9 = 1/2. Góc Â chung => ΔAMN ∽ ΔABC (c.g.c).',
        simQ: 'Tỉ số đồng dạng k của ΔAMN và ΔABC trong bài trên là:',
        simOpts: ['1/2', '2', '1/3', '2/3'],
        simAns: 0,
        simExp: 'k = AM / AB = 1/2.'
      },
      {
        q: 'Hình thang ABCD (AB // CD) có hai đường chéo AC và BD cắt nhau tại O. Cặp tam giác nào sau đây đồng dạng?',
        opts: ['ΔOAB ∽ ΔOCD (g.g)', 'ΔOAB ∽ ΔOAD', 'ΔOAD ∽ ΔOBC', 'ΔABC ∽ ΔADC'],
        ans: 0,
        exp: 'AB // CD => Các cặp góc so le trong bằng nhau: ÔAB = ÔCD, ÔBA = ÔDC => ΔOAB ∽ ΔOCD (g.g).',
        simQ: 'Trong hình thang trên, OA/OC bằng tỉ số nào?',
        simOpts: ['OB/OD và AB/CD', 'OA/OB', 'AD/BC', 'AC/BD'],
        simAns: 0,
        simExp: 'OA/OC = OB/OD = AB/CD từ tam giác đồng dạng.'
      },
      {
        q: 'Một tam giác có độ dài các cạnh là 4 cm, 5 cm, 6 cm. Tam giác đồng dạng với nó có cạnh nhỏ nhất là 8 cm thì cạnh lớn nhất là:',
        opts: ['12 cm', '10 cm', '16 cm', '14 cm'],
        ans: 0,
        exp: 'Cạnh nhỏ nhất tăng từ 4 lên 8 (gấp 2 lần). Cạnh lớn nhất: 6 × 2 = 12 cm.',
        simQ: 'Cạnh còn lại của tam giác đó dài:',
        simOpts: ['10 cm', '9 cm', '8 cm', '11 cm'],
        simAns: 0,
        simExp: '5 × 2 = 10 cm.'
      },
      {
        q: 'Cho ΔABC có đường cao AH. Khi đó cặp tam giác vuông nào sau đây đồng dạng với ΔABC?',
        opts: ['ΔHBA và ΔHAC', 'Chỉ có ΔHBA', 'Chỉ có ΔHAC', 'Không có tam giác nào'],
        ans: 0,
        exp: 'ΔHBA và ΔABC có góc B̂ chung, góc vuông; ΔHAC và ΔABC có góc Ĉ chung, góc vuông.',
        simQ: 'Từ ΔHBA ∽ ΔHAC suy ra hệ thức đường cao:',
        simOpts: ['AH² = HB · HC', 'AH = HB + HC', 'AH² = AB · AC', 'AH = BC / 2'],
        simAns: 0,
        simExp: 'AH/HC = HB/AH => AH² = HB · HC.'
      },
      {
        q: 'Trường hợp đồng dạng nào của hai tam giác đòi hỏi ÍT thông tin về độ dài cạnh nhất?',
        opts: ['Trường hợp góc - góc (g.g) (không cần biết cạnh nào)', 'Trường hợp cạnh - cạnh - cạnh', 'Trường hợp cạnh - góc - cạnh', 'Cả ba như nhau'],
        ans: 0,
        exp: 'Trường hợp g.g chỉ cần biết số đo của 2 góc, hoàn toàn không cần biết độ dài cạnh.',
        simQ: 'Muốn đo chiều cao của một cột cờ bằng bóng nắng mặt trời, ta dùng trường hợp đồng dạng nào?',
        simOpts: ['Góc - góc (g.g) nhờ cùng góc nghiêng tia nắng và góc vuông', 'c.c.c', 'c.g.c', 'Không dùng đồng dạng'],
        simAns: 0,
        simExp: 'Tia sáng mặt trời tạo với mặt đất cùng góc nhọn, cột cờ và cọc tiêu cùng vuông góc với mặt đất (g.g).'
      },
      {
        q: 'Một cọc tiêu cao 2 m có bóng dài 3 m. Cùng lúc đó, bóng của cột cờ dài 15 m. Chiều cao của cột cờ là:',
        opts: ['10 m', '12 m', '8 m', '15 m'],
        ans: 0,
        exp: 'h / 2 = 15 / 3 = 5 => h = 2 × 5 = 10 m.',
        simQ: 'Nếu bóng cột cờ dài 9 m thì chiều cao cột cờ là:',
        simOpts: ['6 m', '5 m', '8 m', '4.5 m'],
        simAns: 0,
        simExp: 'h = 2 × (9 / 3) = 6 m.'
      }
    ]
  },

  // Bài 35
  {
    id: 'k2-b35',
    grade: '8',
    semester: 2,
    chapterNumber: 9,
    chapterTitle: 'Chương IX: Tam giác đồng dạng',
    lessonNumber: 35,
    title: 'Bài 35. Định lí Pythagore và ứng dụng',
    textbookRef: 'Toán 8 KNTT - Bài 35',
    summary: '• Định lí Pythagore thuận: Trong một tam giác vuông, bình phương của cạnh huyền bằng tổng các bình phương của hai cạnh góc vuông: a² = b² + c².\\n• Định lí Pythagore đảo: Nếu một tam giác có bình phương của một cạnh bằng tổng các bình phương của hai cạnh kia thì tam giác đó là tam giác vuông.\\n• Tam giác có độ dài ba cạnh (3; 4; 5), (5; 12; 13), (6; 8; 10), (8; 15; 17),... gọi là các bộ ba số Pythagore.',
    keyFormulas: [
      'ΔABC vuông tại A <=> BC² = AB² + AC²',
      'BC = √(AB² + AC²)',
      'Bộ ba Pythagore: (3, 4, 5), (5, 12, 13), (7, 24, 25)'
    ],
    questions: [
      {
        q: 'Cho tam giác vuông có hai cạnh góc vuông là 3 cm và 4 cm. Độ dài cạnh huyền là:',
        opts: ['5 cm', '7 cm', '6 cm', '25 cm'],
        ans: 0,
        exp: 'c² = 3² + 4² = 9 + 16 = 25 => c = √25 = 5 cm.',
        simQ: 'Cạnh góc vuông là 6 cm và 8 cm. Độ dài cạnh huyền là:',
        simOpts: ['10 cm', '14 cm', '12 cm', '100 cm'],
        simAns: 0,
        simExp: '√(6² + 8²) = √(36 + 64) = √100 = 10 cm.'
      },
      {
        q: 'Cho tam giác vuông có cạnh huyền bằng 13 cm và một cạnh góc vuông bằng 5 cm. Cạnh góc vuông còn lại là:',
        opts: ['12 cm', '8 cm', '10 cm', '√194 cm'],
        ans: 0,
        exp: 'b² = 13² - 5² = 169 - 25 = 144 => b = √144 = 12 cm.',
        simQ: 'Cạnh huyền 10 cm, một cạnh góc vuông 6 cm. Cạnh kia là:',
        simOpts: ['8 cm', '4 cm', '7 cm', '16 cm'],
        simAns: 0,
        simExp: '√(10² - 6²) = √(100 - 36) = √64 = 8 cm.'
      },
      {
        q: 'Bộ ba số nào sau đây là độ dài ba cạnh của một tam giác vuông?',
        opts: ['6 cm; 8 cm; 10 cm', '3 cm; 4 cm; 6 cm', '5 cm; 7 cm; 9 cm', '2 cm; 3 cm; 4 cm'],
        ans: 0,
        exp: '6² + 8² = 36 + 64 = 100 = 10² => Theo định lí Pythagore đảo, đây là tam giác vuông.',
        simQ: 'Bộ ba nào là ba cạnh tam giác vuông?',
        simOpts: ['5, 12, 13', '4, 5, 6', '6, 7, 8', '1, 2, 3'],
        simAns: 0,
        simExp: '5² + 12² = 25 + 144 = 169 = 13².'
      },
      {
        q: 'Cho tam giác vuông cân có cạnh góc vuông bằng a. Độ dài cạnh huyền là:',
        opts: ['a√2', '2a', 'a√3', 'a²'],
        ans: 0,
        exp: 'c² = a² + a² = 2a² => c = a√2.',
        simQ: 'Một hình vuông có cạnh bằng 5 cm thì đường chéo dài:',
        simOpts: ['5√2 cm', '10 cm', '25 cm', '5√3 cm'],
        simAns: 0,
        simExp: 'Đường chéo hình vuông = a√2 = 5√2 cm.'
      },
      {
        q: 'Một tam giác đều cạnh a có đường cao h bằng:',
        opts: ['(a√3) / 2', 'a√3', 'a / 2', '(a√2) / 2'],
        ans: 0,
        exp: 'Đường cao chia đáy làm đôi: h² = a² - (a/2)² = a² - a²/4 = 3a²/4 => h = (a√3)/2.',
        simQ: 'Tam giác đều cạnh 6 cm có đường cao bằng:',
        simOpts: ['3√3 cm', '6√3 cm', '3 cm', '4 cm'],
        simAns: 0,
        simExp: '(6√3) / 2 = 3√3 cm.'
      },
      {
        q: 'Một chiếc thang dài 5 m đặt dựa vào tường, chân thang cách tường 3 m. Chiều cao đỉnh thang chạm tường là:',
        opts: ['4 m', '3 m', '2 m', '√34 m'],
        ans: 0,
        exp: 'h = √(5² - 3²) = √(25 - 9) = √16 = 4 m.',
        simQ: 'Thang dài 10 m, chân thang cách tường 6 m. Đỉnh thang cao:',
        simOpts: ['8 m', '4 m', '6 m', '9 m'],
        simAns: 0,
        simExp: '√(10² - 6²) = 8 m.'
      },
      {
        q: 'Hình chữ nhật có chiều dài 8 cm, chiều rộng 6 cm. Độ dài đường chéo là:',
        opts: ['10 cm', '14 cm', '48 cm', '7 cm'],
        ans: 0,
        exp: 'd = √(8² + 6²) = 10 cm.',
        simQ: 'Hình chữ nhật kích thước 12 cm × 5 cm có đường chéo là:',
        simOpts: ['13 cm', '17 cm', '15 cm', '10 cm'],
        simAns: 0,
        simExp: '√(12² + 5²) = 13 cm.'
      },
      {
        q: 'Cho ΔABC có AB = 9 cm, AC = 12 cm, BC = 15 cm. Tam giác ABC là tam giác:',
        opts: ['Vuông tại A', 'Vuông tại B', 'Vuông tại C', 'Tam giác nhọn'],
        ans: 0,
        exp: '9² + 12² = 81 + 144 = 225 = 15² => Vuông tại A (đối diện với cạnh huyền BC).',
        simQ: 'Tam giác có ba cạnh 7, 24, 25 là tam giác vuông đối diện với cạnh dài:',
        simOpts: ['25', '24', '7', 'Không phải tam giác vuông'],
        simAns: 0,
        simExp: 'Cạnh huyền là cạnh lớn nhất 25 (7² + 24² = 625 = 25²).'
      },
      {
        q: 'Diện tích hình vuông dựng trên cạnh huyền của tam giác vuông có hai cạnh góc vuông 5 cm và 7 cm là:',
        opts: ['74 cm²', '144 cm²', '24 cm²', '12 cm²'],
        ans: 0,
        exp: 'Diện tích = c² = a² + b² = 5² + 7² = 25 + 49 = 74 cm².',
        simQ: 'Hai cạnh góc vuông là 3 và 4. Diện tích hình vuông trên cạnh huyền là:',
        simOpts: ['25', '7', '12', '50'],
        simAns: 0,
        simExp: '3² + 4² = 25.'
      },
      {
        q: 'Định lí Pythagore mang tên nhà toán học cổ đại Pythagore người nước nào?',
        opts: ['Hy Lạp', 'Ai Cập', 'La Mã', 'Ấn Độ'],
        ans: 0,
        exp: 'Pythagore (Pythagoras) là nhà toán học và triết học nổi tiếng của Hy Lạp cổ đại.',
        simQ: 'Định lí Pythagore chỉ áp dụng được trực tiếp cho loại tam giác nào?',
        simOpts: ['Tam giác vuông', 'Tam giác nhọn', 'Tam giác tù', 'Mọi loại tam giác'],
        simAns: 0,
        simExp: 'Chỉ áp dụng trực tiếp cho tam giác vuông.'
      }
    ]
  },

  // Bài 36
  {
    id: 'k2-b36',
    grade: '8',
    semester: 2,
    chapterNumber: 9,
    chapterTitle: 'Chương IX: Tam giác đồng dạng',
    lessonNumber: 36,
    title: 'Bài 36. Các trường hợp đồng dạng của hai tam giác vuông',
    textbookRef: 'Toán 8 KNTT - Bài 36',
    summary: '• Tam giác vuông đã có sẵn một góc vuông (90°).\\n• Hai tam giác vuông đồng dạng khi:\\n  - Trường hợp 1: Có một cặp góc nhọn bằng nhau.\\n  - Trường hợp 2: Hai cạnh góc vuông của tam giác này tỉ lệ với hai cạnh góc vuông của tam giác kia.\\n  - Trường hợp 3 (Cạnh huyền - cạnh góc vuông): Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác vuông kia.',
    keyFormulas: [
      'Góc nhọn: B̂ = B̂\' => ΔABC ∽ ΔA\'B\'C\'',
      'Hai cạnh góc vuông: A\'B\'/AB = A\'C\'/AC => ΔA\'B\'C\' ∽ ΔABC',
      'Huyền - góc vuông: B\'C\'/BC = A\'B\'/AB => ΔA\'B\'C\' ∽ ΔABC'
    ],
    questions: [
      {
        q: 'Hai tam giác vuông đồng dạng khi chỉ cần điều kiện nào sau đây về góc?',
        opts: ['Một cặp góc nhọn tương ứng bằng nhau', 'Hai góc tù bằng nhau', 'Cả ba góc đều bằng 90°', 'Không cần góc nào'],
        ans: 0,
        exp: 'Vì mỗi tam giác vuông đã có sẵn 1 góc 90°, nên có thêm 1 góc nhọn bằng nhau thì đồng dạng theo g.g.',
        simQ: 'ΔABC vuông tại A có B̂ = 30°. ΔMNP vuông tại M có N̂ = 30°. Hai tam giác này:',
        simOpts: ['Đồng dạng với nhau', 'Bằng nhau', 'Không đồng dạng', 'Chưa xác định'],
        simAns: 0,
        simExp: 'Đồng dạng vì cùng có góc 90° và góc 30°.'
      },
      {
        q: 'Trường hợp đồng dạng "cạnh huyền - cạnh góc vuông" của hai tam giác vuông phát biểu là:',
        opts: ['Nếu cạnh huyền và một cạnh góc vuông của tam giác này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác kia thì hai tam giác vuông đó đồng dạng', 'Cạnh huyền bằng nhau', 'Hai cạnh góc vuông bằng nhau', 'Tích hai cạnh góc vuông bằng nhau'],
        ans: 0,
        exp: 'Đây là trường hợp đồng dạng đặc biệt áp dụng định lí Pythagore để suy ra cạnh thứ ba cũng tỉ lệ.',
        simQ: 'ΔABC (Â = 90°) và ΔA\'B\'C\' (Â\' = 90°) có BC/B\'C\' = AB/A\'B\'. Khi đó:',
        simOpts: ['ΔABC ∽ ΔA\'B\'C\' (cạnh huyền - cạnh góc vuông)', 'ΔABC = ΔA\'B\'C\'', 'AC = A\'C\'', 'Không đồng dạng'],
        simAns: 0,
        simExp: 'Đồng dạng theo trường hợp cạnh huyền - cạnh góc vuông.'
      },
      {
        q: 'Cho ΔABC vuông tại A có AB = 3, AC = 4. ΔDEF vuông tại D có DE = 6, DF = 8. Hai tam giác này đồng dạng theo trường hợp:',
        opts: ['Hai cạnh góc vuông tỉ lệ', 'Cạnh huyền - cạnh góc vuông', 'Góc nhọn', 'Bằng nhau'],
        ans: 0,
        exp: 'DE/AB = 6/3 = 2; DF/AC = 8/4 = 2. Hai cạnh góc vuông tỉ lệ.',
        simQ: 'Tỉ số đồng dạng k của ΔDEF đối với ΔABC là:',
        simOpts: ['2', '1/2', '4', '1/4'],
        simAns: 0,
        simExp: '6/3 = 2.'
      },
      {
        q: 'Tỉ số hai đường cao tương ứng của hai tam giác đồng dạng bằng:',
        opts: ['Tỉ số đồng dạng k', 'Bình phương k²', 'Căn bậc hai √k', '1'],
        ans: 0,
        exp: 'Các đoạn thẳng tương ứng (đường cao, trung tuyến, phân giác) đều có tỉ số bằng tỉ số đồng dạng k.',
        simQ: 'Tỉ số hai bán kính đường tròn nội tiếp của hai tam giác đồng dạng bằng:',
        simOpts: ['k', 'k²', '2k', '1/k'],
        simAns: 0,
        simExp: 'Bằng tỉ số đồng dạng k.'
      },
      {
        q: 'Cho tam giác ABC vuông tại A có đường cao AH. Khẳng định nào sau đây SAI?',
        opts: ['ΔABH ∽ ΔCAH là trường hợp c.c.c', 'ΔABH ∽ ΔCBA', 'ΔCAH ∽ ΔCBA', 'ΔABH ∽ ΔCAH'],
        ans: 0,
        exp: 'ΔABH ∽ ΔCAH theo trường hợp góc - góc (hoặc cạnh góc vuông tỉ lệ), khẳng định c.c.c là sai.',
        simQ: 'Hệ thức AB² = BH · BC được suy ra từ cặp tam giác đồng dạng nào?',
        simOpts: ['ΔHBA ∽ ΔABC', 'ΔHAC ∽ ΔABC', 'ΔHBA ∽ ΔHAC', 'ΔABC = ΔHBA'],
        simAns: 0,
        simExp: 'AB / BC = BH / AB => AB² = BH · BC.'
      },
      {
        q: 'Một tam giác vuông có cạnh huyền 15 cm và một cạnh góc vuông 9 cm. Một tam giác vuông khác có cạnh huyền 5 cm và cạnh góc vuông 3 cm. Tỉ số đồng dạng là:',
        opts: ['3', '1/3', '5', '9/5'],
        ans: 0,
        exp: '15/5 = 9/3 = 3.',
        simQ: 'Cạnh góc vuông còn lại của tam giác nhỏ là bao nhiêu cm?',
        simOpts: ['4 cm', '5 cm', '2 cm', '6 cm'],
        simAns: 0,
        simExp: '√(5² - 3²) = 4 cm.'
      },
      {
        q: 'Tam giác vuông cân có góc nhọn bằng:',
        opts: ['45°', '30°', '60°', '90°'],
        ans: 0,
        exp: '(180° - 90°) / 2 = 45°.',
        simQ: 'Mọi tam giác vuông cân đều đồng dạng với nhau vì:',
        simOpts: ['Đều có một góc vuông và hai góc nhọn bằng 45°', 'Cạnh huyền bằng nhau', 'Diện tích bằng nhau', 'Chu vi bằng nhau'],
        simAns: 0,
        simExp: 'Góc tương ứng bằng nhau (90°, 45°, 45°).'
      },
      {
        q: 'Hệ thức AC² = CH · BC trong tam giác vuông ABC (đường cao AH) suy ra từ:',
        opts: ['ΔHAC ∽ ΔABC', 'ΔHAB ∽ ΔABC', 'ΔHAB ∽ ΔHAC', 'Định lí Thalès'],
        ans: 0,
        exp: 'AC / BC = CH / AC => AC² = CH · BC.',
        simQ: 'Hệ thức AH · BC = AB · AC suy ra từ công thức:',
        simOpts: ['Diện tích tam giác S = 1/2 AH · BC = 1/2 AB · AC', 'Định lí Pythagore', 'Định lí Thalès', 'Chu vi'],
        simAns: 0,
        simExp: 'Cùng tính diện tích tam giác vuông ABC theo 2 cách.'
      },
      {
        q: 'Cho ΔABC vuông tại A có AB = 6 cm, AC = 8 cm. Đường cao AH có độ dài là:',
        opts: ['4.8 cm', '5 cm', '4 cm', '6 cm'],
        ans: 0,
        exp: 'BC = √(6² + 8²) = 10 cm. AH = (AB · AC) / BC = (6 · 8) / 10 = 4.8 cm.',
        simQ: 'Đoạn thẳng BH có độ dài là:',
        simOpts: ['3.6 cm', '6.4 cm', '4 cm', '5 cm'],
        simAns: 0,
        simExp: 'BH = AB² / BC = 36 / 10 = 3.6 cm.'
      },
      {
        q: 'Đoạn thẳng CH có độ dài là:',
        opts: ['6.4 cm', '3.6 cm', '5 cm', '7 cm'],
        ans: 0,
        exp: 'CH = BC - BH = 10 - 3.6 = 6.4 cm (hoặc 8² / 10 = 6.4 cm).',
        simQ: 'Tích BH · CH bằng:',
        simOpts: ['23.04 (bằng AH² = 4.8²)', '20', '25', '18'],
        simAns: 0,
        simExp: '3.6 × 6.4 = 23.04 = 4.8² = AH².'
      }
    ]
  },

  // Bài 37
  {
    id: 'k2-b37',
    grade: '8',
    semester: 2,
    chapterNumber: 9,
    chapterTitle: 'Chương IX: Tam giác đồng dạng',
    lessonNumber: 37,
    title: 'Bài 37. Hình đồng dạng',
    textbookRef: 'Toán 8 KNTT - Bài 37',
    summary: '• Hình đồng dạng: Hai hình gọi là đồng dạng nếu chúng có cùng hình dạng nhưng có thể khác nhau về kích thước.\\n• Hình đồng dạng phối cảnh (hình vị tự): Cho điểm O và số k > 0. Phép biến hình biến mỗi điểm M thành M\' sao cho OM\' = k · OM gọi là phép phối cảnh tâm O tỉ số k.\\n• Ứng dụng: Thu phóng hình ảnh trên máy tính, bản đồ địa lí, kiến trúc xây dựng, kính hiển vi và kính thiên văn.',
    keyFormulas: [
      'Phối cảnh tâm O tỉ số k: OM\' / OM = k',
      'Hai hình bằng nhau là trường hợp riêng của hai hình đồng dạng với k = 1'
    ],
    questions: [
      {
        q: 'Hai hình nào sau đây luôn luôn đồng dạng với nhau?',
        opts: ['Hai hình tròn bất kì', 'Hai hình chữ nhật bất kì', 'Hai hình thoi bất kì', 'Hai hình thang bất kì'],
        ans: 0,
        exp: 'Tất cả các hình tròn đều có cùng hình dạng, tỉ lệ bán kính quyết định kích thước.',
        simQ: 'Cặp hình nào sau đây luôn đồng dạng?',
        simOpts: ['Hai hình vuông bất kì', 'Hai hình bình hành', 'Hai tam giác cân', 'Hai hình thang cân'],
        simAns: 0,
        simExp: 'Mọi hình vuông đều có 4 góc vuông và 4 cạnh bằng nhau nên luôn đồng dạng.'
      },
      {
        q: 'Phép phối cảnh tâm O tỉ số k = 3 biến đoạn thẳng AB dài 5 cm thành đoạn thẳng A\'B\' có độ dài:',
        opts: ['15 cm', '5/3 cm', '8 cm', '2 cm'],
        ans: 0,
        exp: 'A\'B\' = k · AB = 3 × 5 = 15 cm.',
        simQ: 'Phép phối cảnh tỉ số k = 1/2 biến đoạn thẳng 10 cm thành đoạn thẳng dài:',
        simOpts: ['5 cm', '20 cm', '15 cm', '2 cm'],
        simAns: 0,
        simExp: '10 × (1/2) = 5 cm.'
      },
      {
        q: 'Bản đồ có tỉ lệ 1 : 1 000 000. Khoảng cách giữa hai thành phố trên bản đồ là 5 cm. Khoảng cách thực tế là:',
        opts: ['50 km', '5 km', '500 km', '5000 m'],
        ans: 0,
        exp: '5 cm × 1 000 000 = 5 000 000 cm = 50 000 m = 50 km.',
        simQ: 'Bản đồ tỉ lệ 1 : 50 000. Đoạn đường trên bản đồ dài 4 cm thì thực tế dài:',
        simOpts: ['2 km', '20 km', '200 m', '2000 km'],
        simAns: 0,
        simExp: '4 × 50000 = 200000 cm = 2 km.'
      },
      {
        q: 'Nếu một bức ảnh có kích thước 6 cm × 9 cm được phóng to với tỉ số k = 2 thì kích thước mới là:',
        opts: ['12 cm × 18 cm', '8 cm × 11 cm', '12 cm × 9 cm', '6 cm × 18 cm'],
        ans: 0,
        exp: 'Cả chiều dài và chiều rộng đều nhân với 2: 12 cm × 18 cm.',
        simQ: 'Diện tích của bức ảnh sau khi phóng to gấp mấy lần diện tích ban đầu?',
        simOpts: ['4 lần (k² = 2² = 4)', '2 lần', '8 lần', '6 lần'],
        simAns: 0,
        simExp: 'Tỉ số diện tích bằng k² = 2² = 4 lần.'
      },
      {
        q: 'Tâm phối cảnh O là điểm có tính chất:',
        opts: ['Các đường thẳng nối các cặp điểm tương ứng đều đồng quy tại O', 'Là trung điểm mọi đoạn thẳng', 'Là trọng tâm tam giác', 'Nằm ngoài mặt phẳng'],
        ans: 0,
        exp: 'Tất cả các tia xuất phát từ O đi qua điểm gốc và điểm ảnh tương ứng.',
        simQ: 'Khi chiếu phim từ máy chiếu lên màn hình, bóng của vật thể và vật thể đồng dạng theo tâm phối cảnh là:',
        simOpts: ['Ống kính máy chiếu', 'Màn hình', 'Bóng đèn trần', 'Khán giả'],
        simAns: 0,
        simExp: 'Tia sáng xuất phát từ bóng đèn qua thấu kính (tâm phối cảnh).'
      },
      {
        q: 'Đặc điểm chung quan trọng nhất của hai hình đồng dạng là:',
        opts: ['Các góc tương ứng bằng nhau và các kích thước tương ứng tỉ lệ', 'Diện tích bằng nhau', 'Chu vi bằng nhau', 'Trùng khít lên nhau'],
        ans: 0,
        exp: 'Hình dáng giữ nguyên (góc bảo toàn), kích thước tỉ lệ thuận theo hệ số k.',
        simQ: 'Hai hình bằng nhau là trường hợp đặc biệt của hai hình đồng dạng khi tỉ số k bằng:',
        simOpts: ['k = 1', 'k = 0', 'k = 2', 'k = -1'],
        simAns: 0,
        simExp: 'Khi k = 1 thì kích thước giữ nguyên, hai hình bằng nhau.'
      },
      {
        q: 'Trong tự nhiên, hiện tượng nào sau đây thể hiện cấu trúc đồng dạng (tự đồng dạng)?',
        opts: ['Cành cây súp lơ (Romanesco), lá dương xỉ, vỏ ốc anh vũ', 'Hòn đá cuội', 'Vũng nước mưa', 'Khúc gỗ mục'],
        ans: 0,
        exp: 'Súp lơ Romanesco và lá dương xỉ là những ví dụ điển hình về cấu trúc Fractal (hình học đồng dạng vô hạn).',
        simQ: 'Hình ảnh chú bé qua kính lúp trông to hơn là một ví dụ về:',
        simOpts: ['Hình đồng dạng phóng to', 'Hình biến dạng méo mó', 'Ảnh đối xứng', 'Ảo ảnh'],
        simAns: 0,
        simExp: 'Kính lúp phóng to hình ảnh đồng dạng với tỉ lệ k > 1.'
      },
      {
        q: 'Nếu một mô hình thu nhỏ của chiếc máy bay có tỉ lệ 1 : 100. Chiều dài cánh thật là 30 m thì chiều dài cánh trên mô hình là:',
        opts: ['30 cm (0.3 m)', '3 cm', '3 m', '300 cm'],
        ans: 0,
        exp: '30 m / 100 = 0.3 m = 30 cm.',
        simQ: 'Chiều dài máy bay thật 40 m thì mô hình dài:',
        simOpts: ['40 cm', '4 cm', '4 m', '400 cm'],
        simAns: 0,
        simExp: '40 / 100 = 0.4 m = 40 cm.'
      },
      {
        q: 'Khi thu nhỏ một hình với tỉ số k = 0.5, chu vi của hình mới sẽ:',
        opts: ['Bằng một nửa (50%) chu vi ban đầu', 'Bằng 1/4 chu vi ban đầu', 'Không thay đổi', 'Gấp đôi'],
        ans: 0,
        exp: 'Chu vi tỉ lệ thuận bậc nhất với kích thước: P\' = k · P = 0.5 · P.',
        simQ: 'Diện tích của hình mới sẽ:',
        simOpts: ['Bằng 1/4 (25%) diện tích ban đầu (0.5² = 0.25)', 'Bằng 1/2', 'Bằng 1/8', 'Không đổi'],
        simAns: 0,
        simExp: 'Diện tích tỉ lệ theo k² = 0.5² = 0.25.'
      },
      {
        q: 'Phép đồng dạng bảo toàn tính chất nào sau đây của hình học?',
        opts: ['Độ lớn của các góc và sự thẳng hàng của các điểm', 'Khoảng cách giữa hai điểm bất kì', 'Diện tích', 'Chu vi'],
        ans: 0,
        exp: 'Phép đồng dạng bảo toàn số đo các góc và thứ tự các điểm thẳng hàng.',
        simQ: 'Góc 60° qua phép đồng dạng tỉ số k = 3 trở thành góc có số đo là:',
        simOpts: ['60° (không đổi)', '180°', '20°', '120°'],
        simAns: 0,
        simExp: 'Số đo các góc luôn được bảo toàn nguyên vẹn.'
      }
    ]
  }
];

// ==========================================
// CHƯƠNG X: MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN
// ==========================================
const chapter10Lessons: LessonRaw[] = [
  // Bài 38
  {
    id: 'k2-b38',
    grade: '8',
    semester: 2,
    chapterNumber: 10,
    chapterTitle: 'Chương X: Một số hình khối trong thực tiễn',
    lessonNumber: 38,
    title: 'Bài 38. Hình chóp tam giác đều',
    textbookRef: 'Toán 8 KNTT - Bài 38',
    summary: '• Hình chóp tam giác đều có:\\n  - Mặt đáy là một tam giác đều.\\n  - Các mặt bên là các tam giác cân bằng nhau có chung đỉnh (gọi là đỉnh của hình chóp).\\n  - Các cạnh bên bằng nhau.\\n  - Chân đường cao kẻ từ đỉnh trùng với trọng tâm (tâm đường tròn ngoại tiếp) của tam giác đáy.\\n  - Trung đoạn là đường cao kẻ từ đỉnh của một mặt bên.\\n• Diện tích xung quanh: Sxq = (1/2) · C · d (C là chu vi đáy, d là trung đoạn).\\n• Thể tích: V = (1/3) · Sáy · h (h là chiều cao).',
    keyFormulas: [
      'Sxq = (1/2) · C · d (d là trung đoạn, C là chu vi đáy)',
      'Stp = Sxq + Sđáy',
      'V = (1/3) · Sđáy · h'
    ],
    questions: [
      {
        q: 'Mặt đáy của hình chóp tam giác đều là hình gì?',
        opts: ['Tam giác đều', 'Tam giác vuông', 'Tam giác cân', 'Tứ giác đều'],
        ans: 0,
        exp: 'Hình chóp tam giác đều có mặt đáy là tam giác đều.',
        diag: 'pyramid',
        diagData: { shape: 'pyramid3', base: 'triangle' },
        simQ: 'Các mặt bên của hình chóp tam giác đều là:',
        simOpts: ['Các tam giác cân bằng nhau', 'Các hình chữ nhật', 'Các tam giác đều', 'Các tam giác vuông cân'],
        simAns: 0,
        simExp: 'Các mặt bên là các tam giác cân bằng nhau có chung đỉnh.'
      },
      {
        q: 'Đoạn thẳng nối đỉnh của hình chóp tam giác đều với trung điểm một cạnh đáy của mặt bên được gọi là:',
        opts: ['Trung đoạn', 'Đường cao của hình chóp', 'Cạnh bên', 'Đường trung tuyến đáy'],
        ans: 0,
        exp: 'Đường cao kẻ từ đỉnh hạ xuống cạnh đáy của một mặt bên gọi là trung đoạn.',
        simQ: 'Đường cao của hình chóp là đoạn thẳng nối đỉnh với:',
        simOpts: ['Trọng tâm (tâm đường tròn ngoại tiếp) của đáy', 'Một đỉnh của đáy', 'Trung điểm một cạnh đáy', 'Tùy ý'],
        simAns: 0,
        simExp: 'Nối từ đỉnh vuông góc với mặt phẳng đáy tại tâm đáy.'
      },
      {
        q: 'Công thức tính diện tích xung quanh của hình chóp tam giác đều là:',
        opts: ['Sxq = (1/2) · C · d (C là chu vi đáy, d là trung đoạn)', 'Sxq = C · d', 'Sxq = (1/3) · C · d', 'Sxq = 2C · d'],
        ans: 0,
        exp: 'Sxq = p · d = (1/2) · C · d.',
        simQ: 'Công thức tính thể tích của hình chóp tam giác đều là:',
        simOpts: ['V = (1/3) · Sđáy · h', 'V = Sđáy · h', 'V = (1/2) · Sđáy · h', 'V = 3 · Sđáy · h'],
        simAns: 0,
        simExp: 'V = (1/3) · S · h.'
      },
      {
        q: 'Tính diện tích xung quanh của hình chóp tam giác đều có chu vi đáy là 24 cm và trung đoạn là 10 cm:',
        opts: ['120 cm²', '240 cm²', '80 cm²', '60 cm²'],
        ans: 0,
        exp: 'Sxq = (1/2) · C · d = (1/2) · 24 · 10 = 120 cm².',
        simQ: 'Chu vi đáy 30 cm, trung đoạn 8 cm. Diện tích xung quanh là:',
        simOpts: ['120 cm²', '240 cm²', '60 cm²', '80 cm²'],
        simAns: 0,
        simExp: '(1/2) · 30 · 8 = 120 cm².'
      },
      {
        q: 'Một hình chóp tam giác đều có diện tích đáy là 30 cm² và chiều cao là 9 cm. Thể tích của hình chóp là:',
        opts: ['90 cm³', '270 cm³', '135 cm³', '45 cm³'],
        ans: 0,
        exp: 'V = (1/3) · Sđáy · h = (1/3) · 30 · 9 = 90 cm³.',
        simQ: 'Diện tích đáy 20 cm², chiều cao 6 cm. Thể tích là:',
        simOpts: ['40 cm³', '120 cm³', '60 cm³', '80 cm³'],
        simAns: 0,
        simExp: '(1/3) · 20 · 6 = 40 cm³.'
      },
      {
        q: 'Hình chóp tam giác đều có bao nhiêu mặt, bao nhiêu cạnh?',
        opts: ['4 mặt (1 đáy + 3 mặt bên) và 6 cạnh (3 cạnh đáy + 3 cạnh bên)', '3 mặt và 4 cạnh', '5 mặt và 8 cạnh', '4 mặt và 4 cạnh'],
        ans: 0,
        exp: 'Có 1 mặt đáy + 3 mặt bên = 4 mặt; 3 cạnh đáy + 3 cạnh bên = 6 cạnh.',
        simQ: 'Hình chóp tam giác đều có bao nhiêu đỉnh?',
        simOpts: ['4 đỉnh (1 đỉnh chóp + 3 đỉnh đáy)', '3 đỉnh', '5 đỉnh', '6 đỉnh'],
        simAns: 0,
        simExp: 'Có 4 đỉnh.'
      },
      {
        q: 'Nếu gấp miếng bìa gồm 4 tam giác đều bằng nhau, ta thu được hình chóp tam giác đều đặc biệt gọi là:',
        opts: ['Hình tứ diện đều', 'Hình lập phương', 'Hình hộp chữ nhật', 'Hình lăng trụ'],
        ans: 0,
        exp: 'Khối có 4 mặt đều là tam giác đều bằng nhau gọi là tứ diện đều.',
        simQ: 'Tất cả các cạnh của hình tứ diện đều:',
        simOpts: ['Bằng nhau', 'Khác nhau', 'Cạnh bên gấp đôi cạnh đáy', 'Chỉ cạnh đáy bằng nhau'],
        simAns: 0,
        simExp: 'Cả 6 cạnh đều bằng nhau.'
      },
      {
        q: 'Cho hình chóp tam giác đều có cạnh đáy bằng 6 cm, trung đoạn bằng 5 cm. Diện tích của MỘT mặt bên là:',
        opts: ['15 cm²', '30 cm²', '7.5 cm²', '18 cm²'],
        ans: 0,
        exp: 'Mặt bên là tam giác cân có đáy 6 cm và đường cao (trung đoạn) 5 cm => S = (1/2) · 6 · 5 = 15 cm².',
        simQ: 'Diện tích xung quanh của hình chóp đó (gồm 3 mặt bên) là:',
        simOpts: ['45 cm²', '15 cm²', '30 cm²', '90 cm²'],
        simAns: 0,
        simExp: '3 × 15 = 45 cm².'
      },
      {
        q: 'Khối rubik tam giác (Pyraminx) là vật thể thực tế có dạng:',
        opts: ['Hình tứ diện đều (hình chóp tam giác đều)', 'Hình chóp tứ giác đều', 'Hình lập phương', 'Hình trụ'],
        ans: 0,
        exp: 'Pyraminx có dạng khối tứ diện đều 4 mặt tam giác đều.',
        simQ: 'Đèn kéo quân hình chóp tam giác đều có 3 mặt kính bên, mỗi mặt cần trang trí hoa văn. Số mặt kính cần trang trí là:',
        simOpts: ['3 mặt bên', '4 mặt', '1 mặt', '6 mặt'],
        simAns: 0,
        simExp: 'Có 3 mặt bên xung quanh.'
      },
      {
        q: 'Một hộp quà hình chóp tam giác đều có thể tích 100 cm³, chiều cao 10 cm. Diện tích đáy hộp là:',
        opts: ['30 cm²', '10 cm²', '15 cm²', '20 cm²'],
        ans: 0,
        exp: 'V = (1/3) · S · h => S = 3V / h = 3 · 100 / 10 = 30 cm².',
        simQ: 'Nếu V = 60 cm³, h = 6 cm thì Sđáy bằng:',
        simOpts: ['30 cm²', '10 cm²', '20 cm²', '15 cm²'],
        simAns: 0,
        simExp: '3 × 60 / 6 = 30 cm².'
      }
    ]
  },

  // Bài 39
  {
    id: 'k2-b39',
    grade: '8',
    semester: 2,
    chapterNumber: 10,
    chapterTitle: 'Chương X: Một số hình khối trong thực tiễn',
    lessonNumber: 39,
    title: 'Bài 39. Hình chóp tứ giác đều',
    textbookRef: 'Toán 8 KNTT - Bài 39',
    summary: '• Hình chóp tứ giác đều có:\\n  - Mặt đáy là một hình vuông.\\n  - 4 mặt bên là các tam giác cân bằng nhau có chung đỉnh.\\n  - 4 cạnh bên bằng nhau.\\n  - Chân đường cao kẻ từ đỉnh trùng với tâm của đáy (giao điểm của hai đường chéo hình vuông đáy).\\n  - Trung đoạn là đường cao của một mặt bên kẻ từ đỉnh.\\n• Diện tích xung quanh: Sxq = (1/2) · C · d = 2 · a · d (với a là cạnh đáy, d là trung đoạn).\\n• Diện tích toàn phần: Stp = Sxq + Sđáy = Sxq + a².\\n• Thể tích: V = (1/3) · Sđáy · h = (1/3) · a² · h.',
    keyFormulas: [
      'Sxq = (1/2) · C · d = 2 · a · d',
      'Stp = Sxq + a²',
      'V = (1/3) · a² · h'
    ],
    questions: [
      {
        q: 'Mặt đáy của hình chóp tứ giác đều là hình gì?',
        opts: ['Hình vuông', 'Hình chữ nhật', 'Hình thoi', 'Hình bình hành'],
        ans: 0,
        exp: 'Hình chóp tứ giác đều có đáy là hình vuông.',
        diag: 'pyramid',
        diagData: { shape: 'pyramid4', base: 'square' },
        simQ: 'Bốn mặt bên của hình chóp tứ giác đều là:',
        simOpts: ['Bốn tam giác cân bằng nhau', 'Bốn hình vuông', 'Bốn tam giác đều', 'Bốn hình chữ nhật'],
        simAns: 0,
        simExp: 'Các mặt bên là các tam giác cân bằng nhau.'
      },
      {
        q: 'Kim tự tháp Kê-ốp (Ai Cập) là công trình kiến trúc nổi tiếng có dạng:',
        opts: ['Hình chóp tứ giác đều', 'Hình chóp tam giác đều', 'Hình lăng trụ tứ giác', 'Hình nón'],
        ans: 0,
        exp: 'Kim tự tháp Ai Cập có đáy hình vuông và 4 mặt bên tam giác cân dốc lên đỉnh.',
        simQ: 'Bảo tàng Louvre (Paris) có kim tự tháp kính là hình:',
        simOpts: ['Hình chóp tứ giác đều', 'Hình lập phương', 'Hình cầu', 'Hình trụ'],
        simAns: 0,
        simExp: 'Kim tự tháp kính Louvre có dạng hình chóp tứ giác đều.'
      },
      {
        q: 'Hình chóp tứ giác đều có bao nhiêu mặt, bao nhiêu cạnh?',
        opts: ['5 mặt (1 đáy + 4 mặt bên) và 8 cạnh (4 cạnh đáy + 4 cạnh bên)', '4 mặt và 6 cạnh', '6 mặt và 10 cạnh', '5 mặt và 5 cạnh'],
        ans: 0,
        exp: 'Có 1 mặt đáy hình vuông + 4 mặt bên tam giác cân = 5 mặt; 4 cạnh đáy + 4 cạnh bên = 8 cạnh.',
        simQ: 'Số đỉnh của hình chóp tứ giác đều là:',
        simOpts: ['5 đỉnh (1 đỉnh chóp + 4 đỉnh đáy)', '4 đỉnh', '6 đỉnh', '8 đỉnh'],
        simAns: 0,
        simExp: 'Có 5 đỉnh.'
      },
      {
        q: 'Tính diện tích xung quanh của hình chóp tứ giác đều có cạnh đáy a = 10 cm và trung đoạn d = 12 cm:',
        opts: ['240 cm²', '480 cm²', '120 cm²', '340 cm²'],
        ans: 0,
        exp: 'Chu vi đáy C = 4 × 10 = 40 cm. Sxq = (1/2) · C · d = (1/2) · 40 · 12 = 240 cm².',
        simQ: 'Cạnh đáy a = 6 cm, trung đoạn d = 8 cm. Sxq là:',
        simOpts: ['96 cm²', '192 cm²', '48 cm²', '132 cm²'],
        simAns: 0,
        simExp: 'C = 24 cm => Sxq = (1/2) · 24 · 8 = 96 cm².'
      },
      {
        q: 'Diện tích toàn phần của hình chóp tứ giác đều trong câu trên (a = 10 cm, d = 12 cm) là:',
        opts: ['340 cm²', '240 cm²', '100 cm²', '480 cm²'],
        ans: 0,
        exp: 'Sđáy = a² = 10² = 100 cm². Stp = Sxq + Sđáy = 240 + 100 = 340 cm².',
        simQ: 'Nếu a = 6 cm, Sxq = 96 cm² thì Stp là:',
        simOpts: ['132 cm²', '102 cm²', '96 cm²', '168 cm²'],
        simAns: 0,
        simExp: '96 + 6² = 96 + 36 = 132 cm².'
      },
      {
        q: 'Tính thể tích của hình chóp tứ giác đều có cạnh đáy a = 6 cm và chiều cao h = 10 cm:',
        opts: ['120 cm³', '360 cm³', '60 cm³', '180 cm³'],
        ans: 0,
        exp: 'Sđáy = 6² = 36 cm². V = (1/3) · Sđáy · h = (1/3) · 36 · 10 = 120 cm³.',
        simQ: 'Cạnh đáy a = 9 cm, chiều cao h = 8 cm. Thể tích là:',
        simOpts: ['216 cm³', '648 cm³', '108 cm³', '324 cm³'],
        simAns: 0,
        simExp: '(1/3) · 9² · 8 = (1/3) · 81 · 8 = 216 cm³.'
      },
      {
        q: 'Chân đường cao của hình chóp tứ giác đều là:',
        opts: ['Giao điểm của hai đường chéo đáy', 'Trung điểm một cạnh đáy', 'Một đỉnh của đáy', 'Trọng tâm một mặt bên'],
        ans: 0,
        exp: 'Hạ từ đỉnh vuông góc xuống đáy tại tâm hình vuông (giao điểm 2 đường chéo).',
        simQ: 'Khoảng cách từ tâm đáy đến một cạnh đáy của hình vuông cạnh a là:',
        simOpts: ['a / 2', 'a', 'a√2 / 2', 'a / 4'],
        simAns: 0,
        simExp: 'Bằng nửa cạnh đáy: a/2.'
      },
      {
        q: 'Mối liên hệ giữa chiều cao h, trung đoạn d và cạnh đáy a trong hình chóp tứ giác đều theo Pythagore là:',
        opts: ['d² = h² + (a / 2)²', 'h² = d² + (a / 2)²', 'd = h + a / 2', 'd² = h² + a²'],
        ans: 0,
        exp: 'Tam giác vuông tạo bởi đường cao h, đoạn nối tâm đến trung điểm cạnh đáy (a/2) và trung đoạn d: d² = h² + (a/2)².',
        simQ: 'Nếu h = 4 cm và a = 6 cm thì trung đoạn d bằng:',
        simOpts: ['5 cm', '7 cm', '√52 cm', '6 cm'],
        simAns: 0,
        simExp: 'a/2 = 3 cm => d = √(4² + 3²) = √25 = 5 cm.'
      },
      {
        q: 'Một chiếc lều cắm trại có dạng hình chóp tứ giác đều với cạnh đáy 2 m, chiều cao 1.5 m. Thể tích không khí bên trong lều là:',
        opts: ['2 m³', '6 m³', '4 m³', '3 m³'],
        ans: 0,
        exp: 'Sđáy = 2 × 2 = 4 m². V = (1/3) · 4 · 1.5 = 2 m³.',
        simQ: 'Nếu đáy lều là 3 m × 3 m, chiều cao 2 m thì thể tích là:',
        simOpts: ['6 m³', '18 m³', '9 m³', '12 m³'],
        simAns: 0,
        simExp: '(1/3) · 9 · 2 = 6 m³.'
      },
      {
        q: 'Kim tự tháp Kê-ốp có cạnh đáy khoảng 230 m, chiều cao khoảng 147 m. Thể tích ước tính của nó khoảng:',
        opts: ['Khoảng 2.6 triệu m³', 'Khoảng 7.8 triệu m³', 'Khoảng 1.2 triệu m³', 'Khoảng 5 triệu m³'],
        ans: 0,
        exp: 'V = (1/3) · 230² · 147 ≈ (1/3) · 52900 · 147 ≈ 2 592 100 m³ ≈ 2.6 triệu m³.',
        simQ: 'Diện tích mặt đáy của kim tự tháp Kê-ốp khoảng bao nhiêu m²?',
        simOpts: ['Khoảng 52 900 m²', 'Khoảng 23 000 m²', 'Khoảng 10 000 m²', 'Khoảng 100 000 m²'],
        simAns: 0,
        simExp: '230² = 52 900 m².'
      }
    ]
  }
];

writeChapterFile(8, chapter8Lessons);
writeChapterFile(9, chapter9Lessons);
writeChapterFile(10, chapter10Lessons);
