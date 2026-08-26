var products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 25 }
];
var total = products.reduce(function (sum, product) { return sum + product.price; }, 0);
var result = "Total price: " + total;
console.log(result);
document.getElementById("output").textContent = result;
