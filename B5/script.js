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

let delay = (ms) =>
  new Promise((resolve, reject) => {
    if (ms > 0) {
      setTimeout(resolve, ms);
    } else {
      console.log(reject);
    }
  });
async function runTest() {
  console.log("X");
  await delay(2000);
  console.log("Y");
}

const tryFetch = new Promise((resolve, reject) => {
  fetchAPI("https://localhost:3000/products").then((data) => {
    return data;
  });
});
