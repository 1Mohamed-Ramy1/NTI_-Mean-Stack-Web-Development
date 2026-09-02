var numbers = [12, 5, 28, 9];
var largest = numbers[0];
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
	if (numbers[i] > largest) largest = numbers[i];
	if (numbers[i] < smallest) smallest = numbers[i];
}
var result = "Largest: " + largest + "\nSmallest: " + smallest;
console.log(result);
document.getElementById("output").textContent = result;
