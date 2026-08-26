var students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];
var passedStudents = students.filter(function (student) { return student.grade >= 80; });
var names = passedStudents.map(function (student) { return student.name; });
var result = names.join(", ");
console.log(result);
document.getElementById("output").textContent = result;
