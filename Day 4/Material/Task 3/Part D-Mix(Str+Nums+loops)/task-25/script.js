var rows = [];
for (var row = 1; row <= 4; row++) {
  var stars = "";
  for (var column = 1; column <= row; column++) stars += "* ";
  rows.push(stars.trim());
}
var result = rows.join("\n");
console.log(result);
document.getElementById("output").textContent = result;
