var cities = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"];
var result = "First: " + cities[0] + "\nSecond: " + cities[1] + "\nLast: " + cities[cities.length - 1];
console.log(result);
document.getElementById("output").textContent = result;
