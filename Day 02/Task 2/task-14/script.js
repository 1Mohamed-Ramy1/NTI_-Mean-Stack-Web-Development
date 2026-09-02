document.getElementById('runBtn').addEventListener('click', function () {
  const grade = Number(prompt('Enter your grade:') || 0);

  if (grade >= 90) {
    console.log('A');
  } else if (grade >= 80) {
    console.log('B');
  } else if (grade >= 70) {
    console.log('C');
  } else {
    console.log('F');
  }
});