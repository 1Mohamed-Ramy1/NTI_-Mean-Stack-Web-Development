var numbers = [10, 55, 30, 80, 45, 90];
var result = numbers.filter(function (number) { return number > 50; }).join(", ");
console.log(result);
document.getElementById("output").textContent = result;
