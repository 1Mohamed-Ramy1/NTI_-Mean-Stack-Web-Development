var cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"];
cities.push("Hurghada");
var result = "After push: " + cities.join(", ");
cities.unshift("Port Said");
result += "\nAfter unshift: " + cities.join(", ");
console.log(result);
document.getElementById("output").textContent = result;
