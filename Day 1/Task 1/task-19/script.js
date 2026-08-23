document.getElementById('runBtn').addEventListener('click', function () {
  const name = prompt('Customer name:') || '';
  const price = Number(prompt('Order price:') || 0);
  const paid = confirm('Is payment done?');
  const message = `Customer: ${name}, Price: ${price}, Paid: ${paid}`;

  console.log(message);
  alert(message);
  document.getElementById('result').innerText = message;
});