var cities = ["Cairo", "Giza", "Alex", "Aswan"];
var city = cities.find(function (name) { return name.charAt(0) === "A"; });
var cityIndex = cities.findIndex(function (name) { return name.charAt(0) === "A"; });
var result = "City: " + city + "\nIndex: " + cityIndex;
console.log(result);
document.getElementById("output").textContent = result;
