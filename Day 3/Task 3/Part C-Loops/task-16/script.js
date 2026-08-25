var values = [];
var number = 10;
while (number >= 1) {
  values.push(number);
  number--;
}
var result = values.join(" ");
console.log(result);
document.getElementById("output").textContent = result;
