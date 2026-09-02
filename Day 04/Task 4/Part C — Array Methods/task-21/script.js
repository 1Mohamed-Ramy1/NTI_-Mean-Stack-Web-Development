var words = ["one", "two", "three", "four", "five"];
var removed = words.splice(1, 2);
var result = "Removed: " + removed.join(", ") + "\nAfter splice: " + words.join(", ");
console.log(result);
document.getElementById("output").textContent = result;
