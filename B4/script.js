// async/await - làm  việc với các hàm bất đồng bộ theo cách dễ hiểu hơn, được xây dựng trên promise
// Async - Khai báo một hàm bất đồng bộ - Tự động biến đổi một hàm thông thường thành hàm Promise
// Await - Chỉ có thể sử dụng trong các hàm async. Tạm dừng việc thực hiện hàm async, khi đặt trước promise nó sẽ đợi promise kết thúc và trả kết quả.
// Hàm lấy API
const fetchAPI = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
};
fetchAPI("https://dummyjson.com/products").then((data) => {
  console.log(data);
});

const fs = require("fs/promises");
const sync = async (filePath) => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};
sync("./data.json").then(console.log);

// bài tập
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
async function run() {
  console.log("A");
  await delay(2000);
  console.log("B");
}

run();
