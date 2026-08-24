document.getElementById('runBtn').addEventListener('click', function () {
  const students = ['Ahmed', 'Sara', 'Ali', 'Nora', 'Omar'];

  for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
  }
});