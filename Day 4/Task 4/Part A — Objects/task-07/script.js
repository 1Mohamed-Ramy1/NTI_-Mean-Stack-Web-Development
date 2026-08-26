var person = { name: "Ali", age: 25, city: "Cairo" };
var result = "Keys: " + Object.keys(person).join(", ") +
	"\nValues: " + Object.values(person).join(", ") +
	"\nHas job: " + person.hasOwnProperty("job");
console.log(result);
document.getElementById("output").textContent = result;
