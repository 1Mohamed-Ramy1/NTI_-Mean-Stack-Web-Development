var products = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];
var titles = products.map(function (product) { return product.title.toUpperCase(); });
var cheapProducts = products.filter(function (product) { return product.price < 30; });
var total = products.reduce(function (sum, product) { return sum + product.price; }, 0);
var result = "Uppercase titles: " + titles.join(", ") +
  "\nCheap products: " + cheapProducts.map(function (product) { return product.title; }).join(", ") +
  "\nTotal prices: " + total;
console.log(result);
document.getElementById("output").textContent = result;
