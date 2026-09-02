document.getElementById('runBtn').addEventListener('click', function () {
  const value = prompt('Enter quantity:') || '';

  console.log(Number(value), typeof Number(value));
  console.log(parseInt(value, 10), typeof parseInt(value, 10));
  console.log(+value, typeof +value);
});