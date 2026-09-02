var car = { brand: "Toyota", model: "Corolla", year: 2022, color: "red" };
var result = "Brand: " + car.brand + "\nYear: " + car["year"];
console.log(result);
document.getElementById("output").textContent = result;
