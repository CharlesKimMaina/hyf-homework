class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product);
    }
  
    removeProduct(product) {
      const filtered = this.products.filter(value => {
        return value !== product;
      });
    }
  
    searchProduct(productName) {
      console.log(productName);
      const filtered = this.products.filter(value => {
        console.log(this.products[0]);
      });
    }
  
    getTotal() {
      // Implement functionality here
    }
  
    renderProducts() {
      // Implement functionality here
    }
  
    getUser() {
      // Implement functionality here
    }
  }
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  shoppingCart.addProduct(flatscreen);
  
  const macbook = new Product("Macbook", 15000);
  shoppingCart.addProduct(macbook);
  
  const iphone = new Product("iphone", 4750);
  shoppingCart.removeProduct(iphone);
  
  shoppingCart.searchProduct("Macbook");
  