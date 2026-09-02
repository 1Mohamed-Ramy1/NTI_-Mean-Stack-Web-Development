var numbers = [];
var sum = 0;
for (var i = 0; i < 5; i++) {
	numbers[i] = Math.floor(Math.random() * 50) + 1;
	sum += numbers[i];
}
var largest = numbers[0];
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
	if (numbers[i] > largest) largest = numbers[i];
	if (numbers[i] < smallest) smallest = numbers[i];
}
var result = "Numbers: " + numbers.join(", ") + "\nLargest: " + largest + "\nSmallest: " + smallest + "\nAverage: " + (sum / numbers.length).toFixed(2);
console.log(result);
document.getElementById("output").textContent = result;
