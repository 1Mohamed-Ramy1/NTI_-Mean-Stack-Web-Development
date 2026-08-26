var numbers = [40, 100, 1, 5, 25];
numbers.sort(function (a, b) { return a - b; });
var result = numbers.join(", ");
console.log(result);
document.getElementById("output").textContent = result;
