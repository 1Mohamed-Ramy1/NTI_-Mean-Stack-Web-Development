var names = ["ahmed", "sara", "omar", "laila", "hassan"];
var matches = [];
for (var i = 0; i < names.length; i++) {
  var uppercaseName = names[i].toUpperCase();
  if (uppercaseName.charAt(0) === "A" || uppercaseName.charAt(0) === "S") matches.push(uppercaseName);
}
var result = matches.join("\n") + "\nMatched names: " + matches.length;
console.log(result);
document.getElementById("output").textContent = result;
