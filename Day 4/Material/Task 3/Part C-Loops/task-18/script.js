var values = [];
for (var number = 1; number <= 10; number++) {
  if (number === 7) break;
  values.push(number);
}
var result = values.join(" ");
console.log(result);
document.getElementById("output").textContent = result;
