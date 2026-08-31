// Task 26: Same reference

let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;

person2.name = "Omar";

console.log("person1:", person1);
console.log("person2:", person2);
