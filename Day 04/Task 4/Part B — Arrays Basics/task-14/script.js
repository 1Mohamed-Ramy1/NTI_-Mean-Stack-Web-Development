var items = ["pen", "book", "bag"];
var result = "";
items.forEach(function (item, index) {
	console.log(index + ": " + item);
	result += index + ": " + item + "\n";
});
result = result.trim();
console.log(result);
document.getElementById("output").textContent = result;
