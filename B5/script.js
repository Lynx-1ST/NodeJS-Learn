const fetchAPI = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
};

fetchAPI("http://localhost:3000/products").then((data) => {
  console.log(data);
  const newArr = data.map((item) => {
    return `
  <li class="product-item">
    <img src="${item.thumbnail}" alt="${item.title}" />
    <h2>${item.title}</h2>
    <h3>$${item.price}</h3>
  </li>
`;
  });
  const htmls = newArr.join("");
  const productList = document.querySelector("#product-list");
  productList.innerHTML = htmls;
});
