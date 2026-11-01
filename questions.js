/*
 * NGAN HANG 12 CAU HOI DEMO - OLYMPIA MATH CLUB
 * Nguon noi dung: "Ban sao cua Demo Duong len dinh Olympia.pdf" do CLB cung cap.
 *
 * Luu y:
 * - 12 cau duoi day duoc chon tu cac phan Vong 1, Vong 2, Vong 3 va Vong 4.
 * - Mot so phuong an sai (distractor) duoc bo sung de tuong thich voi giao dien trac nghiem A-D;
 *   cac phuong an nay khong nhat thiet xuat hien trong PDF goc.
 * - Day la bo THI THU TRAC NGHIEM DEMO, khong phai ban mo phong day du luat thi goc.
 * - answerIndex: A = 0, B = 1, C = 2, D = 3.
 */
window.OLYMPIA_QUESTIONS = [
  // VONG 1 - KHOI DONG (10 diem/cau)
  {
    id: 1,
    round: "Khởi động",
    points: 10,
    question: "Dãy số 1, 3, 6, 10, 15, ... có số tiếp theo là bao nhiêu?",
    options: ["18", "20", "21", "25"],
    answerIndex: 2,
    explanation: "Hiệu giữa các số liên tiếp lần lượt là 2, 3, 4, 5; hiệu tiếp theo là 6. Vậy số tiếp theo là 15 + 6 = 21."
  },
  {
    id: 2,
    round: "Khởi động",
    points: 10,
    question: "Số nguyên tố lớn nhất có hai chữ số là số nào?",
    options: ["89", "91", "97", "99"],
    answerIndex: 2,
    explanation: "97 là số nguyên tố. Các số lớn hơn gần nó là 98 (hợp số) và 99 (chia hết cho 3), nên 97 là số nguyên tố lớn nhất có hai chữ số."
  },
  {
    id: 3,
    round: "Khởi động",
    points: 10,
    question: "Hai đường chéo của hình thoi tạo với nhau một góc bằng bao nhiêu độ?",
    options: ["45°", "60°", "90°", "120°"],
    answerIndex: 2,
    explanation: "Hai đường chéo của hình thoi vuông góc với nhau, nên góc tạo bởi chúng bằng 90°."
  },
  {
    id: 4,
    round: "Khởi động",
    points: 10,
    question: "Trong hóa học, kí hiệu AO thường dùng để chỉ khái niệm nào?",
    options: ["Phân tử oxi", "Obitan nguyên tử", "Axit hữu cơ", "Nguyên tử kim loại"],
    answerIndex: 1,
    explanation: "AO là viết tắt của Atomic Orbital, nghĩa là obitan nguyên tử."
  },

  // VONG 2 - CAC GOI Y LIEN QUAN DEN TU KHOA WORLD WIDE WEB (20 diem/cau trong demo)
  {
    id: 5,
    round: "Vượt chướng ngại vật · Gợi ý",
    points: 20,
    question: "Google Calendar, Google Sites, Google Keep và Google Chat là những dịch vụ thuộc hệ sinh thái nào?",
    options: ["Google", "Apple", "Microsoft", "Amazon"],
    answerIndex: 0,
    explanation: "Các tên dịch vụ trong gợi ý đều thuộc hệ sinh thái Google. Đây là một trong những gợi ý trong phần từ khóa của tài liệu."
  },
  {
    id: 6,
    round: "Vượt chướng ngại vật · Gợi ý",
    points: 20,
    question: "Thuật ngữ tiếng Anh chỉ đường dẫn cho phép truy cập đến một trang khác là gì?",
    options: ["Browser", "Hyperlink", "Search engine", "Domain"],
    answerIndex: 1,
    explanation: "Hyperlink là siêu liên kết, cho phép người dùng chuyển đến một trang hoặc tài nguyên khác."
  },

  // VONG 3 - TANG TOC (20 diem/cau trong demo)
  {
    id: 7,
    round: "Tăng tốc",
    points: 20,
    question: "Dãy số 5, 6, 10, 19, 35, ... có hai số tiếp theo là 60 và 96. Tổng hai số đó bằng bao nhiêu?",
    options: ["136", "146", "156", "166"],
    answerIndex: 2,
    explanation: "Các hiệu liên tiếp là 1, 4, 9, 16, tương ứng 1², 2², 3², 4². Tiếp theo cộng 5² = 25 và 6² = 36, được 60 và 96; tổng là 156."
  },
  {
    id: 8,
    round: "Tăng tốc",
    points: 20,
    question: "Trong bảng 3 × 3 dưới đây, tổng các số ở mỗi hàng, mỗi cột và mỗi đường chéo đều bằng 24. Hàng cuối là 7, ?, 5. Số cần điền là bao nhiêu?",
    options: ["8", "10", "12", "14"],
    answerIndex: 2,
    explanation: "Tổng hàng cuối bằng 24 nên 7 + ? + 5 = 24. Suy ra ? = 24 - 12 = 12."
  },
  {
    id: 9,
    round: "Tăng tốc",
    points: 20,
    question: "Một khối lập phương được sơn toàn bộ sáu mặt ngoài rồi cắt thành 27 khối lập phương nhỏ bằng nhau. Có bao nhiêu khối nhỏ không có mặt nào được sơn?",
    options: ["0", "1", "3", "6"],
    answerIndex: 1,
    explanation: "Khối lập phương được chia thành 3 × 3 × 3. Chỉ khối ở chính giữa không tiếp xúc với mặt ngoài, nên có đúng 1 khối không bị sơn."
  },

  // VONG 4 - VE DICH (30 diem/cau trong demo)
  {
    id: 10,
    round: "Về đích",
    points: 30,
    question: "Một hộp có 5 bóng đen và 7 bóng trắng. Lấy ngẫu nhiên cùng lúc 2 quả bóng. Xác suất để lấy được 2 quả cùng màu, viết dưới dạng phân số tối giản, là bao nhiêu?",
    options: ["31/66", "29/66", "1/2", "7/22"],
    answerIndex: 0,
    explanation: "Số cách lấy 2 bóng cùng màu là C(5,2) + C(7,2) = 10 + 21 = 31. Tổng số cách lấy 2 bóng từ 12 bóng là C(12,2) = 66. Xác suất là 31/66."
  },
  {
    id: 11,
    round: "Về đích",
    points: 30,
    question: "Trong phép lai Aa × Aa, với A trội hoàn toàn so với a, tỉ lệ kiểu hình trội ở đời con là bao nhiêu?",
    options: ["1/4", "1/2", "3/4", "1"],
    answerIndex: 2,
    explanation: "Đời con có tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa. Ba trong bốn phần có kiểu hình trội, nên tỉ lệ là 3/4 (75%)."
  },
  {
    id: 12,
    round: "Về đích",
    points: 30,
    question: "Phương trình x² - 2x - 5 = 0 có hai nghiệm phân biệt x₁ và x₂. Giá trị x₁² + x₂² bằng bao nhiêu?",
    options: ["4", "9", "14", "19"],
    answerIndex: 2,
    explanation: "Theo Viète: x₁ + x₂ = 2 và x₁x₂ = -5. Do đó x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = 4 + 10 = 14."
  }
];
