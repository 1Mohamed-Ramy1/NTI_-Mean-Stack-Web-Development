document.getElementById('runBtn').addEventListener('click', function () {
  var itemsInCart = 10;

//The while condition is false because 5 > 10 is not true
  while (5 > itemsInCart) {
    console.log('Cart is empty');
  }

//do...while runs at least once, even when the condition is false at first
  do {
    console.log('Start shopping');
    console.log('Difference: ' + (itemsInCart - 5));
  } while (5 > itemsInCart);
});