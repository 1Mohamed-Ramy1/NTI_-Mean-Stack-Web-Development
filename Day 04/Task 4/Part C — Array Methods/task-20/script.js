var letters = ["a", "b", "c", "d", "e"];
var copy = letters.slice(1, 4);
var result = "Copy: " + copy.join(", ") + "\nOriginal: " + letters.join(", ");
console.log(result);
document.getElementById("output").textContent = result;
