// fetch - dùng để gọi lên trên server thông qua 1 API (đường dẫn) để lấy dữ liệu từ trên server trả về ( bản chất là 1 hàm promise )
// API - là một URL cho phép front-end giao tiếp với back-end
// API là một file có các chuỗi json gồm các cặp key-value
//  fetch("https://example.com/movies.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Ví dụ:
fetch("https://dummyjson.com/products")
  //.json() chuyển data từ dạng json về javascripts
  .then((response) => response.json())
  // Chờ fetch api về hoặc chuyển từ json về javascript
  /*   .then((response) => {
    return response.json();
  }) */
  .then((data) => {
    console.log(data.products);
    const newArr = data.products.map((item) => {
      return `<div>
      <img src="${item.thumbnail}" /> 
      <h2>${item.title}</h2>
      <h3>${item.price}$</h3>
      </div>`;
    });
    const htmls = newArr.join("");
    // Không phải 1 chuỗi json -> object javascript
    const productList = document.querySelector("#product-list"); // In ra ngoài giao diện
    productList.innerHTML = htmls;
  });
