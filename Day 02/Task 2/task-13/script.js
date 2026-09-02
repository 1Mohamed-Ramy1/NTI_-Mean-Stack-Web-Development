document.getElementById('runBtn').addEventListener('click', function () {
  const age = Number(prompt('Enter your age:') || 0);

  if (age >= 18) {
    console.log('You can enter');
  } else {
    console.log('Sorry, underage');
  }
});