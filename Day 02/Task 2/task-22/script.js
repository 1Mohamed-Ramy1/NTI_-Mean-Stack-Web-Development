document.getElementById('runBtn').addEventListener('click', function () {
  const correctPin = '1234';
  let attempts = 0;

  while (attempts < 3) {
    const enteredPin = prompt('Enter your PIN:') || '';
    attempts++;

    if (enteredPin === correctPin) {
      console.log('Access granted');
      alert('Access granted');
      return;
    }

    if (attempts === 3) {
      console.log('Access denied');
      alert('Access denied');
      return;
    }

    console.log('Wrong PIN. Attempts left: ' + (3 - attempts));
  }
});
