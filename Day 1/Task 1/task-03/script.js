document.getElementById('runBtn').addEventListener('click', function () {
  const productName = 'Laptop';
  const price = 15000;
  const isAvailable = true;

  console.log(productName, typeof productName);
  console.log(price, typeof price);
  console.log(isAvailable, typeof isAvailable);
});