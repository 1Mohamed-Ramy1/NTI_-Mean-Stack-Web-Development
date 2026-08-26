var classroom = {
  teacher: "Mr. Ahmed",
  students: ["Omar", "Mona", "Ali", "Sara"]
};
var result = "Teacher: " + classroom.teacher +
  "\nNumber of students: " + classroom.students.length +
  "\nLast student: " + classroom.students[classroom.students.length - 1];
console.log(result);
document.getElementById("output").textContent = result;
