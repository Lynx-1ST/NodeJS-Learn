import { kiemTra } from "./helpers/kiemTra.js";
import { chanLe } from "./helpers/chanLe.js";
import { sum } from "./helpers/sum.js";

/* const congViec1 = () => {
  console.log("Công việc 1");
};

// Đối số - khi truyền vào cái gì thì ta nhận được cái đó
const congViec2 = (callback) => {
  console.log(ham);
  callback();
  console.log(congViec2);
};

// Hàm callback - Gọi lại hàm congViec1
congViec2(congViec1); */

// Vd

sum(10, 20, kiemTra);

sum(10, 20, (number) => {
  kiemTra(number);
  chanLe(number);
});

// Ví dụ đăng nhập
const loginSuccess = () => {
  console.log("Đăng nhập thành công !");
};

const checkLogin = (data, callback) => {
  const email = "test@gmail.com";
  const password = "2222";
  if (data.email === email && data.password === password) {
    callback();
  } else {
    console.log("Đăng nhập thất bại");
  }
};

let data = {
  email: "test@gmail.com",
  password: "123456",
};

checkLogin(data, loginSuccess);

// promise - giải quyết vấn đề callback hell (lặp, nhiều hàm lồng nhau), đơn giản và dễ nhìn hơn
var promise = new Promise((resolve, reject) => {
  // resolve(): Nếu thành công chạy hàm này
  // reject(): Nếu thất bại chạy hàm này
});

promise
  .then((success) => {
    // nếu thành công chạy hàm này
  })
  .catch((error) => {
    // nếu thất bại chạy hàm này
  })
  .finally(() => {
    // luôn luôn chạy hàm này
  });

// ví dụ
var a = 10;
var promise = new Promise((resolve, reject) => {
  // Nếu a nhỏ hơn 0 thì chạy reject & ngược lại
  if (a < 0) {
    reject();
  } else {
    resolve(a); // truyền giá trị tham số a vào biến success
  }
});

promise
  .then((resultA) => {
    console.log(resultA);
    return resultA;
  })
  .then((resultA) => {
    console.log(resultA);
    const resultB = a + 10;
    console.log(resultB);
  })
  .catch(() => {
    console.log("Thất bại !");
  });

/*   .finally(() => {
    console.log("Luôn chạy !");
  }); */

/*  - Promise có 3 trạng thái: 
  + Pending: Đang chạy - KQ là undefined
  + Fulfilled: Đã chạy xong - KQ là một giá trị
  + Rejected: Bị lỗi - KQ là một object lỗi */

// Bất đồng bộ
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000); // Sau 3 giây mới chuyển trạng trái fulfilled -> gọi resolve()
});

setTimeout(() => {
  console.log("Sau 1 giây: ", promise1); // Sau 1 giây thì in ra promise1 nhưng Promise vẫn chưa đủ 3 giây -> Vẫn đang pending
}, 1000);

/* Dòng thời gian thực tế
0s → tạo promise → trạng thái pending
1s → in promise → vẫn pending
3s → promise được resolve() → chuyển thành fulfilled */
// => Lý do ta cần promise .then()...
