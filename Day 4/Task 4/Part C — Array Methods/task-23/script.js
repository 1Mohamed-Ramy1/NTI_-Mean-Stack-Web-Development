var ages = [16, 21, 17, 19];
var someAdult = ages.some(function (age) { return age >= 18; });
var everyAdult = ages.every(function (age) { return age >= 18; });
var result = "Some age >= 18: " + someAdult + "\nEvery age >= 18: " + everyAdult;
console.log(result);
document.getElementById("output").textContent = result;
