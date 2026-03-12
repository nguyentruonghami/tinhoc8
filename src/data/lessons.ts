export interface Lesson {
  id: string;
  title: string;
  chapter: string;
  description: string;
  content: string;
  quiz: {
    question: string;
    options: string[];
    answer: number;
  }[];
}

export const lessons: Lesson[] = [
  {
    id: "ch1-l1",
    chapter: "Chủ đề 1: Máy tính và cộng đồng",
    title: "Lược sử công cụ tính toán",
    description: "Tìm hiểu về quá trình phát triển của các công cụ tính toán từ thô sơ đến hiện đại.",
    content: `
### 1. Các công cụ tính toán thời kì trước máy tính
- Con người đã sử dụng ngón tay, sỏi đá, bàn tính (Abacus) để tính toán.
- Máy tính cơ học đầu tiên: Pascaline (Blaise Pascal, 1642).
- Máy tính của Babbage: Máy sai phân (Difference Engine) và Máy phân tích (Analytical Engine) - tiền thân của máy tính hiện đại.

### 2. Sự ra đời của máy tính điện tử
- Thế hệ 1 (1945-1955): Dùng đèn chân không (ENIAC).
- Thế hệ 2 (1955-1965): Dùng bóng bán dẫn (Transistor).
- Thế hệ 3 (1965-1974): Dùng mạch tích hợp (IC).
- Thế hệ 4 (1974-nay): Dùng vi xử lý (VLSI).
    `,
    quiz: [
      {
        question: "Ai được coi là cha đẻ của máy tính hiện đại?",
        options: ["Blaise Pascal", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: 1
      },
      {
        question: "Máy tính thế hệ thứ nhất sử dụng linh kiện gì?",
        options: ["Bóng bán dẫn", "Mạch tích hợp", "Đèn chân không", "Vi xử lý"],
        answer: 2
      },
      {
        question: "Máy tính ENIAC ra đời vào năm nào?",
        options: ["1935", "1945", "1955", "1965"],
        answer: 1
      },
      {
        question: "Linh kiện chính của máy tính thế hệ thứ hai là gì?",
        options: ["Đèn chân không", "Mạch tích hợp", "Bóng bán dẫn", "Vi xử lý"],
        answer: 2
      },
      {
        question: "Máy tính Pascaline do ai sáng chế?",
        options: ["Charles Babbage", "Ada Lovelace", "Blaise Pascal", "Alan Turing"],
        answer: 2
      }
    ]
  },
  {
    id: "ch2-l1",
    chapter: "Chủ đề 2: Thông tin trong môi trường số",
    title: "Thông tin trong môi trường số",
    description: "Đặc điểm của thông tin số và cách khai thác thông tin hiệu quả.",
    content: `
### 1. Đặc điểm của thông tin số
- Có thể sao chép, truyền đi nhanh chóng.
- Khó bị mất đi hoặc hư hỏng theo thời gian.
- Có thể được xử lý tự động bởi máy tính.

### 2. Khai thác thông tin số
- Sử dụng các máy tìm kiếm (Google, Bing...).
- Đánh giá độ tin cậy của thông tin: Tác giả, nguồn gốc, thời gian cập nhật.
    `,
    quiz: [
      {
        question: "Đặc điểm nào sau đây KHÔNG phải của thông tin số?",
        options: ["Dễ dàng sao chép", "Truyền đi nhanh chóng", "Dễ bị mòn theo thời gian", "Có thể xử lý tự động"],
        answer: 2
      },
      {
        question: "Để đánh giá độ tin cậy của thông tin trên mạng, ta nên kiểm tra yếu tố nào?",
        options: ["Tác giả bài viết", "Nguồn gốc thông tin", "Thời gian cập nhật", "Tất cả các yếu tố trên"],
        answer: 3
      },
      {
        question: "Thông tin số có đặc điểm nào giúp việc truyền tải trở nên nhanh chóng?",
        options: ["Dung lượng lớn", "Có thể số hóa và truyền qua mạng", "Dễ bị hư hỏng", "Khó sao chép"],
        answer: 1
      }
    ]
  },
  {
    id: "ch4-l1",
    chapter: "Chủ đề 4: Ứng dụng tin học",
    title: "Sử dụng bảng tính (Excel)",
    description: "Các hàm cơ bản và cách trình bày dữ liệu trong bảng tính.",
    content: `
### 1. Địa chỉ ô và khối
- Ô: Giao của cột và hàng (VD: A1).
- Khối: Tập hợp các ô liền kề (VD: A1:C5).

### 2. Các hàm cơ bản
- SUM: Tính tổng.
- AVERAGE: Tính trung bình cộng.
- MAX, MIN: Tìm giá trị lớn nhất, nhỏ nhất.
- COUNT: Đếm số ô chứa dữ liệu số.
    `,
    quiz: [
      {
        question: "Hàm nào dùng để tính trung bình cộng trong Excel?",
        options: ["SUM", "AVERAGE", "COUNT", "MAX"],
        answer: 1
      },
      {
        question: "Trong Excel, để tìm giá trị lớn nhất trong vùng dữ liệu, ta dùng hàm nào?",
        options: ["MIN", "SUM", "MAX", "AVERAGE"],
        answer: 2
      },
      {
        question: "Địa chỉ ô $A$1 là loại địa chỉ nào?",
        options: ["Địa chỉ tương đối", "Địa chỉ tuyệt đối", "Địa chỉ hỗn hợp", "Địa chỉ vùng"],
        answer: 1
      },
      {
        question: "Phép toán nhân trong Excel được ký hiệu bằng ký tự nào?",
        options: ["x", ".", "*", ":"],
        answer: 2
      }
    ]
  },
  {
    id: "ch5-l1",
    chapter: "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
    title: "Thuật toán và Cấu trúc điều khiển",
    description: "Làm quen với tư duy lập trình và các cấu trúc rẽ nhánh, lặp.",
    content: `
### 1. Cấu trúc rẽ nhánh
- Dạng thiếu: Nếu <điều kiện> thì <công việc>.
- Dạng đủ: Nếu <điều kiện> thì <công việc 1> ngược lại <công việc 2>.

### 2. Cấu trúc lặp
- Lặp với số lần biết trước.
- Lặp với số lần chưa biết trước (lặp cho đến khi điều kiện thỏa mãn).
    `,
    quiz: [
      {
        question: "Trong Scratch, khối lệnh 'Nếu... thì...' thuộc cấu trúc nào?",
        options: ["Cấu trúc tuần tự", "Cấu trúc rẽ nhánh", "Cấu trúc lặp", "Cấu trúc dữ liệu"],
        answer: 1
      },
      {
        question: "Cấu trúc lặp với số lần chưa biết trước kết thúc khi nào?",
        options: ["Khi thực hiện đủ 10 lần", "Khi điều kiện lặp không còn thỏa mãn", "Khi máy tính bị tắt", "Khi người dùng bấm phím Esc"],
        answer: 1
      },
      {
        question: "Thuật toán là gì?",
        options: ["Một chương trình máy tính", "Một dãy các chỉ dẫn rõ ràng để giải quyết một vấn đề", "Một thiết bị phần cứng", "Một loại dữ liệu số"],
        answer: 1
      }
    ]
  }
];
