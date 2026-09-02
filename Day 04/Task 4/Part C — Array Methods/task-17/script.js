var fruits = ["apple", "banana", "cherry"];
var upperFruits = fruits.map(function (fruit) { return fruit.toUpperCase(); });
var result = "New array: " + upperFruits.join(", ") + "\nOriginal array: " + fruits.join(", ");
document.getElementById("output").textContent = result;
