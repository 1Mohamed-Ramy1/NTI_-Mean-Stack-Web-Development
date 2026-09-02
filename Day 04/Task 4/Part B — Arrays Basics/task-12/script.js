var cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"];
cities.pop();
var result = "After pop: " + cities.join(", ");
cities.shift();
result += "\nAfter shift: " + cities.join(", ");
console.log(result);
document.getElementById("output").textContent = result;
