var values = [];
for (var number = 1; number <= 30; number++) {
  if (number === 25) break;
  if (number % 3 === 0) continue;
  values.push(number);
}
var result = values.join(" ");
console.log(result);
document.getElementById("output").textContent = result;
