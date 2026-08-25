var grades = [70, 85, 92, 60, 77, 88];
var evenGrades = [];
for (var i = 0; i < grades.length; i++) {
  if (grades[i] % 2 === 0) evenGrades.push(grades[i]);
}
var result = evenGrades.join(" ");
console.log(result);
document.getElementById("output").textContent = result;
