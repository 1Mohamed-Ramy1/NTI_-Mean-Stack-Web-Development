document.getElementById('runBtn').addEventListener('click', function () {
  const message = 'JS is running successfully';

  console.log(message);
  document.getElementById('result').innerText = message;
});