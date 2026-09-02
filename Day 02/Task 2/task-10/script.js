document.getElementById('runBtn').addEventListener('click', function () {
  const userName = prompt('Enter your name:') || '';
  const message = `Welcome, ${userName}`;

  alert(message);
  console.log(message);
});