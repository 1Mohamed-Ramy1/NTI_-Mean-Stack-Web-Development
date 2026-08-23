document.getElementById('runBtn').addEventListener('click', function () {
  const color = prompt('What is your favorite color?') || '';
  console.log('Your favorite color is: ' + color);
});