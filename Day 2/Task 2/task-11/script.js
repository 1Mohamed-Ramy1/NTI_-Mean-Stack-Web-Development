document.getElementById('runBtn').addEventListener('click', function () {
  const quantity = prompt('Enter quantity:') || '0';

  const byValuePlus = +quantity;
  const byParseInt = parseInt(quantity, 10);
  const byNumber = Number(quantity);

  console.log('value +:', typeof byValuePlus, byValuePlus);
  console.log('parseInt:', typeof byParseInt, byParseInt);
  console.log('Number:', typeof byNumber, byNumber);
});