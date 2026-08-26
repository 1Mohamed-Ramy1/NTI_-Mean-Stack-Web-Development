var car = { brand: "Toyota", model: "Corolla", year: 2022, color: "red" };
car.color = "black";
car.price = 25000;
var result = JSON.stringify(car, null, 2);
console.log(result);
document.getElementById("output").textContent = result;
