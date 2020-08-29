console.log("Script loaded");
let testProductsNames = ["flatscreen", "phone", "radio", "fridge"];

let ul = document.getElementById("productsUl");

function renderProducts(products) {
  const productList = products.map((productName) => {
    const li = document.createElement("li");
    li.innerHTML = productName;
    ul.appendChild(li);
  });
}
console.log(renderProducts(testProductsNames));
console.log(getAvailableProducts());

//let testProductsNames = getAvailableProducts();
