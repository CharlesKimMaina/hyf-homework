class Product {
  constructor(name, price) {
    this.name = name;

    this.price = price;
  }

  // method to convert currency
  convertToCurrency(currency) {
    if (
      currency.toLowerCase() === "dollars" ||
      currency.toLowerCase() === "dollar"
    )
      return this.price / 6.75;

    if (currency.toLowerCase() === "pound") return this.price / 8.3;

    if (currency.toLowerCase() === "euro") return this.price / 7.5;
  }
}

//class shopping cart starts

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  //method for adding product to shopping cart

  addProduct(product) {
    this.products.push(product);
  }

  //method for removing product fro sh.cart
  removeProduct(product) {
    const productList = this.products.filter((formerProducts) => {
      return formerProducts.name !== product.name;
    });

    this.products = productList;
  }

  //method for searching product in shopping cart
  searchProduct(productName) {
    let searchOutput = [];

    this.products.forEach((product) => {
      if (productName.toLowerCase() === product.name)
        searchOutput.push(product);
    });

    return searchOutput;
  }

  //method for calculating total price of products in shoping cart

  getTotal() {
    let totalPrice = 0;

    this.products.forEach((product) => {
      totalPrice += product.price;
    });

    return totalPrice;
  }

  //method for rendering to browser

  async renderProducts() {
    const div = document.createElement("div");

    this.products.forEach((product) => {
      const p = document.createElement("p");

      p.innerText = "This " + product.name + " costs " + product.price + " kr ";

      div.appendChild(p);
    });

    const pTotalCost = document.createElement("p");

    const totalCost = this.getTotal();

    pTotalCost.innerHTML = `Total price: ${totalCost}`;

    div.appendChild(pTotalCost);

    const name = await this.getUser();

    const pUser = document.createElement("p");

    pUser.innerHTML = `User name: ${name}`;

    div.appendChild(pUser);

    const body = document.querySelector("body");

    body.appendChild(div);
  }

  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/7")
      .then((res) => res.json())

      .then((users) => {
        return users.name;
      });
  }
}

//instant Shopping cart
const shoppingCart = new ShoppingCart();

//instant products class
const flatscreen = new Product("flat-screen", 5000);

const car = new Product("car", 150000);

const usedComputer = new Product("computer", 2000);

const mobile = new Product("mobile", 3000);

const computer = new Product("computer", 8000);

//adding product to cart
shoppingCart.addProduct(flatscreen);

shoppingCart.addProduct(car);

shoppingCart.addProduct(mobile);

shoppingCart.addProduct(computer);

shoppingCart.addProduct(usedComputer);

//removing a product
shoppingCart.removeProduct(flatscreen);

//total price
console.log(shoppingCart.getTotal());

console.log(shoppingCart.products);

//searching a product
console.log(shoppingCart.searchProduct("computer"));

console.log(shoppingCart.searchProduct("Car"));

//rendering product name and its price and user
shoppingCart.renderProducts();

//getting users
shoppingCart.getUser();

//To convert currency
const plant = new Product("plant", 50);

console.log(plant.convertToCurrency("Euro"));
