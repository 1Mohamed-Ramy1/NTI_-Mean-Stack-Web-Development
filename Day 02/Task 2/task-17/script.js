document.getElementById('runBtn').addEventListener('click', function () {
  const unitPrice = Number(prompt('Enter unit price:') || 0);

  for (let quantity = 1; quantity <= 10; quantity++) {
    console.log(`${quantity} x ${unitPrice} = ${quantity * unitPrice}`);
  }
});