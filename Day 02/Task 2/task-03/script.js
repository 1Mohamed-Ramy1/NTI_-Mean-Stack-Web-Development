document.getElementById('runBtn').addEventListener('click', function () {
  let totalSales = 0;

  for (let day = 1; day <= 15; day++) {
    totalSales += day;
  }

  console.log('Total sales = ' + totalSales);
});