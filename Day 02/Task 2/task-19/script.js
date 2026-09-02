document.getElementById('runBtn').addEventListener('click', function () {
  const start = Number(prompt('Enter start number:') || 0);
  const end = Number(prompt('Enter end number:') || 0);

  for (let number = start; number <= end; number++) {
    if (number % 2 === 0) {
      console.log(number + ' express');
    } else {
      console.log(number + ' normal');
    }
  }
});