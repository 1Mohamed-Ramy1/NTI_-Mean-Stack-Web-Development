document.getElementById('runBtn').addEventListener('click', function () {
  const dbPrice = 10;
  const inputPrice = '10';

  console.log('==', dbPrice == inputPrice);
  console.log('===', dbPrice === inputPrice);

  // == compares after type coercion, while === compares both value and type.
});