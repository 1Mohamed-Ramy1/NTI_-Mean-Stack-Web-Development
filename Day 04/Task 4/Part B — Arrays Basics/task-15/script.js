var colors = ["red", "green", "blue", "yellow"];
var result = "";
for (var i = 0; i < colors.length; i++) {
	if (colors[i] === "blue") break;
	result += colors[i] + "\n";
}
result = result.trim();
console.log(result);
document.getElementById("output").textContent = result;
