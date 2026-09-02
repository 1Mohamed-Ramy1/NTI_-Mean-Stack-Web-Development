var students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];
var result = "";
for (var i = 0; i < students.length; i++) {
  result += students[i].name + ": " + students[i].grade + "\n";
}
result = result.trim();
console.log(result);
document.getElementById("output").textContent = result;
