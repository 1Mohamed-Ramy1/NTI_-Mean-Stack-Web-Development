// Task 32: Destructuring in a loop

const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
  console.log(`${name} scored ${grade}`);
}

const names = students.map(({ name }) => name);
console.log("Names:", names);
