/*Hai từ khóa var và let khác nhau ở phạm vi sử dụng của biến:
- Phạm vi của biến sử dụng var là phạm vi hàm hoặc bên ngoài hàm, toàn cục.
- Phạm vi của biến sử dụng let là phạm vi một khối (block), xác định bởi cặp {}.
*/

// Tạo một object có các phần tử
var infoUser = {
  name: "Le Van A",
  age: 16,
  from: "Viet Nam",
};

// In ra object
console.log(infoUser);

// Chèn phần tử vào object dc gọi
infoUser.number = "012345678";
console.log(infoUser);

// Dùng vòng lặp để in ra các phần tử trong object
for (key in infoUser) {
  console.log(key); // Trả ra tên biến
  console.log(infoUser[key]); // Trả ra giá trị của biến
}

var list = ["HTML5", "CSS3", "JavaScript"];
for (var i = 0; i < list.length; i++) {
  console.log(i + 1);
  console.log(list[i]);
}
// Lặp giá trị từng phần tử của mảng
for (var item of list) {
  console.log(item); // HTML5 - CSS3 - JavaScript
}

var string = "Đào Quang Lộc";
for (var char of string) {
  console.log(char); // Lấy ra từng kí tự của chuỗi
}

var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Gọi hàm trước = PASS
var ketQua = tong(10, 20, 30, 40);
console.log(ketQua);
// Hàm định nghĩa (được gọi lại hàm trước lúc khai báo hàm đó & có đối tượng arguments)
// function tenHam(thamso1, thamso2....) {}
function tong(a, b, c, d) {
  console.log(arguments);
  // Arguments - Nó chứa toàn bộ các giá trị (đối số) được truyền vào hàm đó khi gọi.
  let tong = 0;
  for (const item of arguments) {
    tong += item;
  }
  return tong;
}

// Hàm biểu thức (Gọi hàm trước khi khai báo = lỗi & có đối tượng arguments)
// var tenHam = function(thamso1, thamso2....) {}
var tong = function (a, b, c, d) {
  let tong = 0;
  for (const item of arguments) {
    tong += item;
  }
  return tong;
};
// Gọi hàm sau = PASS
var ketQua = tong(10, 20, 30, 40);
console.log(ketQua);
