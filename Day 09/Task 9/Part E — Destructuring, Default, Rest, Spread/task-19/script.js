// Task 19: Object destructuring

const product = {
  title: "Laptop",
  price: 15000,
  inStock: true,
  brand: "Dell"
};

const { title, price, inStock } = product;

console.log(title);
console.log(price);
console.log(inStock);
