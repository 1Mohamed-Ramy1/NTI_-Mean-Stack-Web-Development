document.getElementById('runBtn').addEventListener('click', function () {
  let total = 0;

  for (let day = 1; day <= 5; day++) {
    const expense = Number(prompt('Enter expense for day ' + day) || 0);
    total += expense;
  }

  const average = total / 5;
  console.log('Total = ' + total);
  console.log('Average = ' + average);
});