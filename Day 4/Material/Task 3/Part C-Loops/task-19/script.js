var lines = [];
for (var multiplicand = 1; multiplicand <= 3; multiplicand++) {
  for (var multiplier = 1; multiplier <= 10; multiplier++) {
    lines.push(multiplicand + " * " + multiplier + " = " + (multiplicand * multiplier));
  }
}
var result = lines.join("\n");
console.log(result);
document.getElementById("output").textContent = result;
