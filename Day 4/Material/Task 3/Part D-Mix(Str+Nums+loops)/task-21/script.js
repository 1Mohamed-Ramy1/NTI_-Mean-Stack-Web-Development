var word = "HELLO";
var letters = [];
for (var i = 0; i < word.length; i++) letters.push(word.charAt(i));
var result = letters.join("\n");
console.log(result);
document.getElementById("output").textContent = result;
