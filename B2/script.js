// 1. Mở một cửa sổ mới
// window.open(url, name, options) - options: height, width, top, left
try {
  // Khối lệnh chạy
} catch (error) {
  // Bắt lỗi nếu có lỗi
} finally {
  // Luôn luôn chạy vào đây và được chạy sau cùng
}
// Cách thêm 1 key vào object
tenObject.tenKey = value;

// 2. forEach - Duyệt qua mỗi ptu của mảng và thực hiện hành động
arr.forEach(function (currentValue, index, array) {
  // block
});
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach(function (item) {
  sum += item;
});
console.log(sum);

numbers.forEach(function (_, index) {
  // _ nếu không dùng thông số đó
  console.log(index);
});

// 3.every() - kiểm tra tất cả các phần tử trong mảng phải thoả mãn một điều kiện
arr.every(function (currentValue, index, array) {
  // code xử lý
});

const monHoc = [
  {
    ten: "Toán",
    diem: 8.6,
  },
  {
    ten: "Lý",
    diem: 9.2,
  },
  {
    ten: "Hoá",
    diem: 8.5,
  },
  {
    ten: "Tin",
    diem: 6,
  },
];

/* const hocSinhGioi = monHoc.every((item) => {
  return item.diem >= 8;
});
console.log(hsg); */

const oLaiLop = monHoc.every((item) => {
  return item.diem < 4;
});
if (oLaiLop == true) {
  console.log("Ở lại lớp !");
} else {
  console.log("Được lên lớp !");
}

// 4. some() - Kiểm tra chỉ cần một phần tử của một mảng thoả mãn
arr.some(function (currentValue, index, array) {
  // code xử lý
});

// 5. find() - Tìm xem trong mảng có phần tử nào có giá trị trùng với giá trị cần tìm
arr.some(function (currentValue, index, array) {
  // code xử lý
});

const monHoc1 = [
  {
    ten: "Toán",
    diem: 8.6,
  },
  {
    ten: "Lý",
    diem: 9.2,
  },
  {
    ten: "Hoá",
    diem: 8.5,
  },
  {
    ten: "Tin",
    diem: 6,
  },
  {
    ten: "Tin",
    diem: 9,
  },
];
const monTin = monHoc1.find((item) => {
  return item.ten === "Tin";
});
console.log(monTin); // trả về 1 object {}
console.log(monTin.diem);

//6. filter() - Giống hàm find nhưng trả về 1 mảng các phần tử tìm được
const monTin1 = monHoc1.filter((item) => {
  return item.ten === "Tin";
});
console.log(monTin1); // trả về 1 mảng []

//7. map() - Lặp qua từng phần tử của mảng và trả về một mảng mới
// Khác với forEach là duyệt trực tiếp trên mảng cũ thì map tạo ra một mảng mới - giá trị trả về quyết định bằng từ khoá return
const mangMoi = monHoc1.map((item) => {
  return item.diem; // return về cái gì thì mảng mới sẽ nhận được cái đó
});
console.log(mangMoi);
