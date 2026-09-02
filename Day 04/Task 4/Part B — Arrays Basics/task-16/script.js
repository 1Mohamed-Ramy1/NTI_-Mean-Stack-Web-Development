var letters = ["A", "B", "C"];
letters.push("D", "E");
letters.shift();
var result = "Array: " + letters.join(", ") + "\nLength: " + letters.length;
console.log(result);
document.getElementById("output").textContent = result;
