var values = [];
for (var number = 1; number <= 20; number++) values.push(number);
var result = values.join(" ");
console.log(result);
document.getElementById("output").textContent = result;
