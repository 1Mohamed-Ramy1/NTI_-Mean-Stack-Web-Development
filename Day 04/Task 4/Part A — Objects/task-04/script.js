var car = { brand: "Toyota", model: "Corolla", year: 2022, color: "red" };
delete car.year;
var result = "car.year: " + car.year + "\nThe result is undefined because year was deleted.";
console.log(result);
document.getElementById("output").textContent = result;
