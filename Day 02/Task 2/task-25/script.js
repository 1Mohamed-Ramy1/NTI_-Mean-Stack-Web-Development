document.getElementById('runBtn').addEventListener('click', function () {
  const input = prompt('Enter a number for factorial:') || '0';
  const n = Number(input);

  if (n < 0) {
    alert('Error: number cannot be negative');
    console.log('Error: number cannot be negative');
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  console.log(`${n}! = ${factorial}`);
  alert(`${n}! = ${factorial}`);
});