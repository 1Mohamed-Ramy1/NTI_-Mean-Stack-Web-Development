document.getElementById('runBtn').addEventListener('click', function () {
  const itemPrice = 120;
  const quantity = 3;

  console.log(itemPrice * quantity);
  console.log(400 - itemPrice * quantity);
  console.log(itemPrice * quantity);
  console.log(itemPrice / quantity);
  console.log(itemPrice % quantity);
  console.log(2 ** quantity);
});