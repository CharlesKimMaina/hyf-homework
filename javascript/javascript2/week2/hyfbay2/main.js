console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

/*i have given the inputtype some id called searchButton.
which i will to acess it from JS*/

const searchButton = document.getElementById("searchButton");

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

renderProducts(products);

/*when the customer types a product on the searchButton, 
and press enter, the main.js event listerner will be 
listening. The event to make effect will be keypress
which is the 1st parameter. The 2nd parameter is a if
function to check the 1st parameter execution.
The if condition 1st checks if the customer has typed a 
real product, hence productNameTyped.length or searchButton 
value must be higher than 0. The second condition to 
checks the keycode of keypress event, which is 13. */

searchButton.addEventListener("keypress", function () {
  if (searchButton.value.length > 0 && event.keyCode === 13) {
    console.log("eventCount");
  }
});

function renderSearchedProduct() {
  let p = document.createElement("p");
  let typedWord = searchButton.value;
  p.innerHTML = typedWord;
  searchedProduct.appendChild(p);
  console.log(p);
}
