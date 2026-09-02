var values = [];
for (var number = 1; number <= 15; number += 2) values.push(number);
var result = values.join(" ");
console.log(result);
document.getElementById("output").textContent = result;
